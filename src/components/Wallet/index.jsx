import './index.css';
import img1 from '../../images/walet-left-image.svg';
import image1 from '../../images/walet1-img.svg';
import image2 from '../../images/walet2-img.svg';
import image3 from '../../images/walet3-img.svg';
import image4 from '../../images/walet4-img.svg';

function Wallet() {
    return (
        <div className="wallet">
            <div className="container wallet-container">
                <div className="wallet-left">
                    <img src={img1} width={524} height={460} alt="image" />
                </div>
                <div className="wallet-right">
                    <div className="wallet-desc">WALLET</div>
                    <div className="wallet-title">Simple and secure wallet services</div>
                    <div className="wallet-same">
                        <div className="wallet1-same">
                            <div className="walet1">
                                <img src={image1} width={32} height={32} alt="image" />
                                <div className="walet1-desc">Secure asset storage</div>
                                <div className="walet1-title">We use multi-signature technology to securely store your assets.</div>
                            </div>
                            <div className="walet2">
                                <img src={image2} width={32} height={32} alt="image" />
                                <div className="walet1-desc">Assets held in Australia</div>
                                <div className="walet1-title">100% Australian-based custody of your assets.</div>
                            </div>
                        </div>
                        <div className="wallet2-same">
                            <div className="walet3">
                                <img src={image3} width={32} height={32} alt="image" />
                                <div className="walet1-desc">Multi-coin wallet</div>
                                <div className="walet1-title">Store multiple assets simultaneously in one wallet.</div>
                            </div>
                            <div className="walet4">
                                <img src={image4} width={32} height={32} alt="image" />
                                <div className="walet1-desc">Fast funding</div>
                                <div className="walet1-title">Credit your wallet with AUD in seconds using Osko PayID.</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Wallet;