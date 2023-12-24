const routes = [
  {
    path: '/',
    redirect: '/home',
  },
  {
    name: '首页',
    path: '/home',
    component: './Home',
  },
  {
    name: '权限演示',
    path: '/access',
    component: './Access',
  },
  {
    name: ' CRUD 示例',
    path: '/table',
    component: './Table',
  },
  {
    path: '/webRTC',
    component: '@/layouts/index',
    name: 'webRTC',
    routes: [
      {
        path: '/webRTC/photographDemo',
        name: '拍照Demo',
        component: './PhotographDemo',
      },
      {
        path: '/webRTC/shareScreen',
        name: '屏幕共享',
        component: './ShareScreen',
      },
    ],
  },
];

export default routes;
