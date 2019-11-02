import {Logradouro} from './logradouro.model';
export class Endereco {
    id: number;
    logradouro: Logradouro;
    numero: string;
    complemento?: any;
}