import {useState} from "react";

interface Props {
    contact: Contact;
    detailsActive: boolean;
    setDetailsActive: React.Dispatch<React.SetStateAction<boolean>>;
}

function ContactDetailsModal({ contact, detailsActive, setDetailsActive }: Props) {
    const [showModal, setShowModal] = useState(false)
    console.log(`show modal: ${showModal}`)
    return (
        <>
            <button
                className="btn btn-outline-secondary text-darkgray"
                onClick={() => setShowModal(!showModal)}
                data-bs-toggle="modal"
            >
                Details
            </button>
            <div className="modal modal-xl" display={showModal ? "show": "hide"} id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-body">
                    this is cool
                </div>
            </div>
        </>
    )
}

export default ContactDetailsModal