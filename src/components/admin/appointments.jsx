import { observer } from "mobx-react-lite";
import { format } from 'date-fns';
import CardContent from '@mui/material/CardContent';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import appointmentsData from '../../data/appointmentsData';

const Appointments = observer(() => {
    function getWeekBeforDate(date) {
        const myDate = new Date(date);
        return new Date(
            myDate.getFullYear(),
            myDate.getMonth(),
            myDate.getDate() - 7,
        );
    }
    function getDayBeforDate(date) {
        const myDate = new Date(date);
        return new Date(
            myDate.getFullYear(),
            myDate.getMonth(),
            myDate.getDate() - 1,
        );
    }
    return (<>
        <hr style={{ width: "90vw" }} />
        {appointmentsData.appointments.length ?
            <><p style={{ fontSize: "30px", paddingLeft: "12vw", paddingTop: "5vw" }}>
                Your appointments:</p>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginTop: 0 }}>
                    {appointmentsData.appointments.map(x =>
                        <Appointment appointment={x} color={new Date(x.dateTime) < new Date() ? "grey" :
                            getDayBeforDate(x.dateTime) <= new Date() ? "red" :
                                getWeekBeforDate(x.dateTime) <= new Date() ? "orange" : "green"}
                            key={x.id} />)}
                </div></> :
            <p style={{ fontSize: "30px", paddingLeft: "12vw", paddingTop: "5vw" }}>
                No appointments have been scheduled yet
            </p>}
    </>)
})

export default Appointments;

function Appointment(props) {
    const { appointment, color } = props;
    const formattedDate = format(new Date(appointment.dateTime), "eeee, MMMM do yyyy 'at' h:mm:ss a");
    return (
        <Card sx={{ margin: 5, border: `2px solid ${color}`, width: "40vw", minWidth: "200px" }}>
            <CardContent sx={{ textAlign: "left", minHeight: 170, padding: "25px" }}>
                <Typography sx={{ fontSize: "25px", fontWeight: "bold", color: "#814a99" }} gutterBottom>
                    {appointment.id}
                </Typography>
                <Typography variant="h6">
                    {formattedDate}
                </Typography>
                <Typography variant="h5" component="div">
                    {appointment.serviceType}
                </Typography><br />
                <Typography variant="h6" sx={{ paddingBottom: "20px" }}>
                    Client details:
                </Typography>
                <Typography sx={{ mb: 1.5, paddingLeft: "10px" }} color="text.secondary">
                    {appointment.clientName}
                </Typography>
                <Typography sx={{ mb: 1.5, paddingLeft: "10px" }} color="text.secondary">
                    {appointment.clientPhone}
                </Typography>
                <Typography sx={{ mb: 1.5, paddingLeft: "10px" }} color="text.secondary">
                    {appointment.clientEmail}
                </Typography>
            </CardContent>
        </Card>
    )
}