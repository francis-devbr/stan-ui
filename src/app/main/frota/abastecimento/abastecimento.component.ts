import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Location } from '@angular/common';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { fuseAnimations } from '@fuse/animations';
import { FuseUtils } from '@fuse/utils';


import { FrotaAbastecimentoService } from 'app/main/frota/abastecimento/abastecimento.service';
import { Abastecimento } from 'app/main/model/veiculo/abastecimento.model';

@Component({
    selector: 'frota-abastecimento',
    templateUrl: './abastecimento.component.html',
    styleUrls: ['./abastecimento.component.scss'],
    encapsulation: ViewEncapsulation.None,
    animations: fuseAnimations
})
export class FrotaAbastecimentoComponent implements OnInit, OnDestroy {
    abastecimento: Abastecimento;
    pageType: string;
    abastecimentoForm: FormGroup;

    // Private
    private _unsubscribeAll: Subject<any>;

    constructor(
        private _frotaAbastecimentoService: FrotaAbastecimentoService,
        private _formBuilder: FormBuilder,
        private _location: Location,
        private _matSnackBar: MatSnackBar
    ) {
        // Set the default
        this.abastecimento = new Abastecimento();

        // Set the private defaults
        this._unsubscribeAll = new Subject();
    }

    ngOnInit(): void {
        // Subscribe to update abastecimento on changes
        this._frotaAbastecimentoService.onAbastecimentoChanged
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe(abastecimento => {

                if (abastecimento) {
                    this.abastecimento = new Abastecimento(abastecimento);
                    this.pageType = 'edit';
                }
                else {
                    this.pageType = 'new';
                    this.abastecimento = new Abastecimento();
                }

                this.abastecimentoForm = this.createAbastecimentoForm();
            });
    }

    ngOnDestroy(): void {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    }

    createAbastecimentoForm(): FormGroup {
        return this._formBuilder.group({
            id: [this.abastecimento.id],
            handle: [this.abastecimento.handle],            
            qtdLitros: [this.abastecimento.litro],
            valorLitro: [this.abastecimento.valor],
            valorTotal: [this.abastecimento.litro * this.abastecimento.valor],
            numCupomFiscal: [this.abastecimento.cupom],
            data: [this.abastecimento.abastecidoEm],
            kmInicial: [this.abastecimento.km]
        });
    }

        
    saveAbastecimento(): void {
        const data = this.abastecimentoForm.getRawValue();
        data.handle = FuseUtils.handleize(data.veiculo.name);

        this._frotaAbastecimentoService.saveAbastecimento(data)
            .then(() => {
                this._frotaAbastecimentoService.onAbastecimentoChanged.next(data);
                this._matSnackBar.open('Abastecimento salvo', 'OK', {
                    verticalPosition: 'top',
                    duration: 2000
                });
            });
    }

    addAbastecimento(): void {
        const data = this.abastecimentoForm.getRawValue();
        data.handle = FuseUtils.handleize(data.veiculo.name);

        this._frotaAbastecimentoService.addAbastecimento(data)
            .then(() => {

                // Trigger the subscription with new data
                this._frotaAbastecimentoService.onAbastecimentoChanged.next(data);

                // Show the success message
                this._matSnackBar.open('Abastecimento adicionado', 'OK', {
                    verticalPosition: 'top',
                    duration: 2000
                });

                // Change the location with new one
                this._location.go('frota/abastecimentos/' + this.abastecimento.id + '/' + this.abastecimento.handle);
            });
    }
}
