import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';

const GetEvent = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const [showAddedEvent, setShowAddedEvent] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/geteventdata')
            .then(res => res.json())
            .then(data => {
                setShowAddedEvent(data)
                console.log(data)
            })
    }, [])
    return (
        <div>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Event Title</th>
                        <th scope="col">Registration Date</th>
                        <th scope="col">Volunteer Name</th>
                        <th scope="col">Volunteer Email</th>
                    </tr>
                </thead>
                {
                    showAddedEvent.map(data =>
                        <tbody>
                            <tr className='font-weight-bold'>
                                <td>{data.taskname}</td>
                                <td>{(new Date(data.registration).toDateString('dd/MM/yyyy'))}</td>
                                <td>{data.name}</td>
                                <td>{data.email}</td>
                            </tr>
                        </tbody>
                    )}
            </table>
        </div>
    );
};

export default GetEvent;