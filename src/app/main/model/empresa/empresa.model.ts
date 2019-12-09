import { Endereco } from "../base/endereco.model";


export class Empresa {
    id: number;
    nome: string;
    tipoPessoa: string;
    cpfOuCnpj: string;
    endereco: Endereco;
    telefone: string;
    email: string;
    inscricaoEstadual: string;
    isPrincipal: boolean;
    enable: boolean;

    constructor(empresa?) {
        empresa = empresa || {};

        this.id = empresa.id || null;
        this.nome = empresa.nome || '';
        this.tipoPessoa = empresa.tipoPessoa || 'J';
        this.cpfOuCnpj = empresa.cpfOuCnpj || '';
        this.endereco = empresa.endereco || {};
        this.telefone = empresa.telefones || '';
        this.email = empresa.email || '';
        this.inscricaoEstadual = empresa.inscricaoEstadual || '';
        this.isPrincipal = empresa.isPrincipal || false;
        this.enable = empresa.enable || true;
    }
}

