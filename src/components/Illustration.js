import classes from "../styles/Illustration.module.css";
export default function Illustration({...rest}){
    return(
        <div className={classes.illustration}>
            <img {...rest}/>
        </div>
    );
}