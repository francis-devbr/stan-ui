import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatRippleModule } from '@angular/material/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { AgmCoreModule } from '@agm/core';

import { FuseSharedModule } from '@fuse/shared.module';
import { FuseWidgetModule } from '@fuse/components/widget/widget.module';

import { FrotaVeiculosComponent } from 'app/main/frota/veiculos/veiculos.component';
import { FrotaVeiculosService } from 'app/main/frota/veiculos/veiculos.service';
import { FrotaVeiculoComponent } from 'app/main/frota/veiculo/veiculo.component';
import { FrotaVeiculoService } from 'app/main/frota/veiculo/veiculo.service';




const routes: Routes = [
    {
        path     : 'veiculos',
        component: FrotaVeiculosComponent,
        resolve  : {
            data: FrotaVeiculosService
        }
    },
    {
        path     : 'veiculos/:id',
        component: FrotaVeiculoComponent,
        resolve  : {
            data: FrotaVeiculoService
        }
    },
    {
        path     : 'veiculos/:id/:handle',
        component: FrotaVeiculoComponent,
        resolve  : {
            data: FrotaVeiculoService
        }
    }
];

@NgModule({
    declarations: [
        FrotaVeiculosComponent,
        FrotaVeiculoComponent
    ],
    imports     : [
        RouterModule.forChild(routes),

        MatButtonModule,
        MatChipsModule,
        MatExpansionModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatPaginatorModule,
        MatRippleModule,
        MatSelectModule,
        MatSortModule,
        MatSnackBarModule,
        MatTableModule,
        MatTabsModule,

        NgxChartsModule,
        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyD81ecsCj4yYpcXSLFcYU97PvRsE_X8Bx8'
        }),

        FuseSharedModule,
        FuseWidgetModule
    ],
    providers   : [
        FrotaVeiculosService,
        FrotaVeiculoService
    ]
})
export class FrotaModule
{
}
