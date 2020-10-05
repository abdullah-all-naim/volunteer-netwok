import { Grid, makeStyles, TextField } from '@material-ui/core';
import React, { useContext, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { UserContext } from '../../App';
import logo from '../../logo.png';
import { taskList } from '../TaskList/TaskList';
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
} from '@material-ui/pickers';

const VolunteerReg = () => {
    const { work } = useParams();
    const taskImage = taskList.find(x => x.name === work)
    const history = useHistory();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [selectedDate, setSelectedDate] = useState({
        checkInDate: new Date()
    })
    const [taskDetails, setTaskDetails] = useState({
        taskname: work,
        taskImages: taskImage.pic
    })
    const handleRegistration = () => {
        const newVolunteer = { ...loggedInUser, ...selectedDate, ...taskDetails };
        fetch('http://localhost:5000/volunteerdata', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newVolunteer)
        })
            .then(res => res.json())
            .then(data => console.log(data))
    }

    const handleCheckInDate = (date) => {
        const newDate = { ...selectedDate };
        newDate.checkInDate = date;
        setSelectedDate(newDate)
    }

    const handleTaskName = (task) => {
        const taskInfo = {...taskDetails}
        taskInfo.taskname = task
        setTaskDetails(taskInfo)
    }

    const useStyles = makeStyles((theme) => ({
        paper:{ width: '410px'},
    }))
    const classes = useStyles();


    return (
        <div className="container text-center mt-5">
            <div className='mb-5'>
                <img style={{ width: '250px' }} src={logo} alt="" />
            </div>
            <div style={{ width: '550px', margin: 'auto' }}>
                <form className="text-center border" >
                    <h2 className='mt-5'>Register as a volunteer</h2>
                    <TextField className='mb-3 w-75' id="first-name" type='text' name="fullname" label="Full Name" value={loggedInUser.name} required /> <br />
                    <TextField className='mb-3 w-75' id="standard-basic" type='email' name="email" label="Username or Email" value={loggedInUser.email} required /> <br />
                    <MuiPickersUtilsProvider utils={DateFnsUtils} >
                        <Grid container justify="space-around">
                            <KeyboardDatePicker
                             className={classes.paper}
                                format="dd/MM/yyyy"
                                margin="normal"
                                id="date-picker-dialog"
                                label="Date"
                                value={selectedDate.checkInDate}
                                onChange={handleCheckInDate}
                                KeyboardButtonProps={{
                                    'aria-label': 'change date',
                                }}
                            />
                        </Grid>
                    </MuiPickersUtilsProvider>
                    <TextField className='mb-3 w-75' id="standard-basic" type='text' name="description" label="Description" required /> <br />
                    <TextField className='mb-3 w-75' id="standard-basic" type='text' name="books" label="Your Desired Volunteer Service" onChange={ handleTaskName} value={work} required /> <br />
                    <button className="btn btn-primary w-75 mb-3" onClick={() => handleRegistration(history.push('/showvolunteerdata'))}>Registration</button>
                </form>
            </div>
        </div>
    );
};

export default VolunteerReg;