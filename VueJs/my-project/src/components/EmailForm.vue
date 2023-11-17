<template>
  <div>
    <h1>Send Email</h1>
    <input type="email" name="email" placeholder="Recipient Email" v-model="emailData.email" required />
    <input type="text" name="subject" placeholder="Subject" v-model="emailData.subject" required />
    <textarea name="message" placeholder="Message" v-model="emailData.message" required />
    <button type="submit" @click="handleSubmit">Send Email</button>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'EmailForm',
  data() {
    return {
      emailData: {
        email: '',
        subject: '',
        message: '',
      },
    };
  },
  methods: {
    handleSubmit() {
      axios.post('http://localhost:8080/send', this.emailData).then(() => {
        alert('Email sent successfully!');
      }).catch((error) => {
        console.error('Error sending email:', error);
        alert('Failed to send email. Please try again later.');
      });
    },
  },
};
</script>