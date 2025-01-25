const loginRoute = 'http://localhost:5000/auth/login'
const signupRoute = 'http://localhost:5000/auth/signup'

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