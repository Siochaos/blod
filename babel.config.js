module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
          alias: {
            '@components': './src/Components',
            '@screens': './src/Screens',
            '@theme': './src/Theme',
            '@hooks': './src/Hooks',
          },
        },
      ],
      [
        "module:react-native-dotenv",
        {
            moduleName: "@env",
            path: ".env",
        },
    ],
    ],
  };
};
