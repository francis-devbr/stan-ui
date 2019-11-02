import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Location } from '@angular/common';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { fuseAnimations } from '@fuse/animations';
import { FuseUtils } from '@fuse/utils';

import { Empresa } from 'app/main/model/empresa.model';
import { EmpresaEmpresaService } from 'app/main/empresa/empresa.service';

@Component({
    selector     : 'empresa-empresa',
    templateUrl  : './empresa.component.html',
    styleUrls    : ['./empresa.component.scss'],
    encapsulation: ViewEncapsulation.None,
    animations   : fuseAnimations
})
export class EmpresaEmpresaComponent implements OnInit, OnDestroy
{
    empresa: Empresa;
    pageType: string;
    empresaForm: FormGroup;

    // Private
    private _unsubscribeAll: Subject<any>;

    /**
     * Constructor
     *
     * @param {EmpresaEmpresaService} empresaEmpresaService
     * @param {FormBuilder} _formBuilder
     * @param {Location} _location
     * @param {MatSnackBar} _matSnackBar
     */
    constructor(
        private empresaEmpresaService: EmpresaEmpresaService,
        private _formBuilder: FormBuilder,
        private _location: Location,
        private _matSnackBar: MatSnackBar
    )
    {
        // Set the default
        this.empresa = new Empresa();

        // Set the private defaults
        this._unsubscribeAll = new Subject();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void
    {
        // Subscribe to update empresa on changes
        this.empresaEmpresaService.onEmpresaChanged
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe(empresa => {

                if ( empresa )
                {
                    this.empresa = new Empresa(empresa);
                    this.pageType = 'edit';
                }
                else
                {
                    this.pageType = 'new';
                    this.empresa = new Empresa();
                }

                this.empresaForm = this.createEmpresaForm();
            });
    }

    /**
     * On destroy
     */
    ngOnDestroy(): void
    {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Create empresa form
     *
     * @returns {FormGroup}
     */
    createEmpresaForm(): FormGroup
    {
        return this._formBuilder.group({
            id              : [this.empresa.id],
            nome            : [this.empresa.pessoa.nome],
            cnpj            : [this.empresa.pessoa.cpfOuCnpj],
            ie            : [this.empresa.inscricaoEstadual]
        });
    }

   
}
