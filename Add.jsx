import { useState } from "react";


function Add() {
    const [list, setList] = useState('');
    const account = ['Github', 'frontend Mentor', 'Twitter', 'Youtube', 'Twitch','LinkedIn','Youtube','Facebook','twitch','Dev.to','Codewars','Codepen','freeCodeCamp','Gitlab','hashnode','Stack Overflow'];
    
    const handleListChange = (event) => {
        setList(event.target.value);   
}
const ListAccount = account.filter((account) => account.toLowerCase().includes(account.toLowerCase()));

    return(
        <>
        <div className="">
            <div 
        type="text"
        placeholder="Filter fruits"
        value={list}
        onChange={handleListChange}
         className="flex justify-between font-bold text-gray-500 mt-2 ml-2 text-md"><h1>=Links #1</h1><button className="text-start mr-4 font-normal flex text-lg  text-gray-600">Remove</button></div>
                <div className="flex justify-center flex-col "><p className="text-start ml-2  flex text-sm  text-gray-600">Platfrom</p> <input  type="text" placeholder=" e.g Umar" className=" text-indigo-500 border-gray-300 text-md rounded-md  m-2 h-12 border-[1px] hover:border-red-500" />
                <ul>
        {ListAccount.map((list, index) => (
          <li key={index} className=" text-indigo-500 border-gray-300 text-md rounded-md  m-2 h-12 border-[1px] hover:border-red-500">{list}</li>
        ))}
      </ul></div>
                <div className="flex justify-center flex-col "><p className="text-start ml-2  flex text-sm text-gray-600">Link</p> <input type="text" placeholder=" e.g Umar" className=" text-indigo-500 border-gray-300 text-md rounded-md m-2 h-12 border-[1px] hover:border-red-500" /></div>
        </div>

        </>
    );
}
export default Add;
