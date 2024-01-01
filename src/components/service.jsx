import { useContext } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import AddTaskIcon from '@mui/icons-material/AddTask';
import { IsConnected } from "../App";


export default function Service(props) {
    const { service, SetAddAppointment, SetChooseService } = props;
    return (
        <Card sx={{ minWidth: "300px" }}>
            <CardContent sx={{ minHeight: 170, padding: "25px", marginLeft: "2vw" }}>
                <Typography sx={{ fontSize: "25px", fontWeight: "bold", color: "#814a99" }} gutterBottom>
                    {service.id}
                </Typography>
                <Typography variant="h4" component="div">
                    {service.name}
                </Typography>
                <Typography variant="h6" sx={{ margin: "15px", marginLeft: 0 }}>
                    {service.description}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    price: {service.price}
                </Typography>
                <Typography sx={{ mb: 1.5 }}>
                    duration:{service.duration}
                </Typography>
            </CardContent>
            {!useContext(IsConnected).isConnected && <CardActions>
                <Button variant="contained" startIcon={<AddTaskIcon />}
                    onClick={() => {
                        SetChooseService(service.name);
                        SetAddAppointment(true);
                    }}
                    sx={{
                        ':hover': { backgroundColor: "grey", color: "white" },
                        backgroundColor: "#814a99", margin: "10px", marginLeft: "2vw", textTransform: 'lowercase'
                    }}
                >Made an appointment</Button>
            </CardActions>}
        </Card>
    )
}