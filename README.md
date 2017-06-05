## Angular 2.0 Configuration 
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

**configure tsconfig.json**
<pre>

{
    "compilerOptions": {
        "rootDir": "src",
        "outDir": "app",
        "target": "es5",
        "module": "commonjs",
        "moduleResolution": "node",
        "sourceMap": true,
        "emitDecoratorMetadata": true,
        "experimentalDecorators": true,
        "lib": [
            "es2015",
            "dom"
        ],
        "noImplicitAny": false,
        "suppressImplicitAnyIndexErrors": false
    }
}
</pre>

**implement app.component.ts**
<pre>
import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    {{title}}
  `
})
export class AppComponent {
  title: string = 'edis'
}
</pre>

**app.module.ts**
<pre>
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

@NgModule({
    imports: [
        BrowserModule
    ],
    declarations: [
        AppComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
    
}
</pre>

**module.ts**
<pre>
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app.module';

// This tells index.html to load AppModule to start the application
platformBrowserDynamic().bootstrapModule(AppModule);
</pre>

npm install typings --save-dev

npm install materialize-css --save

npm install webpack webpack-dev-server --save-dev

npm install angular2-template-loader awesome-typescript-loader css-loader file-loader html-loader null-loader raw-loader style-loader to-string-loader --save-dev

npm install html-webpack-plugin webpack-merge extract-text-webpack-plugin --save-dev

echo >> webpack.config.js

**configure webpack.config.js**

<pre>
var webpack = require("webpack");
var HmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: {
        'polyfills': __dirname + '/src/polyfills.ts',
        'vendor': __dirname + '/src/vendor.ts',
        'app': __dirname + '/src/main.ts'
    },
    output: {
        path: __dirname + '/app',
        filename: '[name].js'
    },
    module: {
        loaders: [
            {
                test: /\.ts$/,
                loader: ['awesome-typescript-loader'],
                exclude: /node_modules/
            },
            {
                test: /\.html$/,
                loader: 'html-loader'
            },
            {
                test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
                loader: 'file-loader?name=assets/[name].[hash].[ext]'
            }, 
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract({ fallbackLoader: 'style-loader', loader: 'css-loader?sourceMap' })
            }            
        ]
    },
    resolve: {
        extensions: ['.js', '.ts']
    },
    plugins: [
        new HmlWebpackPlugin({
            template: './index.html'
        }),
        new ExtractTextPlugin("styles.css")
    ]
}
</pre>

**add /src/vendor.ts**
<pre>
// Angular
import '@angular/platform-browser';
import '@angular/platform-browser-dynamic';
import '@angular/core';
import '@angular/common';

// RxJS
import 'rxjs';

// CSS
import '../node_modules/materialize-css/dist/css/materialize.css';
import '../node_modules/materialize-css/dist/js/materialize.js';

// JS
</pre>

**add /src/polyfills.ts**
<pre>
import 'core-js'
import 'zone.js/dist/zone'
</pre>

**update package.json with**
<pre>
  "scripts": {
    "build": "webpack --progress",
    "start": "webpack-dev-server --progress"
  }
</pre>

npm run build
npm start

**Karma & Jasmine Configuration**

npm install -g karma --save-dev

npm install karma-jasmine --save-dev

npm install jasmine-core --save-dev

karma init

 > choose Jasmine as test runner and PhantomJS as browser

npm install karma-phantomjs-launcher --save-dev

npm install karma-webpack karma-sourcemap-loader --save-dev

npm install @types/jasmine --save-dev
npm install @types/node --save-dev

**add test/main.js**
<pre>
require('../src/main.spec.ts');
</pre>

**add /src/main.spec.ts**
<pre>
import 'core-js'; // ES6 + reflect-metadata

import 'zone.js';
import 'reflect-metadata';
import 'zone.js/dist/zone';
import 'zone.js/dist/proxy';
import 'zone.js/dist/sync-test';
import 'zone.js/dist/async-test';
import 'zone.js/dist/jasmine-patch';

// TestBed initialization
import { TestBed } from '@angular/core/testing';
import {
    BrowserDynamicTestingModule,
    platformBrowserDynamicTesting,
} from '@angular/platform-browser-dynamic/testing';

TestBed.initTestEnvironment(
    BrowserDynamicTestingModule,
    platformBrowserDynamicTesting()
);

// load all specs in ./src .
const context = (require as any).context('./', true, /\.spec\.ts$/);
context.keys().map(context);
</pre>

**add /src/app.component.spec.ts**
<pre>
import { Component } from '@angular/core';
import { TestBed, async } from '@angular/core/testing';

import { AppComponent } from './app.component';

describe('AppComponent', () => {

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [AppComponent]
        });
    });

    beforeEach(async(() => {
        TestBed.compileComponents();
    }));

    it('verify title', async(() => {
        const fixture = TestBed.createComponent(AppComponent);
        expect(fixture.componentInstance.title).toBe('edis');
    }));
});
<pre>

npm test
