import {useEffect, useState} from "react";
import {backendUrl, defaultImageUrl, FIELDS, NOTES} from "../../AppConfig.tsx";
import axios from 'axios'
import {ContactApiResponseMapper} from "../Utils/ApiResponseMappers.ts";
import CustomFieldsDisplay from "./CustomFieldsDisplay.tsx";
import NotesDisplay from "./NotesDisplay.tsx";
import TagsDisplay from "./TagsDisplay.tsx";
import NewFieldForm from "../../Forms/NewFieldForm.tsx";
import NewNoteForm from "../../Forms/NewNoteForm.tsx";
import NewTagForm from "../../Forms/NewTagForm.tsx";

interface Props {
    contactIdForDetails: string;
    setContactIdForDetails: React.Dispatch<React.SetStateAction<string | undefined>>;
}

function ContactDetailsDisplay({contactIdForDetails, setContactIdForDetails}: Props) {
    const [contact, setContact] = useState<Contact | undefined>(undefined)
    const [displayContent, setDisplayContent] = useState('fields')
    const [displayNewFieldForm, setDisplayNewFieldForm] = useState(false)
    const [displayNewNoteForm, setDisplayNewNoteForm] = useState(false)
    const [displayNewTagForm, setDisplayNewTagForm] = useState(false)
    const [updateContact, setUpdateContact] = useState(false)

    const dataUrl = `${backendUrl}/contacts/${contactIdForDetails}?include=fields,tags,notes`
    console.log(dataUrl)
    useEffect(() => {
        axios.get(dataUrl)
            .then(response => {
                setContact(ContactApiResponseMapper(response.data.contact))
            })
    }, [dataUrl]);
    const imageSrc = contact?.photoUrl || defaultImageUrl;

    if (updateContact) {
        refreshContact(dataUrl, setContact, setUpdateContact)
    }

    return (
        <>
            <div className="container-fluid p-5">
                <div className="row">
                    <div className="col-12">
                        <div className="card shadow-lg">
                            <div className="card-header bg-secondary-subtle bg-gradient justify-content-center">
                                <div className="row">
                                    <div className="col-4">
                                        <button className="btn btn-outline-secondary"
                                                role="button"
                                                onClick={() => setContactIdForDetails(undefined)}
                                        >
                                            <i className="bi bi-x"/>
                                        </button>
                                    </div>
                                    <div className="col align-content-center text-center">
                                        <h4>{contact?.name}</h4>
                                    </div>
                                </div>
                            </div>
                            <div className="row card-body">
                                <div className="col">
                                    <img
                                        src={imageSrc}
                                        alt="profile-sample1"
                                        className="card-img img-square-card-lg shadow"
                                    />
                                </div>
                                <div className="col-8">
                                    <div className="card-header bg-light-blue bg-gradient">
                                        <div className="row justify-content-center">
                                            <div className="col-4 text-center">
                                                <button
                                                    className={`btn btn-sm ${displayContent === FIELDS ? "btn-secondary" : ""} text-light`}
                                                    role="button" onClick={() => setDisplayContent(FIELDS)}>
                                                    Fields

                                                </button>
                                                <button
                                                    className="btn btn-sm"
                                                    role="button"
                                                    onClick={() => {
                                                        setDisplayContent(FIELDS)
                                                        setDisplayNewFieldForm(!displayNewFieldForm)
                                                        setDisplayNewTagForm(false)
                                                        setDisplayNewNoteForm(false)
                                                    }}
                                                >
                                                    <i className={`bi ${displayNewFieldForm ? "bi-dash-square-dotted" : "bi-plus-square-dotted"} text-light`}/>
                                                </button>
                                            </div>
                                            <div className="col-4 text-center">
                                                <button
                                                    className={`btn btn-sm ${displayContent === NOTES ? "btn-secondary" : ""} text-light`}
                                                    role="button" onClick={() => setDisplayContent(NOTES)}>
                                                    Notes
                                                </button>
                                                <button
                                                    className="btn btn-sm"
                                                    role="button"
                                                    onClick={() => {
                                                        setDisplayContent(NOTES)
                                                        setDisplayNewNoteForm(!displayNewNoteForm)
                                                        setDisplayNewTagForm(false)
                                                        setDisplayNewFieldForm(false)
                                                    }}
                                                >
                                                    <i className={`bi ${displayNewNoteForm ? "bi-dash-square-dotted" : "bi-plus-square-dotted"} text-light`}/>
                                                </button>
                                            </div>
                                            <div className="col-4 text-center">
                                                <button
                                                    className={`btn btn-sm text-light`}>
                                                    Tags
                                                </button>
                                                <button
                                                    className="btn btn-sm"
                                                    role="button"
                                                    onClick={() => {
                                                        setDisplayNewTagForm(!displayNewTagForm)
                                                        setDisplayNewFieldForm(false)
                                                        setDisplayNewNoteForm(false)
                                                    }}
                                                >
                                                    <i className={`bi ${displayNewTagForm ? "bi-dash-square-dotted" : "bi-plus-square-dotted"} text-light`}/>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-8">
                                            <div
                                                className={`card-body m-3 ${displayContent === FIELDS ? "" : "hidden"}`}>
                                                {displayNewFieldForm ? <NewFieldForm contactId={contactIdForDetails}
                                                                                     setDisplayNewFieldForm={setDisplayNewFieldForm}
                                                                                     setUpdateContact={setUpdateContact}/> : undefined}
                                                <CustomFieldsDisplay contact={contact}/>
                                            </div>
                                            <div
                                                className={`card-body m-3 ${displayContent === NOTES ? "" : "hidden"}`}>
                                                {displayNewNoteForm ? <NewNoteForm contactId={contactIdForDetails}
                                                                                   setDisplayNewNoteForm={setDisplayNewNoteForm}
                                                                                   setUpdateContact={setUpdateContact}/> : undefined}
                                                <NotesDisplay contact={contact}/>
                                            </div>
                                        </div>
                                        <div className="col-4">
                                            {displayNewTagForm ? <NewTagForm contactId={contactIdForDetails}
                                                                             setDisplayNewTagForm={setDisplayNewTagForm}
                                                                             setUpdateContact={setUpdateContact}/> : undefined}
                                            <TagsDisplay contact={contact}/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

function refreshContact(url, setContact, setUpdateContact) {
    axios.get(url)
        .then(response => {
            setContact(ContactApiResponseMapper(response.data.contact))
            setUpdateContact(false)
        })
}

export default ContactDetailsDisplay;