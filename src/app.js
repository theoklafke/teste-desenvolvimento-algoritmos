import readline from 'readline-sync';

// =================================================================
// DESAFIO: TOTEM MEGALODON
// cEscreva seu algoritmo de validação e regras de negócio abaixo.
// =================================================================

function iniciarTotem() {
    console.log("=== BEM-VINDO AO TECHPARK ===");
    console.log("Iniciando o sistema da Montanha-Russa MegaloDon...\n");

    // EXEMPLO DE ENTRADA:
    // O readline.question() lê o que o usuário digita como TEXTO (String)

    // 1. FAÇA AQUI A VALIDAÇÃO DO NOME (Se está vazio)
     let nome = readline.question("Digite o nome do cliente: ");
                            
    if (nome === "") {
        console.log("[ERRO] O nome do cliente não pode estar vazio!");
        return;
    } 
                        
    // Para ler números inteiros, use: readline.questionInt()
    // Para ler números decimais (altura), use: readline.questionFloat()
   
    // 2. DIGITE ABAIXO A ENTRADA E VALIDAÇÃO DA IDADE
    let idade = readline.questionInt("Digite a idade do cliente: ");
    
        if (idade < 1 ||idade > 120) {
            console.log("[ERRO] Idade inválida! Digite um valor entre 1 e 120.");
            return;
        }

    // 3. DIGITE ABAIXO A ENTRADA E VALIDAÇÃO DA ALTURA
    let altura = readline.questionFloat("Digite a altura do cliente [x.xx]:");
        
    if (altura <= 0.50 || altura > 2.50) {
    console.log("[ERRO] Altura inválida! A altura deve estar entre 0.50m e 2.50m.");
    return;
    } 

         // 4. DIGITE ABAIXO AS REGRAS DE NEGÓCIO (SE / SENÃO) DELINEADAS NO GUIA

    if (altura < 2.50 && altura >= 1.50 && idade >= 12) {
         console.log(`Olá, ${nome},Cadastro validado com sucesso. Seu acesso foi PERMITIDO. Divirta-se na MegaloDon!`);
         return;
    } 
    else if  (altura < 2.50 && altura >= 1.50 && idade < 12  ) {
        console.log(`[ACESSO NEGADO], ${nome}, você possui a altura necessária, mas não atingiu a idade mínima de 12 anos.`);
        return;
    }
    else if (idade >= 12 && altura < 1.50) {
    console.log(`[ACESSO NEGADO], ${nome}, você possui a idade necessária, mas não atingiu a altura mínima de 1.50m.`);
    return; 
    }
    else {
        console.log(`[ACESSO NEGADO], ${nome}, o acesso foi recusado porque você não possui a idade mínima (12 anos) e nem a altura mínima (1.50m).`);
        return;
    }           

}

// Executa o sistema do totem
iniciarTotem();



