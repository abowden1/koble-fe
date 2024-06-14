import {defaultImageUrl} from "../../AppConfig.tsx";
import {useState} from "react";
import BaseContactDetails from "./BaseContactDetails.tsx";
import ContactDetailsModal from "./ContactDetailsModal.tsx";
import ShareBox from "../Shares/ShareBox.tsx";

interface Props {
    contact: Contact;
    sharedContacts?: unknown;
    setSharedContacts?: React.Dispatch<React.SetStateAction<string[]>>;
}

function ContactCard({ contact, sharedContacts, setSharedContacts }: Props) {
    const [detailsActive, setDetailsActive] = useState(false);
    const imageSrc = contact.photoUrl || defaultImageUrl
    console.log(contact)
    return (
    <>
        <div className="col-md-4 my-5">
            <div className="card profile-card-3 shadow-lg">
                <div className="background-block shadow">
                    <img
                        src={imageSrc}
                        alt="profile-sample1"
                        className="background-card-img shadow"
                    />
                </div>
               <BaseContactDetails contact={contact} />


                <div className="card-footer">
                    <div className="row">
                        <div className="col d-flex justify-content-start">
                            <ContactDetailsModal contact={contact} detailsActive={detailsActive} setDetailsActive={setDetailsActive}/>
                        </div>
                        <ShareBox contact={contact} sharedContacts={sharedContacts} setSharedContacts={setSharedContacts} />

                    </div>
                </div>
            </div>
        </div>
    </>
    )
}

export default ContactCard