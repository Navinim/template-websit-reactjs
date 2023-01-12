import React from 'react'
import {
  Card,
  CardBody,
  Typography
} from "@material-tailwind/react";
import {
  StarBorderOutlined,
  LoopOutlined,
  FingerprintOutlined,
} from "@mui/icons-material";
import Fab from '@mui/material/Fab';

const FeatureCard = () => {
  return (
    <>
      <Card className="rounded-2xl shadow-lg shadow-gray-500/100">
        <CardBody className="px-8 my-4 text-center">
          <Fab color='primary'><StarBorderOutlined  fontSize='large' /></Fab>

          <Typography variant="h1" className="mb-2 mt-2 text-2xl font-bold" color="blue">
            Awarded Agency
          </Typography>
          <Typography className="font-normal text-blue-gray-600">
            Divide details about your product or agency work into parts. A paragraph describing a feature will be enough.
          </Typography>
        </CardBody>
      </Card>
      <Card className="rounded-2xl shadow-lg shadow-gray-500/100">
        <CardBody className="px-8 my-4 text-center">

          <Fab color='error'><LoopOutlined  fontSize='large'/></Fab>

          <Typography variant="h1" className="mb-2 mt-2 text-2xl font-bold" color="blue-gray">
            Free Revisions
          </Typography>
          <Typography className="font-normal text-blue-gray-600">
            Divide details about your product or agency work into parts. A paragraph describing a feature will be enough.
          </Typography>
        </CardBody>
      </Card>
      <Card className="rounded-2xl shadow-lg shadow-gray-500/100">
        <CardBody className="px-8 my-4 text-center">

         <Fab color='success'><FingerprintOutlined  fontSize='large'/></Fab> 

          <Typography variant="h5" className="mb-2 mt-2 text-2xl font-bold " color="blue-gray">
            Verified Company
          </Typography>
          <Typography className="font-normal text-blue-gray-600">
            Divide details about your product or agency work into parts. A paragraph describing a feature will be enough.
          </Typography>
        </CardBody>
      </Card>

    </>
  )
}

export default FeatureCard