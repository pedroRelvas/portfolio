import React, { useState } from 'react';
import { Grid, Card, CardMedia, CardContent, Typography, Button, Box } from '@mui/material';
import EsocialFirstIlus from '../images/prismaEsocialProduz/esocialIlust1.svg';
import EsocialSecondIlus from '../images/prismaEsocialProduz/esocialIlust2.svg';
import PrismaFirstIlus from '../images/prismaEsocialProduz/prismaIlust1.svg';
import PrismaSecondIlus from '../images/prismaEsocialProduz/prismaIlust2.svg';
import ProduzFirstIlus from '../images/prismaEsocialProduz/produzIlust1.svg';
import ProduzSecondIlus from '../images/prismaEsocialProduz/produzIlust2.svg';
import AllThree from '../images/prismaEsocialProduz/allThree.png';
import PrismaLogin from '../images/prismaEsocialProduz/prismaLogin.png';

const images = [
  {
    src: AllThree,
    title: 'Software Previews',
    description: 'Screens;'
  },
  {
    src: PrismaLogin,
    title: 'Prisma Login',
    description: 'Software management for the textile industry;'
  },
  // Add more images as needed
];

const ImageGallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  const currentImage = images[currentIndex];

  return (
    <Box textAlign="center">
      <Grid container justifyContent="center">
        <Grid item xs={12}>
          <Card>
            <CardMedia
            height='800'
              component="img"
              image={currentImage.src}
              alt={currentImage.title}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {currentImage.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {currentImage.description}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <Box mt={2}>
        <Button variant="contained" color="primary" onClick={handlePrevious} sx={{ mr: 2 }}>
          Previous
        </Button>
        <Button variant="contained" color="primary" onClick={handleNext}>
          Next
        </Button>
      </Box>
    </Box>
  );
};

export default ImageGallery;