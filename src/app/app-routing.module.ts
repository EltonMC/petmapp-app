import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

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
  { path: 'home', loadChildren: './pages/home/home.module#HomePageModule' },
  { path: 'menu', loadChildren: './pages/menu/menu.module#MenuPageModule' },
  { path: 'configuration', loadChildren: './pages/configuration/configuration.module#ConfigurationPageModule' },
  { path: 'perfil', loadChildren: './pages/perfil/perfil.module#PerfilPageModule' },
  { path: 'about', loadChildren: './pages/about/about.module#AboutPageModule' },
  { path: 'reservation-list', loadChildren: './pages/reservation-list/reservation-list.module#ReservationListPageModule' },
  { path: 'pet-list', loadChildren: './pages/pet-list/pet-list.module#PetListPageModule' },
  { path: 'pet', loadChildren: './pages/pet/pet.module#PetPageModule' },
  { path: 'reservation', loadChildren: './pages/reservation/reservation.module#ReservationPageModule' },
  { path: 'petshop', loadChildren: './pages/petshop/petshop.module#PetshopPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
