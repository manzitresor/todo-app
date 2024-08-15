

export default function TodoBanner() {
  return (
    <div>
      <h1 className="text-6xl text-gray-200 font-bold text-center my-4 bg-green-950 pb-4">TODOS APP</h1>
      <ul className="flex text-xl justify-center items-center gap-1">
        <li className="bg-green-800 text-white w-40 justify-center h-10 flex items-center cursor-pointer hover:bg-green-600 rounded-lg">Today</li>
        <li className="bg-green-800 text-white w-40 justify-center h-10 flex items-center cursor-pointer hover:bg-green-600 rounded-lg">Pending</li>
        <li className="bg-green-800 text-white w-40 justify-center h-10 flex items-center cursor-pointer hover:bg-green-600 rounded-lg">Completed</li>
      </ul>
    </div>
  )
}
