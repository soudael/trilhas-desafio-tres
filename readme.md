# Sistema de Inscrição
<p style="text-align: justify;">O Governo do Estado do Maranhão, por meio da <strong>SECTI</strong> em parceria com a <strong>FAPEMA</strong>, deseja aprimorar o sistema de inscrição do seu programa de formação em tecnologia. O novo sistema deve ser mais dinâmico, responsivo e permitir maior interatividade com os candidatos. Agora, além de aprimorar para um formulário funcional, os participantes devem implementar funcionalidades utilizando <strong>JavaScript</strong>, como validação de campos e armazenamento temporário de dados. Também é necessário documentar todo o processo e apresentar melhorias de usabilidade.</p>

O projeto se trata de um site sistematizado para incluir:
- Tela inicial de boas-vindas ao usuário.
- Tela de login e cadastro no sistema.
- Formulário de inscrição no programa de formação em tecnologia.<br>

É um sistema quase completo, mas funcional.


## Como rodar localmente no VSCode
Para rodar o código no seu navegador, utilize a extensão [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) disponível no marketplace do `VSCode` e clique com o botão direito em cima do arquivo `index.html`. Clique em **Abrir com o Live Server** e espere alguns segundos.<br>
Voilà! O site deve rodar normalmente.


## Tecnologias utilizadas

#### Figma
<p style="text-align: justify;">O design do figma, disponibilizado anteriormente, foi atualizado por </strong><a href="https://br.linkedin.com/in/beatriz-garreto-a71567263">Beatriz Garreto</a></strong> para agregar novas telas e melhorias. Novos ícones foram adicionados, além de uma melhor organização do design geral. O Figma é extremamente importante durante o desenvolvimento de qualquer projeto, pois permite ter uma visão ampla do design e facilita a organização das intenções presentes ou futuras que serão implementadas.</p>


#### HTML
<p style="text-align: justify;">Utilizado para marcar os itens do site, como vtítulos, imagens, hyperlinks, forms e labels</strong>. Aplicamos conhecimentos que adquirimos no processo para facilitar o funcionamento do site, alguns conceitos aprimorados para um HTML bem escrito e estruturado, além de facilitar a estilização posterior.</p>


#### CSS
<p style="text-align: justify;">Para estilizar classes, IDs, tags com o intuito de exibir um site mais atraente e apelativo a partir da estrutura natural do HTML. Com a adição de cores, posicionamentos e até mesmo <strong>animações</strong>. Nesse projeto, foram adicionadas novas lógicas de posicionamento, e em boa parte dos itens, como botões e imagens/ícones receberam animações dinâmicas.<br>
Foi utilizado também o <a href="https://meyerweb.com/eric/tools/css/reset">reset.css</a> do <strong>Eric A. and Kathryn S. Meyer</strong> para um melhor controle dos estilos.</p>


#### JavaScript
A linguagem de programação da web, com o objetivo de dar vida às interações com o site. Os códigos programados pelo [Carlos Daniel](https://github.com/soudael) tem o objetivo de deixar o projeto mais dinâmico como um todo. Tais quais estão inclusos:
- Envio de dados dos usuários cadastrados para o `localStorage`;
- Formatação de alguns inputs numéricos;
- Validação dos valores inseridos nos campos;
- Estilização conjunta com o CSS para os elementos do site;
- Interação dinâmica com o site.


#### Vercel
Tecnologia usada para publicação do site, para que se torne de fácil acesso. Integrado à conta do **soudael** do GitHub. O link pode ser acessado no sobre do repositório ou clicando [aqui](https://formulario-de-inscricao-inova.vercel.app/).


## Principais funcionalidades

### Tela inicial : Home<br>
A tela inicial é bem simples e contém três elementos principais:
- Mensagem de recebimento, chamando a atenção para o botão de se inscrever.
- Dois botões:
  - Botão principal destacado: leva o usuário para a tela de cadastro, posteriormente para o formulário de inscrição.
  - Botão secundário, que leva o usuário diretamente para a tela de login, que, caso já tenha se inscrito no sistema, será levado para uma tela (atualmente imaginária) onde ele poderá acompanhar sua inscrição.

### Tela de login e cadastro : Login & Sign
Funcionalidades:

### Formulário de inscrição : Forms