// import AddressPicker from './AddressPicker.jsx';
// import ReceiptType from './ReceiptType.jsx';

// class App extends React.Component{
//     constructor(props){
//         super(props)
//         this.state={
         
//             addressPickerIsReady:false,
//             receipt:{
//                 receiptType:2,
//                 taxId:"",
//                 receiptOption:[],
//             }
//         }    
//     }
//     isReady=()=>{
//         return this.checkIsReceiptTypeReady.receiptTypeIsReady && this.state.addressPickerIsReady
//     }
            
    
//     updtaeIsAddressPickerReady=(value)=>{
//         this.setState({"addressPickerIsReady":value})
//     }
//     checkIsReceiptTypeReady=()=>{
//         let result=false
//         if( this.state.receipt.receiptType==2 ){
//             result=true;
//         }else if(this.state.receipt.receiptType==3 && this.state.receipt.taxId!=""){
//             result=true;
//         }
//         return result;

//     }
//     handler=(e)=>{
//         const {name,value}=e.target 
//         console.log(name)
//         console.log(value)   
//         console.log(this.state)
//     }
//     render=()=>{
//         console.log("app render")
//         return(
//             <form>
//             <ReceiptType 
//                 handler={this.handler}
//                 receipt={this.state.receipt}
//                />
//             <hr/>
//             <AddressPicker updtaeIsAddressPickerReady={this.updtaeIsAddressPickerReady}/>
//             <button type="submit" 
//             disabled={!this.isReady()}
//             >submit</button>
//             </form>
           
            
//         )
//     }
// }
// ReactDOM.render(<App/>,document.getElementById("app"))
// import AddressPicker from './AddressPicker.jsx'
// import ReceiptType from './ReceiptType.jsx'

// class App extends React.Component{
//     constructor(props){
//         super(props)
//         this.state={
//             receiptTypeIsReady:false, 
//             addressPickerIsReady:false,
//         }
//     }
//     isReady=()=>{
        
//         return this.state.receiptTypeIsReady && this.state.addressPickerIsReady
        
//     }
    
//     updateIsReceiptTypeReady=(value)=>{
//         console.log("updateIsReceiptTypeReady")
//         this.setState({"receiptTypeIsReady":value})
//     }
//     updateIsAddressPickerReady=(value)=>{
//         this.setState({"addressPickerIsReady":value})
//     }

//     render(){
//         console.log(this.state.receiptTypeIsReady)
//         return(
//             <form>
//                 <ReceiptType 
//                 updateIsReceiptTypeReady={this.updateIsReceiptTypeReady}/>
//                 <hr/>
//                 <AddressPicker 
//                 updateIsAddressPickerReady={this.updateIsAddressPickerReady}/>
                
//                 <button 
//                 type="submit" 
//                 disabled={!this.isReady()}
//                 >submit</button>
//             </form>
//         )
//     }
// }
// ReactDOM.render(<App/>,document.getElementById('app'))

import Button from '@material/react-button';
import AddressPicker from './AddressPicker.jsx'
import ReceiptType from './ReceiptType.jsx';

import TaiwanPostalCode from './TaiwanPostalCode.json'
import {Cell, Grid, Row} from '@material/react-layout-grid';


class App extends React.Component{
    constructor(props){
        super(props)
        this.state={
            receipt:{
                receiptType:2,
                taxId:"",
                receiptOption:[],
            },
            fullAddress:{
                city:"新竹市",
                district:"",
                postalCode:"",
                address:""
            }
         }
    }
    isReady=()=>{
        return this.checkIsReceiptTypeReady() && 
               this.checkIsAddressPickerReady()
    }
    
    
    checkIsAddressPickerReady=()=>{
        const {city,district,postalCode,address}=this.state.fullAddress
        if(city!="" && district!=""&&postalCode!=""&& address!=""){
           
            return true
        }else{
           
            return false
        }
        
        
    }

    checkIsReceiptTypeReady=()=>{
        let result=false
        if( this.state.receipt.receiptType==2 && this.state.receipt.receiptOption!="" ){
            result=true; 
            // console.log("Receipt")
        }else if(this.state.receipt.receiptType==3 && this.state.receipt.taxId!="" && this.state.receipt.receiptOption!=""){
            result=true;
        }
        

        return result;

    }

