import {defaultImageUrl} from "../../AppConfig.tsx";
import BaseContactDetails from "./BaseContactDetails.tsx";

interface Props {
    contact: Contact;
    setContactIdForDetails: React.Dispatch<React.SetStateAction<string | undefined>>;
    sharedContacts?: unknown;
    setSharedContacts?: React.Dispatch<React.SetStateAction<string[]>>;
}

function ContactCard({ contact, setContactIdForDetails, sharedContacts, setSharedContacts }: Props) {
    const imageSrc = contact.photoUrl || defaultImageUrl
    console.log(contact)
    return (
    <>

        <div className="col-md-4 my-5">
            <button className="btn" role="button" onClick={() => setContactIdForDetails(contact.id)}>
                <div className="card profile-card-3 shadow-lg justify-content-evenly">
                    <div className="background-block shadow">
                        <img
                            src={imageSrc}
                            alt="profile-sample1"
                            className="background-card-img shadow"
                        />
                    </div>
                    <BaseContactDetails contact={contact}/>
                </div>
            </button>
        </div>

    </>
    )
}

export default ContactCard