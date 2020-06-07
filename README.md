# Busca binária

A pesquisa ou busca binária (em inglês binary search algorithm) é um algoritmo de busca em vetores que segue o paradigma de **divisão e conquista**. Ela parte do pressuposto de que o vetor está ordenado e realiza sucessivas divisões do espaço de busca comparando o elemento buscado (chave) com o elemento no meio do vetor. Se o elemento do meio do vetor for a chave, a busca termina com sucesso. Caso contrário, se o elemento do meio vier antes do elemento buscado, então a busca continua na metade posterior do vetor. E finalmente, se o elemento do meio vier depois da chave, a busca continua na metade anterior do vetor.

[Fonte](https://pt.wikipedia.org/wiki/Pesquisa_bin%C3%A1ria)

📋 Como testar?

Faça um clone do projeto:

```bash
git clone https://github.com/felipesuri/binary-search && cd binary-search
```

Logo depois, faça o download das dependências e teste:

```bash
yarn install && yarn test
```

---

Feito com 💞 por FelipeSuri 🔰
