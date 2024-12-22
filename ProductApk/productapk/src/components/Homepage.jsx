import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import axios from 'axios';

const Homepage = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios
            .get("https://fakestoreapi.com/products")
            .then((response) => {
                console.log(response.data);
                setData(response.data);
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);

    return (
        <div>
            <Grid container spacing={2}>
                {data.map((product) => (
                    <Grid item xs={12} sm={6} md={4} key={product.id}>
                        <Card
                            sx={{maxWidth: 345,
                                height: 400,
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'space-between',
                            }}
                        >
                            <CardMedia
                                sx={{ height: 200 }} 
                                image={product.image}
                                title={product.title}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h6" component="div">
                                    {product.title}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    ${product.price}
                                </Typography>
                                <Typography
                                    variant="body2"
                                    color="text.secondary"
                                    sx={{
                                        overflow: 'hidden',
                                        textOverflow: 'ellipsis',
                                        display: '-webkit-box',
                                        WebkitLineClamp: 2, 
                                        WebkitBoxOrient: 'vertical',
                                    }}
                                >
                                    {product.description}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </div>
    );
};

export default Homepage;
