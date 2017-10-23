import { Routes, CanActivate } from '@angular/router';
import { AppComponent } from './app.component'
import { IdComponent } from './id/id.component'

export const routes : Routes = [
    { path:'', component: AppComponent },
    { path:'id/:number', component: IdComponent }
];