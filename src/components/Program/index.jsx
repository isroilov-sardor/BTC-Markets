import './index.css';
import img1 from '../../images/program-bottom-image.svg';
import image1 from '../../images/prg-img1.svg';
import image2 from '../../images/prg-img2.svg';
import image3 from '../../images/prg-img3.svg';


function Program() {
    return (
        <div className="program">
            <div className="container program-container">
                <div className="program-desc">VIP Program</div>
                <div className="program-title">When you need more than <br /> just a crypto exchange</div>
                <div className="program-spot">Access world-class APIs, a lower fee structure and a dedicated Account Manager.</div>
                <div className="program-same">
                    <div className="same1">
                        <img src={image1} width={24} height={24} alt="image" />
                        <div className="same1-desc">API integrations</div>
                    </div>
                    <div className="same2">
                        <img src={image2} width={24} height={24} alt="image" />
                        <div className="same1-desc">API integrations</div>
                    </div>
                    <div className="same3">
                        <img src={image3} width={24} height={24} alt="image" />
                        <div className="same1-desc">API integrations</div>
                    </div>
                </div>
                <button className='prg-btn'>Learn more</button>
                <img src={img1} width={1082} height={472} alt="image" />
                <h1>Commin sooon ....</h1>
            </div>
        </div>
    )
}
export default Program;