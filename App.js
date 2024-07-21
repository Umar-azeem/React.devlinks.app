import  pic1  from './img/pic1.svg'
import logo   from './img/logo.svg'
import profile   from './img/profile.svg'
import './App.css';

function App() {

  
  return (
    <section className='w-screen h-auto bg-slate-50'>
      <div className=''> 
        <div className='flex justify-center'>
          <nav className='w-full h-aut0 m-8 bg-white bg-inherit rounded-lg flex justify-between'>
            <div className='flex justify-center m-4'><img src={logo} className='w-36 h-14'></img></div>
            <div className='flex justify-between px-6  text-center m-4 cursor-pointer'><button className='bg-violet-100 text-indigo-500 text-lg flex text-center py-2 px-3 justify-center font-medium rounded-md w-32 h-12'><svg className='px-2 w-8 py-2' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4">
  <path stroke-linecap="round" stroke-linejoin="round" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" />
</svg>
Links</button><button className='hover:bg-violet-100 text-zinc-500 text-lg text-center py-3 px-2 flex  font-medium rounded-md w-48 ml-8 h-14'><img src={profile} className='mt-1 px-4' ></img>Profile Details</button></div>
            <div className='flex justify-center m-4'><button className=' hover:bg-violet-100 text-indigo-500 text-lg font-medium rounded-md w-36 ml-8 h-12 border-[1px] border-indigo-500'>perview</button></div>
          </nav>
        </div>
      </div>
      <div className='flex justify-center'>
        <div className='w-2/5 h-auto bg-white m-4'>
        <div className='w-80 h-auto m-24 rounded-[10%] border-[1px] border-zinc-400 flex text-center flex-col justify-center'>
          <div className='border-[1px] m-4 rounded-[10%] border-zinc-400 flex justify-center'>
            <div> 
            <div className='w-28 h-6 ml-16 -mt-1 border-b-[1px]  border-r-[1px]  border-l-[1px] border-zinc-400 bg-white rounded-lg'></div>
      
          <div className='w-28 h-28 m-16  flex text-center justify-center bg-zinc-100 rounded-full'></div>
          <div className='w-52 h-4 mt-4 bg-zinc-100 rounded-lg'></div>
          <div className='w-28 h-2  mt-6 bg-zinc-100 rounded-lg'></div>
          <div className='w-52 h-14 mt-6 bg-zinc-100 rounded-lg'></div>
          <div className='w-52 h-14 mt-6 bg-zinc-100 rounded-lg'></div>
          <div className='w-52 h-14 mt-6 bg-zinc-100 rounded-lg'></div>
          <div className='w-52 h-14 mt-6 mb-8 bg-zinc-100 rounded-lg'></div>   
            </div>
            </div>

        </div>
        </div>
        <div className='w-2/4 h-auto bg-white m-4'>
        <div className='flex flex-col justify-center '>
          <h1 className='text-4xl m-8 font-bold'>Customize your links</h1>
          <p className='text-gray-500 ml-8 text-lg '>Add/edit/remove links below and then share all your profiles with the world</p>
          <button className='hover:bg-violet-100 text-indigo-500 text-lg mt-12 font-medium rounded-md  ml-4 mr-4 h-12 border-[1px] border-indigo-500'> + Add new link</button>
        </div>
        <div className='w-[90%]  h-auto rounded-lg bg-gray-50 m-12 flex flex-col justify-center'> 
        <div className='w-full h-auto flex justify-center'>
        <img src={pic1}  className='w-72 h-72'></img>
        </div>
        <div> 
         <h1  className='text-4xl text-center font-bold text-gray-900'>Let's get you started</h1>
         <p className='text-center text-sm m-8'>Use the “Add new link” button to get started. Once you have more <br></br> than one link, you can reorder and edit them. We’re here to help <br></br> you share your profiles with everyone!</p>
        </div>
        </div>
        <div> 
          <hr></hr>
          <div className='flex justify-end mt-8 mr-6'>
          <button className='text-white bg-violet-700 text-lg font-medium rounded-md w-28  h-12 border-[1px] border-indigo-500 hover:border-indigo-100 hover:bg-violet-300'>Save</button>
          </div>
       </div>
      </div>
      </div>

    </section>
  );
}

export default App;
