import { ReactElement, Suspense } from "react";
import { Navigate } from "react-router";

import MioHome from "../pages/home";
import MioPageLoading from "../components/loading/page-loading";

// 懒加载
const lazyLoad = (children:ReactElement) => {
  return <Suspense fallback={<MioPageLoading />}>{children}</Suspense>
}

// 配置路由
export const routes = [
  {
    path: '/',
    children: [
      {
        index: true,
        element: <Navigate to={'/home'} />
      },
      {
        path: '*',
        element: <Navigate to={'/home'} />
      },
      {
        path: '/home',
        element: lazyLoad(<MioHome />)
      }
    ]    
  },
  {
    path: '/loading',
    element: lazyLoad(<MioPageLoading />)
  }
]