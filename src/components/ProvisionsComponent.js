import { Link } from 'react-router-dom'

function RenaderCard({provisions,onAdd,toggleCart}){
    if(provisions!=null){
        return(
            <div className="row mb-5 ">
                {provisions.map((provision)=>{
                    return(
                        <div className="col-12 col-lg-3 mt-5">
                            <Link  to={`/provisions/${provision.id}`}  key={provision.sku} className="text-decoration-none text-dark">
                                <div className="position-relative">
                                    <img src={provision.image} className="img-fluid-custom-m hover-scale" alt={provision.name}></img>
                                    <div className="mt-2">{provision.name}</div>
                                    <div className="mt-2">
                                        {provision.sale ? <span><span className="text-decoration-line-through">${provision.oldPrice}</span>&ensp;</span> : null}${provision.price}
                                    </div>
                                    {provision.sale ? <div className="label">Sale</div> : null}
                                    {provision.new ? <div className="label">New</div> : null}
                                </div>
                            </Link>
                            <button onClick={() => {onAdd(provision);toggleCart()}} className="btn-dark w-100 mt-2">Add to Cart</button>
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

function Provisions (props){
    const {onAdd,provisions,toggleCart} = props
    
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
                            <div className="desc-title">Provisions</div>
                            <div className="desc-content">I'm a paragraph. Click here to add your own text and edit me. I’m a great place for you to tell a story and let your users know a little more about you</div>
                        </div>
                    </div>
                    <RenaderCard provisions={provisions} onAdd = {onAdd} toggleCart={toggleCart}></RenaderCard>
                </div>
            </div>
            
        )
}

export default Provisions;