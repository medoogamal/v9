import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ContactView from "../views/ContactView.vue";
import VideoView from "../views/VideoView.vue";
import MarktingView from "../views/MarktingView.vue";
import GraphicView from "../views/GraphicView.vue";
import WritingView from "../views/WritingView.vue";
import PhotographyView from "../views/PhotographyView.vue";
import MobileView from "../views/MobileView.vue";
import RecordingView from "../views/RecordingView.vue";
import StudiosView from "../views/StudiosView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
      meta: { title: "Version 9 | HOME" },
    },
    {
      path: "/contact-us",
      name: "contact-us",
      component: ContactView,
      meta: { title: "Version 9 | Contact Us" },
    },
    {
      path: "/video-production",
      name: "video-production",
      component: VideoView,
      meta: { title: "Version 9 | Video Production" },
    },
    {
      path: "/e-markting",
      name: "e-markting",
      component: MarktingView,
      meta: { title: "Version 9 | E-MARKTING" },
    },
    {
      path: "/graphic-design",
      name: "graphic-design",
      component: GraphicView,
      meta: { title: "Version 9 | GRAPHIC DESIGN" },
    },
    {
      path: "/writing",
      name: "writing",
      component: WritingView,
      meta: { title: "Version 9 | WRITING" },
    },
    {
      path: "/photography",
      name: "photography",
      component: PhotographyView,
      meta: { title: "Version 9 | PHOTOGRAPHY" },
    },
    {
      path: "/mobile-app",
      name: "mobile-app",
      component: MobileView,
      meta: { title: "Version 9 | MOBILE APP" },
    },
    {
      path: "/recording",
      name: "recording",
      component: RecordingView,
      meta: { title: "Version 9 | RECORDING" },
    },
    {
      path: "/studios",
      name: "studios",
      component: StudiosView,
      meta: { title: "Version 9 | STUDIOS" },
    },
  ],
});
router.beforeEach((to, from, next) => {
  // Get the page title from the route meta data that we have defined
  // See further down below for how we setup this data
  const title = to.meta.title;
  // If the route has a title, set it as the page title of the document/page
  if (title) {
    document.title = title;
  }
  // Continue resolving the route
  next();
});

export default router;
