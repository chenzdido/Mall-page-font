import React from 'react';

class Mall extends React.Component{
    constructor(props){
        super(props);
        this.state={
            goods:[]
        }
    }
    /*componentDidMount(){
        fetch('http://localhost:8081/buy/list')
        .then((response)=>response.json())
        .then((data)=>{
            this.setState({
                goods:data,
            });
        })
        .then(console.log(this.state.goods));
    }*/
    render(){
        return(
            <div>
            </div>
        )
    }
}

export default Mall;