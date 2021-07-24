import { Component } from "react";
import { Link } from "react-router-dom";

function SlideCenter(){
    return(
        <div>
            <div className="slide-center d-none d-md-block">
                <div className="slide-center-content">
                    <div className="slide-center-header d-flex align-items-center justify-content-center">
                        <p className="m-0">GOOD TO EAT</p>
                    </div>
                    <div className="slide-center-body">
                        <div className="row row-content">
                            <div className="col-md-8 p-0">
                                <div className="row row-content">
                                    <div className="col-md-7 d-flex align-items-center justify-content-center border-right-dark">
                                        <div>Savouries and sweets for the gourmet in all of us</div>
                                    </div>
                                    <div className="col-md-5 d-flex align-items-center justify-content-center border-right-dark">
                                        <img src="../assets/images/pig.png" className="img-fluid" alt="pig"></img>
                                    </div>
                                </div>
                            </div>
                            <Link to="/cheeses" className="start-shop col-md-4 d-flex align-items-center justify-content-center">
                                <span>START SHOPPING &gt;</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="slide-center-m d-block d-md-none">
                <div className="slide-center-content">
                    <div className="slide-center-header-m d-flex align-items-center justify-content-center">
                        <p className="m-0">GOOD TO EAT</p>
                    </div>
                    <div className="slide-center-body-m">
                        <div className="row row-content">
                            <div className="col-12">
                                <div className="row row-content">
                                    <div className="col-12 d-flex align-items-center justify-content-center">
                                        <div className="text-center">Savouries and sweets for the gourmet in all of us</div>
                                    </div>
                                    <div className="col-12 d-flex align-items-center justify-content-center">
                                        <img src="../assets/images/pig.png" className="img-fluid" alt="pig"></img>
                                    </div>
                                </div>
                            </div>
                            <Link to='/cheeses' className="col-12 start-shop d-flex align-items-center justify-content-center border-top-dark">
                                <span>START SHOPPING &gt;</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}



function RenderCard({item,des}){
    var card = document.getElementById(des);
    var info = document.getElementById(item.name)
        if(card){
            card.addEventListener("mouseover",function(){
                if(info)
                    info.classList.add("d-none");
                var detail = document.getElementById(item.sku)
                if(detail)
                    detail.classList.remove("d-none")
            })
            card.addEventListener("mouseout",function(){
                if(info)
                    info.classList.remove("d-none");
                var detail = document.getElementById(item.sku)
                if(detail)
                    detail.classList.add("d-none")
            })
        }
    return(
            <Link to={des} className="render-card" id={des}>
                <img src={item.image} alt={item.name} className="img-fluid-custom d-none d-lg-block"></img>
                <img src={item.image} alt={item.name} className="img-fluid-custom-m d-block d-lg-none"></img>
                <div id={item.name} className="text-center p-3">
                    <p className="" >{item.name}</p>
                    <p className="" >${item.price}</p>
                </div>
                <div id={item.sku} className="view-details text-center d-flex justify-content-center d-none">
                    <div className="d-flex align-items-center">
                        <button className="btn-dark">View Details</button>
                    </div>
                </div>
            </Link>
    )
}


class Home extends Component {
    constructor(props){
        super(props);
        
        this.state={
            width:0,
            imageWidth:"w-100",
            classSlide1:"carousel-item active",
            classSlide2:"carousel-item",
            classSlide3:"carousel-item",
            classSlide4:"carousel-item"
        }

        window.addEventListener("resize", this.update);
        
    }

    componentDidMount() {
        this.update();
        this.showSlide();
    }

    
    update = () => {
        if(window.innerWidth > 576){
            this.setState({
                imageWidth:"w-100-custom"
            })
        }else{
            console.log(window.innerWidth)
            this.setState({
                imageWidth:"w-100-m"    
            })
        }
    }


    toggleSlideNext = () =>{
        if(this.state.classSlide1 === "carousel-item active"){
            this.setState({
                classSlide2:"carousel-item active",
                classSlide1:"carousel-item"
            })
        }else if(this.state.classSlide2 === "carousel-item active"){
            this.setState({
                classSlide3:"carousel-item active",
                classSlide2:"carousel-item"
            })
        }else if(this.state.classSlide3 === "carousel-item active"){
            this.setState({
                classSlide4:"carousel-item active",
                classSlide3:"carousel-item"
            })
        }else if(this.state.classSlide4 === "carousel-item active"){
            this.setState({
                classSlide1:"carousel-item active",
                classSlide4:"carousel-item"
            })
        }
    }

    showSlide=()=>{
        this.toggleSlideNext();
        setTimeout(this.showSlide,5000)
    }
    toggleSlidePrev = () =>{
        if(this.state.classSlide1 === "carousel-item active"){
            this.setState({
                classSlide4:"carousel-item active",
                classSlide1:"carousel-item"
            })
        }
        else if(this.state.classSlide2 === "carousel-item active"){
            this.setState({
                classSlide1:"carousel-item active",
                classSlide2:"carousel-item"
            })
        }
        else if(this.state.classSlide3 === "carousel-item active"){
            this.setState({
                classSlide2:"carousel-item active",
                classSlide3:"carousel-item"
            })
        }
        else if(this.state.classSlide4 === "carousel-item active"){
            this.setState({
                classSlide3:"carousel-item active",
                classSlide4:"carousel-item"
            })
        }
    }




    render(){
        
        return(
            <div>
                <SlideCenter/>
                <div className="carousel slide">
                    <div className="carousel-inner">
                        <div className={this.state.classSlide1}>
                            <img src="../assets/images/fomat.png" className={this.state.imageWidth} alt="fomat"/>
                            
                        </div>
                        <div className={this.state.classSlide2}>
                            <img src="../assets/images/meat.png" className={this.state.imageWidth} alt="meat"/>
                        </div>
                        <div className={this.state.classSlide3}>
                            <img src="../assets/images/meat1.png" className={this.state.imageWidth} alt="meat1"/>
                        </div>
                        <div className={this.state.classSlide4}>
                            <img src="../assets/images/asparagus.png" className={this.state.imageWidth} alt="asparagus"/>
                        </div>
                    </div>
                    <button onClick={this.toggleSlidePrev} className="carousel-control-prev ms-0" type="button" >
                        <span className="carousel-control-prev-icon"></span>
                    </button>
                    <button onClick={this.toggleSlideNext} className="carousel-control-next " type="button" >
                        <span className="carousel-control-next-icon"></span>
                    </button>
                </div>
                <div className="container mt-5">
                    <div className="row row-content text-center">
                        <p>Enjoy Our Special Recommendations</p>
                    </div>
                    <div className="row row-content mt-5">
                        <div className="col-12 col-md-4 mb-5">
                            <RenderCard item={this.props.cheese} des={`/cheeses/${this.props.cheese.id}`}></RenderCard>
                        </div>
                        <div className="col-12 col-md-4 mb-5">
                            <RenderCard item={this.props.meat} des={`/meats/${this.props.meat.id}`}></RenderCard>
                        </div>
                        <div className="col-12 col-md-4 mb-5">
                            <RenderCard item={this.props.provision} des={`/provisions/${this.props.provision.id}`}></RenderCard>
                        </div>
                    </div>
                </div>
            </div>
        
       )
    }
}

export default Home;