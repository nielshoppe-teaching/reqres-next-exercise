export default function LoginSignupForm() {

    const handleSubmit = (event) => {
        event.preventDefault();
    }

    return (
        <div>
            <h2>Login/Signup Form</h2>
            <form>
                <div>
                    <label htmlFor="email">E-Mail:</label>
                    <input type="email" id="email" name="email" required />
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" name="password" required />
                </div>
                <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Login</button>
            </form>
        </div>
    );
}