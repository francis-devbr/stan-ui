import { FuseNavigation } from '@fuse/types';

export const navigation: FuseNavigation[] = [
    {
        id       : 'cadastros',
        title    : 'Cadastros',
        translate: 'NAV.CADASTROS',
        type     : 'group',
        icon     : 'apps',
        children : [
            {
                id       : 'empresa',
                title    : 'Empresa',
                translate: 'NAV.EMPRESA',
                type     : 'collapsable',
                icon     : 'dashboard',
                children : [
                    {
                        id        : 'info',
                        title     : 'Bio',
                        type      : 'item',
                        url       : '/empresa/empresa/1',
                        exactMatch: true
                    }
                ]
            }
        ]
    }


];
