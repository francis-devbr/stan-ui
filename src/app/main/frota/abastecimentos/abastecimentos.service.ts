import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'environments/environment';
import { Abastecimento } from 'app/main/model/veiculo/abastecimento.model';

@Injectable()
export class FrotaAbastecimentosService implements Resolve<any>
{
    static CONTEXT = environment.apiUrlRest+"/api/abastecimentos/"+JSON.parse(localStorage.getItem("FUNCIONARIO")).empresa.cpfOuCnpj;
    
    abastecimentos: Abastecimento[];
    onAbastecimentosChanged: BehaviorSubject<any>;

    constructor(
        private _httpClient: HttpClient
    )
    {
        // Set the defaults
        this.onAbastecimentosChanged = new BehaviorSubject({});
    }

        resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any
    {
        return new Promise((resolve, reject) => {

            Promise.all([
                this.getAbastecimentos()
            ]).then(
                () => {
                    resolve();
                },
                reject
            );
        });
    }

    getAbastecimentos(): Promise<Abastecimento[]>
    {
        return new Promise((resolve, reject) => {
            this._httpClient.get(FrotaAbastecimentosService.CONTEXT)
                .subscribe((response: Abastecimento[]) => {
                    this.abastecimentos = response;
                    this.onAbastecimentosChanged.next(this.abastecimentos);
                    resolve(response);
                }, reject);
        });
    }
}
