import React, {useState, useEffect, useHistory} from 'react'
import './Form.css'
import logo from './Picture.png'
import { Link } from 'react-router-dom'

function Form() {

    const initialValues = {phonenumber:'', username:'', email:''};
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues ( {...formValues, [name]:value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors( Validate(formValues) );
        setIsSubmit(true);
    }

    useEffect ( () => {
        console.log(formErrors);
        if (Object.keys (formErrors).length === 0 && isSubmit) {
            console.log(formValues);
        }
    }, [formErrors]);

    const Validate = (values) => {
        const errors = {};
        //const re = /^\S*$/;
        const regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        if (!values.phonenumber || values.phonenumber.length < 10) {
            errors.phonenumber = 'Please enter a valid mobile number'
        } else if (values.phonenumber.length >10) {
            errors.phonenumber = 'Please enter a valid mobile number'
        }
        if (!values.username || values.username.length < 3 ) {
            // || !re.test(values.username)
            errors.username = 'Please enter a valid name'
        }
        if (!values.email || !regex.test(values.email)) {
            errors.email = 'Please enter a valid e-mail id'
        }
        return errors;
    }

    return (
        <div id='main'>
            <div id='firstDiv'>
                <div>
                    <p id='firstLine'><span id='firstWord'>UPSC</span> PATHSHALA</p>
                    <br></br>
                    <p id='secondLine'>Best Online Coaching <br/>for UPSC Preparation</p>
                </div>
                <div className='container'>
                    <img id='firstImg' src={logo} alt='Logo'/>
                    <p className='centered'>
                        Thousands of students from all over India<br/>trust UPSC Pathshala for IAS preparation.<br/>Now, it's <span id='secondWord'>your</span> chance to clear UPSC!
                    </p>
                </div>
            </div>
            
            <div id='secondDiv'>

                <form id='form' onSubmit={handleSubmit}>
                    <p className='formHeading' id='clr'>Book a Free Demo Class</p>
                    <p className='warning' id='clr'>Limited Seats only!</p>

                    {/* <label className='clr' id='floatingLabel'>Mobile Number</label> */}
                    <input id='clr' type="tel" name='phonenumber' autoComplete='off' placeholder='Enter Mobile Number' className="mobileNumber" value={formValues.phonenumber} onChange={handleChange} />
                    <span className='plcehldr'>Mobile Number</span>
                    <br/>
                    <p id='clr' className='errormsg'>{ formErrors.phonenumber }</p>
                    <br></br>
                    {/* <label>Mobile Number</label> */}
                    <input id='clr' type="text" name='username' placeholder='Enter Full Name' autoComplete='off' className="name" value={formValues.username} onChange={handleChange} />
                    <span className='plcehldr'> Full Name </span>
                    <br/>
                    <p id='clr' className='errormsg'>{ formErrors.username }</p>
                    <br></br>
                    {/* <label>Mobile Number</label> */}
                    <input id='clr' type="text" name='email' autoComplete='off' placeholder='Enter E-mail ID' className="email" value={formValues.email} onChange={handleChange} />
                    <span className='plcehldr'>E-mail ID</span>
                    <br/>
                    <p id='clr' className='errormsg'>{ formErrors.email }</p>
                    <br/>
                    <label className='thirdLine' id='clr'>What describes you best?</label>
                    <select required id='clr' autoComplete='off' placeholder='Select options' className="selectOption">
                        <option className='entries' id='clr' value="" disabled selected hidden>Select option</option>
                        <option className='entries' id='clr' value="College Student">College Student</option>
                        <option className='entries' id='clr' value="Working Professional">Working Professional</option>
                        <option className='entries' id='clr' value="Full time aspirant">Full time aspirant</option>
                        <option className='entries' id='clr' value="Other">Other</option>
                    </select>
                    <br></br>   
                    {/* <Link to={'/nextpage'}> */}
                    <button id='button' type='submit'>Submit</button>

                    {Object.keys (formErrors).length === 0 && isSubmit ? ( 
                        <Link to={'/nextpage'}>
                            <button id='button' type='submit'>Proceed</button>
                        </Link>  ):(
                        <pre hidden>{ JSON.stringify(formValues, undefined, 2) }</pre>)
                    }
                    {/* </Link>  */}
                    <br></br>
                    <p id='clr' className='lastLine'>By clicking 'Submit' button,you explicitly solicit a call &<br/> email from uFaber</p>
                </form>
            </div>
        </div>
    )
}

export default Form
