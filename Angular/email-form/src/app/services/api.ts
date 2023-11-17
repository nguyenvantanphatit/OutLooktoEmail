// src/app/services/api/email.service.ts
import { HttpClient } from '@angular/common/http';
import { EmailData } from '../interface/send-gmail';
import { Observable } from 'rxjs';

export class EmailService extends HttpClient {

  sendEmail(emailData: EmailData): Observable<any> {
    return this.post('http://localhost:8080/send', emailData);
  }
}