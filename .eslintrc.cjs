const path = require('path');
module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:import/recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
    'prettier',
  ],
  
 
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: {
    react: { version: '18.2' },
     'import/resolver': {
      node: {
         extensions: ['.js', '.jsx'],
        //  includes the modules from these directories
        //  moduleDirectory: ['node_modules','src'],
       },
      //  Used to give aliases to absolute paths and resolve them 
       alias: {
         extensions: [".js",".jsx"],
         map: [["~", path.resolve(__dirname, './src')],
         ["views",path.resolve(__dirname,"./src/views")],
         ["components",path.resolve(__dirname,"./src/components")]],
       }
       
    },
  },
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
  },
}
