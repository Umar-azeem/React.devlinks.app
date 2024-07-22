
function Profiles() {
    return ( 
        <>
         <div className='w-2/4 h-auto bg-white m-4'>
        <div className='flex flex-col justify-center '>
          <h1 className='text-4xl m-8 font-bold'>Profile Details</h1>
          <p className='text-gray-500 ml-8 text-lg '>Add your details to create a personal touch to your profile.</p>
        </div>
        <div className='w-[90%]  h-auto rounded-lg bg-gray-50 m-12 flex flex-col justify-center'> 
        <div className='w-full h-auto flex justify-center'>
       
        </div>
        <div className="flex"> 
            <div className="flex items-center justify-center">
            <h1  className='text-center text-lg m-4'>Profile picture</h1>
            </div>
         <div className="bg-violet-100 text-indigo-500 text-lg  font-medium rounded-md m-4 w-44 h-44 border-[1px]"></div>
        <div className="flex items-center justify-center">
         <p className=' text-sm'>Image must be below 1024x1024px.<br></br> Use PNG or JPG format.</p>
         </div>
        </div>
        </div>
        <div className="w-[90%] m-12 h-auto rounded-lg bg-gray-50 flex flex-col justify-center">
        <div className="flex justify-center m-4 flex-col">
        <div className="flex mt-4"><p className="text-center  flex justify-center items-center">First name*</p> <input type="text" placeholder=" e.g Umar" className=" text-indigo-500 border-gray-300 text-md rounded-md w-96 ml-16 h-12 border-[1px] hover:border-red-500" /></div>
        <div className="flex mt-4"><p className="text-center flex justify-center items-center">Last name*</p> <input type="text" placeholder=" e.g Azeem" className=" text-indigo-500 border-gray-300 text-md rounded-md w-96 ml-16 h-12 border-[1px] hover:border-red-500" /></div>
        <div className="flex mt-4"><p className="text-center flex justify-center items-center">Email</p> <input type="text" placeholder=" e.g email@example.com" className=" text-indigo-500 text-md  rounded-md w-96 ml-[104px] h-12 border-[1px] border-gray-300 hover:shadow-lg hover:border-indigo-500" /></div>

        </div>
        </div>
        <div> 
          <hr></hr>
          <div className='flex justify-end mt-8 mr-6'>
          <button className='text-white bg-violet-700 text-lg font-medium rounded-md w-28  h-12 border-[1px] border-indigo-500 hover:border-indigo-100 hover:bg-violet-300'>Save</button>
          </div>
       </div>
      </div>
        </>
    );
} 
export default Profiles;