import './App.css';
import React, { Button } from "react-bootstrap";
import pic1 from "./image1.jpg";
import pic2 from "./image2.jpg";
import pic3 from "./image3.jpg";
import pic4 from "./image4.jpg";

function Home() {
    return (
        <div className="mainContainer">
            <div className="containerleft">
                <p class="h1">Menu</p><br /><br />

                <div className="d-grid gap-4 w-75 mx-auto">
                    <Button variant="primary" size="lg">
                        Browse Image
                    </Button>

                    <Button variant="primary" size="lg">
                        Detection
                    </Button>

                    <Button variant="primary" size="lg">
                        Reset
                    </Button>

                    <Button variant="danger" size="lg">
                        Exit
                    </Button>
                </div>
            </div>

            <div className="containerright">
                <div className="box">
                    <div className="containerrightFirst" >
                        <div className="imagess">
                            <img src={pic1} alt="Logo" />
                            <h5>Input Image</h5>
                        </div>

                        <div className="imagess">
                            <img src={pic2} alt="Logo" />
                            <h5>Preprocessing</h5>
                        </div>
                    </div>

                    <div className="containerrightSecond" >
                        <div className="imagess">
                            <img src={pic3} alt="Logo" />
                            <h5>Segmentation</h5>
                        </div>

                        <div className="imagess">
                            <img src={pic4} alt="Logo" />
                            <h5>Detection</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;