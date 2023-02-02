import { ReactAppOptions } from '@teambit/react';
//import { exampleConfig } from '@learnbit/apps.netlify.example-config';
// import { WebpackBundler } from '@teambit/webpack';

//const netlify = exampleConfig('basic-react-app');


export const BasicAppApp: ReactAppOptions = {
  /**
   * name of the app in Bit CLI.
   */
  name: 'Brewery-Search',

  /**
   * specify the entry file for your application. could be different then the component main file.
   */
  entry: [require.resolve('./basic-app.app-root')],

  /**
   * prerendering support. comment this in, and specify exact routes to be prerendered during build. 
   */
  // prerender: {
  //   routes: ['/']
  // }

  /**
   * Specify transformers to used by Webpack.
   */
  webpackTransformers: [],

  /**
   * specify a bundler instance for Bit to use. Default bundler is webpack.
   */
  // bundler: new WebpackBundler(),

  /**
   * specify a deployment. Either implement your own deployment function or use a ready made component like Netlify.
   */
  //deploy: netlify.deploy.bind(netlify)
};

export default BasicAppApp;
