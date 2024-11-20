import './index.css';
import img1 from '../../images/trade-right-image.svg'
import image1 from '../../images/trade1-img.svg'
import image2 from '../../images/trade2-img.svg'
import image3 from '../../images/trade3-img.svg'
import image4 from '../../images/trade4-img.svg'

function Trade() {
    return (
        <div className="trade">
            <div className="container trade-container">
                <div className="trade-left">
                    <div className="trade-desc">TRADE</div>
                    <div className="trade-title">Buy, sell and trade crypto with confidence</div>
                    <div className="trade-all">
                        <div className="trade1-same">
                            <div className="trade1">
                                <img src={image1} width={32} height={32} alt="image" />
                                <div className="trade1-desc">Simple buy & sell options</div>
                                <div className="trade1-title">Buy and sell cryptocurrency quickly and easily.</div>
                            </div>
                            <div className="trade2">
                                <img src={image2} width={32} height={32} alt="image" />
                                <div className="trade1-desc">Advanced trading</div>
                                <div className="trade1-title">Access advanced order types including limit, market, stop limit and dollar cost averaging.</div>
                            </div>
                        </div>
                        <div className="trade2-same">
                            <div className="trade3">
                                <img src={image3} width={32} height={32} alt="image" />
                                <div className="trade1-desc">Portfolio tracking</div>
                                <div className="trade1-title">Track your total asset holdings, values and equity over time.</div>
                            </div>
                            <div className="trade4">
                                <img src={image4} width={32} height={32} alt="image" />
                                <div className="trade1-desc">Mobile app</div>
                                <div className="trade1-title">Monitor markets, manage your portfolio, and trade crypto on the go.</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="trade-right">
                    <img src={img1} width={524} height={414} alt="image" />
                </div>
            </div>
        </div>
    )
}
export default Trade;