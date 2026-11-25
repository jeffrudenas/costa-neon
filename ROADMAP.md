# Costa Neon RP — Roadmap

Base de RP para FiveM feita do zero, à mão, para **aprender programação** construindo algo de verdade.
Cada **passo** abaixo é trabalhado numa conversa própria, do jeito das aulas: você digita, eu explico linha por linha.
Para abrir a conversa de um passo, use o `PROMPT-MESTRE.md`.

Atualizado em: 2026-11-25

---

## Como ler

| Marca | Significado |
|---|---|
| `[x]` | feito e testado |
| `[~]` | digitado, falta testar em casa (no jogo) |
| `[ ]` | a fazer |

- **Onde testa:** `Trab` = dá para testar no navegador do trabalho. `Casa` = só no jogo. `A/B` = digita no trabalho, testa em casa.
- **Aulas:** estimativa de aulas curtas (20 a 30 min cada).
- **Depende de:** o que precisa estar pronto antes.

---

## Princípios (valem para todos os passos)

1. **Aprender é o objetivo.** Você digita todo o código. Eu explico cada linha, confiro o que você digitou e testo cópias antes de entregar.
2. **Tudo à mão.** Nada de ESX, QBCore, vRP, ox_*, pma-voice ou script pronto. Única exceção possível: o conector do banco de dados (decidido no passo 2.1).
3. **Regra × ponte.** "Regra" é a lógica pura (de preferência no servidor). "Ponte" é uma função pequena no client que chama os comandos do GTA. Se um dia a base for para o GTA 6, quase só as pontes mudam.
4. **O servidor manda.** Dinheiro, itens, reputação e permissões são decididos no servidor. O client só pede e mostra.
5. **Visual Costa Neon.** Vibe GTA 6 (pôr do sol, neon, letras grossas inclinadas) com marca própria. Nada de logo, fonte ou arte da Rockstar. Ícones desenhados por nós em SVG, sem emojis.
6. **Listas paginadas.** Toda lista que pode crescer (jogadores, fichas, itens, mensagens) tem páginas.
7. **Repositório público e limpo.** Nunca subir `server.cfg`, chave do servidor, senhas, tokens ou IP.
8. **Fim de aula = commit + push.**

---

## Situação agora

- Fase 1 quase pronta. **Falta testar tudo em casa** (aulas 3, 5, 8 e 9).
- **Pendente:** `git push` da aula 9 (o commit ficou só no PC).
- Desafios em aberto (opcionais): o mar na tela de carregamento, `/postal` (escolher a vista da entrada), nome no modo troca, som ao abrir/escolher.
- Próximo passo grande: **2.1 Banco de dados**.

---

## Fase 0 — Ferramentas

| | Passo | O que entrega | Onde | Aulas |
|---|---|---|---|---|
| `[x]` | 0.1 Repositório e Git | repo público `costa-neon`, identidade jeffrudenas | Trab | — |
| `[~]` | 0.2 Servidor em casa | FXServer + txAdmin rodando, `[costa-neon]` clonado em `resources` | Casa | 1 |

---

## Fase 1 — Identidade e porta de entrada

| | Passo | Resource | O que entrega | Onde | Aulas |
|---|---|---|---|---|---|
| `[x]` | 1.1 Tela de carregamento | `cn-carregamento` | pôr do sol, logo, barra real, dicas girando | Trab | 2 |
| `[~]` | 1.2 Porta da cidade | `cn-core` | mensagem ao conectar, confere o passaporte (license) | A/B | 1 |
| `[~]` | 1.3 Notificações | `cn-notificacao` | cartões no canto, tipo erro, `/avisar` da prefeitura | A/B | 3 |
| `[~]` | 1.4 Tela de entrada e troca | `cn-personagem` | escolha sobre Los Santos, troca F5 no canto, reputação com diabinhos (dados de mentira) | A/B | 5 |
| `[ ]` | 1.5 Paleta única | `cn-core` | uma folha de cores e fontes só, usada por todas as telas (`nui://`) | Trab | 1 |
| `[ ]` | 1.6 Teste geral da fase 1 | — | checklist em casa: entrar, escolher, notificar, trocar, avisar | Casa | 1 |

