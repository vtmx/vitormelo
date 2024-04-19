# STC

Gerador de páginas estáticas.

## Dependências

- [browser-sync](https://github.com/Browsersync/browser-sync): utilizado no modo dev para o hotreload
- [nodejs](https://nodejs.org): runtime de javascript
- [browsersync](https://browsersync.io): runtime de javascript
- [pandoc](https://github.com/jgm/pandoc): usado para converter arquivos .md para .html

## Comando para verificar mudanças

```bash
./live & ./watch
```

## Iniciando o projeto

O comando `init` deve iniciar o projeto criando a restrutura abaixo e iniciar o
modo dev.

```
project
├── log
├── public
├── sh
├── src
│  ├── components
│  ├── data
│  └── layouts
└─ stc
```

- Passo 1: remover o cabeçalho da tabela
- Passo 2: remover primeira coluna da tabela
- Passo 3: transformar espaços em quebras de linha
- Passo 4: reduzir quebras de linha duplicadas a apenas uma
- Passo 5: organizar utilitários da lista
- Passo 6: obter definições do manual
- Passo 7: salvar saída em um arquivo

## Implementação

Passo 1: remover o cabeçalho da tabela

Iniciar a listagem a partir da terceira linha do arquivo.

tail +3 gnu-utils.md

## Referências

### CLI

https://docs.astro.build/en/reference/cli-reference
https://digitalocean.com/community/tutorials/nodejs-npm-yarn-cheatsheet
https://nuxt.com/docs/api/commands

### Estrutura

Structures references
https://docs.astro.build/en/core-concepts/project-structure
https://gohugo.io/getting-started/directory-structure
https://learn.getgrav.org/17/basics/folder-structure
https://nuxt.com/docs/guide/directory-structure
https://kit.svelte.dev/docs/project-structure

.
├── cache
│  ├── about.html
│  ├── includes
│  │  ├── about.html
│  │  └── about2.html
│  └── index.html
├── LEARN.md
├── LICENSE.md
├── log
│  └── stc.log
├── public
├── README.md
├── src
│  ├── components
│  │  ├── about.html
│  │  └── index.html
│  ├── data
│  │  ├── about.md
│  │  └── about2.md
│  ├── layouts
│  │  ├── about.html
│  │  ├── about2.html
│  │  ├── default.html
│  │  ├── footer.html
│  │  └── header.html
│  └── tmp
│     ├── certifications.md
│     ├── config.md
│     ├── education.md
│     ├── experiences.md
│     ├── nav.md
│     ├── services.md
│     ├── skills.md
│     └── social.md
└── stc
