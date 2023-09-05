# Especificações do Projeto

<span style="color:red">Pré-requisitos: <a href="1-Documentação de Contexto.md"> Documentação de Contexto</a></span>

Definição do problema e ideia de solução a partir da perspectiva do usuário. É composta pela definição do  diagrama de personas, histórias de usuários, requisitos funcionais e não funcionais além das restrições do projeto.

Apresente uma visão geral do que será abordado nesta parte do documento, enumerando as técnicas e/ou ferramentas utilizadas para realizar a especificações do projeto

## Arquitetura e Tecnologias

o	Descreva brevemente a arquitetura definida para o projeto e as tecnologias a serem utilizadas. Sugere-se a criação de um diagrama de componentes da solução.

## Project Model Canvas

Colocar a imagem do modelo construído apresentando a proposta de solução.

> **Links Úteis**:
> Disponíveis em material de apoio do projeto

## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto. Para determinar a prioridade de requisitos, aplicar uma técnica de priorização de requisitos e detalhar como a técnica foi aplicada.

### Requisitos Funcionais

| ID    | Descrição do Requisito                                      | Prioridade |
|-------|-------------------------------------------------------------|------------|
| RF-01 | O aplicativo deve mostrar as opções do cardápio | MÉDIA |
| RF-02 | O aplicativo deve disponibilizar a quantidade de salgados a ser pedido. | ALTA |
| RF-03 | O aplicativo deve permitir realizar a conferência de informações como: ingredientes, valor do pedido , e data de entrega.| ALTA |
| RF-04 | O aplicativo deve permitir aceitar ou recusar os pedidos. ( Prazo de 1H).| BAIXA |
| RF-05 | O aplicativo deve permitir ao usuário cancelar seu pedido. | ALTA |
| RF-06 | O aplicativo deve permitir ao usuário gerenciar os pedidos. | ALTA |
| RF-07 | O aplicativo deve permitir ao usuário adicionar seu nome e telefone de contato. | ALTA |
| RF-08 | O aplicativo deve permitir acesso à documentação de termos e condições de uso e de políticas de privacidade.| BAIXA |
| RF-09 |O aplicativo deverá disponibilizar qual será a forma de pagamento: Cartão, dinheiro ou pix. (Recebimento na entrega).| ALTA |
| RF-10 |O sistema deverá permitir a edição e a exclusão de produtos.	MÉDIA. | MÉDIA |


### Requisitos não Funcionais

| ID    | Restrição                                                    |
| ----- | ------------------------------------------------------------ |
| RE-01 | O sistema de ser feito usando práticas de UX e IxD.      |ALTA |
| RE-02 | O sistema deve ser disponibilizado publicamente no GitHub. |ALTA |
| RE-03 | O sistema deve apresentar baixo tempo de resposta nas requisições. |ALTA |
| RE-04 |O sistema deve estar de acordo com a Lei Geral de Proteção de Dados (LGPD). |ALTA |
| RE-05 |O sistema deve ser implementado em uma linguagem para aplicação Web. |ALTA |
| RE-06 | O sistema deve ser responsivo e compatível com os principais navegadores e sistemas operacionais do mercado.|ALTA |
| RE-07 | O sistema deve estar disponível pelo menos 99% das 24 horas do dia, nos 07 dias da semana. | ALTA |

Com base nas Histórias de Usuário, enumere os requisitos da sua solução. Classifique esses requisitos em dois grupos:

## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

| ID    | Restrição                                                    |
| ----- | ------------------------------------------------------------ |
| RE-01 | O projeto deverá ser entregue até o final do semestre        |
| RE-02 | A equipe não pode subcontratar o desenvolvimento do trabalho. |
| RE-03 | O Projeto deve ser desenvolvido em uma linguagem para uma aplicação distribuída. |
| RE-04 | O aplicativo deve se restringir às tecnologias propostas pelo curso. |
| RE-05 | A rotina de estudos da faculdade e do projeto deve se adequar e ser compartilhado com a família e o trabalho remunerado. |
| RE-06 | A organização do projeto e do grupo deve possibilitar sua execução de forma assíncrona. |

Enumere as restrições à sua solução. Lembre-se de que as restrições geralmente limitam a solução candidata.

> **Links Úteis**:
> - [O que são Requisitos Funcionais e Requisitos Não Funcionais?](https://codificar.com.br/requisitos-funcionais-nao-funcionais/)
> - [O que são requisitos funcionais e requisitos não funcionais?](https://analisederequisitos.com.br/requisitos-funcionais-e-requisitos-nao-funcionais-o-que-sao/)

## Diagrama de Casos de Uso

O diagrama de casos de uso é o próximo passo após a elicitação de requisitos, que utiliza um modelo gráfico e uma tabela com as descrições sucintas dos casos de uso e dos atores. Ele contempla a fronteira do sistema e o detalhamento dos requisitos funcionais com a indicação dos atores, casos de uso e seus relacionamentos. 

As referências abaixo irão auxiliá-lo na geração do artefato “Diagrama de Casos de Uso”.

> **Links Úteis**:
> - [Criando Casos de Uso](https://www.ibm.com/docs/pt-br/elm/6.0?topic=requirements-creating-use-cases)
> - [Como Criar Diagrama de Caso de Uso: Tutorial Passo a Passo](https://gitmind.com/pt/fazer-diagrama-de-caso-uso.html/)
> - [Lucidchart](https://www.lucidchart.com/)
> - [Astah](https://astah.net/)
> - [Diagrams](https://app.diagrams.net/)

## Modelo ER (Projeto Conceitual)

O Modelo ER representa através de um diagrama como as entidades (coisas, objetos) se relacionam entre si na aplicação interativa.

Sugestão de ferramentas para geração deste artefato: LucidChart e Draw.io.

A referência abaixo irá auxiliá-lo na geração do artefato “Modelo ER”.

> - [Como fazer um diagrama entidade relacionamento | Lucidchart](https://www.lucidchart.com/pages/pt/como-fazer-um-diagrama-entidade-relacionamento)

## Projeto da Base de Dados

O projeto da base de dados corresponde à representação das entidades e relacionamentos identificadas no Modelo ER, no formato de tabelas, com colunas e chaves primárias/estrangeiras necessárias para representar corretamente as restrições de integridade.
