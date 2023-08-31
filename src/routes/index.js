import Home from '../pages/Home';
import Following from '../pages/Following';
import Message, { LayoutMessage } from '../pages/Message';
import DetailVideo, { LayoutDetailVideo } from '../pages/Detail-Video';
import DisplayUserInvalidate, { LayoutDisplayUserInvalidate } from '../pages/Default/Auth';

const publicRoutes = [
  { path: '/', element: Home },
  { path: '/following', element: Following },
  { path: '/message', element: Message, layout: LayoutMessage },
  { path: '/user-id/video/id-video', element: DetailVideo, layout: LayoutDetailVideo },
  { path: '/test', element: DisplayUserInvalidate, layout: LayoutDisplayUserInvalidate },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
