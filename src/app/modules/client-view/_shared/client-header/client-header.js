export default {
  name: 'ClientHeader',
  data() {
    return {
      showDropdown: false
    }
  },
  methods: {
    onShowDropdown() {
      console.log('1::');
      this.showDropdown = !this.showDropdown;
    }
  },
}