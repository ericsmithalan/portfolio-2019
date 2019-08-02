<template>
  <div class="home">
    <div class="images primary">
      <ImageBox
        v-for="item in primary"
        :key="item.id"
        :title="item.title"
        :imageUrl="item.imageUrl"
        :href="item.href"
      />
    </div>
    <div class="images secondary">
      <ImageBox
        v-for="item in secondary"
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
class Home extends Vue {
    data() {
        return {
            primary: [
                {
                    id: 1,
                    title: "p box 1",
                    imageUrl: require("@/assets/logo.png"),
                    href: "/work/1",
                },
                {
                    id: 2,
                    title: "p box 2",
                    imageUrl: require("@/assets/logo.png"),
                    href: "/work/1",
                },
                {
                    id: 3,
                    title: "p box 3",
                    imageUrl: require("@/assets/logo.png"),
                    href: "/work/1",
                },
            ],
            secondary: [
                {
                    id: 1,
                    title: "s box 1",
                    imageUrl: require("@/assets/logo.png"),
                    href: "/work/1",
                },
                {
                    id: 2,
                    title: "s box 2",
                    imageUrl: require("@/assets/logo.png"),
                    href: "/work/1",
                },
                {
                    id: 3,
                    title: "s box 3",
                    imageUrl: require("@/assets/logo.png"),
                    href: "/work/1",
                },
                {
                    id: 4,
                    title: "s box 3",
                    imageUrl: require("@/assets/logo.png"),
                    href: "/work/1",
                },
                {
                    id: 5,
                    title: "s box 3",
                    imageUrl: require("@/assets/logo.png"),
                    href: "/work/1",
                },
            ],
        }
    }
}

export default Home
</script>
