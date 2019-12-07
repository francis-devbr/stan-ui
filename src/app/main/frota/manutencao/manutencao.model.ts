import { MatChipInputEvent } from '@angular/material/chips';

import { FuseUtils } from '@fuse/utils';

export class Manutencao
{
    id: string;
    name: string;
    handle: string;
    description: string;
    categories: string[];
    tags: string[];
    images: {
        default: boolean,
        id: string,
        url: string,
        type: string
    }[];
    planoManutencao: string;
    planoPeriodico: string;
    responsavel: string;
    veiculo: string;
    dataInicial: string;
    dataFinal: string;
    peca: string;
    tipoManutencao: string;
    motorista: string;
    active: boolean;

    /**
     * Constructor
     *
     * @param manutencao
     */
    constructor(manutencao?)
    {
        manutencao = manutencao || {};
        this.id = manutencao.id || FuseUtils.generateGUID();
        this.name = manutencao.name || '';
        this.handle = manutencao.handle || FuseUtils.handleize(this.name);
        this.description = manutencao.description || '';
        this.categories = manutencao.categories || [];
        this.tags = manutencao.tags || [];
        this.images = manutencao.images || [];
        this.planoManutencao = manutencao.planoManutencao || 0;
        this.planoPeriodico = manutencao.planoPeriodico || 0;
        this.responsavel = manutencao.responsavel || 0;
        this.dataInicial = manutencao.dataInicial || 0;
        this.dataFinal = manutencao.dataFinal || 0;
        this.peca = manutencao.peca || 0;
        this.tipoManutencao = manutencao.tipoManutencao || 0;
        this.motorista = manutencao.motorista || 0;
        this.active = manutencao.active || true;
    }

    /**
     * Add category
     *
     * @param {MatChipInputEvent} event
     */
    addCategory(event: MatChipInputEvent): void
    {
        const input = event.input;
        const value = event.value;

        // Add category
        if ( value )
        {
            this.categories.push(value);
        }

        // Reset the input value
        if ( input )
        {
            input.value = '';
        }
    }

    /**
     * Remove category
     *
     * @param category
     */
    removeCategory(category): void
    {
        const index = this.categories.indexOf(category);

        if ( index >= 0 )
        {
            this.categories.splice(index, 1);
        }
    }

    /**
     * Add tag
     *
     * @param {MatChipInputEvent} event
     */
    addTag(event: MatChipInputEvent): void
    {
        const input = event.input;
        const value = event.value;

        // Add tag
        if ( value )
        {
            this.tags.push(value);
        }

        // Reset the input value
        if ( input )
        {
            input.value = '';
        }
    }

    /**
     * Remove tag
     *
     * @param tag
     */
    removeTag(tag): void
    {
        const index = this.tags.indexOf(tag);

        if ( index >= 0 )
        {
            this.tags.splice(index, 1);
        }
    }
}
