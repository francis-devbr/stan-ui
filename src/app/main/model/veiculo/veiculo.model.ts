import { FuseUtils } from '@fuse/utils';

import {Marca} from './marca.model';
import {TipoCombustivel} from './tipoCombustivel.model';
import {Categoria} from './categoria.model';

export class Veiculo {
    id:              number;
    placa:           string;
    handle:          string;
    chassi:          string;
    renavam:         string;
    marca:           Marca;
    anoFabricacao:   number;
    anoModelo:       number;
    cor:             string;
    tipoCombustivel: TipoCombustivel;
    categoria:       Categoria;
    valorPago:       number;
    kmInicial:       number;
    kmAtual:         number;
    pneuTrocadoEm:   Date;
    mesIpva:         number;
    enable:          boolean;
    images:          []

    constructor(veiculo?)
    {
        veiculo = veiculo || {};
        this.id = veiculo.id || FuseUtils.generateGUID();
        this.placa = veiculo.placa || '';
        this.handle = veiculo.handle || FuseUtils.handleize(this.placa);
        this.chassi = veiculo.chassi || '';
        this.renavam = veiculo.renavam|| '';
        this.marca = veiculo.marca|| new Marca();
        this.anoFabricacao = veiculo.anoFabricacao || 0;
        this.anoModelo = veiculo.anoModelo || 0;
        this.cor = veiculo.cor || '';
        this.tipoCombustivel = veiculo.tipoCombustivel || new TipoCombustivel();
        this.categoria = veiculo.tipoCombustivel || new Categoria();
        this.valorPago = veiculo.valorPago || 0;
        this.kmInicial = veiculo.kmInicial || 0;
        this.kmAtual = veiculo.kmAtual || 0;
        this.pneuTrocadoEm = veiculo.pneuTrocadoEm || new Date();
        this.mesIpva = veiculo.mesIpva || 0;
        this.enable = veiculo.enable || true;
        this.images = veiculo.images || [];
    }
}
