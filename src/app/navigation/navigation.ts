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
                type: 'collapsable',
                icon: 'dashboard',
                children: [
                    {
                        id: 'info',
                        title: 'Bio',
                        type: 'item',
                        url: '/empresa/empresa/1',
                        exactMatch: true
                    }
                ]
            },

            {
                id: 'motorista',
                title: 'Motorista',
                translate: 'NAV.MOTORISTA',
                type: 'item',
                icon: 'web_asset',
                url: '/motoristas/1',
            }
        ]
    },
    {
        id: 'frota',
        title: 'Frota',
        translate: 'NAV.FROTAS',
        type: 'group',
        icon: 'apps',
        children: [
            {
                id: 'veiculo',
                title: 'Veículo',
                type: 'item',
                icon: 'crop_portrait',
                url: '/frota/veiculos',
                exactMatch: true
            },
            {
                id: 'manutencao',
                title: 'Manutenção',
                type: 'item',
                icon: 'crop_portrait',
                url: '/frota/manutencoes',
                exactMatch: true
            },
            {
                id: 'abastecimento',
                title: 'Abastecimento',
                type: 'item',
                icon: 'crop_portrait',
                url: '/frota/veiculos/abastecimento'
            },
            {
                id: 'viagem',
                title: 'Viagem',
                type: 'item',
                icon: 'crop_portrait',
                url: '/frota/veiculos/viagem'
            }
        ]
    }
];
