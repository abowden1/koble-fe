import {useEffect, useState} from "react";

import axios from 'axios'
import {backendUrl} from "../../AppConfig.tsx";
import ContactCard from "./ContactCard.tsx";
import {CategoriesResponseMapper} from "../Utils/ResponseMappers.ts";

interface Props {
    userId: string;
}

function ContactsResultsGrid({userId}: Props) {
    const [categories, setCategories] = useState([] as Category[])
    const dataUrl = `${backendUrl}/users/${userId}/categories?include=contacts`

    useEffect(() => {
        axios.get(dataUrl)
            .then(response => setCategories(CategoriesResponseMapper(response.data.categories)))
    }, [dataUrl]);
    return (
        <>
            <div className="container">
                {categories.map((category) => (
                    <>
                        <h4 className="gy-3">{category.category}</h4>
                        <div className="row d-flex align-items-center g-4">
                            {category.contacts?.length ?
                                category.contacts.map((contact) =>
                                    <ContactCard contact={contact}/>
                                )
                                : <p> No contacts in this category...</p>}
                        </div>
                    </>
                ))}
            </div>
        </>
    )
}

export default ContactsResultsGrid