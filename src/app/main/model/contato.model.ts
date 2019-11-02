import {Telefone} from './telefone.model';
export class Contato {
    id: number;
    tipo: string;
    telefones: Telefone[];
    email: string;
}