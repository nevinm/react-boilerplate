/*eslint-disable*/

// No need to build the DLL in production
if (process.env.NODE_ENV === 'production') {
  process.exit(0)
}

require('shelljs/global');

rm('-rf', 'node_modules/react-boilerplate-dlls')
mkdir('node_modules/react-boilerplate-dlls')

echo('Building the Webpack DLL...')
exec('cross-env BUILDING_DLL=true webpack --display-chunks --color --config internals/webpack/webpack.dll.babel.js')
