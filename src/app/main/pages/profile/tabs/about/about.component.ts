import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { fuseAnimations } from '@fuse/animations';

import { Funcionario } from 'app/main/model/empresa/funcionario.model';

@Component({
    selector: 'profile-about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.scss'],
    encapsulation: ViewEncapsulation.None,
    animations: fuseAnimations
})
export class ProfileAboutComponent {
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
