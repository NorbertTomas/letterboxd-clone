import { Header } from '../components/Header';
import { UserInfo } from '../components/UserInfo';
import { Footer } from '../components/Footer';
import { useAuth } from '../authContextInstance';

export function UserPage(){
    const { user } = useAuth();

    return (
        <div>
            <Header />
            <div className="film-list">
            {user && <UserInfo user={user} />}
            <Footer />
            </div>
        </div>
    );
}