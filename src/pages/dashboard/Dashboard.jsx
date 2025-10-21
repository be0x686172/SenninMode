import './style.scss';
import Timer from '../../components/features/timer/Timer';

const Dashboard = () => {
    return (
        <div className='page p-dashboard'>
            <h1>Sennin Mode</h1>
            <Timer />
        </div>
    );
};

export default Dashboard;