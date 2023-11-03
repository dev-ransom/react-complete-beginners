import React from 'react'

export default function MainContent() {
  return (
    <div className="flex-grow bg-slate-800">
      <h1 className="text-4xl p-10">Reasons I'm excited to start learning React</h1>
      <ol className="list-decimal px-10 ">
        <li className="m-2">
          it's a popular library, so I would be able to fit in with the cool kids
        </li>
        <li className="m-2">
          I'm more likely to get a job as a developer if I know React
        </li>
      </ol>
    </div>
  );
}

