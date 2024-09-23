import logo from './logo.svg';
import './App.css';
import Dropdown from './Component/DropDown.jsx';
import { useState } from 'react';

function App() {
  const [rows, setRows] = useState([
    {
      "value": 10,
      "disabled": false,
      "sign": "+"
    },
    {
      "value": 20,
      "disabled": false,
      "sign": "+"
    },
    {
      "value": 5,
      "disabled": true,
      "sign": "-"
    }
  ]
  )

  const handleRow = (newRow) => {
    setRows(prevRows => [...prevRows, newRow]);
  };


  const handleTotal = () => {
    const total = rows.length > 0 ? rows.reduce((a, b) => {
      if (b.disabled) {
        return a;
      }
      return b.sign === '+' ? a + b.value : a - b.value;
    }, 0) : 0;

    return total
  }


  const hadnleDelete = (index) => {
    const updatedRows = rows.filter((v, i) => i !== index)
    setRows(updatedRows)
  }

  const handleDisable = (index) => {
    const updateRows = [...rows]
    updateRows[index].disabled = !updateRows[index].disabled
    setRows(updateRows)
  }

  const handleUpdate = (target, value, index) => {
    const updateRows = [...rows]
    if (target === 'sign') {
      updateRows[index].sign = value
    } else {
      updateRows[index].value = Number(value)
    }
    setRows(updateRows)
  }


  return (
    <div className=" w-[80%] m-auto">
      <div>
        <div className='my-5'>
          <h1 className=' text-2xl font-bold'>React calculator</h1>
        </div>

        <div>
          <div>
            <button onClick={() => handleRow({
              value: 10,
              disabled: false,
              sign: "+"
            })} className=' w-32 bg-red-500 text-white py-2 rounded-lg'>ADD ROW</button>
          </div>


          <div className='my-5'>
            <ul>
              {rows.map((item, index) => (
                <li key={index} className=' flex flex-row items-start justify-between'>
                  <div className='w-1/4'>
                    <Dropdown options={["-", "+"]} label={item.sign} onSelect={(e) => handleUpdate('sign', e, index)} />
                  </div>

                  <div className='w-2/4 px-4'>
                    <input placeholder='Enter the Number' type='Number'  name='value' onChange={(e) => handleUpdate(e.target.name, e.target.value, index)} value={item.value} className=' border py-2 w-full rounded-lg px-4 border-gray-500  ' />
                  </div>

                  <div className='w-1/4 flex items-center justify-around'>
                    <button onClick={() => hadnleDelete(index)} className=' w-[45%] bg-red-500 text-white py-2 rounded-lg'>Delete</button>
                    <button onClick={() => handleDisable(index)} className=' w-[45%]  bg-gray-300 text-black py-2 rounded-lg'>{item.disabled ? "Enable" : "Disable"}</button>
                  </div>

                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2>Total : {handleTotal()}</h2>
          </div>

        </div>
      </div>
    </div>
  );
}

export default App;
