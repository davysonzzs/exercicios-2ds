# ADR 001 — Corrigir o erro 500 no cadastro de pedido antes de qualquer funcionalidade nova

Data: 2026-11-24
Status: aceita

## Contexto
Ao cadastrar um pedido sem nome, o servidor responde com erro 500 e o pedido
é perdido. O problema afeta todos os usuários que cadastram pedidos
(alcance estimado: 200 pessoas). O backlog tem 5 itens e, pelo RICE
simplificado, este é o primeiro, com nota 300, bem à frente do segundo (75).

## Decisão
Corrigir primeiro o erro 500, validando o campo nome no servidor e
devolvendo uma resposta 400 com mensagem clara. As demais tarefas
(listagem, cores, busca) esperam essa correção. O relatório em PDF
fica fora do escopo atual (Won't).

## Consequências
+ Remove a falha que mais afeta os usuários, com apenas 2 horas de trabalho.
+ Dá base confiável para a tela de listagem, que depende de pedidos bem salvos.
+ Deixa explícito, por escrito, o que não será feito agora (PDF).
− A tela de listagem só começa depois da correção.
− Os números de alcance são estimativas e precisam ser revistos quando
  houver novos dados de NPS e funil.
