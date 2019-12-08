import { FuseNavigation } from '@fuse/types';

export const navigation: FuseNavigation[] = [
    {
        id: 'cadastros',
        title: 'Cadastros',
        translate: 'NAV.CADASTROS',
        type: 'group',
        icon: 'apps',
        children: [
            {
                id: 'empresa',
                title: 'Empresa',
                translate: 'NAV.EMPRESA',
                icon: 'business',
                type: 'item',
                url: '/empresa/empresa/1',
                exactMatch: true
            },
            
            {
                id: 'motorista',
                title: 'Motorista',
                translate: 'NAV.MOTORISTA',
                type: 'item',
                icon: 'airline_seat_recline_normal',
                url: '/pessoa/motoristas',
                exactMatch: true
            }
        ]
    },
    {
        id: 'frota',
        title: 'Gerenciando a Frota',
        translate: 'NAV.FROTAS',
        type: 'group',
        icon: 'apps',
        children: [
            {
                id: 'veiculo',
                title: 'Veículo',
                type: 'item',
                icon: 'directions_car',
                url: '/frota/veiculos',
                exactMatch: true
            },
            {
                id: 'manutencao',
                title: 'Manutenção',
                type: 'item',
                icon: 'build',
                url: '/frota/manutencoes',
                exactMatch: true
            },
            {
                id: 'abastecimento',
                title: 'Abastecimento',
                type: 'item',
                icon: 'ev_station',
                url: '/frota/abastecimentos',
                exactMatch: true
            },
            {
                id: 'viagem',
                title: 'Viagem',
                type: 'item',
                icon: 'import_export',
                url: '/frota/viagens',
                exactMatch: true
            },
        ]
    }
];
