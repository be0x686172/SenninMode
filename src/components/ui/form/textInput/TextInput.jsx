import './style.scss';

const TextInput = ({label, type, name, placeholder}) => {
    return (
        <div className='component c-textInput'>
            <label htmlFor={name}>{label}</label>
            <input type={type} name={name} placeholder={placeholder}/>
        </div>
    );
};

export default TextInput;