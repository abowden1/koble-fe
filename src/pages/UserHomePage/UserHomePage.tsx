import {useParams} from "react-router-dom";
import ContactsDisplay from "../../components/Contacts/ContactsDisplay.tsx";
import CategoryFilterBar from "../../components/Categories/CategoryFilterBar.tsx";
import {useState} from "react";

// import NewContactButton from "../../components/Contacts/NewContactButton.tsx";


function UserHomePage() {
    const {userId} = useParams();
    const [filterableCategoryId, setFilterableCategoryId] = useState<string | undefined>(undefined)
    return (
        <>
            <CategoryFilterBar userId={userId || ''} setFilterableCategoryId={setFilterableCategoryId}/>
            <ContactsDisplay userId={userId || ''} filterableCategoryId={filterableCategoryId} setFilterableCategoryId={setFilterableCategoryId}/>
        </>
    );
}

export default UserHomePage;