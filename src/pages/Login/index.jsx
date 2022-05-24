import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import CardMedia from '@mui/material/CardMedia'
import {Link} from 'react-router-dom'

const Login = () => {
	const send = (e)=>{
    e.preventDefault()
    const data = Object.fromEntries(new FormData(e.target))
    console.log(JSON.stringify(data))
  }
  
	return (
		<Box style={{minHeight: 'calc(100vh - 262px)', padding: 30}}>
      <Grid container>
        <Grid item xs={7}>
			<Typography
            variant="h4"
            sx={{ color: '#ea6825', fontWeight: '600', textAlign: 'left' }}
          >
           Ingresa tu correo electrónico o login
      </Typography>
			<Divider sx={{height: '0px',
    border: 'none',
    borderTop: '2px solid black'}}/>
        <Grid
        container
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 1, width: '90%' }
        }}
        noValidate
        autoComplete="off"
        variant="standard"
        onSubmit={send}
        >
          <Grid item xs={12}>
            <TextField
              id="standard-helperText"
              label="E-mail"
              variant="standard"
              name="email"
            /> 
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="standard-helperText"
              label="Contraseña"
              variant="standard"
              name="password"
            /> 
          </Grid>
          <Grid item xs={12}>
            <Button sx={{width: '50%', m: 4}} variant="contained" type='submit'>Login</Button>
          </Grid>
					<Grid item xs={12} sx={{textAlign: 'left'}}>
            ¿No tienes registro? <Link to='/register'>Regístrate</Link>
          </Grid>
          </Grid>
        </Grid>
        <Grid xs={5}>
          <CardMedia
          component="img"
          image={'https://picsum.photos/200/300'}
          sx={{height: '75vh', m:2}}
          />
        </Grid>
      </Grid>
		</Box>
	);
};

export default Login;