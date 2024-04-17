//input
nome = "Bruno"
anoNascimento = 1998

//processamento
hoje = new Date()
anoAtual = hoje.getFullYear()
idade = anoAtual - anoNascimento
mensagem = "Me chamo " + nome + " e tenho " +idade+ " anos"

//output
alert(mensagem)