<template>
  <div class="jobs-container">
    <div class="container-fluid mt--7">
      <div class="row">
        <div class="col">
          <div class="card shadow">
            <div class="card-header border-0 d-flex justify-content-between align-items-center">
              <h3 class="mb-0">Job List</h3>
              <button class="btn btn-icon btn-3 btn-primary" type="button">
                <span class="btn-inner--icon"><i class="fas fa-plus"></i></span>
                <span class="btn-inner--text">Add New Job</span>
              </button>
            </div>
            <!-- table -->
            <jobs-table :jobList="jobList"/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script src="./jobs-container.js"></script>

<style lang="scss" scoped>
  @import './jobs-container.scss';
</style>

