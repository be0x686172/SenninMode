
const PasswordChecklistCondition = ({condition, validCondition}) => {
    return (
        <div className={validCondition ? "component c-passwordChecklistCondition c-passwordChecklistConditionSuccess" : "component c-passwordChecklistCondition"}>
            <div className='d-circle'></div>
            <p>{condition}</p>
        </div>
    );
};

export default PasswordChecklistCondition;