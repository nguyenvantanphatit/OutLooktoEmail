// src/app/components/send-gmail.component.ts
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmailData } from '../../interface/send-gmail';
import { EmailService } from '../../services/api';

@Component({
  selector: 'app-send-gmail',
  templateUrl: './send-gmail.component.html',
  styleUrls: ['./send-gmail.component.css']
})
export class SendGmailComponent implements OnInit {

  sendGmailForm!: FormGroup;

  constructor(private fb: FormBuilder, private emailService: EmailService) {
    this.sendGmailForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      subject: ['', Validators.required],
      message: ['', Validators.required]
    });
  }

  ngOnInit(): void { }

  handleSubmit() {
    if (this.sendGmailForm.valid) {
      this.emailService.sendEmail(this.sendGmailForm.value).subscribe(
        () => {
          alert('Email sent successfully!');
        },
        (error) => {
          console.error('Error sending email:', error);
          alert('Failed to send email. Please try again later.');
        }
      );
    }
  }

}