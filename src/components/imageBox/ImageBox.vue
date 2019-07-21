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
@import "../../styles/_colors.scss";

.image-box {
    border: 1px solid $gray-light;
    background: white;
    display: flex;
    position: relative;
    min-height: 200px;
    padding: 8px;
    margin: 0 15px 15px 0;
    flex: 1 1 auto;
}

.image {
    background-color: $gray-light;
    flex: 1 1 auto;
}

.description {
    position: absolute;
    bottom: 8px;
    left: 8px;
}
</style>