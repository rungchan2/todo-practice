import React, { useState } from 'react'
import "../App.css";


export default function Interfaces() {

    const [count, setCount] = useState(0);

    const handleClick = () => {
        setCount(prev => prev + 1);
        
        const plusElement = document.querySelector('.count-plus-text');
        plusElement.innerHTML = "+ 1";
        plusElement.style.color = "#8bdc00";
    
        
        // 애니메이션을 재시작하기 위한 코드
        if (plusElement) {
          plusElement.classList.remove('animate');
          void plusElement.offsetWidth;
          plusElement.classList.add('animate');
        }
      };
    
      const handleDecrease = () => {
        setCount(prev => prev - 1);
    
    
        const minusElement = document.querySelector(".count-plus-text");
        minusElement.innerHTML = "- 1";
        minusElement.style.color = "#ff0000";
    
        if (minusElement) {
          minusElement.classList.remove("animate");
          void minusElement.offsetWidth;
          minusElement.classList.add("animate");
        }
      };
  return (
    <div style={{backgroundColor: "", width: "fit-content", margin: "0 auto"}}>
        <h1>Hello World</h1>
      <br />
      <div className="count-container">
        <p className="count">Count: {count}</p>
        <p className="count-plus-text">+ 1</p>
      </div>

      <div className="btn-container">
        <button className="btn" onClick={handleDecrease}>
          Decrease
        </button>
        <button className="btn" onClick={handleClick}>
          Click me
        </button>
      </div>
    </div>
  )
}
