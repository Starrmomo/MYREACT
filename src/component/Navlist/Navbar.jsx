import './Navbar.css'
import Logo from '../../assets/Icon/Navlogo.svg?react'
import Downarror from '../../assets/Icon/downarrowblack.svg?react'
import Search from '../../assets/Icon/search.svg?react'
import Human from '../../assets/Icon/human.svg?react'

export default function Navlist() {
    return (
        <section className='navbar'>
            <div className='navbar__container'>
                <div className='logo'>
                    <Logo className='logoimg'></Logo>
                </div>
                <div className='navbar__item'>

                    <div className='navlist__text'>
                        <h4>Home</h4> <Downarror></Downarror>
                    </div>
                    <div className='navlist__text'>
                        <h4>About us</h4>
                    </div>
                    <div className='navlist__text' >
                        <h4>Courses</h4> <Downarror></Downarror>
                    </div>
                    <div className='navlist__text'>
                        <h4>Pages</h4><Downarror></Downarror>
                    </div >
                    <div className='navlist__text'>
                        <h4>Blog</h4><Downarror></Downarror>
                    </div>
                    <div className='navlist__contact' >
                        <h4>Contact</h4>
                    </div>
                </div>
                <div className='navlist__icon'>
                    <Search className='search'></Search>
                    <Human className='human'></Human>
                    <button className='contact__btn'>Contact</button>
                </div>
            </div>





        </section>
    )
}