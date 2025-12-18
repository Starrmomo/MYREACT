import './Home.css'
import NavHeader from '../../component/Navigation/NavHeader.jsx'
import Navbar from '../../component/Navlist/Navbar.jsx'
import Button from '../../component/Button/Button.jsx'

import Landingpage from '../../component/Landingpage/Landingpage.jsx'
import Video from '../../assets/Icon/videoicon.svg?react'
import Boyholding from '../../assets/Icon/boyholding.svg?react'
import Boybackground from '../../assets/Icon/boybackground.svg?react'
import Girlholding from '../../assets/Icon/girlholding.svg?react'
import Girlbackground from '../../assets/Icon/girlbackground.svg?react'
import Success from '../../assets/Icon/success.svg?react'
import Student from '../../assets/Icon/student.svg?react'
import Aboutus from '../../component/Aboutus/Aboutus.jsx'
import Happy from '../../assets/Icon/happy.svg?react'
import Smillingboy from '../../assets/Icon/smillingboy.svg?react'
import Girlwithglass from '../../assets/Icon/girlwithglass.svg?react'
import Background from '../../assets/Icon/background.svg?react'
import Totalteacher from '../../assets/Icon/totalteacher.svg?react'
import Totalstudent from '../../assets/Icon/totalstudent.svg?react'
import Totalclassroom from '../../assets/Icon/totalclassroom.svg?react'
import Bestaward from '../../assets/Icon/bestaward.svg?react'
import Girlwritting from '../../assets/Icon/girlwritting.svg?react'
import Kathy from '../../assets/Icon/kathyimg.svg?react'
import Elsie from '../../assets/Icon/elsieimg.svg?react'
import Teachercurry from '../../assets/Icon/teachercurry.svg?react'
import Teacherwill from '../../assets/Icon/teacherwill.svg?react'
import Teacherjim from '../../assets/Icon/teacherjimmy.svg?react'
import Teachermic from '../../assets/Icon/teachermicheal.svg?react'
import Girlwithpen from '../../assets/Icon/girlwithpen.svg?react'
import Kidinclass from '../../assets/Icon/kidinclass.svg?react'
import Kidwithgame from '../../assets/Icon/kidwithgame.svg?react'
import X from '../../assets/Icon/x.svg?react'
import Shine from '../../assets/Icon/shine.svg?react'
import Rough from '../../assets/Icon/roughorange.svg?react'
import Birds from '../../assets/Icon/birds.svg?react'
import Abc from '../../assets/Icon/abc.svg?react'
import House from '../../assets/Icon/house.svg?react'
import People from '../../assets/Icon/people.svg?react'
import Book from '../../assets/Icon/book.svg?react'
import Dot from '../../assets/Icon/dot.svg?react'
import Orangecheck from '../../assets/Icon/orangecheck.svg?react'
import Share from '../../assets/Icon/share.svg?react'
import Instructorleft from '../../assets/Icon/instructorleft.svg?react'
import Instructorright from '../../assets/Icon/instructorright.svg?react'

