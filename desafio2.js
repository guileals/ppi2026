// DESAFIO 2

// Q1
const alunos = [
  { nome: "Ana", notas: [8, 7, 9] },
  { nome: "Bruno", notas: [5, 6, 5] },
  { nome: "Carla", notas: [9, 9, 10] },
  { nome: "Diego", notas: [6, 7, 8] },
];

let alunosMedia = alunos
  .map(
    // (aluno) => {
    //     let media = (aluno.notas[0] + aluno.notas[1] + aluno.notas[2])/3;
    //     return {nome: aluno.nome, media: media};
    // }
    (aluno) => ({
      nome: aluno.nome,
      media:
        aluno.notas.reduce((soma, nota) => soma + nota, 0) / aluno.notas.length,
    }),
  )
  .filter((aluno) => aluno.media >= 7)
  .toSorted((a, b) => b.media - a.media);

console.log(alunosMedia);

console.log(
  alunosMedia.reduce((mediaTurma, aluno) => mediaTurma + aluno.media, 0) /
    alunosMedia.length,
);

// Q2
const filmes = [
  { titulo: "O Senhor dos Anéis", ano: 2001, genero: "fantasia" },
  { titulo: "Matrix", ano: 1999, genero: "ficção" },
  { titulo: "Interestelar", ano: 2014, genero: "ficção" },
  { titulo: "Divertida Mente", ano: 2015, genero: "animação" },
];

function buscarFilmes(genero, criterio) {
  const filtro = filmes.filter((filme) => filme.genero === genero);

  if (criterio === "titulo") {
    filtro.sort((a, b) => a.titulo.localeCompare(b.titulo));
  } else if (criterio === "ano") {
    filtro.sort((a, b) => b.ano - a.ano);
  } else {
    console.log("Critério inválido!");
    filtro.length = 0;
  }

  console.log(
    filtro.map((filme) => `${filme.titulo} (${filme.ano}) - ${filme.genero}`),
  );
}

buscarFilmes("ficção", "ano");
