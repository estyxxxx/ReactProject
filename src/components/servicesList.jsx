import { observer } from "mobx-react-lite";
import Grid from '@mui/material/Grid';
import ServicesData from '../data/servicesData';
import Service from './service';

const ServicesList = observer((props) => {
    const { SetAddAppointment, SetChooseService } = props;
    return (
        <Grid container spacing={4} sx={{ padding: "10vw", paddingTop: "2vw", paddingBottom: "2vw" }}>
            {ServicesData.services.map(x =>
                <Grid item xs={8} sm={4} key={x.id}>
                    <Service service={x} SetAddAppointment={SetAddAppointment} SetChooseService={SetChooseService} key={x.id} />
                </Grid>)}
        </Grid>
    )
})

export default ServicesList;