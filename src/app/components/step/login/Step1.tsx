import React from 'react'
type Props = {}

function Step1({ }: Props) {
    
    return (
        <section className="steps step2" id="step2">
            <div className="container">
                <article className="text-content">
                    <h2 className="main-heading">
                        Welcome To Javascript Quiz
                    </h2>
                    <p className="main-text"> Please fill in your information before starting the quiz! </p>
                </article>
                <div className="steps-inner">
                    <div className="lightSpeedIn row">
                        <div className="col-md-12">
                            <div className="text_input mb-4">
                                <label>First and Last Name</label>
                                <input type="text" name="name" id="mail-name" placeholder="Name Surname" required />
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="text_input mb-4">
                                <label>Email Address</label>
                                <input type="text" name="mail" id="mail-email" placeholder="Email" required />
                            </div>
                        </div>
                        <div className="tab-100 mb-3 col-md-7">
                            <div className="select_field gender_field">
                                <label htmlFor="gender">Gender :</label>
                                <select className="" name="gender" id="gender">
                                    <option value="Male">Male</option>
                                    <option value="female">Female</option>
                                </select>
                                <span></span>
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
                <img src="assets/images/step2-img-2.png" alt="" />
            </div>
        </section>
    )
}

export default Step1