
  function checaCampos() {

    let nome = document.getElementById('nome').value
    let sobreNome = document.getElementById('sobrenome').value
    let sexo = document.getElementsByName('sexo').value
    let endereco = document.getElementById('endereco').value
    let cidade = document.getElementById('cidade').value
    let estado = document.getElementById('estado').value
    let email = document.getElementById('email').value
    let telefone = document.getElementById('telefone').value
    let senha = document.getElementById('senha').value
    let repetirSenha = document.getElementById('repetirSenha').value
    let respostas = document.getElementById('resposta')

     if (nome  != '' &&  sobreNome  != '' &&  sexo  != '' && endereco  != '' &&  cidade  != '' &&  estado != '' && email != ''  && telefone != '' && senha != '') {

        if(senha != repetirSenha){

         respostas.textContent = 'Senhas não conhecidem! ';
         respostas.style.color = "red";

        }else{
         document.write('preenchido com sucesso!')
        }
         
     } 

     else if (nome == '' &&  sobreNome  != '' &&  sexo  != '' && endereco  != '' &&  cidade  != '' &&  estado != '' && email != ''  && telefone != '' && senha != '') {

      respostas.textContent = 'Preencha o campo nome! ';
      respostas.style.color = "red";
         
     } 

     else if (nome != '' &&  sobreNome  == '' &&  sexo  != '' && endereco  != '' &&  cidade  != '' &&  estado != '' && email != ''  && telefone != '' && senha != '') {

      respostas.textContent = 'Preencha o campo Sobrenome! ';
      respostas.style.color = "red";
         
     } 

     else if (nome != '' &&  sobreNome  != '' &&  sexo  != '' && endereco  == '' &&  cidade  != '' &&  estado != '' && email != ''  && telefone != '' && senha != '') {

      respostas.textContent = 'Preencha o campo  Endereço! ';
      respostas.style.color = "red";
         
     }

     else if (nome != '' &&  sobreNome  != '' &&  sexo  != '' && endereco  != '' &&  cidade  == '' &&  estado != '' && email != ''  && telefone != '' && senha != '') {

      respostas.textContent = 'Preencha o campo  Cidade! ';
      respostas.style.color = "red";
         
     }

     else if (nome != '' &&  sobreNome  != '' &&  sexo  != '' && endereco  != '' &&  cidade  != '' &&  estado != '' && email == ''  && telefone != '' && senha != '') {

      respostas.textContent = 'Preencha o campo  email! ';
      respostas.style.color = "red";
         
     }

     else if (nome != '' &&  sobreNome  != '' &&  sexo  != '' && endereco  != '' &&  cidade  != '' &&  estado != '' && email != ''  && telefone == '' && senha != '') {

      respostas.textContent = 'Preencha o campo  Telefone! ';
      respostas.style.color = "red";
         
     }
     
     else if (nome != '' &&  sobreNome  != '' &&  sexo  != '' && endereco  != '' &&  cidade  != '' &&  estado != '' && email != ''  && telefone != '' && senha == '') {

        
        respostas.textContent = 'Preencha o campo  Senha! ';
        respostas.style.color = "red";
         
     }
     

     else{

        alert('Preencha os campos')
     }
     
     }

    
    
    
 

      
       
        
    
       