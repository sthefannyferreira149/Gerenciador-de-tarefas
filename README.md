# Gerenciador de Tarefas

Aplicação web para criação e organização de tarefas, usuários e categorias. O projeto está sendo desenvolvido com Spring Boot e tem como objetivo centralizar o acompanhamento de atividades, seus prazos e seus responsáveis.

> **Status:** em desenvolvimento. A estrutura inicial da aplicação já está configurada, mas as entidades, telas e funcionalidades de gerenciamento ainda estão sendo implementadas.

## Tecnologias

- Java 21
- Spring Boot 4.1.2
- Spring MVC
- Spring Data JPA
- Banco de dados H2
- Lombok
- Maven

## Pré-requisitos

Antes de executar o projeto, instale:

- Java Development Kit (JDK) 21 ou superior
- Git, caso o projeto seja obtido por um repositório

O Maven Wrapper incluído no projeto (`mvnw` e `mvnw.cmd`) permite executar os comandos Maven sem uma instalação global do Maven.

## Como executar

No Windows, abra o terminal na pasta do projeto e execute:

```powershell
\.\mvnw.cmd spring-boot:run
```

No Linux ou macOS:

```bash
./mvnw spring-boot:run
```

Depois, acesse a aplicação em:

```text
http://localhost:8080
```

## Como executar os testes

Windows:

```powershell
\.\mvnw.cmd test
```

Linux ou macOS:

```bash
./mvnw test
```

## Estrutura do projeto

```text
src/
├── main/
│   ├── java/com/example/demo/
│   │   ├── DemoApplication.java
│   │   └── model/
│   │       ├── Categoria.java
│   │       ├── Tareja.java
│   │       └── Usuario.java
│   └── resources/
│       ├── application.properties
│       ├── static/
│       └── templates/
└── test/java/com/example/demo/
	└── DemoApplicationTests.java
```

## Funcionalidades previstas

- Cadastro e gerenciamento de tarefas
- Definição de prazo e data de criação
- Organização de tarefas por categoria
- Associação de tarefas a usuários
- Persistência dos dados com JPA e H2
- Interface web para acompanhamento das tarefas

## Próximos passos

1. Finalizar as entidades de domínio e seus relacionamentos.
2. Criar os repositórios, serviços e controladores.
3. Implementar as telas de cadastro e listagem.
4. Adicionar validações e tratamento de erros.
5. Ampliar a cobertura de testes automatizados.

## Licença

Este projeto ainda não possui uma licença definida.