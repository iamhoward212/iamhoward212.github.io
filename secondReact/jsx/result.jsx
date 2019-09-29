class Result extends React.Component{
    constructor(props){
        super(props)
        console.log(props)   
    }
    render(){
        let {count,handler}=this.props
        return(
            <div>
            <h1>Count: {count} </h1>
            <button type="button" onClick={handler} >Click Me 0</button>
            </div>
        )
    }
}
export default Result;