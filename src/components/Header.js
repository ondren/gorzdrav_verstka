import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import {Box, Tab, Tabs, useMediaQuery, useTheme} from "@mui/material";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import DrawerRight from "../layouts/DrawerRight";
import BasicModal from "../layouts/ModalCenter";


export default function ButtonAppBar() {
    const theme = useTheme();
    const PAGES = ["Info","Services","News"];
    console.log(theme);
    const isMatch = useMediaQuery(theme.breakpoints.down("md"));
    console.log(isMatch);
    return (
        <AppBar sx={{background: "#4d5c50", opacity:"40%"}} >
            <Toolbar>

                <IconButton sx={{border:"1px solid black", mr:"auto"}} size={"large"} color="inherit">

                    {
                        isMatch ? (
                            <>
                                <LocalHospitalIcon/>
                                <Typography sx={{fontSize:"2rem", pl:"10%"}} variant="h4">
                                    Gorzdrav
                                </Typography>
                            </>
                        ) : (
                            <>
                                <Typography sx={{mr:1, border:"1px solid black"}} variant="h4">
                                    Gorzdrav
                                </Typography>
                                <LocalHospitalIcon/>
                            </>
                        )
                    }

                </IconButton>



                <Tabs sx={{ml:"auto", mr:"auto",border:"1px solid black"}} textColor="common.black" >

                    {
                        isMatch ? (
                            <>

                            </>
                        ) : (
                            PAGES.map((page,index) => (
                                <Tab sx={{border:"1px solid black", mr:2, ml:2}} key={index} label={page} />
                            ))
                        )
                    }


                </Tabs>



                <Box sx={{border:"1px solid black"}} display="flex" flexDirection="row">

                    {
                        isMatch ? (
                            <>
                                <DrawerRight/>
                            </>
                        ) : (
                            <>
                                <BasicModal/>

                                <DrawerRight/>
                            </>
                        )
                    }

                </Box>

            </Toolbar>


        </AppBar>
    );
}