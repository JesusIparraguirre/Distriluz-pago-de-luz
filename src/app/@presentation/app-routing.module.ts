import { ExtraOptions, Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';


const routes: Routes = [
  {
    path: 'pages',
    // canActivate: [AuthGuard],
    loadChildren: () => import('././pages/pages.module')
      .then(m => m.PagesModule),
  },
  {
    path: 'auth',
    loadChildren: () => import('././auth/auth.module')
      .then(m => m.AuthModule),
  },
   { path: '', redirectTo: 'pages', pathMatch: 'full'},
   { path: '**', redirectTo: 'pages', pathMatch: 'full' },
  // { path: '**', redirectTo: 'pages' },
];

const config: ExtraOptions = {
  useHash: false,
};

@NgModule({
  imports: [RouterModule.forRoot(routes, config)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
