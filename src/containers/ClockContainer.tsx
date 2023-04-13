import React, {useEffect, useState, useCallback} from "react";
import styles from "../styles/Clock.module.css";
import AnalogClock from "../components/AnalogClock/AnalogClock";
import ThemeSwitch from "../components/ThemeSwitch/ThemeSwitch";
import {GetServerSideProps} from 'next';
import {fetchTime} from "@/api";
import {compireTimeFormat} from "@/utils";

interface ClockProps {
    initialTimeOffset: number;
}

const Clock: React.FC<ClockProps> = () => {
    const [time, setTime] = useState({hh: 0, mm: 0, ss: 0});
    const [timeOffset, setTimeOffset] = useState(0);

    useEffect(()=> {
        fetchTime().then((data) => {
            const newTimeOffset = compireTimeFormat(data);
            setTimeOffset(newTimeOffset);
        });
    }, [])

    useEffect(() => {
        const intervalId = setInterval(() => {
            const now = new Date(new Date().getTime() + timeOffset);
            const deg = 6;
            const hh = now.getHours() * 30;
            const mm = now.getMinutes() * deg;
            const ss = now.getSeconds() * deg;

            setTime({hh, mm, ss});
        }, 1000);

        return () => clearInterval(intervalId);
    }, [timeOffset]);

    return (
        <>
            <div className={styles.pageHeader}>Analog Clock</div>
            <AnalogClock time={time}/>
            <ThemeSwitch />
        </>
    );
};

export default Clock;
