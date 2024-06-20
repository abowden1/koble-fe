interface Props {
    contact: Contact;
    sharedContacts?: unknown;
    setSharedContacts?: React.Dispatch<React.SetStateAction<string[]>>

}

function ShareBox ({ contact, sharedContacts, setSharedContacts }: Props) {
    // TODO: collect selected contacts for shares and display in an "offcanvas" element
    return (
        <>
            <div className="col d-flex justify-content-end align-items-center">
                <div className="form-check">
                    <input
                        className="form-check-input"
                        type="checkbox"
                        value={contact.id}
                        id="flexCheckDefault"
                        onChange={(e) =>
                            handleChange(e, sharedContacts, setSharedContacts)
                        }
                    />
                    <label className="form-check-label">Add to Share</label>
                </div>
            </div>
        </>
    )
}

function handleChange(event, sharedContractors, setSharedContractors) {
    const isChecked = event.target.checked;
    console.log(`initially selected contractors: ${sharedContractors}`);
    console.log(event.target.value);
    if (isChecked) {
        setSharedContractors([...sharedContractors, event.target.value]);
    }
    console.log(`resulting selected contractors: ${sharedContractors}`);
}

export default ShareBox