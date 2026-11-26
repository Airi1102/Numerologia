const tabela = {
  1: { cores: "Vermelho ou laranja", significado: "recomeços, coragem, liderança e movimento" },
  2: { cores: "Laranja ou rosa", significado: "parcerias, afeto, diálogo e conexões" },
  3: { cores: "Amarelo", significado: "criatividade, expressão, comunicação e expansão" },
  4: { cores: "Verde ou marrom", significado: "estabilidade, trabalho, estrutura e organização" },
  5: { cores: "Azul ou violeta", significado: "mudanças, liberdade, viagens e serenidade" },
  6: { cores: "Azul-índigo ou rosa", significado: "família, harmonia, afeto e relacionamentos" },
  7: { cores: "Violeta ou lilás", significado: "autoconhecimento, intuição e espiritualidade" },
  8: { cores: "Rosa, marrom ou dourado", significado: "conquistas, prosperidade, equilíbrio e resultados" },
  9: { cores: "Dourado, verde, marrom ou violeta", significado: "encerramentos, renovação e fechamento de ciclos" }
};

function reduzirNumero(texto) {
  let soma = 0;

  for (let i = 0; i < texto.length; i++) {
    soma += Number(texto[i]);
  }

  while (soma > 9) {
    let novaSoma = 0;
    const algarismos = String(soma);

    for (let i = 0; i < algarismos.length; i++) {
      novaSoma += Number(algarismos[i]);
    }

    soma = novaSoma;
  }

  return soma;
}

const formulario = document.getElementById("formulario");
const resultado = document.getElementById("resultado");

formulario.addEventListener("submit", function (evento) {
  evento.preventDefault();

  const dia = Number(document.getElementById("dia").value);
  const mes = Number(document.getElementById("mes").value);

  
  const diasNoMes = new Date(2024, mes, 0).getDate();

  if (dia < 1 || mes < 1 || mes > 12 || dia > diasNoMes) {
    resultado.innerHTML = "<p>Data inválida. Confira o dia e o mês.</p>";
    return;
  }

  const proximoAno = new Date().getFullYear() + 1;


  const textoCompleto = String(dia) + String(mes) + String(proximoAno);
  const numero = reduzirNumero(textoCompleto);
  const info = tabela[numero];

  resultado.innerHTML =
    "<p>Seu número para " + proximoAno + " é <strong>" + numero + "</strong>.</p>" +
    "<p>Cores recomendadas: <strong>" + info.cores + "</strong></p>" +
    "<p>Energia do número: " + info.significado + ".</p>";
});