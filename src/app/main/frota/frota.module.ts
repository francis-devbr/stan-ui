import { AgmCoreModule } from '@agm/core';
import { NgModule } from '@angular/core';
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
import { RouterModule, Routes } from '@angular/router';
import { FuseWidgetModule } from '@fuse/components/widget/widget.module';
import { FuseSharedModule } from '@fuse/shared.module';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { FrotaAbastecimentoComponent } from 'app/main/frota/abastecimento/abastecimento.component';
import { FrotaAbastecimentoService } from 'app/main/frota/abastecimento/abastecimento.service';
import { FrotaAbastecimentosComponent } from 'app/main/frota/abastecimentos/abastecimentos.component';
import { FrotaAbastecimentosService } from 'app/main/frota/abastecimentos/abastecimentos.service';
import { FrotaManutencaoComponent } from 'app/main/frota/manutencao/manutencao.component';
import { FrotaManutencaoService } from 'app/main/frota/manutencao/manutencao.service';
import { FrotaManutencoesComponent } from 'app/main/frota/manutencoes/manutencoes.component';
import { FrotaManutencoesService } from 'app/main/frota/manutencoes/manutencoes.service';
import { FrotaVeiculoComponent } from 'app/main/frota/veiculo/veiculo.component';
import { FrotaVeiculoService } from 'app/main/frota/veiculo/veiculo.service';
import { FrotaVeiculosComponent } from 'app/main/frota/veiculos/veiculos.component';
import { FrotaVeiculosService } from 'app/main/frota/veiculos/veiculos.service';
import { FrotaViagemComponent } from 'app/main/frota/viagem/viagem.component';
import { FrotaViagemService } from 'app/main/frota/viagem/viagem.service';
import { FrotaViagensComponent } from 'app/main/frota/viagens/viagens.component';
import { FrotaViagensService } from 'app/main/frota/viagens/viagens.service';
import { EmpresaService } from '../empresa/empresa.service';


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
    },

    {
        path: 'viagens',
        component: FrotaViagensComponent,
        resolve: {
            data: FrotaViagensService
        }
    },

    {
        path: 'viagens/:id',
        component: FrotaViagemComponent,
        resolve: {
            data: FrotaViagemService
        }
    },
    {
        path: 'viagens/:id/:handle',
        component: FrotaViagemComponent,
        resolve: {
            data: FrotaViagemService
        }
    },

];

@NgModule({
    declarations: [
        FrotaVeiculosComponent,
        FrotaVeiculoComponent,
        FrotaManutencoesComponent,
        FrotaManutencaoComponent,
        FrotaAbastecimentosComponent,
        FrotaAbastecimentoComponent,
        FrotaViagensComponent,
        FrotaViagemComponent,
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
        FrotaAbastecimentoService,        
        FrotaViagensService,
        FrotaViagemService,
        EmpresaService
    ]
})
export class FrotaModule {
}
