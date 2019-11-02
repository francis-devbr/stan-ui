import { MatChipInputEvent } from '@angular/material/chips';

import { FuseUtils } from '@fuse/utils';

export class Empresa
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
     * @param empresa
     */
    constructor(empresa?)
    {
        empresa = empresa || {};
        this.id = empresa.id || FuseUtils.generateGUID();
        this.name = empresa.name || '';
        this.handle = empresa.handle || FuseUtils.handleize(this.name);
        this.description = empresa.description || '';
        this.categories = empresa.categories || [];
        this.tags = empresa.tags || [];
        this.images = empresa.images || [];
        this.priceTaxExcl = empresa.priceTaxExcl || 0;
        this.priceTaxIncl = empresa.priceTaxIncl || 0;
        this.taxRate = empresa.taxRate || 0;
        this.comparedPrice = empresa.comparedPrice || 0;
        this.quantity = empresa.quantity || 0;
        this.sku = empresa.sku || 0;
        this.width = empresa.width || 0;
        this.height = empresa.height || 0;
        this.depth = empresa.depth || 0;
        this.weight = empresa.weight || 0;
        this.extraShippingFee = empresa.extraShippingFee || 0;
        this.active = empresa.active || true;
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
