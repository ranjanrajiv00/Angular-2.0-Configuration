# Angular 2.0 Configuration 
npm init -y

echo >> tsconfig.json

echo >> index.html

mkdir src

cd src

echo >> app.component.ts

echo >> app.module.ts

echo >> main.ts

cd ..

npm install @angular/core --save

npm install rxjs@5.0.1 --save

npm install zone.js@0.8.4 -- save

npm install @angular/common --save

npm install @angular/compiler --save

npm install @angular/platform-browser --save

npm install @angular/platform-browser-dynamic --save

npm install core-js --save

npm install reflect-metadata --save

npm install typescript --save-dev

`configure tsconfig.json`

implement app.component.ts, app.module.ts and module.ts

npm install typings --save-dev

npm install materialize-css --save

npm install webpack webpack-dev-server --save-dev

npm install angular2-template-loader awesome-typescript-loader css-loader file-loader html-loader null-loader raw-loader style-loader to-string-loader --save-dev

npm install html-webpack-plugin webpack-merge extract-text-webpack-plugin --save-dev

echo >> webpack.config.js
configure webpack
entry -> add vendor.ts and polyfills.ts under /src folder
app -> application bundle
vendor -> library bundle
polyfills -> 

update package.json with
"scripts": {
    "build": "webpack --progress",
    "start": "webpack-dev-server --progress"
  },

npm run build
npm start

npm install -g karma --save-dev
npm install karma-jasmine --save-dev
npm install jasmine-core --save-dev
karma init
choose 
Jasmine
PhantomJS

npm install karma-phantomjs-launcher --save-dev

npm install karma-webpack karma-sourcemap-loader --save-dev

npm install @types/jasmine --save-dev
npm install @types/node --save-dev

npm test
