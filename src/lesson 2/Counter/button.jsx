const App = () => {
  const handleClick = () => {
    alert("I'm a button!");
  };
  //починаючи з префікса on, після чого йде назва події.
  //   Наприклад: onClick, onSubmit, onChange, і так далі.
  return <button onClick={handleClick}>Click me!</button>;
};

export default App;

// /////////////////////////////////////////////////////


// const CustomButton = ({ message, children }) => {
//     return (
//       <button onClick={() => alert(message)}>
//         {children}
//       </button>
//     );
//   };

//   const App2 = () => {
//     return (
//       <>
//         <CustomButton message="Playing music!">
//           Play some music
//         </CustomButton>
//         <CustomButton message="Uploading your data!">
//           Upload data
//         </CustomButton>
//       </>
//     );
//   }

//   export default App2 ;

// /////////////////////////////////////////////////////
// Коли ви викликаєте useState, ви повідомляєте React, 
// що бажаєте, щоб цей компонент запам'ятовував щось. 
import { useState } from "react";

const App3 = () => {
  // let clicks = 0;
  const [clicks, setClicks] = useState(0);

  const handleClick = () => {
    // clicks = clicks + 1;
    setClicks(clicks + 1);
  };

  return <button onClick={handleClick}>Current: {clicks}</button>;
};

  export default App3 ;

//   Компонент рендериться вперше. Тому що ми передали 0 в useState
// як початкове значення для clicks, нам повертається [0, setClicks]. 
// React запам'ятовує, що 0 - це останнє значення стану.
// Оновлюємо стан. Коли користувач натискає кнопку, 
// викликається setClicks(clicks + 1). На даний момент clicks - це 0, 
// отже setClicks(clicks + 1) отримується setClicks(1). 
// Це повідомляє React, що тепер clicks - це 1, і викликає ще один рендеринг.

const ClickCounter = () => {
	return <button onClick={handleClick}>Current: {clicks}</button>
};

const App = () => {
	const [clicks, setClicks] = useState(0);

	const handleClick = () => {
    setClicks(clicks + 1);
  };

  return (
    <>
			<ClickCounter />
			<ClickCounter />
    </>
  );
};

// ClickCounter отримує функцію onUpdate (ім'я пропа),
// яка викликається під час події onClick
const ClickCounter = ({ value, onUpdate }) => {
	return <button onClick={onUpdate}>Current: {value}</button>
};

const App = () => {
	const [clicks, setClicks] = useState(0);

	// Функція, яку будемо передавати в ClickCounter
	// для виклику під час кліку
	const handleClick = () => {
    setClicks(clicks + 1);
  };

  return (
    <>
			<ClickCounter value={clicks} onUpdate={handleClick} />
			<ClickCounter value={clicks} onUpdate={handleClick} />
    </>
  );
};


////////////////////////////////////////////////////////

import { useState } from 'react';

export const Counter = () => {


    const [todos, setTodos] = useState(() => {
      const savedData = JSON.parse(localStorage.getItem('todos'));
      if (savedData?.length) {
        return savedData;
      }
      return [];
    });

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

    const [counter, setCounter] = useState(0);
    // prev — це попереднє значення counter
    const [step ,setStep] = useState(1)

    const handleClickMinus = () => {
        setStep(prev => prev - step) 
    }

    const handleClickPlus = () => {
        setStep(prev => prev + step) 
    }

    const handleReset = () => {
        setCounter(0);
        setStep(1)
    }

        return (
            <div className={s.flexContainer}>
              <div className={s.wrapper}>
                <h1>{counter}</h1>
                <input type='number' value={step} onChange={e => setStep(+e.target.value)} />
                <div className={s.flex}>
                  <button onClick={handleClickMinus} className='btn'>
                    minus
                  </button>
                  <button onClick={handleReset} className='btn'>
                    reset
                  </button>
                  <button onClick={handleClickPlus} className='btn'>
                    plus
                  </button>
                </div>
              </div>
            </div>
    )
}

////////////////////////////////////////////////////////////////
