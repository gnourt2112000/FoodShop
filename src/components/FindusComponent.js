import {Control,Form,Errors} from 'react-redux-form';

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);
const validEmail = (val) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);

export default function Findus(props){
    
    const handleSubmit = (values) =>{
        const newFeedback = {
            name: values.name,
            email: values.email,
            message: values.message,
        }
        props.postFeedback(newFeedback);
        console.log('Current State is: '+ JSON.stringify(values));
        
        props.resetFeedbackForm();
    }
    return(
        <div>

                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 offset-lg-3 col-10 offset-1">
                            <div className="header-component">
                                <div className="header-content text-center p-3">GOOD TO EAT</div>
                                <div className="text-center header-subtitle p-2">Offering speciality foods since 2023</div>
                            </div>
                            <div className="slogan">- VISIT -</div>
                            <div className="fst-italic text-center">
                                232 Ke Ve Street, Thuy Phuong, Bac Tu liem, Ha Noi
                                <br></br>M-F:  8am - 8pm  /  Sat: 9am - 6pm  /  Closed Sunday
                            </div>
                            <div className="slogan">- CONTACT US -</div>
                            <div className="text-center fs-16px">
                                For questions about any of our products, or help with placing your order, don't hesitate to contact us:
                                <br></br>Email:  info@mysite.com  /  Phone:  123-456-7890
                            </div>
                            <div className="text-center fs-4 mt-3 mb-3">
                                <a className="text-dark" href="https://www.facebook.com/"><span className="fa fa-facebook p-2" ></span></a>
                                <a className="text-dark" href="https://github.com/gnourt2112000"><span className="fa fa-github p-2"></span></a>
                            </div>
                            
                            
                                <Form model="feedback" className="col-12  mt-3" onSubmit={(values) => handleSubmit(values)}>
                                    <div className="row mb-3">
                                        <div className="col-12">
                                            {/* eslint-disable-next-line */} 
                                            <Control.text model=".name" className="form-control" id="name" name="name" placeholder="Name"
                                                validators={{
                                                    required, minLength: minLength(3), maxLength: maxLength(15)
                                                }}
                                            />
                                            <Errors className="text-danger" model=".name" show="touched"
                                                messages={{
                                                    required:'Required! ',
                                                    minLength:'Must be greater than 2 characters',
                                                    maxLength:'Must be 15 characters or less'
                                                }}
                                            ></Errors>                               
                                        </div>
                                    </div>
                                
                                    <div className="row mb-3">
                                        <div className="col-12">
                                            {/* eslint-disable-next-line */} 
                                            <Control.text model=".email"  className="form-control" id="email" name="email" placeholder="Email"
                                                validators={{
                                                    required,
                                                    validEmail
                                                }} 
                                            />
                                            <Errors className="text-danger" model=".email" show="touched"
                                                messages={{
                                                    required:'Required! ',
                                                    validEmail:'Invalid Email Address'
                                                }}  
                                            ></Errors>
                                        </div>
                                    </div>
                                
                                    <div className="row mb-3">
                                        <div className="col-12">
                                            {/* eslint-disable-next-line */} 
                                            <Control.textarea model=".message" className="form-control" name="message" id="message" rows="6" placeholder="Type your message here..."></Control.textarea>
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <div className="offset-9 col-3 d-grid gap-2">
                                            <button type="submit" className="btn btn-danger">Submit</button>
                                        </div>
                                    </div>
                                </Form>
                            
                        </div>   
                    </div>
                </div>

        </div>
    )
}
