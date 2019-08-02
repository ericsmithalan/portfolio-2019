<template>
  <div>Work {{ $route.params.id }}</div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator"

class Work extends Vue {}

export default Work
</script>