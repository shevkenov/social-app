import React, {useEffect, useState} from 'react'
import Grid from '@material-ui/core/Grid';

import axiosInstance from '../utils/connection';

const Home = () => {
    const [screams, setScreams] = useState([]);

    useEffect(() => {
      axiosInstance.get('/screams')
        .then(response => {console.log(response)})
        .catch(error => {console.log(error)})
    },[])

    return (
        <Grid container spacing={10}>
          <Grid item xs={12} sm={8}>
            Content
          </Grid>
          <Grid item xs={12} sm={4}>
            Profile
          </Grid>
        </Grid>
    )
}

export default Home
