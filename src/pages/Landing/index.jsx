import Carrusel from '../../components/Carrusel'
import {Box, Grid} from '@mui/material'
import Categorias from '../../components/Categorias'
import Modalidades from '../../components/Modalidades'
import ContainerCard from '../../components/ContainerCard'
import Typography from '@mui/material/Typography';
import Live from '../../components/Live'

const images = [
  {
    label: 'San Francisco – Oakland Bay Bridge, United States',
    imgPath:
      'https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60',
  },
  {
    label: 'Bird',
    imgPath:
      'https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60',
  },
  {
    label: 'Bali, Indonesia',
    imgPath:
      'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250&q=80',
  },
  {
    label: 'Goč, Serbia',
    imgPath:
      'https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60',
  },
];

const Landing = () => {
	return (
    <Box>
      <Box sx={{bgcolor: 'pink'}}>
        <Carrusel steps={images.length} images={images}/>
      </Box>
      <Grid container>
        <Grid item xs={2}>
          <Modalidades />
          <Categorias/>
        </Grid>
        <Grid item xs={10}>
        <Typography gutterBottom variant="h1" component="div" sx={{fontSize: '15px', fontWeight: '600', textAlign: 'left', m: 2}}>
              En vivo
        </Typography>
          <Live />
          <Typography gutterBottom variant="h1" component="div" sx={{fontSize: '15px', fontWeight: '600', textAlign: 'left', m: 2}}>
              Destacados del dia
        </Typography>
          <ContainerCard />
        </Grid>
      </Grid>
    </Box>
	);
};

export default Landing;