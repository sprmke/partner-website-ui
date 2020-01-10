<template>
  <div class="login-view">
    <main class="auth-container">
      <section class="section pt-100 pb-100 pw-bg-primary-gradient">
        <div class="container">
          <div class="row justify-content-center">
              <!-- login or register -->
            <router-view/>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script src="./auth-container.js"></script>

<style lang="scss" scoped>
  @import './auth-container.scss';
</style>

