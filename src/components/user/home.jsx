import { useState } from "react";
import { observer } from 'mobx-react-lite';
import AddAppointment from './addAppointment';
import ServicesList from '../servicesList';
import businessData from "../../data/businessData";
import servicesData from "../../data/servicesData";

const Home = observer(() => {
    const [addAppointment, SetAddAppointment] = useState(false);
    const [chooseService, SetChooseService] = useState("");

    return (
        <div style={{ textAlign: "left", color: "#000000c7" }} >
            <div style={{ width: "60vw", paddingBottom: "10vw", paddingTop: "10vw", paddingLeft: "20vw" }}>
                <h1>Hi!</h1>
                <h2>Welcome to the appointment scheduling <br />website of {businessData.business.name}</h2>
            </div>
            <hr style={{ width: "90vw" }} />
            <div>
                {servicesData.services.length ?
                    <><p style={{ fontSize: "30px", paddingLeft: "12vw", paddingTop: "5vw" }}>
                        Choose the desired service and make an appointment:</p>
                        <ServicesList SetAddAppointment={SetAddAppointment} SetChooseService={SetChooseService} /></> :
                    <p style={{ fontSize: "30px", paddingLeft: "12vw", paddingTop: "5vw" }}>
                        It is not possible to make an appointment right now<br />
                        because there are currently no services available
                    </p>}
            </div>
            {addAppointment && <AddAppointment SetAddAppointment={SetAddAppointment} chooseService={chooseService} />}
        </div>
    )
})

export default Home;