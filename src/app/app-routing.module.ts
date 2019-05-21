import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guard/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'introduction',
    pathMatch: 'full'
  },
  { path: 'introduction', loadChildren: './pages/introduction/introduction.module#IntroductionPageModule' },
  { path: 'welcome', loadChildren: './pages/welcome/welcome.module#WelcomePageModule' },
  { path: 'login', loadChildren: './pages/login/login.module#LoginPageModule' },
  { path: 'register', loadChildren: './pages/register/register.module#RegisterPageModule' },
  { path: 'remember-password', loadChildren: './pages/remember-password/remember-password.module#RememberPasswordPageModule' },
  { path: 'home', loadChildren: './pages/home/home.module#HomePageModule', canActivate: [AuthGuard] },
  { path: 'menu', loadChildren: './pages/menu/menu.module#MenuPageModule', canActivate: [AuthGuard] },
  { path: 'configuration', loadChildren: './pages/configuration/configuration.module#ConfigurationPageModule', canActivate: [AuthGuard] },
  { path: 'perfil', loadChildren: './pages/perfil/perfil.module#PerfilPageModule', canActivate: [AuthGuard] },
  { path: 'about', loadChildren: './pages/about/about.module#AboutPageModule', canActivate: [AuthGuard] },
  { path: 'reservation-list', loadChildren: './pages/reservation-list/reservation-list.module#ReservationListPageModule', 
    canActivate: [AuthGuard] },
  { path: 'pet-list', loadChildren: './pages/pet-list/pet-list.module#PetListPageModule', canActivate: [AuthGuard] },
  { path: 'pet', loadChildren: './pages/pet/pet.module#PetPageModule', canActivate: [AuthGuard] },
  { path: 'reservation', loadChildren: './pages/reservation/reservation.module#ReservationPageModule', canActivate: [AuthGuard] },
  { path: 'petshop', loadChildren: './pages/petshop/petshop.module#PetshopPageModule', canActivate: [AuthGuard] }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
