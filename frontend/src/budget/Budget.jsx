import React, { useState, useEffect } from 'react';
import { motion, useAnimate } from "motion/react"

import './bstyles.css';

function Budget() {
    const [scope, animate] = useAnimate()
    const [delay, setDelay] = useState(false);

    async function myAnimation() {
        await animate("button", { y:-5 }, {duration: .3});
        await animate("button", { y: 5 }, {duration: .3});
      }

    const handleClick = () => {
        if (!delay) {
            setDelay(true); //debounce
            console.log("test");
            myAnimation();
            const tout = setTimeout(() =>{ //setTimeout only runs once vs setInterval which runs multiple times
                setDelay(false);    
            }, 1000);
            return() => clearTimeout(tout);
        }
    }


    return (
        <>
            <p className="btitle">Here you can create your own budgets!</p>
            <hr className="bhr" />
            <div ref={scope}>
                <motion.button className='new-budget-button' onClick={handleClick}
                whileHover={{scale: 1.1}}>
                    <span>+</span>
                    New Budget
                </motion.button>
            </div>
        </>
    );
}

export default Budget;