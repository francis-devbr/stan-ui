import { FuseUtils } from '@fuse/utils';
import { Pessoa } from '../pessoa.model';
import { Cnh } from './cnh.model';

export class Motorista {
    id: number;
    handle: string;
    pessoa: Pessoa;
    cnh: Cnh;

    enable: boolean;

    constructor(motorista?) {
        motorista = motorista || {};
        this.pessoa = motorista.pessoa || new Pessoa();
        this.cnh = motorista.cnh || new Cnh();
        this.handle = motorista.handle || FuseUtils.handleize("teste");
        this.id = motorista.id;
        this.enable = motorista.enable || true;
    }
}

