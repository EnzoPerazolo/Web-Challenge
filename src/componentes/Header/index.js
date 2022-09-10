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
                        <li><a class="menu_item" href="#">Produtos</a></li>
                        <li><a class="menu_item" href="#">Equipe</a></li>
                        <li><a class="menu_item" href="#">Sobre</a></li>
                        <li><a class="menu_item" href="#">Contato</a></li>
                        </ul>
                </nav>
            </div>
        </header>
    );  
}