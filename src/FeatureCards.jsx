import React from 'react';
import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  Button,
  Typography, Box
} from '@mui/material';

import img1 from './imgs/img1.jpeg'
import img2 from './imgs/img2.jpeg'
import img3 from './imgs/img3.jpeg'
import img4 from './imgs/img4.jpeg'
import GreenOverlayImage from './Components/ImgOverlay';
import { FullList } from './FullList';
import { BtnStyle } from './Shared';



const featuredCampaigns  = [
  {
  title: "Report your rent hike",
    blurb: "Scotland's housing crisis is only getting worse - but MSPs have their heads in the sand. Use this tool to email them and make sure they can't ignore the impact rent hikes are having on tenants.",
  id:  "act/renthikes"
},
{
  title: "Report your rent hike",
    blurb: "Scotland's housing crisis is only getting worse - but MSPs have their heads in the sand. Use this tool to email them and make sure they can't ignore the impact rent hikes are having on tenants.",
  id:  "act/renthikes"
},
{
  title: "Report your rent hike",
    blurb: "Scotland's housing crisis is only getting worse - but MSPs have their heads in the sand. Use this tool to email them and make sure they can't ignore the impact rent hikes are having on tenants.",
  id:  "act/renthikes"
}
]


const features = [
  {
    text: 'Pressure councillors to vote for a key motion',
    image: img1, // replace with your image URL
  },
  {
    text: 'Respond en masse to a consultation or survey',
    image: img2
  },
  {
    text: 'Pile pressure on a member defence target',
    image: img3
  },
  {
    text: 'Shower politicians with personalised member stories',
    image: img4
  },
];

export default function FeatureCards() {
  return (
    <Grid container spacing={2} alignItems={"center"}>


<Grid item xs={12} md={6} 
justifyContent={'center'}
alignContent={'center'}
> 
<center>
<Box
sx={{backgroundColor:  'white',  borderRadius: '10px',  width: '75%', padding: "12px"}}
>
  
<h1>{FullList[1].title}</h1>

<p>{FullList[1].desc}</p>

<Button sx={BtnStyle} href={FullList[1].link} target="_blank">Get started here</Button>

<hr />
<h4 style={{textAlign: 'left'}}>Featured campaigns:</h4>

<Grid container spacing={1} justifyContent={"space-around"}>

    {featuredCampaigns.map((camp) =>  
      <Grid xs={4} item>

          <Card sx={{padding: '3px'}}>
<h4>{camp.title}</h4>
<p>{camp.blurb}</p>
<Button sx={BtnStyle}  target="_blank">Take action</Button>
          </Card>


        </Grid>
    )}


</Grid>


</Box>
</center>

</Grid>


<Grid item xs={12} md={6}
>


<Grid container spacing={2}>

      {features.slice(0,5).map((feature, idx) => (
         


<Grid item key={idx} sx={{width: '100%'}}>

         
         <Card sx={{ display: 'flex', width: '100%', height: 100 }}>
      {/* Left side: the image */}

      <GreenOverlayImage 
            src={feature.image}
            alt={feature.text}
         //   border_radius={'10px'}
            height={'100%'}
            width={100}
            />

      {/* Right side: text content */}
      <Box sx={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
        <CardContent>

<p style={{margin: 0}}>        {feature.text}</p>    

        </CardContent>
      </Box>
    </Card>
         
         </Grid>

     
      ))}
      </Grid>
        </Grid>



    </Grid>
  );
}
