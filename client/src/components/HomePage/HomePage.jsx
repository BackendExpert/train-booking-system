import React from 'react'
import Icons from '@reacticons/ionicons'

const HomePage = () => {
  return (
    <div className="">
        <div className='lg:py-[4%] py-12 lg:px-16 bg-[url(https://wallpapercave.com/wp/wp12713228.jpg)] bg-center bg-cover lg:h-[80vh] h-screen w-full'>
            <div className="text-white text-center my-12">
                <h1 className="text-3xl font-semibold">Sri Lankan Railways</h1>
            </div>
        </div>
        <div className="bg-white lg:mx-24 mx-8 py-16 px-12 mt-[-100px] rounded shadow-2xl">
            <form>
                <div className="lg:flex">
                    <div className="">
                        <label htmlFor="from" >From</label><br />
                        <select id="countries" class="my-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <option selected>Choose a Start Location</option>
                            <option value="US">United States</option>
                            <option value="CA">Canada</option>
                            <option value="FR">France</option>
                            <option value="DE">Germany</option>
                        </select>
                    </div>
                    <div className="">

                    </div>
                </div>
            </form>
        </div>
    </div>
  )
}

export default HomePage