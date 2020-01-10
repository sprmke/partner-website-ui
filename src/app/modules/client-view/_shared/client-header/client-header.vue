<template>
  <header class="client-header">
    <nav class="navbar navbar-expand-lg navbar-dark pw-bg-primary-gradient">
      <div class="container">
        <!-- app title -->
        <router-link to="/" class="navbar-brand">Partner Website</router-link>

        <!-- hamburger menu -->
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-primary" aria-controls="navbar-primary" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse">
          <!-- mobile menu-->
          <div class="navbar-collapse-header">
            <div class="row">
              <div class="col-6 collapse-brand">
                <router-link to="/">
                  Partner Website
                </router-link>
              </div>
              <div class="col-6 collapse-close">
                <button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#navbar-primary" aria-controls="navbar-primary" aria-expanded="false" aria-label="Toggle navigation">
                  <span></span>
                  <span></span>
                </button>
              </div>
            </div>
          </div>

          <!-- nav menus -->
          <ul class="navbar-nav ml-lg-auto">
            <li class="nav-item">
              <router-link class="nav-link" to="/">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/jobs">About</router-link>
            </li>
            <li class="nav-item dropdown">
              <router-link @click.native="onShowDropdown" class="nav-link" to="/" id="" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Services</router-link>
              <div :class="{'show': showDropdown}" class="dropdown-menu dropdown-menu-right">
                <router-link class="dropdown-item" to="/">Action</router-link>
                <router-link class="dropdown-item" to="/">Another action</router-link>
                <div class="dropdown-divider"></div>
                <router-link class="dropdown-item" to="/">Something else here</router-link>
              </div>
            </li>
          </ul>

          <!-- login -->
          <router-link to="/login" class="btn btn-neutral btn-icon ml-sm-3 d-none d-md-block">
            <span class="btn-inner--icon"><i class="ni ni-single-02"></i></span>
            <span class="btn-inner--text">Login</span>
          </router-link>
        </div>
      </div>
    </nav>
  </header>
</template>

<script src="./client-header.js"></script>

<style lang="scss" scoped>
  @import './client-header.scss';
</style>

