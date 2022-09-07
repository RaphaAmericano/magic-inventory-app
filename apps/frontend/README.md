# Boilerplate React 2.0

Boilerplate com exemplos e tooling preconfigurado para garantir um projeto de qualidade!

## Primeiros passos

1. Você precisará de Node.js 12 instalado.
2. Instale dependências com `npm ci`.
3. Execute o projeto localmente com `npm run dev`.
4. Execute a suite de testes do projeto com `npm test`.
5. Execute `npm run storybook` para exibir os componentes do projeto.

## Tecnologias

- React 17
- React Router 6
- Webpack 5
- Sass
- Jest
- Storybook

## Padrão de commit

> **ATENÇÃO:** mensagens de commit que não estejam de acordo com os critérios abaixo irão impedir a criação do commit.

Os commits devem ser semânticos e seguir o seguinte padrão:

```
feat(payment): add currency verification for credit card transactions
^--^ ^--*--^   ^------------^ -> Mensagem no imperativo
 *      *-> [optional]: Escopo do commit
 *-> Tipos: chore, docs, feat, fix, merge, perf, refact, style, test, or wip.
```

Os tipos disponíveis são:

- `chore`: se refere à alguma implementação que não impacta diretamente o usuário. Por exemplo, uma mudança no `.gitlab-ci.yml`.
- `docs`: se refere à alterações na documentação
- `feat`: se refere à implementação de features
- `fix`: se refere à uma correção
- `refactor`: se refere à refatoração de uma feature previamente implementada
- `style`: se refere à uma mudança estética no código. Por exemplo: alterar a indentação de espaço para tab
- `test`: se refere à uma implementação de teste

O escopo não é obrigatório e se refere à uma informação contextual para ajudar na compreensão da mensagem e da área afetada.

Os commits devem ser atômicos e representar uma mudança unitária na aplicação. Sendo assim, a implementação de uma nova funcionalidade provavelmente envolverá no mínimo: `feat`, `test` e possivelmente `chore` e `docs`.

É recomendado que antes de abrir o merge request seja feita a remoção de commits inúteis. Uma forma fácil de fazer isso é utilizando `rebase -i`.

Observação: as mensagens de commits devem ter no máximo 100 caracteres por linha.

## Alias

Os seguintes alias estão configurados para facilitar a importação dos principais recursos:

- **@pages:** "src/pages/\*"
  - `import Home from "@pages/home";`
- **@components:** "src/components/\*"
  - `import { Button } from "@components/Button";`
- **@stores:** "src/stores/\*"
  - `import { useStores } from "@stores/index";`
- **@hooks:** "src/hooks/\*"
  - `import { useLocalStorage } from "@hooks/localStorage";`
- **@assets:** "src/assets/\*"
  - `import BrandPng from "@assets/images/brand.png";`

## Variáveis de ambiente

Para definir variáveis de ambiente, basta adicionar no arquivo `environments/env.dev.js` para ambiente de desenvolvimento e `environments/env.prod.js` para ambiente de produção.

Por padrão será usado as variáveis de ambiente de desenvolvimento. As variáveis de produção serão usando quando NODE_ENV=production.

### Como usar

Uma vez declarada, as variáveis poderão ser acessadas da seguinte forma:

```tsx
console.log(process.env.API_URL);
console.log(process.env.ENV);
```

## Padrão de estilo

Por padrão, está configurado para ter suporte com SASS e CSS, ambos de foma modular ou global.

### Estilo Modular

Um estilo modular é um arquivo CSS/SASS no qual todos os nomes de classe e nomes de animação têm escopo local por padrão.

```scss
.header {
  display: flex;
  justify-content: center;
  color: red;
}
```

Ao declarar a classe `.header` em um arquivo CSS/SASS modular, após o build da aplicação o nome da classe será `.header_[hash]` (Ex.: `.header_gQGUv`). Dessa forma, você poderá definir a classe `.header` em múltiplos locais, sem que haja qualquer sobreposição de estilo.

#### Criando estilo modular

Estilos modulares sempre devem finalizar com `.modular.css` ou `.modular.scss`. Sua importação deve ser feita da seguinte forma:

```tsx
import css from "./style.module.scss";

export function Component() {
  return (
    <header className={css.header}>
      <h1>Header</h1>
    </header>
  );
}
```

### Estilo global

Diferente do estilo modular, arquivos de estilo global não possuem hash após o build e afetam todos os locais. Logo, é preciso utilizar com cautela para não criar sobreposição de estilo.

Por padrão, no diretório `src/assets/styles/global.scss` existe um arquivo sass global usado para alterar estilos globais. O mesmo só deve ser importado uma única vez pela aplicação.

#### Criando estilo global

Estilos globais devem finalizar apenas com `.css` ou `.scss`. Sua importação deve ser feito da seguinte forma:

```tsx
import "./style.scss";

export function Component() {
  return (
    <header className="header">
      <h1>Header</h1>
    </header>
  );
}
```

> 🚧 Evite ao máximo utilizar estilos globais. Quando for realmente necessário, utilize o arquivo já definido em `src/assets/styles/global.scss`.

### Variáveis e Mixins Sass

As variáveis e mixins do sass são recursos muitos úteis, eles devem ser declarados em:

- **variáveis:** `src/assets/_variables.scss`;
- **mixins:** `src/assets/_mixins.scss`;

Nosso Webpack está configurado para importar esses arquivos por padrão, logo, não é necessário importar em seus arquivos de estilo, basta utilizar.

```scss
.class {
  @include flex(center, center, row);
  background: $primary-color;
}
```

## Imagens e Svg

As imagens e svg devem ser adicionadas nos seguintes diretórios:

- **Imagens:** `src/assets/images`
- **SVG:** `src/assets/icons`

### Usando imagens

```tsx
import Brand from "@assets/images/brand.png";

export function Component() {
  return (
    <div>
      <img src={Brand} alt="Brand" />
    </div>
  );
}
```

### Usando SVG

Para facilitar a manipulação de arquivos svg, está sendo utilizado o [SVGR](https://react-svgr.com/) para transformar arquivos svg em componentes react. Sua utilização deve ser feita da seguinte forma:

```tsx
import Icon from "@assets/icons/icon.svg";

export function Component() {
  return (
    <div>
      <Icon />
    </div>
  );
}
```

Também é possível usar SVG como img, basta importar da seguinte forma:

```tsx
import IconUrl from "@assets/icons/icon.svg?url";

export function Component() {
  return (
    <div>
      <img src={IconUrl} alt="icon" />
    </div>
  );
}
```
