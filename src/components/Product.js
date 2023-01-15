import React, { useEffect, useState } from 'react'
import {
    Card, CardMedia,
    CardContent,
    Typography
} from "@mui/material";
import { getProduct} from './auth/apiProduct';

const Product = ({category}) => {
    const [products,setProduct]=useState([])
    const [filteredProducts,setFilteredProducts]=useState([])

    const loadProducts=()=>{
        getProduct().then(data=>{
            if(data.error){
                console.log(data.error)
            }else{
                setProduct(data)
            }
        })
    }
    useEffect(()=>{
        loadProducts()
    },[category])

    useEffect(()=>{
        setFilteredProducts( category ?
            products.filter(product=>product.category===category):products
            )
    },[products,category])
    console.log(category)
    return (
        <>
         {filteredProducts.map((items, i) => (
                <Card className="shadow-lg shadow-gray-500/10" key={i}>
                    <CardMedia color="blue" className="relative h-56">
                        <img
                            src={`http://localhost:5000/${items.img}`}
                            alt="img"
                            className="h-full w-full"
                        />
                    </CardMedia>
                    <CardContent className="text-center">
                        <Typography variant="h5" className="mb-2 font-bold underline">
                            {items.title}
                        </Typography>
                        <Typography>
                            {items.desc}                                                
                        </Typography>
                    </CardContent>
                </Card>

            ))}
        </>
    )
}

export default Product