import {Link} from "react-router-dom";
import HomeImg from "../../img/home.png";
import CandidatoImg from "../../img/candidato.png";
import InfoImg from "../../img/info.png";
import EmpresaImg from "../../img/empresa.png";
import FolhaImg from "../../img/folha.png";
import VagaImg from "../../img/vaga.png";

export default function Sitemap() {
    return(
        <div id="sitemap">
            
            <Link to="/" className="cartao">
                <img src={HomeImg} alt="Imagem Home"/>
                <p>Home</p>
                <div className="vl"></div>
                <div className="hl"></div>
            </Link>

            <div className="sitemap-tree">

                <div className="sitemap-coluna">
                    <div className="vl"></div>
                    <Link to="/candidato" className="cartao">
                        <img src={CandidatoImg} alt="Imagem Candidato"/>
                        <p>Inscrição do Candidato</p>
                    </Link>
                </div>

                <div className="sitemap-coluna">

                    <div className="vl"></div>
                    
                    <Link to="/empresa" className="cartao">
                        <img src={EmpresaImg} alt="Imagem Empresa"/>
                        <p>Inscrição do Empresa</p>
                    </Link>

                    <div className="sitemap-coluna">

                        <div className="vl"></div>
                        <Link to="/informacaovaga" className="cartao">
                            <img src={InfoImg} alt="Imagem Informação"/>
                            <p>Informação sobre as vagas</p>
                        </Link>

                        <div className="vl"></div>
                        <Link to="/vaga" className="cartao">
                            <img src={FolhaImg} alt="Imagem Folha"/>
                            <p>Vagas</p>
                        </Link>

                    </div>
                    
                    <div className="sitemap-coluna">

                        <div className="vl"></div>
                        <Link to="/inscricaovaga" className="cartaovaga">
                            <img src={VagaImg} alt="Imagem Vaga"/>
                            <p>Inscrição das Vagas</p>
                        </Link>

                    </div>
                </div>
            </div>
        </div> 
    );
}