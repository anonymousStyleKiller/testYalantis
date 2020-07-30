import React from 'react';

const Users = ({data}) => {
    if (!data.length) {
        return <p className="align-content-center">No data</p>
    }
    return (
        <div className="text-center">
            <table className="table table-dark">
                <thead>
                <tr>
                    <th scope="col">First Name</th>
                    <th scope="col">Last Name</th>
                </tr>
                </thead>
                <tbody>
                {data.map((data) => {
                    return (
                        <tr key={data.id}>
                            <td>{data.firstName}</td>
                            <td>{data.lastName}</td>
                        </tr>
                    )
                })}
                </tbody>
            </table>
        </div>
    )
};

export default Users;