import LogoEmpresaImg from '../../img/empresalog.jpg';


export default function Empresa() {
    return (
        <div id="empresa">
            <img src={LogoEmpresaImg} alt="logo" id="imgLog"/>
            <div class="container-vaga">
                <form>
                    <h2>Inscrição de Empresa</h2>
                    <label htmlFor="nomeEmp">Empresa</label>
                    <input type="text" name="nomeEmp" id="nomeEmp" placeholder="Nome da Empresa" />

                    <label htmlFor="emailEmp">Email da empresa</label>
                    <input type="email" name="emailEmp" id="emailEmp" placeholder="Email da Empresa" />

                    <label htmlFor="senhaEmp">Senha</label>
                    <input type="password" name="senhaEmp" id="senhaEmp" placeholder="Senha" />

                    <label htmlFor="telEmp">Telefone</label>
                    <input type="tel" name="telEmp" id="telEmp" placeholder="Telefone" />

                    <label htmlFor="descEmp">Descrição da Empresa</label>
                    <textarea name="descEmp" id="descEmp" cols="75" rows="10" placeholder="Descrição da Empresa"></textarea>

                    <button type="submit">Cadastrar-se</button>
                </form>
            </div>
        </div>
    );
}











