import NameTest from "./components/name.js";
import PostManagement from "./components/postmanagement.js";
import StudentMarks from "./components/studentmark.js";

// Define the router with history mode and routes
const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes: [
    { path: '/', component: NameTest, name: "name" },
    { path: '/post', component: PostManagement, name: "post" },
    { path: '/marks', component: StudentMarks, name: "marks" }
  ]
});

// Create the Vue app and use the router
const app = Vue.createApp({});
app.use(router);
app.mount('#app');
