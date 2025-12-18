import './Landingpage.css'
import Logo from '../../assets/Icon/Navlogo.svg?react'
import Facebook from '../../assets/Icon/footerfb.svg?react'
import Twiitter from '../../assets/Icon/footertwit.svg?react'
import Footerimg1 from '../../assets/Icon/footerimg1.svg?react'
import Footerimg2 from '../../assets/Icon/footerimg2.svg?react'
import Footerimg3 from '../../assets/Icon/footerimg3.svg?react'
import Footerimg4 from '../../assets/Icon/footerimg4.svg?react'
import Footerimg5 from '../../assets/Icon/footerimg5.svg?react'
import Footerimg6 from '../../assets/Icon/footerimg6.svg?react'
import Footerlocation from '../../assets/Icon/footerlocation.svg?react'
import Footerphone from '../../assets/Icon/phone.svg?react'
import Footermail from '../../assets/Icon/mail.svg?react'
import Footerright from '../../assets/Icon/footerright.svg?react'
import Instagram from '../../assets/Icon/instagram.svg?react'
import Pinterest from '../../assets/Icon/pinterest.svg?react'









export default function Landing() {
    return (
        <section className='footer'>
            <div class="footer-top">
                
                    <div className='footerdivider'>
                        <div className='footerlocation'>
                            <div class="icon-circle">
                                <Footerlocation className='footerlocationimg'></Footerlocation>

                            </div>
                            <div>

                                <span>Address:</span><br />
                                1925 Boggess Street
                            </div>
                        </div>
                    </div>
                    <div className='footerdivider'>
                        <div className='footerlocation'>
                            <div class="icon-circle">
                                <Footerphone className='footerlocationimg'></Footerphone>
                            </div>
                            <div>
                                <span>Phone:</span><br />
                                (00) 875 784 568
                            </div>
                        </div>
                    </div>
                    <div className='footerdivider-location'>
                        <div className='footerlocation'>
                            <div class="icon-circle">
                                <Footermail className='footerlocationimg'></Footermail>
                            </div>
                            <div>
                                <span>Email:</span><br />
                                info@gmail.com
                            </div>
                        </div>
                    </div>
                
            </div>

            <div className='footer-middle'>
                <div>
                    <div className='footer-firsttext'>

                        <Logo className='footerlogo'></Logo>
                        <p>
                            Interdum velit laoreet id donec ultrices tincidunt arcu.
                            Tincidunt tortor aliqua mfacilisi cras fermentum odio eu.
                        </p>
                    </div>



                    <div class="socials">
                        <Facebook></Facebook>
                        <Instagram></Instagram>
                        <Pinterest></Pinterest>
                        <Twiitter></Twiitter>

                    
                    </div>
                </div>

                <div className='service__container'>

                    <h4>Our Services</h4>

                    <div>
                        <div className='galleryimg' ><Footerright></Footerright> <p>Web Development</p></div>
                        <div className='galleryimg' ><Footerright></Footerright>  <p>UI/UX Design</p></div>
                        <div className='galleryimg' ><Footerright></Footerright>  <p>Management</p></div>
                        <div className='galleryimg'><Footerright></Footerright>   <p>Digital Marketing</p></div>
                        <div className='galleryimg'><Footerright></Footerright>   <p>Blog News</p></div>


                    </div>
                </div>


                <div>
                    <h4>Gallery</h4>
                    <div className="gallery">

                        <div ><Footerimg1 className='footerimg'></Footerimg1></div>
                        <div ><Footerimg2 className='footerimg'></Footerimg2></div>
                        <div><Footerimg3 className='footerimg'></Footerimg3></div>
                        <div><Footerimg4 className='footerimg' ></Footerimg4></div>
                        <div><Footerimg5 className='footerimg'></Footerimg5></div>
                        <div ><Footerimg6 className='footerimg'></Footerimg6></div>

                    </div>
                </div>


                <div>
                    <div class="subscribe">
                        <div><h4>Subscribe</h4></div>

                        <div><input placeholder='Enter your name' className='footer__input'></input></div>

                        <div>
                            <button className='footer__btn'>SUBSCRIBE NOW</button>
                        </div>
                    </div>
                </div>

            </div>


            <div class="footer-bottom">
                Copyright © 2024 <span>edunity</span> || All Rights Reserved
            </div>









        </section>

    )
}


























