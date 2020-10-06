import React, { useContext, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import plus from '../../plus.png';
import user from '../../users.png';
import logo from '../../logo.png';
import upload from '../../upload.png';
import { Button } from '@material-ui/core';
import { UserContext } from '../../App';
import DateFnsUtils from '@date-io/date-fns';
import { Grid, makeStyles, TextField } from '@material-ui/core';
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
} from '@material-ui/pickers';
import GetEvent from './GetEvent';

const AddEvent = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const [newTask, setNewTask] = useState({
        taskname: ''
    })
    const [regDate, setRegDate] = useState({
        registration: new Date()
    })

    const handleEvent = (newtask) => {
        const name = document.getElementById('event-title').value
        const newEvent = { ...newTask }
        newEvent.taskname = name;
        setNewTask(newEvent)
        console.log(newTask)

    }
    const handleEventDate = (date) => {
        const newDate = { ...regDate };
        newDate.registration = date
        setRegDate(newDate)
    }
    const handleSubmit = (e) => {
        const newEvent = { ...loggedInUser,...newTask, ...regDate };
        fetch('https://cryptic-woodland-31769.herokuapp.com/addevent', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newEvent)
        })
            .then(res => res.json())
            .then(data => console.log(data))
            e.preventDefault()
    }

    const useStyles = makeStyles((theme) => ({
        paper: { width: '410px' , fontWeight: 'bold'},
    }))
    const classes = useStyles();

    return (
        <div className='row mt-4'>
            <div className='col-md-4 ml-4'>
                <NavLink to="/" style={{}} className='ml-3'>
                    <img style={{ width: '170px', heigth: '56px', opacity: '1' }} src={logo} alt="" />
                </NavLink>
                <div className='mt-5  ml-3'>
                    <NavLink to='/adminpage' className='font-weight-bold' activeStyle={{ color: 'black' }}> <img style={{ width: '20px' }} src={user} alt="" /> Volunteer register list</NavLink> <br />
                    <NavLink to='/addevent' className='font-weight-bold' activeStyle={{ color: 'black' }}> <img style={{ width: '20px' }} src={plus} alt="" /> Add event</NavLink>
                </div>
            </div>
            <div className='col-md-7'>
                <h3 className='mb-4'>Add Event</h3>
                <form className='row'>
                    <div className="form-group col-md-6">
                        <label className='font-weight-bold'>Event Title</label>
                        <input type="text" className="form-control" onChange={handleEvent} id='event-title' />
                    </div>
                    <div className="col-md-6">
                        <MuiPickersUtilsProvider utils={DateFnsUtils} >
                            <Grid container justify="space-around">
                                <KeyboardDatePicker
                                    className={classes.paper}
                                    format="dd/MM/yyyy"
                                    margin="normal"
                                    id="date-picker-dialog"
                                    label="Date"
                                    value={regDate.registration}
                                    onChange={handleEventDate}
                                    KeyboardButtonProps={{
                                        'aria-label': 'change date',
                                    }}
                                />
                            </Grid>
                        </MuiPickersUtilsProvider>
                    </div>
                    <div className="form-group col-md-6">
                        <label for="exampleFormControlTextarea1" className="font-weight-bold">Description</label>
                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                    <div className="col-md-6">
                        <Button
                            variant="contained"
                            component="label"
                            style={{ width: '200px', height: '50px', marginTop: '30px' }}>
                            <img style={{ width: '20px' }} src={upload} alt="" />
                        Upload image
                        <input
                                type="file"
                                style={{ display: "none" }}
                            />
                        </Button>
                    </div>
                    <button className="btn btn-primary mb-4 ml-auto" onClick={(e) => handleSubmit(e)}>Submit</button>
                </form>
            </div>
            <div className="container col-md-8">
                <GetEvent></GetEvent>
            </div>
        </div>
    );
};

export default AddEvent;