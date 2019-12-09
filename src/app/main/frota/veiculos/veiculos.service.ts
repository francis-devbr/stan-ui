import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Veiculo } from 'app/main/model/veiculo/veiculo.model';
import { environment } from 'environments/environment';

@Injectable()
export class FrotaVeiculosService implements Resolve<Veiculo[]>
{
    static CONTEXT = environment.apiUrlRest+"/api/veiculos/"+JSON.parse(localStorage.getItem("FUNCIONARIO")).empresa.cpfOuCnpj;
    
    veiculos: Veiculo[];
    onVeiculosChanged: BehaviorSubject<Veiculo[]>;

    constructor(private _httpClient: HttpClient) {
        this.onVeiculosChanged = new BehaviorSubject<Veiculo[]>([]);
    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Veiculo[]> | Promise<Veiculo[]> | Veiculo[] {
        return new Promise((resolve, reject) => {

            Promise.all([
                this.getVeiculos()
            ]).then(
                () => {
                    resolve();
                },
                reject
            );
        });
    }

    getVeiculos(): Promise<Veiculo[]> {
        return new Promise((resolve, reject) => {
            this._httpClient.get(FrotaVeiculosService.CONTEXT)
                .subscribe((response: Veiculo[]) => {
                    this.veiculos = response;
                    this.onVeiculosChanged.next(this.veiculos);
                    resolve(response);
                }, reject);
        });
    }
}
