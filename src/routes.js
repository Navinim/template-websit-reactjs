import { Home } from "./components/Home";
import {
  HomeOutlined,
  InfoOutlined,
  Inventory2Outlined,
  MiscellaneousServicesOutlined,
  ConnectWithoutContactOutlined
  
} from '@mui/icons-material'

export const routes =[
  {
    icon: HomeOutlined,
    name: "home",
    path: "/home",
    element: <Home />,
  },
  {
    icon: InfoOutlined,
    name: "about",
    path: "/about",
    element: '',
  },
  {
    icon: Inventory2Outlined,
    name: "product",
    path: "/product",
    element: '',
  },
  {
    icon: MiscellaneousServicesOutlined,
    name: "Services",
    path: "/services",
    element: '',
  },
  {
    icon: ConnectWithoutContactOutlined,
    name: "Contact",
    path: "/contact",
    element: '',
  },
  
];

export default routes;
