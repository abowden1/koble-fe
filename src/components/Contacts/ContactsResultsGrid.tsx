import {useEffect, useState} from "react";

import axios from 'axios'
import {backendUrl} from "../../AppConfig.tsx";
import ContactCard from "./ContactCard.tsx";
import {CategoriesApiResponseMapper} from "../Utils/ApiResponseMappers.ts";
import NewContactButton from "./NewContactButton.tsx";
import NewContactForm from "../../Forms/NewContactForm.tsx";

interface Props {
    userId: string;
    setContactIdForDetails: React.Dispatch<React.SetStateAction<string | undefined>>;
    filterableCategoryId?: string;
    setFilterableCategoryId?: React.Dispatch<React.SetStateAction<string | undefined>>
}

function ContactsResultsGrid({userId, setContactIdForDetails, filterableCategoryId, setFilterableCategoryId}: Props) {
    const [categories, setCategories] = useState([] as Category[])
    const [displayNewContactForm, setDisplayNewContactForm] = useState(false)
    const [newContactCategory, setNewContactCategory] = useState<string | undefined>(undefined)

    const dataUrl = filterableCategoryId ?
        `${backendUrl}/users/${userId}/categories/${filterableCategoryId}?include=contacts` :
        `${backendUrl}/users/${userId}/categories?include=contacts`

    useEffect(() => {
        axios.get(dataUrl)
            .then(response => setCategories(CategoriesApiResponseMapper(response.data.categories)))
    }, [dataUrl]);
    return (
        <>
            <div className="container">
                {categories.map((category) => (
                        <>
                            <div className="d-flex flex-row align-items-center">
                                <div className="d-inline-flex p-2 py-3 align-items-center">
                                    <h4 className="koble-blue">{category.category}</h4>
                                </div>
                                <div className="d-inline-flex p-2">
                                    <NewContactButton displayNewContactForm={displayNewContactForm}
                                                      setDisplayNewContactForm={setDisplayNewContactForm}
                                                      currentCategoryId={category.id || ""}
                                                      setContactCategory={setNewContactCategory}
                                    />
                                </div>
                            </div>
                            {(displayNewContactForm && newContactCategory === category.id) ? (
                                <NewContactForm userId={userId} categoryId={category.id || ""}
                                                setDisplayNewContactForm={setDisplayNewContactForm}
                                                setContactIdForDetails={setContactIdForDetails}/>
                            ) : (
                                <div className="row d-flex align-items-center g-4">
                                    {category.contacts?.length ?
                                        category.contacts.map((contact) =>
                                            <ContactCard contact={contact}
                                                         setContactIdForDetails={setContactIdForDetails}/>
                                        )
                                        : <p>No contacts to display.</p>}
                                    <hr className="rounded"/>
                                </div>

                            )}
                        </>

                    )
                )
                }
            </div>
        </>
    )
}

export default ContactsResultsGrid