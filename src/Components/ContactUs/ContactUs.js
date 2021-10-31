import React from 'react';

const ContactUs = () => {
    return (
        <div className="row row-cols-1 row-cols-md-3 g-4 m-5">
            <div className="col">
                <div className="card h-100">
                    <i class="fas fa-map-marker-alt fa-3x text-center my-3"></i>
                    <div className="card-body">
                        <h5 className="card-title">Our On-Site Address</h5>
                        <p className="card-text"><strong>USA Branch : </strong> Plot 38,Street 39,UpHill Town,
                            NewYork ,USA.</p>
                        <p> <strong>Bangladesh Branch : </strong> Level-3,Monem Business District ,Bir Uttam Avenue, Dhaka,Bangladesh.</p>
                    </div>
                </div>
            </div>
            <div className="col">
                <div className="card h-100">
                    <i class="fas fa-tty fa-3x text-center my-3"></i>
                    <div className="card-body">
                        <h5 className="card-title">Contact Numbers</h5>
                        <p className="card-text">+01245776621</p>
                        <p className="card-text">+00824554445</p>
                        <p className="card-text">+88002145647</p>
                        <p className="text-success">Availablity :<strong> Sunday to Friday : 10am to 6pm</strong> </p>
                    </div>
                </div>
            </div>
            <div className="col">
                <div className="card h-100">
                    <i class="fas fa-mail-bulk fa-3x text-center my-3"></i>
                    <div className="card-body">
                        <h5 className="card-title">Mail Addresses</h5>
                        <p className="card-text">info@travel.org</p>
                        <p className="card-text">care@travel.com</p>
                        <p className="card-text">hr@travel.com</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;