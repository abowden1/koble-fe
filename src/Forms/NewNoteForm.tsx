import {backendUrl} from "../AppConfig.tsx";
import axios from "axios";

interface Props {
    contactId: string;
    setDisplayNewNoteForm: React.Dispatch<React.SetStateAction<boolean>>;
    setUpdateContact: React.Dispatch<React.SetStateAction<boolean>>;
}

function NewNoteForm ({contactId, setDisplayNewNoteForm, setUpdateContact}: Props) {
    const postUrl = `${backendUrl}/contacts/${contactId}/notes`
    return (
        <>
            <div className="row">
                <form
                    name='createNoteForm'
                    onSubmit={(e) => handleSubmit(e, postUrl, setDisplayNewNoteForm, setUpdateContact) }>
                    <div className="row gy-3 py-1 align-items-center shadow">
                        <div className="col gy-1">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Note"
                                aria-label="Enter Note"
                                name="note"
                            />
                        </div>
                        <div className="col-2 gx-0">
                            <button className="btn" type="submit">
                                <h3 className="text-secondary">
                                    <i className="bi bi-arrow-right-square"/>
                                </h3>
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}

function handleSubmit(event, postUrl, setDisplayNewNoteForm, setUpdateContact) {
    const headers = {
        headers: {'Content-Type': 'application/json'}
    }
    const formData = new FormData();
    event.preventDefault();

    const formPayload = {
        note: {
            note: event.target.elements.note.value,
        }
    }
    axios.post(postUrl, JSON.stringify(formPayload), headers)
        .then(response => {
            console.log(response)
            setDisplayNewNoteForm(false)
            setUpdateContact(true)
        })
}

export default NewNoteForm;