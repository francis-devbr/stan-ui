import {Pessoa} from './pessoa.model';

export class  Empresa {
    id: number;
    pessoa: Pessoa;
    inscricaoEstadual: string;
    enable: boolean;

    constructor(empresa?)
    {
        empresa = empresa || {};
        this.id = empresa.id;
        this.pessoa = empresa.pessoa || {};
        this.inscricaoEstadual = empresa.inscricaoEstadual||"";
        this.enable = empresa.enable || true;
    }
}

