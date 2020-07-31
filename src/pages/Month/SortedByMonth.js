import React, { useState } from 'react';
import Data from "../../function/Data";
import ShowMonth from "./ShowMonth";


const SortedByMonth = ({data}) => {
        let {month} = Data(data);
        const [show, setShow] = useState(false);
        const hideListPeople = () => {
            setShow(false);
        }
        const showListPeople = () => {
            setShow(true);
        }
        if (!data.length) {
            return <p className="align-content-center">No data</p>
        }

        return (
            <ul className="list-group">
                <ShowMonth show={show} hideListPeople={hideListPeople}
                           showListPeople={showListPeople} month={month.January}
                           name={"January"}/>
                <ShowMonth show={show} hideListPeople={hideListPeople} showListPeople={showListPeople} month={month.February}
                           name={"February"}/>
                <ShowMonth show={show} hideListPeople={hideListPeople} showListPeople={showListPeople} month={month.March}
                           name={"March"}/>
                <ShowMonth show={show} hideListPeople={hideListPeople} showListPeople={showListPeople} month={month.April}
                           name={"April"}/>
                <ShowMonth show={show} hideListPeople={hideListPeople} showListPeople={showListPeople} month={month.May}
                           name={"May"}/>
                <ShowMonth show={show} hideListPeople={hideListPeople} showListPeople={showListPeople} month={month.June}
                           name={"June"}/>
                <ShowMonth show={show} hideListPeople={hideListPeople} showListPeople={showListPeople} month={month.July}
                           name={"July"}/>
                <ShowMonth show={show} hideListPeople={hideListPeople} showListPeople={showListPeople} month={month.August}
                           name={"August"}/>
                <ShowMonth show={show} hideListPeople={hideListPeople} showListPeople={showListPeople} month={month.September}
                           name={"September"}/>
                <ShowMonth show={show} hideListPeople={hideListPeople} showListPeople={showListPeople} month={month.October}
                           name={"October"}/>
                <ShowMonth show={show} hideListPeople={hideListPeople} showListPeople={showListPeople} month={month.November}
                           name={"November"}/>
                <ShowMonth show={show} hideListPeople={hideListPeople} showListPeople={showListPeople} month={month.December}
                           name={"December"}/>
            </ul>
        );
    }
;

export default SortedByMonth;