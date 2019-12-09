import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { Veiculo } from 'app/main/model/veiculo/veiculo.model';
import { environment } from 'environments/environment';
import { Marca } from 'app/main/model/veiculo/marca.model';
import { TipoCombustivel } from 'app/main/model/veiculo/tipoCombustivel.model';
import { Categoria } from 'app/main/model/veiculo/categoria.model';

@Injectable()
export class FrotaVeiculoService implements Resolve<any>
{
    static CONTEXT = environment.apiUrlRest + "/api/veiculos/" + JSON.parse(localStorage.getItem("FUNCIONARIO")).empresa.cpfOuCnpj;

    routeParams: any;
    veiculo: Veiculo;
    marcas: Marca[];
    categorias: Categoria[];
    combustiveis: TipoCombustivel[]
    onVeiculoChanged: BehaviorSubject<any>;
    onMarcaChanged: BehaviorSubject<any>;
    onCombustivelChanged: BehaviorSubject<any>;
    onCategoriaChanged: BehaviorSubject<any>;
    constructor(
        private _httpClient: HttpClient
    ) {
        // Set the defaults
        this.onVeiculoChanged = new BehaviorSubject({});
        this.onMarcaChanged = new BehaviorSubject([]);
        this.onCombustivelChanged = new BehaviorSubject([]);
        this.onCategoriaChanged = new BehaviorSubject([]);
    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any {
        this.routeParams = route.params;

        return new Promise((resolve, reject) => {

            Promise.all([
                this.getVeiculo(),
                this.getMarcas(),
                this.getTipoCombustiveis(),
                this.getTipoCategorias()
            ]).then(
                () => {
                    resolve();
                },
                reject
            );
        });
    }

    getTipoCategorias(): Promise<any> {
        return new Promise((resolve, reject) => {

            this._httpClient.get(environment.apiUrlRest + '/api/veiculos/categorias')
                .subscribe((response: any) => {
                    this.categorias = response;
                    this.onCategoriaChanged.next(this.categorias);
                    resolve(response);
                }, reject);

        });
    }

    getTipoCombustiveis(): Promise<any> {
        return new Promise((resolve, reject) => {

            this._httpClient.get(environment.apiUrlRest + '/api/veiculos/combustiveis')
                .subscribe((response: any) => {
                    this.combustiveis = response;
                    this.onCombustivelChanged.next(this.combustiveis);
                    resolve(response);
                }, reject);

        });
    }

    getMarcas(): Promise<any> {
        return new Promise((resolve, reject) => {


            this._httpClient.get(environment.apiUrlRest + '/api/veiculos/marcas')
                .subscribe((response: any) => {
                    this.marcas = response;
                    this.onMarcaChanged.next(this.marcas);
                    resolve(response);
                }, reject);

        });
    }


    getVeiculo(): Promise<any> {
        return new Promise((resolve, reject) => {
            if (this.routeParams.id === 'new') {
                this.onVeiculoChanged.next(false);
                resolve(false);
            }
            else {
                this._httpClient.get(FrotaVeiculoService.CONTEXT + '/' + this.routeParams.id)
                    .subscribe((response: any) => {
                        this.veiculo = response;
                        this.onVeiculoChanged.next(this.veiculo);
                        resolve(response);
                    }, reject);
            }
        });
    }

    saveVeiculo(veiculo): Promise<any> {
        return new Promise((resolve, reject) => {
            this._httpClient.post(environment.apiUrlRest + '/api/veiculos/' + veiculo.id, veiculo)
                .subscribe((response: any) => {
                    resolve(response);
                }, reject);
        });
    }

    addVeiculo(veiculo): Promise<any> {
        return new Promise((resolve, reject) => {
            this._httpClient.post(environment.apiUrlRest + '/api/veiculos/', veiculo)
                .subscribe((response: any) => {
                    resolve(response);
                }, reject);
        });
    }
    
}
