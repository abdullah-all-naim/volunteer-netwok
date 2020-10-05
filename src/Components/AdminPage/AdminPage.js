import React, { useContext, useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { UserContext } from '../../App';
import logo from '../../logo.png';
import deletelogo from '../../delete.png';
import plus from '../../plus.png';
import user from '../../users.png';

const AdminPage = () => {
    const [showVolunteerList, setVolunteerList] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/volunteersdata')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setVolunteerList(data)})
    }, [])

    const deleteVounteer = (e, id) => {
        e.target.parentNode.parentNode.innerHTML = ''
        fetch(`http://localhost:5000/volunteersdata/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(result => {
                console.log(result)
            })
    }

    return (
        <div className='row mt-4'>
            <div className='col-md-3 ml-4'>
                <NavLink to="/" style={{}} className='ml-3'>
                    <img style={{ width: '170px', heigth: '56px', opacity: '1' }} src={logo} alt="" />
                </NavLink>
                <div className='mt-5  ml-3'>
                    <NavLink to='/adminpage' className='font-weight-bold' activeStyle={{ color: 'black' }}> <img style={{ width: '20px' }} src={user} alt="" /> Volunteer register list</NavLink> <br />
                    <NavLink to='/addevent' className='font-weight-bold' activeStyle={{ color: 'black' }}> <img style={{ width: '20px' }} src={plus} alt="" /> Add event</NavLink>
                </div>
            </div>
            <div className='col-md-8'>
                <h2 className=''>Volunteer register list</h2>
                <div className=''>
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">Name</th>
                                <th scope="col">EmailId</th>
                                <th scope="col">Registration Date</th>
                                <th scope="col">Volunteer List</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        {showVolunteerList.map(data => <tbody>
                            <tr id='volunteer-list'  className='font-weight-bold'>
                                <td>{data.name}</td>
                                <td>{data.email}</td>
                                <td>{(new Date(data.checkInDate).toDateString('dd/MM/yyyy'))}</td>
                                <td>{data.taskname}</td>
                                <td onClick={(e) => deleteVounteer(e, data._id)}> <img style={{ width: '25px', cursor: 'pointer', backgroundColor: 'red', borderRadius: '5px' }} src={deletelogo} alt="" /> </td>
                            </tr>
                        </tbody>
                        )}
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AdminPage;
