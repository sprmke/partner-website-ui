# MIXINS
This directory contains all the application custom mixins.

What:
Mixins are a flexible way to distribute reusable functionalities for Vue components. 

Used for:
Mixins are used to have cleaner code and prevent duplication of codes across our application.
When a component uses a mixin, all options in the mixin will be “mixed” into the component’s own options.
A mixin object can contain any component options. 

**IMPORTANT NOTES**:
Never use mixins to store data, mixins must only contain codes that are always used on multiple components.
You can only declare data to set default value, but keep in mind this will override the component data where you will import your mixins.

Learn more:
https://vuejs.org/v2/guide/mixins.html
