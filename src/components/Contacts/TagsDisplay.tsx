interface Props {
    contact: Contact;
}

function TagsDisplay({contact}: Props) {
    return (
        <>
            <div className="card bg-secondary bg-gradient m-3">
                <div className="card-body">
                    {contact?.tags?.length ?
                        contact?.tags?.map((tag) => (
                        <>
                            <div className="btn btn-sm btn-outline-light m-1">{tag.tag}</div>
                        </>
                        )) : <div className="text-light">No tags</div> }
                </div>
            </div>
        </>
    )
}

export default TagsDisplay;