    handler=(name,value)=>{
        this.setState({[name]:value},()=>{
            
            console.log(this.state)
        })
    }
    render(){
        return (
        <form>
           <Grid>
                <Row>
                    <Cell desktopColumns={3}phoneColumns={0} tabletColumns={1}></Cell>
                    <Cell desktopColumns={6}phoneColumns={4} tabletColumns={6}>
                        <ReceiptType
                            receipt={this.state.receipt}
                            handler={this.handler}
                        />
                        <br/>
                    </Cell>
                    <Cell desktopColumns={3}phoneColumns={0} tabletColumns={1}></Cell>

                     
                </Row>
               
                <Row>
                    <Cell desktopColumns={3}phoneColumns={0} tabletColumns={1}></Cell>
                    <Cell desktopColumns={6}phoneColumns={4} tabletColumns={6}>
                        <AddressPicker
                            handler={this.handler}
                            fullAddress={this.state.fullAddress}
                            taiwanPostalCodes={TaiwanPostalCode}
                        />
                        <br/>
                    </Cell>
                    <Cell desktopColumns={3}phoneColumns={0} tabletColumns={1}></Cell>
                   
                </Row>
                <Row>
                    <Cell desktopColumns={3}phoneColumns={0} tabletColumns={1}></Cell>
                    <Cell desktopColumns={6}phoneColumns={4} tabletColumns={6}>
                        <Button outlined
                            type="submit" 
                            disabled={!this.isReady()}>
                                submit
                        </Button>
                    </Cell>
                    <Cell desktopColumns={3}phoneColumns={0} tabletColumns={1}></Cell>
                   
                </Row>
                </Grid>
        </form>
        )
    }
}

ReactDOM.render(<App/>,document.getElementById('app'))
// import React,{Component} from 'react'
// import ReactDOM from 'react-dom'
// import User from './user.json'
// import UserEditor from './UserEditor.jsx'
// import UserVideos from './UserVideos.jsx'


// class App extends Component{
//     constructor(props){
//         super(props)
//         this.state={
//             user:User
//         }
       
//     }
//     handler=(name,value)=>{
//         this.setState({[name]:value},()=>{
//             console.log(this.state)
//         })
//     }
//     render(){
//         return(
//             <div>
//                 <UserEditor user={this.state.user} handler={this.handler}/>
//                 <UserVideos {...this.state.user.videos}/>
//                 </div>
//         )
//     }
// }
// ReactDOM.render(<App/>,document.getElementById('app'))
// import React,{Component} from 'react'
// import ReactDOM from 'react-dom'
// import Content from './content.jsx'
// class App extends Component{
//     constructor(props){
//         super(props)       
//         this.state={
//             count:0
//         }
//        console.log("App: constructor")
//     }
//     static getDerivedStateFormProps=(props,state)=>{
//         console.log("App: getDerivedStateFormProps")
//         return null
//     }

//     UNSAFE_componentWillMount=()=>{
//         console.log("App:UNSAFE_componentWillMount")
//     }
//     componentWillMount=()=>{
//         console.log("App:componentWillMount")
//     }
//     componentDidMount=()=>{
//         // this.thisForm.current.submit()
//         console.log("App:componentDidMount")
//     }
//     componentWillUnmount=()=>{
//         console.log("App:componentWillUnmount")
//     }
//     pulsOneHandler=()=>{
//         const count=this.state.count
//         this.setState({count:count+1},()=>{
//             console.log(this.state)
//         })
//     }
//     shouldComponentUpdate=(nextProps,nextState)=>{
//         console.log("App:shouldComponentUpdate")
//         return true
//     }
//     getSnapShotBeforeUpdate=(prevProps,prevState)=>{
//         console.log("App:getSnapShotBeforeUpdate")
//         return 1
//     }
//     componentDidUpdate=(prevProps, prevState, snapshot)=>{
//         console.log("App:componentDidUpdate")
//         console.log(snapshot)
//     }


//     render(){
//         console.log("App:render")
//         return(
//             <div>
//                 {
//                     this.state.count>5?
//                     (""):
//                     <Content/>
//                 }
//                 <p>count:{this.state.count}</p>
//                 <button 
//                     type="button"
//                     onClick={this.pulsOneHandler}
//                 >
//                     click
//                 </button>
                
//             </div>
//         )
//     }
// }
// // ReactDOM.render(<App/>,document.getElementById('app'))
// import React  from 'react'
// import ReactDOM from 'react-dom'
// import User from './user.json'
// import UserEditor from './UserEditor.jsx'
// import UserVideos from './UserVideos.jsx'
// import LoadingView from './loadingView.jsx'
// import ErrorView from './ErrorView.jsx'
// import UserService from './utils/UserService'

// class App extends React.Component{
//   constructor(props){
//     super(props)
//     this.state={
//       user:{
//           videos:{
//           likes:[]
//         }
//       }
//     }
//     this.userService = new UserService();
//   }
//   componentDidMount=()=>{
//     console.log("componentDidMount")
//   }
//   fetchData=async()=>{
//     try{
//       const user=await this.userService.logIn()
//       this.inputHandler("user",user)
//     }catch(error){
//       this.inputHandler("error",error)
//     }  
//   }
  
//   inputHandler=(name,value)=>{
//     this.setState({[name]:value})
//   }
//   render=()=>{
    
//     return(
//       <div>
//         {
//           this.state.error?
//           <ErrorView error={this.state.error}/>:
          
//          ( this.state.user.id ?
//           (<div>
//               <UserEditor 
//                 user={this.state.user}
//                 handler={this.inputHandler}
//               />
//               <UserVideos
//                 likes={this.state.user.videos.likes}
//               />
//         </div>):<LoadingView/>)
//         }
//         <button onClick={this.fetchData}>click to Fetch</button>
//       </div>
      
//     )

    
//   }
// }


// ReactDOM.render(
//   <App/>, document.getElementById('root'));
