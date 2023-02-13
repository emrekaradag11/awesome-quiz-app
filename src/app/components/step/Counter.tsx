import React from 'react'
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";

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
                <div className={(step === 2 ? 'active' : null) + " step-number"}> 2 </div>
                <div className={(step === 3 ? 'active' : null) + " step-number no-line"}> 3 </div>
            </div>
        </div>
    )
}

export default Counter