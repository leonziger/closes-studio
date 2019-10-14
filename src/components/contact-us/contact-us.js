import Vue from 'vue/dist/vue.esm';

new Vue({
  el: '#vue-form',
  data: {
    focused: false,
    name: '',
    email: '',
    phone: '',
    message: '',
    name_error: '',
    email_error: '',
    phone_error: '',
    checkPhoneField: /^\d{12}$/,
    сheckTextField: /^([а-яА-ЯЁёa-zA-Z\s]{4,})$/,
    checkEmailField: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  },

  methods: {

    checkForm: function(e) {

      this.checkFields(e);
      if (this.validName(this.name) && this.validPhone(this.phone) && this.validEmail(this.email)) {
        this.name_error = '';
        this.email_error = '';
        this.phone_error = '';
          alert(this.name + ", thanks for filling this form'");
        this.clearForm();
        return true;
      }

    },

    checkFields: function(e) {
      const contactName = document.querySelector('[name="name"]')
      const contactEmail = document.querySelector('[name="email"]')
      const contactPhone = document.querySelector('[name="phone"]')

      if (!this.name) {
        this.name_error = 'Write your name';
        contactName.classList.add('contact-us__field_active');
      } else if (!this.validName(this.name)) {
        this.name_error = 'Write your name correctly';
        contactName.classList.add('contact-us__field_active');
      }  else {
        this.name_error = '';
        contactName.classList.remove('contact-us__field_active');
      }

      if (!this.email) {
        this.email_error = 'Write your email';
        contactEmail.classList.add('contact-us__field_active');
      } else if (!this.validEmail(this.email)) {
        this.email_error = 'Write your email correctly';
        contactEmail.classList.add('contact-us__field_active');
      }  else {
        this.email_error = '';
        contactEmail.classList.remove('contact-us__field_active');
      }

      if (!this.phone) {
        this.phone_error = 'Write your phone, 12 digits';
        contactPhone.classList.add('contact-us__field_active');
      } else if (!this.validPhone(this.phone)) {
        this.phone_error = 'Write your phone correctly';
        contactPhone.classList.add('contact-us__field_active');
      }  else {
        this.phone_error = '';
        contactPhone.classList.remove('contact-us__field_active');
      }

    },

    validPhone(phone) {
      return this.checkPhoneField.test(phone);
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
        this.phone = '';
    }
  }
});

