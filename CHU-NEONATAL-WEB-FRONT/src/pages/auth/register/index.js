import { Link } from 'react-router-dom';

// material-ui
import { Grid, Stack, Typography } from '@mui/material';

// project import
import Register from './AuthRegister';
import AuthWrapper from '../AuthWrapper';

// ================================|| REGISTER ||================================ //

const Index = () => (

    <AuthWrapper>
        <Grid container spacing={3}>
            <Grid item xs={12}>
                <Stack direction="row" justifyContent="space-between" alignItems="baseline" sx={{ mb: { xs: -0.5, sm: 0.5 } }}>
                    <Typography variant="h3">Créer un compte pour un medecin</Typography>

                </Stack>
            </Grid>
            <Grid item xs={12}>
                <Register />
            </Grid>
        </Grid>
    </AuthWrapper>
);

export default Index;
