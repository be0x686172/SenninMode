import './style.scss';

const SubmitInput = ({value}) => {
    return (
        <input className='component c-submitInput' type="submit" value={value}/>
    );
};

export default SubmitInput;