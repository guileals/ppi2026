# IFRN - Campus Macau
# Programação para Internet
# Prof. Guilherme Leal

## Desafio 2

- Ao concluir, commit com a mensagem "DESAFIO 2" e anexar o link para o repositório na atividade do GSA

---

## Questão 1 — Média de notas e filtro de aprovados

### Contexto

Você recebeu uma lista de alunos. Cada aluno possui um **nome** e um array de **notas**.

```js
const alunos = [
  { nome: "Ana", notas: [8, 7, 9] },
  { nome: "Bruno", notas: [5, 6, 5] },
  { nome: "Carla", notas: [9, 9, 10] },
  { nome: "Diego", notas: [6, 7, 8] },
];
```

Considere que a média mínima para aprovação é **7**.

### Desafio

Crie uma solução que:

1. Use **`map()`** e **`reduce()`** para gerar um novo array de objetos no formato:

```js
{ nome: "Ana", media: 8 }
```

2. Use **`filter()`** para manter apenas os alunos com média maior ou igual a 7.
3. Use **`sort()`** para ordenar os alunos aprovados da maior média para a menor.

### Regras

- Não modifique o array `alunos` original.
- Use obrigatoriamente **`map()`**, **`reduce()`**, **`filter()`** e **`sort()`**.

### Resultado esperado

Ao final, a saída deve ser uma lista ordenada apenas com os alunos aprovados e suas médias.

### Dicas

- `reduce()` pode ser usado para somar os valores do array de notas e gerar um único resultado.
- `map()` pode transformar cada aluno em um novo objeto com a média calculada.
- `filter()` retorna apenas os elementos que atendem a uma condição.
- `sort()` pode ordenar em ordem decrescente comparando `b.media - a.media`.

### Exemplo de estrutura esperada da saída

```js
[
  { nome: "Carla", media: 9.33 },
  { nome: "Ana", media: 8 },
  { nome: "Diego", media: 7 },
];
```

---

## Questão 2 — Catálogo de filmes com busca e ordenação

### Contexto

Você recebeu um catálogo de filmes. Cada filme possui **título**, **ano** e **gênero**.

```js
const filmes = [
  { titulo: "O Senhor dos Anéis", ano: 2001, genero: "fantasia" },
  { titulo: "Matrix", ano: 1999, genero: "ficção" },
  { titulo: "Interestelar", ano: 2014, genero: "ficção" },
  { titulo: "Divertida Mente", ano: 2015, genero: "animação" },
];
```

### Desafio

Crie uma função que:

1. Receba um **gênero** como parâmetro e use **`filter()`** para retornar apenas os filmes daquele gênero.
2. Receba também um critério de ordenação e use **`sort()`** para ordenar:
   - por **ano**, do mais recente para o mais antigo; ou
   - por **título**, em ordem alfabética.
3. Use **`map()`** para transformar o resultado em um array de strings com o formato:

```js
"Interestelar (2014) - ficção";
```

### Regras

- A função não deve modificar o array original.
- Use obrigatoriamente **`filter()`**, **`sort()`** e **`map()`**.

### Resultado esperado

A função deve permitir consultar o catálogo de maneira organizada, retornando apenas os filmes desejados no formato textual definido.

### Dicas

- `filter()` é ideal para selecionar apenas os filmes de um gênero específico.
- `sort()` pode mudar o array original; por isso, vale trabalhar com uma cópia antes de ordenar.
- `map()` ajuda a formatar os objetos em strings mais amigáveis para exibição.

### Exemplo de chamada esperada

```js
buscarFilmes("ficção", "ano");
```

### Exemplo de saída esperada

```js
["Interestelar (2014) - ficção", "Matrix (1999) - ficção"];
```
