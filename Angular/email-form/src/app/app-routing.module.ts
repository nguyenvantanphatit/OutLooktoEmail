import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SendGmailComponent } from './component/send-gmail/send-gmail.component';
const routes: Routes = [
  { path: 'send-gmail', component: SendGmailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
