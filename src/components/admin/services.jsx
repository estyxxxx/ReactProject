import { useState } from 'react';
import { observer } from 'mobx-react-lite';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import ServicesList from '../servicesList';
import servicesData from "../../data/servicesData";
import AddService from './addService';


const Services = observer(() => {
    const [addService, SetAddService] = useState(false);
    return (<>
        <hr style={{ width: "90vw" }} />
        <div>
            {servicesData.services.length ?
                <><p style={{ fontSize: "30px", paddingLeft: "12vw", paddingTop: "5vw" }}>
                    Current services:</p>
                    <ServicesList /></> :
                <p style={{ fontSize: "30px", paddingLeft: "12vw", paddingTop: "5vw" }}>
                    You have not added services yet
                </p>}
        </div>
        <Button startIcon={<AddIcon />} onClick={() => SetAddService(true)}
            sx={{
                ':hover': { backgroundColor: "grey", color: "white" },
                textTransform: 'lowercase', fontSize: "20px", backgroundColor: "#814a99", color: "white", marginLeft: "45vw"
            }}
            color="inherit" variant="contained">Add service
        </Button>
        {addService && <AddService setAddService={SetAddService} />}
    </>)
})

export default Services;