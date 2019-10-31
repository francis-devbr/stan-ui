import { NgModule } from '@angular/core';
import { Error404Module } from 'app/main/pages/errors/404/error-404.module';
import { Error500Module } from 'app/main/pages/errors/500/error-500.module';
import { MaintenanceModule } from 'app/main/pages/maintenance/maintenence.module';
import { ProfileModule } from 'app/main/pages/profile/profile.module';

@NgModule({
    imports: [
        // Errors
        Error404Module,
        Error500Module,
        // Maintenance
        MaintenanceModule,
        // Profile
        ProfileModule,

    ]
})
export class PagesModule
{

}
