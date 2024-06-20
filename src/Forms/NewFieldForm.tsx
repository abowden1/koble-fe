import {backendUrl} from "../AppConfig.tsx";
import axios from "axios";

interface Props {
    contactId: string;
    setDisplayNewFieldForm: React.Dispatch<React.SetStateAction<boolean>>;
    setUpdateContact: React.Dispatch<React.SetStateAction<boolean>>;
}

function NewFieldForm ({contactId, setDisplayNewFieldForm, setUpdateContact}: Props) {
    const postUrl = `${backendUrl}/contacts/${contactId}/contact_fields`
    return (
        <>
            <div className="row">
                <form
                    name='createFieldForm'
                    onSubmit={(e) => handleSubmit(e, postUrl, setDisplayNewFieldForm, setUpdateContact) }>
                    <div className="row gy-3 py-1 align-items-center shadow">
                        <div className="col gy-1">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Key"
                                aria-label="Enter Key"
                                name="key"
                            />
                        </div>
                        <div className="col gy-1">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Value"
                                aria-label="Enter Value"
                                name="value"
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

function handleSubmit(event, postUrl, setDisplayNewFieldForm, setUpdateContact) {
    const headers = {
        headers: {'Content-Type': 'application/json'}
    }
    const formData = new FormData();
    event.preventDefault();

    const formPayload = {
        field: {
            key: event.target.elements.key.value,
            value: event.target.elements.value.value
        }
    }
    axios.post(postUrl, JSON.stringify(formPayload), headers)
        .then(response => {
            console.log(response)
            setDisplayNewFieldForm(false)
            setUpdateContact(true)
        })
}

export default NewFieldForm;