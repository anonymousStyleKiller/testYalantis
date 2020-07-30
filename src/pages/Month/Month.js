import React, { useState } from 'react';
import ShowData from "../../function/ShowData";
import ShowColor from "../../function/ShowColor";
import ShowPeople from "../../function/ShowPeople";


const Month = ({data}) => {
        let {
            January, February, April, August, December,
            July, June, March, May, November, October, September,} = ShowData(data);

        const [show, setShow] = useState(false);

        const hidePeople = () => {
            setShow(false);
        }
        const showPeople = () => {
            setShow(true);
        }

        if (!data.length) {
            return <p className="align-content-center">No data</p>
        }
        return (
            <ul className="list-group">

                {show ?
                    <li onMouseLeave={() => {
                        hidePeople()
                    }}>
                        <ShowPeople arr={January}/>
                    </li>
                    :
                    <li onMouseOver={() => {
                        showPeople()
                    }}
                        className={`list-group-item d-flex justify-content-between align-items-center ${ShowColor(January.length)}`}>
                        January
                        <span className="badge badge-primary badge-pill mr-2">{January.length}</span>
                    </li>
                }


                {show ?
                    <li onMouseLeave={() => {
                        hidePeople()
                    }}>
                        <ShowPeople arr={February}/>
                    </li>
                    :
                    <li onMouseOver={() => {
                        showPeople()
                    }}
                        className={`list-group-item d-flex justify-content-between align-items-center ${ShowColor(February.length)}`}>
                        February
                        <span className="badge badge-primary badge-pill mr-2">{February.length}</span>
                    </li>
                }

                {show ?
                    <li onMouseLeave={() => {
                        hidePeople()
                    }}>
                        <ShowPeople arr={March}/>
                    </li>
                    :
                    <li onMouseOver={() => {
                        showPeople()
                    }}
                        className={`list-group-item d-flex justify-content-between align-items-center ${ShowColor(March.length)}`}>
                        March
                        <span className="badge badge-primary badge-pill mr-2">{March.length}</span>
                    </li>
                }

                {show ?
                    <li onMouseLeave={() => {
                        hidePeople()
                    }}>
                        <ShowPeople arr={April}/>
                    </li>
                    :
                    <li onMouseOver={() => {
                        showPeople()
                    }}
                        className={`list-group-item d-flex justify-content-between align-items-center ${ShowColor(April.length)}`}>
                        April
                        <span className="badge badge-primary badge-pill mr-2">{April.length}</span>
                    </li>
                }

                {show ?
                    <li onMouseLeave={() => {
                        hidePeople()
                    }}>
                        <ShowPeople arr={May}/>
                    </li>
                    :
                    <li onMouseOver={() => {
                        showPeople()
                    }}
                        className={`list-group-item d-flex justify-content-between align-items-center ${ShowColor(May.length)}`}>
                        May
                        <span className="badge badge-primary badge-pill mr-2">{May.length}</span>
                    </li>
                }

                {show ?
                    <li onMouseLeave={() => {
                        hidePeople()
                    }}>
                        <ShowPeople arr={June}/>
                    </li>
                    :
                    <li onMouseOver={() => {
                        showPeople()
                    }}
                        className={`list-group-item d-flex justify-content-between align-items-center ${ShowColor(June.length)}`}>
                        June
                        <span className="badge badge-primary badge-pill mr-2">{June.length}</span>
                    </li>
                }
                {show ?
                    <li onMouseLeave={() => {
                        hidePeople()
                    }}>
                        <ShowPeople arr={July}/>
                    </li>
                    :
                    <li onMouseOver={() => {
                        showPeople()
                    }}
                        className={`list-group-item d-flex justify-content-between align-items-center ${ShowColor(July.length)}`}>
                        July
                        <span className="badge badge-primary badge-pill mr-2">{July.length}</span>
                    </li>
                }

                {show ?
                    <li onMouseLeave={() => {
                        hidePeople()
                    }}>
                        <ShowPeople arr={August}/>
                    </li>
                    :
                    <li onMouseOver={() => {
                        showPeople()
                    }}
                        className={`list-group-item d-flex justify-content-between align-items-center ${ShowColor(August.length)}`}>
                        August
                        <span className="badge badge-primary badge-pill mr-2">{August.length}</span>
                    </li>
                }
                {show ?
                    <li onMouseLeave={() => {
                        hidePeople()
                    }}>
                        <ShowPeople arr={September}/>
                    </li>
                    :
                    <li onMouseOver={() => {
                        showPeople()
                    }}
                        className={`list-group-item d-flex justify-content-between align-items-center ${ShowColor(September.length)}`}>
                        September
                        <span className="badge badge-primary badge-pill mr-2">{September.length}</span>
                    </li>
                }
                {show ?
                    <li onMouseLeave={() => {
                        hidePeople()
                    }}>
                        <ShowPeople arr={October}/>
                    </li>
                    :
                    <li onMouseOver={() => {
                        showPeople()
                    }}
                        className={`list-group-item d-flex justify-content-between align-items-center ${ShowColor(October.length)}`}>
                        October
                        <span className="badge badge-primary badge-pill mr-2">{October.length}</span>
                    </li>
                }
                {show ?
                    <li onMouseLeave={() => {
                        hidePeople()
                    }}>
                        <ShowPeople arr={November}/>
                    </li>
                    :
                    <li onMouseOver={() => {
                        showPeople()
                    }}
                        className={`list-group-item d-flex justify-content-between align-items-center ${ShowColor(November.length)}`}>
                        November
                        <span className="badge badge-primary badge-pill mr-2">{November.length}</span>
                    </li>
                }
                {show ?
                    <li onMouseLeave={() => {
                        hidePeople()
                    }}>
                        <ShowPeople arr={December}/>
                    </li>
                    :
                    <li onMouseOver={() => {
                        showPeople()
                    }}
                        className={`list-group-item d-flex justify-content-between align-items-center ${ShowColor(December.length)}`}>
                        December
                        <span className="badge badge-primary badge-pill mr-2">{December.length}</span>
                    </li>
                }
            </ul>
        );
    }
;

export default Month;