interface Props {
    contact: Contact;
}

function CustomFieldsDisplay({contact}: Props) {
    return (
        <>
            <table className="table shadow-sm">

                    {contact?.contactFields?.map((field) => (
                        <tbody>
                        <tr className="m-2">
                            <td><p className="text-body-emphasis">{field.key}</p></td>
                            <td>{field.value}</td>
                        </tr>
                        </tbody>
                    ))}
                </table>
        </>
    )
}

export default CustomFieldsDisplay;