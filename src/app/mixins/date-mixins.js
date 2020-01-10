export const dateMixins = {
  data() {
    // reusable date-mixins data goes here
  },
  methods: {
    sortDateAsc(dateArray, attrName) {
      dateArray.sort(function(a,b){
        return moment(b[attrName]) + moment(a[attrName]);
      });
    },
    sortDateDesc(dateArray, attrName) {
      Array.dateArray.sort(function(a,b){
        return moment(b[attrName]) - moment(a[attrName]);
      });
    },
    validateDateFormat(date, format){
      // set condition depends if date has default or custom format
      const condition = format ? moment(date, format).format(format) === date : moment(date, 'DD-MMM-YYYY').format('DD-MMM-YYYY') === date;
      
      // return boolean based on condition
      return condition ? false : true;
    },
    validateDateTimeFormat(date, format) {
      // set condition depends if date has default or custom format
      const condition = format ? moment(date, format).format(format) === date : moment(date, 'DD-MMM-YYYY, HH:mm a').format('DD-MMM-YYYY, HH:mm a') === date;
     
      // return boolean based on condition
      return condition ? false : true;
    },
    validateTimeFormat(time, format) {
      // set condition if has default or custom format
      const condition = format ? moment(time, format).format(format) === time : moment(time, 'HH:mm').format('HH:mm') === time;
      
      // return boolean based on condition
      return condition ? false : true;
    },
    etBusinessDays(date, days) {
      let cloneDate = moment(date, 'DD-MMM-YYYY'); // use a clone
      let addRange = 0;
      for(let i = 1; i <= days; i++){
        let d = cloneDate.add(1, 'days');
        if (d.isoWeekday() === 6 || d.isoWeekday() === 7) {
          addRange++;
        }
      }
      return addRange;
    },
    checkIfDateIsWeekEnd(date){
      let parseDate = moment(date, 'DD-MMM-YYYY');
      if(parseDate.isoWeekday() === 7){
        return parseDate.add(1, 'days').format('DD-MMM-YYYY');
      } else if(parseDate.isoWeekday() === 6){
        return parseDate.add(2, 'days').format('DD-MMM-YYYY');
      }
      return date;
    }
  }
}