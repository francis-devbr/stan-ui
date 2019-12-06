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
        this.priceTaxExcl = abastecimento.priceTaxExcl || 0;
        this.priceTaxIncl = abastecimento.priceTaxIncl || 0;
        this.taxRate = abastecimento.taxRate || 0;
        this.comparedPrice = abastecimento.comparedPrice || 0;
        this.quantity = abastecimento.quantity || 0;
        this.sku = abastecimento.sku || 0;
        this.width = abastecimento.width || 0;
        this.height = abastecimento.height || 0;
        this.depth = abastecimento.depth || 0;
        this.weight = abastecimento.weight || 0;
        this.extraShippingFee = abastecimento.extraShippingFee || 0;
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
