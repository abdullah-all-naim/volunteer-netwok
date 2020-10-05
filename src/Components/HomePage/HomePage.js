import React from 'react';
import Navigation from '../Navigation/Navigation';
import TaskList from '../TaskList/TaskList';

const HomePage = () => {
    return (
        <div>
            <Navigation></Navigation>
            <h2 className='text-center font-weight-bold mt-5'> I GROW BY HELPING PEOPLE IN NEED.</h2>
            <div className='container'>
                <div className='my-5 w-100 d-flex justify-content-center'>
                    <form class="form-inline">
                        <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                        <button class="btn btn-outline-success my-2" type="submit">Search</button>
                    </form>
                </div>
                <TaskList></TaskList>
            </div>
        </div>
    );
};

export default HomePage;