<template>
  <div class="jobs-table">
    <div class="table-responsive">
      <table class="table align-items-center table-flush">
        <thead class="thead-light">
          <tr>
            <th scope="col">Job Ttile</th>
            <th scope="col">Type</th>
            <th scope="col">Company</th>
            <th scope="col">Location</th>
            <th scope="col">Workhours</th>
            <th scope="col">Contact Details</th>
            <th scope="col">Language</th>
            <th scope="col">Job Description</th>
            <th scope="col">Educational Requirements</th>
            <th scope="col">Experience Requirements</th>
            <th scope="col">Salary</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="job in jobList" :key="job.job_post_id">
            <td :title="job.job_role">
              {{job.job_role}}
            </td>
            <td>
              {{job.post_type.job_type.name}}
            </td>
            <td>
              {{job.company.company_name}}
            </td>
            <td :title="`${job.location.address_street}${job.location.address_street ? ',' : ''} ${job.location.address_city}${job.location.address_city ? ',' : ''} ${job.location.address_country}`">
              <template v-if="job.location.address_street">
                {{job.location.address_street}},
              </template>
              <template v-if="job.location.address_city">
                {{job.location.address_city}},
              </template>
                {{job.location.address_country}}
              </td>
            <td :title="job.work_hours">{{job.work_hours}}</td>
            <td :title="job.contact_person">{{job.contact_person}}</td>
            <td>{{job.language}}</td>
            <td :title="job.job_description">{{job.job_description}}</td>
            <td>
              {{job.post_requirement[0].name}}
            </td>
            <td>
              {{job.post_requirement[1].name}}
            </td>
            <td :title="job.salary">{{job.salary}}</td>
            <td class="text-right">
              <div class="dropdown">
                <a class="btn btn-sm btn-icon-only text-light" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <i class="fas fa-ellipsis-v"></i>
                </a>
                <div class="dropdown-menu dropdown-menu-right dropdown-menu-arrow">
                  <a class="dropdown-item" href="#">Action</a>
                  <a class="dropdown-item" href="#">Another action</a>
                  <a class="dropdown-item" href="#">Something else here</a>
                </div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="card-footer py-4">
      <nav aria-label="...">
        <ul class="pagination justify-content-end mb-0">
          <li class="page-item disabled">
            <a class="page-link" href="#" tabindex="-1">
              <i class="fas fa-angle-left"></i>
              <span class="sr-only">Previous</span>
            </a>
          </li>
          <li class="page-item active">
            <a class="page-link" href="#">1</a>
          </li>
          <li class="page-item">
            <a class="page-link" href="#">2 <span class="sr-only">(current)</span></a>
          </li>
          <li class="page-item"><a class="page-link" href="#">3</a></li>
          <li class="page-item">
            <a class="page-link" href="#">
              <i class="fas fa-angle-right"></i>
              <span class="sr-only">Next</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script src="./jobs-table.js"></script>

<style lang="scss" scoped>
  @import './jobs-table.scss';
</style>

