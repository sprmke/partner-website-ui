export default {
  name: 'AuthRegister',
  data() {
    return {
      name: '',
      email: '',
      password: '',
      isSubmitted: false
    }
  },
  computed: {
    authStatus() {
      const authStatus = this.$store.getters.getAuthStatus;
      // reset submitted status if auth response status is failed
      if (authStatus.status === 'failed') {
        this.isSubmitted = false;
      }
      return authStatus;
    }
  },
  methods: {
    onSignUp() {
      this.isSubmitted = true;
      this.$store.dispatch('authenticateUser', {
        name: this.name,
        email: this.email,
        password: this.password,
        isLogin: false
      });
    }
  },
}