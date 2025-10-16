import { getSession } from '../../services/supabase/supabaseAuthentication';
import { useNavigate } from 'react-router';
import './style.scss';
import { useEffect } from 'react';

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
            Dashboard
        </div>
    );
};

export default Dashboard;