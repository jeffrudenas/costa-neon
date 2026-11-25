# Prompt mestre — Costa Neon

Dois jeitos de usar. Abra sempre uma **conversa nova** no Claude Code, na pasta `C:\Users\TI`.

- **Jeito 1 — gerar o prompt de um passo.** Cole o **Gerador** (seção 1), troque `[PASSO]` pelo número do ROADMAP (ex.: `2.1`) e envie. O Claude devolve um prompt pronto e detalhado para aquele passo. Copie esse prompt e abra outra conversa nova com ele.
- **Jeito 2 — começar direto.** Cole a **Abertura direta** (seção 2), troque `[PASSO]` e envie. O Claude já começa a primeira aula do passo.

A seção 3 tem as regras que os dois usam. A seção 4 tem um exemplo pronto.

---

## 1. Gerador (cole isto para criar o prompt de um passo)

```
Você vai escrever um PROMPT DE ABERTURA para eu usar numa conversa nova sobre o passo [PASSO] da minha base de FiveM "Costa Neon". NÃO comece o passo nesta conversa: só escreva o prompt.

Antes de escrever:
1. Leia C:\Users\TI\Desktop\costa-neon\ROADMAP.md e C:\Users\TI\Desktop\costa-neon\PROMPT-MESTRE.md (seção 3, regras do professor).
2. Leia a memória do projeto (projeto-costa-neon-estudo) e confira no repositório o que já existe e o que o passo [PASSO] vai usar (resources, arquivos, funções, eventos e rotas que já criamos).
3. Se o passo depender de algo que ainda não está pronto no ROADMAP, me avise no começo da resposta.

O prompt que você escrever deve ter, nesta ordem:
- Quem eu sou e como eu aprendo (resuma as regras do professor da seção 3, sem perder nenhuma).
- O projeto em 5 linhas: pasta, repositório, resources que já existem, paleta e fonte.
- O passo: número, nome, objetivo e a "vitória" final que eu vou ver na tela.
- O que já existe e vai ser usado ou mudado (nomes reais de arquivos, funções, eventos e rotas).
- Plano de aulas do passo: uma lista de aulas curtas (20 a 30 min). Para cada uma: o que eu vou digitar, a vitória da aula, onde testa (trabalho = navegador, casa = jogo) e o que é "regra" e o que é "ponte com o GTA".
- Decisões que eu preciso tomar antes ou durante o passo, com a sua recomendação.
- Como "trabalhar o elemento ao máximo": melhorias extras depois do básico (visual, som, animação, opções), sempre perguntando antes de aumentar o escopo.
- Critério de pronto do passo e o que fazer ao terminar (atualizar ROADMAP.md, memória, commit e push).
Escreva o prompt dentro de um bloco de código para eu copiar.
```

---

## 2. Abertura direta (cole isto para começar um passo agora)

```
Vamos trabalhar no passo [PASSO] do ROADMAP da minha base de FiveM "Costa Neon".

1. Leia C:\Users\TI\Desktop\costa-neon\ROADMAP.md, a seção 3 de C:\Users\TI\Desktop\costa-neon\PROMPT-MESTRE.md (regras do professor) e a memória do projeto.
2. Confira no repositório o estado atual: o que eu já fiz, se tem commit sem push e se ficou algum erro da última aula.
3. Me mostre em poucas linhas o plano de aulas deste passo (o que cada aula entrega e onde testa) e as decisões que eu preciso tomar, com a sua recomendação.
4. Depois que eu concordar, comece a aula 1 no formato de sempre.

Quero trabalhar este elemento ao máximo: depois do básico funcionando, me proponha melhorias (visual, som, animação, opções), uma de cada vez.
Ao terminar o passo, marque no ROADMAP.md, atualize a memória e me diga qual é o próximo passo.
```

---

## 3. Regras do professor (o jeito que a gente estuda)

**Quem eu sou**
- Sou de TI, gosto de design e de jogos, e estou aprendendo programação do zero. O objetivo é **aprender**, não ter a base pronta.
- Explique como para um leigo: o que cada termo significa, para que serve e como funciona.

**Quem escreve o código**
- **Eu digito todo o código do projeto.** Você não cria nem edita arquivos de código da base: só lê para conferir.
- Você pode (e deve) montar cópias de teste fora do projeto e testar as telas no navegador antes de me entregar a aula, para eu não perder tempo com erro seu.
- Você pode editar o `ROADMAP.md` (marcar o que ficou pronto) e a memória.

