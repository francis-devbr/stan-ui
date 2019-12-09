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
    tipoPessoa: string;
    motoristaForm: FormGroup;
    pessoaForm: FormGroup;
    enderecoForm: FormGroup;
    

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
                this.tipoPessoa = this.motorista.funcionario.tipoPessoa;

                this.motoristaForm = this.createMotoristaForm();
                this.pessoaForm = this.createPessoaForm();
                this.enderecoForm = this.createEnderecoForm();
            });
    }

    ngOnDestroy(): void {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    }

    createMotoristaForm(): FormGroup {
        return this._formBuilder.group({
            id: [this.motorista.id],
            enable: [this.motorista.enable],
            numero: [this.motorista.numero],
            categoria: [this.motorista.categoria],
            renovaEm: [this.motorista.renovaEm]
        });
    }

    createPessoaForm(): FormGroup {
        return this._formBuilder.group({
            id: [this.motorista.funcionario.id],
            nome: [this.motorista.funcionario.nome],
            cpfOuCnpj: [this.motorista.funcionario.cpfOuCnpj],
            foto: [this.motorista.funcionario.foto],
            telefone:[this.motorista.funcionario.telefone]
        });
    }

    createEnderecoForm(): FormGroup {
        return this._formBuilder.group({
            id: [this.motorista.funcionario.id],
            cep: [this.motorista.funcionario.endereco.cep],
            logradouro: [this.motorista.funcionario.endereco.logradouro],
            numero: [this.motorista.funcionario.endereco.numero],
            complemento: [this.motorista.funcionario.endereco.complemento],
            bairro: [this.motorista.funcionario.endereco.bairro],
            cidade: [this.motorista.funcionario.endereco.cidade],
            estado: [this.motorista.funcionario.endereco.estado],
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
