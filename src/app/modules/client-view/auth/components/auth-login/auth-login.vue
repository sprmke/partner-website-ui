<template>
  <div class="auth-login col-lg-5">
    <div class="card bg-secondary shadow border-0">
      <div class="card-body px-lg-5 py-lg-5">
        <div class="text-center text-muted mb-4">
          <p class="font-weight-bold">Login Your Account</p>
        </div>
        <form @submit.prevent="onSignIn">
          <!-- email -->
          <div class="form-group mb-3">
            <div class="input-group input-group-alternative">
              <div class="input-group-prepend">
                <span class="input-group-text"><i class="ni ni-email-83"></i></span>
              </div>
              <input v-model="email" class="form-control" name="email" placeholder="Email" type="email">
            </div>
          </div>
          <!-- password -->
          <div class="form-group">
            <div class="input-group input-group-alternative">
              <div class="input-group-prepend">
                <span class="input-group-text"><i class="ni ni-lock-circle-open"></i></span>
              </div>
              <input v-model="password" class="form-control" name="password" placeholder="Password" type="password">
            </div>
          </div>
          <div class="text-center">
            <button type="submit" :class="{'disabled': isSubmitted}" class="btn btn-primary my-4 w-100">Sign in</button>
          </div>
          <!-- auth message -->
          <div v-if="authStatus.status !== null" :class="authStatus.status === 'failed' ? 'alert-danger' : 'alert-success'" class="mt-2 d-flex align-items-center alert alert-dismissible fade show" role="alert">
            <span class="alert-inner--icon"><i class="fa fa-exclamation-triangle" aria-hidden="true"></i></span>
            <span class="alert-inner--text">{{authStatus.message}}</span>
          </div>
          <!-- registration link -->
          <div class="bottom-links">
            <p class="text-center">Don't have an account? <router-link to="/register">Register</router-link></p>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script src="./auth-login.js"></script>

<style lang="scss" scoped>
  @import './auth-login.scss';
</style>

