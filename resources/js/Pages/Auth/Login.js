import React,{useEffect} from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';

import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
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



export default function Login({ status, canResetPassword }) {

    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: '',
    });

    useEffect(() => {
        return () => {
            reset('password');
        };
    }, []);

    const onHandleChange = (event) => {
        setData(event.target.name, event.target.type === 'checkbox' ? event.target.checked : event.target.value);
    };

    const submit = (e) => {
        e.preventDefault();

        post(route('login'));
    };

  return (
    
    <Guest>
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
            <Head title="Acceder" />
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
              Acceder
            </Typography>
            
            {status && <div className="mb-4 font-medium text-sm text-green-600">{status}</div>}
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
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                value={data.password}
                onChange={onHandleChange}
              />
              <FormControlLabel
                control={<Checkbox name="remember" value={data.remember} onChange={onHandleChange} color="primary" />}
                label="Recordar"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                disabled={processing}
              >
                Acceder
              </Button>
              {canResetPassword && (
              <Grid container>
                <Grid item xs>
                  <Link href={route('password.request')} variant="body2">
                  ??Se te olvid?? tu contrase??a?
                  </Link>
                </Grid>  
              </Grid>
              )}
              <Copyright sx={{ mt: 5 }} />
            </Box>

          </Box>
        </Grid>
    </Guest>
      
  );
}