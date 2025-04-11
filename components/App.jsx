'use client';

import { useState } from "react";
import UserProfile from "./UserProfile";
import LoginSignupForm from "./LoginSignupForm";

export default function App() {

    const [user, setUser] = useState(null);

    async function login(email, password) {
        // Reqres API anfragen
        const response = await fetch(`https://reqres.in/api/login`, {
            method: 'POST', // defaults to GET
            headers: {
                // https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/MIME_types/Common_types
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password })
        });
        const data = await response.json();

        // Wenn error in data: Login fehlgeschlagen
        if (data.error) {
            console.error(data.error);
            return;
        }
        // Wenn token in data: Login erfolgreich
        else if (data.token) {

            const userId = 2; // Beispiel-ID, kann dynamisch sein
            // Verwende fetch, um Benutzerdaten abzurufen
            // ... TODO

            setUser(await getUserProfile(userId));
        }
    }

    async function getUserProfile(userId) {
        const response = await fetch(`https://reqres.in/api/users/${userId}`);
        const data = await response.json();
        return data.data;
    }

    function logout() {
        setUser(null);
    }

    // Wenn user ein Objekt ist, dann UserProfile anzeigen
    // Wenn user null ist, dann LoginSignupForm anzeigen
    // Fallunterscheidung mit Ternary Operator

    const btnClass = "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded";

    return (
        <div>
            <h1>Welcome to My App</h1>

            <button className={btnClass} onClick={() => login("eve.holt@reqres.in", "password")}>Login valid</button>
            <button className={btnClass} onClick={() => login("eve.holt@reqres.in", null)}>Login invalid</button>
            <button className={btnClass} onClick={() => logout()}>Logout</button>
            
            {user ? <UserProfile user={user} /> : <LoginSignupForm />}
        </div>
    );
}