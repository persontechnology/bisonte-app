import React from 'react';
import Typography from '@mui/material/Typography';
import { Link } from '@inertiajs/inertia-react';
export default function Copyright({props}) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
          {'Copyright © '}
          <Link color="inherit" href="/">
            BISONTE
          </Link>{' '}
          {new Date().getFullYear()}
          {'.'}
        </Typography>
      );
}
