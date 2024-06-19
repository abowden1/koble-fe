import {backendUrl} from "../AppConfig.tsx";
import axios from "axios";

interface Props {
    contactId: string;
    setDisplayNewTagForm: React.Dispatch<React.SetStateAction<boolean>>;
    setUpdateContact: React.Dispatch<React.SetStateAction<boolean>>;
}

function NewTagForm ({contactId, setDisplayNewTagForm, setUpdateContact}: Props) {
    const postUrl = `${backendUrl}/contacts/${contactId}/tags`
    return (
        <>
            <div className="row">
                <form
                    name='createTagForm'
                    onSubmit={(e) => handleSubmit(e, postUrl, setDisplayNewTagForm, setUpdateContact) }>
                    <div className="row gy-3 py-1 align-items-center shadow">
                        <div className="col gy-1">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Tag"
                                aria-label="Enter Tag"
                                name="tag"
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
        tag: {
            tag: event.target.elements.tag.value,
        }
    }
    axios.post(postUrl, JSON.stringify(formPayload), headers)
        .then(response => {
            console.log(response)
            setDisplayNewFieldForm(false)
            setUpdateContact(true)
        })
}

export default NewTagForm;