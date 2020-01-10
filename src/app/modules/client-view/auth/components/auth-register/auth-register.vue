<template>
  <div class="auth-register col-lg-10">
    <div class="card bg-secondary shadow border-0">
      <div class="card-body px-lg-5 py-lg-5">
        <div class="text-center text-muted mb-4">
          <p class="font-weight-bold">Create New Account</p>
        </div>
        <form @submit.prevent="onSignUp">
          <div class="row">
            <div class="col">
              <p class="mb-1"><label for="name">Account Details</label></p>
              <!-- name -->
              <div class="form-group">
                <div class="input-group input-group-alternative">
                  <div class="input-group-prepend">
                    <label for="name" class="input-group-text"><i class="ni ni-single-02"></i></label>
                  </div>
                  <input v-model="name" id="name" class="form-control" name="name" placeholder="Name" type="text">
                </div>
              </div>
              <!-- email -->
              <div class="form-group">
                <div class="input-group input-group-alternative">
                  <div class="input-group-prepend">
                    <label for="email" class="input-group-text"><i class="ni ni-email-83"></i></label>
                  </div>
                  <input v-model="email" id="email" class="form-control" name="email" placeholder="Email" type="email">
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
              <!-- verify password -->
              <div class="form-group">
                <div class="input-group input-group-alternative">
                  <div class="input-group-prepend">
                    <span class="input-group-text"><i class="ni ni-lock-circle-open"></i></span>
                  </div>
                  <input v-model="verifyPassword" class="form-control" name="verify-password" placeholder="Verify Password" type="password">
                </div>
              </div>
            </div>
            <div class="col">
              <p class="mb-1"><label for="partnership">Company Details</label></p>
              <!-- partnership -->
              <div class="form-group">
                <div class="dropdown w-100">
                  <button id="partnership" class="btn btn-secondary dropdown-toggle with-icon" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <span class="btn-inner--icon">
                      <i class="ni ni-briefcase-24"></i>
                      Partnership type
                    </span>
                  </button>
                  <div class="dropdown-menu" aria-labelledby="partnership">
                    <a class="dropdown-item" href="#">Action</a>
                    <a class="dropdown-item" href="#">Another action</a>
                    <a class="dropdown-item" href="#">Something else here</a>
                  </div>
                </div>
              </div>
              <!-- organization type -->
              <div class="form-group">
                <div class="dropdown w-100">
                  <button id="partnership" class="btn btn-secondary dropdown-toggle with-icon" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <span class="btn-inner--icon">
                      <i class="ni ni-badge"></i>
                      Organization type
                    </span>
                  </button>
                  <div class="dropdown-menu" aria-labelledby="partnership">
                    <a class="dropdown-item" href="#">Action</a>
                    <a class="dropdown-item" href="#">Another action</a>
                    <a class="dropdown-item" href="#">Something else here</a>
                  </div>
                </div>
              </div>
              <!-- organization name -->
              <div class="form-group">
                <div class="input-group input-group-alternative">
                  <div class="input-group-prepend">
                    <span class="input-group-text"><i class="ni ni-building"></i></span>
                  </div>
                  <input v-model="name" class="form-control" name="name" placeholder="Organization Name" type="text">
                </div>
              </div>
              <!-- labor ministry -->
              <div class="form-group">
                <div class="custom-control custom-control-alternative custom-checkbox">
                  <input class="custom-control-input" id="customCheckRegister" type="checkbox">
                  <label class="custom-control-label" for="customCheckRegister"><span>Is your agency branch of Labor Ministry/Department?</span></label>
                </div>
              </div>
              <!-- peso office -->
              <div class="form-group">
                <div class="custom-control custom-control-alternative custom-checkbox">
                  <input class="custom-control-input" id="customCheckRegister2" type="checkbox">
                  <label class="custom-control-label" for="customCheckRegister2"><span>Is your agency PESO Office?</span></label>
                </div>
              </div>
            </div>
          </div>

          <div class="row mt-4">
            <div class="col">
              <p class="mb-1"><label for="">Location Details</label></p>
              <!-- location country -->
              <div class="form-group">
                <div class="dropdown w-100">
                  <button id="country" class="btn btn-secondary dropdown-toggle with-icon" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <span class="btn-inner--icon">
                      <i class="ni ni-square-pin"></i>
                      Country
                    </span>
                  </button>
                  <div class="dropdown-menu" aria-labelledby="country">
                    <a class="dropdown-item" href="#">Action</a>
                    <a class="dropdown-item" href="#">Another action</a>
                    <a class="dropdown-item" href="#">Something else here</a>
                  </div>
                </div>
              </div>
              <!-- location province -->
              <div class="form-group">
                <div class="dropdown w-100">
                  <button id="province" class="btn btn-secondary dropdown-toggle with-icon" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <span class="btn-inner--icon">
                      <i class="ni ni-square-pin"></i>
                      Province
                    </span>
                  </button>
                  <div class="dropdown-menu" aria-labelledby="province">
                    <a class="dropdown-item" href="#">Action</a>
                    <a class="dropdown-item" href="#">Another action</a>
                    <a class="dropdown-item" href="#">Something else here</a>
                  </div>
                </div>
              </div>
              <!-- location municipality -->
              <div class="form-group">
                <div class="input-group input-group-alternative">
                  <div class="input-group-prepend">
                    <span class="input-group-text"><i class="ni ni-square-pin"></i></span>
                  </div>
                  <input v-model="name" class="form-control" name="name" placeholder="Municipality" type="text">
                </div>
              </div>
              <!-- location barangay -->
              <div class="form-group">
                <div class="input-group input-group-alternative">
                  <div class="input-group-prepend">
                    <span class="input-group-text"><i class="ni ni-square-pin"></i></span>
                  </div>
                  <input v-model="name" class="form-control" name="name" placeholder="Barangay" type="text">
                </div>
              </div>
              <!-- location building -->
              <div class="form-group">
                <div class="input-group input-group-alternative">
                  <div class="input-group-prepend">
                    <span class="input-group-text"><i class="ni ni-square-pin"></i></span>
                  </div>
                  <input v-model="name" class="form-control" name="name" placeholder="Village/Subd/Building/Floor" type="text">
                </div>
              </div>
            </div>
            <div class="col">
              <p class="mb-1"><label for="">Contact Details</label></p>
              <!-- contact person -->
              <div class="form-group">
                <div class="input-group input-group-alternative">
                  <div class="input-group-prepend">
                    <span class="input-group-text"><i class="ni ni-circle-08"></i></span>
                  </div>
                  <input v-model="name" class="form-control" name="name" placeholder="Contact Person" type="text">
                </div>
              </div>
              <!-- contact phone number -->
              <div class="form-group">
                <div class="input-group input-group-alternative">
                  <div class="input-group-prepend">
                    <span class="input-group-text"><i class="ni ni-mobile-button"></i></span>
                  </div>
                  <input v-model="name" class="form-control" name="name" placeholder="Contact Phone Number" type="number">
                </div>
              </div>
            </div>
          </div>
          
          
          
          <div class="row my-4">
            <div class="col-12">
              <div class="custom-control custom-control-alternative custom-checkbox">
                <input class="custom-control-input" id="customCheckRegister" type="checkbox">
                <label class="custom-control-label" for="customCheckRegister"><span>I agree with the <a href="#">Privacy Policy</a></span></label>
              </div>
            </div>
          </div>
          <div class="text-center">
            <button type="submit" :class="{'disabled': isSubmitted}" class="btn btn-primary my-4 w-100">Create account</button>
          </div>
          <!-- auth message -->
          <div v-if="authStatus.status !== null" :class="authStatus.status === 'failed' ? 'alert-danger' : 'alert-success'" class="mt-4 d-flex align-items-center alert alert-dismissible fade show" role="alert">
            <span class="alert-inner--icon"><i class="fa fa-exclamation-triangle" aria-hidden="true"></i></span>
            <span class="alert-inner--text">{{authStatus.message}}</span>
          </div>
          <!-- login link -->
          <div class="bottom-links">
            <p class="text-center">Already have an account? <router-link to="/login">Login</router-link></p>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script src="./auth-register.js"></script>

<style lang="scss" scoped>
  @import './auth-register.scss';
</style>

