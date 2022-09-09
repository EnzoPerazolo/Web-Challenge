import { Link } from "react-router-dom";

export default function Header(){    
    return(
        <header>
            <h1>Contratação de Candidatos</h1>
                <nav className="container">

                    <Link to="/">Home</Link>
                    <Link to="/candidato">Inscrição do Candidato</Link>
                    <Link to="/empresa">Inscrição da Empresa</Link>
                    <Link to="/informacaovaga">Informação sobre vagas</Link>
                    <Link to="/inscricaovaga">Inscrição de vaga</Link>
                    <Link to="/vaga">Vaga</Link>
                   
                    {/* conteudo do header */}
    
                </nav>
        </header>
    );  
}