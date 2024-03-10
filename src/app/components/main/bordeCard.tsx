"use client"
import React, { ReactNode } from 'react';


export default function BordeCard({ children }: { children: ReactNode }) {
  return (
    <div className="card ">
      <div className="content">
        <div className="back">
          <div className="back-content">
             {children}
          </div>
        </div>
      </div>
      <style jsx>{`
        .card {
            overflow: visible;
            width: 189px;
            height: 254px;
          }
          .content {
            width: 100%;
            height: 100%;
            transform-style: preserve-3d;
            transition: transform 300ms;
            box-shadow: 0px 0px 10px 1px #000000ee;
            border-radius: 5px;
          }
          
          .back {
            position: absolute;
            width: 100%;
            height: 100%;
            backface-visibility: hidden;
            -webkit-backface-visibility: hidden;
            border-radius: 5px;
            overflow: hidden;
          }
          
          .back {
            width: 100%;
            height: 100%;
            justify-content: center;
            display: flex;
            align-items: center;
            overflow: hidden;
          }
          
          .back::before {
            position: absolute;
            content: ' ';
            display: block;
            width: 160px;
            height: 160%;
            background: linear-gradient(90deg, transparent, #ff9966, #ff9966, #ff9966, #ff9966, transparent);
            animation: rotation_481 5000ms infinite linear;
          }
          
          .back-content {
            position: absolute;
            width: 99%;
            height: 99%;
            background-color: #151515;
            border-radius: 5px;
            color: white;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            gap: 30px;
          }
          
          .card:hover .content {
            transform: rotateY(180deg);
          }
          
          @keyframes rotation_481 {
            0% {
              transform: rotateZ(0deg);
            }
          
            0% {
              transform: rotateZ(360deg);
            }
          }
          
          
          @keyframes floating {
            0% {
              transform: translateY(0px);
            }
          
            50% {
              transform: translateY(10px);
            }
          
            100% {
              transform: translateY(0px);
            }
          }
      `}</style>
    </div>
  );
}
