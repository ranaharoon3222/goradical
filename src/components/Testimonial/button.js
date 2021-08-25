import React from "react";

export const PrevButton = ({ enabled, onClick }) => (

    <button className="prev-arrow" onClick={onClick}
        disabled={!enabled}>
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25.364"
            height="14.091"
            viewBox="0 0 25.364 14.091"
        >
            <path
                d="M8.042,13.678a1.409,1.409,0,0,1-1.993,0L.414,8.043h0a1.408,1.408,0,0,1,0-1.993h0L6.049.413A1.409,1.409,0,0,1,8.042,2.405L4.811,5.636H23.955a1.409,1.409,0,1,1,0,2.818H4.811l3.231,3.231A1.409,1.409,0,0,1,8.042,13.678Z"
                fill="#fff"
            />
        </svg>
    </button>
);

export const NextButton = ({ enabled, onClick }) => (
    <button className="next-arrow" onClick={onClick}
        disabled={!enabled} >
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25.364"
            height="14.091"
            viewBox="0 0 25.364 14.091"
        >
            <path
                d="M17.322,13.678a1.409,1.409,0,0,0,1.993,0L24.95,8.043h0a1.408,1.408,0,0,0,0-1.993h0L19.315.413a1.409,1.409,0,1,0-1.993,1.993l3.231,3.231H1.409a1.409,1.409,0,1,0,0,2.818H20.553l-3.231,3.231A1.409,1.409,0,0,0,17.322,13.678Z"
                fill="#fff"
            />
        </svg>
    </button>

);
