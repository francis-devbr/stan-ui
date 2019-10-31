import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FuseSharedModule } from '@fuse/shared.module';
import { FuseHighlightModule } from '@fuse/components/index';
import { FuseWidgetModule } from '@fuse/components/widget/widget.module';

import { MaterialModule } from 'app/main/angular-material-elements/material.module';
import { AngularMaterialElementsComponent } from 'app/main/angular-material-elements/angular-material-elements.component';

const routes: Routes = [
    {
        path    : '',
        children: [
            {
                path     : ':id',
                component: AngularMaterialElementsComponent
            }
        ]
    }
];

@NgModule({
    declarations   : [
        AngularMaterialElementsComponent
    ],
    imports        : [
        RouterModule.forChild(routes),

        MaterialModule,

        FuseSharedModule,
        FuseHighlightModule,
        FuseWidgetModule
    ]
})
export class AngularMaterialElementsModule
{
}

