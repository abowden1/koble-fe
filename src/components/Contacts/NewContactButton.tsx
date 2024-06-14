interface Props {
    userId: string;
}

function NewContactButton({ userId}: Props) {
    return (
        <>
            <div className="container py-5">
                <div className="row">
                    <div className="col d-flex justify-content-end">
                        <a
                            className="btn btn-outline-secondary"
                            role="button"
                            href={`/user/${userId}/contact`}
                        >
                            <i className="bi-person-plus koble-blue h4"> New Contact </i>
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NewContactButton