# Sistema de Inscrição
<p style="text-align: justify;">O Governo do Estado do Maranhão, por meio da <strong>SECTI</strong> em parceria com a <strong>FAPEMA</strong>, deseja aprimorar o sistema de inscrição do seu programa de formação em tecnologia. O novo sistema deve ser mais dinâmico, responsivo e permitir maior interatividade com os candidatos. Agora, além de aprimorar para um formulário funcional, os participantes devem implementar funcionalidades utilizando <strong>JavaScript</strong>, como validação de campos e armazenamento temporário de dados. Também é necessário documentar todo o processo e apresentar melhorias de usabilidade.</p>

Este sistema web inclui as seguintes páginas:
- Tela inicial com mensagem de boas-vindas.
- Tela de login e cadastro de usuários.
- Formulário de inscrição para o programa de formação em tecnologia.<br>

É um sistema funcional, com foco na experiência do usuário e na interatividade.


## Como rodar localmente no VSCode
Para rodar o projeto no navegador:
1. Instale a extensão [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) no `VSCode`;
2. Clique com o botão direito no arquivo `index.html`;
3. Selecione **Abrir com o Live Server**;
4. Aguarde alguns segundos para que o site carregue.<br>

**Pronto!** O sistema estará funcionando localmente no seu navegador.


## Tecnologias utilizadas

#### Figma
<p style="text-align: justify;">O design da interface foi atualizado e aprimorado por </strong><a href="https://br.linkedin.com/in/beatriz-garreto-a71567263">Beatriz Garreto</a></strong>, com a inclusão de novas telas, ícones e melhor organização visual. O Figma foi essencial para garantir uma visão clara e bem estruturada do layout do projeto.</p>

#### HTML
<p style="text-align: justify;">Responsável pela marcação dos elementos da página, como títulos, imagens, links, formulários e rótulos. O código HTML foi estruturado com atenção à semântica e organização, facilitando a estilização com CSS.</p>

#### CSS
<p style="text-align: justify;">Utilizado para definir o estilo visual do site — cores, posicionamentos, animações e responsividade. Foram aplicadas novas lógicas de layout e animações em elementos como botões e ícones. Também foi utilizado o <a href="https://meyerweb.com/eric/tools/css/reset">reset.css</a> de <strong>Eric A. and Kathryn S. Meyer</strong> para padronizar o estilo base entre navegadores.</p>



#### JavaScript
Aplicado para tornar o site interativo e dinâmico, com funcionalidades como:
- Armazenamento dos dados dos usuários no `localStorage`;
- Formatação automática de campos numéricos;
- Validação dos dados inseridos nos formulários;
- Estilização dinâmica em conjunto com o CSS;
- Integração entre diferentes telas do sistema.<br>

Os scripts foram desenvolvidos por [Carlos Daniel](https://github.com/soudael).

#### Vercel
A aplicação foi publicada utilizando a plataforma Vercel, tornando o acesso mais prático e rápido. O site pode ser acessado pelo link disponível no repositório ou clicando [aqui](https://formulario-de-inscricao-inova.vercel.app/).


## Funcionalidades Principais

### Tela Inicial

A página inicial é simples e direta. Possui:

- Uma mensagem de boas-vindas incentivando a inscrição.
- Dois botões:
  - **Inscreva-se**: redireciona para a tela de cadastro.
  - **Já tenho uma conta**: leva para a tela de login.

### Tela de Login e Cadastro

- **Login**: permite que usuários já cadastrados acessem sua conta.
- **Cadastro**: possibilita o registro de novos usuários, que são então encaminhados ao formulário de inscrição.

Ambas as telas possuem funcionalidades semelhantes e focadas na navegação fluida entre etapas.

### Formulário de Inscrição

Esta é a parte central do projeto. O formulário solicita informações como:

- Nome completo
- Telefone
- E-mail
- Documento de identidade (RG)
- CPF
- CEP

> _Observação: após a inscrição, o sistema imaginariamente leva o usuário a uma área para acompanhar sua inscrição (funcionalidade ainda em desenvolvimento)._

**Todos os dados inseridos passam por validações antes de serem armazenados localmente. O objetivo é garantir a integridade e clareza das informações fornecidas pelo usuário.**