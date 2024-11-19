import './index.css';
import xrp from '../../images/xrp.svg'
import btc from '../../images/btc.svg';
import eth from '../../images/eth.svg';
import enjin from '../../images/enjin.svg';
import thether from '../../images/thether.svg'
import strelka from '../../images/strelka-vverx.svg'
import rightStrelka from '../../images/right-strelka.svg';

function List() {
    return (
        <div className="list">
            <div className="container list-container">
                <div className="list-top">
                    <div className="list-desc">Most Popular</div>
                    <div className="list-title">Top Movers</div>
                </div>
                <hr />
                <div className="list-info">
                    <div className="info-asset">Asset</div>
                    <div className="info-price">Last Price</div>
                    <div className="info-change">24hr Change</div>
                    <div className="info-cap">Market Cap</div>
                </div>
                <hr />
                <div className="first-coin">
                    <div className="first-name-same">
                        <img src={xrp} width={32} height={32} alt="xrp" />
                        <div className="coin-desc">XRP</div>
                    </div>
                    <div className="first-price-same">
                        <div className="coin-price">$0.5617</div>
                        <div className="coin-cost">AUD</div>
                    </div>
                    <div className="first-coin-average">
                        <div className="first-coin-average-desc">1.57%</div>
                        <img src={strelka} width={12} height={12} alt="image" />
                    </div>
                    <div className="coin-cap">$28B</div>
                    <button className='coinBuyBtn'>Buy</button>
                </div>
                <hr />
                <div className="second-coin">
                    <div className="first-name-same">
                        <img src={btc} width={32} height={32} alt="xrp" />
                        <div className="coin-desc">Bitcoin</div>
                    </div>
                    <div className="first-price-same">
                        <div className="coin-price">$30,165.43</div>
                        <div className="coin-cost">AUD</div>
                    </div>
                    <div className="first-coin-average">
                        <div className="second-coin-average-desc">-0.08%</div>
                        <img src={strelka} width={12} height={12} alt="image" />
                    </div>
                    <div className="coin-cap">$582B</div>
                    <button className='coinBuyBtn'>Buy</button>
                </div>
                <hr />
                <div className="third-coin">
                    <div className="first-name-same">
                        <img src={eth} width={32} height={32} alt="xrp" />
                        <div className="coin-desc">Etherum</div>
                    </div>
                    <div className="first-price-same">
                        <div className="coin-price">$2,215.50</div>
                        <div className="coin-cost">AUD</div>
                    </div>
                    <div className="first-coin-average">
                        <div className="second-coin-average-desc">-1,08%</div>
                        <img src={strelka} width={12} height={12} alt="image" />
                    </div>
                    <div className="coin-cap">$267B</div>
                    <button className='coinBuyBtn'>Buy</button>
                </div>
                <hr />
                <div className="fourth-coin">
                    <div className="first-name-same">
                        <img src={thether} width={32} height={32} alt="xrp" />
                        <div className="coin-desc">Thether</div>
                    </div>
                    <div className="first-price-same">
                        <div className="coin-price">$1.4544</div>
                        <div className="coin-cost">AUD</div>
                    </div>
                    <div className="first-coin-average">
                        <div className="first-coin-average-desc">2.36%</div>
                        <img src={strelka} width={12} height={12} alt="image" />
                    </div>
                    <div className="coin-cap">$96B</div>
                    <button className='coinBuyBtn'>Buy</button>
                </div>
                <hr />
                <div className="fifth-coin">
                    <div className="first-name-same">
                        <img src={enjin} width={32} height={32} alt="xrp" />
                        <div className="coin-desc">Enjin Coin</div>
                    </div>
                    <div className="first-price-same">
                        <div className="coin-price">$0.6129</div>
                        <div className="coin-cost">AUD</div>
                    </div>
                    <div className="first-coin-average">
                        <div className="first-coin-average-desc">16.41%</div>
                        <img src={strelka} width={12} height={12} alt="image" />
                    </div>
                    <div className="coin-cap">$629M</div>
                    <button className='coinBuyBtn'>Buy</button>
                </div>
                <hr />
                <div className="list-end">
                    <div className="end-images">
                        <img className='end1' src={btc} width={24} height={24} alt="" />
                        <img className='end2' src={eth} width={24} height={24} alt="" />
                        <img className='end3' src={thether} width={24} height={24} alt="" />
                        <img className='end4' src={xrp} width={24} height={24} alt="" />
                    </div>
                    <div className="end-desc">View all markets</div>
                    <img src={rightStrelka} width={20} height={12} alt="" />
                </div>
            </div>
        </div>
    )
}
export default List;