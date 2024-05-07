import { Routes } from '@angular/router';
import { MapComponent } from './map/map.component';

export const routes: Routes = [
    { path: 'home', component: MapComponent },
    { path: '' , redirectTo:'/home', pathMatch:'full' }
];
