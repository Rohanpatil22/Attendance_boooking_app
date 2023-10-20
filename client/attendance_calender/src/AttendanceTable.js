import React from 'react'

function AttendanceTable(props) {

    console.log(props.Info);
  return (
  <>
 
  {
              props.Info &&
              <div className="relative w-3/4 shadow-md sm:rounded-lg m-auto  mt-40">
                  <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 text-2xl h-28">
                      <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                          <tr className="bg-cyan-950 text-white">
                              <th scope="col" className="px-6 py-3 text-2xl">
                                  SR No
                              </th>
                              <th scope="col" className="px-6 py-3 text-2xl">
                                  Date
                              </th>
                              <th scope="col" className="px-6 py-3 text-2xl">
                                  Status
                              </th>
                          </tr>
                      </thead>
                      <tbody className='h-1/5'>
                          {props.Info.map((item, index) => (


                              <tr key={item._id} className="bg-white border-b dark:bg-gray-900 dark:border-gray-700  text-black">
                                  <td scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white text-xl text-black text-blackl">
                                      {index + 1}
                                  </td>
                                  <td className="px-6 py-4 text-xl  text-black">
                                      {item.date}
                                  </td>
                                  <td className="px-6 py-4 text-xl  text-black">
                                      {item.status}
                                  </td>

                              </tr>

                          ))

                          }

                      </tbody>
                  </table>
              </div>
    }
  </>
  )
}

export default AttendanceTable