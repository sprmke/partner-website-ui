<template>
  <main class="home-container">
      <section class="section position-relative section-lg section-shaped pt-100 pb-250 pw-bg-primary-gradient">
        <div class="container d-flex">
          <div class="col px-0">
            <div class="row">
              <div class="col-lg-6">
                <h1 class="display-3 text-white">Lorem ipsum dolor sit amet</h1>
                <p class="lead text-white">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis, esse nisi. Culpa optio exercitationem sunt.</p>
                <div class="btn-wrapper">
                  <router-link :to="'/login'" class="btn btn-white btn-icon mb-3 mb-sm-0">
                    <span class="btn-inner--text">LEARN MORE</span>
                  </router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="separator separator-bottom separator-skew">
          <svg x="0" y="0" viewBox="0 0 2560 100" preserveAspectRatio="none" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <polygon class="fill-white" points="2560 0 2560 100 0 100"></polygon>
          </svg>
        </div>
    </section>
  </main>
</template>

<script src="./home-container.js"></script>

<style lang="scss" scoped>
  @import './home-container.scss';
</style>

