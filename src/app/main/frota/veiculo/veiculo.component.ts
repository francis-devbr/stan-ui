import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Location } from '@angular/common';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { fuseAnimations } from '@fuse/animations';
import { FuseUtils } from '@fuse/utils';

import { Veiculo } from 'app/main/frota/veiculo/veiculo.model';
import { FrotaVeiculoService } from 'app/main/frota/veiculo/veiculo.service';

@Component({
    selector     : 'frota-veiculo',
    templateUrl  : './veiculo.component.html',
    styleUrls    : ['./veiculo.component.scss'],
    encapsulation: ViewEncapsulation.None,
    animations   : fuseAnimations
})
export class FrotaVeiculoComponent implements OnInit, OnDestroy
{
    veiculo: Veiculo;
    pageType: string;
    veiculoForm: FormGroup;

    // Private
    private _unsubscribeAll: Subject<any>;

    /**
     * Constructor
     *
     * @param {FrotaVeiculoService} _frotaVeiculoService
     * @param {FormBuilder} _formBuilder
     * @param {Location} _location
     * @param {MatSnackBar} _matSnackBar
     */
    constructor(
        private _frotaVeiculoService: FrotaVeiculoService,
        private _formBuilder: FormBuilder,
        private _location: Location,
        private _matSnackBar: MatSnackBar
    )
    {
        // Set the default
        this.veiculo = new Veiculo();

        // Set the private defaults
        this._unsubscribeAll = new Subject();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void
    {
        // Subscribe to update veiculo on changes
        this._frotaVeiculoService.onVeiculoChanged
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe(veiculo => {

                if ( veiculo )
                {
                    this.veiculo = new Veiculo(veiculo);
                    this.pageType = 'edit';
                }
                else
                {
                    this.pageType = 'new';
                    this.veiculo = new Veiculo();
                }

                this.veiculoForm = this.createVeiculoForm();
            });
    }

    /**
     * On destroy
     */
    ngOnDestroy(): void
    {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Create veiculo form
     *
     * @returns {FormGroup}
     */
    createVeiculoForm(): FormGroup
    {
        return this._formBuilder.group({
            id              : [this.veiculo.id],
            name            : [this.veiculo.name],
            handle          : [this.veiculo.handle],
            description     : [this.veiculo.description],
            categories      : [this.veiculo.categories],
            tags            : [this.veiculo.tags],
            images          : [this.veiculo.images],
            priceTaxExcl    : [this.veiculo.priceTaxExcl],
            priceTaxIncl    : [this.veiculo.priceTaxIncl],
            taxRate         : [this.veiculo.taxRate],
            comparedPrice   : [this.veiculo.comparedPrice],
            quantity        : [this.veiculo.quantity],
            sku             : [this.veiculo.sku],
            width           : [this.veiculo.width],
            height          : [this.veiculo.height],
            depth           : [this.veiculo.depth],
            weight          : [this.veiculo.weight],
            extraShippingFee: [this.veiculo.extraShippingFee],
            active          : [this.veiculo.active]
        });
    }

    /**
     * Save veiculo
     */
    saveVeiculo(): void
    {
        const data = this.veiculoForm.getRawValue();
        data.handle = FuseUtils.handleize(data.name);

        this._frotaVeiculoService.saveVeiculo(data)
            .then(() => {

                // Trigger the subscription with new data
                this._frotaVeiculoService.onVeiculoChanged.next(data);

                // Show the success message
                this._matSnackBar.open('Veiculo saved', 'OK', {
                    verticalPosition: 'top',
                    duration        : 2000
                });
            });
    }

    /**
     * Add veiculo
     */
    addVeiculo(): void
    {
        const data = this.veiculoForm.getRawValue();
        data.handle = FuseUtils.handleize(data.name);

        this._frotaVeiculoService.addVeiculo(data)
            .then(() => {

                // Trigger the subscription with new data
                this._frotaVeiculoService.onVeiculoChanged.next(data);

                // Show the success message
                this._matSnackBar.open('Veiculo added', 'OK', {
                    verticalPosition: 'top',
                    duration        : 2000
                });

                // Change the location with new one
                this._location.go('frota/veiculos/' + this.veiculo.id + '/' + this.veiculo.handle);
            });
    }
}
