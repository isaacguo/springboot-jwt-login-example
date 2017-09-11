import {RouterModule, Routes} from "@angular/router";
import {ModuleWithProviders} from "@angular/core";
import {HomeComponent} from "./components/home/home.component";
import {IndexComponent} from "./components/index/index.component";
import {LoginComponent} from "./components/login/login.component";
import {AuthGuardService} from "./services/auth-guard.service";


const appRoutes: Routes = [
  {path: '', redirectTo: "index", pathMatch: 'full'},
  {path: 'index', component: IndexComponent},
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [AuthGuardService]
  },
  {path: 'login', component: LoginComponent}
]


export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
