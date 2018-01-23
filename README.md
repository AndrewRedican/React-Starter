## React-Starter
A repository with the bare minimum to start a react web application development.

### Features
+ **Latest Node Version Required**
+ **UI**: [React](https://reactjs.org/)
+ **ECMAScript** : [Babel](https://babeljs.io/)
+ **Build & Deploy** : [Webpack](https://webpack.js.org/) and [Webpack-Server](https://webpack.js.org/configuration/dev-server/)
+ **Utilities**  : 
> 1. [lodash](https://lodash.com/) general purpose
> 2. [mitsuketa](https://github.com/AndrewRedican/mitsuketa) data
> 3. [axios](https://github.com/axios/axios): api calls // ajax requests
+ **Backend** : [Firebase](https://firebase.google.com/)

### Project Setup

Check -g and local node -v is ^8
```
  $ npm i
  $ npm i -g firebase-tools
  $ firebase init
```

### Deploy for Development
```
$ npm start
```
Open localhost:8080 in browser

### Deploy for Production
```
 $ npm run-script build
 $ firebase login
 $ firebase deploy
 $ firebase open ... hosting: deployed site
```

Currently maintained by andrew.redican.mejia@gmail.com