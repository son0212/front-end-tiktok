import Home from '../pages/Home';
import Following from '../pages/Following';
import Message, { LayoutMessage } from '../pages/Message';
import VolumeSlider, { LayoutVolumeSlider } from '../pages/Test';

const publicRoutes = [
  { path: '/', element: Home },
  { path: '/following', element: Following },
  { path: '/message', element: Message, layout: LayoutMessage },
  { path: '/test', element: VolumeSlider, layout: LayoutVolumeSlider },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
