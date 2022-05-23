import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid'
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import { Button, CardActionArea, CardActions } from '@mui/material';

const CustomCard = () => {
	return (
		<Grid item xs={12} sm={6} md={4} >
			<Card sx={{ maxWidth: 200, m: 'auto', mb: 4, borderRadius: '20px'}}>
				<CardActionArea>
					<CardMedia
						component="img"
						height="140"
						image="https://picsum.photos/200"
						alt="green iguana"
					/>
					<CardContent sx={{bgcolor: '#c4c4c4'}}>
						<Typography gutterBottom variant="h1" component="div" sx={{fontSize: '15px', fontWeight: '600'}}>
							Iphone 13 pro max 128gb
						</Typography>
						<Typography variant="body2" color="text.secondary" sx={{textAlign: 'left'}}>
							Ascendente
						</Typography>
						<Typography variant="body2" color="text.secondary" sx={{textAlign: 'left'}}>
							30-07-2022
						</Typography>
					</CardContent>
				</CardActionArea>
				<CardActions sx={{justifyContent: 'flex-end', bgcolor: '#c4c4c4'}}>
					<Button size="small">
						<FavoriteBorderOutlinedIcon sx={{color: 'red', textAlign: 'rigth'}}/>
					</Button>
				</CardActions>
			</Card>
		</Grid>
  );
};

export default CustomCard;