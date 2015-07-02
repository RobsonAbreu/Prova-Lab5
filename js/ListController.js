var ListaController = {
    init: function(){
        ListaController.setForm();
        ListaController.ListaAlunos();
        
    },
    setForm: function(){
        var form = document.querySelector('form');
        form.addEventListener('submit',function(event){
            ListaController.cadastrar(form);
            event.preventDefault();
        });
    },
    cadastrar: function(form){
        var aluno ={
            nome:form.nome.value,
           teste1:form.test1.value,
            teste2:form.tes2.value,
            exe:form.exe.value,
            home:form.home.value
        };
        GradService.cadastrar(aluno);
        form.reset();
    },
    calcular: function(){
        var     media= 0,
        var   teste1:form.test1.value,
        var   teste2:form.tes2.value,
        var   exe:form.exe.value,
        var    home:form.home.value
            
            
             
        
    },
    ListaAlunos: function(){
        var alunos = GradService.pegarAlunos();
        alunos.forEach(function(aluno){
            ListaController.adNoHtml(aluno);
        });
    },
    adNoHtml: function(aluno){
        var 
            ul=document.getElementById('alunos'),
            li=document.createElement('li');
        
        li.innerHTML= '['aluno.nome + '],'
            ul.appendChild(li);
    }
};
ListaController.init();