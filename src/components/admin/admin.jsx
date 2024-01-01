import { useContext, useState } from "react";
import { Link, Outlet } from 'react-router-dom';
import Button from '@mui/material/Button';
import Login from "./login";
import { IsConnected } from "../../App";
import EditBusinessDetails from "./editBusinessDetails";

export default function Admin() {
    const [editOption, SetEditOption] = useState(false);

    if (!useContext(IsConnected).isConnected)
        return (
            <Login />
        )
    else return (
        <div style={{ textAlign: "left", color: "#000000c7" }} >
            <div style={{ width: "60vw", paddingBottom: "10vw", paddingTop: "10vw", paddingLeft: "20vw" }}>
                <h1>Hi!</h1>
                <h2>Start running your business</h2>
                <div style={{ display: "flex", justifyContent: "space-evenly", marginTop: "5vw" }}>
                    <Link to="services" style={{ textDecoration: 'none' }}>
                        <Button
                            sx={{
                                margin: "5px", ':hover': { backgroundColor: "grey", color: "white" },
                                textTransform: 'lowercase', fontSize: "20px", backgroundColor: "#814a99", color: "white"
                            }}
                            color="inherit" variant="contained">
                            View the business services
                        </Button>
                    </Link>
                    <Link to="appointments" style={{ textDecoration: 'none' }}>
                        <Button
                            sx={{
                                margin: "5px", ':hover': { backgroundColor: "grey", color: "white" },
                                textTransform: 'lowercase', fontSize: "20px", backgroundColor: "#814a99", color: "white"
                            }}
                            color="inherit" variant="contained">
                            View your appointments
                        </Button>
                    </Link>
                    <Button
                        sx={{
                            margin: "5px", ':hover': { backgroundColor: "grey" },
                            textTransform: 'lowercase', fontSize: "20px", backgroundColor: "#814a99", color: "white"
                        }}
                        onClick={() => SetEditOption(true)} color="inherit" variant="contained">
                        Edit your business details
                    </Button>
                </div>
            </div>
            {editOption && <EditBusinessDetails SetEditOption={SetEditOption} />}
            <Outlet />
        </div>
    )
}