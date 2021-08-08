module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo',"module:metro-react-native-babel-preset"],
    plugins: [
      'react-native-reanimated/plugin',
       [
          "module-resolver",
          {
            "root": ["./src"],
            "extensions": [
              ".ios.ts",
              ".android.ts",
              ".ts",
              ".ios.tsx",
              ".android.tsx",
              ".tsx",
              ".jsx",
              ".js",
              ".json"
            ],
            "alias": {
              "@src": "./src",
              "@assets": "./src/assets",
              "@components": "./src/components",
              "@shared": "./src/shared",
              "@utils": "./src/utils",
              "@store": "./src/store",
            }
          } 
        ] 
      ]
  };
};