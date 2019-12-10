import { Veiculo } from './veiculo.model';

export class Abastecimento {
    id: number;
    handle: string;
    veiculo: Veiculo;
    cnpj: string;
    litro: number;
    valor: number;
    cupom: string;
    abastecidoEm: Date;
    km: number;

    constructor(abastecimento?) {
        abastecimento = abastecimento || {};
        this.id = abastecimento.id || 0;
        this.handle = abastecimento.handle || '';
        this.veiculo = abastecimento.veiculo || {};
        this.litro = abastecimento.litro || 0;
        this.valor = abastecimento.valor || 0;
        this.cupom = abastecimento.cupom || '';
        this.abastecidoEm = abastecimento.marca || '';
        this.km = abastecimento.km || 0;
    }
}