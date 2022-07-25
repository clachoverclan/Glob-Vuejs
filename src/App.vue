<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <RouterView />
</template>

<style>
@import '@/assets/base.css';
@font-face {
    font-family: 'BlackRavens';
    src: url('./assets/fonts/black_ravens.woff') format('woff'), /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
         url('./assets/fonts/black_ravens.woff2') format("woff2"),
         url('./assets/fonts/Black\ Ravens.ttf') format('truetype'); /* Chrome 4+, Firefox 3.5, Opera 10+, Safari 3—5 */
}

@font-face {
    font-family: 'Sao';
    src: url('./assets/fonts/SAOImage-Bold.woff') format('woff'), /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
         url('./assets/fonts/SAO\ Image') format("woff2"),
         url('./assets/fonts/SAO\ Image.ttf') format('truetype'); /* Chrome 4+, Firefox 3.5, Opera 10+, Safari 3—5 */
}

@font-face {
    font-family: 'Code';
    src: url('./assets/fonts/dDiam.woff') format('woff'), /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
         url('./assets/fonts/dDiam.woff2') format("woff2"),
         url('./assets/fonts/dDiam.ttf') format('truetype'); /* Chrome 4+, Firefox 3.5, Opera 10+, Safari 3—5 */
}

:root {
  --color1: #4e4e4e;
  --color2: #bdbdbd;
  --color3: #44022b;

  --font1: "BlackRavens";
  --font2: "Sao";
  --font3: "Code";
}

#app {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;
  overflow: hidden;
  font-weight: normal;
  font-family: var(--font1);
}


.logo {
  display: block;
  margin: 0 auto 2rem;
}

.hide {
  display: none;
}

/* 
a,
.green {
  text-decoration: none;
  /* color: rgb(108, 2, 117); 
  transition: 0.4s;
}

@media (hover: hover) {
  a:hover {
    background-color: hsla(300, 92%, 26%, 0.2);
  }
}

nav {
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
}

@media (min-width: 1024px) {
  body {
    display: flex;
    place-items: center;
  }

  #app {
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 0 2rem;
  }

  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  .logo {
    margin: 0 2rem 0 0;
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
