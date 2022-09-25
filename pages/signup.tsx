import SignupForm from "../components/SignupForm";

function SignupPage() {
    return (
        <div className="flex h-screen w-full items-center justify-center">
            <SignupForm isModal={false} />
        </div>
    );
}

export default SignupPage;
