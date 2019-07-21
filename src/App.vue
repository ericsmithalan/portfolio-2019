<template>
  <div class="app">
    <div class="shell">
      <Header />
      <router-view />
    </div>
  </div>
</template>

<style scope lang="scss">
@import "./app.scss";
</style>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator"
import Header from "@/components/header/Header"

@Component({
    components: {
        Header,
    },
})
class Home extends Vue {}

export default Home
</script>