import './style.scss';

const SubmitInput = ({value, onClick}) => {
    return (
        <input className='component c-submitInput' type="submit" value={value} onClick={onClick}/>
    );
};

export default SubmitInput;