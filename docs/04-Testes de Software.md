# Planos de Testes de Software

| Caso de Teste CT-01   | Verificar Funcionalidade dos Links da Página Inicial                                                                                                                                                                                                                                              |
| --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Requisitos Associados | RF-01: O aplicativo deve mostrar as opções do cardápio. <p>RF-02: O aplicativo deve disponibilizar a visualização das informações de cada salgado como: ingredientes, valor do cento e nome.</p> RF-07: O aplicativo deve permitir ao usuário adicionar seu nome, endereço e telefone de contato. |
| Objetivo do Teste     | Verificar se os links da página inicial estão funcionando corretamente e direcionando para as páginas correspondentes.                                                                                                                                                                            |
| Passos                | 1°: Acessar o navegador. 2°: Informar o endereço do site. 3°: Visualizar a página inicial. 4°: Clicar nos links da página inicial.                                                                                                                                                                |
| Critérios de Êxito    | Todos os links da página inicial devem redirecionar os usuários para as páginas corretas                                                                                                                                                                                                          |

| Caso de Teste CT-02   | Verificar Funcionamento do Filtro de Pesquisa                                                                                                                                                                              |
| --------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Requisitos Associados | RF-01: O aplicativo deve mostrar as opções do cardápio. <p>RF-03: O aplicativo deve permitir realizar a conferência do pedido, apresentando: valor total do pedido e data de entrega. </p>                                 |
| Objetivo do Teste     | Verificar se o filtro de pesquisa está recuperando os dados inseridos pelo usuário corretamente na página do cardápio.                                                                                                     |
| Passos                | 1°: Acessar o navegador. 2°: Informar o endereço do site. 3°: Visualizar a página do cardápio. 4°: Digitar no filtro de pesquisa algum dado presente na página do cardápio e verificar se o resultado é exibido na página. |
| Critérios de Êxito    | Os dados inseridos no filtro de pesquisa devem mostrar os itens do cardápio que contenham o dado informado.                                                                                                                |

| Caso de Teste CT-03   | Verificar Detalhes dos Salgados                                                                                                          |
| --------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| Requisitos Associados | RF-01: O aplicativo deve mostrar as opções do cardápio.                                                                                  |
| Objetivo do Teste     | Verificar se todas as informações referentes aos salgados estão disponíveis na página do cardápio.                                       |
| Passos                | 1°: Acessar o navegador. 2°: Informar o endereço do site. 3°: Visualizar a página do cardápio.                                           |
| Critérios de Êxito    | Todas as informações, incluindo imagens e preço unitário salgados, referentes aos produtos devem estar disponíveis na página do cardápio |

| Caso de Teste CT-04   | Verificar Cadastro de Usuário                                                                                                                                                                         |
| --------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Requisitos Associados | RF-07: O aplicativo deve permitir ao usuário cadastrar seu nome, endereço e telefone de contato.                                                                                                      |
| Objetivo do Teste     | Verificar se o cadastro de usuário está sendo realizado corretamente.                                                                                                                                 |
| Passos                | 1°: Acessar o navegador. 2°: Informar o endereço do site. 3°: Visualizar a página inicial. 4°: Clicar em “Meu perfil” na página inicial. 5°: Preencher o formulário e clicar em “Confirmar os dados”. |
| Critérios de Êxito    | Deve ocorrer uma validação das informações fornecidas pelo usuário, e ao clicar em "Confirmar os dados", deve aparecer os pedidos que o usuário já tenha realizado.                                   |

| Caso de Teste CT-05   | Verificar Cadastro de Salgados                                                                                                                                                                                                                 |
| --------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Requisitos Associados | RF-10: O aplicativo deve permitir que o administrador cadastre novos produtos.                                                                                                                                                                 |
| Objetivo do Teste     | Verificar se o cadastro de salgados está sendo realizado corretamente.                                                                                                                                                                         |
| Passos                | 1°: Acessar o navegador. 2°: Informar o endereço do site. 3°: Visualizar a página inicial. 4°: Clicar em “Cadastrar novos salgados” no menu. 5°: Preencher os dados e Clicar em “Cadastrar”. 6°: Voltar para home. 7°: Clicar em meu catálogo. |
| Critérios de Êxito    | Deve ocorrer uma validação das informações recém cadastradas.                                                                                                                                                                                  |

| Caso de Teste CT-06   | Verificar Pedidos                                                                                                                                                                 |
| --------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Requisitos Associados | RF-04: O aplicativo deve permitir o administrador aceitar ou recusar os pedidos.                                                                                                  |
| Objetivo do Teste     | Verificar se a opção de aceitar ou recusar um pedido está sendo realizado corretamente.                                                                                           |
| Passos                | 1°: Acessar o navegador. 2°: Informar o endereço do site. 3°: Visualizar a página inicial. 4°: Clicar em “Status Pedidos” no menu. 5°: Clicar em algum pedido e alterar o status. |
| Critérios de Êxito    | Deve-se atualizar a página e verificar se o status do pedido mudou como o esperado.                                                                                               |

| Caso de Teste CT-07   | Realização de Pedido                                                                                                                                                                                                                                                                                                                                                                                                      |
| --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Requisitos Associados | RF-05: O aplicativo deve permitir ao usuário acompanhar seu pedido. <p>RF-07: O aplicativo deve permitir ao usuário adicionar seu nome, endereço e telefone de contato.</p> RF-09 O aplicativo deverá disponibilizar qual será a forma de pagamento: Cartão, dinheiro e troco (Recebimento na entrega).                                                                                                                   |
| Objetivo do Teste     | Verificar se na realização do pedido está sendo solicitado o preenchimento de alguns dados do cliente, como nome, telefone e endereço de entrega. Verificar se o cliente consegue fazer o cancelamento de seus pedidos e se o cliente está informando o meio de pagamento.                                                                                                                                                |
| Passos                | 1°: Acessar o Navegador. 2°: Informar o endereço do site. 3°: Visualizar a página do cardápio. 4°: Adicionar os produtos do cardápio no Pedido. 5°: Informar tipo de Pagamento. 6°: Preencher formulário de dados. Finalizar Pedido.                                                                                                                                                                                      |
| Critérios de Êxito    | Os produtos escolhidos devem ser apresentados no pedido, aparecendo o nome e o valor do produto. Deve ser informado o tipo de pagamento escolhido pelo cliente. Deve ser preenchido pelo cliente um formulário informando seus dados para que possa ser realizado a entrega do pedido. Deve aparecer a opção de “Finalizar Pedido” e quando a opção for selecionada é necessário aparecer a mensagem “Pedido Finalizado”. |

# Evidências de Testes de Software

Get.Api.Salgados

![salgados get response true](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e5-proj-empext-t1-pmv-ads-2023-2-e5-proj-salgados-meire/assets/89323922/d6f7c4cf-c0eb-47aa-8e41-b93b5370afa4)

Post.Api.Salgados

![salgados post response true](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e5-proj-empext-t1-pmv-ads-2023-2-e5-proj-salgados-meire/assets/89323922/a9a62b3b-5fa7-40ad-9dfb-ebf9f1a840c6)

* CT-01:
![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e5-proj-empext-t1-pmv-ads-2023-2-e5-proj-salgados-meire/assets/83843255/e663ecb7-78a0-4c4f-9a00-8a19bbe4518c)

