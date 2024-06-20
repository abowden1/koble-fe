import {backendUrl} from "../AppConfig.tsx";
import axios from "axios";

interface Props {
    userId: string;
    setShowNewCategoryForm: React.Dispatch<React.SetStateAction<boolean>>
}

function NewCategoryForm ({userId, setShowNewCategoryForm}: Props) {
    const postUrl = `${backendUrl}/users/${userId}/categories`
    return (
        <>
            <div className="row">
                <form
                    name='createCategoryForm'
                    onSubmit={(e) => handleSubmit(e,
                        postUrl,
                        userId,
                        setShowNewCategoryForm
                    ) }>
                    <div className="row gy-3 py-1 align-items-center">
                        <div className="col gy-1">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Category"
                                aria-label="Enter Category"
                                name="category"
                            />
                        </div>
                        <div className="col-2 gx-0">
                            <button className="btn" type="submit">
                                <h3 className="text-secondary">
                                    <i className="bi bi-arrow-right-square"/>
                                </h3>
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}

function handleSubmit(event, postUrl, userId, setShowNewCategoryForm) {
    const headers = {
        headers: {'Content-Type': 'application/json'}
    }
    const formData = new FormData();
    event.preventDefault();

    const formPayload = {
        category: {
            category: event.target.elements.category.value,
        }
    }
    axios.post(postUrl, JSON.stringify(formPayload), headers)
        .then(response => {
            console.log(response)
            setShowNewCategoryForm(false)
        })
}

export default NewCategoryForm;