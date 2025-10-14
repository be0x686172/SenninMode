import '../textInput/style.scss';

const PasswordInput = ({setPasswordInputFocus, setPasswordInputChange}) => {
    return (
        <div className='component c-passwordInput'>
            <label htmlFor="password">Password</label>
            <input 
                type="password" 
                name="password" 
                placeholder="********" 
                onFocus={() => setPasswordInputFocus(true)}
                onChange={(event) => setPasswordInputChange(event.target.value)}
            />
        </div>
    );
};

export default PasswordInput;