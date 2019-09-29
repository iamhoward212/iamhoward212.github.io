// class ReceiptType extends React.Component{
//     constructor(props){
//         super(props)
//         this.state={
//             receiptType:2,
//             taxId:"",
//             receiptOptions:["byMail" ]
//         }
//     }
//     handler=(e)=>{
//         const {name,value}=e.target 
//         this.setState({[name]:value},()=>{
//             console.log(this.state)
//         })
//     }
//     removeValueFromArray=(array,value)=>{
//         return array.filter((element)=>{
//             return element!=value
//         })
//     }
//     checkboxHandler=(e)=>{
//         const newValue=e.target.value
//         const name=e.target.getAttribute("attributeName")
//         let values=this.state[name]
//        if(values.includes(newValue)){
//             values=this.removeValueFromArray(values,newValue)
//         }else{         
//             values.push(newValue)         
//         }
//         if( name=="receiptOptions" && !values.includes("byMail")  ){
//             values=[]
//         }
//         this.setState({[name]:values},()=>{
       
//             console.log(this.state)
//         })
//     }
//     render=()=>{
        
//         return(
//             <div>
//                 <span>發票類型</span><br/>
//                 <label>
//                     <input 
//                     type="radio" 
//                     name="receiptType" 
//                     value="2" 
//                     checked={this.state.receiptType==2}
//                     onChange={this.handler}
//                     />
//                     個人<br/>
//                 </label>
//                 <label>
//                     <input 
//                     type="radio" 
//                     name="receiptType" 
//                     value="3" 
//                     onChange={this.handler}
//                     checked={this.state.receiptType==3}/>
//                     公司<br/>
//                     統一編號
//                     <input 
//                     type="text" 
//                     name="taxId" 
//                     value={this.state.texId}/>
//                 </label>
//                 <br/>
//                 <br/>
//                 <div>
//                 <span>郵寄選項</span><br/>
//                 <label>
//                     <input 
//                     type="checkbox" 
//                     name="receiptOptions[]" 
//                     attributeName="receiptOptions"
//                     value="byMail" 
//                     onChange={this.checkboxHandler}
                             
//                     checked={this.state.receiptOptions.includes("byMail")}
//                     />
//                     實體寄送(+$30)
//                 </label><br/>
//                 <label>
//                     <input 
//                     type="checkbox" 
//                     name="receiptOptions[]" 
//                     attributeName="receiptOptions"
//                     value="promptRegistered" 
//                     onChange={this.checkboxHandler}
//                     disabled={
//                         !this.state.receiptOptions.includes("byMail")}
//                     checked={
//                         this.state.receiptOptions.includes("promptRegistered")}
//                     />
//                     限時掛號(再+$30=$60)
//                 </label>
//                 </div>

//             </div>
//         )
        
//     }
// }
// export default ReceiptType;
// class ReceiptType extends React.Component{
//     constructor(props){
//         super(props)
        
//     }
//     removeValue=(array,value)=>{
//         return array.filter(element=>{
//             return element!=value
//         })
//     }
//     arrayHandler=(e)=>{
//         let newValue=e.target.value
//         let name=e.target.getAttribute("attName")
//         let values=this.state[name]
//         if(values.includes(newValue)         ){
//             values=this.removeValue(values,newValue)
//         }else{
//             values.push(newValue)
//         }
//         if( name=="receiptOption" && !values.includes("byMail")){
//             console.log(values)
//             // values=[]
//         }
//          this.setState({[name]:values},()=>{
//             let result=this.checkIsReady()
//            this.props.updtaeIsReceiptTypeReady(result)
           
//         })
//     }
    

