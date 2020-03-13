# Tradutor de legendas CS50
> Tradutor de legendas, voltado especialmente para legendas do CS50.

### O que é o CS50?
"O CS50 é um curso introdutório on-campus e on-line sobre ciência da computação ministrado na Universidade de Harvard." / Fonte: [Wikipedia](https://en.wikipedia.org/wiki/CS50)
* [Vídeo introdutório do CS50](https://www.youtube.com/watch?time_continue=52&v=3oFAJtFE8YU&feature=emb_logo)

Caso você tenha caído de paraquedas, recomento fortemente que assista o vídeo do [Filipe Deschamps](https://www.youtube.com/channel/UCU5JicSrEM5A63jkJ2QvGYw) antes de continuar:
* [Eu fiz um dos melhores cursos de Programação do Mundo! (minhas impressões)](https://www.youtube.com/watch?v=elIl48sZ3rA)

### Por que um tradutor de legendas?
Após visitar o site do curso, notei que apenas legendas em inglês estão disponibilizadas, então fiquei pensando em maneiras de contornar isso. Por este motivo e a vontade imensa de acompanhar o conteúdo, criei este tradutor de legendas que acredito que possa ajudar mais pessoas.

### Para quem serve este tradutor?
Para qualquer pessoa que esteja interessada no conteúdo incrível disponibilizado pela universidade de Harvard e (como eu) não manjam tanto do inglês.

## Começando: Instalação
Para dar início a instalação do tradutor, necesito que você tenha alguns pré-requisitos já instalados na sua máquina:
* [Node.js](https://nodejs.org/en/);
* [npm](https://www.npmjs.com/) ou [Yarn](https://yarnpkg.com/);

Após ter os requisitos acima, vamos continuar, primeiro clone o repositório (ou baixe o zip, se preferir):
```sh
git clone https://github.com/ribeirogab/cs50-translator.git
```

Com o repositório clonado na sua máquina, acesse-o e instale as dependencias:
```sh
cd cs50-translator
```
Se você utiliza o npm:
```sh
npm install
```
Se você utiliza o Yarn:
```sh
yarn
```
Pronto, primeira parte concluida, você já está com o tradutor e todas as suas dependencias em sua máquina, bora prosseguir...

## Cloud Translation API
Para traduzir as legendas utilizei a API do Google, foi a mais performática que encontrei.

 ##### Importante!
Para a tradução das legendas, você precisará de uma **API KEY** do **Cloud Translation API**, para isso (apesar de ser gratuito) você precisará de um cartão de crédito para realizar o cadastro no **Google Cloud**, caso você não possua um cartão de crédito, entre em contato comigo pelo email: ribeirogabx@gmail.com

### Cadastro
Antes de prosseguir, realize o cadastro no **Google Cloud** clicando [**aqui**](https://cloud.google.com/).

* [Documentação - Cloud Translation API](https://cloud.google.com/translate/docs/reference/rest/)

### Como conseguir minha API KEY?
Para facilitar as coisas, irei criar um pequeno tutorial em vídeo de como conseguir essa **API KEY**:
* Em breve...

### Colocando minha API KEY no tradutor
Com sua **API KEY** "em mãos", vamos implementá-la no tradutor, acesse o arquivo ``JSON`` no seguinte caminho:
```sh
~ /cs50-translator/src/keys/google-translate.json
```
Coloque sua **API KEY** neste arquivo, mais especificamente no lugar do ```"COLOQUE_SUA_API_KEY_AQUI"```:
```json
{
  "API_KEY": "COLOQUE_SUA_API_KEY_AQUI"
}
```
## Traduzindo as legendas
Com tudo preparado, agora precisamos das legendas em inglês que serão traduzidas.

### Onde encontro as legendas em inglês?
Primeiro de tudo, você precisará realizar um cadastro no site da [**edx**](https://courses.edx.org/) (plataforma que está disponibilizando o curso).
Após o cadastro, acesse o curso **CS50** [clicando aqui](https://courses.edx.org/courses/course-v1:HarvardX+CS50+X/course/), você irá entrar na página geral, com todo o conteúdo. Role para baixo até encontrar o material do **CS50 2020**, algo parecido com isso:
![material_cs502020](https://github.com/ribeirogab/cs50-translator/blob/master/img/material_cs502020.png)

Em [```Week 0```](https://courses.edx.org/courses/course-v1:HarvardX+CS50+X/courseware/b94adcd6bd6b4e69b2af7eef0d828674/823f7d8a587743569c13eac2bbbd04dd/?activate_block_id=block-v1%3AHarvardX%2BCS50%2BX%2Btype%40sequential%2Bblock%40823f7d8a587743569c13eac2bbbd04dd), você acessará o conteúdo da semana zero. Após isso, clique em um **ícone de filme** mais especificamente chamado "**Lecture**".
![week0_lecture](https://github.com/ribeirogab/cs50-translator/blob/master/img/week0_lecture.png)

Nesta página temos tudo o que precisamos, abaixo do vídeo iremos realizar o download de 2 arquivos:
* O víde0 (clique em "**Download video file**");
* A legenda (clique em "**Download SubRip (.srt) file**");

O restante do material segue o mesmo padrão, então você encontrará os vídeos e as legendas para download sempre no mesmo lugar.

## Executando o tradutor
Antes de executar, coloque o arquivo de legenda (.srt) que foi baixado na pasta com o seguinte caminho:
```sh
~ /cs50-translator/src/subtitles/
```

##### E então execute:
Se você utiliza o npm:
```sh
npm start
```
Se você utiliza o Yarn:
```sh
yarn start
```

O programa irá listar todos os arquivos (deixei um arquivo chamado ```test.srt```caso queira testar a API de tradução) ```.srt``` que estão na pasta ```~ /cs50-translator/src/subtitles/```, escolha o arquivo desejado digitando o seu número referencial.
```sh
yarn start
```

O programa iniciará a tradução:
```sh
yarn start
```

Por se tratar de um número absurdo de caracteres, ele irá demorar um pouco dependendo do desempenho da sua máquina, mas nada muito surreal. Mas em quanto o programa traduz a nossa legenda, vamos para última parte desta "jornada" para conseguir acompanhar o conteúdo do CS50.

## Colocando a legenda traduzida no vídeo
Com a legenda já traduzida, bora colocá-la no vídeo!
Para facilitar novamente, irei fazer alguns pequenos tutoriais de como implementar a legenda em vídeos nos diferentes sistemas operacionais. Mas enquanto eu não finalizo esses vídeos, deixarei alguns links que talvez possa ajudar.

### Windows
* Em breve...
* [YouTube](https://www.youtube.com/results?search_query=como+colocar+legenda+windows)

### macOS
* Em breve...
* [YouTube](https://www.youtube.com/watch?v=F8P4QHZszHA)

### Linux
* Em breve...
* [YouTube](https://www.youtube.com/results?search_query=como+colocar+legenda+linux)

## Fim
Chegamos ao fim, caso esteja com dificuldades ou com algum erro que está te impossibilitando de realizar os passos propostos, entre em contato comigo pelo email: ribeirogabx@gmail.com

## Meta
Gabriel Ribeiro - [LinkedIn](https://www.linkedin.com/in/ribeirogabx/) - ribeirogabx@gmail.com

Distribuído sob a licença MT. Veja ```LICENSE``` para mais informações.

[https://github.com/ribeirogab/cs50-translator](https://github.com/ribeirogab/cs50-translator)

## Contribuindo
1. Faça um Fork ( https://github.com/ribeirogab/cs50-translator )
2. Crie sua feature branch ( git checkout -b feature/fooBar)
2. Commit suas alterações ( git commit -am 'Add some fooBar')
4. Realize o Push para a branch ( git push origin feature/fooBar)
5. Crie um novo Pull Request
