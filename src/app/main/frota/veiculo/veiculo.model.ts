import { MatChipInputEvent } from '@angular/material/chips';

import { FuseUtils } from '@fuse/utils';

export class Veiculo
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
     * @param veiculo
     */
    constructor(veiculo?)
    {
        veiculo = veiculo || {};
        this.id = veiculo.id || FuseUtils.generateGUID();
        this.name = veiculo.name || '';
        this.handle = veiculo.handle || FuseUtils.handleize(this.name);
        this.description = veiculo.description || '';
        this.categories = veiculo.categories || [];
        this.tags = veiculo.tags || [];
        this.images = veiculo.images || [];
        this.priceTaxExcl = veiculo.priceTaxExcl || 0;
        this.priceTaxIncl = veiculo.priceTaxIncl || 0;
        this.taxRate = veiculo.taxRate || 0;
        this.comparedPrice = veiculo.comparedPrice || 0;
        this.quantity = veiculo.quantity || 0;
        this.sku = veiculo.sku || 0;
        this.width = veiculo.width || 0;
        this.height = veiculo.height || 0;
        this.depth = veiculo.depth || 0;
        this.weight = veiculo.weight || 0;
        this.extraShippingFee = veiculo.extraShippingFee || 0;
        this.active = veiculo.active || true;
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
