import {Routes, RouterModule} from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { ProgressComponent } from './pages/progress/progress.component';
import { Grafica1Component } from './pages/grafica1/grafica1.component';
import { NopagefoundComponent } from './shared/nopagefound/nopafefound.component';
import { PagesComponent } from './pages/pages.component';
import { RegistrerComponent } from './login/registrer.component';


const appRoutes: Routes = [

  {path: '', component: PagesComponent, children: [

    {path: 'dashboard', component: DashboardComponent},
    {path: 'progress', component: ProgressComponent},
    {path: 'graficas1', component: Grafica1Component},
    {path: '', redirectTo: '/dashboard', pathMatch: 'full' }

  ]},
  {path: 'register', component: RegistrerComponent},
  {path: 'login', component: LoginComponent},
  {path: '**', component: NopagefoundComponent }
];

export const APP_ROUTES = RouterModule.forRoot(appRoutes, {useHash: true});
