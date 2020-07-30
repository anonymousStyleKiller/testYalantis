import React from 'react';

const ShowPeople = ({arr}) => {
    if (!arr.length) {
        return <p className="align-content-center">No data</p>
    }
    return (
        <div className="text-center">
            <table className="table table-hover">
                <thead>
                <tr>
                    <th scope="col">Id</th>
                    <th scope="col">First Name</th>
                    <th scope="col">Last Name</th>
                    <th scope="col">Birthday</th>
                </tr>
                </thead>
                <tbody>
                {
                    arr.map(item => {
                        return (
                            <tr>
                                <th>{item.id}</th>
                                <td>{item.firstName}</td>
                                <td>{item.lastName}</td>
                                <td>{item.dob}</td>
                            </tr>
                        )
                    })
                }
                </tbody>
            </table>
        </div>
    )
};

export default ShowPeople;