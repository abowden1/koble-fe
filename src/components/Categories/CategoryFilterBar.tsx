import {useEffect, useState} from "react";
import {backendUrl} from "../../AppConfig.tsx";
import axios from "axios";
import {CategoriesApiResponseMapper} from "../Utils/ApiResponseMappers.ts";

interface Props {
    userId: string;
    setFilterableCategoryId: React.Dispatch<React.SetStateAction<string | undefined>>
}

function CategoryFilterBar({userId, setFilterableCategoryId}: Props) {
    const [categories, setCategories] = useState([] as Category[])
    const dataUrl = `${backendUrl}/users/${userId}/categories?include=contacts`

    useEffect(() => {
        axios.get(dataUrl)
            .then(response => setCategories(CategoriesApiResponseMapper(response.data.categories)))
    }, [dataUrl]);
    return (
        <>
            <div className="container">
                <div className="row align-items-start">
                    <hr className="dotted"/>
                    <div className="col d-flex justify-content-start align-items-start m-1">
                        <button className="btn btn-light text-center m-1">
                            <i className="bi bi-pencil-square koble-blue"/>
                        </button>
                        <button className="btn btn-light text-center m-1"
                                onClick={() => setFilterableCategoryId(undefined)}
                                role="button">
                            <h6 className="text-dark-emphasis">Show All</h6>
                        </button>
                        {categories.map((category) => (
                            <button className="btn btn-light text-center m-1"
                                    onClick={() => setFilterableCategoryId(category.id)}
                                    role="button">
                                <h6 className="text-dark-emphasis" id={category.id}>{category.category}</h6>
                            </button>

                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default CategoryFilterBar