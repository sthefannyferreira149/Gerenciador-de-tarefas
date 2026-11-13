# Agenda de Contatos

Aplicação web para cadastro e gerenciamento de contatos, desenvolvida com Spring Boot, Spring Data JPA e MySQL. A interface permite cadastrar, listar, editar e excluir contatos diretamente pelo navegador.

## Tecnologias

- Java 25
- Spring Boot 4.0.6
- Spring Web MVC
- Spring Data JPA
- MySQL
- Maven Wrapper
- HTML, CSS e JavaScript

## Pré-requisitos

- JDK 25 ou superior
- MySQL em execução
- Git, caso o projeto seja clonado de um repositório

O projeto inclui o Maven Wrapper (`mvnw` e `mvnw.cmd`), portanto não é necessário instalar o Maven globalmente.

## Configuração do banco de dados

Por padrão, a aplicação tenta conectar ao MySQL usando:

| Configuração | Valor |
| --- | --- |
| Banco | `agenda_db` |
| Usuário | `root` |
| Senha | `senac` |
| Host e porta | `localhost:3306` |

O banco `agenda_db` é criado automaticamente pelo MySQL quando necessário. Se suas credenciais forem diferentes, altere `src/main/resources/application.properties` antes de iniciar a aplicação:

```properties
spring.datasource.url=jdbc:mysql://localhost:3306/agenda_db?createDatabaseIfNotExist=true&useSSL=false&allowPublicKeyRetrieval=true&serverTimezone=UTC
spring.datasource.username=root
spring.datasource.password=senac
```

> Em ambientes compartilhados ou de produção, não mantenha credenciais reais versionadas no arquivo de configuração. Prefira variáveis de ambiente ou um gerenciador de segredos.

## Como executar

No Windows:

```powershell
.\mvnw.cmd spring-boot:run
```

No Linux ou macOS:

```bash
./mvnw spring-boot:run
```

Depois, acesse:

```text
http://localhost:8080
```

## Funcionalidades

- Cadastro de contato com nome e telefone
- Listagem de contatos cadastrados
- Edição de contato
- Exclusão de contato
- Persistência em banco MySQL
- Interface estática servida pelo próprio Spring Boot

## API REST

A API está disponível no caminho `/api/agenda`.

| Método | Endpoint | Descrição |
| --- | --- | --- |
| `GET` | `/api/agenda` | Lista todos os contatos |
| `POST` | `/api/agenda` | Cadastra um contato |
| `PUT` | `/api/agenda/{id}` | Atualiza um contato |
| `DELETE` | `/api/agenda/{id}` | Exclui um contato |

Exemplo de cadastro:

```bash
curl -X POST http://localhost:8080/api/agenda ^
  -H "Content-Type: application/json" ^
  -d "{\"nome\":\"Maria Silva\",\"telefone\":\"(11) 99999-9999\"}"
```

Corpo esperado:

```json
{
  "nome": "Maria Silva",
  "telefone": "(11) 99999-9999"
}
```

## Testes

Windows:

```powershell
.\mvnw.cmd test
```

Linux ou macOS:

```bash
./mvnw test
```

## Estrutura principal

```text
src/
├── main/
│   ├── java/com/example/demo/
│   │   ├── DemoApplication.java
│   │   ├── controller/AgendaController.java
│   │   ├── model/
│   │   └── repository/PessoaRepository.java
│   └── resources/
│       ├── application.properties
│       └── static/
│           ├── app.js
│           ├── index.html
│           └── styles.css
└── test/
    └── java/com/example/demo/DemoApplicationTests.java
```

## Status

Projeto em desenvolvimento.

## Licença

Ainda não foi definida uma licença para este projeto.