**Marco 0:** entrar no seu servidor e ver tudo com a cara da Costa Neon.

---

## Fase 2 — Personagem de verdade

| | Passo | Resource | O que entrega | Depende de | Onde | Aulas |
|---|---|---|---|---|---|---|
| `[ ]` | 2.1 Banco de dados | `cn-core` | decidir o banco (MariaDB + conector × armazenamento nativo), instalar em casa, tabela de usuários pela license | 1.6 | Casa | 4 |
| `[ ]` | 2.2 Personagens no banco | `cn-core` + `cn-personagem` | tabela de personagens; servidor lista, cria e apaga; a tela de entrada passa a mostrar os seus personagens de verdade | 2.1 | A/B | 4 |
| `[ ]` | 2.3 Criar personagem | `cn-personagem` | cartão "+ NOVO PERSONAGEM", formulário (nome, sobrenome, nascimento), validação no servidor, limite de personagens | 2.2 | A/B | 3 |
| `[ ]` | 2.4 Aparência | `cn-aparencia` | editor estilo GTA 6: pais, rosto, cabelo, barba, roupa inicial; salvo no banco | 2.3 | A/B | 6 |
| `[ ]` | 2.5 Nascer no lugar certo | `cn-core` | substitui o spawnmanager: primeira vez no ponto de chegada, depois onde parou; salva a posição | 2.2 | Casa | 3 |
| `[ ]` | 2.6 Rosto real nos retratos | `cn-personagem` | a letra dos retratos vira a foto do rosto do personagem | 2.4 | Casa | 2 |
| `[ ]` | 2.7 Troca de verdade + NPC | `cn-personagem` | F5 troca o corpo de verdade; o personagem antigo fica na cidade como NPC; regras contra abuso (algemado, procurado, em briga, tempo de espera); NPCs voltam depois de reiniciar | 2.4, 2.5 | Casa | 5 |

---

## Fase 3 — HUD, interação e convivência

| | Passo | Resource | O que entrega | Depende de | Onde | Aulas |
|---|---|---|---|---|---|---|
| `[ ]` | 3.1 HUD | `cn-hud` | vida, colete, dinheiro, indicador de voz, no visual Costa Neon | 2.2 | A/B | 4 |
| `[ ]` | 3.2 Velocímetro | `cn-hud` | velocidade, marcha, combustível (visual) | 3.1 | A/B | 2 |
| `[ ]` | 3.3 Fome e sede | `cn-status` | regra no servidor, salvo no banco, barras no HUD | 3.1 | A/B | 3 |
| `[ ]` | 3.4 "Aperte E" próprio | `cn-interacao` | pontos no mapa, texto flutuante, ações por perto | 1.6 | A/B | 3 |
| `[ ]` | 3.5 Barra de progresso | `cn-interacao` | ações com tempo + animação ("Comendo...", "Consertando...") | 3.4 | A/B | 2 |
| `[ ]` | 3.6 Chat próprio | `cn-chat` | chat com a cara da cidade, `/me`, `/do`, `/ooc`, histórico paginado | 2.2 | A/B | 4 |
| `[ ]` | 3.7 Hora e clima | `cn-clima` | relógio e tempo iguais para todos, pôr do sol da Costa Neon | 1.6 | Casa | 2 |
| `[ ]` | 3.8 Lista de jogadores | `cn-hud` | quem está online, paginado | 2.2 | A/B | 2 |
| `[ ]` | 3.9 Bilhetes RP na base | `bilhetes-rp` | o seu script de bilhetes com o visual e o personagem da Costa Neon | 2.2 | A/B | 2 |

