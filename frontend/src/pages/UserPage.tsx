import { Header } from '../components/Header';
import { useEffect, useState } from 'react';
import { UserInfo } from '../components/UserInfo';
import type { User } from '../../../backend/src/types/User';
import { Footer } from '../components/Footer';

export function UserPage(){
    const [user, setUser] = useState<User>(); // First pos value, second pos func to update the state

    useEffect(() => {
    fetch('http://localhost:3000/user') 
        .then((res) => res.json())
        .then((data) => {
        console.log('Fetched users:', data); // ✅ Log response
        setUser(data);
        })
    }, []);

    return (
        <div>
            <Header />
            <div className="film-list">
            {user && <UserInfo key={user.id} user={user} />}
            <Footer />
            </div>
        </div>
    );
}