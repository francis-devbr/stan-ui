import { InMemoryDbService } from 'angular-in-memory-web-api';

import { FrotaFakeDb } from 'app/fake-db/frota';
import { AuthenticationFakeDb } from 'app/fake-db/authentication';
import { EmpresaFakeDb } from 'app/fake-db/empresa';
import { ProfileFakeDb } from 'app/fake-db/profile';

export class FakeDbService implements InMemoryDbService {
    createDb(): any {
        return {

            // Veículos
            'frota-veiculos': FrotaFakeDb.veiculos,

            // Manutenções
            'frota-manutencoes': FrotaFakeDb.manutencoes,

            // Abastecimentos
            'frota-abastecimentos': FrotaFakeDb.abastecimentos,

            'empresa-empresas': EmpresaFakeDb.empresas,

            // Profile
            'profile-about': ProfileFakeDb.about,

        };
    }
}
