import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Location } from '@angular/common';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { fuseAnimations } from '@fuse/animations';
import { FuseUtils } from '@fuse/utils';

import { Viagem } from 'app/main/model/viagem/viagem.model';
import { FrotaViagemService } from 'app/main/frota/viagem/viagem.service';

@Component({
    selector: 'frota-viagem',
    templateUrl: './viagem.component.html',
    styleUrls: ['./viagem.component.scss'],
    encapsulation: ViewEncapsulation.None,
    animations: fuseAnimations
})
export class FrotaViagemComponent implements OnInit, OnDestroy {
    viagem: Viagem;
    pageType: string;
    viagemForm: FormGroup;

    // Private
    private _unsubscribeAll: Subject<any>;

    constructor(
        private _frotaViagemService: FrotaViagemService,
        private _formBuilder: FormBuilder,
        private _location: Location,
        private _matSnackBar: MatSnackBar
    ) {
        // Set the default
        this.viagem = new Viagem();

        // Set the private defaults
        this._unsubscribeAll = new Subject();
    }

    ngOnInit(): void {
        // Subscribe to update viagem on changes
        this._frotaViagemService.onViagemChanged
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe(viagem => {

                if (viagem) {
                    this.viagem = new Viagem(viagem);
                    this.pageType = 'edit';
                }
                else {
                    this.pageType = 'new';
                    this.viagem = new Viagem();
                }

                this.viagemForm = this.createViagemForm();
            });
    }


    ngOnDestroy(): void {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    }

    createViagemForm(): FormGroup {
        return this._formBuilder.group({
            id: [this.viagem.id],
            handle: [this.viagem.handle],
            tipoViagem: [this.viagem.tipoViagem],
            descricaoViagem: [this.viagem.descricaoViagem],
            statusViagem: [this.viagem.statusViagem],
            veiculo: [this.viagem.veiculo],
            kmInicial: [this.viagem.kmInicial],
            kmFinal: [this.viagem.kmFinal],
            saida: [this.viagem.saida],
            retorno: [this.viagem.retorno],
            destinoInicial: [this.viagem.destinoInicial],
            destinoFinal: [this.viagem.destinoFinal],
            active: [this.viagem.active]
        });
    }


    saveViagem(): void {
        const data = this.viagemForm.getRawValue();
        data.handle = FuseUtils.handleize(data.tipoViagem);

        this._frotaViagemService.saveViagem(data)
            .then(() => {
                this._frotaViagemService.onViagemChanged.next(data);
                this._matSnackBar.open('Viagem salva', 'OK', {
                    verticalPosition: 'top',
                    duration: 2000
                });
            });
    }


    addViagem(): void {
        const data = this.viagemForm.getRawValue();
        data.handle = FuseUtils.handleize(data.name);

        this._frotaViagemService.addViagem(data)
            .then(() => {

                // Trigger the subscription with new data
                this._frotaViagemService.onViagemChanged.next(data);

                // Show the success message
                this._matSnackBar.open('Viagem adicionada', 'OK', {
                    verticalPosition: 'top',
                    duration: 2000
                });

                // Change the location with new one
                this._location.go('frota/viagens/' + this.viagem.id + '/' + this.viagem.handle);
            });
    }
}
