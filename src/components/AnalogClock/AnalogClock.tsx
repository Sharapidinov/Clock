import React from "react";
import styles from "../../styles/Clock.module.css";

interface AnalogClockProps {
    time: { hh: number; mm: number; ss: number };
}

const AnalogClock: React.FC<AnalogClockProps> = ({ time }) => {
    return (
        <div className={styles.clock}>
            <div
                className={styles.hour}
                style={{ transform: `rotate(${time.hh}deg)` }}
            ></div>
            <div
                className={styles.min}
                style={{ transform: `rotate(${time.mm}deg)` }}
            ></div>
            <div
                className={styles.sec}
                style={{ transform: `rotate(${time.ss}deg)` }}
            ></div>
        </div>
    );
};

export default AnalogClock;
