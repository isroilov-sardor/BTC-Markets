import './index.css';
import image1 from '../../images/head-top-logo.svg'
import image2 from '../../images/head-triangle.svg'
import stars from '../../images/star.svg';
import notFullStar from '../../images/not-full-satr.svg';
import googleIcon from '../../images/head-gogle.svg';
import headRightImage from '../../images/head-right-image.svg'


function Header() {
    return (
        <div className="header">
            <div className="container head-container">
                <div className="head-top">
                    <a href="#"><img className='head-first' src={image1} alt="" /></a>
                    <div className="head-top-links">
                        <div className="head-title-same">
                            <a href="#" className="head-title">Products</a>
                            <img src={image2} alt="" />
                        </div>
                        <a href="#" className='head-title'>Prices</a>
                        <div className="head-title-same">
                            <a href="#" className="head-title">Buy</a>
                            <img src={image2} alt="" />
                        </div>
                        <a href="#" className='head-title'>OTC</a>
                        <div className="head-title-same">
                            <a href="#" className="head-title">Learn</a>
                            <img src={image2} alt="" />
                        </div>
                        <div className="head-title-same">
                            <a href="#" className="head-title">Help</a>
                            <img src={image2} alt="" />
                        </div>
                        <button className='head-top-btn1'>Log in</button>
                        <button className='head-top-btn2'>Sign up</button>
                    </div>
                </div>
                <div className="head-bottom">
                    <div className="head-left">
                        <div className="head-left-title">Buy, sell and trade crypto today</div>
                        <div className="head-left-desc">Trade with confidence and build your future with Australia’s fastest crypto exchange.</div>
                        <div className="head-left-same">
                            <button className='head-leftbtn1'>Get started</button>
                            <button className='head-leftbtn2'>View exchange</button>
                        </div>
                        <div className="head-left-info">
                            <img src={googleIcon} width={20} height={20} alt="image" />
                            <div className="head-info-same">
                                <img src={stars} width={15} height={14} alt="image" />
                                <img src={stars} width={15} height={14} alt="image" />
                                <img src={stars} width={15} height={14} alt="image" />
                                <img src={stars} width={15} height={14} alt="image" />
                                <img src={notFullStar} width={15} height={14} alt="image" />
                            </div>
                            <div className="head-info-title">4.6</div>
                        </div>
                    </div>
                    <div className="head-right">
                        <img src={headRightImage} width={293} height={536} alt="image-phone" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;