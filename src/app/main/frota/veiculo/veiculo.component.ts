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
import { Marca } from 'app/main/model/veiculo/marca.model';
import { TipoCombustivel } from 'app/main/model/veiculo/tipoCombustivel.model';
import { Categoria } from 'app/main/model/veiculo/categoria.model';
import { EmpresaService } from 'app/main/empresa/empresa.service';
import { Empresa } from 'app/main/model/empresa/empresa.model';

@Component({
    selector: 'frota-veiculo',
    templateUrl: './veiculo.component.html',
    styleUrls: ['./veiculo.component.scss'],
    encapsulation: ViewEncapsulation.None,
    animations: fuseAnimations
})
export class FrotaVeiculoComponent implements OnInit, OnDestroy {
    veiculo: Veiculo;
    marcas: Marca[];
    combustiveis: TipoCombustivel[];
    categorias: Categoria[];
    pageType: string;
    veiculoForm: FormGroup;
    empresa: Empresa;

    // Private
    private _unsubscribeAll: Subject<any>;

    constructor(
        private _frotaVeiculoService: FrotaVeiculoService,
        private _empresaService: EmpresaService,
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

        this._frotaVeiculoService.onMarcaChanged
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe(marcas => {

                if (marcas) {
                    this.marcas = marcas;
                }
                else {
                    this.marcas = marcas;
                }

            });


        this._frotaVeiculoService.onCombustivelChanged
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe(combustiveis => {

                if (combustiveis) {
                    this.combustiveis = combustiveis;
                }
                else {
                    this.combustiveis = combustiveis;
                }

            });

        this._frotaVeiculoService.onCategoriaChanged
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe(categorias => {

                if (categorias) {
                    this.categorias = categorias;
                }
                else {
                    this.categorias = categorias;
                }

            });

        if (this.pageType == 'new') {
            this._empresaService.getEmpresa()
                .subscribe(
                    empresa => {
                        this.empresa = empresa;
                    });
        }
    }

    ngOnDestroy(): void {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    }

    createVeiculoForm(): FormGroup {
        return this._formBuilder.group({
            id: [this.veiculo.id],
            nome: [this.veiculo.nome],
            placa: [this.veiculo.placa],
            handle: [this.veiculo.handle],
            chassi: [this.veiculo.chassi],
            renavam: [this.veiculo.renavam],
            marca: [this.veiculo.marca.id],
            anoFabricacao: [this.veiculo.anoFabricacao],
            anoModelo: [this.veiculo.anoModelo],
            cor: [this.veiculo.cor],
            tipoCombustivel: [this.veiculo.tipoCombustivel.id],
            categoria: [this.veiculo.categoria.id],
            valorPago: [this.veiculo.valorPago],
            kmInicial: [this.veiculo.kmInicial],
            kmAtual: [this.veiculo.kmAtual],
            pneuTrocadoEm: [this.veiculo.pneuTrocadoEm],
            mesIpva: [this.veiculo.mesIpva],
            enable: [this.veiculo.enable],
            empresa: [this.veiculo.empresa]
        });
    }


    saveVeiculo(): void {
        const data = this.veiculoForm.getRawValue();
        data.handle = FuseUtils.handleize(data.nome);
        data.empresa = this.veiculo.empresa;
        data.categoria = this.categorias.find(categoria => categoria.id == data.categoria);
        data.marca = this.marcas.find(marca => marca.id == data.marca);
        data.tipoCombustivel = this.combustiveis.find(tipoCombustivel => tipoCombustivel.id == data.tipoCombustivel);
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
        data.handle = FuseUtils.handleize(data.nome);
        data.empresa = this.empresa;
        data.categoria = this.categorias.find(categoria => categoria.id == data.categoria);
        data.marca = this.marcas.find(marca => marca.id == data.marca);
        data.tipoCombustivel = this.combustiveis.find(tipoCombustivel => tipoCombustivel.id == data.tipoCombustivel);
        console.log(data);

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
