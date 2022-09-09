import { Link } from "react-router-dom";
import InfoImg from "../../img/info.png";

export default function Informacao(){
    return(
        <div id="vaga">
            <div className="vaga">

                <Link to="/vaga" className="vaga-content" target="_blank">
                    <img src={InfoImg} alt="Imagem info"/>
                    <h3>Estágiario de Dev</h3>
                    <h4>Vaga para estágio de desenvolvedor front-end</h4>
                </Link>

                <Link to="/vaga" className="vaga-content" target="_blank">
                    <img src={InfoImg} alt="Imagem info"/>
                    <h3>Estágiario de Dev</h3>
                    <h4>Vaga para estágio de desenvolvedor front-end</h4>
                </Link>

            </div>

            <div className="vaga">

                <Link to="/vaga" className="vaga-content" target="_blank">
                    <img src={InfoImg} alt="Imagem info"/>
                    <h3>Estágiario de Dev</h3>
                    <h4>Vaga para estágio de desenvolvedor front-end</h4>
                </Link>

                <Link to="/vaga" className="vaga-content" target="_blank">
                    <img src={InfoImg} alt="Imagem info"/>
                    <h3>Estágiario de Dev</h3>
                    <h4>Vaga para estágio de desenvolvedor front-end</h4>
                </Link>

            </div>

            <div className="vaga">

                <Link to="/vaga" className="vaga-content" target="_blank">
                    <img src={InfoImg} alt="Imagem info"/>
                    <h3>Estágiario de Dev</h3>
                    <h4>Vaga para estágio de desenvolvedor front-end</h4>
                </Link>

                <Link to="/vaga" className="vaga-content" target="_blank">
                    <img src={InfoImg} alt="Imagem info"/>
                    <h3>Estágiario de Dev</h3>
                    <h4>Vaga para estágio de desenvolvedor front-end</h4>
                </Link>

            </div>

        </div>
    );
}