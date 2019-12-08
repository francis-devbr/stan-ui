import { Component, ElementRef, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { DataSource } from '@angular/cdk/collections';
import { BehaviorSubject, fromEvent, merge, Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';

import { fuseAnimations } from '@fuse/animations';
import { FuseUtils } from '@fuse/utils';

import { FrotaAbastecimentosService } from 'app/main/frota/abastecimentos/abastecimentos.service';
import { takeUntil } from 'rxjs/internal/operators';

@Component({
    selector: 'frota-abastecimentos',
    templateUrl: './abastecimentos.component.html',
    styleUrls: ['./abastecimentos.component.scss'],
    animations: fuseAnimations,
    encapsulation: ViewEncapsulation.None
})
export class FrotaAbastecimentosComponent implements OnInit {
    dataSource: FilesDataSource | null;
    displayedColumns = ['id', 'image', 'tipoCombustivel', 'qtdLitros', 'valorLitro', 'numCupomFiscal', 'active'];

    @ViewChild(MatPaginator, { static: true })
    paginator: MatPaginator;

    @ViewChild(MatSort, { static: true })
    sort: MatSort;

    @ViewChild('filter', { static: true })
    filter: ElementRef;

    private _unsubscribeAll: Subject<any>;

    constructor(
        private _frotaAbastecimentosService: FrotaAbastecimentosService
    ) {
        this._unsubscribeAll = new Subject();
    }

    ngOnInit(): void {
        this.dataSource = new FilesDataSource(this._frotaAbastecimentosService, this.paginator, this.sort);

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
        private _frotaAbastecimentosService: FrotaAbastecimentosService,
        private _matPaginator: MatPaginator,
        private _matSort: MatSort
    ) {
        super();

        this.filteredData = this._frotaAbastecimentosService.abastecimentos;
    }

    connect(): Observable<any[]> {
        const displayDataChanges = [
            this._frotaAbastecimentosService.onAbastecimentosChanged,
            this._matPaginator.page,
            this._filterChange,
            this._matSort.sortChange
        ];

        return merge(...displayDataChanges)
            .pipe(
                map(() => {
                    let data = this._frotaAbastecimentosService.abastecimentos.slice();

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


    filterData(data): any {
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
                case 'tipoCombustivel':
                    [propertyA, propertyB] = [a.name, b.name];
                    break;
                case 'qtdLitros':
                    [propertyA, propertyB] = [a.qtdLitros, b.qtdLitros];
                    break;
                case 'valorLitro':
                    [propertyA, propertyB] = [a.valorLitro, b.valorLitro];
                    break;
                case 'numCupomFiscal':
                    [propertyA, propertyB] = [a.numCupomFiscal, b.numCupomFiscal];
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
