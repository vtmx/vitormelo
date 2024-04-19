# STC

## A Ideia

A ideia partiu de criar um gerador de página estática onde eu pudesse ter  mais controle sobre o projeto e não ficasse na depêndencia de atualizações do nodejs.

No passado eu utilizei o Hugo, Nuxt e atualmente o AstroJS, então tentarei emular algumas ações desses geradores.

## Criando a Função de Log

Antes de tudo tive a ideia de criar uma função de log para facilitar o desenvolvimento do projeto, a função funciona da seguinte forma:

```
log [mensagem] [tipo] [saída]
```

O tipo e saída são opicionais, o tipo pode ser: `err`, `war`, `inf` e `suc`. O motivo do uso de três caracteres se deu pela facilidade na hora de digitar e manter o alinhamento durante a leitura do arquivo de log. Para entendermos o funcionamento irei utilizar a função:

```
log 'olá mundo!'
```

A função log inicia verificando se o diretório `/log` existe, caso não, cria o diretório.

```bash
project_dir=$(pwd)
local log_dir="${project_dir}/log"
[[ -d $log_dir ]] || log "create dir: $log_dir"; mkdir -p "${project_dir}/$log_dir"
```

Nota-se, que logo nas primeiras linhas a própria função já faz uso dela mesma, mas vamos seguir. Logo pensei que eu poderia usar a mesma função tanto para imprimir na tela como guardar o histórico, por isso, decidi colorir parte do texto com o comando `tput`.

```bash
local status
case $2 in
  err) status=ERR; tput setaf 1 ;;
  suc) status=SUC; tput setaf 2 ;;
  war) status=WAR; tput setaf 3 ;;
  inf) status=INF; tput setaf 4 ;;
  *) status=LOG ;;
esac

# Saída exibida na tela
echo "stc: $1"

# Reseta as cores
tput sgr0

# Redirecionando saída para o arquivo de log
echo "$(date +"[%Y-%m-%d %H:%M:%S]") [$status] ${1^}" >> "${project_dir}/log/stc.log"
```

Agora eu tenho uma saída personalizada para o terminal e outra com mais detalhes em um arquivo de log.


Saída no terminal:

```
olá munfo!
```

Linha incluída no arquivo de log:

```
[2024-02-01 16:48:51] [LOG] Olá mundo!
```

A função sai do programa sempre quando houver uma log de erro, tendo como argumento opcional o código de saída.

O código abaixo verifica se a log é do tipo `err`, caso sim ele verifica se há algum código de saída, existindo ele sai do programa com esse código, caso não exista o código padrão de saída é 1.

```
if [[ $2 == err ]]; then
  [[ $3 ]] && exit $3 || exit 1
fi
```

## Dependências

Para o projeto opção de hotreload era muito necessária, essa função é útil e facilita muito para quem deseja ter uma resposta visual rápida das modificações no código.

