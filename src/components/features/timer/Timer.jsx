import './style.scss';
import { useTimer } from "react-timer-hook";
import { Play, Pause, RotateCcw } from 'lucide-react';
import { useEffect } from 'react';
import beepSound from "../../../../src/assets/sounds/beep.mp3";

const Timer = () => {

    const expiryTimestamp = new Date(); expiryTimestamp.setSeconds(expiryTimestamp.getSeconds() + 1500);

    const {
        seconds,
        minutes,
        isRunning,
        start,
        pause,
        resume,
        restart,
    } = useTimer({ expiryTimestamp, onExpire: () => playSound(), interval: 20 });

    useEffect(() => {
        pause();
    }, [])

    const formattedMinutes = String(minutes).padStart(2, '0');
    const formattedSeconds = String(seconds).padStart(2, '0');

    function timerRestart()
    {
        // Restarts to 5 minutes timer
        const time = new Date(); time.setSeconds(time.getSeconds() + 1500);
        restart(time);
        pause();
    }

    const playSound = () => {
        const audio = new Audio(beepSound);
        audio.play();
    };
    
    return (
        <div className='component feature cf-timer'>
            <div>
                <div className="d-timer-minutes">
                    <p>{formattedMinutes}</p>
                    <p>minutes</p>
                </div>
                <p>:</p>
                <div className="d-timer-seconds">
                    <p>{formattedSeconds}</p>
                    <p>seconds</p>
                </div>
            </div>
            <div>
                {!isRunning ? <Play onClick={resume} /> : <Pause onClick={pause} />}
                <RotateCcw onClick={timerRestart} />
            </div>
        </div>
    );
};

export default Timer;