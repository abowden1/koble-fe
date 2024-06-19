import {useParams} from "react-router-dom";
import ContactsDisplay from "../../components/Contacts/ContactsDisplay.tsx";
import CategoryFilterBar from "../../components/Categories/CategoryFilterBar.tsx";

// import NewContactButton from "../../components/Contacts/NewContactButton.tsx";


function UserHomePage() {
    const {userId} = useParams();
    return (
        <>
            <CategoryFilterBar userId={userId || ''}/>
            <ContactsDisplay userId={userId || ''}/>
        </>
    );
}

export default UserHomePage;