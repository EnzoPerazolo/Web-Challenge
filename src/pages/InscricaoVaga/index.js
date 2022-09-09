export default function Vaga() {
    return (
        <div className="container-vaga">

            <form>

                <h2>Inscrição Vaga</h2><br/>

                <label htmlFor="nomeVaga">Nome da Vaga:</label>
                <input type="text" id="nomeVaga" name="nomeVaga" placeholder="Nome da Vaga"/><br/>

                <label htmlFor="descVaga">Descrição da Vaga:</label>
                <textarea name="descVaga" id="descVaga" cols="75" rows="4" placeholder="Ex.: Vaga para estágio..."></textarea>
                
                <p>Tipo do vaga?</p>
                <input type="radio" className="opcao" name="opcao" value="opcao"/>
                <label htmlFor="opcao">Presencial</label>

                <input type="radio" className="opcao" name="opcao" value="opcao"/>
                <label htmlFor="opcao">Remota</label>

                <input type="radio" className="opcao" name="opcao" value="opcao"/>
                <label htmlFor="opcao">Híbrida</label><br/><br/>

                <div className="btn">
                    <button type="submit" id="submit">Enviar</button>
                </div>

            </form>
            
        </div>
    );
}