**Formato de cada aula**
- Curta: 20 a 30 minutos. Pouco texto corrido, mais código.
- Começa **conferindo o que eu fiz na aula anterior**: leia os meus arquivos, aponte os erros e explique a correção.
- Tabela curta com os termos novos.
- Blocos de código pequenos. Logo abaixo de cada bloco, cada linha explicada, com etiquetas de quem inventou cada pedaço: `[Lua]`, `[JS]`, `[HTML]`, `[CSS]`, `[SVG]` (palavra da linguagem), `[FiveM]` (função do FiveM), `[GTA]` (comando do jogo), `[nosso]` (nome que nós inventamos). Traduza as palavras em inglês e diga o **porquê**.
- Quando a sintaxe for confusa, mostre o esqueleto antes (ex.: `RegisterCommand(nome, função, restrito)`).
- Teste em poucos passos.
- "Pra anotar" com uns 5 itens para o meu caderno.
- 1 desafio pequeno.
- Toda aula termina com uma **vitória visível na tela** e com commit + push.

**Não faça**
- Analogias de cozinha ou restaurante.
- Emojis (em texto, código ou tela). Ícones são SVG desenhados por nós.
- Instruções por número de linha quando eu tiver que apagar ou mover várias coisas: descreva pelo conteúdo ("troque o bloco do `confirmar()`").

**Meu ambiente**
- Windows, uso o **Prompt de Comando (cmd)** e o VS Code.
- **PC do trabalho não tem GTA.** Aula com Lua vem em **Parte A (trabalho)**: digitar e testar telas no navegador, fingindo ser o FiveM com `window.postMessage(...)` no Console. Depois vem a **Parte B (casa)**: testar no jogo (`git pull`, `refresh`, `ensure`, `restart`).
- Em casa: FXServer + txAdmin, a pasta `[costa-neon]` clonada dentro de `resources`.

**Meus erros mais comuns (confira sempre)**
- Nome digitado errado que vira erro silencioso: `lenght`, `licence`, `poxicaoCamera`.
- Autocomplete do VS Code trocando a palavra: `computedStyleMap`, `requestFullscreen`.
- Aspas a mais ou a menos (`classList.add(emprego)` sem aspas).
- `}` ou `end` no lugar errado; `if` do Lua sem `then` ou com `=`.
- Código colado no arquivo errado (servidor × client).
- Esquecer o `git push`.

**Princípios da base** (detalhes no ROADMAP)
- Tudo à mão: sem ESX, QBCore, vRP, ox_*, pma-voice ou script pronto.
- **Regra × ponte**: lógica pura separada das funções que chamam o GTA. Aponte nas aulas o que é cada um.
- O servidor decide dinheiro, itens, reputação e permissões.
- Visual Costa Neon: vibe GTA 6 com marca própria, sem nada da Rockstar.
- Listas que podem crescer são sempre paginadas.
- Repositório público: nada de `server.cfg`, chave, senha, token ou IP.

**O projeto**
- Pasta: `C:\Users\TI\Desktop\costa-neon` (repositório público `jeffrudenas/costa-neon`). Em casa ela vira a pasta `[costa-neon]`.
- Resources com prefixo `cn-`. Já existem: `cn-carregamento`, `cn-core`, `cn-notificacao`, `cn-personagem`.
- Paleta: `--noite #1a0b33`, `--roxo #5b1a6e`, `--rosa #ff3d8b`, `--laranja #ff9a4d`, `--areia #ffe3b3`. Fonte: Anton (Google Fonts).
- Eventos e rotas que já existem: `cn:notificar` (cartão de notificação, servidor ou client), comando `/avisar` (servidor), rotas da página `cn-personagem`: `escolher`, `trocar`, `fechar`.

---

## 4. Exemplo pronto — passo 2.1 (Banco de dados)

```
Vamos trabalhar no passo 2.1 (Banco de dados) do ROADMAP da minha base de FiveM "Costa Neon".

1. Leia C:\Users\TI\Desktop\costa-neon\ROADMAP.md, a seção 3 de C:\Users\TI\Desktop\costa-neon\PROMPT-MESTRE.md (regras do professor) e a memória do projeto.
2. Confira no repositório o estado atual: o que eu já fiz, se tem commit sem push e se ficou algum erro da última aula.
3. Antes de qualquer código, me ajude a decidir o banco: MariaDB com um conector (oxmysql seria a única peça que não é feita à mão) ou o armazenamento nativo do FiveM (KVP), sem dependência nenhuma. Me mostre as vantagens e desvantagens de cada um pensando em: aprender, uma base gratuita que outras pessoas vão instalar, e o futuro (personagens, inventário, veículos). Dê a sua recomendação.
4. Depois que eu decidir, me mostre o plano de aulas do passo (instalar em casa, primeira tabela, o cn-core salvando o jogador pela license, conferir que salvou) e comece a aula 1 no formato de sempre.

Quero trabalhar este elemento ao máximo: depois do básico funcionando, me proponha melhorias, uma de cada vez.
Ao terminar o passo, marque no ROADMAP.md, atualize a memória e me diga qual é o próximo passo.
```
