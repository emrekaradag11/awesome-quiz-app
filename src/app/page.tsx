"use client";
import Header from './components/Header'
import StatusBar from './components/StatusBar'
import Counter from './components/step/Counter'
import Step1 from './components/step/login/Step1'
import React, { useState } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { setStep } from "@/slices/rootSlice";
import { AppDispatch, RootState } from "@/store/store";

export default function Home() {


  const { step } = useSelector(
    (state: RootState) => state.rootSlice
  );
  return (
    <main className="main">
      <div className="main-wrapper">
        <div className="main-inner">
          <Header />
          <form id="steps" method="post">
            <div className="show-section">
              {step <= 2 ? <Counter /> : null}
              <Step1 />
            </div>
            <StatusBar />
          </form>
        </div>
      </div>
    </main>
  )
}
