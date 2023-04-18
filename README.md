# nupat-it-assessment-2
Building the project I split my code into components and pages the components having the various parts of the home page and the home.jsx having the page that displays all components together\
I made some changes to the tailwind.config.js file to adjust the breakpoints as stated on the figma design and to prset some of the colors and other properties which would be used in the project\
I encountered only a few isses which are:
1. Having to move all the custom configs in the tailwind.config.js file to the extend object to avoid all the other preset classes there being overwritten\
2. Adjusting the display of the UI to allow scrolling only on the right part of the Home Page for screens less than 1920px because the content of the home page overflowed when building the UI, so this makes for a good user experience and also keeps the original design.
