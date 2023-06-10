// import './App.css';
// import { useState } from 'react';

// function App() {

// // #1: state 값 바뀌면 화면을 다시 render함

//   const [time, setTime] = useState(1);
//   const handleClick = () => {
//     if(time >= 12)
//       setTime(0 + 1);
//     else
//       setTime(time + 1);
//   }

//   console.log(`updated`);
  
//   return (
//     <div>
//       <span>현재시각:{time}시</span>
//       <button onClick={handleClick}>Update</button>
//     </div>
//   );

// // #2

//   const [names, setNames] = useState([]);
//   const handleUpload = () => {
//     setNames(() => {
//       return [input, ...names];
//     });
//     console.log(names);
//   }
//   const [input, setInput] = useState("");
//   const handleInputChange = (e) => {
//     setInput(e.target.value);
//   }

//   return (
//     <div>
//       <input onChange={handleInputChange} type='text'></input>
//       <button onClick={handleUpload}>Upload</button>
//       {names.map((name, idx) => {
//         return <p key={idx}>{name}</p>
//       })};
//     </div>
//   );
// }

// export default App;
