import React from 'react'
class LoadingView extends React.Component{
    constructor(props){
        super(props)
        this.view=React.createRef()
        this.str="loading"
    }
    componentDidMount=()=>{
        this.timer=setInterval(()=>{
            this.str=this.str+"."
            this.view.current.innerHTML=this.str
            console.log(str)
        },500);
    }
    componentWillUnmount=()=>{
        if(this.timer){
            clearInterval(this.timer)
        }
    }
  
    render(){
        return(
            <h1  ref={this.view}>{this.str}</h1>
        )
    }
}
export default LoadingView;