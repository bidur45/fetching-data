import React, { useState, useEffect } from 'react'
import { Card, Grid, Typography } from '@material-ui/core';
import { useStyles } from './style';
import axios  from 'axios';

const DataFetching = () => {

    const [Data, setData] = useState([]);
    useEffect(() => {
        const getData = async () => {
            const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
            setData(response.data );
            console.log(response);
        
        }
        getData()
    }, [])

    const classes = useStyles()
    return (
        <div>
            <Grid container spacing={10} className={classes.gridContainer}>

                {Data.map((post, id) => {

                    return (
                        <Card key={id} className={classes.cardStyle}>
                            <Typography variant='body2' >{post.userId}</Typography>
                            <Typography variant='h5' >{post.title}</Typography>
                            <Typography variant='h5' >{post.body}</Typography>


                        </Card>
                    )
                })}


            </Grid>

        </div>
    )
}

export default DataFetching
