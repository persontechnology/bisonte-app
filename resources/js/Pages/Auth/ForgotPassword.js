import React,{useEffect,forwardRef} from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';

import TextField from '@mui/material/TextField';
// import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { Head, Link, useForm } from '@inertiajs/inertia-react';
import ValidationErrors from '@/Components/ValidationErrors';
import Guest from '@/Layouts/Guest';
import Copyright from '@/Pages/Copyright';

import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const Alert = forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});


export default function ForgotPassword({ status }) {

    const { data, setData, post, processing, errors, reset } = useForm({
        email: ''
    });

    const [open, setOpen] = React.useState(true);

    useEffect(() => {
        return () => {
            reset('password');
        };
    }, []);

    const onHandleChange = (event) => {
        setData(event.target.name, event.target.value);
    };

    const submit = (e) => {
        e.preventDefault();

        post(route('password.email'));
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
        setOpen(false);
      };

  return (
    
    <Guest>
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <Head title="Has olvidado tu contraseña" />
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Link href='/' variant="body2">
                <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                <LockOutlinedIcon />
                </Avatar>
            </Link>
            <Typography component="h1" variant="h5">
                Restablecer contraseña
            </Typography>
            <small>¿Olvidaste tu contraseña? No hay problema. Simplemente háganos saber su dirección de correo electrónico y le enviaremos una contraseña por correo electrónico restablecer enlace que le permitirá elegir uno nuevo.</small>

            {status && 
                <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                    <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                    {status}
                    </Alert>
                </Snackbar>
            }
            
            <ValidationErrors errors={errors} />

            <Box component="form" onSubmit={submit} sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email"
                name="email"
                autoComplete="email"
                autoFocus
                value={data.email}
                onChange={onHandleChange}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                disabled={processing}
              >
               Enlace de restablecimiento de contraseña de correo electrónico
              </Button>
              
              <Grid container>
                <Grid item xs>
                  <Link href={route('login')} variant="body2">
                  Acceder
                  </Link>
                </Grid>  
              </Grid>
              
              <Copyright sx={{ mt: 5 }} />
            </Box>

          </Box>
        </Grid>
    </Guest>
      
  );
}