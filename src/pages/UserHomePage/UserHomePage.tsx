import { useParams } from "react-router-dom";
import ContactsDisplay from "../../components/Contacts/ContactsDisplay.tsx";


function UserHomePage() {
    const { userId } = useParams();
    return (
        <>
            <ContactsDisplay userId={userId || ''} />
        </>
    );
}

export default UserHomePage;