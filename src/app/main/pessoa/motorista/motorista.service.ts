import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { Motorista } from 'app/main/model/motorista/motorista.model';
import { environment } from 'environments/environment';

@Injectable()
export class PessoaMotoristaService implements Resolve<any>
{
    static CONTEXT = environment.apiUrlRest+"/api/motoristas/"+JSON.parse(localStorage.getItem("FUNCIONARIO")).empresa.cpfOuCnpj;

    routeParams: any;
    motorista: Motorista;
    onMotoristaChanged: BehaviorSubject<any>;

    constructor(
        private _httpClient: HttpClient
    )
    {
        // Set the defaults
        this.onMotoristaChanged = new BehaviorSubject({});
    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any
    {
        this.routeParams = route.params;

        return new Promise((resolve, reject) => {

            Promise.all([
                this.getMotorista()
            ]).then(
                () => {
                    resolve();
                },
                reject
            );
        });
    }


    getMotorista(): Promise<any>
    {
        return new Promise((resolve, reject) => {
            if ( this.routeParams.id === 'new' )
            {
                this.onMotoristaChanged.next(false);
                resolve(false);
            }
            else
            {
                this._httpClient.get(PessoaMotoristaService.CONTEXT +'/' + this.routeParams.id)
                    .subscribe((response: any) => {
                        this.motorista = response;
                        this.onMotoristaChanged.next(this.motorista);
                        resolve(response);
                    }, reject);
            }
        });
    }

    saveMotorista(motorista): Promise<any>
    {
        return new Promise((resolve, reject) => {
            this._httpClient.post('api/pessoa-motoristas/' + motorista.id, motorista)
                .subscribe((response: any) => {
                    resolve(response);
                }, reject);
        });
    }

    addMotorista(motorista): Promise<any>
    {
        return new Promise((resolve, reject) => {
            this._httpClient.post('api/pessoa-motoristas/', motorista)
                .subscribe((response: any) => {
                    resolve(response);
                }, reject);
        });
    }
}
