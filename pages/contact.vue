<template>
  <div>
    <div class="container">
      <div v-if="!submitted">
        <div id="contact-form" class="contact-form">
          <h1 class="contact-form_title">Contact Form</h1>
          <ul class="errors" v-if="errors.length">
            <li v-for="error in errors" :key="error">{{error}}</li>
          </ul>
          <div class="separator"></div>

          <form class="form" @submit.prevent="submitForm">
            <input
              required
              name="name"
              v-model="form.full_name"
              placeholder="Name"
              type="text"
              autocomplete="off"
            >
            <input
              required
              name="email"
              v-model="form.email"
              placeholder="E-mail"
              type="email"
              autocomplete="off"
            >
            <textarea name="message" v-model="form.body" rows="4" placeholder="Message"></textarea>
            <button class="button">Send</button>
          </form>
        </div>
      </div>
      <div v-else>Your form has been submitted! thanks</div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      url: 'http://villagetest.website/wp-json/send-contact-form/v1/contact',
      form: {
        full_name: '',
        email: '',
        body: ''
      },
      errors: [],
      submitted: false
    }
  },
  methods: {
    submitForm() {
      axios
        .post(this.url, this.form)
        .then(response => {
          console.log(response)
          this.errors = []
          if (this.errors == 0) {
            this.submitted = true
          }
        })
        .catch(error => {
          this.errors = error.response.data.message
        })
    }
  },
  mounted() {}
}
</script>

<style lang="scss" scoped>
.contact-form {
  font-family: 16px;
  margin: 4rem auto;
  max-width: 600px;
  width: 100%;
}
.contact-form .separator {
  border-bottom: solid 1px #ccc;
  margin-bottom: 15px;
}
.contact-form .form {
  display: flex;
  flex-direction: column;
  font-size: 16px;
}
.contact-form_title {
  color: #333;
  text-align: left;
  font-size: 28px;
}
.contact-form input[type='email'],
.contact-form input[type='text'],
.contact-form textarea {
  border: solid 1px #e8e8e8;
  font-family: 'Roboto', sans-serif;
  padding: 10px 7px;
  margin-bottom: 15px;
  outline: none;
}
.contact-form textarea {
  resize: none;
}
.contact-form .button {
  background: #2980b9;
  border: solid 1px #2980b9;
  color: white;
  cursor: pointer;
  padding: 10px 50px;
  text-align: center;
  text-transform: uppercase;
}
.contact-form .button:hover {
  background: #ea532a;
  border: solid 1px #ea532a;
}
.contact-form input[type='email'],
.contact-form input[type='text'],
.contact-form textarea,
.contact-form .button {
  font-size: 15px;
  border-radius: 3px;
}
</style>