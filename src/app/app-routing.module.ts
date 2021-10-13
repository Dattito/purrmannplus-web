import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexSiteComponent } from './core/pages/index-site/index-site.component';
import { NotFoundSiteComponent } from './core/pages/not-found-site/not-found-site.component';

const routes: Routes = [
  { path: '', component: IndexSiteComponent },
  { path: 'auth', loadChildren: () => import('./modules/authentication/authentication.module').then(m => m.AuthenticationModule) },
  { path: '**', component: NotFoundSiteComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
