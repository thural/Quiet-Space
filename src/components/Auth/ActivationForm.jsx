import styles from "./styles/activationFormStyles";
import { useState } from "react";
import { Button, PinInput, Text, Title } from "@mantine/core";
import { useActivation } from "../../hooks/useAuthData";
import { fetchResendCode } from "../../api/authRequests";
import { displayCountdown } from "../../hooks/useTimer";


const ActivationForm = ({ setAuthState, authState }) => {

    const [formData, setFormData] = useState({ activationCode: "" });
    const activationNotice = (message) => alert(message);
    const activation = useActivation(authState, setAuthState, activationNotice);
    const tokenTimer = displayCountdown(15 * 60 * 1000, "code has expired");


    const handleResendCode = () => {
        console.log("email on activation state: ", authState.formData.email);
        fetchResendCode(authState.formData.email);
        tokenTimer.resetTimer(16 * 60 * 1000);
    }

    const handleSubmit = async (event) => {
        console.log("form data on activation submit: ", formData);
        event.preventDefault();
        activation.mutate(formData.activationCode);
    }

    const handleChange = (value) => {
        console.log("form data: ", formData);
        setFormData({ ...formData, activationCode: value });
    }


    const classes = styles();

    return (
        <>
            <div className={classes.activation}>
                <Title order={2}>Account Activation</Title>
                <Text size="md">{"enter code sent to your email: "}</Text>
                <Text size="md">{authState.formData.email}</Text>
                <form className='activation-form'>
                    <div className="otp-input">
                        <PinInput
                            length={6}
                            name="activationCode"
                            type="number"
                            value={formData.activationCode}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="timer">
                        {!tokenTimer.hasTimeOut ? <Text>{"code will be expired in:"}</Text> :
                            <Text>{"code has expired, get a new code"}</Text>}
                        {!tokenTimer.hasTimeOut && tokenTimer.component}
                    </div>
                    <Button
                        className="button"
                        fullWidth
                        radius="md"
                        variant="gradient"
                        gradient={{ from: 'blue', to: 'cyan', deg: 90 }}
                        onClick={handleSubmit}>
                        submit
                    </Button>
                </form>
                <Text size="md">haven't received a code?</Text>
                <Button className="button" variant="outline" onClick={handleResendCode}>resend code</Button>
            </div>
        </>
    )
}

export default ActivationForm