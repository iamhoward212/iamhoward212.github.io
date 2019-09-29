import React,{Component} from 'react'
class Content extends Component{
    constructor(props){
        super(props)       
        this.state={}
       console.log("content: constructor")
    }
    static getDerivedStateFormProps=(props,state)=>{
        console.log("content: getDerivedStateFormProps")
        return null
    }

    UNSAFE_componentWillMount=()=>{
        console.log("content:UNSAFE_componentWillMount")
    }
    componentWillMount=()=>{
        console.log("content:componentWillMount")
    }
    componentDidMount=()=>{
        // this.thisForm.current.submit()
        console.log("content:componentDidMount")
    }
    componentWillUnmount=()=>{
        console.log("content:componentWillUnmount")
    }
    
    shouldComponentUpdate=(nextProps,nextState)=>{
        console.log("content:shouldComponentUpdate")
        return true
    }
    getSnapShotBeforeUpdate=(prevProps,prevState)=>{
        console.log("content:getSnapShotBeforeUpdate")
        return 1
    }
    componentDidUpdate=(prevProps, prevState, snapshot)=>{
        console.log("content:componentDidUpdate")
        console.log(snapshot)
    }
    render(){
        console.log("contet: render")
        return(<p>test</p>)
    }
}
export default Content;