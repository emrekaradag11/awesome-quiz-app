import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import { setStep } from "@/slices/rootSlice";
import { AppDispatch, RootState } from "@/store/store";

type Props = {

}

function Counter({ }: Props) {

    const { step } = useSelector(
        (state: RootState) => state.rootSlice
    );

    return (
        <div className="step-counter">
            <div className="step-counter-inner">
                <div className={(step === 1 ? 'active' : null) + " step-number"}> 1 </div>
                <div className={(step === 2 ? 'active' : null) + " step-number no-line"}> 2 </div>
            </div>
        </div>
    )
}

export default Counter