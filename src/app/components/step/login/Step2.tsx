import React, { useState } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { setStep, setUser, setDifficult } from "@/slices/rootSlice";
import { AppDispatch, RootState } from "@/store/store";
import jsIcon from './../../../../assets/images/js.png'
import Image from 'next/image'

type Props = {}

function Step2({ }: Props) {


  const dispatch = useDispatch<AppDispatch>();
  const { difficult } = useSelector(
      (state: RootState) => state.rootSlice
  );
  
  const setClick = async () => {

    //await dispatch(setDifficult(diff));
    //await dispatch(setStep(2));
  };
  const handleSelectDiff = async (diff = "") => (await dispatch(setDifficult(diff)))

  return (
    <section className="steps step2" id="step2">
      <div className="container">
        <article className="text-content">
          <h2 className="main-heading"> Please choose a Quiz</h2>
          <p className="main-text"> Please select a difficulty to get started! </p>
        </article>


        <div className="steps-inner">
          <div className="lightSpeedIn row">
            <div className="tab-50 col-md-4 mb-3">
              <div className="step1_radio">
                <Image
                  src={jsIcon}
                  alt='Javascript'
                  width={90}
                  height={90}
                />
                <label>Basic</label>
                <input type="radio" onClick={() => handleSelectDiff("Basic")} name="service" value="Basic" />
              </div>
            </div>
            <div className="tab-50 col-md-4 mb-3">
              <div className="step1_radio">
                <Image
                  src={jsIcon}
                  alt='Javascript'
                  width={90}
                  height={90}
                />
                <label>Intermediate</label>
                <input type="radio" onClick={() => handleSelectDiff("Intermediate")} name="service" value="Intermediate" />
              </div>
            </div>
            <div className="tab-50 col-md-4 mb-3">
              <div className="step1_radio">
                <Image
                  src={jsIcon}
                  alt='Javascript'
                  width={90}
                  height={90}
                />
                <label>Expert</label>
                <input type="radio" onClick={() => handleSelectDiff("Expert")} name="service" />
              </div>
            </div>
          </div>
          <div className="next-prev">
            <button className="next" id="step2btn" onClick={() => setClick()} type="button">Next<i className="fa fa-arrow-right"></i></button>
          </div>
        </div>
      </div>
    </section >
  )
}

export default Step2