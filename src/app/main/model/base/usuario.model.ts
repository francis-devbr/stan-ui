import {Role} from './role.model';

export class Usuario {
    id:          number;
    username:    string;
    password:    string;
    roles:       Role[];
    isSuperUser: boolean;
    enable:      boolean;
}
