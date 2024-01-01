import { observer } from "mobx-react-lite";
import businessData from "../data/businessData";

const BusinessDetails = observer(() => {
  return (
    <div style={{ display: "flex", minHeight: "50vh", backgroundColor: "#e1e1e1", textAlign: "left", width: "98.7vw", marginTop: "10vw", color: "#000000c7" }}>
      <div style={{ flex: 1, borderRight: "1px solid #ccc", margin: "7vw", paddingRight: "7vw" }}>
        <h6 style={{ fontSize: "25px", margin: 0 }}> The offical website
          of {businessData.business.name},</h6>
        <h6 style={{ fontSize: "20px", marginTop: "1vw", color: "#814a99" }}>{businessData.business.description}</h6>
        <img src={businessData.business.logo} alt="Business Logo" style={{ height: "20vh", maxHeight: "100%", objectFit: "contain" }} />
      </div>

      <div style={{ flex: 1, margin: "7vw", marginLeft: 0 }}>
        <p style={{ fontSize: "22px" }}>If you have any further questionts,<br />
          please don't hesitate to contact us:</p>
        <h6 style={{ fontSize: "20px", margin: 0 }}>Our address is: {businessData.business.address}<br />
          and our phone number is: {businessData.business.phone}</h6>
        <p style={{ fontSize: "22px" }}>We look forword to hearing from you later,</p>
        <h6 style={{ fontSize: "20px", margin: 0, color: "#814a99" }}>{businessData.business.owner} , admin of the company</h6>

      </div>
    </div>
  );
});

export default BusinessDetails;