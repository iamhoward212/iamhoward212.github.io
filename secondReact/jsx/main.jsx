class TextInputPreview extends React.Component{
  constructor(props){
    super(props)
    this.state={ 
      title:"7788"
    }
  }
  

  handler=(e)=>{
    let {name,value}=e.target
    this.setState({[name]:value})
  }
  render(){
     return(
      <div>
        <h1>{this.state.title}</h1>
        <input 
             type="text" 
             value={this.state.title} 
             name="title"
             onChange={this.handler}/>
      </div>
    )
  }
}
ReactDOM.render(<TextInputPreview/>,document.getElementById("main"));
