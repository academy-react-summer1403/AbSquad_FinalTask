import { path } from "framer-motion/client";
import {
  Root,
  LandingPage,
  ErrorPage,
  Register,
  Login,
  CoursePage,
  CourseDetail,
  NewsPage,
  NewsDetail,
  ForgotPass,
  RootPanel,
  ContactUs,
  ProfileMain,
  Dashboard,
  MyCourse,
} from "../core/utilities/Routes/routes.utils.js";
import { Children } from "react";
export const PageRoutes = [
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <LandingPage />,
      },
      {
        path: "/CoursePage/:PageNumber?/:RowsOfPage?/:SortingCol?/:SortType?",
        element: <CoursePage />,
      },
      {
        path: "/CourseDetail/:CourseId?",
        element: <CourseDetail />,
      },
      {
        path: "/NewsPage",
        element: <NewsPage />,
      },
      {
        path: "/NewsPageDetail/:Id?",
        element: <NewsDetail />,
      },
      {
        path: "/ContactUs",
        element: <ContactUs />,
      },
    ],
  },
  {
    path: "/Panel",
    element: <RootPanel />,
    children: [
      {
        path: "/Panel/Profile",
        element: <ProfileMain />,
      },
      {
        path: "/Panel/Dashboard",
        element: <Dashboard />,
      },
      {
        path: "/Panel/MyCourse",
        element: <MyCourse />,
      },
    ],
  },
  { path: "/Register", element: <Register /> },
  { path: "/Login", element: <Login /> },
  { path: "/ForgotPass", element: <ForgotPass /> },
  {
    path: "*",
    element: <ErrorPage />,
  },
];
