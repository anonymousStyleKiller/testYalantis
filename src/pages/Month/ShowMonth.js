import React from 'react';
import ShowPeople from "../../function/ShowPeople";
import ShowColor from "../../function/ShowColor";

function ShowMonth({show, hideListPeople, showListPeople, month, name}) {
    return (
        <>
            {show ?
                <li className="text-center">
                    <ShowPeople arr={month} name={name}/>
                    <button type="button" className="btn btn-danger mb-2" onClick={() => {
                        hideListPeople()
                    }}>Close
                    </button>
                </li> :
                <li
                    className={`list-group-item d-flex justify-content-between 
                    align-items-center ${ShowColor(month.length)}`}>
                    {name}
                    <div>
                        <span className="badge badge-primary badge-pill mr-2">{month.length}</span>
                        <button type="button" className="btn-sm btn-info" onClick={() => {
                            showListPeople()
                        }} >Details</button>
                    </div>

                </li>
            }
        </>
    );
}

export default ShowMonth;