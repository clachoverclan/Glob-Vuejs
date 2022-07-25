<script setup>
import NavBar from '../components/nav.vue'
</script>

<script>

</script>

<template>
  <a href="https://discord.com/invite/6HZBJ4eATK" class="discordBRBtn" target="_blank"><img src="../components/images/discord-logo.png" alt="discord logo"></a>
  
  <nav>
    <NavBar />
  </nav>
  <header>

  </header>

  
</template>

<style>

.discordBRBtn {
    position: fixed;
    margin: 10px;
    bottom: 20px;
    right: 40px;
    z-index: 1000;
    display: inline-block;
}
.discordBRBtn img {
    width: 80px;
    height: auto;
}

@media screen and (max-width: 565px) {
    .discordBRBtn {
        margin: -20px;
        margin-right: -30px;
    }
    .discordBRBtn img {
        width: 60px;
    }
}

</style>