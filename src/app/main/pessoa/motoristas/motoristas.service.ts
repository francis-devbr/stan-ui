import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Motorista } from 'app/main/model/motorista/motorista.model';
import { environment } from 'environments/environment';

@Injectable()
export class PessoaMotoristasService implements Resolve<Motorista[]>
{
    static CONTEXT = environment.apiUrlRest+"/api/motoristas/"+JSON.parse(localStorage.getItem("FUNCIONARIO")).empresa.cpfOuCnpj;
    motoristas: Motorista[];
    onMotoristasChanged: BehaviorSubject<Motorista[]>;

    constructor(private _httpClient: HttpClient) {
        this.onMotoristasChanged = new BehaviorSubject<Motorista[]>([]);
    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Motorista[]> | Promise<Motorista[]> | Motorista[] {
        return new Promise((resolve, reject) => {

            Promise.all([
                this.getMotoristas()
            ]).then(
                () => {
                    resolve();
                },
                reject
            );
        });
    }

    getMotoristas(): Promise<Motorista[]> {
        return new Promise((resolve, reject) => {
            console.log(PessoaMotoristasService.CONTEXT);
            this._httpClient.get(PessoaMotoristasService.CONTEXT)
                .subscribe((response: Motorista[]) => {
                    this.motoristas = response;
                    this.onMotoristasChanged.next(this.motoristas);
                    resolve(response);
                }, reject);
        });
    }
}
