import { Link } from 'react-router-dom'

function RenaderCard({meats,onAdd,toggleCart}){
    if(meats!=null){
        return(
            <div  className="row mb-5 ">
                {meats.map((meat)=>{
                    return(
                        <div className="col-12 col-lg-3 mt-5">
                            <Link to={`/meats/${meat.id}`} key={meat.sku} className="text-decoration-none text-dark">
                                <div className="position-relative">
                                    <img src={meat.image} className="img-fluid-custom-m hover-scale" alt={meat.name}></img>
                                    <div className="mt-2">{meat.name}</div>
                                    <div className="mt-2">
                                        {meat.sale ? <span><span className="text-decoration-line-through">${meat.oldPrice}</span>&ensp;</span> : null}${meat.price}
                                    </div>
                                    {meat.sale ? <div className="label">Sale</div> : null}
                                    {meat.new ? <div className="label">New</div> : null}
                                </div>
                            </Link>
                            <button onClick={() => {onAdd(meat);toggleCart()}} className="btn-dark w-100 mt-2">Add to Cart</button>
                        </div>
                    )
                })}
                
            </div>
        )
    }else{
        return(
            <div></div>
        )
    }
}

function Meats (props){
    const {onAdd,meats,toggleCart} = props
    
        return(
            <div>

                <div className="container">
                    <div className="row">
                        <div className="header-component col-lg-6 offset-lg-3 col-10 offset-1">
                            <div className="header-content text-center pt-3 pb-3">GOOD TO EAT</div>
                        </div>
                        <div className="slogan">- SHOP WITH US -</div>
                    </div>
                    <div className="row">
                        <div className="description col-lg-6 offset-lg-3 col-10 offset-1">
                            <div className="desc-title">Meat</div>
                            <div className="desc-content">I'm a paragraph. Click here to add your own text and edit me. I’m a great place for you to tell a story and let your users know a little more about you</div>
                        </div>
                    </div>
                    <RenaderCard meats={meats} onAdd = {onAdd} toggleCart={toggleCart}></RenaderCard>
                </div>
            </div>
            
        )
}

export default Meats;