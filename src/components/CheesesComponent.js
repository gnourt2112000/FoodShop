import { Link } from 'react-router-dom'

function RenaderCard({cheeses,onAdd,toggleCart}){
    if(cheeses!=null){
        return(
            <div className="row mb-5">
                {cheeses.map((cheese)=>{
                    return(
                        <div className="col-12 col-lg-3 mt-5">
                            <Link to={`/cheeses/${cheese.id}`}  className="text-decoration-none text-dark" key={cheese.sku}>
                            
                            <div className="position-relative">
                                <img src={cheese.image} className="img-fluid-custom-m hover-scale" alt={cheese.name}></img>
                                <div className="mt-2">{cheese.name}</div>
                                <div className="mt-2">
                                    {cheese.sale ? <span><span className="text-decoration-line-through">${cheese.oldPrice}</span>&ensp;</span> : null}${cheese.price}
                                </div>
                                
                                {cheese.sale ? <div className="label">Sale</div> : null}
                                {cheese.new ? <div className="label">New</div> : null}
                            </div>
                            </Link>
                            <button onClick={() => {toggleCart(cheese); onAdd(cheese)}} className="btn-dark w-100 mt-2">Add to Cart</button>
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

function Cheeses (props){
    const {onAdd,cheeses,toggleCart} = props
    
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
                            <div className="desc-title">Cheese</div>
                            <div className="desc-content">I'm a paragraph. Click here to add your own text and edit me. I’m a great place for you to tell a story and let your users know a little more about you</div>
                        </div>
                    </div>
                    <RenaderCard cheeses={cheeses} onAdd = {onAdd} toggleCart={toggleCart}></RenaderCard>
                </div>
            </div>
            
        )
}

export default Cheeses;