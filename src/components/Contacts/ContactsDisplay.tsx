import NewContactButton from "./NewContactButton.tsx";
import ContactSearch from "../Search/ContactSearch.tsx";
import ContactsResultsGrid from "./ContactsResultsGrid.tsx";

interface Props {
    userId: string;
}

function ContactsDisplay({ userId }: Props) {
    return (
        <>
            <NewContactButton userId={userId || ''} />
            <div className="container justify-content-center gy-3 test">
                <div className="py-4">
                    <ContactSearch/>
                </div>
                <ContactsResultsGrid  userId={userId || ''}/>
            </div>
        </>
    )
}

export default ContactsDisplay