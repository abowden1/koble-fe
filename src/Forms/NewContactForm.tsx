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
    const [photoUrl, setPhotoUrl] = useState<string | undefined>(undefined)
    const postUrl = `${backendUrl}/users/${userId}/category/${categoryId}/contacts`

    const defaultImageUrl = 'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=2938&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'

    return (
        <>
            <div className="card shadow">
                <div className="row card-body">
                    <div className="col">
                        <img
                            src={photoUrl ? photoUrl: defaultImageUrl}
                            alt="profile-sample1"
                            className="card-img img-square-card-lg shadow"
                        />
                    </div>
                    <div className="col-8">
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
                                        placeholder="Photo Url"
                                        aria-label="Photo Url"
                                        name="photoUrl"
                                        onInput={(e) => setPhotoUrl(e.target.value)}
                                        required
                                    />
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

                </div>
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