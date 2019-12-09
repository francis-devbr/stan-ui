import { Endereco } from "../base/endereco.model";
import { Empresa } from "../empresa/empresa.model";
import { Cargo } from "../empresa/cargo.model";
import { Usuario } from '../base/usuario.model';

export class Funcionario {
    id: number;
    nome: string;
    tipoPessoa: string;
    cpfOuCnpj: string;
    endereco: Endereco;
    telefone: String;
    email: string;
    empresa: Empresa;
    cargo: Cargo;
    usuario: Usuario;
    sexo: string;
    foto: string;
    enable: boolean;

    constructor(funcionario?) {
        funcionario = funcionario || {};

        this.id = funcionario.id || null;
        this.nome = funcionario.nome || '';
        this.tipoPessoa = funcionario.tipoPessoa || 'J';
        this.cpfOuCnpj = funcionario.cpfOuCnpj || '';
        this.endereco = funcionario.endereco || {};
        this.telefone = funcionario.telefone || '';
        this.email = funcionario.email || '';
        this.empresa = funcionario.empresa || '';
        this.cargo = funcionario.cargo || {};
        this.usuario = funcionario.usuario || {};
        this.sexo = funcionario.sexo || '';
        this.foto = funcionario.foto || {};

        this.enable = funcionario.enable || true;
    }
}