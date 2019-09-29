class Test extends React.Component{
    

    handler=(e)=>{
        let {name,value}=e.target
        console.log(value)
        this.props.content(value)
    }
    render(){
        return(
            <div>
                {this.props.name}
               <input 
               name="test" 
               type="text"
               onChange={this.handler}
               />
                 
                 
            </div>
        )
    }
}
export default Test;