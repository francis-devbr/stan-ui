import { MatChipInputEvent } from '@angular/material/chips';

import { FuseUtils } from '@fuse/utils';

import { manutencao } from 'app/main/frota/manutencao/manutencao.model';

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
    priceTaxExcl: number;
    priceTaxIncl: number;
    taxRate: number;
    comparedPrice: number;
    quantity: number;
    sku: string;
    width: string;
    height: string;
    depth: string;
    weight: string;
    extraShippingFee: number;
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
        this.priceTaxExcl = manutencao.priceTaxExcl || 0;
        this.priceTaxIncl = manutencao.priceTaxIncl || 0;
        this.taxRate = manutencao.taxRate || 0;
        this.comparedPrice = manutencao.comparedPrice || 0;
        this.quantity = manutencao.quantity || 0;
        this.sku = manutencao.sku || 0;
        this.width = manutencao.width || 0;
        this.height = manutencao.height || 0;
        this.depth = manutencao.depth || 0;
        this.weight = manutencao.weight || 0;
        this.extraShippingFee = manutencao.extraShippingFee || 0;
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
