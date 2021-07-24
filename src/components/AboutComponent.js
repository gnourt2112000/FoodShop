import { Link } from "react-router-dom"
export default function About(props){
    return(
        <div>

                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 offset-lg-3 col-10 offset-1">
                            <div className="header-component">
                                <div className="header-content text-center p-3">GOOD TO EAT</div>
                                <div className="text-center header-subtitle p-2">Offering speciality foods since 2023</div>
                            </div>
                            <div className="slogan">- ABOUT US -</div>
                            <img className="w-100" src={props.meat.image} alt={props.meat.name}></img>
                            <p className="text-center mt-5 mb-5">
                                I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page. I’m a great place for you to tell a story and let your users know a little more about you.
                                <br></br>At Wix we’re passionate about making templates that allow you to build fabulous websites and it’s all thanks to the support and feedback from users like you! Keep up to date with New Releases and what’s Coming Soon in Wixellaneous in Support. Feel free to tell us what you think and give us feedback in the Wix Forum. If you’d like to benefit from a professional designer’s touch, head to the Wix Arena and connect with one of our Wix Pro designers. Or if you need more help you can simply type your questions into the Support Forum and get instant answers. To keep up to date with everything Wix, including tips and things we think are cool, just head to the Wix Blog!

                            </p>
                            <div className="row mb-5">
                                <Link to="/cheeses" className="col-md-4 col-12 d-grid gap-2 text-decoration-none mb-4">
                                    <button className="btn-outline-dark p-2 fs-4 fst-italic">Shop Cheeses</button>    
                                </Link>  
                                <Link to="/meats" className="col-md-4 col-12 d-grid gap-2 text-decoration-none mb-4">
                                    <button className="btn-outline-dark p-2 fs-4 fst-italic">Shop Meats</button>    
                                </Link>
                                <Link to="/provisions" className="col-md-4 col-12 d-grid gap-2 text-decoration-none mb-4">
                                    <button className="btn-outline-dark p-2 fs-4 fst-italic">Shop Provisions</button>    
                                </Link>   
                            </div> 
                        </div>   
                    </div>
                </div>

        </div>
    )
}