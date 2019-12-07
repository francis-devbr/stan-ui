import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Location } from '@angular/common';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { fuseAnimations } from '@fuse/animations';
import { FuseUtils } from '@fuse/utils';

import { Veiculo } from 'app/main/model/veiculo/veiculo.model';
import { FrotaVeiculoService } from 'app/main/frota/veiculo/veiculo.service';

@Component({
    selector: 'frota-veiculo',
    templateUrl: './veiculo.component.html',
    styleUrls: ['./veiculo.component.scss'],
    encapsulation: ViewEncapsulation.None,
    animations: fuseAnimations
})
export class FrotaVeiculoComponent implements OnInit, OnDestroy {
    veiculo: Veiculo;
    pageType: string;
    veiculoForm: FormGroup;

    // Private
    private _unsubscribeAll: Subject<any>;

    constructor(
        private _frotaVeiculoService: FrotaVeiculoService,
        private _formBuilder: FormBuilder,
        private _location: Location,
        private _matSnackBar: MatSnackBar
    ) {
        // Set the default
        this.veiculo = new Veiculo();

        // Set the private defaults
        this._unsubscribeAll = new Subject();
    }

    ngOnInit(): void {
        // Subscribe to update veiculo on changes
        this._frotaVeiculoService.onVeiculoChanged
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe(veiculo => {

                if (veiculo) {
                    this.veiculo = new Veiculo(veiculo);
                    this.pageType = 'edit';
                }
                else {
                    this.pageType = 'new';
                    this.veiculo = new Veiculo();
                }

                this.veiculoForm = this.createVeiculoForm();
            });
    }


    ngOnDestroy(): void {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    }

    createVeiculoForm(): FormGroup {
        return this._formBuilder.group({
            id: [this.veiculo.id],
            placa: [this.veiculo.placa],
            handle: [this.veiculo.handle],
            chassi: [this.veiculo.chassi],
            renavam: [this.veiculo.renavam],
            marca: [this.veiculo.marca],
            anoFabricacao: [this.veiculo.anoFabricacao],
            anoModelo: [this.veiculo.anoModelo],
            cor: [this.veiculo.cor],
            tipoCombustivel: [this.veiculo.tipoCombustivel],
            categoria: [this.veiculo.categoria],
            valorPago: [this.veiculo.valorPago],
            kmInicial: [this.veiculo.kmInicial],
            kmAtual: [this.veiculo.kmAtual],
            pneuTrocadoEm: [this.veiculo.pneuTrocadoEm],
            mesIpva: [this.veiculo.mesIpva],
            enable: [this.veiculo.enable]
        });
    }


    saveVeiculo(): void {
        const data = this.veiculoForm.getRawValue();
        data.handle = FuseUtils.handleize(data.placa);

        this._frotaVeiculoService.saveVeiculo(data)
            .then(() => {
                this._frotaVeiculoService.onVeiculoChanged.next(data);
                this._matSnackBar.open('Veiculo salvo', 'OK', {
                    verticalPosition: 'top',
                    duration: 2000
                });
            });
    }


    addVeiculo(): void {
        const data = this.veiculoForm.getRawValue();
        data.handle = FuseUtils.handleize(data.name);

        this._frotaVeiculoService.addVeiculo(data)
            .then(() => {

                // Trigger the subscription with new data
                this._frotaVeiculoService.onVeiculoChanged.next(data);

                // Show the success message
                this._matSnackBar.open('Veiculo adicionado', 'OK', {
                    verticalPosition: 'top',
                    duration: 2000
                });

                // Change the location with new one
                this._location.go('frota/veiculos/' + this.veiculo.id + '/' + this.veiculo.handle);
            });
    }
}
