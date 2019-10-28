<template>
<div id="app">
  <a href="/#/home"><img  alt="Vue logo" src="./assets/Logo_ML.png"></a>

  <div class="hello">
    <p>A mixed-bag of creations</p>
  </div>
  <nav>
  <ul>

  <li><router-link to="/">Home</router-link></li>
  <li><router-link to="/work">Work</router-link></li>
  <li><router-link to="/about">About</router-link></li>
  </ul>
  <router-view></router-view>
  </nav>
  </div>
</template>

<script>

import VueRouter from 'vue-router'

//This About is an example of how to lazy load a route.
const About = () => import( './views/About.vue')
import Home from './views/Home.vue'
import Work from './views/Work.vue'


// const Foo = () => import('./Foo.vue')

const router = new VueRouter({
  routes: [
    { path: '/', component: Home },
    { path: '/work', component: Work },
    { path: '/about', component: About }
  ]
});



export default {
  name: 'Container',
  props: {
    msg: String
  },
  router:router
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;


}
.router-link-exact-active {
  border-bottom: 3px solid black;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  text-decoration: none;
  color: black;
  font-size:20px;
  font-weight: bold;
}
</style>
