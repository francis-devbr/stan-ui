import {Modelo} from './modelo.model';

export class Marca {
    id:       number;
    nome:       string;
    modelos: Modelo[];
    enable:  boolean;
}