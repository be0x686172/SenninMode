import './style.scss';
import PasswordChecklistCondition from './PasswordChecklistCondition';
import { useEffect, useState } from 'react';

const PasswordChecklist = ({ password }) => {
    
    const [validPasswordUppercase, setValidPasswordUppercase] = useState(false);
    const [validPasswordLowercase, setValidPasswordLowercase] = useState(false);
    const [validPasswordNumber, setValidPasswordNumber] = useState(false);
    const [validPasswordSpecialChar, setValidPasswordSpecialChar] = useState(false);
    const [validPasswordMinLength, setValidPasswordMinLength] = useState(false);
    
    useEffect(() => {
        verifyValidPassword(password);
    })

    function verifyValidPassword(password)
    {
        const uppercaseRegex = /[A-Z]/;
        const lowercaseRegex = /[a-z]/;
        const numberRegex = /[0-9]/;
        const specialCharRegex = /[#!?@$%^&*-]/;
        const minLengthRegex = /.{8,}/;

        // UppercaseRegex
        if (uppercaseRegex.test(password)) setValidPasswordUppercase(true);
        else setValidPasswordUppercase(false);

        // LowercaseRegex
        if (password !== null && lowercaseRegex.test(password)) setValidPasswordLowercase(true);
        else setValidPasswordLowercase(false);

        // NumberRegex
        if (numberRegex.test(password)) setValidPasswordNumber(true);
        else setValidPasswordNumber(false);

        // SpecialCharRegex
        if (specialCharRegex.test(password)) setValidPasswordSpecialChar(true);
        else setValidPasswordSpecialChar(false);

        // MinLengthRegex
        if (minLengthRegex.test(password)) setValidPasswordMinLength(true);
        else setValidPasswordMinLength(false);
    }

    return (
        <div className='component c-passwordChecklist'>
            <PasswordChecklistCondition condition={"At least one uppercase character"} validCondition={validPasswordUppercase} />
            <PasswordChecklistCondition condition={"At least one lowercase character"} validCondition={validPasswordLowercase} />
            <PasswordChecklistCondition condition={"At least one number"} validCondition={validPasswordNumber} />
            <PasswordChecklistCondition condition={"At least one special character (# ? ! @ $ % ^ & * -)"} validCondition={validPasswordSpecialChar} />
            <PasswordChecklistCondition condition={"8 characters minimum"} validCondition={validPasswordMinLength} />
        </div>
    );
};

export default PasswordChecklist;