import './index.css';
import image1 from '../../images/block.svg';
import image2 from '../../images/energy.svg';
import image3 from '../../images/chat.svg'

function Pluses() {
    return (
        <div className="pluses">
            <div className="container plus-container">
                <div className="plus-desc">Why BTC Markets?</div>
                <div className="plus-same">
                    <div className="first-plus">
                        <img src={image1} width={40} height={40} alt="image" />
                        <div className="first-plus-title">Security</div>
                        <div className="first-plus-title">Multiple layers of account security, 2FA, address whitelisting, Biometrics.</div>
                    </div>
                    <div className="first-plus">
                        <img src={image2} width={40} height={40} alt="image" />
                        <div className="first-plus-title">Speed</div>
                        <div className="first-plus-title">Fast trade executions with an industry leading uptime of 99.99%.</div>
                    </div>
                    <div className="first-plus">
                        <img src={image3} width={40} height={40} alt="image" />
                        <div className="first-plus-title">Support</div>
                        <div className="first-plus-title">Fast trade executions with an industry leading uptime of 99.99%.</div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}
export default Pluses;