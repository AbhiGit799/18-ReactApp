// import { createContext, useContext, useReducer } from "react";

// const MyContext = createContext();

// const iState = {
//   name: "Ajeet",
// };

// const reducer = (state, action) => {
//   switch (action.type) {
//     case "changeName":
//       return {
//         name: action.payload.name,
//       };

//     case "setName":
//       return {
//         // name:action.payload.name

//         name: `Mr. ${action.payload.name}`,
//       };

//     default:
//       return state;
//   }
// };

// const Student3 = () => {
//   const contextData = useContext(MyContext);

//   return (
//     <>
//       <h1> Student 3 </h1>

//       <h2>Student Name is {contextData.name}</h2>

//       <button
//         type="button"
//         onClick={() =>
//           contextData.dispatchFunc({
//             type: "changeName",
//             payload: { name: "Chandan Singh" },
//           })
//         }
//       >
//         Change Name
//       </button>

//       <button
//         type="button"
//         onClick={() =>
//           contextData.dispatchFunc({
//             type: "setName",
//             payload: { name: "Pawan Singh" },
//           })
//         }
//       >
//         Set Name
//       </button>
//     </>
//   );
// };

// const Student2 = () => {
//   const contextData = useContext(MyContext);

//   return (
//     <>
//       <h1> Student 2</h1>
//       <h2>Student Name is {contextData.name}</h2>

//       <button
//         type="button"
//         onClick={() =>
//           contextData.dispatchFunc({
//             type: "changeName",
//             payload: { name: "Chandan Singh" },
//           })
//         }
//       >
//         Change Name
//       </button>

//       <button
//         type="button"
//         onClick={() =>
//           contextData.dispatchFunc({
//             type: "setName",
//             payload: { name: "Pawan Singh" },
//           })
//         }
//       >
//         Set Name
//       </button>

//       <Student3 />
//     </>
//   );
// };

// const Student = () => {
//   const contextData = useContext(MyContext);

//   return (
//     <>
//       <h1> Student 2</h1>
//       <h2>Student Name is {contextData.name}</h2>

//       <button
//         type="button"
//         onClick={() =>
//           contextData.dispatchFunc({
//             type: "changeName",
//             payload: { name: "Chandan Singh" },
//           })
//         }
//       >
//         Change Name
//       </button>

//       <button
//         type="button"
//         onClick={() =>
//           contextData.dispatchFunc({
//             type: "setName",
//             payload: { name: "Pawan Singh" },
//           })
//         }
//       >
//         Set Name
//       </button>

//       <Student2 />
//     </>
//   );
// };

// export function App() {
//   const [data, dispatch] = useReducer(reducer, iState);

//   return (
//     <>
//       <MyContext.Provider value={{ name: data.name, dispatchFunc: dispatch }}>
//         <Student />
//       </MyContext.Provider>
//     </>
//   );
// }

// import React, { Component } from "react";

// export class App extends Component {

//     submitHandler = (e) =>{
//      e.preventDefault(); //SyntheticBaseEvent
//     //  console.log(e);
//     //  console.log("Submitted");

//     // console.log(e.target[0].value);
//     // console.log(e.target[1].value);

//     console.log(e.target[0].name,e.target[0].value);
//     console.log(e.target[1].name,e.target[1].value);
//     console.log(e.target[2].name,e.target[2].value);

//     }

//     render() {
//     return <>

//     <form onSubmit={this.submitHandler}>

//     <h1> Uncontrolled compoent </h1>

//      Name: <input name="txtName" type='text'/>
//      <br/>
//      Email: <input name="txtEmail" type='text'/>
//      <br/>
//      Age: <input name="txtAge" type='text'/>
//      <br/>
//      <button type="submit">Submit</button>

//     </form>

//     </>;
//   }
// }

// import React, { Component, createRef} from "react";

// export class App extends Component {

//     constructor()
//     {
//         this.inputRef = createRef()
//     }

//     submitHandler = (e) =>{
//      e.preventDefault(); //SyntheticBaseEvent
//     //  console.log(e);
//     //  console.log("Submitted");

