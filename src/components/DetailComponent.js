import { Component } from "react";
import { Link } from "react-router-dom";
import { Breadcrumb,BreadcrumbItem } from "reactstrap";

function RenderFood({item,onAddItems,onAdd,onSub,quantityItem}){ 
    if(item!=null){
        return(
            <div className="offset-md-1 col-md-10 col-12">
                <div className="row">
                    <div className="col-md-7 col-12">
                        <img src={item.image} alt={item.name} className="img-detail mb-2"></img>
                        <div className="fs-6 mb-5">{item.description}</div>
                    </div>

                    <div className="col-md-5 col-12">
                        <h4>{item.name}</h4>
                        <div className="fs-6-custom mb-3">sku: {item.sku}</div>
                        <div className="mb-3 fs-3">${item.price}</div>
                        <div className="mb-2">Quantity: {quantityItem}</div>
                        <div className="mb-5"> 
                            <button className="btn btn-outline-dark btn-sm" onClick={() => onSub()} >
                                                            -
                            </button>{' '}
                            {' '}
                            <button className="btn btn-outline-dark btn-sm" onClick={() => onAdd()} >
                                                            +
                            </button>                                                   
                        </div>
                        <div className="d-grid gap-2 mb-1">
                            <button className="btn btn-outline-dark" onClick={() =>{onAddItems(item,quantityItem);alert("Added to cart! Thank you")}}>Add to Cart</button>
                        </div>
                        <div className="d-grid gap-2 mb-3">
                            <button className="btn btn-dark">Buy now</button>
                        </div>
                        <div className="fw-bold">PRODUCT INFO</div>
                        <div>{item.info}</div>
                        <hr></hr>
                        <div className="fw-bold">RETURN AND REFUND POLICY</div>
                        <div>I’m a Return and Refund policy. I’m a great place to let your customers know what to do in case they are dissatisfied with their purchase. Having a straightforward refund or exchange policy is a great way to build trust and reassure your customers that they can buy with confidence.</div>
                    </div>
                </div>
            </div>
        )
    }else{
        return(
            <div></div>
        )
    }
}

class Detail extends Component{
    constructor(props){
        super(props)
        this.state={
            quantityItem:1,
        }
    }

    onAdd =()=>{
        this.setState({
            quantityItem:this.state.quantityItem+1
        })
    }
    onSub =()=>{
        if(this.state.quantityItem > 1)
        this.setState({
            quantityItem:this.state.quantityItem-1
        })
    }
    render(){
        return(
            <div className="container mt-100px">
                <div className="row">
                    <Breadcrumb className="col-md-10 offset-md-1 col-12">
                        <BreadcrumbItem><Link className="text-decoration-none text-dark" to="/home">Home</Link></BreadcrumbItem>
                        <BreadcrumbItem><Link className="text-decoration-none text-dark" to={`/${this.props.parent}`}>{this.props.parent.charAt(0).toUpperCase()+this.props.parent.slice(1)}</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{this.props.product.name}</BreadcrumbItem>
                    </Breadcrumb>
                </div>
                <div className="row">
                    <RenderFood item={this.props.product}  onAddItems = {this.props.onAddItems} quantityItem={this.state.quantityItem} onAdd={this.onAdd} onSub={this.onSub}></RenderFood>
                </div>
            </div>
        )
    }
}

export default Detail;