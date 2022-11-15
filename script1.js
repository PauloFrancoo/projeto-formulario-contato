var formulario= document.querySelector("#formulario");

formulario.addEventListener("submit",function(event){
    event.preventDefault()// função que não recarrega a pagina

    //alert("funciona");
   

	var campos =[formulario.nome,formulario.email,formulario.assunto,formulario.mensagem];
	var isFormularioValido = validaFormulario(campos);
	
    if(!isFormularioValido){
       document.querySelector(".formulario_mensagens").innerHTML=
       "Preencha os campos obrigatórios e envie novamente o formulário." ;
    }else{
        document.querySelector(".formulario_mensagens").innerHTML=
       "" ;
       //enviar dados do formulario para API
	   chamarApi(formulario.nome.value,
				 formulario.email.value,
				 formulario.assunto.value,
				 formulario.mensagem.value);
    //var isEnvioComSucesso= false;//
	
    }
})
function validaFormulario(campos){
	var isFormularioValido= true;
	campos.forEach(function(campo){
		if(campo.value == ""){
			isFormularioValido= false;
			campo.classList.add('formulario_campo-invalido');
		}else{
			campo.classList.remove('formulario_campo-invalido');
    }
	})
	return isFormularioValido;
}
