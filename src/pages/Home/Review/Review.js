import { Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import SingleReview from '../SingleReview/SingleReview';

import './Review.css'
const Review = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('https://intense-wildwood-59281.herokuapp.com/review')
            .then(res => res.json())
            .then(data => setReviews(data));
    }, [])
    // console.log(reviews);
    return (
        <Container>
            <Box sx={{ flexGrow: 1 }} className="review mb-5 pb-5">

                <Typography sx={{ fontWeight: 500, color: 'white', my: 5 }} variant="h6" component="div">
                    Our local people's Review
                </Typography>

                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {
                        reviews.map((review, index) => {
                            if (index >= 9) return null;
                            return (
                                <SingleReview key={review._id} review={review}> </SingleReview>

                            )

                        })
                    }
                </Grid>
            </Box>
        </Container>
    );
};

export default Review;


// reviews.map(review => <SingleReview key={review._id} review={review}>

//     </SingleReview>)

// services.map((service, index) => {
//     if (index >= 3) return null;
//     return (