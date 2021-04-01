import React, { useState } from 'react';
import { Typography, Grid, TextField, Button, CircularProgress } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import AppIcon from '../images/icon.png';

const Login = () => {
    const theme = useTheme();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        e.target.name === email ? setEmail(e.target.value) : setPassword(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log({ password, email });
    }

    return (
        <Grid container style={theme.form}>
            <Grid item sm />
            <Grid item sm>
                <img src={AppIcon} alt="logo" />
                <Typography variant="h2" style={theme.pageTitle}>
                    Login
                </Typography>
                <form onSubmit={handleSubmit} noValidate>
                    <TextField
                        id="email"
                        name="email"
                        type="email"
                        label="Email"
                        style={theme.textField}
                        helperText={errors.email}
                        error={errors.email ? true : false}
                        value={email}
                        onChange={handleChange}
                        fullWidth
                    />
                    <TextField
                        id="password"
                        name="password"
                        type="password"
                        label="Password"
                        style={theme.textField}
                        helperText={errors.password}
                        error={errors.password ? true : false}
                        value={password}
                        onChange={handleChange}
                        fullWidth
                    />
                    {
                        errors.general && (
                            <Typography variant="body2" style={theme.customError}>
                                {errors.general}
                            </Typography>
                        )
                    }
                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        style={theme.button}
                        disabled={loading}
                    >
                        Login
                </Button>
                </form>
            </Grid>
            <Grid item sm />
        </Grid>
    )
}

export default Login
