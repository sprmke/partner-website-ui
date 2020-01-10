export default {
  name: 'AuthLogin',
  data() {
    return {
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
    onSignIn () {
      this.isSubmitted = true;
      this.$store.dispatch('authenticateUser', {
        email: this.email,
        password: this.password,
        isLogin: true
      })
    }
  },
}