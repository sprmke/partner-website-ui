import JobsTable from '@/app/modules/dashboard-view/jobs/components/jobs-table/jobs-table.vue';
import { API, ENDPOINTS } from '@/app/services/services.js';

export default {
  name: 'JobsContainer',
  components: {
    JobsTable
  },
  directive: {},
  filters: {},
  mixins: [],
  props: {},
  data() {
    return {
      jobList: []
    }
  },
  computed: {},
  watch: {},
  created() {
    this.getJobList();
  },
  methods: {
    getJobList() {
      API.get(ENDPOINTS.GET_JOBS)
        .then(response => {
          if (response.data.status === 'Success') {
            this.jobList = response.data.result;
          }
        })
        .catch(error => {
          console.log('GET_JOBS err::', error);
        });
    }
  },
  // third party libraries
}