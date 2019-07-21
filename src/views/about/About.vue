<template>
  <div class="about">
    <div class="image">
      <div>[some image here]</div>
    </div>
    <h1>This is an about page</h1>
  </div>
</template>

<style scope lang="scss">
@import "../../styles/_index.scss";

.image {
    display: flex;
    background-color: $gray-light;
    min-height: 400px;
    justify-content: center;
    justify-items: center;
    align-items: center;
    align-content: center;
    margin-bottom: 30px;
}

h1 {
    margin: 0;
    padding: 0;
    font-weight: 100;
}
</style>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator"

class About extends Vue {}

export default About
</script>
