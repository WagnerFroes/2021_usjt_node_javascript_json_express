//console.log('Wagnao')
 
var express = require('express');
var index = express();


index.set('view engine', 'ejs');

index.get('/home', function(req, res){
  res.render("../views/home")
})

index.get('/', function(req, res){
  res.json(
    faculdade = {nome:'Universidade Sao Judas Tadeu', endereco: 'Rua B numero 2'}
    
    ,professores = [
      { nome: 'Professor A', sobrenome:'A', endereco: {
        rua: 'Rua A', numero: '1', bairro: 'Mooca'
      }, comportamento: ['lecionando', 'pesquisando'] }, 
      { nome: 'Professor B', sobrenome:'B', endereco: {
        rua: 'Rua B', numero: '2', bairro: 'Perus'
      }, comportamento: ['lecionando', 'pesquisando'] }, 
    ]
       
    ,professor = livro => { professores.map(item => console.log(`O ${item.nome} ${item.sobrenome} está ${ livro ? (item.comportamento[1] + 'o livro ' + livro?.titulo  + ' do autor ' + livro?.autor )  : item.comportamento[0]} `))}
       
    ,livro = {titulo: 'Node.js em 2022', autor: 'Desconhecido'}
    
    ,professor(livro)
  );  
  
});

index.listen(3000, function(){
  console.log('Executando na porta 3000!');
});



//____________Exemplo_1___________________

// professor1 = {
//     nome: "Eduardo",
//     sobrenhome: "Sousa",
//     endereco: {
//         logradouro: 'Rua C',
//         numero: '155',
//         bairro: 'Tatuapé'
//     },
//     lecionar: () => 'Estou lecionando :)',
//     pesquisar: (livro) => `${livro.titulo} é do ${livro.autor}`,
// }

// professor2 = {
//     nome: "Ana",
//     sobrenhome: "Sousa",
//     endereco: {
//         logradouro: 'Rua v',
//         numero: '1525',
//         bairro: 'Tatuapé'
//     },
//     lecionar: () => 'Estou lecionando :)',
//     pesquisar: (livro) => `${livro.titulo} é do ${livro.autor}`,
// }

// livro = {
//     titulo: "A relíquia",
//     autor: "Eça de Queirós"
// }

// faculdade = {
//     nome: "USJT",
//     endereco: 'rua B, numero 2',
//     professores: [
//         professor1,
//         professor2
//     ]
// }

// for (professor of faculdade['professores']){
//     console.log(professor.lecionar())

//     console.log(professor.pesquisar(livro))
     
// }

//____________Exemplo_FIM_1__________________
//____________Exemplo_2___________________

// const faculdade = {nome:'Universidade Sao Judas Tadeu', endereco: 'Rua B numero 2'}

// const professores = [
// 	{ nome: 'Professor A', sobrenome:'A', endereco: {
// 		rua: 'Rua A', numero: '1', bairro: 'Mooca'
// 	}, comportamento: ['lecionando', 'pesquisando'] }, 
// 	{ nome: 'Professor B', sobrenome:'B', endereco: {
// 		rua: 'Rua B', numero: '2', bairro: 'Perus'
// 	}, comportamento: ['lecionando', 'pesquisando'] }, 
// ]


// const professor = livro => { professores.map(item => console.log(`O ${item.nome} ${item.sobrenome} está ${ livro ? (item.comportamento[1] + 'o livro ' + livro?.titulo  + ' do autor ' + livro?.autor )  : item.comportamento[0]} `))}
// const livro = {titulo: 'Node.js izi', autor: 'Desconhecido'}
// professor(livro)

//____________Exemplo_FIM_2__________________
//____________Exemplo_3___________________
// let createProf = (nome, sobrenome , endereco) =>{
//     return {
//       "nome":       nome,
//       "sobrenome":  sobrenome,
//       "endereco":   endereco,
//       "lecionar":   () => {console.log("lecionando...")},
//       "pesquisar":  (livro) => livro.autor + livro.nome
//     }
//   }
  
//   createEnderecoProf = (logradouro, numero, bairro) =>{
//     return{
//       "logradouro":logradouro,
//       "numero":    numero,
//       "bairro":    bairro
//     }
//   }
  
//   createLivro = (titulo, autor) =>{
//     return {
//       "titulo": titulo,
//       "autor":  autor
//     }
//   }
  
//   let createFacul = (nome, endereco, professores) => {
//     return {
//       "nome":       nome,
//       "endereco":   endereco,
//       "professores": professores
//     }
//   }
  
//   let enderecoProfA = createEnderecoProf("grande logradouro a", "2", "mooca")
//   let enderecoProfB = createEnderecoProf("grande logradouro b", "3", "paulista")
  
//   let profA = createProf("A", "Silva", enderecoProfA)
//   let profB = createProf("B", "Guedes", enderecoProfB)
  
//   let usjt = createFacul(
//     "USJT", 
//     "Rua B, numero 2",
//     [profA,profB]
//   )
  
//   console.log(usjt)
//____________Exemplo_FIM_3__________________  
//____________Exemplo_4____________________
// let faculdade = {
//   nome: 'USJT',
//   endereco: {
//       logradouro: 'Rua B',
//       numero: 2
//   },
//   professores: [
//       {
//           nome: 'João',
//           sobrenome: 'Silva',
//           endereco: {
//               logradouro: 'Rua J',
//               numero: 121,
//               bairro: {
//                   tipo: 'Vila',
//                   nome: 'ABC'
//               }
//           },
//           pesquisar: (livro) => console.log (Pesquisando com o livro ${livro.titulo} do ${livro.autor}),
//           lecionar: function (){ console.log ("Lecionando...")}
//       },
//       {
//           nome: 'Maria',
//           sobrenome: 'Silva',
//           pesquisar: function (livro){console.log(Pesquisando com o livro ${livro.titulo} do ${livro.autor})},
//           lecionar: () => {console.log ("Lecionando...")},
//           endereco: {
//               logradouro: 'Rua W',
//               numero: 200,
//               bairro: {
//                   tipo: 'Jardim',
//                   nome: 'JKW',
//                   lat: -23.333,
//                   lng: 45.33
//               }
//           }
//       }
//   ]
// }

// for (professor of faculdade.professores){
//   professor.lecionar()
//   professor.pesquisar({autor: 'Donald Knuth', titulo: "Concrete Mathematics"})
// }
//____________Exemplo_FIM_4__________________  