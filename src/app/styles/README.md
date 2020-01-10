# STYLES
This directory contains all global applicatiotn css/scss related styles.

**IMPORTANT NOTES**
This application uses Argon Design system as base and theme style.
https://demos.creative-tim.com/argon-design-system/

Each scss files must be organized into different modules/submodules.
Never use css file unless it is a vendor style, use .scss instead to seperate or organize styles.

Every sass file must be imported to a single module file which is based on their module name with two underscore prefix on it. This will help us to determine that this is the style holder of a module. 
ex. 'base' directory > ___base.scss


Directory details:
1. base
- heads up when you are going to use any third party theme styles, it may conflict your base styles
- you can also modify the default base styles depends on what you want
- must only contain base styles of our application
2. helpers
- must only contain helper classes, reusable sass global values and functions
3. themes
- contain styles for theming the applciation
4. vendors
- contain any vendor related styles


Learn more:
https://sass-lang.com/documentation