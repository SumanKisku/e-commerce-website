"use client"
import { Button, Card, CardContent, CardMedia, Grid, Typography } from "@mui/material"
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import React, { useEffect, useState } from 'react'

const allProductsUrl = "https://dummyjson.com/products";

interface Product {
    id: number,
    title: string,
    description: string,
    price: number,
    discountPercentage: number,
    rating: number,
    stock: number,
    brand: string,
    category: string,
    thumbnail: string,
    images: string[]
}

const Store = () => {

    const [products, setProducts] = useState([]);

    useEffect(()=> {
        fetchAllProducts();
    }, [])
    
    async function fetchAllProducts() {
        let response = await fetch(allProductsUrl);
        let responseObj = await response.json();
        let products = responseObj.products;
        setProducts(products);
    }
    
    return (
        <Grid container alignItems="stretch" spacing={2}>
            {
                products.map((product: Product) => {
                    return <Grid key={product.id} item xs={12} sm={4} md={3} lg={2}>
                        <Card sx={{display: "flex", flexDirection: "column", height: "100%" }}>
                            <CardMedia
                                sx={{ height: 140 }}
                                image={`${product.thumbnail}`}
                                title={`${product.title}`}
                            />
                            <CardContent sx={{flexGrow: 1}}>
                                <Typography gutterBottom variant="h5" component="div">
                                    {product.title}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {product.description}
                                </Typography>
                                </CardContent>
                            <Button variant="outlined" color="primary" startIcon={<AddShoppingCartIcon />}>
                                Add To Cart</Button>
                        </Card>
                    </Grid>
                })
            }
            
           
        </Grid>
    )
}

export default Store