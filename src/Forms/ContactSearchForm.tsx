import {backendUrl} from "../AppConfig.tsx";
import axios from "axios";
import {ContactsApiResponseMapper} from "../components/Utils/ApiResponseMappers.ts";

interface Props {
    userId: string;
    setSearchParams: React.Dispatch<React.SetStateAction<string | undefined>>;
    setSearchedContacts: React.Dispatch<React.SetStateAction<Contact[]>>
}

function ContactSearchForm ({userId, setSearchParams, setSearchedContacts}: Props) {
    return (
        <>
            <div className="row">
                <form
                    name='contactSearch'
                    onSubmit={(e) => handleSubmit(e, userId, setSearchParams, setSearchedContacts)}
                    >
                    <div className="row gy-3 py-1 align-items-center">
                        <div className="col gy-1">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Search"
                                aria-label="Enter Search"
                                name="searchParams"
                            />
                        </div>
                        <div className="col-2 gx-0">
                            <button className="btn" type="submit" onClick={() => (console.log('something searched.'))}>
                                <h3 className="text-secondary">
                                    <i className="bi bi-arrow-right-square"/>
                                </h3>
                            </button>
                        </div>
                        <div className="form-text px-3" id="searchHelp">Comma separated search terms (i.e. John,
                            handyman)
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}

function handleSubmit(event, userId, setSearchParams, setSearchedContacts) {
    const formData = new FormData()
    event.preventDefault()

    const searchParams = event.target.elements.searchParams.value;
    setSearchParams(searchParams)

    const searchUrl = `${backendUrl}/users/${userId}/contacts/search?search=${searchParams}&include=fields,notes,tags`
    axios.get(searchUrl).then(response => {
        setSearchedContacts(ContactsApiResponseMapper(response.data.contacts))
    })
    event.target.reset()
}

export default ContactSearchForm;