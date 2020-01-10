
import { AUTH, AUTH_ENDPOINTS } from '@/app/services/modules/auth-service';
import { API, ENDPOINTS } from '@/app/services/services';
import router from '@/app/routes/router.js';

const authUser = {
  state: {
    token: null,
    user: null,
    authStatus: {
      message: '',
      status: null
    }
  },
  mutations: {
    setToken(state, token) {
      state.token = token;
    },
    clearToken(state) {
      state.token = null;
    },
    setAuthStatus(state, authStatus) {
      state.authStatus = authStatus;
    },
  },
  actions: {
    authenticateUser({commit, dispatch}, authData) {
      // reset invalid message
      commit('setAuthStatus', {
        message: '',
        status: null
      });

      // set endpoint if signup or signin
      let authEndpoint = AUTH_ENDPOINTS.POST_SIGN_UP;
      if (authData.isLogin) {
        authEndpoint = AUTH_ENDPOINTS.POST_SIGN_IN;
      }

      // set auth body params
      let bodyParams = {
        email: authData.email,
        password: authData.password,
        returnSecureToken: true
      }
      // add name to body params if sign up
      if (!authData.isLogin) {
        bodyParams.name = authData.name;
      }

      // call firebase auth API
      AUTH.post(`${authEndpoint}?key=${process.env.VUE_APP_AUTH_API_KEY}`, bodyParams)
        .then(res => {
          console.log('authenticateUser POST_SIGN_UP res::', res);

          // show success message
          if (!authData.isLogin) {
            commit('setAuthStatus', {
              message: 'Successfully registered!',
              status: 'success'
            });
          }

          // store token
          commit('setToken', res.data.idToken);

          const token = res.data.idToken;
          const tokenExpires =  res.data.expiresIn * 1000;
          const tokenExpirationDate = new Date().getTime() + Number.parseInt(tokenExpires);
          
          // save token and expires date to local storage
          localStorage.setItem('token', token);
          localStorage.setItem('tokenExpirationDate', tokenExpirationDate);

          // store user
          dispatch('storeUser', authData);
        })
        .catch((err, res) => {
          console.log('authenticateUser POST_SIGN_UP err::', err);

          // show invalid message
          if (authData.isLogin) {
            commit('setAuthStatus', {
              message: 'Invalid email or password.',
              status: 'failed'
            });
          } else {
            commit('setAuthStatus', {
              message: 'Something went wrong!',
              status: 'failed'
            });
          }
        });
    },
    storeUser({state}, userData) {
      if (!state.token) {
        return;
      }
      API.post(`${ENDPOINTS.POST_USERS}.json?auth=${state.token}`, userData)
      .then(res => {
        console.log('storeUser POST_USERS res::', res);
        
        // redirect to profile page if new user is successfully registered
        router.push('/profile');
      })
      .catch(err => {
        console.log('storeUser POST_USERS err::', err);
      });
    },
  },
  getters: {
    getAuthStatus(state) {
      return state.authStatus;
    }
  }
};

export default authUser;
