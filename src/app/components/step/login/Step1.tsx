import React, { useRef } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { setStep, setUser } from "@/slices/rootSlice";
import { AppDispatch, RootState } from "@/store/store";

type Props = {}

function Step1({ }: Props) {

    const nameRef = useRef<HTMLInputElement>(null);
    const emailRef = useRef<HTMLInputElement>(null);
    const genderRef = useRef<HTMLSelectElement>(null);

    const { step, user } = useSelector(
        (state: RootState) => state.rootSlice
    );

    const dispatch = useDispatch<AppDispatch>();

    const setClick = async () => {
        await dispatch(setUser({
            'name': nameRef.current?.value,
            'email': emailRef.current?.value,
            'gender': genderRef.current?.value,
        }));
        await dispatch(setStep(2));
    };

    return (
        <section className="steps step2" id="step2">
            <div className="container">
                <article className="text-content">
                    <h2 className="main-heading"> Welcome To Javascript Quiz </h2>
                    <p className="main-text"> Please fill in your information before starting the quiz! </p>
                </article>
                <div className="steps-inner">
                    <div className="lightSpeedIn row">
                        <div className="col-md-12">
                            <div className="text_input mb-4">
                                <label>First and Last Name</label>
                                <input ref={nameRef} type="text" name="name" id="name" placeholder="Name Surname" required />
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="text_input mb-4">
                                <label>Email Address</label>
                                <input ref={emailRef} type="text" name="mail" id="mail-email" placeholder="Email" required />
                            </div>
                        </div>
                        <div className="tab-100 mb-3 col-md-7">
                            <div className="select_field gender_field">
                                <label htmlFor="gender">Gender :</label>
                                <select ref={genderRef} className="" name="gender" id="gender">
                                    <option value="Male">Male</option>
                                    <option value="female">Female</option>
                                </select>
                                <span></span>
                            </div>
                        </div>
                    </div>
                    <div className="next-prev">
                        <button className="next" id="step2btn" onClick={() => setClick()} type="button">Next<i className="fa fa-arrow-right"></i></button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Step1