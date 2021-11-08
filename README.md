# README-LELLO

## Links úteis

| Dev                                                                                   | Design                                                                               |
| ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------ |
| [Git flow](https://danielkummer.github.io/git-flow-cheatsheet/index.pt_BR.html)       | [Ícones](https://drive.google.com/drive/folders/1NAwht6U7Td4NL65J2jMTPLNFuvCVYOTg)   |
| [Ambiente de Teste](https://lello-dev.justdigital.com.br/)                            | [UI - XD](https://xd.adobe.com/view/d50e5934-ab03-46ba-99fb-719ad44d9c53-805d/grid/) |
| [Pull requests](https://github.com/justdigital/lello-web/pull)                        | [ZeroHeight](https://zeroheight.com/059ffd9b8/p/86489a-colors)                       |
| [Conventional commits](https://megamorf.gitlab.io/cheat-sheets/conventional-commits/) |

| Docs                                                                              |
| --------------------------------------------------------------------------------- |
| [Nextjs](https://nextjs.org/docs)                                                 |
| [React](https://reactwithhooks.netlify.app/)                                      |
| [React Typescript Cheatsheet](https://react-typescript-cheatsheet.netlify.app/)   |
| [React-query](https://react-query.tanstack.com/overview)                          |
| [React-bootstrap](https://react-bootstrap.github.io/getting-started/introduction) |
| [Styled-components](https://styled-components.com/docs)                           |
| [Zustand](https://github.com/pmndrs/zustand)                                      |
| [Formik](https://formik.org/docs/overview)                                        |

---

## Features

**Criar nova feature** com a develop atualizada

- `git checkout develop`
- `yarn`
- `git pull`
- Criar nova branch baseada na develop
  - `git flow feature start SITES-X`

**Commit** da feature utilizando [conventional commits](https://megamorf.gitlab.io/cheat-sheets/conventional-commits/)

- `git add .`
- `git commit -m 'feat(Local): Adiciona página Home [SITES-X]'`
- `git push origin feature/SITES-X`

**Criar pull request** com base em develop e adicionar label para o estado da PR (Work In Progress) para caso ainda esteja desenvolvendo ou (Waiting for code review) caso já tenha finalizado.

- Criar um [pull request](https://github.com/justdigital/lello-web/pulls)
  - Título: Adiciona página Home [SITES-X]
  - Label: Work In Progress / Waiting for code review

**Verificar se há PRs a serem revisadas** com a label _Waiting for code review_

Após fazer validação da PR na parte técnica e visual, finalizar a branch utilizando o comando

- Validar de acordo com o Card
  - Código - adicionar comentários de dúvidas e/ou sugestões caso exista.
  - Parte funcional.
  - Parte visual.
- Finaliza a feature mergeando na develop localmente e depois remotamente.
  - `git flow feature finish SITES-X`
  - `git push origin develop`

<details>
<summary>Como criar PRs com o Github CLI</summary>

- Opção 2 (GH CLI: PR em progresso): `gh pr create -t 'Adiciona página Home [SITES-X]' -B develop -l Work In Progress`
- Opção 3 (GH CLI: PR finalizada): `gh pr create -t 'Adiciona página Home [SITES-X]' -B develop -l Waiting for code review`
</details>

<details>
<summary>Como validar a parte visual</summary>

Valide a parte visual como referência ao projeto XD.

- [ ] Tamanho
- [ ] Fontweight
- [ ] Cor
- [ ] Espaçamentos - para margens e paddings
  - [ ] Top
  - [ ] Bottom
  - [ ] Right
  - [ ] Left
- [ ] Bordas

</details>

---

## Tokens

Em arquivos feature**.style.ts** utilize cada token específico de cada área.

- fontFamilyBase
- fontWeightBold
- fontWeightNormal
- fonts[número-do-token]
- spacers[número-do-token]
- ... Possuímos tokens para diversas outras funcionalidades como shadow, zindex e etc. Para acessá-las basta pressionar `ctrl + space` ao escrever o token

<details>
<summary>Fonts</summary>

| Token | Valor token | Min           | Max  |
| ----- | ----------- | ------------- | ---- |
| 1     | 12px        | 10px          | 12px |
| 2     | 13px        |               |      |
| 3     | 14px        |               |      |
| 4     | 16px        | 15px          | 18px |
| 5     | 20px        | 19px          | 22px |
| 6     | 25px        | 23px          | 27px |
| 7     | 30px        | 28px          | 35px |
| 8     | 40px        | acima de 36px |      |

</details>

<details>
<summary>Spacers</summary>

| Token | Valor token | Min   | Max   |
| ----- | ----------- | ----- | ----- |
| 1     | 4px         | 1px   | 6px   |
| 2     | 8px         | 7px   | 12px  |
| 3     | 16px        | 13px  | 20px  |
| 4     | 24px        | 21px  | 28px  |
| 5     | 32px        | 29px  | 40px  |
| 6     | 48px        | 41px  | 56px  |
| 7     | 64px        | 57px  | 80px  |
| 8     | 96px        | 81px  | 112px |
| 9     | 128px       | 112px | 144px |

</details>

<details>
<summary>Como usar os tokens</summary>

```jsx
import styled, { css } from 'styled-components';

export const Componente = styled.div`
  margin-top: ${({ theme }) => theme.spacers[5]};
  font-size: ${({ theme }) => theme.fonts[1]};
  z-index: ${({ theme }) => theme.(PRESSIONE CTRL + SPACE)}
`;

// ou

export const Componente = styled.div`
  ${({ theme }) => css `
  margin-top: ${theme.spacers[5]};
  font-size: ${theme.fonts[1]};
  `}
`;
```

<details>