**Marco 1 (~2 meses):** entrar, criar e escolher personagem, andar pela cidade com HUD, chat e visual próprios.

---

## Fase 4 — Voz e rádio

| | Passo | Resource | O que entrega | Depende de | Onde | Aulas |
|---|---|---|---|---|---|---|
| `[ ]` | 4.1 Voz por proximidade | `cn-voz` | regras próprias em cima do Mumble do FiveM: sussurro, normal, grito; indicador no HUD | 3.1 | Casa (com um amigo) | 4 |
| `[ ]` | 4.2 Rádio | `cn-voz` | canais de rádio, item rádio, tecla para falar | 4.1, 5.3 | Casa | 3 |

---

## Fase 5 — Dinheiro, itens e lojas

| | Passo | Resource | O que entrega | Depende de | Onde | Aulas |
|---|---|---|---|---|---|---|
| `[ ]` | 5.1 Dinheiro | `cn-core` | carteira e banco, toda transação registrada, só o servidor mexe | 2.2 | A/B | 3 |
| `[ ]` | 5.2 Banco e caixa eletrônico | `cn-banco` | tela do banco: saldo, depósito, saque, transferência, extrato paginado | 5.1, 3.4 | A/B | 3 |
| `[ ]` | 5.3 Catálogo de itens | `cn-inventario` | lista de itens (peso, ícone SVG próprio, se pode usar) | 2.2 | Trab | 2 |
| `[ ]` | 5.4 Inventário | `cn-inventario` | grade com arrastar e soltar, peso, usar, dar, jogar no chão | 5.3 | A/B | 7 |
| `[ ]` | 5.5 Lojas | `cn-lojas` | conveniência, roupas, ferramentas; compra validada no servidor | 5.1, 5.4 | A/B | 3 |
| `[ ]` | 5.6 Documentos | `cn-inventario` | RG e carteira de motorista como itens que se mostram para os outros | 5.4 | A/B | 2 |

---

## Fase 6 — Veículos

| | Passo | Resource | O que entrega | Depende de | Onde | Aulas |
|---|---|---|---|---|---|---|
| `[ ]` | 6.1 Concessionária | `cn-veiculos` | vitrine, compra, placa própria, dono no banco | 5.1 | A/B | 4 |
| `[ ]` | 6.2 Garagens | `cn-veiculos` | guardar e retirar, estado salvo, lista paginada | 6.1 | A/B | 4 |
| `[ ]` | 6.3 Chaves | `cn-veiculos` | trancar, destrancar, emprestar a chave | 6.1, 5.4 | Casa | 2 |
| `[ ]` | 6.4 Combustível | `cn-veiculos` | consumo, postos, abastecer com barra de progresso | 6.1, 3.5 | A/B | 3 |
| `[ ]` | 6.5 Dano e pátio | `cn-veiculos` | dano salvo, guincho, pátio da prefeitura | 6.2 | Casa | 2 |

**Marco 2 (~4 meses):** jogável com amigos: voz, dinheiro, inventário, carros.

---

## Fase 7 — Empregos, facções e reputação

| | Passo | Resource | O que entrega | Depende de | Onde | Aulas |
|---|---|---|---|---|---|---|
| `[ ]` | 7.1 Sistema de empregos | `cn-empregos` | empregos, cargos, bater ponto, salário | 5.1 | A/B | 3 |
| `[ ]` | 7.2 Primeiro dia na cidade | `cn-tutorial` | missões guiadas para o novato (inspirado no Grand RP) | 7.1 | A/B | 3 |
| `[ ]` | 7.3 Empregos civis | `cn-empregos` | entregador e taxista | 7.1, 6.1 | Casa | 4 |
| `[ ]` | 7.4 Polícia | `cn-policia` | algemar, revistar, multar, prender, viatura | 7.1, 5.4 | Casa | 6 |
| `[ ]` | 7.5 MDT (tablet da polícia) | `cn-policia` | fichas, multas, procurados — tudo paginado | 7.4 | A/B | 4 |
| `[ ]` | 7.6 Médico | `cn-medico` | desmaio, reviver, hospital, tratamento | 7.1 | Casa | 5 |
| `[ ]` | 7.7 Mecânico | `cn-mecanico` | consertar e personalizar veículos | 7.1, 6.5 | Casa | 3 |
| `[ ]` | 7.8 Reputação | `cn-reputacao` | mortes de jogadores e NPCs mudam o nível (TRANQUILO → LENDA), contado no servidor; efeitos na polícia, facções e preços; diabinhos já desenhados | 7.4 | A/B | 4 |
| `[ ]` | 7.9 Facções | `cn-faccoes` | organizações, membros, cargos | 7.1 | A/B | 4 |

