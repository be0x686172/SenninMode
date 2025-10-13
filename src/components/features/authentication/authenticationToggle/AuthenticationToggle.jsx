import './style.scss';

const AuthenticationToggle = ({ authMode, setAuthMode }) => {

    function changeMode(event)
    {
        const slider = document.querySelector('.d-slider');
        const targetButton = event.target.innerHTML == "Sign In" ? "signIn" : "signUp";

        if (authMode != targetButton)
        {
            setAuthMode(targetButton);

            const slideClass = targetButton == "signUp" 
                ? ["activeToggleSlideToRight", "activeToggleSlideToLeft"]
                : ["activeToggleSlideToLeft", "activeToggleSlideToRight"];
        
            slider.classList.add(slideClass[0]);
            slider.classList.remove(slideClass[1]);
        }
    }

    return (
        <div className='component c-authenticationToggle'>
            <button className={authMode == 'signIn' ? 'buttonActive' : ''} onClick={(event) => changeMode(event)}>Sign In</button>
            <button className={authMode == 'signUp' ? 'buttonActive' : ''} onClick={(event) => changeMode(event)}>Sign Up</button>
            <div className='d-slider'></div>
        </div>
    );
};

export default AuthenticationToggle;