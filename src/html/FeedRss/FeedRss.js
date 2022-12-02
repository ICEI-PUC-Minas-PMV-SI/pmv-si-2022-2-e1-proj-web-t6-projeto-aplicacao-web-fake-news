{
    Promise.all([//fazendo fetch dos links dos arquivos XML
        fetch("rss/rss-R7.xml").then(response => response.text()),
        fetch("rss/rss-G1.xml").then(response => response.text()), 
        fetch("rss/rss-EP.xml").then(response => response.text())
    ]).then(function(data){

        //fazendo parse do arquivo xml para text
        let parserR7 = new DOMParser();
        let xmlDOCR7 = parserR7.parseFromString(data[0], "text/xml");
        let itemStrLenghtR7 = xmlDOCR7.getElementsByTagName("entry").length; // pegar tamanho da string de noticias

        let imgItemR7 = ""; // SET imagem R7 padrão como vazia

        //fazendo parse do arquivo xml para text
        let parserG1 = new DOMParser();
        let xmlDOCG1 = parserG1.parseFromString(data[1], "text/xml");
        let itemStrLenghtG1 = xmlDOCG1.getElementsByTagName("item").length; // pegar tamanho da string de noticias

        //fazendo parse do arquivo xml para text
        let parserEP = new DOMParser();
        let xmlDOCEP = parserEP.parseFromString(data[2], "text/xml");
        let itemStrLenghtEP = xmlDOCEP.getElementsByTagName("item").length; // pegar tamanho da string de noticias                    

        // delimitar no máximo 5 noticias geradas por cada fonte
        let limitadorDeNoticiasR7 = 0;
        let limitadorDeNoticiasG1 = 0;
        let limitadorDeNoticiasEP = 0;
            
        
        // looping para gerar as noticias do R7
        for(let x = 0; x < itemStrLenghtR7; x++){ 

            // pegar as tags "entry" das noticias do RSS                
            let itemStrR7 = xmlDOCR7.getElementsByTagName("entry")[x]; // pegando todos os conteudos de entry
            let titleItemR7 = itemStrR7.querySelectorAll("title")[0].innerHTML; // separando os titulos dos itens
            let linkItemR7 = itemStrR7.querySelectorAll("url")[0].innerHTML; // separando os links dos itens
            imgItemR7 = itemStrR7.querySelectorAll("mediaurl")[0].innerHTML; // separando as origens das imagens dos itens 

            if(imgItemR7 === ""){ // imagem undefined ou null
                    
                console.log("erro! imagem da noticia n°" + x + " do R7 indefinida. Noticia não pode ser carregada");
            }
            else{ // imagem definida
                
                // contador de 5 noticias limite por fonte rss
                limitadorDeNoticiasR7 ++;
                if(limitadorDeNoticiasR7 > 5){
                    break;
                }   

                let listR7 = document.getElementById("Lista-noticias-secundarias"); // criar lista   
            
                // função para gerar as noticias em lista
                function createListR7(){

                    return `<li class="list-group-item bg-transparent">
                                
                                <a href="${linkItemR7}" target="_blank" class="titulo-noticia-secundario"><img src="${imgItemR7}" class="imagem-noticia-secundario" alt="">${titleItemR7}</a>

                            </li>`
            
                }

                document.getElementById("Lista-noticias-secundarias").innerHTML += createListR7(); // chamar função pra criar lista
            }
        }           
        
        // looping para gerar noticias do G1
        for(let x = 0; x < itemStrLenghtG1; x++){

            // pegar as tags "item" das noticias do RSS
            let itemStrG1 = xmlDOCG1.getElementsByTagName("item")[x]; //pegando todos os conteudos de itens
            let titleItemG1 = itemStrG1.querySelectorAll("title")[0].innerHTML; // separando os titulos dos itens
            let linkItemG1 = itemStrG1.querySelectorAll("link")[0].innerHTML; // separando os links dos itens
            let imgItemG1 = itemStrG1.getElementsByTagName("media:content")[0]; // separando as origens das imagens dos itens 

            if(typeof imgItemG1 === "undefined"){ //imagem undefined ou null
                    
                console.log("erro! imagem da noticia n°" + x + " do G1 indefinida. Noticia não pode ser carregada");
            }
            else{ // imagem definida

                // contador de 5 noticias limite por fonte rss
                limitadorDeNoticiasG1 ++;
                if(limitadorDeNoticiasG1 > 10){
                    break;
                }   

                if(limitadorDeNoticiasG1 == 1){
                    let imgItemSrcG1 = imgItemG1.attributes[0].value; // separando o link das imagens das noticias

                    // função para gerar as noticias em lista
                    function createListG1_500px(){

                    return `<div class="wrapped-imagem-500x500"> 
                                
                                <a href="${linkItemG1}" target="_blank id="titulo-noticias500px"><div class="imagem-noticia-primario-500px" style="background-image: url(${imgItemSrcG1});">${titleItemG1}</div> </a>
                                               
                            </div>`

                    }

                    document.getElementById("wrapper-imagem-500x500").innerHTML += createListG1_500px(); // chamar função pra criar lista
                    function createListG1(){

                        return `<li class="list-group-item bg-transparent">
    
                                    <img src="${imgItemSrcG1}" class="imagem-noticia-secundario" alt="">
                                    <a href=${linkItemG1}" target="_blank" class="titulo-noticia-secundario">${titleItemG1}</a>
    
                                </li>`
    
                    }
    
                    document.getElementById("Lista-noticias-principais").innerHTML += createListG1(); // chamar função pra criar lista
                    
                }
                else if(limitadorDeNoticiasG1 > 1 && limitadorDeNoticiasG1 <= 5){
                    let imgItemSrcG1 = imgItemG1.attributes[0].value; // separando o link das imagens das noticias

                    // função para gerar as noticias em lista
                    function createListG1_250px(){

                    return `<div class="wrapped-imagem-250x250">
                                 
                                <a href="${linkItemG1}" target="_blank id="titulo-noticias250px"><div class="imagem-noticia-primario-250px" style="background-image: url(${imgItemSrcG1});">${titleItemG1}</div></a>
                                                
                            </div>`

                    }

                    document.getElementById("wrapper-imagem-250x250").innerHTML += createListG1_250px(); // chamar função pra criar lista

                    function createListG1(){

                        return `<li class="list-group-item bg-transparent">
                 
                                    <a href="${linkItemG1}" target="_blank" class="titulo-noticia-secundario"><img src="${imgItemSrcG1}" class="imagem-noticia-secundario" alt="">${titleItemG1}</a>
    
                                </li>`
    
                    }
    
                    document.getElementById("Lista-noticias-principais").innerHTML += createListG1(); // chamar função pra criar lista

                }else{

                let imgItemSrcG1 = imgItemG1.attributes[0].value; // separando o link das imagens das noticias

                // função para gerar as noticias em lista
                function createListG1(){

                    return `<li class="list-group-item bg-transparent">

                                <a href="${linkItemG1}" target="_blank" class="titulo-noticia-secundario"><img src="${imgItemSrcG1}" class="imagem-noticia-secundario" alt="">${titleItemG1}</a>

                            </li>`

                }

                document.getElementById("Lista-noticias-secundarias").innerHTML += createListG1(); // chamar função pra criar lista
                }
            }

        }
        
        //looping para gerar noticias do El Pais
        for(let x = 0; x < itemStrLenghtEP; x++){

            // pegar as tags "item" das noticias do RSS
            let itemStrEP = xmlDOCEP.getElementsByTagName("item")[x]; //pegando todos os conteudos de itens
            let titleItemEP = itemStrEP.getElementsByTagName("title")[0].innerHTML; // separando os titulos dos itens
            let linkItemEP = itemStrEP.querySelectorAll("link")[0].innerHTML; // separando os links dos itens
            let imgItemEP = itemStrEP.getElementsByTagName("media:content")[0]; // separando as origens das imagens dos itens 

            
            if(typeof imgItemEP === "undefined"){ //imagem undefined ou null
                    
                console.log("erro! imagem da noticia n°" + x + " do El País indefinida. Noticia não pode ser carregada");
            }
            else{

                // contador de 5 noticias limite por fonte rss
                limitadorDeNoticiasEP ++;
                if(limitadorDeNoticiasEP > 5){
                    break;
                }   

                let imgItemSrcEP = imgItemEP.attributes[0].value; // separando o link das imagens das noticias
                
                let listEP = document.getElementById("Lista-noticias-secundarias"); // criar lista   

                // função para gerar as noticias em lista
                function createListEP(){

                    return `<li class="list-group-item bg-transparent">

                                <a href="${linkItemEP}" target="_blank" class="titulo-noticia-secundario"><img src="${imgItemSrcEP}" class="imagem-noticia-secundario" alt="">${titleItemEP}</a>

                            </li>`

                }

                document.getElementById("Lista-noticias-secundarias").innerHTML += createListEP(); // chamar função pra criar lista

            }
        }
    })

}