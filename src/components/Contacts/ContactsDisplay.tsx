import ContactSearchForm from "../../Forms/ContactSearchForm.tsx";
import ContactsResultsGrid from "./ContactsResultsGrid.tsx";
import {useState} from "react";
import ContactDetailsDisplay from "./ContactDetailsDisplay.tsx";
import SearchResultsGrid from "./SearchResultsGrid.tsx";

interface Props {
    userId: string;
    filterableCategoryId?: string;
}

function ContactsDisplay({ userId, filterableCategoryId }: Props) {
    const [contactIdForDetails, setContactIdForDetails] = useState<string | undefined>(undefined)
    const [searchParams, setSearchParams] = useState<string | undefined>(undefined)
    const [searchedContacts, setSearchedContacts] = useState<Contact[]>([])
    return (
        <>
            {contactIdForDetails == undefined ? (
                <div className="container justify-content-center gy-3">
                    <hr className="dotted"/>
                    <div className="py-4">
                        <ContactSearchForm userId={userId} setSearchParams={setSearchParams} setSearchedContacts={setSearchedContacts}/>
                    </div>
                    <hr className="rounded"/>
                    {searchParams ?
                        <SearchResultsGrid searchParams={searchParams} setSearchParams={setSearchParams} searchedContacts={searchedContacts} setContactIdForDetails={setContactIdForDetails}/>
                        :
                        <ContactsResultsGrid userId={userId || ''} setContactIdForDetails={setContactIdForDetails} filterableCategoryId={filterableCategoryId}/>
                    }
                </div>
            ):
                (<ContactDetailsDisplay contactIdForDetails={contactIdForDetails} setContactIdForDetails={setContactIdForDetails}/>)}
        </>
    )
}

export default ContactsDisplay