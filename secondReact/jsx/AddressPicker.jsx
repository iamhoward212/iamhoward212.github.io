// import TaiwanPostalCode from './TaiwanPostalCode.json'
// // console.log(TaiwanPostalCode)
// class AddressPicker extends React.Component{
//     constructor(props){
//         super(props)
//         this.postalCode=TaiwanPostalCode
//         this.state={
//             city:"新竹市",
//             district:'',
//         }
//         this.cities=Object.keys(this.postalCode)
//     }
//     handler=(e)=>{
//         let {name,value}=e.target
//         if(name=="city"){
//             if(this.state.city != value){
//                 this.setState({[name]:value,"district":""},()=>{
//                     console.log(this.state)
//                 })
//             }else{
//                 this.setState({[name]:value},()=>{
//                     console.log(this.state)
//                 })
//             }
//         }else{
//             this.setState({[name]:value},()=>{
//                 console.log(this.state)
//             })
//         }
//     }
//     getCityOptions=(cities)=>{
//         return cities.map((city)=>{
//             return(<option key={city} value={city}>{city}</option>)
//         })
//     }
//     render=()=>{
//         const cityOptions=this.getCityOptions(this.cities)
//         const cityData=this.postalCode[this.state.city]
//         console.log(this.state.city)
//         console.log(cityData)
//         const districts=Object.keys(cityData)

//         return(
//             <div>
//                 <label>
//                     城市<select name='city' onChange={this.handler} value={this.state.city}>
//                             {cityOptions}
//                         </select>
//                 </label>
//                 <label>
//                     市/區
//                     <select name='district' onChange={this.handler} value={this.state.district}>
//                         {
//                             districts.map((district)=>{
//                                 return(<option key={district} value={district}>{district}</option>)
//                             })
//                         }
//                     </select>
//                 </label>
//          </div>
//         )
//      }
// }
// export default AddressPicker;
// import TaiwanPostalCode from './TaiwanPostalCode.json'

// class AddressPicker extends React.Component{
//     constructor(props){
//         super(props)
//         this.postal=TaiwanPostalCode
//         this.cities=Object.keys(this.postal)
//         this.state={
//             city:"台北市",
//             district:"",
//             postalCode:"",
//         }
//     }
//     handlerRelated=(name,value)=>{
//         let mergeObject={}
//         if(   name=="city" &&  this.state.ciy !=value    ){
//             mergeObject['district']=""  
//             mergeObject['postalCode']=""    
//          }else if(name=="district" &&  this.state.ciy !=value){
//              const cityData=this.postal[this.state.city];
//              const postalCode=cityData[value];
         
//          mergeObject['postalCode']=postalCode
//          }
//          return mergeObject
//     }
//     handler=(e)=>{
//         let {name,value}=e.target
        
//         const mergeObject=this.handlerRelated(name,value)
//         this.setState({...mergeObject,[name]:value},()=>{
//             console.log(this.state)
//         })
//     }
//     getCityOptions=(cities)=>{
//         return cities.map(city=>{
//             return(<option key={city} value={city}>{city}</option>)
//         })
//     }
//     getDistrictOptions=(districts)=>{
//         return districts.map(district=>{
//             return(<option key={district} value={district}>{district}</option>)
//         })
//     }
//     render(){
//         const cityOptions=this.getCityOptions(this.cities)
//         const cityData=this.postal[this.state.city]
//         const districts=Object.keys(cityData)
//         const districtOption=this.getDistrictOptions(districts)
//         return(
//             <div>
//                 <label>城市
                    
//                     <select name="city" value={this.state.city} onChange={this.handler}>
//                     {cityOptions}
                        
//                     </select>
//                 </label>
//                 <label>市/區
//                     <select name="district" value={this.state.district} onChange={this.handler}>
//                         {districtOption}
//                         <option>中山區</option>
//                     </select>
//                 </label>
//                 <lable>郵遞區號
//                     <input name="postalCode" value={this.state.postalCode}disabled={true}/>
//                 </lable>
//             </div>
//         )
//     }
// }
// export default AddressPicker;
import Card, {
    CardPrimaryContent,
   } from "@material/react-card";
