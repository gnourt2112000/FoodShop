import { Component } from 'react';
import Header from './HeaderComponent';
import {Switch,Route,Redirect,withRouter} from 'react-router-dom';
import { actions } from 'react-redux-form';
import { connect } from 'react-redux';
import Cart from './CartComponent';
import Footer from './FooterComponents';
import Home from './HomeComponent';
import { PRODUCTS } from '../shared/products';
import Cheeses from './CheesesComponent';
import Meats from './MeatsComponent';
import Provisions from './ProvisionsComponent';
import Detail from './DetailComponent';
import About from './AboutComponent';
import Findus from './FindusComponent';
import { postFeedback } from '../redux/ActionCreators';

const mapDispatchToProps = dispatch =>({
    resetFeedbackForm:()=>{dispatch(actions.reset('feedback'))},
    postFeedback: (feedback)=> dispatch(postFeedback(feedback))
})

class Main extends Component{
    constructor(props){
        super(props)
        this.state={
            products:PRODUCTS,
            cartItems:[],
            isCartOpen:false,
            iconControlCart:"carousel-control-prev-icon",
        }
    }

    componentDidMount(){

    }

    onAdd = (item) =>{
        const exist = this.state.cartItems.find((x) => x.id === item.id)
        if(exist){
            this.setState({
                cartItems: this.state.cartItems.map((x)=> x.id === item.id ? {...exist, qty:exist.qty+1} : x)
            })
        }else{
            this.setState({
                cartItems:[...this.state.cartItems,{...item,qty:1}]
            })    
        }
    }

    onAddItems = (item,quantity) =>{
        if(quantity > 0){
            const exist = this.state.cartItems.find((x) => x.id === item.id)
        if(exist){
            this.setState({
                cartItems: this.state.cartItems.map((x)=> x.id === item.id ? {...exist, qty:exist.qty+quantity} : x)
            })
        }else{
            this.setState({
                cartItems:[...this.state.cartItems,{...item,qty:quantity}]
            })    
        }
        }
    }

    toggleCart = () =>{
        if(this.state.iconControlCart === "carousel-control-next-icon"){
            this.setState({
                iconControlCart:"carousel-control-prev-icon",
                isCartOpen:!this.state.isCartOpen
            })

        }else if(this.state.iconControlCart === "carousel-control-prev-icon" ){
            this.setState({
                iconControlCart:"carousel-control-next-icon",
                isCartOpen:!this.state.isCartOpen
            })
        }
        
    }

    onRemove = (item) =>{
        const exist = this.state.cartItems.find((x) => x.id === item.id)
        if(exist.qty === 1){
            this.setState({
                cartItems: this.state.cartItems.filter((x) => x.id !== item.id)
            })
        }else{
            this.setState({
                cartItems: this.state.cartItems.map((x) => x.id === item.id ? {...exist,qty:exist.qty -1 } : x)
            })
        }
    }



    onDelete = (item) =>{
        this.setState({
            cartItems: this.state.cartItems.filter((x) => x.id !== item.id)
        })
    }


    

    render(){
        const HomePage = ()=>{
            return(
                <Home cheese = {this.state.products.filter((item)=>item.featured && item.type==="cheese")[0]}
                      meat = {this.state.products.filter((item)=>item.featured && item.type==="meat")[0]}
                      provision = {this.state.products.filter((item)=>item.featured && item.type==="provision")[0]}
                ></Home>
            )
        }

        const ProductWithId = ({match}) => {
            return(
                <Detail product={this.state.products.filter((product)=> product.id === parseInt(match.params.productId,10))[0]} 
                        onAddItems={this.onAddItems}        
                        parent={match.params.parent}
                ></Detail>
            )
        }


        return(
            <div className="App">
                <Header iconControlCart={this.state.iconControlCart} toggleCart={this.toggleCart} isCartOpen={this.state.isCartOpen} onAdd = {this.onAdd} onRemove={this.onRemove} onDelete={this.onDelete} cartItems={this.state.cartItems}></Header>
                <Switch>
                    <Route exact path='/home' component={HomePage}></Route>
                    <Route exact path='/about' component={()=><About meat = {this.state.products.filter((item)=>item.featured && item.type==="meat")[0]} />}></Route>
                    <Route exact path='/cheeses' component={()=><Cheeses toggleCart={this.toggleCart} onAdd={this.onAdd} cheeses={this.state.products.filter((item)=>item.type==="cheese")}></Cheeses>} ></Route>
                    <Route exact path='/meats' component={()=><Meats toggleCart={this.toggleCart} onAdd={this.onAdd} meats={this.state.products.filter((item)=>item.type==="meat")}></Meats>} ></Route>
                    <Route exact path='/provisions' component={()=><Provisions toggleCart={this.toggleCart} onAdd={this.onAdd} provisions={this.state.products.filter((item)=>item.type==="provision")}></Provisions>} ></Route>
                    <Route exact path ='/cart' component={()=> <Cart onAdd = {this.onAdd} onRemove={this.onRemove} onDelete={this.onDelete} cartItems={this.state.cartItems}></Cart>}></Route>
                    <Route exact path='/findus' component={()=> <Findus postFeedback={this.props.postFeedback} resetFeedbackForm={this.props.resetFeedbackForm}/>}></Route>
                    <Route path='/:parent/:productId'component={ProductWithId}></Route>
                    
                    <Redirect to='/home'></Redirect>
                </Switch>
                <Footer></Footer>
            </div>
        )
    }
}

export default withRouter(connect(null,mapDispatchToProps)(Main))