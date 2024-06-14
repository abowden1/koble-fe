interface Props {
  contact: Contact;
}

function BaseContactDetails({ contact }: Props) {
  return (
    <>
      <div className="card-content gy-4">
        <div className="row gx-0 justify-content-start align-items-center">
          <div className="col-2 d-flex justify-content-start" />
          <div className="col d-flex justify-content-start">
            <h2 className="text-capitalize">
              {contact.name}
            </h2>
          </div>
        </div>
        {contact.phoneNumber? (
            <div className="row gx-0 d-flex justify-content-center p-1">
              <div className="col-2 d-flex justify-content-start">
                <i className="bi-telephone"></i>
              </div>
              <div className="col d-flex justify-content-start align-items-center text-darkgray px-1">
                {contact.phoneNumber}
              </div>
            </div>
        ): undefined}
        {contact.email ? (
            <div className="row gx-0 d-flex justify-content-center">
              <div className="col-2 d-flex justify-content-start">
                <i className="bi-envelope-at koble-blue"></i>
              </div>
              <div className="col d-flex justify-content-start align-items-center text-darkgray px-1">
              {contact.email}
              </div>
            </div>
        ): undefined}
      </div>
    </>
  );
}

export default BaseContactDetails;
