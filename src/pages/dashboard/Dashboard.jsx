import { getSession } from '../../services/supabase/supabaseAuthentication';
import { useNavigate } from 'react-router';
import './style.scss';
import { useEffect } from 'react';
import Header from '../../components/ui/header/Header';
import Timer from '../../components/features/dashboard/timer/Timer';

const Dashboard = () => {

    let navigate = useNavigate();

    useEffect(() => {
        getSession()
        .then((data) => {
            if (!data.session)
                navigate('/authentication');
        });
    });

    return (
        <div className='page p-dashboard'>
            <Header />
            <div className='d-center'>
                <p>Sennin Mode</p>
                <Timer />
            </div>
        </div>
    );
};

export default Dashboard;