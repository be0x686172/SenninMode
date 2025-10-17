import { UserRoundCog } from 'lucide-react';
import './style.scss';

const Header = () => {
    return (
        <div className='component c-header'>
            <UserRoundCog strokeWidth={1.75} size={28} />
        </div>
    );
};

export default Header;