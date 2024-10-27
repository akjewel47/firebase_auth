import LeftSideImg1 from '../../../../assets/1.png'
import LeftSideImg2 from '../../../../assets/2.png'
import LeftSideImg3 from '../../../../assets/3.png'
import { FaCalendarWeek } from "react-icons/fa";
import moment from 'moment';
import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
const LeftSideNav = () => {
    const [categories, setCetegories] = useState([]);
    useEffect(() => {
        fetch('categories.json')
        .then(res => res.json())
        .then(data => setCetegories(data))
    }, [])
    return (
        <div className="space-y-5">
            <h2 className="text-2xl">All Category {categories.length}</h2>
            <div className=''>
                {
                    categories.map((category) => <NavLink className='block ml-4 mb-3'>{category.name}</NavLink>)
                }
            </div>

            <div>
                <div className='space-y-5'>
                    <img src={LeftSideImg1} alt="" />
                    <h2 className='text-lg font-bold p-2'>Bayern Slams Authorities Over Flight Delay to Club World Cup</h2>
                    <div className='flex gap-5 p-2'>
                        <h2 className='font-bold'>Sports</h2>
                       <div className='flex justify-center gap-3'>
                       <FaCalendarWeek></FaCalendarWeek>
                       {
                        <p className=''>{moment().format(" MMMM D, YYYY")}</p>
                       }
                       </div>

                    </div>
                </div>
                <div className='space-y-5'>
                    <img src={LeftSideImg2} alt="" />
                    <h2 className='text-lg font-bold p-2'>Bayern Slams Authorities Over Flight Delay to Club World Cup</h2>
                    <div className='flex gap-5 p-2'>
                        <h2 className='font-bold'>Sports</h2>
                       <div className='flex justify-center gap-3'>
                       <FaCalendarWeek></FaCalendarWeek>
                       {
                        <p className=''>{moment().format(" MMMM D, YYYY")}</p>
                       }
                       </div>

                    </div>
                </div>
                <div className='space-y-5'>
                    <img src={LeftSideImg3} alt="" />
                    <h2 className='text-lg font-bold p-2'>Bayern Slams Authorities Over Flight Delay to Club World Cup</h2>
                    <div className='flex gap-5 p-2'>
                        <h2 className='font-bold'>Sports</h2>
                       <div className='flex justify-center gap-3'>
                       <FaCalendarWeek></FaCalendarWeek>
                       {
                        <p className=''>{moment().format(" MMMM D, YYYY")}</p>
                       }
                       </div>

                    </div>
                </div>
                
            </div>
        </div>
    );
};

export default LeftSideNav;

{/* <h2 className="font-bold text-center p-3 rounded-lg bg-gray-300">National News</h2>
<p className="pl-14">Breaking News</p>
<p className="pl-14">Regular News</p>
<p className="pl-14">International News</p>
<p className="pl-14">Sports</p>
<p className="pl-14">Entertainment</p>
<p className="pl-14">Culture</p>
<p className="pl-14">Arts</p>
<p className="pl-14">All News</p> */}