// import './App.css';

// function App() {

//   // producer와 consumer로 구분
//   // promise 상태: pending=> fulfilled or rejected

//   // 1. producer (declare promise)

//   const promise = new Promise((resolve, reject)=>{
//   // doing some heavy work (networking, files ...)
//   console.log("doing something heavy work ...");
//   setTimeout(()=>{
//     resolve('success'); // then으로 값을 전달
//     // reject(new Error("no network")) // catch로 값을 전달
//   }, 2000)
// });
  
//   // 2. consumer: then, catch, finally
  
//   promise.then(value=>{
//     console.log(value);
//   }).catch(error =>{
//     console.log(error);
//   }).finally(()=>{
//     console.log("finally");
//   }
//   )
  
//   // 3. promise chaining

//   const fetchNumber = new Promise((resolve, reject)=>{
//     setTimeout(() => { resolve(1) }, 1000);
//   });

//   fetchNumber
//   .then(num => num * 2) // callback 함수 표현시 파라미터 하나이면 () 생략 가능하고 return 줄도 한줄이면 {}와 return 모두 생략 가능
//   .then(num => num * 3)
//   .then((num) => {
//     return new Promise((resolve, reject) =>{
//       setTimeout(()=>{ resolve(num - 1)}, 1000);
//     });
//   })
//   .then(num => console.log(`num:${num}`))


//   return (
//     <>
//     <div>🍗</div>
//     </>
//   )
// }

// export default App;