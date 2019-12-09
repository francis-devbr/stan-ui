import { FuseUtils } from '@fuse/utils';
import { Funcionario } from '../empresa/funcionario.model';

export class Motorista {

    id: number;
    handle: string;
    funcionario: Funcionario;
    numero: string;
    renovaEm: Date;
    categoria: string;
    enable: boolean;

    constructor(motorista?) {
        motorista = motorista || {};
        this.funcionario = motorista.funcionario || {};
        this.numero = motorista.numero || '';
        this.renovaEm = motorista.renovaEm || '';
        this.categoria = motorista.categoria || '';
        this.handle = motorista.handle || FuseUtils.handleize("teste");
        this.id = motorista.id;
        this.enable = motorista.enable || true;
    }
}

