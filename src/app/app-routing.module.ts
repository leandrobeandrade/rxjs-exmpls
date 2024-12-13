import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [{
  path: '',
  component: AppComponent,
  children: [
    // {
    //   path: 'header',
    //   loadChildren: () => import('./header/header.module').then(module => module.HeaderModule)
    // }, {
    //   path: 'footer',
    //   loadChildren: () => import('./footer/footer.module').then(module => module.FooterModule)
    // }
  ]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
