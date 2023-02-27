import React, {FC, ReactElement, useState} from 'react';
import {Grid, Avatar, Box, Typography} from '@mui/material';
import { deepOrange } from '@mui/material/colors';
import {AvatarComponent} from "./avatarComponent";
import { borderBottomColor } from '@mui/system';
import PropTypes from 'prop-types';
import { text } from 'stream/consumers';




export const Profile:React.FC= ()=>{
    //destructure props
    //const {name ='Caleb Pennington'} = props;


    //example call to server where this isn't static and from database
    /*

            useEffect(() => {
            
            const abortController = new AbortController(); // Create a new `AbortController`
            async function loadRootControl(){
                try{
                    const response = await fetch(`${URL}/Tables`,
                    {signal: abortController.signal}
                    );

                    const dataFromApi = await response.json();
                    setrootControlWork(dataFromApi.data);
        
                }
                catch (error) {
                    if (error.name === "AbortError") {
                    // Ignore `AbortError`
                    console.log("Aborted");
                    } else {
                    throw error;
                    }
                }  
            }
        loadRootControl()
        return () => {
            console.log("cleanup");
            abortController.abort(); // Cancels any pending request or response
        };
    },[]);

    */
    const [name] = useState<string>("Caleb Pennington")
    return(

            /*Avatar & Name*/
            <Box p={2} sx={{
                width:'100%',
                display:'flex',
                flexDirection:'column',
                justifyContent:'center',
                border:1,
                borderColor:"primary.light",
            }}>
                <AvatarComponent name={name}/>
                {/* <Typography variant='body1' color = "text.primary">
                    {`Welcome home, ${name}`}
                </Typography> */}
                
            </Box>

        // {
        //     /*Welcome Message*/
        // }
    )
}

// Profile.propTypes = {
//     name: PropTypes.string
// }