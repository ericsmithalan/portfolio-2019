<template>
  <div class="app">
    <div class="shell">
      <div class="header-container">
        <Header />
      </div>
      <div class="content-container">
        <router-view />
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import "./app.scss";
</style>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator"
import Header from "@/components/Header.vue"

@Component({
    components: {
        Header,
    },
})
class Home extends Vue {}

export default Home
</script>