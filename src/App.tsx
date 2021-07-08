import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const menu = [
    { id: '1', name: 'First' },
    { id: '2', name: 'Second' },
    { id: '3', name: 'Third' },
    { id: '4', name: 'Fourth' },
  ];

  return (
    <div className="bg-yellow-400 h-screen flex items-center justify-center">
      <ul className="flex rounded overflow-hidden">
        {menu.map((item, index) => {
          const rightBorder =
            selectedIndex !== 0 && index === selectedIndex - 1
              ? 'rounded-br-3xl'
              : '';

          const leftBorder =
            selectedIndex !== menu.length - 1 && index === selectedIndex + 1
              ? 'rounded-bl-3xl'
              : '';

          const selectedClasses =
            index === selectedIndex
              ? ' bg-white rounded-t-lg'
              : 'bg-yellow-200';
          return (
            <li
              key={item.id}
              className={`bg-white`}
              onClick={() => {
                setSelectedIndex(index);
              }}
            >
              <span
                className={`flex bg-yellow-200 h-16
                ${rightBorder}
                ${leftBorder}
                `}
              >
                <span
                  className={`flex items-center justify-center px-6
                ${rightBorder}
                ${selectedClasses}
                ${leftBorder}
                `}
                >
                  {item.name}
                </span>
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
