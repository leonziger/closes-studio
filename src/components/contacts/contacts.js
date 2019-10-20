import Vue from 'vue/dist/vue.esm';
import {openThanksModal} from "../thanks/thanks";

new Vue({
  el: '#contact-form',
  data: {
    focused: false,
    name: '',
    email: '',
    message: '',
    name_error: '',
    email_error: '',
    phone_error: '',
    сheckTextField: /^([а-яА-ЯЁёa-zA-Z\s]{4,})$/,
    checkEmailField: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  },

  methods: {

    checkForm: function(e) {

      this.checkFields(e);
      if (this.validName(this.name) && this.validEmail(this.email)) {
        this.name_error = '';
        this.email_error = '';
        openThanksModal();
        this.clearForm();
        return true;
      }

    },

    checkFields: function(e) {
      const contactName = document.querySelector('[name="name"]');
      const contactEmail = document.querySelector('[name="email"]');

      if (!this.name) {
        this.name_error = 'Напишите Ваше имя';
        contactName.classList.add('contacts-form__field_active');
      } else if (!this.validName(this.name)) {
        this.name_error = 'Напишите Ваше имя правильно';
        contactName.classList.add('contacts-form__field_active');
      }  else {
        this.name_error = '';
        contactName.classList.remove('contacts-form__field_active');
      }

      if (!this.email) {
        this.email_error = 'Напишите Ваш email';
        contactEmail.classList.add('contacts-form__field_active');
      } else if (!this.validEmail(this.email)) {
        this.email_error = 'Напишите Ваш email правильно';
        contactEmail.classList.add('contacts-form__field_active');
      }  else {
        this.email_error = '';
        contactEmail.classList.remove('contacts-form__field_active');
      }

    },

    validName(name) {
      return this.сheckTextField.test(name);
    },

    validEmail(email) {
      return this.checkEmailField.test(email);
    },

    clearForm() {
      this.name = '';
      this.email = '';
    }
  }
});

