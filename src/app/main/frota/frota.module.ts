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

import { FrotaManutencoesComponent } from 'app/main/frota/manutencoes/manutencoes.component';
import { FrotaManutencoesService } from 'app/main/frota/manutencoes/manutencoes.service';
import { FrotaManutencaoComponent } from 'app/main/frota/manutencao/manutencao.component';
import { FrotaManutencaoService } from 'app/main/frota/manutencao/manutencao.service';

import { FrotaAbastecimentosComponent } from 'app/main/frota/abastecimentos/abastecimentos.component';
import { FrotaAbastecimentosService } from 'app/main/frota/abastecimentos/abastecimentos.service';
import { FrotaAbastecimentoComponent } from 'app/main/frota/abastecimento/abastecimento.component';
import { FrotaAbastecimentoService } from 'app/main/frota/abastecimento/abastecimento.service';



const routes: Routes = [
    {
        path: 'veiculos',
        component: FrotaVeiculosComponent,
        resolve: {
            data: FrotaVeiculosService
        }
    },
    {
        path: 'veiculos/:id',
        component: FrotaVeiculoComponent,
        resolve: {
            data: FrotaVeiculoService
        }
    },
    {
        path: 'veiculos/:id/:handle',
        component: FrotaVeiculoComponent,
        resolve: {
            data: FrotaVeiculoService
        }
    },

    {
        path: 'manutencoes',
        component: FrotaManutencoesComponent,
        resolve: {
            data: FrotaManutencoesService
        }
    },
    {
        path: 'manutencoes/:id',
        component: FrotaManutencaoComponent,
        resolve: {
            data: FrotaManutencaoService
        }
    },
    {
        path: 'manutencoes/:id/:handle',
        component: FrotaManutencaoComponent,
        resolve: {
            data: FrotaManutencaoService
        }
    },

    {
        path: 'abastecimentos',
        component: FrotaAbastecimentosComponent,
        resolve: {
            data: FrotaAbastecimentosService
        }
    },
    {
        path: 'abastecimentos/:id',
        component: FrotaAbastecimentoComponent,
        resolve: {
            data: FrotaAbastecimentoService
        }
    },
    {
        path: 'abastecimentos/:id/:handle',
        component: FrotaAbastecimentoComponent,
        resolve: {
            data: FrotaAbastecimentoService
        }
    }



];

@NgModule({
    declarations: [
        FrotaVeiculosComponent,
        FrotaVeiculoComponent,
        FrotaManutencoesComponent,
        FrotaManutencaoComponent,
        FrotaAbastecimentosComponent,
        FrotaAbastecimentoComponent
    ],
    imports: [
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
    providers: [
        FrotaVeiculosService,
        FrotaVeiculoService,
        FrotaManutencoesService,
        FrotaManutencaoService,
        FrotaAbastecimentosService,
        FrotaAbastecimentoService
    ]
})
export class FrotaModule {
}