---

## Fase 8 — Celular

| | Passo | Resource | O que entrega | Depende de | Onde | Aulas |
|---|---|---|---|---|---|---|
| `[ ]` | 8.1 Aparelho | `cn-celular` | celular com a cara da Costa Neon (avaliar aproveitar o vibephone) | 5.4 | Trab | 4 |
| `[ ]` | 8.2 Contatos e mensagens | `cn-celular` | agenda e conversas, paginadas | 8.1 | A/B | 3 |
| `[ ]` | 8.3 Ligações | `cn-celular` | chamada com voz | 8.2, 4.1 | Casa | 2 |
| `[ ]` | 8.4 App do banco | `cn-celular` | saldo e transferências pelo celular | 8.1, 5.2 | A/B | 2 |
| `[ ]` | 8.5 App de serviços | `cn-celular` | chamar polícia, médico, mecânico, táxi | 8.1, 7.4 | Casa | 2 |

---

## Fase 9 — Administração, segurança e lançamento

| | Passo | Resource | O que entrega | Depende de | Onde | Aulas |
|---|---|---|---|---|---|---|
| `[ ]` | 9.1 Permissões | `cn-admin` | grupos de staff com ACE | 2.2 | Casa | 2 |
| `[ ]` | 9.2 Painel admin | `cn-admin` | jogadores (paginado), teleporte, reviver, kick/ban, anúncios | 9.1 | A/B | 5 |
| `[ ]` | 9.3 Segurança | todos | revisão: servidor valida tudo, eventos protegidos, limites | 9.1 | Casa | 4 |
| `[ ]` | 9.4 Registros (logs) | `cn-admin` | arquivo + webhook do Discord | 9.1 | Casa | 2 |
| `[ ]` | 9.5 Desempenho | todos | medir com `resmon`, enxugar loops | — | Casa | 2 |
| `[ ]` | 9.6 Lançamento | repo | README, licença, receita do txAdmin (instalar com um clique), release no GitHub, prints | 9.3 | Trab | 4 |

**Marco 3 (~7 meses, meados de 2027):** base completa, gratuita, no GitHub.

---

## Fase 10 — Avançado (depois do Marco 3)

| | Passo | O que entrega | Aulas |
|---|---|---|---|
| `[ ]` | 10.1 Casas | comprar, entrar, guardar itens, chave | 6 |
| `[ ]` | 10.2 Territórios | áreas disputadas pelas facções | 4 |
| `[ ]` | 10.3 Roubos | lojas, caixas eletrônicos, banco, com polícia | 6 |
| `[ ]` | 10.4 Empresas de jogadores | lojas e negócios geridos por jogadores | 5 |
| `[ ]` | 10.5 Eventos da prefeitura | eventos sazonais e da cidade | 3 |
| `[ ]` | 10.6 Preparar para o GTA 6 | revisar regras × pontes quando houver RP de GTA 6 no PC | — |

---

## Ideias anotadas (sem passo ainda)

- Música ambiente na tela de carregamento.
- Tela de carregamento com o mar (desafio da aula 1).
- Câmera "cartão-postal" escolhida por você na tela de entrada (`/postal`).
