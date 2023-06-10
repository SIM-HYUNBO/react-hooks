// import './App.css';
// import React, { useState, useEffect } from 'react';

// function App() {
//     // #1

//   const [count, setCount] = useState(1);
//   const handleCountUpdate = () =>{
//     // state 변경시마다 렌더링 됨
//     setCount(count +1);
//   };

//   const [name, setName] = useState('');

//   const handleInputChangeName = (e) => {
//     setName(e.target.value);
//   }

//   // 처음 mounting 될떄와 매번 렌더링 될 때마다 실행됨
//   useEffect(() => {
//       console.log("mounting + 렌더링");
//     }
//   );

//   // 처음 mounting 될떄와 count값이 변경 될때만 실행됨 
//   useEffect(() => {
//         console.log("mounting + count값 변경");
//       }, [count]
//     );

//   // 처음 mounting 될떄와 name값이 변경 될때만 실행됨 
//   useEffect(() => {
//     console.log("mounting + name 값 변경");
//   }, [name]
//   );

//   // 처음 mounting 될떄만 실행됨 
//   useEffect(() => {
//     console.log("mounting only");
//   }, []
//   );

//   return (
//     <div>
//       <button onClick={handleCountUpdate}>Update</button>
//       <span>count:{count}</span>
//       <input type="text" value={name} onChange={handleInputChangeName}></input>
//       <span>{name}</span>
//     </div>
//   )

//   // #2 useEffect clean up

//   const [showTimer, setShowTimer] = useState(false);

//   return (
//     <div>
//       {showTimer && <MyTimer></MyTimer>}
//       <button onClick={ () => setShowTimer(!showTimer)}>toggle timer</button>
//     </div>
//   )

//   // timer component
//   const MyTimer = (props) => {
//     useEffect(() =>
//     {
//       const timer = setInterval(() =>{
//         console.log("타이머 돌아가는 중")
//       }, 1000)
//       // mount 될때만 실행되는 use effect의 인자로 넘어온 콜백함수의 
//       // return 코드에서 정리작업을 하면 됨

//       return () => {
//         clearInterval(timer);
//         console.log("타이머 종료됨")
//       }
//     }, []) // mount 될때만 실행되는 useEffect

//     return (
//     <div>
//       <span>timer를 시작합니다. 콘솔을 보세요.</span>
//     </div>
//     )
//   }
// }

// export default App;
