// // vue test utils: https://vue-test-utils.vuejs.org/

// // component
// import ErrorView from '@/app/modules/<componentPath>';

// // tests
// import { shallowMount, createLocalVue } from '@vue/test-utils';
// import TestCommonUtils from '@/app/tests/unit/utils/test-common-utils';
// import TestCommonMockData from '@/app/tests/unit/static/test-common-mock-data';

// // core packages
// import Vue from 'vue';
// import Vuex from 'vuex';
// import VueRouter from 'vue-router';
// import flushPromises from 'flush-promises';

// // 3rd party libraries
// import Vuelidate from 'vuelidate';

// const router = new VueRouter();
// const localVue = createLocalVue();
// localVue.use(Vuex);
// localVue.use(Vuelidate);

// // filters
// Vue.filter('formatSample', () => 'formatSample');

// // mocks
// jest.mock('axios');
// jest.mock('@/app/services/api-url');
// const $store = {
//   getters: {
//     getStoreData() { return {} } 
//   }
// }
// const $route = {
//   meta: {name : ''}
// }
// const $v = {
//   parentObject: {
//     objectToValidate: {
//       $touch : () => '',
//       $error : () => ''
//     },
//   },
//   $reset : () => ''
// };

// describe('ErrorView', () => {
//   let ErrorViewVM;
//   let commonData;
//   let wrapper;
//   let store;
//   let utils;

//   beforeEach(async (done) => {
//     store = new Vuex.Store({
//       modules: {
//         sampleStoreData:{
//           namespaced: true,
//           state:{
//           },
//           mutations: {
//           },
//           actions: {
//           },
//           getters: {
//           }
//         }
//       }
//     });
//     commonData = new TestCommonMockData;
//     wrapper = shallowMount(ErrorView, {
//       localVue,
//       computed: {},
//       propsData: {},
//       components: {},
//       mixins: [],
//       methods: {},
//       stubs: {},
//       router,
//       mocks: {
//         $store,
//         $route,
//         $v
//       },
//     });
//     utils = new TestCommonUtils(wrapper, expect);
//     ErrorViewVM = wrapper.vm;
//     await flushPromises();
//     done();
//   });

//   it('renders without errors', () => {
//     expect(wrapper.isVueInstance()).toBeTruthy();
//   });

//   it('should show error-view element', () => {
//     utils.domHas('.error-view');
//   })
// });