# EVENT BUS
This directory contains the applcation event bus.

What:
Vue event bus are used to emit and listen to events.

Used for:
It is commonly used to emit events from differ apart components.
It is used to store centralized code you want to access on different places in the application.

**IMPORTANT NOTES**
It is an alternative approach on using Vuex store specially for simple/straight-forward state mangement.
Be careful on using when emitting with complex logic or big data across components.

Learn More:
https://medium.com/@andrejsabrickis/https-medium-com-andrejsabrickis-create-simple-eventbus-to-communicate-between-vue-js-components-cdc11cd59860

Event Bus vs Mixins:
https://stackoverflow.com/questions/48305830/what-is-the-difference-between-event-bus-and-mixins-in-vuejs