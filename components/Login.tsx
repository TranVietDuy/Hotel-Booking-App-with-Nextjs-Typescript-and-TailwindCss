import * as ReactDOM from "react-dom";
import { useEffect } from "react";

export interface LoginProps {
    isShown: boolean;
}

function Login({ isShown }: LoginProps) {
    const modal = (
        <div className="fixed top-1/4 left-1/4 h-1/2 w-1/2 bg-slate-400">
            Login page
        </div>
    );
    useEffect(() => {
        console.log("use effect works");
    }, []);

    return isShown ? ReactDOM.createPortal(modal, document.body) : null;
}

export default Login;
