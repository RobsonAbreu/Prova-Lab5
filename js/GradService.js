var GradService ={
    alunos:[],
    cadastrar;function(aluno){
    GradService.alunos.push(aluno);
    GradService.salvarNoLocalStorage();
    
},
    pegarAlunos:function(){
        GradService.buscaDoLocalStorage();
        return GradService.alunos;
    },
        salvarNoLocalStorage: function(){
            var jsonText = JSON.stringify(GradService.alunos);
            localStorage.setItem('alunos',jsonText);
    },
        buscaDoLocalStorage: function(){
            var jsonText = localStorage.getItem('alunos');
            if(jsonText){
                GradService.alunos = JSON.parse(jsonText);
            }
        }
            
}