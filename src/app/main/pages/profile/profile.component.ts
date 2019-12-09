import { Component, ViewEncapsulation } from '@angular/core';

import { fuseAnimations } from '@fuse/animations';
import { Funcionario } from 'app/main/model/empresa/funcionario.model';

@Component({
    selector: 'profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.scss'],
    encapsulation: ViewEncapsulation.None,
    animations: fuseAnimations
})
export class ProfileComponent {

    funcionario: Funcionario;

    constructor() {
        let f = this.funcionario = JSON.parse(localStorage.getItem("FUNCIONARIO"));

        if (f) {
            this.funcionario = f;
        } else {
            this.funcionario = new Funcionario();
        }
    }
}
