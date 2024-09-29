"use client"; 

import React, { useState } from 'react';

const Convertidor = () => {
    const [cantidad, setCantidad] = useState('');
    const [de, setDe] = useState('ARS');
    const [a, setA] = useState('USD');
    const [resultado, setResultado] = useState('');

    const tasas = {
        'USD': 1330.00,
        'EUR': 1005.00,
    };

    const convertir = () => {
        const valor = parseFloat(cantidad);
        let resultado = 0;

        if (de === 'ARS' && a === 'USD') {
            resultado = valor / tasas['USD'];
        } else if (de === 'USD' && a === 'ARS') {
            resultado = valor * tasas['USD'];
        } else if (de === 'ARS' && a === 'EUR') {
            resultado = valor / tasas['EUR'];
        } else if (de === 'EUR' && a === 'ARS') {
            resultado = valor * tasas['EUR'];
        } else if (de === 'USD' && a === 'EUR') {
            resultado = (valor * tasas['USD']) / tasas['EUR'];
        } else if (de === 'EUR' && a === 'USD') {
            resultado = (valor * tasas['EUR']) / tasas['USD'];
        } else {
            resultado = valor; 
        }

        setResultado(`Resultado: $${resultado.toFixed(2)}`);
    };

    return (
        <div>
            <h2>Conversor de Monedas</h2>
            <input 
                type="number" 
                value={cantidad} 
                onChange={(e) => setCantidad(e.target.value)} 
                placeholder="Cantidad"
            />
            <select value={de} onChange={(e) => setDe(e.target.value)}>
                <option value="ARS">ARS</option>
                <option value="USD">USD</option>
                <option value="EUR">EUR</option>
            </select>
            <select value={a} onChange={(e) => setA(e.target.value)}>
                <option value="ARS">ARS</option>
                <option value="USD">USD</option>
                <option value="EUR">EUR</option>
            </select>
            <button onClick={convertir}>Convertir</button>
            <p>{resultado}</p>
        </div>
    );
};

export default Convertidor;
