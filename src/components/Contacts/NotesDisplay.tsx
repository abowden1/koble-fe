interface Props {
    contact: Contact;
}

function NotesDisplay({contact}: Props) {
    return (
        <>
            <table className="table table-striped-columns shadow-sm">

                    {contact?.notes?.map((note) => (
                        <tbody>
                        <tr>
                            <td>{note.createdAt.split(' ')[0]}</td>
                            <td>{note.note}</td>
                        </tr>
                        </tbody>
                    ))}
                </table>
        </>
    )
}

export default NotesDisplay;