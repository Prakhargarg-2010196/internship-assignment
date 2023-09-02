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
         moduleDirectory: ['node_modules','src'],
       },
      //  Used to give aliases to absolute paths and resolve them 
      //  alias: {
      //    extensions: [".js",".jsx"],
      //    map: [["~", "./src"]]
      //  }
       
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
