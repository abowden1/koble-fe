import ContactCard from "./ContactCard.tsx";

interface Props {
    searchParams: string;
    setSearchParams: React.Dispatch<React.SetStateAction<string | undefined>>;
    searchedContacts: Contact[];
    setContactIdForDetails: React.Dispatch<React.SetStateAction<string | undefined>>;
}

function SearchResultsGrid({searchParams, setSearchParams, searchedContacts, setContactIdForDetails}: Props) {
    return (
        <>
            <div className="container">
                <>
                    <div className="d-flex flex-row align-items-center">
                        <div className="d-inline-flex p-2 py-3 align-items-center">
                            <div className="row px-2">
                                <div className="col-auto">
                                    <button className="btn btn-sm koble-blue"
                                            role="button"
                                            onClick={() => setSearchParams(undefined)}
                                    >
                                        <i className="bi bi-x-lg"/>
                                    </button>
                                </div>
                                <div className="col-auto">
                                    <h4 className="koble-blue">{`Results for "${searchParams}":`}</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row d-flex align-items-center g-4">
                        {searchedContacts.length ?
                            searchedContacts.map((contact) =>
                                <ContactCard contact={contact} setContactIdForDetails={setContactIdForDetails}/>
                            )
                            : <p>No contacts to display.</p>}
                    </div>
                </>
            </div>
        </>
    )
}

export default SearchResultsGrid