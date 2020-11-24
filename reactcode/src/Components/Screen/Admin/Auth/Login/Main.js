import React from 'react';
import { Viewer } from "./Resource/Style/StMain";
import { useInput, Input } from "./Input";
import { onLogin, LoginButton, SignupButton} from "./Button";

const Main = ({setClickView}) => {
    const [inputAble,setInputAble] = useState(true);
    const [buttonAble,setButtonAble] = useState(true);
    const emailUseInput = useInput("email");
    const passwordUseInput = useInput("password");
    // const doLogin = useDoLogin();
    // const [requestUserTokenMutation] = useMutation(REQUEST_USERTOKEN);
    
    const onSignupClick=()=>{
        setClickView("signupView");
    }
    const onFindClick=()=>{
        setClickView("findView");
    }
    const onLoginClick=()=>{
        onLogin({ emailUseInput, passwordUseInput, requestUserTokenMutation, doLogin, setButtonAble, setInputAble });
    }
    // useInput이 반환하는 것: placeholder, value, onChange
    return (
        <Viewer>      
        {/*<Input 
                type="text" 
                inputAble={inputAble} 
                placeholder={emailUseInput.placeholder}
                value={emailUseInput.value}
                onChange={emailUseInput.onChange}
        */}
        <Input type="text" inputAble={inputAble} {...emailUseInput} />
        <Input type="password" inputAble={inputAble} {...passwordUseInput} />
        <LoginButton buttonAble={buttonAble} onClick={onLoginClick} />
        <ButtonGroup>
            <SignupButton onClick={onSignupClick} />
            <FindButton onClick={onFindClick} />
        </ButtonGroup>
        </Viewer>
    );
};

export default Main;