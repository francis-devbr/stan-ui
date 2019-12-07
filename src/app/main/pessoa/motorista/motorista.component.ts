import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Location } from '@angular/common';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { fuseAnimations } from '@fuse/animations';
import { FuseUtils } from '@fuse/utils';

import { Motorista } from 'app/main/model/motorista/motorista.model';
import { PessoaMotoristaService } from 'app/main/pessoa/motorista/motorista.service';

@Component({
    selector: 'pessoa-motorista',
    templateUrl: './motorista.component.html',
    styleUrls: ['./motorista.component.scss'],
    encapsulation: ViewEncapsulation.None,
    animations: fuseAnimations
})
export class PessoaMotoristaComponent implements OnInit, OnDestroy {
    motorista: Motorista;
    pageType: string;
    motoristaForm: FormGroup;

    // Private
    private _unsubscribeAll: Subject<any>;

    constructor(
        private _pessoaMotoristaService: PessoaMotoristaService,
        private _formBuilder: FormBuilder,
        private _location: Location,
        private _matSnackBar: MatSnackBar
    ) {
        // Set the default
        this.motorista = new Motorista();

        // Set the private defaults
        this._unsubscribeAll = new Subject();
    }

    ngOnInit(): void {
        // Subscribe to update motorista on changes
        this._pessoaMotoristaService.onMotoristaChanged
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe(motorista => {

                if (motorista) {
                    this.motorista = new Motorista(motorista);
                    this.pageType = 'edit';
                }
                else {
                    this.pageType = 'new';
                    this.motorista = new Motorista();
                }

                this.motoristaForm = this.createMotoristaForm();
            });
    }


    ngOnDestroy(): void {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    }

    createMotoristaForm(): FormGroup {
        return this._formBuilder.group({
            id              : [this.motorista.id],
            contatos        : [this.motorista.pessoa.contatos],
            enderecos       : [this.motorista.pessoa.enderecos],
            nome            : [this.motorista.pessoa.nome],
            cnpj            : [this.motorista.pessoa.cpfOuCnpj],
            cnh              : [this.motorista.cnh.numero]
        });
    }


    saveMotorista(): void {
        const data = this.motoristaForm.getRawValue();
        data.handle = FuseUtils.handleize(data.placa);

        this._pessoaMotoristaService.saveMotorista(data)
            .then(() => {
                this._pessoaMotoristaService.onMotoristaChanged.next(data);
                this._matSnackBar.open('Motorista salvo', 'OK', {
                    verticalPosition: 'top',
                    duration: 2000
                });
            });
    }


    addMotorista(): void {
        const data = this.motoristaForm.getRawValue();
        data.handle = FuseUtils.handleize(data.name);

        this._pessoaMotoristaService.addMotorista(data)
            .then(() => {

                // Trigger the subscription with new data
                this._pessoaMotoristaService.onMotoristaChanged.next(data);

                // Show the success message
                this._matSnackBar.open('Motorista adicionado', 'OK', {
                    verticalPosition: 'top',
                    duration: 2000
                });

                // Change the location with new one
                this._location.go('pessoa/motoristas/' + this.motorista.id + '/' + this.motorista.handle);
            });
    }
}
