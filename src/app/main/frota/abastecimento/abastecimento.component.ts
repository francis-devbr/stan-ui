import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Location } from '@angular/common';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { fuseAnimations } from '@fuse/animations';
import { FuseUtils } from '@fuse/utils';

import { abastecimento } from 'app/main/frota/abastecimento/abastecimento.model';
import { FrotaabastecimentoService } from 'app/main/frota/abastecimento/abastecimento.service';

@Component({
    selector     : 'frota-abastecimento',
    templateUrl  : './abastecimento.component.html',
    styleUrls    : ['./abastecimento.component.scss'],
    encapsulation: ViewEncapsulation.None,
    animations   : fuseAnimations
})
export class FrotaAbastecimentoComponent implements OnInit, OnDestroy
{
    abastecimento: abastecimento;
    pageType: string;
    abastecimentoForm: FormGroup;

    // Private
    private _unsubscribeAll: Subject<any>;

    /**
     * Constructor
     *
     * @param {FrotaAbastecimentoService} _frotaAbastecimentoService
     * @param {FormBuilder} _formBuilder
     * @param {Location} _location
     * @param {MatSnackBar} _matSnackBar
     */
    constructor(
        private _frotaAbastecimentoService: FrotaAbastecimentoService,
        private _formBuilder: FormBuilder,
        private _location: Location,
        private _matSnackBar: MatSnackBar
    )
    {
        // Set the default
        this.abastecimento = new abastecimento();

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
        // Subscribe to update abastecimento on changes
        this._frotaAbastecimentoService.onAbastecimentoChanged
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe(abastecimento => {

                if ( abastecimento )
                {
                    this.abastecimento = new Abastecimento(abastecimento);
                    this.pageType = 'edit';
                }
                else
                {
                    this.pageType = 'new';
                    this.abastecimento = new Abastecimento();
                }

                this.abastecimentoForm = this.createAbastecimentoForm();
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
     * Create Abastecimento form
     *
     * @returns {FormGroup}
     */
    createAbastecimentoForm(): FormGroup
    {
        return this._formBuilder.group({
            id              : [this.abastecimento.id],
            name            : [this.abastecimento.name],
            handle          : [this.abastecimento.handle],
            description     : [this.abastecimento.description],
            categories      : [this.abastecimento.categories],
            tags            : [this.abastecimento.tags],
            images          : [this.abastecimento.images],
            priceTaxExcl    : [this.abastecimento.priceTaxExcl],
            priceTaxIncl    : [this.abastecimento.priceTaxIncl],
            taxRate         : [this.abastecimento.taxRate],
            comparedPrice   : [this.abastecimento.comparedPrice],
            quantity        : [this.abastecimento.quantity],
            sku             : [this.abastecimento.sku],
            width           : [this.abastecimento.width],
            height          : [this.abastecimento.height],
            depth           : [this.abastecimento.depth],
            weight          : [this.abastecimento.weight],
            extraShippingFee: [this.abastecimento.extraShippingFee],
            active          : [this.abastecimento.active]
        });
    }

    /**
     * Save abastecimento
     */
    saveAbastecimento(): void
    {
        const data = this.abastecimentoForm.getRawValue();
        data.handle = FuseUtils.handleize(data.name);

        this._frotaAbastecimentoService.saveAbastecimento(data)
            .then(() => {

                // Trigger the subscription with new data
                this._frotaAbastecimentoService.onabAstecimentoChanged.next(data);

                // Show the success message
                this._matSnackBar.open('Abastecimento saved', 'OK', {
                    verticalPosition: 'top',
                    duration        : 2000
                });
            });
    }

    /**
     * Add abastecimento
     */
    addAbastecimento(): void
    {
        const data = this.abastecimentoForm.getRawValue();
        data.handle = FuseUtils.handleize(data.name);

        this._frotaAbastecimentoService.addabastecimento(data)
            .then(() => {

                // Trigger the subscription with new data
                this._frotaAbastecimentoService.onabastecimentoChanged.next(data);

                // Show the success message
                this._matSnackBar.open('abastecimento added', 'OK', {
                    verticalPosition: 'top',
                    duration        : 2000
                });

                // Change the location with new one
                this._location.go('frota/abastecimentos/' + this.abastecimento.id + '/' + this.abastecimento.handle);
            });
    }
}
