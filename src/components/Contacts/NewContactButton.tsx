interface Props {
    displayNewContactForm: boolean;
    setDisplayNewContactForm: React.Dispatch<React.SetStateAction<boolean>>;
    currentCategoryId: string;
    setContactCategory: React.Dispatch<React.SetStateAction<string | undefined>>;
}

function NewContactButton({
                              displayNewContactForm,
                              setDisplayNewContactForm,
                              currentCategoryId,
                              setContactCategory
                          }: Props) {
    return (
        <>
            <div className={`col justify-content-start  ${displayNewContactForm ? "hidden" : ""}`}>
                <button
                    className="btn"
                    onClick={() => handleClick(setDisplayNewContactForm, currentCategoryId, setContactCategory)}
                >
                    <i className="bi-person-plus koble-blue h4"></i>
                </button>
            </div>
        </>
    )
}

function handleClick(setDisplayNewContactForm: (arg0: boolean) => void, currentCategoryId: string, setContactCategory: (arg0: any) => void) {
    setDisplayNewContactForm(true);
    setContactCategory(currentCategoryId)
}

export default NewContactButton