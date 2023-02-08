import React from 'react'

type Props = {}

function Item({}: Props) {
  return (
    <section className="steps step2" id="step2">
        <div className="container">
            <article className="text-content">
                <h2 className="main-heading">
                    Service Enquiry
                </h2>
                <p className="main-text">
                    Please take a salfie with your document so that its clearly
                    visible anddoses not cover your face.
                </p>
            </article> 
            <div className="steps-inner">
                <div className="lightSpeedIn row">
                    <div className="col-md-12">
                        <div className="text_input mb-4">
                            <label>First and Last Name</label>
                            <input type="text" name="name" id="mail-name" placeholder="Name" required />
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div className="text_input mb-4">
                            <label>Email Address</label>
                            <input type="text" name="mail" id="mail-email" placeholder="Email" required />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="text_input mb-4">
                            <label>Phone</label>
                            <input type="text" name="phone" id="phone-mail" placeholder="Phone" required />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="select_field mb-4">
                            <select name="Serivce-Type" id="service-type">
                                <option value="">Services Type</option>
                                <option value="Technician Services">Technician Services</option>
                                <option value="Interior Services">Interior Services</option>
                                <option value="Ceilings Services">Ceilings Services</option>
                            </select>
                            <span></span>
                        </div>
                    </div>
                    <div className="tab-100 mb-3 col-md-7">
                        <div className="select_field gender_field">
                            <label htmlFor="gender">Gender Needs:</label>
                            <select className="" name="gender" id="gender">
                                <option value="Male">Male</option>
                                <option value="female">Female</option>
                            </select>
                            <span></span>
                        </div>
                    </div>
                    <div className="col-md-5">
                        <div className="text_input mb-4">
                            <label htmlFor="social-id">Social ID</label>
                            <input type="text" name="social-id" id="social-id" placeholder="Social ID:"/>
                        </div>
                    </div>
                    <div className="block-gap pt-4 pb-4 mt-3 mb-5">
                        <div className="col-md-12">
                            <div className="service-area">
                                <div className="row">
                                    <div className="col-md-3">
                                        <div className="service-area-label">Services For:</div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="justify-content-center d-flex align-items-center">
                                            <input checked type="radio" name="service-for" value="Restaurant"/>
                                            <label>Home</label>
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="justify-content-center d-flex align-items-center">
                                            <input type="radio" name="service-for" value="Office"/>
                                            <label>Office</label>
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="justify-content-center d-flex align-items-center">
                                            <input type="radio" name="service-for" value="Restaurant"/>
                                            <label>Restaurant</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="next-prev">
                    <button className="prev" type="button"><i className="fa fa-arrow-left"></i>Previous</button>
                    <span>Step 2 / 4</span>
                    <button className="next" id="step2btn" type="button">Next<i className="fa fa-arrow-right"></i></button>
                </div>
            </div>
        </div>
        <div className="step1-img-2">
            <img src="assets/images/step2-img-2.png" alt=""/>
        </div>
    </section> 
  )
}

export default Item