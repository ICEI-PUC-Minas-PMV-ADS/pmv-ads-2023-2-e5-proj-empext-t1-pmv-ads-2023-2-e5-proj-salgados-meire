# Planos de Testes de Software

| Caso de Teste CT-01| Verificar Funcionalidade dos Links da Página Inicial |
|-------------------|--------------------
| Requisitos Associados | RF-01: O aplicativo deve mostrar as opções do cardápio. <p>RF-02: O aplicativo deve disponibilizar a quantidade de salgados a serem pedidos.</p> RF-07: O aplicativo deve permitir ao usuário adicionar seu nome e telefone de contato.|
|Objetivo do Teste| Verificar se os links da página inicial estão funcionando corretamente e direcionando para as páginas correspondentes.
|Passos| • 1°: Acessar o navegador. |
| • 2°: Informar o endereço do site. |
| • 3°: Visualizar a página inicial. |
| • 4°: Clicar nos links da página inicial.|
|Critérios de Êxito|Todos os links da página inicial devem redirecionar os usuários para as páginas corretas|

| Caso de Teste CT-02| Verificar Funcionamento do Filtro de Pesquisa |
|------------------|-------------------
|Requisitos Associados| RF-01: O aplicativo deve mostrar as opções do cardápio. <p>RF-03: O aplicativo deve permitir realizar a conferência de informações como: ingredientes, valor do pedido, e data de entrega. </p>
|Objetivo do Teste| Verificar se o filtro de pesquisa está recuperando os dados inseridos pelo usuário corretamente na página do cardápio.
|Passos| 1°: Acessar o navegador.<p>2°: Informar o endereço do site.</p>3°: Visualizar a página do cardápio.<p>4°: Digitar no filtro de pesquisa algum dado presente na página do cardápio e verificar se o resultado é exibido na página.</p>
|Critérios de Êxito| Os dados inseridos no filtro de pesquisa devem mostrar os itens do cardápio que contenham o dado informado.|

| Caso de Teste CT-03| Verificar Detalhes dos Salgados |
|-------------------|---------------
| Requisitos Associados | RF-01: O aplicativo deve mostrar as opções do cardápio.
| Objetivo do Teste | Verificar se todas as informações referentes aos salgados estão disponíveis na página do cardápio.
| Passos | 1°: Acessar o navegador. 2°: Informar o endereço do site. 3°: Visualizar a página do cardápio.
| Critérios de Êxito | Todas as informações, incluindo imagens e preço unitário salgados, referentes aos produtos devem estar disponíveis na página do cardápio |

| Caso de Teste CT-04| Verificar Cadastro de Usuário/Administrador |
| -------------- | -------------
| Requisitos Associados | RF-: O aplicativo deve permitir ao usuário/administrador cadastrar uma conta.
| Objetivo do Teste | Verificar se o cadastro de usuário está sendo realizado corretamente.
| Passos | 1°: Acessar o navegador. 2°: Informar o endereço do site. 3°: Visualizar a página inicial. 4°: Clicar em “Área Administrativa” na página inicial. 5°: Clicar em "Cadastre-se" no menu. 6°: Preencher o formulário e clicar em “Cadastrar”.
| Critérios de Êxito | Deve ocorrer uma validação das informações fornecidas pelo usuário, e ao clicar em "Cadastrar", deve aparecer a mensagem "Usuário cadastrado com sucesso".|

| Caso de Teste CT-05| Verificar Cadastro de Salgados |
| --------- |---------------------
| Requisitos Associados | RF-0: O aplicativo deve permitir ao usuário/administrador fazer o cadastro de salgados.
| Objetivo do Teste | Verificar se o cadastro de salgados está sendo realizado corretamente.
| Passos | 1°: Acessar o navegador. 2°: Informar o endereço do site. 3°: Visualizar a página inicial. 4°: Clicar em “Entrar” no menu. 5°: Preencher os dados e Clicar em “Entrar”. 6°: Visualizar a página de perfil. 7°: Clicar em “Cadastro de salgados” no menu. 8°: Visualizar a página de cadastro de salgados. 9°: Inserir as informações sobre o salgado. Clicar em “Cadastrar”.
| Critérios de Êxito | Deve ocorrer uma validação das informações fornecidas pelo usuário, e ao clicar em "Cadastrar", deve aparecer a mensagem "Salgado cadastrado com sucesso". |

| Caso de Teste CT-06| Verificar Pedidos |
| --------------- | -----------
| Requisitos Associados | RF-04: O aplicativo deve permitir aceitar ou recusar os pedidos. (Prazo de 1H)
| Objetivo do Teste | Verificar se a opção de aceitar ou recusar um pedido está sendo realizado corretamente dentro do prazo pré-estabelecido.
| Passos | 1°: Acessar o navegador. 2°: Informar o endereço do site. 3°: Visualizar a página inicial. 4°: Clicar em “Área Administrativa” no menu. 5°: Realizar login. 6°: Clicar em “Resumo de Pedidos” no menu.
| Critérios de Êxito | Deve aparecer o pedido e nele haver 2 opções de “Aceitar Pedido” e “Recusar Pedido” e de acordo com a opção escolhida deve aparecer a mensagem “Pedido Aceito Com Sucesso” ou “Pedido Recusado Com Sucesso”.|

| Caso de Teste CT-07| Realização de Pedido |
| ----------------- | --------------
| Requisitos Associados | RF-05: O aplicativo deve permitir ao usuário cancelar seu pedido. RF-07: O aplicativo deve permitir ao usuário adicionar seu nome e telefone de contato. RF-09	O aplicativo deverá disponibilizar qual será a forma de pagamento: Cartão, dinheiro ou pix. (Recebimento na entrega).
| Objetivo do Teste | Verificar se na realização do pedido está sendo solicitado o preenchimento de alguns dados do cliente, como nome, telefone e endereço de entrega. Verificar se o cliente consegue fazer o cancelamento de seus pedidos e se o cliente está informando o meio de pagamento.
| Passos | 1°: Acessar o Navegador. 2°: Informar o endereço do site. 3°: Visualizar a página do cardápio. 4°: Adicionar os produtos do cardápio no Pedido. 5°: Informar tipo de Pagamento. 6°: Preencher formulário de dados. Finalizar Pedido.
| Critérios de Êxito | Os produtos escolhidos devem ser apresentados no pedido, aparecendo o nome e o valor do produto.  Deve ser informado o tipo de pagamento escolhido pelo cliente. Deve ser preenchido pelo cliente um formulário informando seus dados para que possa ser realizado a entrega do pedido. Deve aparecer a opção de “Finalizar Pedido” e quando a opção for selecionada é necessário aparecer a mensagem “Pedido Finalizado”. |


# Evidências de Testes de Software

Apresente imagens e/ou vídeos que comprovam que um determinado teste foi executado, e o resultado esperado foi obtido. Normalmente são screenshots de telas, ou vídeos do software em funcionamento.
