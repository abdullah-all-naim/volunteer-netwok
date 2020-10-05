import React from 'react';
import { useHistory } from 'react-router-dom';
export const taskList = [
    {
        id: 0,
        name: 'Foster a shelter animal',
        pic: 'https://i.ibb.co/GCp71f9/animal-Shelter.png'
    },
    {
        id: 1,
        name: 'Babysit during PTA meetings',
        pic: 'https://i.ibb.co/M69V11C/babySit.png'
    },
    {
        id: 2,
        name: 'Build bird house for your neighbors',
        pic: 'https://i.ibb.co/wJ7b8kQ/bird-House.png'
    },
    {
        id: 3,
        name: 'Child Support',
        pic: 'https://i.ibb.co/Bq3psrT/child-Support.png'
    },
    {
        id: 4,
        name: 'Clean Water for children',
        pic: 'https://i.ibb.co/TDX7k3F/clean-Water.png'
    },
    {
        id: 5,
        name: 'Clean up your local park',
        pic: 'https://i.ibb.co/1RxJrNK/clearn-Park.png'
    },
    {
        id: 6,
        name: 'Host a Clothing Swap',
        pic: 'https://i.ibb.co/CWm8s20/cloth-Swap.png'
    },
    {
        id: 7,
        name: 'Give a seminar on driving safety',
        pic: 'https://i.ibb.co/qjPqSBx/drive-Safety.png'
    },

    {
        id: 8,
        name: 'Teach people how to register to vote',
        pic: 'https://i.ibb.co/ZYqSb7f/vote-Register.png'
    },
    {
        id: 9,
        name: 'Food Charity',
        pic: 'https://i.ibb.co/mb9dLRx/food-Charity.png'
    },
    {
        id: 10,
        name: 'Good Education',
        pic: 'https://i.ibb.co/r747B8J/good-Education.png'
    },
    {
        id: 11,
        name: 'Give IT help to local adults',
        pic: 'https://i.ibb.co/TTX9kpp/ITHelp.png'
    },
    {
        id: 12,
        name: 'Organize books at the library',
        pic: 'https://i.ibb.co/SvFwkqp/library-Books.png'
    },
    {
        id: 13,
        name: 'Give free music lessons',
        pic: 'https://i.ibb.co/KXTzWDZ/music-Lessons.png'
    },
    {
        id: 14,
        name: 'New Books for children',
        pic: 'https://i.ibb.co/PNFvPQd/newBooks.png'
    },
    {
        id: 15,
        name: 'Refuse Shelter',
        pic: 'https://i.ibb.co/NsB6nkw/refuse-Shelter.png'
    },
    {
        id: 16,
        name: 'Host a river clean-up',
        pic: 'https://i.ibb.co/SPgvP65/river-Clean.png'
    },
    {
        id: 17,
        name: 'Collect school suppilies',
        pic: 'https://i.ibb.co/nzHH52W/school-Suffiles.png'
    },
    {
        id: 18,
        name: 'Host a study Group',
        pic: 'https://i.ibb.co/5Y63BYT/study-Group.png'
    },
    {
        id: 19,
        name: 'Collect stuffed animals',
        pic: 'https://i.ibb.co/PMsY8Pf/stuffed-Animals.png'
    },

    {
        id: 20,
        name: 'Extra Volunteer',
        pic: 'https://i.ibb.co/vcdswDS/extra-Volunteer.png'
    },
]

const TaskList = () => {
    const history = useHistory();
    const handleClick = (work) => {
        history.push(`/volunteerreg/${work}`)
    }

    return (
        <div className="d-flex flex-wrap justify-content-center" id='task'>
            {taskList.map((task) =>
                <div className='text-center' style={{ cursor: 'pointer', margin: '20px' }} onClick={() => handleClick(task.name)} >
                    <img style={{ width: '200px', marginRight: '20px' }} src={`${task.pic}`} alt="" />
                    <p className='bg-primary p-2 font-weight-bold'  style={{ borderRadius: '10px', width: '202px', height: '60px'}}>{task.name}</p>
                </div>
            )}
        </div>

    )
};

export default TaskList;