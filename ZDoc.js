// :::::::::::::::: Initial Setup
// ---- Install NativeWind v-4 by :
// npm install nativewind

// ---- Install Tailwind css by :
// npm install --save-dev tailwindcss@3.3.2

// ---- Install reanimated css by :
// npm i react-native-reanimated

// ---- now create tailwind css config file by :
// npx tailwindcss init
// ---- copy and paste the below code on tailwind.config.js file
// tailwind.config.js

// module.exports = {
//   - content: [],
//   +   content: ["./App.{js,jsx,ts,tsx}", "./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"], orr add additional custom file if added
//     theme: {
//       extend: {},
//     },
//     plugins: [],
//   }

// go to babelConfig.config.js file and add 
// module.exports = function (api) {
//   api.cache(true);
//   return {
//     presets: ['babel-preset-expo'],
//     plugins: [
//       "nativewind/babel", 
//       "react-native-reanimated/plugin"
//     ],
//   };
// }; 
