// // import React from 'react'

// // const UserEditor=({user, handler})=>{
// //     let {id,name,email,description}=user
// //     let textareaHandler=(e)=>{
// //         const {name,value}=e.target 
// //         handler("user",{...user,[name]:value})
// //     }

// //     return(
// //     <div>
// //         <p> {id}</p>
// //         <p> {name}</p>
// //         <p> {email}</p>
        
// //         <textarea
// //             name="description"
// //             cols="100"
// //             rows="10"
// //             defaultValue={description}
// //             onChange={textareaHandler}
// //         >
            
// //         </textarea>
        
// //     </div>
// //     )
// // }
// // export default UserEditor;
// import React from 'react'
// function UserVideos({user,handler}){
//     let {id,name,email,description}=user
//     let textareaHandler=(e)=>{
//         const {name,value}=e.target
//         handler("user",{...user,[name]:value})
//     }
//     return (
//         <div>
//             <p>{id}</p>
//             <p>{name}</p>
//             <p>{email}</p>

//             <textarea
//                 name="dexcription"
//                 cols="100"
//                 rows="15"
//                 defaultValue={description}
//                 onChange={textareaHandler}
//             ></textarea>
//         </div>
    
//     )
// }
// export default UserVideos;
import React from 'react'
const UserEditor=({user,handler})=>{
    let {id,name,email,description}=user

    let textareaHandler=(e)=>{
        let {name,value}=e.target
        handler('user',{...user,[name]:value})
    }

    return(
        <div>
            <p>{id}</p>
            <p>{name}</p>
            <p>{email}</p>
            <textarea
                name="description"
                cols="100"
                rows="10"
                defaultValue={description}
                onChange={textareaHandler}
            ></textarea>
        </div>
    
    )
}
export default UserEditor;