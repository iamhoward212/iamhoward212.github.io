// import React from 'react'

// function UserVideos({likes}){
//     return (
//         <div>
//            { 
//                likes.map((videoUrl)=>{
//                 return(
//                     <iframe src={videoUrl} key={videoUrl}></iframe>
//                     )
//             })
//             }
//         </div>

//     )
// }
// export default UserVideos;
import React from 'react'
function UserVideos({likes}){
    return(
        <div>
        {
            likes.map(videoUrl=>{
                return(<iframe src={videoUrl} 
                key={videoUrl}
                ></iframe>)
            })
        }

        </div>
    )
}
export default UserVideos;