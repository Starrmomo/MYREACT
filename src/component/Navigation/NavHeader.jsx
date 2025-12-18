import './NavHeader.css'
import Clock from '../../assets/Icon/clock.svg?react'
import Location from '../../assets/Icon/location.svg?react'
import Usa from '../../assets/Icon/usa.svg?react'
import Downarror from '../../assets/Icon/downarrow.svg?react'
import Facebook from '../../assets/Icon/facebook.svg?react'
import Twiitter from '../../assets/Icon/twitter.svg?react'
import S from '../../assets/Icon/s.svg?react'
import Linkedin from '../../assets/Icon/linkedin.svg?react'



export default function NavHeader() {

    return (
        <div className='Nav__Container'>
            <div className='Navtext'>
                <div className='first'>
                    <div className='clocktext' >
                        <Clock className='clock' ></Clock>
                        <h5>Working : Monday -Friday.9:am - 5:Pm</h5>

                    </div>

                    <div className='clocktext2'>
                        <Location></Location>
                        <h5>Hudson, Wisconsin(WI), 54016</h5>

                    </div>
                </div>
                <div className='second'>
                    <div className='usatext'>
                        <Usa></Usa>
                        <h5>English</h5>
                        <Downarror></Downarror>
                    </div>

                    <div className='appicon'>
                        <Facebook></Facebook>
                        <Twiitter></Twiitter>
                        <S></S>
                        <Linkedin></Linkedin>
                    </div>
                    
                </div>
            </div >
        </div>

    )
}