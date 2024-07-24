function Add(){
    return(
        <>
        <div className="">
            <div className="flex justify-between font-bold text-gray-500 mt-2 ml-2 text-md"><h1>=Links #1</h1><p className="text-start mr-4 font-normal flex text-lg  text-gray-600">Remove</p></div>
                <div className="flex justify-center flex-col "><p className="text-start ml-2  flex text-sm  text-gray-600">Platfrom</p> <input type="text" placeholder=" e.g Umar" className=" text-indigo-500 border-gray-300 text-md rounded-md  m-2 h-12 border-[1px] hover:border-red-500" /></div>
                <div className="flex justify-center flex-col "><p className="text-start ml-2  flex text-sm text-gray-600">Link</p> <input type="text" placeholder=" e.g Umar" className=" text-indigo-500 border-gray-300 text-md rounded-md m-2 h-12 border-[1px] hover:border-red-500" /></div>
        </div>

        </>
    );
}
export default Add;