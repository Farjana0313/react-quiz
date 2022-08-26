import Illustration from "../Illustration";
import Form from "../Form";
import classes from "../../styles/Signup.module.css";
import TextInput from "../TextInput";
import CheckBox from "../CheckBox";
import Button from "../Button";
import signupImage from "../../assets/images/signup.svg";

export default function Singup() {
    return (
        <>
            <h1>Create an account</h1>
            <div className="column">
                <Illustration src={signupImage} alt="Signup"/>
                <Form className={`${classes.signup}`}>
                    <TextInput type="text" placehoder="Enter your name" icon="person"/>
                    <TextInput type="text" placehoder="Enter email" icon="alternate_email"/>
                    <TextInput type="password" placehoder="Enter password" icon="lock"/>
                    <TextInput type="password" placehoder="Confirm password" icon="lock_clock"/>
                    <CheckBox type="checkbox" text="I agree to the Terms &amp; Conditions"/>
                    <Button>Submit now</Button>
                    <div className="info">
                        Already have an account? <a href="login.html">Login</a> instead.
                    </div>
                </Form>


            </div>
        </>
    );
}