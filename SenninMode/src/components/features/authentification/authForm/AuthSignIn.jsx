import './style.scss';
import TextInput from '../../../ui/form/textInput/TextInput';
import SubmitInput from '../../../ui/form/submitInput/SubmitInput';

const AuthSignIn = () => {
    return (
        <form className='component c-authLogin'>
            <TextInput label="Email address" type="email" name="email" placeholder="example@mail.com"/>
            <TextInput label="Password" type="password" name="password" placeholder="********"/>
            <SubmitInput value="Sign In"/>
        </form>
    );
};

export default AuthSignIn;