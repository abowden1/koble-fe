import axios from "axios";
import {useEffect, useState} from "react";
import {backendUrl} from "../AppConfig.tsx";

interface Props {
    userId: string;
    categoryId: string;
    setDisplayNewContactForm: React.Dispatch<React.SetStateAction<boolean>>
    setContactIdForDetails: React.Dispatch<React.SetStateAction<string | undefined>>
    setUpdateContact: React.Dispatch<React.SetStateAction<boolean>>;
}

function NewContactForm({userId, categoryId, setDisplayNewContactForm, setContactIdForDetails, setUpdateContact}: Props) {
    const postUrl = `${backendUrl}/users/${userId}/category/${categoryId}/contacts`

    return (
        <>
            <div className="card test-card shadow">
                <form
                    name="newContactForm"
                    onSubmit={(e) => handleSubmit(e, postUrl, setDisplayNewContactForm, setContactIdForDetails, setUpdateContact)}
                >
                    <div className="row justify-content-between py-3">
                        <div className="col">
                            <i className="bi-file-person-fill h1 p-3 text-secondary"/>
                        </div>
                        <div className="col align-content-start text-end">
                            <button
                                className="btn"
                                type="button"
                                onClick={() => setDisplayNewContactForm(false)}
                                >
                                <i className="bi bi-x-lg"/>
                            </button>
                        </div>
                    </div>
                    <div className="row g-2">
                        <div className="col m-2">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Name"
                                aria-label="Name"
                                name="name"
                                required
                            />
                        </div>
                    </div>
                    <div className="row g-2">
                        <div className="col-auto m-2">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Email"
                                aria-label="Email"
                                name="email"
                            />
                        </div>
                        <div className="col-auto m-2">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Phone Number"
                                aria-label="Phone Number"
                                name="phoneNumber"
                            />
                        </div>
                    </div>
                    <div className="row g-2">
                        <div className="col m-2">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Photo Url..TODO: UPLOAD OPTION!"
                                aria-label="Photo Url"
                                name="photoUrl"
                                required
                            />
                        </div>
                    </div>
                    <div className="row justify-content-end m-2">
                        <button
                            className="btn btn-outline-secondary"
                            type="submit"
                        >
                            <i className="bi bi-rocket-takeoff"> Submit </i>
                        </button>
                    </div>
                </form>
            </div>
        </>
    )
}

function handleSubmit(event, postUrl, setDisplayNewContactForm, setContactIdForDetails, setUpdateContact) {
    const headers = {
        headers: {'Content-Type': 'application/json'}
    }
    const formData = new FormData();
    event.preventDefault();
    const formPayload = {
        contact: {
            name: event.target.elements.name.value,
            email: event.target.elements.email.value,
            phone_number: event.target.elements.phoneNumber.value,
            photo_url: event.target.elements.photoUrl.value
        },
    };
    axios.post(postUrl, JSON.stringify(formPayload), headers)
        .then(response => {
            console.log(response)
            const contactId = response.data.id
            setContactIdForDetails(contactId)
            setDisplayNewContactForm(false);
            setUpdateContact(true)
        })
}

export default NewContactForm;