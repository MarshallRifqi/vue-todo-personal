<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <!-- <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header> -->
  <header class="top">
    <nav>
      <ul>
        <li><a href="#opening-products"><RouterLink to="/">Home</RouterLink></a></li>
        <li><a href="#judul-product">  <RouterLink to="/about">About</RouterLink></a></li>
        <!-- <li><a href="#profile">Contact</a></li> -->
      </ul>
    </nav>
  </header>
  <div id="all-container">
    <RouterView />
  </div>
</template>

<style scoped>
#all-container{
  /* height: 100vh; */
  background-color: #F0EDCC;
  /* overflow: auto; */
}
header {
  line-height: 1.5;
  max-height: 100vh;
  /* border: 1px solid black; */
}


/* .logo {
  display: block;
  margin: 0 auto 2rem;
} */

nav{
  background-color: #02343F;
  position: sticky;
  top: 0;
}

nav ul{
  display: flex;
  flex-direction: row;
  list-style-type: none;
  padding: 1rem 2rem;
  margin: 0;
  justify-content: center;
}

nav ul a{
  text-decoration: none;
  color: #F0EDCC;
  margin-inline: 2rem;
}

nav ul a:hover{
  /* border-bottom: 1px solid #02343F; */
  /* color: #F0EDCC; */
  /* background-color: #02343F; */
  /* border-radius: 5px; */
  /* padding: 5px; */
}

nav a.router-link-exact-active {
  font-weight: bold;
}

/* nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
} */

/* @media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
} */
</style>
