import { useState } from 'react'
import './App.css'
import accordionData from './data.js'

function App() {
  const [selected, setSelected] = useState(null)

  function handleSingleSelection(getCurrentId) { 
    console.log(getCurrentId)
    setSelected(selected === getCurrentId ? null : getCurrentId)
  }

  return (

    <div className='min-h-screen w-full bg-gray-900 text-green p-10'>
      <div className='max-w-2xl mx-auto'>
        {accordionData && accordionData.length > 0 ? (
          <div className='flex flex-col gap-1.5'>{accordionData.map((item) => (
            <div className='border-2 rounded-2xl cursor-pointer'>
              <div className='flex justify-between p-4' onClick={() => handleSingleSelection(item.id)}><h3>{item.title}</h3>
                {selected === item.id ? (<span>-</span>) : (<span>+</span>)}
              </div>
              {selected === item.id ? (
                <div className='pb-4 px-4'>{item.content}</div>
              ) : null
              }
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
