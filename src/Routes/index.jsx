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
} from "../core/utilities/Routes/routes.utils.js";
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
    ],
  },
  {
    path: "/Panel",
    element: <RootPanel />,
  },
  { path: "/Register", element: <Register /> },
  { path: "/Login", element: <Login /> },
  { path: "/ForgotPass", element: <ForgotPass /> },
  {
    path: "*",
    element: <ErrorPage />,
  },
];
