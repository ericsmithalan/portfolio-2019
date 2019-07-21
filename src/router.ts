import Vue from "vue"
import Router from "vue-router"
import Home from "./views/home/Home.vue"

Vue.use(Router)

export default new Router({
    mode: "history",
    base: process.env.BASE_URL,
    routes: [
        {
            path: "/",
            name: "home",
            component: Home,
        },
        {
            path: "/about",
            name: "about",
            component: () => import("@/views/about/About.vue"),
        },
        {
            path: "/story/:id",
            name: "story",
            component: () => import("@/views/stories/Story.vue"),
        },
        {
            path: "/stories",
            name: "stories",
            component: () => import("@/views/stories/Stories.vue"),
        },
        {
            path: "/work/:id",
            name: "work",
            component: () => import("@/views/work/Work.vue"),
        },
        {
            path: "/resume",
            name: "resume",
            component: () => import("@/views/resume/Resume.vue"),
        },
    ],
})
