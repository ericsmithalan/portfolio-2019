<template>
  <div class="about">
    <div class="image">
      <div>[some image here]</div>
    </div>
    <h1>This is an about page</h1>
  </div>
</template>

<style scope lang="scss">
@import "./about.scss";
</style>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator"

class About extends Vue {}

export default About
</script>
