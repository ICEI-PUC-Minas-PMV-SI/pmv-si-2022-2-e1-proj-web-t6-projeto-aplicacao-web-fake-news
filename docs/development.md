# Programação de Funcionalidades - HTML e CSS.

A programação das funcionalidades determinadas através da Aplicação Web, foi realizada com a elaboração de múltiplos documentos HTML e estilos CSS, que 
possibilitassem um design agradável e condizente com a elaboração dos templates feitos na plataforma Figma.

A programação das páginas foi feita em dois documentos ".html" semi-idênticos, um para caso o usuário estivesse logado, outro para caso ele não estivesse 
cadastrado no site no momento de acesso.

O código fonte que exemplifica como a programação foi feita consta na ["src"](https://github.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2022-2-e1-proj-web-t6-projeto-aplicacao-web-fake-news/tree/main/src) do projeto.

O resultado em HTML e CSS das páginas constam em imagem abaixo, para a correção do código basta acessar o código na pasta fonte do projeto nos arquivos de 
mesmo nome.

## in_Home.html e out_home.html

A página "Home" tem como objetivo receber o usuário na aplicação web e redirecioná-lo pelo conteúdo através dos botões na aba inferior ou dos links na barra 
de navegação.

<img width="925" alt="image" src="https://user-images.githubusercontent.com/110254863/202917808-37b57bd2-38bc-40cd-aec1-e75ea189e80b.png">

## in_FeedRSS.html e out_FeedRSS.html

A página de "Feed de Notícias" tem como objetivo receber atualizações dinâmicamente de Feeds RSS de site de notícias e utilizá-los para preencher as 
informações do corpo da página. Como o preenchimento dinâmico será realizado através do JavaScript, a estrutura foi preenchida com valores Lorem Ipsum no 
HTML estático.

<img width="911" alt="image" src="https://user-images.githubusercontent.com/110254863/202918107-cd76ceed-7612-4823-850f-4871badf2eef.png">

## in_MotorDeBusca.html e out_MotorDeBusca.html

A página de "Pesquisa" tem como objetivo servir como motor de busca em sites de notícia verificados determinados pelo grupo e retornar uma lista de 
resultados. Como o preenchimento dinâmico será realizado através do JavaScript, a estrutura foi preenchida com valores Lorem Ipsum no HTML estático.

<img width="910" alt="image" src="https://user-images.githubusercontent.com/110254863/202918353-638f7317-530a-4acc-bb75-f89e5b1988f8.png">

## in_BlogFakeNews.html, out_BlogFakeNews.html e noticiaXX.html

A página de "O Que São "Fake News"?" tem como objetivo servir como Blog Estático de informações pré-definidas e pesquisas pelo grupo sobre o advento das 
FakeNews na sociedade e, seu impacto como um todo, contendo curiosidades, informações, dicas etc. Diferentemente das outras páginas, essa possui uma 
estrutura de usuário logado ou deslogado, que ao acessar algum tópico do blog, redireciona para um novo documento HTML (**noticiaXX**) com as informações 
referentes ao conteúdo do Blog. Tal página se baseará totalmente no HTML e CSS estáticos, sem dinamicidades, portanto já está funcionando.

<img width="924" alt="image" src="https://user-images.githubusercontent.com/110254863/202918715-e6eca139-939a-40a3-be52-6e8521fbf41e.png">

<img width="911" alt="image" src="https://user-images.githubusercontent.com/110254863/202918742-c7eb4b02-d986-4036-9258-0d90d7848654.png">

## in_ControleUsuario.html

A página de "Usuário" tem como objetivo realizar a administração do cadastro do usuário na plataforma "Not So Fake", a mesma já foi estruturada através de 
botões e formulários em HTML e CSS que possibilitarão futuramente a atualização de preferências no cadastro do usuário contido em arquivo ".json". Atualmente 
a estrutura da página sómente é visual devido ser uma entrega em HTML e CSS mas, o seu objetivo será atingido posteriormente através de códigos JavaScript.

<img width="922" alt="image" src="https://user-images.githubusercontent.com/110254863/202918958-6fdd5eeb-7e93-40cf-9875-58985acd7056.png">

## out_Cadastro.html e out_Login.html

As páginas de "Login" e "Cadastro" possuem como objetivo o armazenamento e autentificação de usuários na plataforma, o login e cadastro irá funcionar através 
de formulários e botões elaborados em HTML e CSS que irão, ou conferir a procedência dos dados de login em banco ".json" para realização do acesso, ou 
cadastrar novas informações de usuário no banco ".json". A visualização das páginas e os elementos dos formulários HTML e CSS já estão funcionando, a 
dinamicidade de conferência e criação de dados será feita na etapa posterior em JavaScript.

<img width="925" alt="image" src="https://user-images.githubusercontent.com/110254863/202919172-a3b970c0-6354-48c9-8a76-cd391918c552.png">

<img width="926" alt="image" src="https://user-images.githubusercontent.com/110254863/202919198-2f9d8f13-6d5a-4c11-b80c-49e4bf850eb1.png">
