<template>
  <div class="story">
    <div class="image">
      <div>[some image here]</div>
    </div>
    <h2>Story {{ $route.params.id }}</h2>
  </div>
</template>

<style scope lang="scss">
@import "./story.scss";
</style>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator"

class Story extends Vue {}

export default Story
</script>