import TextField, {HelperText, Input} from '@material/react-text-field';
import MaterialIcon from '@material/react-material-icon';
import Select, {Option} from '@material/react-select';

class AddressPicker extends React.Component{
    constructor(props){
        super(props)
        this.cities=Object.keys(this.props.taiwanPostalCodes)
    }
    handlerRelated=(name,value)=>{
        let mergeObject={}
        const {taiwanPostalCodes,fullAddress}=this.props
        const {city,district,postalCode,address}=fullAddress
        // const {taiwanPostalCodes,fullAddress:{city,district,postalCode,address}}=this.props
        if(  name=="city" && city!=value ){
            mergeObject['district']=""
            mergeObject['postalCode']=""
           
            }else if(name=="district" && city!=value   ){
                const cityData=taiwanPostalCodes[city]
                const postalCode=cityData[value]               
                mergeObject["postalCode"]=postalCode
            }
            return mergeObject
    }
    clearAddress=()=>{
        const name="address"
        const value=""
        const {fullAddress,handler}=this.props 
        const mergeObject=this.handlerRelated(name,value) 
        handler("fullAddress",{...fullAddress,...mergeObject,[name]:value})
    }

    inputHandler=(e)=>{
        const {name,value}=e.target 
        const {fullAddress,handler}=this.props 
        const mergeObject=this.handlerRelated(name,value) 
        handler("fullAddress",{...fullAddress,...mergeObject,[name]:value})
    }


    handler=(e)=>{
        let {name,value}=e.target 
        let mergeObject=this.handlerRelated(name,value)  
            this.setState({...mergeObject,[name]:value},()=>{
                console.log(this.state)
            })
    }
    getCityOptions=(cities)=>{
        return cities.map(city=>{
            return(
                <Option key={city} value={city}>{city}</Option>
            
        )
            })
    }
    getDistrictOptions=(districts)=>{
        return districts.map(district=>{
            return(
            <Option key={district} value={district}>{district}</Option>
            
            )
        })
    }
    render(){
        // const {taiwanPostalCodes,fullAddress:{city,district,postalCode,address}}=this.props
        const {taiwanPostalCodes,fullAddress}=this.props
        const {city,district,postalCode,address}=fullAddress
        const cityOptions=this.getCityOptions(this.cities)
        const cityData=taiwanPostalCodes[city]
        const districts=Object.keys(cityData)
        const districtOptions=this.getDistrictOptions(districts)
        return(
            <div>
                <Card>
                    <CardPrimaryContent>
                        <div style={{padding:"1rem"}}>
                <Select
                    label='城市'
                    value={city} 
                    name="city"
                    onChange={this.inputHandler}
                    outlined
                >
                    {cityOptions}
                    
                </Select>
                <br/>
                <br/>
                <Select
                    label=''
                    value={district} 
                    name="district"
                    onChange={this.inputHandler}
                    outlined
                    
                >
                   {districtOptions}
                    
                </Select>
                
                <TextField outlined label='郵遞區號'>
                <Input
                    value={postalCode}
                    type="text"
                    name="postalCode"
                    disabled={true}
                 />
                </TextField>
                
            <TextField 
                outlined 
                label='地址' 
                helperText={<HelperText>Help Me!</HelperText>}
                leadingIcon={<MaterialIcon role="button" icon="apartment"/>}
                onTrailingIconSelect={this.clearAddress}
                trailingIcon={<MaterialIcon role="button" icon="delete"/>}
            >
                <Input
                    value={address} 
                    type="text"
                    name="address"
                    onChange={this.inputHandler}
                 />
                </TextField>

                </div>
                 </CardPrimaryContent>
                </Card>
            </div>
        )
    }
}
export default AddressPicker;