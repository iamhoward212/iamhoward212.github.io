class UserService {
    logIn= async (userName,password)=>{
            const response= await fetch("http://127.0.0.1:5500/jsx/user.json");
            if(!response.ok){        
              throw error(response.statusText)
            }
            return await response.json()
           }
}
export default UserService;