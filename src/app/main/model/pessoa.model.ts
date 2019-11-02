import {Contato} from "./contato.model";
import {Endereco} from "./endereco.model";

export class Pessoa {
    id: number;
    nome: string;
    tipoPessoa: string;
    cpfOuCnpj: string;
    enderecos: Endereco[];
    contatos: Contato[];
    foto?: any;
    cpfOuCnpjSemFormatacao: string;
}