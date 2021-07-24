import { Component } from "react";
import { Link } from "react-router-dom";
import { Modal } from "reactstrap";

class CartModal extends Component{
    constructor(props){
        super(props);
        this.state={
            isCartOpen:true,
            iconControlCart:"carousel-control-next-icon",
            width:0
        }
        window.addEventListener("resize", this.update);
    }
    componentDidMount() {
        this.update();
    }
    
    update = () => {
        this.setState({
          width: window.innerWidth,
        });
        if(window.innerWidth > 576){
            this.setState({
                fixed:"bg-light fixed-top"
            })
        }else{
            console.log(window.innerWidth)
            this.setState({
                fixed:"bg-light"    
            })
        }
    };

    toggleCart = () =>{
        if(this.state.iconControlCart === "carousel-control-next-icon"){
            this.setState({
                iconControlCart:"carousel-control-prev-icon",
            })
            this.props.toggle();

        }else if(this.state.iconControlCart === "carousel-control-prev-icon"){
            this.setState({
                iconControlCart:"carousel-control-next-icon",
            })
            this.props.toggle();
        }
        
    }

    render(){
        
        return(
            <Modal modalClassName="right" isOpen={this.state.width >= 768 && this.state.isCartOpen && this.props.isOpen} toggle={this.toggleCart} className="mt-0">
                    <div className="modal-content">
                            <div className="modal-header bg-dark text-white" >
                                <button className="btn text-white col-sm-2" type="button" onClick={this.toggleCart}><span className={this.state.iconControlCart}></span></button>
                                <h5 className="modal-title col-sm-7">&ensp;Cart</h5>
                            </div>
                            <div className="modal-body">
                                {this.props.cartItems.length === 0 &&
                                    <div className="text-center">
                                        <h5 className="text-center mt-200px">Cart is empty</h5>
                                    </div>
                                }
                                {this.props.cartItems.map((item) =>(
                                    <div>
                                        <hr className="mt-3"></hr>
                                        <div key={item.sku} className="row">
                                            <div className="col-3">
                                                <img src={item.image} className="w-100" alt={item.name}/>
                                            </div>
                                            <div className="col-7">
                                                <div className="row fs-6-custom">
                                                    <div className="col-12 mb-1">{item.name}</div>
                                                    <div className="col-12 mb-1">
                                                        <button className="btn btn-outline-dark btn-sm" onClick={() => this.props.onRemove(item)} >
                                                            -
                                                        </button>{' '}
                                                        <button className="btn btn-outline-dark btn-sm" onClick={() => this.props.onAdd(item)} >
                                                            +
                                                        </button>
                                                    </div>
                                                    <div className="col-12">
                                                        {item.qty} x ${item.price}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-1">
                                                <button className="btn btn-close" onClick={()=>{this.props.onDelete(item)}}></button>
                                            </div>
                                        </div>
                                        
                                    </div>
                                ))}
                            </div>
                            {this.props.cartItems.length !== 0 && <div>
                                <hr></hr>
                                <div className="d-flex justify-content-center mb-3">                    
                                    <Link className="w-100 text-center" to="/cart"><button onClick={this.toggleCart} type="button" className="btn btn-danger w-50">View cart</button></Link>     
                                </div> 
                            </div>}  
                            
                    </div>      
                </Modal>
        )
    }
}
export default CartModal;