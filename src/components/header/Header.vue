<template>
  <div class="header">
    <div class="me">
      <h1>Eric Smith</h1>
      <h3>UX Designer</h3>
    </div>
    <div class="nav">
      <router-link to="/">Home</router-link>
      <router-link to="/stories">Stories</router-link>
      <router-link to="/resume">Resume</router-link>
      <router-link to="/about">About</router-link>
    </div>
  </div>
</template>


<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator"

@Component
class Header extends Vue {}

export default Header
</script>

<style scoped lang="scss">
@import "./header.scss";
</style>

