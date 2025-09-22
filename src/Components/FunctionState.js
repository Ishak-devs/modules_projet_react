import { Button } from "bootstrap";
import React, { useState } from "react";

const FunctionState = () => {

const [name, setCounter] =   useState(0)

    return (
        <div>
       <p>fonction test : {name}</p>
        <button onClick={() => setCounter(name + 1)}>State dans fonction</button>
         </div>
    )
}

export default FunctionState;