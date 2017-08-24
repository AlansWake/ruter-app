import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CallbackComponent } from '../callback/callback.component';

const routes: Routes = [
  { path: 'home', redirectTo: '' },
  { path: 'callback', component: CallbackComponent }
];


@NgModule({
  imports: [
    RouterModule.forRoot(routes, { enableTracing: true })
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }