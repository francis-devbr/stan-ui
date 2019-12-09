import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';

import { FuseSharedModule } from '@fuse/shared.module';

import { ProfileComponent } from 'app/main/pages/profile/profile.component';
import { ProfileAboutComponent } from 'app/main/pages/profile/tabs/about/about.component';


const routes = [
    {
        path: 'profile',
        component: ProfileComponent
    }
];

@NgModule({
    declarations: [
        ProfileComponent,
        ProfileAboutComponent
    ],
    imports: [
        RouterModule.forChild(routes),

        MatButtonModule,
        MatDividerModule,
        MatIconModule,
        MatTabsModule,

        FuseSharedModule
    ]
})
export class ProfileModule {
}
