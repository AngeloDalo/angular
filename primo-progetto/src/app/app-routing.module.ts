import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { AboutComponent } from './componenti/about/about.component';
import { ContactComponent } from './componenti/contact/contact.component';
import { ContattoComponent } from './componenti/contatto/contatto.component';
import { HomeComponent } from './componenti/home/home.component';
import { NotfoundComponent } from './componenti/notfound/notfound.component';

const routes: Routes = [
  //SE NON HO NULLA RIMANDA ALLA HOMEPAHE
  //{path: '', pathMatch:'full', redirectTo: 'homepage'},
  {path: '', component: HomeComponent },
  {path: 'about', component: AboutComponent },
  {path: 'contact', component: ContactComponent, canActivate: [AuthGuard], canActivateChild:[AuthGuard] ,children: [
    {path: ':id', component: ContattoComponent}
  ]},
  // {path: 'contact/:id', component: ContactComponent },
  //ROUTING AND ERROR
  {path: '404', component: NotfoundComponent},
  {path: '**', redirectTo: '/404'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