//     handler=(e)=>{
//         let{name,value}=e.target 
//         this.setState({[name]:value},()=>{  
//            let result=this.checkIsReady()
//            this.props.updtaeIsReceiptTypeReady(result)
//         })
//     }
//     render(){
//         console.log("receipt render")
//         const {receipt,handler}=this.props
//         const {receiptType,taxId,receiptOption}=receipt
//         return(
//         <div>
//             <div>
//                 <span>發票類型</span><br/>
//                 <label>
//                     <input name="receiptType" type="radio" 
//                     value="2"
                    
//                     checked={receiptType==2}
//                     onChange={handler}
//                     />個人
//                 </label><br/>
//                 <label>
//                     <input name="receiptType" type="radio"
//                     value="3"                    
                   
//                     checked={receiptType==3}
//                     onChange={handler}
//                     />公司
//                 </label><br/>
//                 <label>
//                     統一編號<input type="text" name="taxId"
//                     value={taxId} onChange={handler}/>
//                 </label>
//             </div>    
//             <div>
//                 <span>寄送方式</span><br/>
//                 <label>
//                     <input name="receiptOption[]" 
//                     value="byMail"
//                     type="checkbox"
//                     attName="receiptOption" 
//                     onChange={handler}
//                     checked={receiptOption.includes("byMail")}
//                     />實體寄送
//                 </label><br/>
//                 <label>
//                     <input name="receiptOption[]" 
//                     value="prompt"
//                     type="checkbox"
//                     attName="receiptOption"
//                     onChange={handler}
//                     checked={
//                         receiptOption.includes("prompt")}
//                     disabled={
//                         !receiptOption.includes("byMail")
//                     }
//                     />限時掛號
//                 </label><br/>
                
//             </div>
//         </div>
        
//         )
//     }
// }
// export default ReceiptType;
// class ReceiptType extends React.Component{
//     constructor(props){
//         super(props)
//         this.state={
//             receiptType:2,
//             receiptOption:[],
//         }
//     }
//     checkIsReady=()=>{
//         let result=false
//         if( this.state.receiptType==2 ){
//             result=true;
//         }else if(this.state.receiptType==3 && this.state.taxId!=""){
//             result=true;
//         }
//         return result;
        
//     }



//     handler=(e)=>{
//         let {name,value}=e.target 
//         this.setState({[name]:value},()=>{
//              let result=this.checkIsReady()
//             this.props.updateIsReceiptTypeReady(result)
            
//         })
//     }
//     arrayHandler=(e)=>{
//         let newValue=e.target.value 
//         let name=e.target.getAttribute("attributeName")
//         let values=this.state[name]
//         if( values.includes(newValue)){
//             values=values.filter(value=>{
//                 return(value!=newValue)
//             })
//         }else{
//             values.push(newValue)
//         }
//         if( name=="receiptOption" && !values.includes(newValue)){
//             values=[]
//         }
//         this.setState({[name]:values},()=>{
//             let result=this.checkIsReady()
//            this.props.updateIsReceiptTypeReady(result)

//         })
//     }
    
//     render(){
//         return(
//         <div>
//             <div>
//                 <span>option1</span><br/>
//                 <label>
//                     <input name="receiptType" value="2" type="radio"
//                     checked={this.state.receiptType==2}
//                     onChange={this.handler}
//                     />個人
//                 </label><br/>
//                 <label>
//                     <input name="receiptType" value="3" type="radio"
//                     checked={this.state.receiptType==3}
//                     onChange={this.handler}
//                     />公司
//                 </label><br/>
//                 <label>
//                     郵遞區號<input name="taxId" type="text"/>
//                 </label><br/>
//             </div>
//             <div>
//                 <span>option2</span><br/>
//                 <label>
//                     <input name="receiptOption[]" 
//                     value="byMail" type="checkbox"
//                     attributeName="receiptOption" 
//                     onChange={this.arrayHandler}
//                     checked={this.state.receiptOption.includes("byMail")}
//                     />實體寄送
//                 </label><br/>
//                 <label>
//                     <input name="receiptOption[]"
//                    value="prompt" type="checkbox"
//                    attributeName="receiptOption" 
//                    onChange={this.arrayHandler}
//                    checked={this.state.receiptOption.includes("prompt")}
//                    disabled={
//                     !this.state.receiptOption.includes("byMail")
//                    }
//                    />限時掛號
//                 </label><br/>
                
