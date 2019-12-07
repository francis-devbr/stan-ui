import { MatChipInputEvent } from '@angular/material/chips';

import { FuseUtils } from '@fuse/utils';

export class Abastecimento
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
    tipoCombustivel: string;
    qtdLitros: number;
    valorLitro: number;
    valorTotal: number;
    numCupomFiscal: string;
    data: string;
    kmInicial: string;
    kmFinal: string;
    active: boolean;

    /**
     * Constructor
     *
     * @param abastecimento
     */
    constructor(abastecimento?)
    {
        abastecimento = abastecimento || {};
        this.id = abastecimento.id || FuseUtils.generateGUID();
        this.name = abastecimento.name || '';
        this.handle = abastecimento.handle || FuseUtils.handleize(this.name);
        this.description = abastecimento.description || '';
        this.categories = abastecimento.categories || [];
        this.tags = abastecimento.tags || [];
        this.images = abastecimento.images || [];
        this.tipoCombustivel = abastecimento.tipoCombustivel || 0;
        this.qtdLitros = abastecimento.qtdLitros || 0;
        this.valorLitro = abastecimento.valorLitro || 0;
        this.numCupomFiscal = abastecimento.numCupomFiscal || 0;
        this.data = abastecimento.data || 0;
        this.kmInicial = abastecimento.kmInicial || 0;
        this.kmFinal = abastecimento.kmFinal || 0;
        this.active = abastecimento.active || true;
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
