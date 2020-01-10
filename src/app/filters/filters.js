import moment from 'moment';

export default {
  install(Vue, options) {
    // Plugin: vue2-filters
    // Filters: capitalize, uppercase, lowercase, placeholder, truncate, currency, pluralize, ordinal, limitBy, filterBy, find, orderBy
    // Link: https://www.npmjs.com/package/vue2-filters

    // TEXT AND NUMBERS
    // numbers to string
    Vue.filter('numbersToString', number => {
      if (number === 0 || number === '0') {
        return 'No';
      } else if (number === 1 || number === '1') {
        return 'Yes';
      }
    });

    // round numbers
    Vue.filter('roundNumbers', (number,fixPoint) => {
        return parseFloat(number.toFixed(fixPoint||2));
    });


    // DATE
    // format date
    Vue.filter('formatDate', (value, format) => {
      if(value){
        return moment(String(value)).format(format);
      }
      return '';
    });


    // SIZE
    // format size 
    Vue.filter('formatSize', size => {
      // 1TB
      if (size > 1024 * 1024 * 1024 * 1024) {
        return (size / 1024 / 1024 / 1024 / 1024).toFixed(2) + ' TB'
      // 1GB
      } else if (size > 1024 * 1024 * 1024) {
        return (size / 1024 / 1024 / 1024).toFixed(2) + ' GB'
      // 1MB
      } else if (size > 1024 * 1024) {
        return (size / 1024 / 1024).toFixed(2) + ' MB'
      // 1KB
      } else if (size > 1024) {
        return (size / 1024).toFixed(2) + ' KB'
      }
      // 1B
      return size.toString() + ' B'
    });

    
    // LIST
    // array to list
    Vue.filter('arrayToList', (array, seperator) => {
      if (array && array.length > 0) {
        if (typeof array !== 'string') {
          return array.join(`${seperator} `);
        } else {
          return array;
        }
      }
    });
  }
}
