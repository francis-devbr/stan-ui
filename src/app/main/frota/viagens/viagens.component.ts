import { Component, ElementRef, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { DataSource } from '@angular/cdk/collections';
import { BehaviorSubject, fromEvent, merge, Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';

import { fuseAnimations } from '@fuse/animations';
import { FuseUtils } from '@fuse/utils';

import { FrotaViagensService } from 'app/main/frota/viagens/viagens.service';
import { takeUntil } from 'rxjs/internal/operators';
import { viagem } from 'app/main/model/viagem/viagem.model';

@Component({
    selector: 'frota-viagens',
    templateUrl: './viagens.component.html',
    styleUrls: ['./viagens.component.scss'],
    animations: fuseAnimations,
    encapsulation: ViewEncapsulation.None
})
export class FrotaviagensComponent implements OnInit {
    dataSource: FilesDataSource | null;
    displayedColumns = ['id', 'image', 'veiculo', 'kmInicial', 'kmFinal', 'tipoViagem', 'active'];

    @ViewChild(MatPaginator, { static: true })
    paginator: MatPaginator;

    @ViewChild(MatSort, { static: true })
    sort: MatSort;

    @ViewChild('filter', { static: true })
    filter: ElementRef;

    private _unsubscribeAll: Subject<any>;

    constructor(
        private _frotaViagensService: FrotaViagensService
    ) {
        this._unsubscribeAll = new Subject();
    }

    ngOnInit(): void {
        this.dataSource = new FilesDataSource(this._frotaViagensService, this.paginator, this.sort);

        fromEvent(this.filter.nativeElement, 'keyup')
            .pipe(
                takeUntil(this._unsubscribeAll),
                debounceTime(150),
                distinctUntilChanged()
            )
            .subscribe(() => {
                if (!this.dataSource) {
                    return;
                }

                this.dataSource.filter = this.filter.nativeElement.value;
            });
    }
}

export class FilesDataSource extends DataSource<any>
{
    private _filterChange = new BehaviorSubject('');
    private _filteredDataChange = new BehaviorSubject('');

    constructor(
        private _frotaViagensService: FrotaViagensService,
        private _matPaginator: MatPaginator,
        private _matSort: MatSort
    ) {
        super();

        this.filteredData = this._frotaViagensService.viagens;
    }

    connect(): Observable<any[]> {
        const displayDataChanges = [
            this._frotaViagensService.onViagensChanged,
            this._matPaginator.page,
            this._filterChange,
            this._matSort.sortChange
        ];

        return merge(...displayDataChanges)
            .pipe(
                map(() => {
                    let data = this._frotaViagensService.viagens.slice();

                    data = this.filterData(data);

                    this.filteredData = [...data];

                    data = this.sortData(data);

                    // Grab the page's slice of data.
                    const startIndex = this._matPaginator.pageIndex * this._matPaginator.pageSize;
                    return data.splice(startIndex, this._matPaginator.pageSize);
                }
                ));
    }


    get filteredData(): any {
        return this._filteredDataChange.value;
    }

    set filteredData(value: any) {
        this._filteredDataChange.next(value);
    }

    // Filter
    get filter(): string {
        return this._filterChange.value;
    }

    set filter(filter: string) {
        this._filterChange.next(filter);
    }

    filterData(data): viagem[] {
        if (!this.filter) {
            return data;
        }
        return FuseUtils.filterArrayByString(data, this.filter);
    }

    sortData(data): any[] {
        if (!this._matSort.active || this._matSort.direction === '') {
            return data;
        }

        return data.sort((a, b) => {
            let propertyA: number | string = '';
            let propertyB: number | string = '';

            switch (this._matSort.active) {
                case 'id':
                    [propertyA, propertyB] = [a.id, b.id];
                    break;
                case 'veiculo':
                    [propertyA, propertyB] = [a.veiculo, b.veiculo];
                    break;
                case 'kmInicial':
                    [propertyA, propertyB] = [a.kmInicial, b.kmInicial];
                    break;

                case 'kmFinal':
                    [propertyA, propertyB] = [a.kmFinal, b.kmFinal];
                    break;
                case 'tipoViagem':
                    [propertyA, propertyB] = [a.tipoViagem, b.tipoViagem];
                    break;
                case 'ativo':
                    [propertyA, propertyB] = [a.enable, b.enable];
                    break;
            }

            const valueA = isNaN(+propertyA) ? propertyA : +propertyA;
            const valueB = isNaN(+propertyB) ? propertyB : +propertyB;

            return (valueA < valueB ? -1 : 1) * (this._matSort.direction === 'asc' ? 1 : -1);
        });
    }


    disconnect(): void {
    }
}
