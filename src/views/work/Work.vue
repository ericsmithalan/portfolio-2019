<template>
  <div>Work {{ $route.params.id }}</div>
</template>

<style lang="scss">
@import "../../styles/_index.scss";
</style>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator"

class Work extends Vue {}

export default Work
</script>