# Projeto TypeScript - Generation Bootcamp Fullstack
---

## 📝 Descrição
Este projeto faz parte do bootcamp Fullstack da Generation Brasil em parceria com o Instituto Caldeira e Instituto Helda Gerdau. O projeto implementa diversos conceitos de TypeScript, incluindo POO, estruturas de dados, coleções e funções.

## 🚀 Tecnologias Utilizadas
- TypeScript
- Node.js
- readline-sync (para interação no terminal)

## 🧩 Estrutura do Projeto
```
typescript-generation/
├── desafio-generation/
│   ├── collections-04.11/
│   │   ├── exercicio01-array.ts
│   │   ├── exercicio02-set.ts
│   │   └── exercicio03-set.ts
│   └── estrutura-dados-05.11/
│       ├── exercicio01-queue.ts
│       └── exercicio02-stack.ts
├── estrutura-dados/
│   ├── Queue.ts
│   ├── Stack.ts
│   ├── TestaQueue.ts
│   └── TestaStack.ts
├── funcoes/
│   ├── Calculadora.ts
│   ├── Calculos.ts
│   └── Funcoes.ts
├── poo/
│   ├── Carro.ts
│   └── TestaCarro.ts
├── Array.ts
├── EntradaDeDados.ts
├── HelloWorld.ts
├── Set.ts
├── Variaveis.ts
├── package.json
└── tsconfig.json
```

## 🛠️ Como Executar o Projeto

1. Clone o repositório:
```bash
git clone https://github.com/andreyrsy/typescript-generation.git
```

2. Instale as dependências necessárias:
```bash
# Inicialize o projeto Node
npm init -y

# Instale o TypeScript globalmente
npm install -g typescript

# Instale o ts-node globalmente para execução simplificada
npm install -g ts-node

# Inicialize a configuração do TypeScript
tsc --init

# Instale o readline-sync e suas definições de tipos
npm install readline-sync
npm install @types/node
npm install --save-dev @types/readline-sync
```

3. Configure o TypeScript:
Abra o arquivo `tsconfig.json` e faça a seguinte alteração:

```json
{
    "verbatimModuleSyntax": false
}
```

> **Nota sobre configuração:**
> - `"verbatimModuleSyntax": false` - Esta configuração é necessária para permitir a importação/exportação entre arquivos TypeScript usando a sintaxe ES modules.

4. Execute os arquivos TypeScript:
```bash
ts-node nome-do-arquivo.ts
```

## 🎓 Sobre o Bootcamp Generation
Este projeto é parte de uma jornada de aprendizado no bootcamp Fullstack da Generation Brasil.

### Pastas do Bootcamp Fullstack
- [Projeto JavaScript](https://github.com/andreyrsy/javascript-generation)
- [Projeto TypeScript](https://github.com/andreyrsy/typescript-generation) (Este repositório)
- [Projeto Conta Bancária](https://github.com/andreyrsy/conta-bancaria-bootcamp)

---
⭐ Desenvolvido como parte do programa de Desenvolvimento Fullstack JavaScript da Generation Brasil.
