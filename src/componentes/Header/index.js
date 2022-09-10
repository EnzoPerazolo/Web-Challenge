import { Link } from "react-router-dom";

export default function Header(){    
    return(
        <header>
            <h1>Contratação de Candidatos</h1>
            <div>
                <nav class="hamburger-menu">
                    <input type="checkbox" id="menu_toggle"></input>
                        <label class="menu_btn" for="menu_toggle"><span></span></label>
                        <ul class="menu_box">
                        <li><Link to="/" className="menu_item">Home</Link></li>
                        <li><Link to="/candidato" className="menu_item">Inscrição do Candidato</Link></li>
                        <li><Link to="/empresa" className="menu_item">Inscrição da Empresa</Link></li>
                        <li><Link to="/informacaovaga" className="menu_item">Informação sobre vagas</Link></li>
                        <li><Link to="/inscricaovaga" className="menu_item">Inscrição de vaga</Link></li>
                        <li><Link to="/vaga" className="menu_item">Vaga</Link></li>
                        </ul>
                </nav>
            </div>
        </header>
    );  
}