import {
  StarBorderOutlined,
  LoopOutlined,
  FingerprintOutlined,
} from "@mui/icons-material";
import star from '../img/star.png'

export const featuresData = [
  {
    color: "blue",
    title: "Awarded Agency",
    icon:{star},
    description:
      "Divide details about your product or agency work into parts. A paragraph describing a feature will be enough.",
  },
  {
    color: "red",
    title: "Free Revisions",
    icon: LoopOutlined,
    description:
      "Keep you user engaged by providing meaningful information. Remember that by this time, the user is curious.",
  },
  {
    color: "teal",
    title: "Verified Company",
    icon: FingerprintOutlined,
    description:
      "Write a few lines about each one. A paragraph describing a feature will be enough. Keep you user engaged!",
  },
];

export default featuresData;