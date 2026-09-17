import { useState } from 'react'
import './App.css'
import accordionData from './data.js'

function App() {
  const [selected, setSelected] = useState(null)
  const [enableMultiSelection, setEnableMultiSelection] = useState(false)
  const [multiple, setMultiple] = useState([])

  function handleSingleSelection(getCurrentId) {
    // console.log(getCurrentId)
    setSelected(selected === getCurrentId ? null : getCurrentId)
  }

  function handleMultipleSelection(getCurrentId) {
    let cpyMultiple = [...multiple]
    const findIndexOfCurrentId = cpyMultiple.indexOf(getCurrentId)

    // console.log(findIndexOfCurrentId)
    if(findIndexOfCurrentId === -1)cpyMultiple.push(getCurrentId)
      else cpyMultiple.splice(findIndexOfCurrentId, 1)

    setMultiple(cpyMultiple)
  }

  return (

    <div className='min-h-screen w-full bg-gray-500 text-white p-10'>
      <div className='max-w-2xl mx-auto flex flex-col items-center gap-6 '>
        <div>
          <button
            className={`text-center border-2 rounded-2xl p-5 cursor-pointer transition-colors ${enableMultiSelection ? 'bg-gray-600' : ''}`}
            onClick={() => setEnableMultiSelection(!enableMultiSelection)}
          >
            Multiple Selection
          </button>
        </div>
        {accordionData && accordionData.length > 0 ? (
          <div className='flex flex-col gap-1.5'>{accordionData.map((item) => (
            <div className='border-2 rounded-2xl cursor-pointer'>
              <div onClick={
                enableMultiSelection ? () => handleMultipleSelection(item.id) : () => handleSingleSelection(item.id)
              }>
                <div className='flex justify-between p-4'>
                  <h3>{item.title}</h3>
                  {selected === item.id ? (<span>-</span>) : (<span>+</span>)}
                </div>
                {
                  enableMultiSelection ? multiple.indexOf(item.id) !== -1 &&
                  (<div className='pb-4 px-4'>{item.content}</div>)
                  : selected === item.id && (
                  <div className='pb-4 px-4'>{item.content}</div>
                ) 
                }
                {/* {selected === item.id ? (
                  <div className='pb-4 px-4'>{item.content}</div>
                ) : null
                } */}
              </div>

            </div>
          ))}
          </div>
        ) : (<div>no data found </div>
        )}
      </div>
    </div>

  )
}

export default App
