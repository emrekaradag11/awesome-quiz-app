import React, { useState } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { setStep, setUser, setDifficult } from "@/slices/rootSlice";
import { AppDispatch, RootState } from "@/store/store";
import { useRouter } from 'next/navigation';

type Props = {}

function Step3({}: Props) {

  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter()
  
  const setClick = async () => {
    await dispatch(setStep(4));
    await router.push('/quiz')
  };

  return (
    <section className="steps step3" id="step2">
      <div className="container">
        <article className="text-content">
          <h2 className="main-heading"> Are you Ready?</h2>
          <p className="main-text"> If you`re ready for the quiz, let`s get started! </p>
        </article>
          <div className="next-prev text-center justify-content-center">
            <button className="next" id="step2btn" onClick={() => setClick()} type="button">Start<i className="fa fa-star"></i></button>
          </div>
      </div>
    </section>
  )
}

export default Step3