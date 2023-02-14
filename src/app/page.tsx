"use client";
import Header from './components/Header'
import StatusBar from './components/StatusBar'
import Counter from './components/step/Counter'
import Step1 from './components/step/login/Step1'
import Step2 from './components/step/login/Step2'
import Step3 from './components/step/login/Step3'
import React from 'react'
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";

export default function Home() {

  const { step } = useSelector(
    (state: RootState) => state.rootSlice
  );

  return (
    <>
      <Header />
      <form id="steps" method="post">
        <div className="show-section">
          {step <= 3 ? <Counter /> : null}
          {step === 1 ? <Step1 /> : null}
          {step === 2 ? <Step2 /> : null}
          {step === 3 ? <Step3 /> : null}
        </div>
        {step >= 4 ? <StatusBar /> : null}
      </form>
    </>
  )
}
