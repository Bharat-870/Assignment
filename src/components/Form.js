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
        if (!values.phonenumber) {
            errors.phonenumber = 'Mobile Number is required!';
        } else if (values.phonenumber.length < 10) {
            errors.phonenumber = 'Please enter a valid mobile number'
        } else if (values.phonenumber.length >10) {
            errors.phonenumber = 'Please enter a valid mobile number'
        }
        if (!values.username) {
            errors.username = 'User Name is required!';
        } else if (values.username.length < 3 ) {
            // || !re.test(values.username)
            errors.username = 'Please enter a valid name'
        }
        if (!values.email) {
            errors.email = 'E-mail is required!';
        } else if (!regex.test(values.email)) {
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
                    <p id='formHeading' className='clr'>Book a Free Demo Class</p>
                    <p id='warning' className='clr'>Limited Seats only!</p>

                    {/* <label className='clr' id='floatingLabel'>Mobile Number</label> */}
                    <input className='clr' type="tel" name='phonenumber' autoComplete='off' placeholder='Enter Mobile Number' id="mobileNumber" value={formValues.phonenumber} onChange={handleChange} />
                    <p className='clr' id='errormsg'>{ formErrors.phonenumber }</p>
                    <br></br>
                    {/* <label>Mobile Number</label> */}
                    <input className='clr' type="text" name='username' autoComplete='off' placeholder='Enter Full Name' id="name" value={formValues.username} onChange={handleChange} />
                    <p className='clr' id='errormsg'>{ formErrors.username }</p>
                    <br></br>
                    {/* <label>Mobile Number</label> */}
                    <input className='clr' type="text" name='email' autoComplete='off' placeholder='Enter E-mail ID' id="email" value={formValues.email} onChange={handleChange} />
                    <p className='clr' id='errormsg'>{ formErrors.email }</p>
                    <br></br>
                    <label id='thirdLine' className='clr'>What describes you best?</label>
                    <br></br>
                    <select required className='clr' autoComplete='off' placeholder='Select options' id="selectOption">
                        <option id='entries' className='clr' value="" disabled selected hidden>Select option</option>
                        <option id='entries' className='clr' value="College Student">College Student</option>
                        <option id='entries' className='clr' value="Working Professional">Working Professional</option>
                        <option id='entries' className='clr' value="Full time aspirant">Full time aspirant</option>
                        <option id='entries' className='clr' value="Other">Other</option>
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
                    <p className='clr' id='lastLine'>By clicking 'Submit' button,you explicitly solicit a call &<br/> email from uFaber</p>
                </form>
            </div>
        </div>
    )
}

export default Form
