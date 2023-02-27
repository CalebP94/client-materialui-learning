import React, {FC, ReactElement} from "react";
import {Grid} from "@mui/material"
import {TaskArea} from "../components/taskArea/taskarea";
import { Sidebar } from "../components/sidebar/sidebar";

const DashBoard:FC = () => {
    return(
        <Grid container minHeight={"100vh"} p={0} m={0}>
            <TaskArea />
            <Sidebar />
        </Grid>
    )
}

export default DashBoard;