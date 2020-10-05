import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import Navigation from '../Navigation/Navigation';

const VolunteerData = () => {
    const [showData, setShowData] = useState([]);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    useEffect(() => {
        fetch('http://localhost:5000/taskList?email=' + loggedInUser.email)
            .then(res => res.json())
            .then(data => setShowData(data))

    }, [])

    const deleteTask = (e,id) => {
        console.log(id)
        e.target.parentNode.parentNode.parentNode.parentNode.parentNode.innerHTML = ''
        console.log(e.target.parentNode)
        fetch(`http://localhost:5000/volunteersdata/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(result => {
                console.log(result)
            })
    }
    return (
        <div className='container'>
            <Navigation></Navigation>
            <h3 className='bg-primary text-center mt-3'>Hi there {loggedInUser.name} welcome!</h3>
            <div className='d-flex flex-wrap justify-content-center'>
                {
                    showData.map(data =>
                        <div  id='task-details'>
                            <div className="card mb-3 m-3" style={{ width: '440px', borderRadius: '15px' }}>
                                <div className="d-flex flex-wrap justify-content-center">
                                    <div className="col-md-6">
                                        <img style={{ margin: '10px 0' }} src={data.taskImages} className="card-img" alt="..." />
                                    </div>
                                    <div className="col-md-6">
                                        <div className="card-body">
                                            <h5 className="card-title">{data.taskname}</h5>
                                            <p className="card-text">{(new Date(data.checkInDate).toDateString('dd/MM/yyyy'))}</p>
                                            <button className='btn btn-primary' onClick={(e) => deleteTask(e,data._id)}>Cancel</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>

        </div>
    );
};

export default VolunteerData;