Com isso foi necessário utilizar algumas dependências, como o [browser-sync](https://github.com/Browsersync/browser-sync), que é utilizado para fazer o reload toda vez que um arquivo de uma pasta é modificado.

No entanto eu teria mais algumas necessidades, como a conversão de arquivos em markdown para html, a escolha óbvia para esse caso é o consolidado [pandoc](https://github.com/jgm/pandoc). O pandoc é um programa extenso, com uma gama de opções que transbordam qualquer explicação que poderia dar, basicamente com ele eu estava interessado em apenas algumas, a conversão e a utilização de templates que contarei futuramente.

Havia um detalhe, o browser-sync, sincronizaria somente as páginas html, por isso eu precisaria de alguma ferramenta para converter os arquivs .md toda vez que eu os salvasse, para isso eu utilizei o [entry](https://github.com/eradman/entr).

Basicamente o entry permite associar algum comando após o salvamento de algum arquivo, no meu caso, eu desejaria que a cada vez que eu salvasse o arquivo .md ele executasse o pandoc e fizesse a conversão dos arquivos para html, logo o browser-sync notaria a modificação e faria o reload da página.

A instalação do browser-sync depende do nodejs, mas é bem tranquilo, o entr é pequeno sua instalção também não é um problema, mas o pandoc trás consigo uma série de dependências e isso não me agradou muito, por isso, eu resolvi baixar o binário e inserí-lo na pasta ~/.local/bin.

Vamos a função para verificar as dependências. Na primeira linha eu crio uma variável local chamada `deps` e nela eu atribuo uma lista com as dependências, o nodejs não é necessário pois sem ele você não terá o browser-sync ;)

```bash
check_deps() {
  local deps=(\
    'browser-sync' \
    'entr' \
    'pandoc')

  for dep in ${deps[@]}; do
    type $dep &> /dev/null || log "dependencie '$dep' not exist" err 3
  done
}
```

A segunda etapa é um for que faz a verificação se a dependência existe através do comando `type` que caso não exista ele sai do programa com uma log de erro.

## A Função Init

Uma das opções que eu gosto em alguns geradores de site estático é criar uma estrutura inicial de aprensentação. A maneira que eu encontrei foi criar uma lista com o nome de diretórios e outras com o caminho dos arquivos.

```bash
local dirs=(\
  'public' \
  'src/components' \
  'src/data' \
  'src/templates' \
  'src/pages')

local files=(\
  'src/templates/default.html' \
  'src/pages/index.md')

for dir in ${dirs[@]}; do
  [[ -d $dir ]] || log "create dir '$dir'"; mkdir -p "${project_dir}/$dir"
done

for file in ${files[@]}; do
  [[ -f $file ]] || log "create file '$file'"; > "${project_dir}/$file"
done
```

Atualmente ainda estou na dúvida de como será essa estrutura. Muitas vezes ter outro projeto como base, pode ser uma armadilha para complicar algo que poderia ser mais simples.

Apóg criar a lista eu faço um loop verificando se o diretório existe, caso não, ele é criado. O mesmo é válido para o arquivo.

Vou parar por aqui, preciso entender agora como criar uma estrutura que me permite criar algo simples mas também que atenda a necessidade de criar algo um pouco mais complexo no futuro.

## Hotreload

Voltei, o hotreload tem sido um desafio, descobri que o [browser-sync](https://github.com/Browsersync/browser-sync) que eu não usava fazia alguns anos está sendo mais atualizado que o [live-server](https://github.com/tapio/live-server) ou esse [live-server](https://github.com/ritwickdey/vscode-live-server) que eu costumava a utilizar. 

Sinceramente não sei qual dos dois estou utilizando, longa história, mas ambos parecem receber bem poucas atualizações.

Um detalhe que notei na página do live-serve foi a indicação de uma solução mais leve, mas que não faz o hotreload com o comando:

```
python -m SimpleHTTPServer
```

Me parece que se você tem o python instalado você já tem acesso a um modo semelhante como:

```
python -m http.server -b 127.0.0.1 8000 -d "${project_dir}/cache"
```

Está sendo um pouco tentador usar essa técnica, mas por outro lado eu perderia o poder de atualizar os estilos com o browser-sync, qualquer coisa eu coloco um if e dê prioridade par o browser e quem não tiver rodaria o do python.

Independente da escolha vou seguir, tive a ideia de levar todos o conteúdo do site para a pasta cache e rodar o server apontando pra ela.

Tive alguma dificuldade na conversão devido aos loops, mas acabei conseguindo.

Meu desafio agora está sendo na utilização do comando `sed`, criei uma função chamada `insert_includes` e estou tentando fazer com que a primeira linha seja subestituída pelo conteúdo do arquivo localizado na pasta includes.

```
# Isso
<include src="include/header.html">

# Vira isso
<header>Header</header>
```

Minha dificuldade com o `sed` está acontecendo devido alguns caracteres especiais, que acabam atrapalhando e dando um significado de meta-caracter durante a alteração. Não tinha pensado nisso :(

---

Decidi altera o nome de alguns diretórios, antes descobri para que uma função receba um array funciona dessa forma.

```bash
loca dirs=("$@")
```

Continuando, decidi altear o nome de alguns diretórios, pages por exemplo, se tornou layouts.
Dessa forma o valor do array é expandido dentro da estrutura do array.

Continuando, decidi altear o nome de alguns diretórios, pages por exemplo, se tornou layouts.

Estou tentando fazer com que os componentes tenham a capacidade de importar dados dos arquivos markdown no formato 11ty e Astro.

```
# components/about.html

---
import 'data/about.md';
---

<div>...</div>
```

Mesmo sabendo que até o momento só consigo importar um único arquivo de dados, essa forma irá permitir que componentes sem associações diretas com os arquivo md consigam importar os dados como o arquivo header.html que pode pegar dados de um arquivo info.md. Atualmente um arquivo md necessariamente deve ter um respectivo arquivo .html para que seja feita a conversão.

Uma outra ideia que tive é não usar o diretório cache em prol de uso do pipe para deixar a aplicação diretamente em public.

O Astro usa o diretório components já o 11ty usa includes, no entanto dentro de includes pode ter layouts etc. Acho o formato do Astro mais simples.
