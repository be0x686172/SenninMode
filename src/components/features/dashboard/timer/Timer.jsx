import { Play } from 'lucide-react';
import './style.scss';

const Timer = () => {
    return (
        <div className='component c-timer'>
            <div className='d-timer'>
                <div className='d-containerMinutes'>
                    <h1>25</h1>
                    <p>minutes</p>
                </div>
                <h1>:</h1>
                <div className='d-containerSeconds'>
                    <h1>00</h1>
                    <p>seconds</p>
                </div>
            </div>
            <div className='d-timerButtons'>
                <Play strokeWidth={1.75} />
            </div>
        </div>
    );
};

export default Timer;