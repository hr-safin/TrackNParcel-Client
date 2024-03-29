import { useWindowSize } from "@react-hook/window-size";
import React from "react";
import Confetti from "react-confetti";

const PaymentSuccess = () => {
    const { width, height } = useWindowSize();
    
    

    return (
        <div>
            <div className="flex text-center w-full text-3xl md:text-4xl lg:text-5xl justify-center items-center h-[100vh]">
                Payment Successful
            </div>
             <Confetti className=" h-screen  w-full" width={width} height={height}/>
        </div>
    );
};

export default PaymentSuccess;
