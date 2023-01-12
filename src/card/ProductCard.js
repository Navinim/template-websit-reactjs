import React from 'react'
import {
  Card, CardMedia,
  CardContent,
   Typography
} from "@mui/material";
import {productData} from '../data/productData'

const ProductCard = () => {
  return (
    <>
    {productData.map((product, index) => (
      // <div className="mx-auto mt-24 flex w-full justify-center px-4 md:w-4/12 lg:mt-0">
      <Card className="shadow-lg shadow-gray-500/10" key={index}>
        <CardMedia color="blue" className="relative h-56">
          <img
            src={product.img}
            alt="img"
            className="h-full w-full"
          />
        </CardMedia>
        <CardContent className="text-center">
          <Typography variant="h5" className="mb-2 font-bold">
            {product.name}
          </Typography>
          <Typography>
            {product.position}
          </Typography>
        </CardContent>
      </Card>
      // </div>
    ))}
    </>
  )
}

export default ProductCard
