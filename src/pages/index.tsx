import React from "react";
import AnalogClock from "../components/AnalogClock/AnalogClock";
import SemiCircle from "../components/SemiCircle/SemiCircle";
import Clock from "@/containers/ClockContainer";

const Home = () => {
    return (
        <div>
            <Clock />
            <h2>Semi Circle</h2>
            <SemiCircle />
        </div>
    );
};

export default Home;
