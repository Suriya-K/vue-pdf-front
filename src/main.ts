import { createApp } from "vue";
// import './style.css'
import "./assets/style.css";
import App from "./App.vue";
import { createRouter, createWebHistory } from "vue-router";
import DcvReportVue from "./components/dcv-health-report/DcvReport.vue";
import PageViewComponentVue from "./components/test-report/PageViewComponent.vue";
import Home from "./components/generate-report/Home.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", name: "Home", component: Home },
    {
      path: "/test_report",
      name: "TestReport",
      component: PageViewComponentVue,
      props: true,
    },
    {
      path: "/dcv_report",
      name: "DcvReport",
      component: DcvReportVue,
      props: true,
    },
  ],
});

createApp(App).use(router).mount("#app");
