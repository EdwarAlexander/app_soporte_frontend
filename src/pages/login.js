import { Avatar, Button, CssBaseline, Grid, Paper, TextField, Typography } from "@material-ui/core";
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { styleLogin } from "../util/styleLogin";
import * as userActions from "../redux/actions/usuario";
import { useDispatch } from "react-redux";

const useStyles = styleLogin();


function Login() {
    const classes = useStyles();
    const dispatch = useDispatch();

    function initLogin(e) {
        e.preventDefault();
        dispatch(userActions.doLogin());
    }
    return (
        <Grid container component="main" className={classes.root}>
            <CssBaseline />
            <Grid item xs={false} sm={4} md={7} className={classes.image} />
            <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                <div className={classes.paper}>
                    <Avatar className={classes.avatar}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Ingreso al Sistema
                    </Typography>
                    <form onSubmit={initLogin} className={classes.form} noValidate>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Ingrese su Usuario"
                            name="email"
                            autoComplete="email"
                            autoFocus
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Ingrese su Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                        />

                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                            
                        >
                            Ingresar
                        </Button>
                    </form>
                </div>
            </Grid>
        </Grid>
    );
}

export default Login;