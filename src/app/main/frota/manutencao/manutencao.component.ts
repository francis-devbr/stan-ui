import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Location } from '@angular/common';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { fuseAnimations } from '@fuse/animations';
import { FuseUtils } from '@fuse/utils';

import { Manutencao } from 'app/main/frota/manutencao/manutencao.model';
import { FrotaManutencaoService } from 'app/main/frota/manutencao/manutencao.service';

@Component({
    selector: 'frota-manutencao',
    templateUrl: './manutencao.component.html',
    styleUrls: ['./manutencao.component.scss'],
    encapsulation: ViewEncapsulation.None,
    animations: fuseAnimations
})
export class FrotaManutencaoComponent implements OnInit, OnDestroy {
    manutencao: Manutencao;
    pageType: string;
    manutencaoForm: FormGroup;

    // Private
    private _unsubscribeAll: Subject<any>;

    /**
     * Constructor
     *
     * @param {FrotaManutencaoService} _frotaManutencaoService
     * @param {FormBuilder} _formBuilder
     * @param {Location} _location
     * @param {MatSnackBar} _matSnackBar
     */
    constructor(
        private _frotaManutencaoService: FrotaManutencaoService,
        private _formBuilder: FormBuilder,
        private _location: Location,
        private _matSnackBar: MatSnackBar
    ) {
        // Set the default
        this.manutencao = new Manutencao();

        // Set the private defaults
        this._unsubscribeAll = new Subject();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
    * On init
    */
    ngOnInit(): void {
        // Subscribe to update manutencao on changes
        this._frotaManutencaoService.onManutencaoChanged
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe(manutencao => {

                if (manutencao) {
                    this.manutencao = new Manutencao(manutencao);
                    this.pageType = 'edit';
                }
                else {
                    this.pageType = 'new';
                    this.manutencao = new Manutencao();
                }

                this.manutencaoForm = this.createManutencaoForm();
            });
    }

    /**
    * On destroy
    */
    ngOnDestroy(): void {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
    * Create manutencao form
    *
    * @returns {FormGroup}
    */
    createManutencaoForm(): FormGroup {
        return this._formBuilder.group({
            id: [this.manutencao.id],
            name: [this.manutencao.name],
            handle: [this.manutencao.handle],
            description: [this.manutencao.description],
            categories: [this.manutencao.categories],
            tags: [this.manutencao.tags],
            images: [this.manutencao.images],
            planoManutencao: [this.manutencao.planoManutencao],
            planoPeriodico: [this.manutencao.planoPeriodico],
            responsavel: [this.manutencao.responsavel],
            veiculo: [this.manutencao.veiculo],
            dataInicial: [this.manutencao.dataInicial],
            dataFinal: [this.manutencao.dataFinal],
            peca: [this.manutencao.peca],
            tipoManutencao: [this.manutencao.tipoManutencao],
            motorista: [this.manutencao.motorista],
            active: [this.manutencao.active]
        });
    }

    /**
    * Save manutencao
    */
    saveManutencao(): void {
        const data = this.manutencaoForm.getRawValue();
        data.handle = FuseUtils.handleize(data.name);

        this._frotaManutencaoService.saveManutencao(data)
            .then(() => {

                // Trigger the subscription with new data
                this._frotaManutencaoService.onManutencaoChanged.next(data);

                // Show the success message
                this._matSnackBar.open('Manutencao salva', 'OK', {
                    verticalPosition: 'top',
                    duration: 2000
                });
            });
    }

    /**
    * Add manutencao
    */
    addManutencao(): void {
        const data = this.manutencaoForm.getRawValue();
        data.handle = FuseUtils.handleize(data.name);

        this._frotaManutencaoService.addManutencao(data)
            .then(() => {

                // Trigger the subscription with new data
                this._frotaManutencaoService.onManutencaoChanged.next(data);

                // Show the success message
                this._matSnackBar.open('Manutencao added', 'OK', {
                    verticalPosition: 'top',
                    duration: 2000
                });

                // Change the location with new one
                this._location.go('frota/manutencoes/' + this.manutencao.id + '/' + this.manutencao.handle);
            });
    }
}
