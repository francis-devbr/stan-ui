
import { Privilege } from './privilege.model';
export class Role {
    id: number;
    name: string;
    privileges: Privilege[];
}
