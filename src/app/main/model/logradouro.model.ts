import {TipoLogradouro} from './tipoLogradouro.model';
import {Bairro} from './bairro.model';
export class Logradouro {
    id: number;
    cep: string;
    nome: string;
    tipoLogradouro: TipoLogradouro;
    complemento?: any;
    local?: any;
    bairro: Bairro;
}