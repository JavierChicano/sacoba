"use client"
import React, { useState, useEffect } from 'react';
import { useCambioTema } from '../../../../states/states';

export default function BotonTema() {
  const [isChecked, setIsChecked] = useState(false);
  const { setCambioTema } = useCambioTema();

  useEffect(() => {
    setCambioTema(isChecked ? 'light' : 'dark'); 
  }, [isChecked, setCambioTema]);

  const toggleLabel = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className="w-auto h-12">
      <div className="toggle">
        {/* Lo que se clicka para cambiar el tema es el checkbox */}
        <input
          type="checkbox"
          checked={isChecked}
          onChange={toggleLabel}
          onClick={() => setIsChecked(!isChecked)}
        />
        <span className="button"></span>
        {isChecked ? (
          <span className="label2">☾</span>
        ) : (
          <span className="label">☼</span>
        )}
      </div>

      <style>{`
        .toggle {
          display: inline-block;
          position: relative;
          height: 50px;
          width: 50px;
        }

        .toggle:before {
          box-shadow: 0;
          border-radius: 42.25px;
          background: #fff;
          position: absolute;
          margin-left: -18px;
          margin-top: -18px;
          opacity: 0.2;
          height: 36px;
          width: 36px;
          left: 50%;
          top: 50%;
        }

        .toggle .button {
          transition: all 150ms cubic-bezier(0.23, 1, 0.32, 1);
          border-radius: 34.4px;
          position: absolute;
          background: ${isChecked ? '#000' : '#eaeaea'};
          margin-left: -17.2px;
          margin-top: -17.2px;
          display: block;
          height: 34.4px;
          width: 34.4px;
          left: 50%;
          top: 50%;
        }

        .toggle .label,
        .toggle .label2 {
          transition: color 150ms ease-out;
          line-height: 50px;
          text-align: center;
          position: absolute;
          font-weight: 700;
          font-size: 14px;
          display: block;
          opacity: 0.9;
          height: 50px;
          width: 50px;
          color: ${isChecked ? '#fff' : 'rgba(0, 0, 0, 0.9)'};
        }

        .toggle input {
          opacity: 0;
          position: absolute;
          cursor: pointer;
          z-index: 1;
          height: 100%;
          width: 100%;
          left: 0;
          top: 0;
        }
      `}</style>
    </div>
  );
}
