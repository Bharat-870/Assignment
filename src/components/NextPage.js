import React from 'react'
import './NextPage.css'
import logoOne from './pic1.png'
import logoTwo from './pic2.png'
import logoThree from './pic3.png'
import LogoFour from './pic4.png'
import LogoFive from './pic5.png'

function NextPage() {
    return (
        <div id='main-div'>
            <p id='para'>UPSC <span>PATHSHALA</span></p>
            <img id='first-Img' src={logoOne} alt='LogoOne' />
            <img id='secondImg' src={logoTwo} alt='LogoTwo' />
            <img id='thirdImg' src={logoThree} alt='LogoThree' />
            <img id='fourthImg' src={LogoFour} alt='LogoFour' />
            <img id='fifthImg' src={LogoFive} alt='LogoFive' />
        </div>
    )
}

export default NextPage
