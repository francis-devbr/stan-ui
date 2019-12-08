import { MatChipInputEvent } from '@angular/material/chips';

import { FuseUtils } from '@fuse/utils';

export class Viagem
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
    tipoViagem: string;
    descricaoViagem: string;
    statusViagem: string;
    veiculo: string;
    kmInicial: string;
    kmFinal: string;
    saida: string;
    destinoInicial: string;
    destinoFinal: string;
    active: boolean;

    /**
     * Constructor
     *
     * @param viagem
     */
    constructor(viagem?)
    {
        viagem = viagem || {};
        this.id = viagem.id || FuseUtils.generateGUID();
        this.name = viagem.name || '';
        this.handle = viagem.handle || FuseUtils.handleize(this.name);
        this.description = viagem.description || '';
        this.categories = viagem.categories || [];
        this.tags = viagem.tags || [];
        this.images = viagem.images || [];
        this.tipoViagem = viagem.tipoViagem || 0;
        this.descricaoViagem = viagem.descricaoViagem || 0;
        this.statusViagem = viagem.statusViagem || 0;
        this.kmInicial = viagem.kmInicial || 0;
        this.kmFinal = viagem.kmFinal || 0;
        this.saida = viagem.saida || 0;
        this.destinoInicial = viagem.destinoInicial || 0;        
        this.destinoFinal = viagem.destinoFinal || 0;
        this.active = viagem.active || true;
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
