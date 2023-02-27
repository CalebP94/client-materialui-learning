import React, {FC, ReactElement, useState} from 'react';
import {Grid, Avatar, Box} from '@mui/material';
import { deepOrange } from '@mui/material/colors';
import { bgcolor, flexbox, minWidth, width } from '@mui/system';
import PropTypes from 'prop-types';

type Props = {
    name:string;
}
export const AvatarComponent:FC<Props> = ({name}):ReactElement =>{
    // const {name='Caleb Pennington'} = props;

    const [firstName, setFirst] = useState(name.split(" ")[0])
    const [lastName, setLastName] = useState(name.split(" ")[1])
    return(
            /*Avatar*/
            <Grid p={1} sx={{
                bgcolor:'grey',
                borderRadius:1,
                maxWidth:200,
                display:'flex',
                alignContent:'center',
                flexDirection:'column',
                justifyContent:'center',
                alignSelf:'center'
            }}>
                <Box sx={{
                    bgcolor: 'whitesmoke',
                    minWidth: 100,
                    minHeight: 100,
                    borderRadius: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow:1, 
                    
                }}
                >
                    <Avatar sx={{bgcolor: deepOrange[500]}}>
                        {`${firstName.substring(0,1)}${lastName.substring(0,1)}`}
                    </Avatar>
                </Box>

                <Grid sx={{
                    display:'flex',
                    alignItems:'center',
                    justifyContent:'center',
                    width:'100%'
                }}>
                    <h6>Profile</h6>
                </Grid>
            </Grid>

        // {
        //     /*Name*/
        // }
        // {
        //     /*Welcome Message*/
        // }
    )
}
// AvatarComponent.propTypes = {
//     name: PropTypes.string
// }