<template>
  <div>Work {{ $route.params.id }}</div>
</template>

<style lang="scss">
@import "./work.scss";
</style>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator"

class Work extends Vue {}

export default Work
</script>