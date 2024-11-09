# Landing CLI

![Linguagem mais utilizada](https://img.shields.io/github/languages/top/lucasimonmendes/landing-cli)
![Último commit](https://img.shields.io/github/last-commit/lucasimonmendes/landing-cli)
![README bem legal](https://img.shields.io/badge/readme-bem_legal-8A2BE2)

Landing CLI é uma ferramenta de linha de comando (CLI) para criar rapidamente projetos de landing pages baseados em templates pré-definidos em **Next.js**. A CLI permite que você escolha entre vários templates e configure rapidamente um novo projeto.

## Requisitos

- **Node.js** (versão 16 ou superior)
- **npm** (gerenciador de pacotes)

## Instalação

### Instalação Local

Clone o repositório e instale as dependências:

```bash
git clone https://github.com/lucasimonmendes/landing-cli.git
cd landing-cli
npm install
```

### Instalação Global

Se você quiser usar a CLI globalmente, execute o seguinte comando:

```bash
npm link
```

Isso criará um link simbólico e você poderá usar o comando `landing-cli` de qualquer lugar no terminal.

## Comandos Disponíveis

### `landing-cli create`

Este comando cria um novo projeto de landing page a partir de um dos templates disponíveis.

#### Uso

```bash
landing-cli create
```

#### Passos interativos

1. O comando solicitará o nome do projeto.
2. Em seguida, você escolherá o template que deseja usar (Template 1, Template 2 ou Template 3).
3. O template será copiado para o diretório do novo projeto.

Após a execução, você pode navegar até a pasta do projeto e iniciar o desenvolvimento com o Next.js.

```bash
cd <nome-do-projeto>
npm install
npm run dev
```

### Templates Disponíveis

- **weddings**: Um template básico de landing page com um design limpo e moderno.
- **artists**: Template focado em um design mais simples e moderno.
- **iphone**: Template com foco em um design marcante e aesthetic.

## Contribuição

Sinta-se à vontade para contribuir com melhorias, sugestões ou correções. Basta fazer um fork do repositório e enviar um pull request.

### Como Contribuir

1. Fork o repositório.
2. Crie uma branch para suas alterações: `git checkout -b minha-feature`.
3. Faça suas alterações e commit: `git commit -am 'Adiciona nova funcionalidade'`.
4. Envie para a branch do repositório remoto: `git push origin minha-feature`.
5. Crie um pull request no GitHub.

## Licença

Este projeto está licenciado sob a [MIT License](LICENSE).
