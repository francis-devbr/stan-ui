import { Component, ElementRef, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { DataSource } from '@angular/cdk/collections';
import { BehaviorSubject, fromEvent, merge, Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';

import { fuseAnimations } from '@fuse/animations';
import { FuseUtils } from '@fuse/utils';

import { FrotaVeiculosService } from 'app/main/frota/veiculos/veiculos.service';
import { takeUntil } from 'rxjs/internal/operators';
import { Veiculo } from 'app/main/model/veiculo/veiculo.model';

@Component({
    selector: 'frota-veiculos',
    templateUrl: './veiculos.component.html',
    styleUrls: ['./veiculos.component.scss'],
    animations: fuseAnimations,
    encapsulation: ViewEncapsulation.None
})
export class FrotaVeiculosComponent implements OnInit {
    dataSource: FilesDataSource | null;
    displayedColumns = ['id', 'image', 'marca', 'modelo', 'categoria', 'placa', 'active'];

    @ViewChild(MatPaginator, { static: true })
    paginator: MatPaginator;

    @ViewChild(MatSort, { static: true })
    sort: MatSort;

    @ViewChild('filter', { static: true })
    filter: ElementRef;

    private _unsubscribeAll: Subject<any>;

    constructor(
        private _frotaVeiculosService: FrotaVeiculosService
    ) {
        this._unsubscribeAll = new Subject();
    }

    ngOnInit(): void {
        this.dataSource = new FilesDataSource(this._frotaVeiculosService, this.paginator, this.sort);

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
        private _frotaVeiculosService: FrotaVeiculosService,
        private _matPaginator: MatPaginator,
        private _matSort: MatSort
    ) {
        super();

        this.filteredData = this._frotaVeiculosService.veiculos;
    }

    connect(): Observable<any[]> {
        const displayDataChanges = [
            this._frotaVeiculosService.onVeiculosChanged,
            this._matPaginator.page,
            this._filterChange,
            this._matSort.sortChange
        ];

        return merge(...displayDataChanges)
            .pipe(
                map(() => {
                    let data = this._frotaVeiculosService.veiculos.slice();

                    data = this.filterData(data);

                    this.filteredData = [...data];

                    data = this.sortData(data);

                    // Grab the page's slice of data.
                    const startIndex = this._matPaginator.pageIndex * this._matPaginator.pageSize;
                    return data.splice(startIndex, this._matPaginator.pageSize);
                }
                ));
    }


    get filteredData(): any 
    {
        return this._filteredDataChange.value;
    }

    set filteredData(value: any) 
    {
        this._filteredDataChange.next(value);
    }

    // Filter
    get filter(): string 
    {
        return this._filterChange.value;
    }

    set filter(filter: string) 
    {
        this._filterChange.next(filter);
    }

    filterData(data): Veiculo[] {
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
                case 'marca':
                    [propertyA, propertyB] = [a.marca, b.marca];
                    break;
                case 'modelo':
                    [propertyA, propertyB] = [a.modelo, b.modelo];
                    break;

                case 'categoria':
                    [propertyA, propertyB] = [a.categoria, b.categoria];
                    break;
                case 'placa':
                    [propertyA, propertyB] = [a.placa, b.placa];
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
