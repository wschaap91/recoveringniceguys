import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/login",
            name: "login",
            component: () => import("@/views/LoginView.vue"),
        },
        {
            path: "/",
            name: "page",
            component: () => import("@/views/PageView.vue"),
        },
    ],
});

router.beforeEach((to, _, next) => {
    const token = localStorage.getItem("trello_token");
    if (token) {
        next();
    } else if (to.name !== "login") {
        next({ name: "login" });
    } else {
        next();
    }
    // localStorage.getItem("trello_token") ? next() : next({ name: "login" });
});

export default router;
