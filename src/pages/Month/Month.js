import React from 'react';
import ShowData from "../../function/ShowData";
import ShowColor from "../../function/ShowColor";


const Month = ({data}) => {
        let {January, February, April, August, December, July, June, March, May, November, October, September} = ShowData(data);
        // const [show, setShow] = useState(false);
        // const [hide, setHide] = useState(true);
        // const hidePeople = () => {
        //     setHide(true);
        //     setShow(false);
        // }
        // const showPeople = () => {
        //     setShow(true);
        //     setHide(false);
        // }

        if (!data.length) {
            return <p className="align-content-center">No data</p>
        }
        return (
            <ul className="list-group">
                <li className={`list-group-item d-flex justify-content-between align-items-center ${ShowColor(January.length)}`}>
                    January
                    <div>
                        <span className="badge badge-primary badge-pill mr-2">{January.length}</span>
                        <button type="button" className="btn btn-info">Show people</button>
                    </div>

                </li>
                <li className={`list-group-item d-flex justify-content-between align-items-center ${ShowColor(February.length)}`}>
                    February
                    <span className="badge badge-primary badge-pill">{February.length}</span>
                </li>
                <li className={`list-group-item d-flex justify-content-between align-items-center ${ShowColor(March.length)}`}>
                    March
                    <span className="badge badge-primary badge-pill">{March.length}</span>
                </li>
                <li className={`list-group-item d-flex justify-content-between align-items-center ${ShowColor(April.length)}`}>
                    April
                    <span className="badge badge-primary badge-pill">{April.length}</span>
                </li>
                <li className={`list-group-item d-flex justify-content-between align-items-center ${ShowColor(May.length)}`}>
                    May
                    <span className="badge badge-primary badge-pill">{May.length}</span>
                </li>
                <li className={`list-group-item d-flex justify-content-between align-items-center ${ShowColor(June.length)}`}>
                    June
                    <span className="badge badge-primary badge-pill">{June.length}</span>
                </li>
                <li className={`list-group-item d-flex justify-content-between align-items-center ${ShowColor(July.length)}`}>
                    July
                    <span className="badge badge-primary badge-pill">{July.length}</span>
                </li>
                <li className={`list-group-item d-flex justify-content-between align-items-center ${ShowColor(August.length)}`}>
                    August
                    <span className="badge badge-primary badge-pill">{August.length}</span>
                </li>
                <li className={`list-group-item d-flex justify-content-between align-items-center ${ShowColor(September.length)}`}>
                    September
                    <span className="badge badge-primary badge-pill">{September.length}</span>
                </li>
                <li className={`list-group-item d-flex justify-content-between align-items-center ${ShowColor(October.length)}`}>
                    October
                    <span className="badge badge-primary badge-pill">{October.length}</span>
                </li>
                <li className={`list-group-item d-flex justify-content-between align-items-center ${ShowColor(November.length)}`}>
                    November
                    <span className="badge badge-primary badge-pill">{November.length}</span>
                </li>
                <li className={`list-group-item d-flex justify-content-between align-items-center ${ShowColor(December.length)}`}>
                    December
                    <span className="badge badge-primary badge-pill">{December.length}</span>
                </li>
            </ul>
        );
    }
;

export default Month;