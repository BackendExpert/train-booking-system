import React from 'react'
import MyIcons from '@reacticons/ionicons'

const HomePage = () => {
  return (
    <div className="">
        <div className='lg:py-[4%] py-12 lg:px-16 bg-[url(https://wallpapercave.com/wp/wp12713228.jpg)] bg-center bg-cover lg:h-[80vh] h-screen w-full'>
            <div className="text-white text-center my-12">
                <h1 className="text-3xl font-semibold">Sri Lankan Railways</h1>
            </div>
        </div>
        <div className="bg-white lg:mx-24 mx-8 py-16 px-12 lg:mt-[-100px] mt-[-280px] rounded shadow-2xl lg:mb-40 mb-20">
            <form>
                <div className="lg:flex">
                    <div className="w-full">
                        <label htmlFor="from" >From</label><br />
                        <select required className="my-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <option selected>Choose a Start Location</option>
                            <option value="US">United States</option>
                            <option value="CA">Canada</option>
                            <option value="FR">France</option>
                            <option value="DE">Germany</option>
                        </select>
                    </div>
                    <div className="mx-12 my-4">
                        <span className='lg:visible invisible'><MyIcons name='arrow-forward' size='large'></MyIcons></span>
                        <span className='lg:invisible visible'><MyIcons name='arrow-down' size='large'></MyIcons></span>
                    </div>
                    <div className="w-full">
                        <label htmlFor="from" >To</label><br />
                        <select required className="my-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <option selected>Choose a Destination</option>
                            <option value="US">United States</option>
                            <option value="CA">Canada</option>
                            <option value="FR">France</option>
                            <option value="DE">Germany</option>
                        </select>
                    </div>
                    <div className="mx-12 my-4">
                        <MyIcons name='calendar' size='large'></MyIcons>
                    </div>
                    <div className="w-full">
                        <label htmlFor="from" >Travel Date</label><br />
                        <input type="date" name="" id="" required className='my-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'/>
                    </div>
                    <div className="border-l-4 border-gray-300 mx-9"></div>
                    <div className="">
                        <button type="submit" className='flex bg-blue-500 py-4 px-8 my-2 text-white rounded duration-500 hover:bg-blue-700 hover:shadow-2xl'> 
                            <MyIcons name='search' size='large'></MyIcons>
                            <p className="mt-1 pl-2">SearchTrains</p>
                        </button>
                    </div>
                </div>
            </form>
        </div>
        <div className="my-12 text-center">
            <h1 className="text-4xl font-semibold text-gray-500">The Railways</h1>
            <p className="lg:mx-36 mx-8 my-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium exercitationem quis cupiditate veniam eligendi ut magnam expedita, similique consectetur, amet ratione sequi eos voluptatibus repellat cumque. Maiores, deserunt cumque. Laboriosam?
            </p>
        </div>
        <div className="bg-  bg-cover bg-no-repeat">
            <div className="lg:py-[4%] py-12 lg:px-16 bg-[gradient-to-r from-blue-500 to-green-500, url(https://wallpapercave.com/wp/wp12713228.jpg)] bg-center bg-cover h-auto w-full">
                <h1 className="text-4xl font-semibold text-gray-500">our services</h1>
            </div>
        </div>

    </div>
  )
}

export default HomePage