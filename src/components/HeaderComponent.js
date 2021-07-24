import React, {Component} from 'react';
import {Link, NavLink} from 'react-router-dom';
import {  Navbar, Nav,NavbarToggler,Collapse,NavItem, Modal,Button, Input} from "reactstrap";


class Header extends Component{
    constructor(props){
        super(props);
        this.state = {
            isNavOpen:false,
            isLoginOpen:false,
            width:0,
            authFormType:"Sign Up",
            isOpenSignUp: "d-block",
            isOpenSignIn: "d-none",
            fixed:"bg-light fixed-top",
        }

        window.addEventListener("resize", this.update);
        
    }

    toggleAuthFormType = () =>{
        if(this.state.authFormType === "Sign Up")
            this.setState({
                authFormType:"Sign In",
                isOpenSignIn:"d-block",
                isOpenSignUp:"d-none"
            })
        else
            this.setState({
                authFormType:"Sign Up",
                isOpenSignIn:"d-none",
                isOpenSignUp:"d-block"
            })
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

    toggleNav = () =>{
        this.setState({
            isNavOpen: !this.state.isNavOpen
        })
    }
    

    toggleAuth = ()=>{
        this.setState({
            isLoginOpen: !this.state.isLoginOpen,
            isOpenSignUp: "d-block",
            isOpenSignIn: "d-none"
        })
    }

    handleSignIn = (event)=>{
        this.toggleAuth();
        alert("Username: " + this.username.value + " Password: " + this.password.value);
        event.preventDefault();
    }

    handleSignUp = (event)=>{
        this.toggleAuth();
        alert("Username: " + this.username1.value + " Password: " + this.password1.value);
        event.preventDefault();
    }


    render(){        
    
        return(
            <React.Fragment>
                <Navbar light expand="md" className={this.state.fixed}>
                    <div className="container">
                        <NavLink className="nav-link d-block d-md-none" to='/cart'>
                            <button className=" btn"><span className="fa-stack me-auto">
                                <span className="fa fa-shopping-bag fs-1"></span>
                                <strong className="fa-stack-1x text-light mt-1 fs-6">{this.props.cartItems.reduce((a, c) => a + c.qty, 0)}</strong>
                            </span></button>
                        </NavLink>
                                
                            
                        <NavbarToggler onClick={this.toggleNav}></NavbarToggler>
                        <Collapse navbar>
                            <Nav className="border-top mt-2 border-dark col-9" navbar>
                                <NavItem>
                                    <NavLink className="nav-link " to='/home'>Home</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to='/about'>About</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to='/cheeses'>Cheese</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to='/meats'>Meats</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to='/provisions'>Provisions</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to='/findus'>Find us</NavLink>
                                </NavItem>
                            </Nav>
                            <Nav navbar className="align-items-center justify-content-evenly col-3 ms-auto me-0">
                                    <NavItem>
                                        <Button color="" onClick={this.toggleAuth}><span className="fa fa-user-circle-o fa-lg"></span>&emsp;Log In</Button>
                                    </NavItem>
                                    <NavItem>
                                        <Button color="" onClick={this.props.toggleCart}><span className="fa-stack me-auto">
                                            <span className="fa fa-shopping-bag fs-2"></span>
                                            <strong className="fa-stack-1x text-light mt-1 fs-6">{this.props.cartItems.reduce((a, c) => a + c.qty, 0)}</strong>
                                        </span></Button>
                                    </NavItem>
                                </Nav>
                            </Collapse>
                        </div>
                </Navbar>
                <Modal modalClassName="right" isOpen={this.state.width >= 768 && this.props.isCartOpen} toggle={this.props.toggleCart} className="mt-0">
                    <div className="modal-content">
                            <div className="modal-header bg-dark text-white" >
                                <button className="btn text-white col-sm-2" type="button" onClick={this.props.toggleCart}><span className={this.props.iconControlCart}></span></button>
                                <h5 className="modal-title col-sm-7">&ensp;Cart</h5>
                            </div>
                            <div className="modal-body position-relative">
                                {this.props.cartItems.length === 0 &&
                                    <div className="text-center">
                                        <h5 className="text-center mt-200px">Cart is empty</h5>
                                    </div>
                                }
                                {this.props.cartItems.map((item) =>(
                                    <div>
                                        <hr className="mt-3"></hr>
                                        <div key={item.sku} className="row" >
                                            <Link  to={`/${item.type}s/${item.id}`}  className="col-3 text-decoration-none" onClick={this.props.toggleCart}>
                                                <img src={item.image} className="img-cart" alt={item.name}/>
                                            </Link>
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
                                
                                <div className="ms-2">
                                    <div className="row">
                                        <div className="col-12 fs-4 fw-bold">Subtotal</div>
                                        <div className="col-12 fs-5">${this.props.cartItems.reduce((a, c) => a + c.qty * c.price, 0).toFixed(2)}</div>
                                    </div>
                                </div>
                                   
                                <hr></hr>
                                <div className="d-flex justify-content-center mb-3">                    
                                    <Link className="w-100 text-center" to="/cart"><button onClick={this.props.toggleCart} type="button" className="btn btn-danger w-50">View cart</button></Link>     
                                </div> 
                            </div>}  
                            
                    </div>      
                </Modal>
                <Modal isOpen={this.state.isLoginOpen} fade={false} toggle={this.toggleAuth} contentClassName="custom-modal-style">
                    <div className="modal-header">
                        <button className="btn btn-close text-white col-sm-2" type="button" onClick={this.toggleAuth}></button>
                    </div>
                    <div className="modal-body">
                        <div className="container">
                            <div className={this.state.isOpenSignUp}>
                                <div className="row row-content">
                                    <h1 className="text-center">Sign Up</h1>
                                    <p className="text-center"><br></br>Alread a member?<span role="button" onClick={this.toggleAuthFormType} className="text-danger"> Log In</span></p>
                                </div>
                            </div>
                            <div className={this.state.isOpenSignIn}>
                                <div className="row row-content">
                                    <h1 className="text-center">Sign In</h1>
                                    <p className="text-center"><br></br>New to this site?<span role="button" onClick={this.toggleAuthFormType} className="text-danger"> Sign Up</span></p>
                                </div >
                            </div>
                            <div className="row row-content">
                                <form onSubmit = {this.handleSignUp} className={this.state.isOpenSignUp}>
                                    <div className="offset-1 mb-3 col-10 offset-md-4 col-md-4">
                                        <label for="username1">Username</label>
                                        <Input type="text" id="username1" name="username1" innerRef={(input) => this.username1 = input}></Input>
                                    </div>
                                    <div className="offset-1 mb-3 col-10 offset-md-4 col-md-4">
                                        <label for="password1">Password</label>
                                        <Input type="text" id="password1" name="password1" innerRef={(input) => this.password1 = input}></Input>
                                    </div>
                                   
                                        <div className="offset-1 col-10 d-grid gap-2 offset-md-4 col-md-4">
                                            <button type="submit" value="submit" className="btn btn-warning text-white">Sign Up</button>
                                        </div>
                                    
                                </form>
                                <form onSubmit = {this.handleSignIn} className={this.state.isOpenSignIn}>
                                    <div className="offset-1 mb-3 col-10 offset-md-4 col-md-4">
                                        <label for="username">Username</label>
                                        <Input type="text" id="username" name="username" innerRef={(input) => this.username = input}></Input>
                                    </div>
                                    <div className="offset-1 mb-3 col-10 offset-md-4 col-md-4">
                                        <label for="password">Password</label>
                                        <Input type="text" id="password" name="password" innerRef={(input) => this.password = input}></Input>
                                    </div>
                                        <div className="offset-1 col-10 d-grid gap-2 offset-md-4 col-md-4">
                                            <button type="submit" value="submit" className="btn btn-warning text-white">Sign In</button>
                                        </div>
                                    
                                </form>
                            </div>
                        </div>
                    </div>
                </Modal>
                <Modal isOpen={this.state.isNavOpen && this.state.width < 768} modalClassName="right" toggle={this.toggleNav} contentClassName="pe-4 ps-5 pt-3" className="mt-0">
                    <Nav navbar>
                        <NavItem className="text-end">
                            <button className="btn btn-close text-white offset-9 col-sm-2" type="button" onClick={this.toggleNav}></button>
                        </NavItem>
                        <NavItem className="mt-4 mb-3 text-end">
                            <button type="button" className="btn p-0" onClick={this.toggleAuth}><span className="fa fa-user-circle-o fa-lg"></span>&emsp;Log In</button>
                        </NavItem>
                        <NavItem>
                            <NavLink onClick={this.toggleNav} className="nav-link text-end" to='/home'>Home</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink onClick={this.toggleNav} className="nav-link text-end" to='/about'>About</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink onClick={this.toggleNav} className="nav-link text-end" to='/cheeses'>Cheese</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink onClick={this.toggleNav} className="nav-link text-end" to='/meats'>Meats</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink onClick={this.toggleNav} className="nav-link text-end" to='/provisions'>Provisions</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="nav-link text-end" to='/findus'>Find us</NavLink>
                        </NavItem>
                    </Nav>
                </Modal>
            </React.Fragment>
        )
    }
}

export default Header;