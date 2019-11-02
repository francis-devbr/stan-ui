import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { FuseConfigService } from '@fuse/services/config.service';
import { fuseAnimations } from '@fuse/animations';
import { AuthService } from 'app/authentication/auth.service';
import { first } from 'rxjs/operators';

@Component({
    selector     : 'login',
    templateUrl  : './login.component.html',
    styleUrls    : ['./login.component.scss'],
    encapsulation: ViewEncapsulation.None,
    animations   : fuseAnimations
})
export class LoginComponent implements OnInit
{
    loginForm: FormGroup;
    redirectUrl: string;
    error = '';

    constructor(
        private _fuseConfigService: FuseConfigService,
        private _formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private authenticationService: AuthService
    )
    {
        // Configure the layout
        this._fuseConfigService.config = {
            layout: {
                navbar   : {
                    hidden: true
                },
                toolbar  : {
                    hidden: true
                },
                footer   : {
                    hidden: true
                },
                sidepanel: {
                    hidden: true
                }
            }
        };
    }

    ngOnInit(): void
    {
        this.loginForm = this._formBuilder.group({
            email   : ['', [Validators.required]],
            password: ['', Validators.required]
        });
        this.redirectUrl = this.route.snapshot.queryParams['redirectUrl'] || '**';
    }

    get f() { return this.loginForm.controls; }

    onSubmit() {

        this.authenticationService.login(this.f.email.value, this.f.password.value)
            .pipe(first())
            .subscribe(
                data => {
                    this.navigateAfterSuccess();
                },
                error => {
                    this.error = error;
                });
    }

    private navigateAfterSuccess() {
        console.log("passou aqui");
        console.log(this.redirectUrl);
        if (this.redirectUrl) {
            console.log("passou aqui 2");
            this.router.navigateByUrl(this.redirectUrl);
        } else {
            console.log("passou aqui 3");
            this.router.navigate(['**']);
        }
    }
}
