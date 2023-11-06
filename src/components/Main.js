import React from 'react'
// import Bg from '../asset/Group (1).png'
export default function Main() {
  const Facts = [
    'Was first released in 2013',
    'Was originally created by Jordan Walke',
    'Has well over 100K stars on GitHub',
    'Is maintained by Facebook',
    'Powers thousands of enterprise apps, including mobile apps',
  ]

  return (
    <main className="py-[57px] px-[27px] bg-image">
      <h1 className="text-[40px] text-white font-bold mt-0">
        Fun facts about React
      </h1>
      <ul className="list-disc pl-[50px] mt-8 max-w-[400px] text-white">
        {Facts.map((fact, index) => {
          return (
            <li
              key={index}
              className="text-white text-base font-normal py-[10px] custom-list-marker px-2"
            >
              {fact}
            </li>
          )
        })}
      </ul>
    </main>
  )
}
