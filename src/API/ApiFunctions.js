const backendroute="https://hackathon-backend-green.vercel.app/"
const loginRoute = backendroute+'auth/login'
const signupRoute = backendroute+'auth/signup'

const signInWithEmailAndPassword = async (email, password) => {
    const response = await fetch(loginRoute, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
    });

    if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message);
    }

    return response.json();
};

const RegisterWithEmailAndPassword = async (email, password) => {

    const response = await fetch(signupRoute, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
    });

    if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message);
    }

    return response.json();
};


export { signInWithEmailAndPassword,RegisterWithEmailAndPassword }