import React, { Component } from 'react'
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button'
import axios from './hooks/axioshook'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { Stack } from '@mui/material'
import Divider from '@mui/material/Divider';


export const HomePage = () => {

    var urlArr = ['']
    const [urlValue, setUrlValue] = React.useState('')
    const [imageResponse, setImageResponse] = React.useState([])

    
    

    const saveUrl = async () => {
        console.log(urlValue)
    urlArr.push(urlValue.split(","))
        console.log(urlArr)
        try {
            const response = await axios.post('/url/addurl', {url:urlArr[1]},
                {
                    headers: {
                        "Content-Type": "application/json"
                    }
                })
                .then(response => {
                    if (response.status === 200) {
                        console.log("url saved successfully")
                    }
                    else {
                        console.log(response.status())
                    }
                })
        }
        catch (e) {
            console.log(e)
        }
        urlArr = [' ']
    }

    const scrapeUrl = async () => {
        try {
            const response = await axios.get('/url/getImageSource')
                .then(response => {
                    if (response.status === 200) {
                        setImageResponse(response.data)
                        imageResponse.map((item) => (
                            console.log(item.image_path)
                        ))

                    }
                })
        }
        catch (e) {
            console.log(e)
        }
    }

    const renderImage = () => {

    }

    return (
        <>
            <AppBar position='static' color='primary' >
                <Typography sx={{ ml: 75 }} variant='h5'>
                    MEDIA SCRAPER
                </Typography>
            </AppBar>

            <Box sx={{ ml: 5, mt: 10 }}>
                <TextField
                    autoFocus
                    id="url"
                    label="URL"
                    placeholder=""
                    onChange={(e) => setUrlValue(e.target.value)}
                    multiline
                    sx={{ width: '40%' }}
                />
                <Button variant="contained" size='X-large' sx={{ ml: 4 }} onClick={saveUrl}>Save URL</Button>
                <Button variant="contained" size='X-large' sx={{ ml: 4 }} onClick={scrapeUrl}>SCRAPE URL</Button>
                <Divider sx={{ mt: 4 }} />

                <Stack spacing={4}>
                    <ImageList sx={{ width:1500, height: 450 }} cols={3} rowHeight={164}>
                        {imageResponse.map((item) => (
                            <ImageListItem>
                                <img
                                    src={`${item.image_path}`}
                                    alt="Image"
                                    loading="lazy"
                                />
                            </ImageListItem>
                        ))}
                    </ImageList>
                </Stack>

            </Box>






        </>
    )
}
