import React from 'react'

export default function Candidato() {
    /*
    function changeVisibility() {
        const visibility = document.getElementById("dropdown").style.visibility;
        console.log(visibility)
        if (visibility == "hidden") {
            document.getElementById("dropdown").style.visibility = "visible"
        } else {
            document.getElementById("dropdown").style.visibility = "hidden"
        }
    }
    const button = document.getElementById("button");
    button.addEventListener("click", changeVisibility)
    
    
    
    var Form1 = document.getElementById("Form1")
    var Form2 = document.getElementById("Form2")
    var Form3 = document.getElementById("Form3")
    var Form4 = document.getElementById("Form4")
    var Form5 = document.getElementById("Form5")
    var Form6 = document.getElementById("Form6")
    
    var Next1 = document.getElementById("Next1")
    var Next2 = document.getElementById("Next2")
    var Next3 = document.getElementById("Next3")
    var Next4 = document.getElementById("Next4")
    var Next5 = document.getElementById("Next5")
    var Back1 = document.getElementById("Back1")
    var Back2 = document.getElementById("Back2")
    var Back3 = document.getElementById("Back3")
    var Back4 = document.getElementById("Back4")
    var Back5 = document.getElementById("Back5")
    
    var progress = document.getElementById("progress")
    
    function Next1(){
        Form1.style.left = "-700px";
        Form2.style.left = "90px";
        progress.style.width = "220px"
    }
    
    function Back1(){
        Form1.style.left = "90px";
        Form2.style.left = "700px";
        progress.style.width = "110px"
    }
    
    function Next2(){
        Form2.style.left = "-700px";
        Form3.style.left = "90px";
        progress.style.width = "330px"
    }
    
    function Back2(){
        Form2.style.left = "90px";
        Form3.style.left = "700px";
        progress.style.width = "220px"
    }
    
    function Next3(){
        Form3.style.left = "-700px";
        Form4.style.left = "90px";
        progress.style.width = "440px"
    }
    
    function Back3(){
        Form3.style.left = "90px";
        Form4.style.left = "700px";
        progress.style.width = "330px"
    }
    
    function Next4(){
        Form4.style.left = "-700px";
        Form5.style.left = "90px";
        progress.style.width = "550px"
    }
    
    function Back4(){
        Form4.style.left = "90px";
        Form5.style.left = "700px";
        progress.style.width = "440px"
    }
    
    function Next5 (){
        Form5.style.left = "-700px";
        Form6.style.left = "90px";
        progress.style.width = "660px"
    }
    
    function Back5 (){
        Form5.style.left = "90px";
        Form6.style.left = "700px";
        progress.style.width = "550px"
    }

    

    */

    return (
        <div className="candidato">
            <form id="Form1">
                <h2>Inscrição do Candidato</h2>
                <input type="text" id="nomeCand" name="nomeCand" placeholder="Nome Candidato" required />
                <input type="text" id="emailCand" name="emailCand" placeholder="E-mail Candidato" required />
                <input type="password" className="senhaCand" name="senhaCand" placeholder="Senha" required />
                <input type="password" className="senhaCand" name="senhaCand" placeholder="Confirmar Senha" required />
                <input type="tel" id="telefoneCand" name="telefoneCand" placeholder="Telefone" />

                <div className="btn-box">
                    <button type="button" onclick={()=>{}} id="Next1">Next</button>
                </div>
            </form>

            <form id="Form2">
                <h2>Inscrição do Candidato</h2>
                <h4>Você é estudante?</h4>
                <input type="radio" className="opcaoEst" name="opcaoEst" value="opcaoEst" required />
                <label htmlFor="opcaoEst">Sim</label>
                <input type="radio" className="opcaoEst" name="opcaoEst" value="opcaoEst" required />
                <label htmlFor="opcaoEst">Não</label>
                <h3>Adicionar formação academica</h3>
                <input type="text" id="nomeEscola" name="nomeEscola" placeholder="Instituição de Ensino" />
                <input type="text" id="nomeCurso" name="nomeCurso" placeholder="Nome do Curso" />
                <input type="text" id="diplomaForm" name="diplomaForm" placeholder="Nível de escolaridade" />
                <input type="text" id="areaForm" name="areaForm" placeholder="Aréa de Estudo" />
                <label htmlFor="dataInForm">Data inicio:</label>
                <input type="date" id="dataInForm" name="dataInForm" />
                <label htmlFor="dataTer">Data de término (ou prevista):</label>
                <input type="date" id="dataTer" name="dataTer" />

                <div className="btn-box">
                    <button type="button" onclick={()=>{}} id="Back1">Back</button>
                    <button type="button" onclick={()=>{}} id="Next2">Next</button>
                </div>
            </form>


            <form id="Form3">
                <h2>Inscrição do Candidato</h2>
                <label htmlFor="descAtiv">Atividades e grupos:</label>
                <textarea name="descAtiv" id="descAtiv" cols="75" rows="4" placeholder="Atividades e grupos"></textarea>
                <label htmlFor="descForm">Descrição:</label>
                <textarea name="descForm" id="descForm" cols="75" rows="8" placeholder="Descrição"></textarea>
                <label htmlFor="midiaForm">Mídia:</label>
                <input type="file" id="midiaForm" name="midiaForm" />
                <input type="text" id="notaForm" name="notaForm" placeholder="Nota" />

                <div className="btn-box">
                    <button type="button" onclick={()=>{}} id="Back2">Back</button>
                    <button type="button" onclick={()=>{}} id="Next3">Next</button>
                </div>
            </form>

            <form id="Form4">
                <h2>Inscrição do Candidato</h2>

                <label htmlFor="descComp">Competências sugeridas com base no seu perfil:</label>
                <textarea name="descComp" id="descComp" cols="75" rows="8" placeholder="Ex.: Inglês, Microsoft Office, Comunicação"></textarea>

                <div className="btn-box">
                    <button type="button" onclick={()=>{}} id="Back3">Back</button>
                    <button type="button" onclick={()=>{}} id="Next4">Next</button>
                </div>
            </form>

            <form id="Form5">
                <h2>Inscrição do Candidato</h2>
                <input type="text" id="nomeCert" name="nomeCert" placeholder="Nome Certificado" />
                <input type="text" id="nomeOrg" name="nomeOrg" placeholder="Organização Emissora" />
                <label htmlFor="dataEmi">Data de emissão:</label>
                <input type="date" id="dataEmi" name="dataEmi" />
                <label htmlFor="dataExp">Data de expiração:</label>
                <input type="date" id="dataExp" name="dataExp" />
                <input type="text" id="cdCred" name="cdCred" placeholder="Código da credencial" />
                <input type="url" id="urlCred" name="urlCred" placeholder="URL da credencial" />

                <div className="btn-box">
                    <button type="button" onclick={()=>{}} id="Back4">Back</button>
                    <button type="button" onclick={()=>{}} id="Next5">Next</button>
                </div>
            </form>

            <form id="Form6">
                <h2>Inscrição do Candidato</h2>
                <h3>Experiência</h3>
                <input type="text" id="nomeProj" name="nomeProj" placeholder="Nome do projeto" required />
                <label htmlFor="dataInProj">Data de início:</label>
                <input type="date" id="dataInProj" name="dataInProj" required />
                <label htmlFor="dataFimProj">Data de término:</label>
                <input type="date" id="dataFimProj" name="dataFimProj" required />
                <input type="url" id="urlProj" name="urlProj" placeholder="URL do projeto" />
                <label htmlFor="descProj">Descrição do projeto:</label>
                <textarea name="descProj" id="descProj" cols="75" rows="8"></textarea>
                <h4>Você trabalha atualmente?</h4>
                <input type="radio" className="opcaoTrab" name="opcaoTrab" value="opcaoTrab" />
                <label htmlFor="opcaoTrab">Sim</label>
                <input type="radio" className="opcaoTrab" name="opcaoTrab" value="opcaoTrab" />
                <label htmlFor="opcaoTrab">Não</label>

                <div className="btn-box">
                    <button type="button" onclick={()=>{}} id="Back5">Back</button>
                    <button type="submit" >Enviar</button>
                </div>
            </form>

            <div className="step-row">
                <div id="progress"></div>
                <div className="step-col">Step1</div>
                <div className="step-col">Step2</div>
                <div className="step-col">Step3</div>
                <div className="step-col">Step4</div>
                <div className="step-col">Step5</div>
                <div className="step-col">Step6</div>
            </div>

        </div>
    );
}