  // Função para enviar várias mensagens em sequência
  async function enviarMensagensEmSequencia(texto, vezes) {
    if (vezes < 1) {
      throw new Error("O número de vezes deve ser maior que zero.");
    }
  
    for (let i = 0; i < vezes; i++) {
      await enviarMensagem(texto);
  
      if (i < vezes - 1) {
        await new Promise(resolve => setTimeout(resolve, 250));
      }
    }
  
    return vezes;
  }
  
  // Exemplo na linha abaixo, insira o texto dentro dos () e a quantidade a ser repetida!!!
  enviarMensagensEmSequencia("insira o texto aqui!!!!!", 20)
    .then(qtde => console.log(`Código finalizado. ${qtde} mensagens enviadas.`))
    .catch(console.error);
