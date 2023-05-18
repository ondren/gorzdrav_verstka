import React, {useState} from 'react';
import IconButton from '@mui/material/IconButton';
import {Drawer, List, ListItemButton, ListItemIcon, ListItemText} from "@mui/material";
import DehazeIcon from "@mui/icons-material/Dehaze";

function DrawerRight() {
    const [openDrawer, setOpenDrawer] = useState(false);
    const PAGES = ["Info","Services","News","Login"];
    return (
        <React.Fragment>
            <Drawer open={openDrawer} anchor={"right"} onClose={()=>setOpenDrawer(false)}>
                <List>
                    {
                        PAGES.map((page, index)=>(
                            <ListItemButton key={index}>
                                <ListItemIcon>
                                    <ListItemText>
                                        {page}
                                    </ListItemText>
                                </ListItemIcon>
                            </ListItemButton>
                        ))
                    }

                </List>
            </Drawer>
            <IconButton onClick={()=>setOpenDrawer(!openDrawer)} sx={{border:"1px solid black", ml:1}} color="inherit">
                <DehazeIcon/>
            </IconButton>
        </React.Fragment>
    );
}

export default DrawerRight;