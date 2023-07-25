"use client"
import { Box, Button, Card, CardContent, CardMedia, Grid, Rating, Typography } from "@mui/material"

import React, { useState } from 'react'
import { store } from '../../store'
import { Product } from "./ProductCard";
import  ProductCard  from "./ProductCard";

const allProducts = [...store];

const Store = () => {

return (
    <Grid container alignItems="stretch" spacing={4}>
        {
            allProducts.map((product: Product) => {
                return <ProductCard key={product.id} prod={product} />                
            })
        }


    </Grid>
)
}

export default Store
