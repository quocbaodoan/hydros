/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from 'react'
import PaypalButton from './PaypalButton'
import waterbottle from '../img/water-bottle.png'

export default function CartContent() {
    const [qty, setQty] = useState(1);


    return (
        <div className='cart'>
            <div className='cart__inner'>
                <img src={waterbottle} />
                <h2>Hydros</h2>
                <div className="qty">
                    <div>
                        <input className="btn-triangle btn-decrement mx-1" onClick={() => setQty(qty - 1)} disabled={(qty <= 1) ? true : false} />
                    </div>
                    <div>
                        <span className="btn-number-cart mx-1" style={{ color: "#335eea" }}>{qty}</span>
                    </div>
                    <div>
                        <input className="btn-triangle btn-increment mx-1" onClick={() => setQty(qty + 1)} />
                    </div>
                </div>
                <h3 className="mt-3" style={{ marginBottom: "1rem", color: "#335eea", fontSize: '1.2rem', fontWeight: '400' }}>
                    {convertToString(700000 * qty)}đ
                </h3>
                <PaypalButton total={Math.round((700000 * qty) / 23000)} />
            </div>
        </div>
    )
}

function convertToString(value) {
    let resString = value.toString();
    let resFinal = "";
    while (resString.length > 3) {
        resFinal = "." + resString.substr(resString.length - 3, resString.length - 1) + resFinal;
        resString = resString.substr(0, resString.length - 3);
    }
    resFinal = resString + resFinal;
    return resFinal;
}