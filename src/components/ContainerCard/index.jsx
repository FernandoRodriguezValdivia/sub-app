import Grid from '@mui/material/Grid'
import CustomCard from '../CustomCard'

const ContainerCard = () => {
	return (
		<Grid container sx={{bgcolor: '#b2afaf', p: 6}}>
			<CustomCard/>
			<CustomCard/>
			<CustomCard/>
			<CustomCard/>
			<CustomCard/>
			<CustomCard/>
			<CustomCard/>
		</Grid>
	);
};

export default ContainerCard;