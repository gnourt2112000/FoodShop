import React, { Component } from "react";
import { Link } from "react-router-dom";

class Cart extends Component {

    itemsPrice = this.props.cartItems.reduce((a, c) => a + c.qty * c.price, 0);

    render(){
        return(
            <div>
                <div className="container mt-200px">
                    <div className="row row-content">
                        {this.props.cartItems.length === 0 &&
                        <div>
                            <h5>My cart</h5>
                            <div className="text-center">
                                <hr></hr>
                                <h5 className="text-center mt-200px">Cart is empty</h5>
                                <Link to='/cheese' className="fs-7 text-dark">Continue shopping </Link>
                                <hr className="mt-200px"></hr>
                            </div>
                        </div> 
                        }
                        <div className="col-md-7 col-12 mb-5">
                            <div className="row">
                                {this.props.cartItems.length !== 0 && <div>
                                    <h5>My cart</h5>
                                    <hr></hr>
                                </div>}
                                {this.props.cartItems.map((item) =>(
                                    <div>
                                        <div key={item.sku} className="row">
                                            <div className="col-2">
                                                <img src={item.image} className="w-100" alt={item.name}/>
                                            </div>
                                            <div className="col-2 fs-6-custom">{item.name}</div>
                                            <div className="col-4 fs-6-custom">
                                                <button className="btn btn-outline-dark" onClick={() => this.props.onRemove(item)} >
                                                    -
                                                </button>{' '}
                                                <button className="btn btn-outline-dark" onClick={() => this.props.onAdd(item)} >
                                                    +
                                                </button>
                                            </div>
                                            <div className="col-2 col-md-3">
                                                {item.qty} x ${item.price}
                                            </div>
                                            <div className="col-2 col-md-1 text-center">
                                                <button className="btn btn-close" onClick={()=>{this.props.onDelete(item)}}></button>
                                            </div>
                                        </div>
                                        <hr className="mt-3"></hr>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="offset-md-1 col-md-4 col-12 mb-5">
                            <div className="row">
                                {this.props.cartItems.length !== 0 && (
                                    <React.Fragment>
                                        <div><h5>Order Summary</h5><hr></hr></div>
                                        <div>
                                            <div className="row">
                                                <div className="col-6">Subtotal</div>
                                                <div className="col-6 text-end">${this.itemsPrice.toFixed(2)}</div>
                                            </div>
                                            <div className="row">
                                                <div className="col-6">Shipping</div>
                                                <div className="col-6 text-end">FREE</div>
                                            </div>
                                            <div className="row">
                                                <div className="col-6">
                                                    <strong>Total price</strong>
                                                </div>
                                                <div className="col-6 text-end">
                                                    <strong>${this.itemsPrice.toFixed(2)}</strong>
                                                </div>
                                            </div>
                                        </div>
                                        <hr className="mt-3"/>
                                        <div className="row">
                                            <button className="btn btn-danger col-6 offset-3" onClick={() => alert('Implement Checkout!')}>
                                                Checkout
                                            </button>
                                        </div>
                                    </React.Fragment>
                                )}
                            </div>
                        </div>
                        
                    </div>
                </div>
                
            </div>
        )
    }
}

export default Cart;