//             </div>
//         </div>
//         )
//     }
// }
// export default ReceiptType;
import Card, {
    CardPrimaryContent,
   } from "@material/react-card";
import {
    Body2,
    Headline6,
    } from '@material/react-typography';
import Radio, {NativeRadioControl} from '@material/react-radio';
import Checkbox from '@material/react-checkbox'
import TextField, {HelperText, Input} from '@material/react-text-field';
import MaterialIcon from '@material/react-material-icon';

class ReceiptType extends React.Component{
    componentDidMount=()=>{
        document.getElementById('byMail').value='byMail'
        document.getElementById('prompt').value='prompt'
    }
    
    inputHandler=(e)=>{
        const {name,value}=e.target 
        const {receipt,handler}=this.props
        handler("receipt",{...receipt,[name]:value})
    }
    checkboxHandler=(e)=>{
                const checkboxParent=e.target.closest('.mdc-checkbox') 
                const newValue=e.target.value
                const name=checkboxParent.getAttribute("attributeName")
                const {receipt,handler}=this.props 
                let values=receipt[name]
                if( values.includes(newValue)){
                    values=values.filter(value=>{
                        return(value!=newValue)
                    })
                }else{
                    values.push(newValue)
                }
                if( name=="receiptOption" && !values.includes(newValue)){
                    values=[]
                }
                handler("receipt",{...receipt,[name]:values})
            }
            
    render(){
        const {receipt,handler}=this.props
        const {receiptType,taxId,receiptOption}=receipt
        return(
            <div><Card><CardPrimaryContent>
                <div style={{padding:"1rem"}}>
                    <Headline6 tag="p">
                        發票類型
                    </Headline6>
                    <Body2  tag="div">
                <div>
                    <Radio label="個人" ke="personal">
                        <NativeRadioControl 
                         name="receiptType" 
                         value="2" 
                         id="personal"
                         onChange={this.inputHandler}
                         checked={receiptType==2}
                        />
                    </Radio><br/>
                    <Radio label="公司" ke="company">
                        <NativeRadioControl 
                         name="receiptType" 
                         value="3" 
                         id="company"
                         onChange={this.inputHandler}
                         checked={receiptType==3}
                        />
                    </Radio><br/>
                    <TextField outlined label='統一編號'
                    leadingIcon={<MaterialIcon role="button" icon="account_circle
                    "/>}>
                    <Input
                        style={{"marginLeft":"1rem"}}
                        value={taxId}
                        onChange={this.inputHandler} />
                    </TextField>

                    
                    <br/>
                </div>
                <div>
                    <Headline6 tag="p">
                        郵寄選項
                    </Headline6>
                    <React.Fragment>
                        <Checkbox
                        name="receiptOption[]" 
                        nativeControlId="byMail" 
                        attributeName="receiptOption"
                        checked={receiptOption.includes("byMail")}
                        onChange={this.checkboxHandler}
                        />
                        <label htmlFor="byMail" >實體寄送(+$30)</label>
                    </React.Fragment><br/>
                    <React.Fragment>
                        <Checkbox
                        name="receiptOption[]" 
                        nativeControlId="prompt"
                        attributeName="receiptOption"
                        checked={receiptOption.includes("prompt")}
                        onChange={this.checkboxHandler}
                        disabled={
                            !receiptOption.includes("byMail")
                        }
                        />
                        <label htmlFor="prompt" >限時掛號(+$60)</label>
                    </React.Fragment>


                </div> 
                  </Body2>
                 </div>
                </CardPrimaryContent>
              </Card>
            </div>


        )
    }
}
export default ReceiptType;
