import { FuseUtils } from '@fuse/utils';

import { Marca } from './marca.model';
import { TipoCombustivel } from './tipoCombustivel.model';
import { Categoria } from './categoria.model';
import { Empresa } from '../empresa/empresa.model';

export class Veiculo {

    id: number;
    nome:string
    handle: string;
    placa: string;
    chassi: string;
    renavam: string;
    marca: Marca;
    anoFabricacao: number;
    anoModelo: number;
    cor: string;
    tipoCombustivel: TipoCombustivel;
    categoria: Categoria;
    valorPago: number;
    kmInicial: number;
    kmAtual: number;
    pneuTrocadoEm: null;
    mesIpva: number;
    empresa: Empresa;
    enable: boolean;

    constructor(veiculo?) {
        veiculo = veiculo || {};
        this.id = veiculo.id||0;
        this.nome = veiculo.nome || '';
        this.handle = FuseUtils.handleize(this.nome);
        this.placa = veiculo.placa || '';
        this.chassi = veiculo.chassi || '';
        this.renavam = veiculo.renavam || '';
        this.marca = veiculo.marca || {};
        this.anoFabricacao = veiculo.anoFabricacao || 0;
        this.anoModelo = veiculo.anoModelo || 0;
        this.cor = veiculo.cor || '';
        this.tipoCombustivel = veiculo.tipoCombustivel || {};
        this.categoria = veiculo.categoria || {};
        this.valorPago = veiculo.valorPago || 0;
        this.kmInicial = veiculo.kmInicial || 0;
        this.kmAtual = veiculo.kmAtual || 0;
        this.pneuTrocadoEm = veiculo.pneuTrocadoEm || '';
        this.mesIpva = veiculo.mesIpva || 0;
        this.empresa = veiculo.empresa||{};
        this.enable = veiculo.enable || true;
    }
}
