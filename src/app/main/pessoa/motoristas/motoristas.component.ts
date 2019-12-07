import { Component, ElementRef, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { DataSource } from '@angular/cdk/collections';
import { BehaviorSubject, fromEvent, merge, Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';

import { fuseAnimations } from '@fuse/animations';
import { FuseUtils } from '@fuse/utils';

import { PessoaMotoristasService } from 'app/main/pessoa/motoristas/motoristas.service';
import { takeUntil } from 'rxjs/internal/operators';
import { Motorista } from 'app/main/model/motorista/motorista.model';

@Component({
    selector: 'pessoa-motoristas',
    templateUrl: './motoristas.component.html',
    styleUrls: ['./motoristas.component.scss'],
    animations: fuseAnimations,
    encapsulation: ViewEncapsulation.None
})
export class PessoaMotoristasComponent implements OnInit {
    dataSource: FilesDataSource | null;
    displayedColumns = ['id', 'image', 'nome', 'cnh', 'validade', 'categoria', 'active'];

    @ViewChild(MatPaginator, { static: true })
    paginator: MatPaginator;

    @ViewChild(MatSort, { static: true })
    sort: MatSort;

    @ViewChild('filter', { static: true })
    filter: ElementRef;

    private _unsubscribeAll: Subject<any>;

    constructor(
        private _pessoaMotoristasService: PessoaMotoristasService
    ) {
        this._unsubscribeAll = new Subject();
    }

    ngOnInit(): void {
        this.dataSource = new FilesDataSource(this._pessoaMotoristasService, this.paginator, this.sort);

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
        private _pessoaMotoristasService: PessoaMotoristasService,
        private _matPaginator: MatPaginator,
        private _matSort: MatSort
    ) {
        super();

        this.filteredData = this._pessoaMotoristasService.motoristas;
    }

    connect(): Observable<any[]> {
        const displayDataChanges = [
            this._pessoaMotoristasService.onMotoristasChanged,
            this._matPaginator.page,
            this._filterChange,
            this._matSort.sortChange
        ];

        return merge(...displayDataChanges)
            .pipe(
                map(() => {
                    let data = this._pessoaMotoristasService.motoristas.slice();

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

    filterData(data): Motorista[] {
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
                case 'nome':
                    [propertyA, propertyB] = [a.nome, b.nome];
                    break;
                case 'cnh':
                    [propertyA, propertyB] = [a.cnh, b.cnh];
                    break;
                case 'validade':
                    [propertyA, propertyB] = [a.validade, b.validade];
                    break;

                case 'categoria':
                    [propertyA, propertyB] = [a.categoria, b.categoria];
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
