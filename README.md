#Projeto de Estágio Compass: Recriação de Página Figma

#Descrição

Este projeto envolve a recriação de uma página da web projetada pelo Figma usando apenas HTML, CSS e JavaScript . O objetivo é reproduzir com precisão o layout e o design, ao mesmo tempo em que implementa a responsividade para garantir que a página tenha uma boa aparência em vários tamanhos de tela (celular e desktop).

A página inclui todos os elementos e estilos especificados no design do Figma, como tipografia, cores, espaçamento e imagens. O desafio era traduzir manualmente os componentes visuais do Figma para HTML e CSS estáticos sem depender de frameworks CSS ou componentes pré-construídos, mantendo a integridade do design.

###Características:
-Conversão de design em código do Figma usando HTML e CSS simples.
-Layout responsivo para visualizações em dispositivos móveis, tablets e desktops.
-Estilizar elementos como texto, botões, imagens e formulários com base em mockups do Figma.
-Uso de sistemas flexbox e grid para layout e alinhamento.

##Conhecimento Usado

Neste projeto, apliquei os seguintes conceitos e ferramentas:

**HTML** :

-Elementos semânticos como <header>, <footer>, <section>, <article>, e <div>para estruturar a página.
-Incorporação de imagens usando atributos <img>apropriados altpara acessibilidade.

**CSS** :

-**Flexbox** : Usado para layout responsivo e alinhamento de elementos.
-**Grade CSS** : usada para gerenciar layouts de página complexos e garantir capacidade de resposta.
-**Consultas de mídia** : garantiu que a página se adaptasse a diferentes tamanhos de tela (celular, tablet e desktop).
-**Variáveis ​​CSS** : utilizadas para gerenciamento consistente de cores, fontes e espaçamento em todo o projeto.

**Design responsivo** :

-Consultas de mídia usadas para ajustar estilos para diferentes larguras de tela (por exemplo, abordagem mobile-first).

**JavaScript** :

-**Manipulação do DOM** : Utilizado para selecionar e modificar elementos da página dinamicamente, como menus, filtros e botões de ação.
-**Eventos** : Eventos como click e DOMContentLoaded foram usados para interatividade, garantindo que os scripts só rodem quando o DOM estiver carregado.
-**Menu Hamburger** : Implementado com classList.toggle para abrir e fechar o menu de navegação responsivo.
-**Filtro de itens** : Função que filtra e exibe categorias específicas de produtos, incluindo uma opção aleatória ao selecionar "todos".
-**Sistema de quantidade** : Permite incrementar ou decrementar a quantidade de um produto utilizando botões de "+" e "-".
-**Favoritar itens** : Adiciona ou remove um item dos favoritos ao alternar a classe de um ícone de coração, alterando também a acessibilidade (aria-label).
