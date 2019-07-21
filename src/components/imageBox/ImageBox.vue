<template>
  <a :href="href" class="image-box">
    <div class="image">
      <img :src="imageUrl" />
    </div>
    <div class="description">{{title}}</div>
  </a>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator"

@Component
export default class ImageBox extends Vue {
    @Prop() private title!: string
    @Prop() private imageUrl!: string
    @Prop() private href!: string
}
</script>


<style scoped lang="scss">
@import "./imageBox.scss";
</style>