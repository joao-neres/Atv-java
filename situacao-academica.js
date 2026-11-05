let nome = "João";
let idade = 17;
let curso = "Desenvolvimento de Sistemas";

let nota1 = 8;
let nota2 = 9;
let nota3 = 7;

let faltas = 5;
let matriculado = true;

console.log("===== CADASTRO DO ALUNO =====");
console.log("Nome:", nome);
console.log("Idade:", idade);
console.log("Curso:", curso);
console.log("Primeira nota:", nota1);
console.log("Segunda nota:", nota2);
console.log("Terceira nota:", nota3);
console.log("Quantidade de faltas:", faltas);
console.log("Está matriculado:", matriculado);

let media = (nota1 + nota2 + nota3) / 3;

console.log("===== CÁLCULO DA MÉDIA =====");
console.log("Média do aluno:", media);

let situacao;

if (media >= 7) {
    situacao = "Aprovado";
} else if (media >= 5) {
    situacao = "Recuperação";
} else {
    situacao = "Reprovado";
}

console.log("Situação acadêmica:", situacao);

const totalAulas = 40;
const frequenciaMinima = 75;

let aulasFrequentadas = totalAulas - faltas;
let frequencia = (aulasFrequentadas / totalAulas) * 100;

console.log("===== FREQUÊNCIA =====");
console.log("Aulas frequentadas:", aulasFrequentadas);
console.log("Percentual de frequência:", frequencia + "%");

if (frequencia >= frequenciaMinima) {
    console.log("Frequência mínima atingida!");
} else {
    console.log("Frequência mínima não atingida!");
}

let aprovadoFinal = media >= 7 && frequencia >= 75 && matriculado;

console.log("===== VERIFICAÇÃO FINAL =====");

if (aprovadoFinal) {
    console.log("Aluno aprovado em todos os critérios!");
} else {
    console.log("Aluno não atende a todos os critérios para aprovação.");
}

console.log("==================================");
console.log("       RELATÓRIO FINAL");
console.log("==================================");

console.log("Nome do aluno:", nome);
console.log("Idade:", idade);
console.log("Curso:", curso);
console.log("Média calculada:", media);
console.log("Percentual de frequência:", frequencia + "%");
console.log("Situação acadêmica:", situacao);

if (aprovadoFinal) {
    console.log("Resultado final: APROVADO");
} else {
    console.log("Resultado final: NÃO APROVADO");
}

console.log("==================================");