import { NgModule } from '@angular/core';

import { HTTP_INTERCEPTORS } from '@angular/common/http';

import{LoginModule} from 'app/authentication/login/login.module';
import{RegisterModule} from 'app/authentication/register/register.module';
import{LockModule} from 'app/authentication/lock/lock.module';
import{JwtInterceptor} from 'app/authentication/jwt.interceptor';
import{AuthService} from 'app/authentication/auth.service';
import{AuthGuard} from 'app/authentication/auth.guard';

@NgModule({
    imports: [
      LoginModule,
      RegisterModule,
      LockModule,
    ],
    providers: [
        { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
        AuthService,
        AuthGuard
    ]
})

export class AuthModule {
}