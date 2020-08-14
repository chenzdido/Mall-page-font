import React from 'react';

const isPriceValid=value=>/(^[1-9]\d*(\.\d{1,2})?$)|(^0(\.\d{1,2})?$)/.test(value)

class AddGood extends React.Component{
    constructor(props){
        super(props);
        this.state={
            name:'',
            price:'',
            unit:'',
            imgUrl:'',
            priceerror:false
        }
    }
    onhandleNameChange=event=>{
        this.setState({
            name:event.target.value
        })
    }
    onhandlePriceChange=event=>{
        this.setState({
            price:event.target.value,
            error:isPriceValid(event.target.value)
        })
    }
    onhandleUnitChange=event=>{
        this.setState({
            unit:event.target.value
        })
    }
    onhandleimgUrlChange=event=>{
        this.setState({
            imgUrl:event.target.value
        })
    }
    handleSubmit=event=>{
        fetch()
    }
    render(){
        return(
            <div>
                <h1>添加商品</h1>
                <form onSubmit={this.handleSubmit}>
                    <p>名称</p>
                    <input value={this.state.name} type="text" onChange={this.onhandleNameChange}/>
                    <p>价格</p>
                    <input value={this.state.price} type="text" onChange={this.onhandlePriceChange}/>
                    <p>单位</p>
                    <input value={this.state.unit} type="text" onChange={this.onhandleUnitChange}/>
                    <p>图片</p>
                    <input value={this.state.imgUrl} type="text" onChange={this.onhandleimgUrlChange}/>
                    <button disabled={!this.state.name||!this.state.price||!this.state.unit||!this.state.imgUrl||!this.state.error}>提交</button>
                </form>
            </div>
        )
    }
}

export default AddGood;