import Birdsright from '../../assets/Icon/birdiconright.svg?react'
import Dateblogimg from '../../assets/Icon/dateblogimg.svg?react'
import Commentblog from '../../assets/Icon/commentblog.svg?react'
import Halfcircle from '../../assets/Icon/halfcircle.svg?react'
import Rainbow from '../../assets/Icon/rainbow.svg?react'
import Car from '../../assets/Icon/car.svg?react'
import Splash from '../../assets/Icon/splash.svg?react'
// import X from '../../assets/Icon/x.svg?react'
// import X from '../../assets/Icon/x.svg?react'
// import X from '../../assets/Icon/x.svg?react'
// import X from '../../assets/Icon/x.svg?react'
export default function Home() {
    return (
        <main className='main'>
            <NavHeader></NavHeader>
            <Navbar></Navbar>

            <section className='welcome'>
                <Birds className='birds'></Birds>
                <div className='welcome__item'>
                    <div className='welcome__text'>

                        <div className='tee'>

                            <h1>The Best Place<br></br>
                                TO Learn and Play<br></br>
                                For Kids</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod<br></br>
                                tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                        <div className='textvideo'>
                            <button className='browse__btn'>Browse Courses</button>
                            <div className=' video__container'>
                                <Video className='video'></Video>
                            </div>
                            <a className='ANCHOR' href=''>Watch Now</a>

                        </div>
                        <Rough className='rough'></Rough>
                    </div>

                    <div className='backgroundimg__item'>
                        <div className='Bbackground'>
                            <Shine className='shine__icon'></Shine>
                            <div className='boybackground__container'>

                                <div className='boy__wrrapper'>
                                    <X className='x__icon'></X>


                                    <Boybackground className='boybackground'></Boybackground>

                                    <Boyholding className='boyholding'></Boyholding>
                                </div>
                                <div className='successicon'>
                                    <Success className='success'></Success>
                                </div>
                            </div>
                        </div>
                        <div className='Gbackground'>
                            <div className='girlbackground__container'>

                                <div className='girl__wrapper'>

                                    <Student className='student'></Student>

                                    <Girlbackground className='girlbackground'></Girlbackground>

                                    <Girlholding className='girlholding'></Girlholding>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section>
                <div className='landingitem'>
                    <div className='course__text'>
                        <Abc className='abc'></Abc>
                        <h5>START COURSE</h5>
                        <hp>Duis aute irure dolor reprehenderit in
                            voluptate velit esse cillum dolore fugiat
                            nulla pariatur. Excepteur</hp>
                    </div>
                    <div className='expert__text'>
                        <People className='people'></People>
                        <h5>EXPERT TEACHERS</h5>
                        <p>Duis aute irure dolor reprehenderit in
                            voluptate velit esse cillum dolore fugiat
                            nulla pariatur. Excepteur</p>
                    </div>
                    <div className='location__text'>
                        <House className='house'></House>
                        <h5>STRATEGI LOCATION</h5>
                        <p> Duis aute irure dolor reprehenderit in
                            voluptate velit esse cillum dolore fugiat
                            nulla pariatur. Excepteur
                        </p>
                    </div>
                </div>
            </section>

            <section>
                <div className='about__container'>
                    <div className='img__container'>

                        <Rough className='aboutrough'></Rough>
                        <Happy className='happy'></Happy>
                        <Dot className='dot'></Dot>



                        <Smillingboy className='smillingboy'></Smillingboy>
                        <Dot></Dot>
                        <Girlwithglass className='girlwithglass'></Girlwithglass>

                    </div>
                    <div className='about__text'>

                        <div className='about__item'>
                            <div className='booktext'><Book className='book'></Book>
                                <p>About Us</p>
                            </div>



                            <h2 className='aboutmes'>It’s Our Passion To Work With Children At Kindergarten.</h2>



                            <p className='aboutmes2' >Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do <br></br>eiusmod tempor incididunt
                                ut5 labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit in voluptate velit <br></br> esse
                                cillum dolore fugiat nulla pariatur. Excepteur.
                            </p>

                        </div>

                        <Aboutus></Aboutus>
                        <div><button className='browse__btn'>Admission Open</button></div>
                        <Dot></Dot>
                        <Birdsright className='aboutbird'></Birdsright>

                    </div>
                </div>
            </section>

            <section>
                <div>
                    <Background className='background'></Background>
                </div>
                <div className='teacher__container'>
                    <div className='div2'>
                        <div className='div'>
                            <div className='totalteach__item'><Totalteacher className='teacher'></Totalteacher></div>

                            <h3>2,500 </h3>
                            <h4>Total Teacher</h4>
                        </div>
                    </div>
                    <div className='div2'>
                        <div className='div'>
                            <Totalstudent className='totalstudent'></Totalstudent>
                            <h3 className='kk'>5,000 </h3>
                            <h4>Total Student</h4>
                        </div>
                    </div>
                    <div className='div2'>
                        <div className='div'>
                            <Totalclassroom className='classroom'></Totalclassroom>
                            <h3>350 </h3>
                            <h4>Total Classroom</h4>
                        </div>
                    </div>

                    <div className='divlast' >
                        <div className='div'>
                            <Bestaward className='award'></Bestaward>
                            <h3>1,200 </h3>
                            <h4>Best Awards Won</h4>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className='whychooseus__container'>
                    <div className='whychoosebird'><Birds className='birds' ></Birds></div>

                    <div className='whychoseus'>
                        <div className='whychooseus__header'>
                            <Book className='chooseus__book'></Book>
                            <p>WHY CHOOSE US</p>
                            <Car className='car'></Car>
                        </div>
                        <h1>New Approach To Fun</h1>
                        <h4>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit,<br></br> sed
                            do eiusmod tempor incididunt ut labore et dolore.
                        </h4>
                        <div className='approach__text'>
                            <div className='approach__item'>
                                <div className='uuu'>
                                    <Orangecheck className='orangecheck'></Orangecheck>
                                    <h4>
                                        Best Teaching
                                    </h4>
                                </div>
                                <div className='uuu'>
                                    <Orangecheck className='orangecheck' ></Orangecheck>
                                    <h4>
                                        Quality Educators

                                    </h4>
                                </div>
                            </div>
                            <div className='approach__item'>
                                <div className='uuu'>
                                    <Orangecheck className='orangecheck'></Orangecheck>
                                    <h4>
                                        Expert Tutor
                                    </h4>
                                </div>
                                <div className='uuu' >
                                    <Orangecheck className='orangecheck'></Orangecheck>
                                    <h4>
                                        Affordable
                                    </h4>
                                </div>
                            </div>
                            <div className='button__div'>
                                <button className='event'>Find Event</button>
                            </div>
                        </div>
                        <Rainbow className='rainbow'></Rainbow>
                    </div>

                    <div className='jo'>
                        <Splash className='splash'></Splash>
                        <Girlwritting className='girlwritting'></Girlwritting>

                    </div>

                </div>
            </section>

            <section>

                <div className='testimonal__head'>
                    <div className='TESTIMONAL__HEADERTEXT'>
                        <Book></Book>
                        <h6>TESTIMONAL</h6>
                    </div>

                    <h1>What Parents Say</h1>
                </div>

                <div className='testimonal__container'>

                    <div className='testimonal__text'>
                        <div class="stars">
                            ★★★★★
                        </div>

                        <p>"Lorem ipsum dolor sit amet, elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore fugiat nulla pariatur."
                        </p>

                        <div className='ceo'>
                            <span><Kathy></Kathy></span>
                            <span>
                                <p> Kathy Sullivan</p>
                                <p className='ceo__text'> CEO of School</p>
                            </span>

                        </div>

                    </div>
                    <div className='testimonal__text'>
                        <div class="stars">
                            ★★★★★
                        </div>
                        <p>"Lorem ipsum dolor sit amet, elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore fugiat nulla pariatur."
                        </p>
                        <div className='ceo'>
                            <span><Elsie></Elsie></span>
                            <span><p>Elsie stroud</p>
                                <p className='ceo__text'> CEO of School</p>
                            </span>

                        </div>

                    </div>
                    <div className='testimonal__text' >
                        <div class="stars">
                            ★★★★★
                        </div>
                        <div>
                            <p>
                                "Lorem ipsum dolor sit amet, elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore fugiat nulla pariatur."

                            </p>
                        </div>
                        <div className='ceo'>
                            <span><Kathy></Kathy></span>
                            <span>
                                <p>Kathy Sullivan </p>
                                <p className='ceo__text'>CEO of School</p>
                            </span>
                        </div>

                    </div>
                </div>
            </section>

            <section className='teacher__instructor' >
                <div className='teacher__item'>
                    <div >
                        <div className='teacher__orangebook'>
                            <Book className='seconndorangebook'></Book><p></p>Teacher
                        </div>
                        <h2>
                            Meet Our Instructor
                        </h2>
                    </div>
                    <div className='instructor__holder'>
                        <Birdsright className='birdicon2'></Birdsright>
                        <Instructorleft className='instructorleft'></Instructorleft>
                        <Instructorright className='insructorright'></Instructorright>

                    </div>
                </div>
                <div className='teacher__container'>

                    <div className='teachercurry__container'>
                        <div className='first__teacher'>
                            <Teachercurry className='teachercurry'></Teachercurry>

                            <Share className='share_btn'></Share>

                        </div>

                        <div className='pic__text1'><p>Cheryl Curry</p></div>
                        <div className='pic__text2'> <p>Teacher</p></div>

                    </div>
                    <div className='teachercurry__container'>
                        <div className='first__teacher'>
                            <Teacherwill className='teacherwill'></Teacherwill>
                            <Share className='share_btn'></Share>

                        </div>

                        <div className='pic__text1' ><p>Willie Diaz</p></div>
                        <div className='pic__text2'> <p>Teacher</p></div>

                    </div>
                    <div className='teachercurry__container'>
                        <div className='first__teacher' >
                            <Teacherjim className='teacherjim'></Teacherjim>
                            <Share className='share_btn'></Share>

                        </div>

                        <div className='pic__text1'><p>Jimmy Sifuentes</p></div>

                        <div className='pic__text2'> <p>Teacher</p></div>
                    </div>
                    <div className='teachercurry__container'>
                        <div className='first__teacher' >
                            <Teachermic className='teachermic'></Teachermic>
                            <Share className='share_btn'></Share>

                        </div>

                        <div className='pic__text1'><p>Michael Hammond</p></div>
                        <div className='pic__text2' > <p>Teacher</p></div>
                    </div>


                </div>
            </section>
            
            <section className='whole'>

                <Birds className='BLOGBIRD'></Birds>
                <Halfcircle className='halfcircle'></Halfcircle>
                <div className='blogpost__item'>
                    <div>
                        <span className='blogpost__header'>
                            <Book className='book'></Book>
                            <p>

                                Explore newsletter
                            </p></span>


                        <h1>
                            Most Popular Post
                        </h1>
                    </div>
                    <div>
                        <button className='blogpost__btn'>All blog post</button>
                    </div>
                </div>

                <div className='blog__post'>

                    <div className='first__blog'>
                        <div >
                            <div>
                                <Girlwithpen className='girlwithpen'></Girlwithpen>
                            </div>
                            <div className='date__blog'> <Dateblogimg></Dateblogimg> <p> 15 April 2024</p> <Commentblog></Commentblog> <p>Comment (06)</p></div>
                            <div><p>velit esse cillum dolore eu fugiat nulla
                                pariatur. Excepteur sint occaecat
                                cupidatat</p></div>
                            <Button></Button>
                        </div>
                    </div>

                    <div className='first__blog'>

                        <Kidinclass className='kidinclass'></Kidinclass>
                        <div className='date__blog'> <Dateblogimg></Dateblogimg> <p>15 April 2024</p> <Commentblog></Commentblog> <p>Comment (06)</p></div>
                        <div> <p>velit esse cillum dolore eu fugiat nulla
                            pariatur.Excepteur sint occaecat
                            cupidatat</p>
                        </div>
                        <Button></Button>

                    </div>

                    <div className='first__blog'>
                        <Kidwithgame className='kidwithgame'></Kidwithgame>
                        <div className='date__blog'> <Dateblogimg></Dateblogimg> <p>15 April 2024</p> <Commentblog></Commentblog> <p>Comment (06)</p></div>
                        <div><p>velit esse cillum dolore eu fugiat nulla
                            pariatur. Excepteur sint occaecat
                            cupidatat</p>
                        </div>

                        <Button></Button>
                    </div>

                </div>

            </section>


            <Landingpage></Landingpage>

        </main>

    )
}