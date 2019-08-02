<template>
  <div class="stories">
    <div class="hero">[hero]</div>
    <div class="items">
      <ImageBox
        v-for="item in stories"
        :key="item.id"
        :title="item.title"
        :imageUrl="item.imageUrl"
        :href="item.href"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator"
import ImageBox from "@/components/ImageBox.vue"

@Component({
    components: {
        ImageBox,
    },
})
class Stories extends Vue {
    data() {
        return {
            stories: [
                {
                    id: 1,
                    title: "Story 1",
                    href: "/story/1",
                    details: {},
                },
                {
                    id: 2,
                    title: "Story 2",
                    href: "/story/2",
                },
                {
                    id: 3,
                    title: "Story 3",
                    href: "/story/3",
                },
            ],
        }
    }
}

export default Stories
</script>