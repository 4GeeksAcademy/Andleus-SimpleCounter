import React, { useEffect, useRef, useState } from "react";

const Counter = () => {


    const [units, setUnits] = useState(0);
    const [tens, setTens] = useState(0);
    const [hundreds, setHundreds] = useState(0);
    const [unitsThousands, setUnitsThousands] = useState(0);
    const [tensThousands, setTensThousands] = useState(0);
    const [hundredsThousands, setHundredsThousands] = useState(0);
    const [millions, setMillions] = useState(0);


    let countU = 0;
    let countT = 0;
    let countH = 0;
    let countUT = 0;
    let countTT = 0;
    let countHT = 0;
    let countM = 0;
    useEffect(() => {
        
        const interval = setInterval(() => {
            console.log("UNITS -> "+countU);
            countU += 1;
            setUnits(prevCount => prevCount + 1);

            if(countU > 9){ //Add to tens
                countU = 0;
                setUnits(0);
                setTens(prevTens => prevTens + 1);
                countT++;
            }
            if(countT > 9){ //Add to hundreds
                countT = 0;
                setTens(0);
                setHundreds(prevHundreds => prevHundreds + 1);
                countH++;
            }
            if(countH > 9){ //Add to unitsThousands
                countH = 0;
                setHundreds(0);
                setUnitsThousands(prevUnitsThousands => prevUnitsThousands + 1);
                countUT++;
            }
            if(countUT > 9){//Add to tensThousands
                countUT = 0;
                setUnitsThousands(0);
                setTensThousands(prevTensThousands => prevTensThousands + 1);
                countTT++;
            }
            if(countTT > 9){//Add to hundredsThousands
                countTT = 0;
                setTensThousands(0);
                setHundredsThousands(prevHundredsThousands => prevHundredsThousands + 1);
                countHT++;
            }
            if(countHT > 9){//Add to millions
                countHT = 0;
                setHundredsThousands(0);
                setMillions(prevMillions => prevMillions + 1);
                countM++;
            }
            


        }, 1000);

        return () => {
            clearInterval(interval);
        };

    }, []);

   


    return (
        <div className="row">
            <h1>Time here -&gt;</h1>
            <div className="row d-flex justify-content-center bg-black text-light">
                <div className="cards col-1"><i class="fa-regular fa-clock fa-2xl"></i></div>
                <div className="cards col-1"><span class="numbers">{millions}</span></div>
                <div className="cards col-1"><span class="numbers">{hundredsThousands}</span></div>
                <div className="cards col-1"><span class="numbers">{tensThousands}</span></div>
                <div className="cards col-1"><span class="numbers">{unitsThousands}</span></div>
                <div className="cards col-1"><span class="numbers">{hundreds}</span></div>
                <div className="cards col-1"><span class="numbers">{tens}</span></div>
                <div className="cards col-1"><span class="numbers">{units}</span></div>
            </div>
        </div>
    );

}

export default Counter;




    // let units = 0;
    // let tens = 0;
    // let hundreds = 0;
    // let unitsThousands = 0;
    // let tensThousands = 0;
    // let hundredsThousands = 0;
    // let millions = 0

    // let show = document.querySelector("#count");
    // function counter(){
    //     units += 1;

    //     if(units > 9){
    //         units = 0;
    //         tens += 1;
    //     }
    //     if(tens > 9){
    //         tens = 0;
    //         hundreds += 1;
    //     }
    //     if(hundreds > 9){
    //         hundreds = 0;
    //         unitsThousands += 1;
    //     }
    //     if(unitsThousands > 9){
    //         unitsThousands = 0;
    //         tensThousands += 1;
    //     }
    //     if(tensThousands > 9){
    //         tensThousands = 0;
    //         hundredsThousands += 1;
    //     }
    //     if(hundredsThousands > 9){
    //         hundredsThousands = 0;
    //         millions += 1;
    //     }


    //     show.innerText = `Time here -> ${millions}${hundredsThousands}${tensThousands}${unitsThousands}${hundreds}${tens}${units}`;
    // }

    // let cancel = setInterval(counter, 1);
