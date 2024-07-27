import { useState } from "react";

function Drop({ children, selected = "Github" }) {
  const [showlist, setShowList] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setShowList(!showlist)}
        id="dropdownHoverButton"
        className="text-black w-full justify-between  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        type="button"
      >
        {selected}
        <svg
          className="w-2.5 h-2.5 ms-3"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m1 1 4 4 4-4"
          />
        </svg>
      </button>
      <div
        id="dropdownHover"
        className={`z-10 ${
          showlist ? "" : "hidden"
        } bg-white absolute divide-y divide-gray-100 rounded-lg shadow w-full dark:bg-gray-700`}
      >
        {showlist && children}
        {/* //   <ul
        //     className="py-2 text-sm text-gray-700 dark:text-gray-200"
        //     aria-labelledby="dropdownHoverButton"
        //   >
        //     <li>
        //       <a
        //         href="#"
        //         className=" text-indigo-500 border-gray-300 text-md rounded-md text-start p-2 m-2 h-12 border-[1px] hover:border-red-500  block "
        //       >
        //         Dashboard
        //       </a>
        //     </li>
        //   </ul> */}
      </div>
    </div>
  );
}

export default Drop;
