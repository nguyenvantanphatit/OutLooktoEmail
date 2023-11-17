import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { EmailService } from './services/api';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SendGmailComponent } from './component/send-gmail/send-gmail.component';
import { LoginComponent } from './component/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    SendGmailComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [
    EmailService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
