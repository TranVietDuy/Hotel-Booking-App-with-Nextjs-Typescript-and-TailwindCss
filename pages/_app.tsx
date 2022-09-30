import "../styles/globals.css";
import type { AppProps } from "next/app";
import Header from "../components/Header";
import Footer from "../components/Footer";
import useModal from "../hooks/useModal";
import { useRouter } from "next/router";
import { LoginForm } from "../components/LoginForm";
import SignupForm from "../components/SignupForm";
import { useEffect } from "react";
import { SessionProvider } from "next-auth/react";

function MyApp({ Component, pageProps }: AppProps) {
    const router = useRouter();
    const [loginIsShown, openLogin, closeLogin] = useModal();
    const [signupIsShown, openSignup, closeSignup] = useModal();
    function handleOutsideClick(e: any) {
        router.push("/", undefined, { shallow: true });
        if (typeof closeLogin == "function") closeLogin();
        if (typeof closeSignup == "function") closeSignup();
        e.stopPropagation();
    }

    useEffect(() => {
        window.addEventListener("keydown", (e) => {
            if (e.key === "Escape") {
                if (typeof closeLogin == "function") closeLogin();
                if (typeof closeSignup == "function") closeSignup();
            }
        });
    }, []);

    return (
        <>
            <SessionProvider>
                {!router.pathname.includes("login") &&
                    !router.pathname.includes("signup") && (
                        <Header
                            openLogin={openLogin}
                            closeLogin={closeLogin}
                            openSignup={openSignup}
                            closeSignup={closeSignup}
                        />
                    )}
                <Component {...pageProps} />
                {!router.pathname.includes("login") &&
                    !router.pathname.includes("signup") && <Footer />}
                {(loginIsShown || signupIsShown) && (
                    <div
                        className="fixed top-0 left-0 z-20 flex h-screen w-full items-center justify-center bg-modalBg"
                        onClick={(e) => handleOutsideClick(e)}
                    >
                        {loginIsShown ? (
                            <LoginForm isModal={true} closeModal={closeLogin} />
                        ) : signupIsShown ? (
                            <SignupForm
                                isModal={true}
                                closeModal={closeSignup}
                            />
                        ) : (
                            ""
                        )}
                    </div>
                )}
            </SessionProvider>
        </>
    );
}

export default MyApp;