//     // console.log(e.target[0].value);
//     // console.log(e.target[1].value);

//     console.log(e.target[0].name,e.target[0].value);
//     console.log(e.target[1].name,e.target[1].value);
//     console.log(e.target[2].name,e.target[2].value);

//     }

//     render() {
//     return <>

//     <form onSubmit={this.submitHandler}>

//     <h1> Uncontrolled compoent </h1>

//      Name: <input name="txtName" type='text' ref={this.inputRef}/>
//      <br/>
//      Email: <input name="txtEmail" type='text' ref={this.inputRef}/>
//      <br/>
//      Age: <input name="txtAge" type='text' ref={this.inputRef}/>
//      <br/>
//      <button type="submit">Submit</button>

//     </form>

//     </>;
//   }
// }

// Controlled Components /Forms used in Industry

// import React, { Component } from 'react'

// export class App extends Component {

//     constructor()
//     {
//         super();
//         this.state={
//             name:""
//         }
//     }

//     submitHandler=(e)=>{

//        e.preventDefault();
//        console.log(this.state.name);
//     }

//     changeHandler=(e)=>{
//      this.setState({
//         name: e.target.value
//      })
//     }

//     render() {
//     return (
//         <>

//         <form onSubmit={this.submitHandler}>

//             <h1>Controlled Component</h1>

//             Name: <input type="text" value={this.state.name} onChange={this.changeHandler}/>

//             <button type='submit'>Submit</button>
//         </form>

//         </>
//     )
//   }
// }

// import React, { Component } from 'react'

// export class App extends Component {

//     constructor()
//     {
//         super();
//         this.state={
//             username:"",
//             password:""
//         }
//     }

//     submitHandler=(e)=>{

//        e.preventDefault();
//        console.log(this.state);
//     }

//     changeHandler=(e)=>{
//      this.setState({
//         [e.target.name]: e.target.value
//      })
//     }

//     render() {
//     return (
//         <>

//         <form onSubmit={this.submitHandler}>

//             <h1>Controlled Component</h1>

//             {/* name = state name */}

//             Name: <input name="username" type="text" value={this.state.username} onChange={this.changeHandler}/>
//             <br />
//             Password: <input name="password" type="password" value={this.state.password} onChange={this.changeHandler}/>
//             <br />

//             <button type='submit'>Submit</button>
//         </form>

//         </>
//     )
//   }
// }


// import React, { Component } from 'react'

// export class App extends Component {
  
//     constructor()
//     {
//         super();
//         this.state={
//             msg:"Hi TechWorld!!"
//         }
//     }
  
//     submitHandler=(e)=>{
//         e.preventDefault();
//         console.log(this.state.msg);
//     }

//     handleChange=(e)=>{
//         this.setState({
//           [e.target.name] : e.target.value
//         });
//     }

//     render() {
//     return (<>
     
//      <form onSubmit={this.submitHandler}>
     
//         Message: 
//         <br />
//         <textarea name="msg" rows={10} cols={10} value={this.state.msg} onChange={this.handleChange}></textarea>
//         <br />
        
//         <button type='submit'>Submit</button>
     
//      </form>
//     </>)
//   }
// }




import React, { Component } from 'react'

export class App extends Component {
  
    constructor()
    {
        super();
        this.state={
            city:""
        }
    }
  
    submitHandler=(e)=>{
        e.preventDefault();
        console.log(this.state);  //{city: 'Noida'}
    }

    handleChange=(e)=>{
        this.setState({
          [e.target.name] : e.target.value
        });
    }

    render() {
    return (<>
     
     <form onSubmit={this.submitHandler}>
     
        <select name="city" value={this.state.city} onChange={this.handleChange}>

            <option value="">---Select---</option>
            <option value="Noida">Noida</option>
            <option value="Delhi">Delhi</option>
            <option value="Mumbai">Mumbai</option>

        </select>
        
        <button type='submit'>Submit</button>
     
     </form>
    </>)
  }
}
