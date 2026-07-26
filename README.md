# Site da Super Apps

Site estático que serve como página do desenvolvedor, política de privacidade e suporte
dos jogos da Super Apps. Um jogo por pasta; a raiz é o hub que lista todos.

Publicado pelo repositório `joaovitorcf97.github.io`, ou seja, **na raiz do domínio**.

## Rotas

| Rota | Conteúdo |
|---|---|
| `/` | Hub com os dois jogos |
| `/solitaire/` | Página do Solitaire |
| `/solitaire/privacy/` | Política de privacidade do Solitaire |
| `/solitaire/support/` | Suporte do Solitaire |
| `/number-merge/` | Página do Number Merge |
| `/number-merge/privacy/` | Política de privacidade do Number Merge |
| `/number-merge/support/` | Suporte do Number Merge |
| `/privacy/` · `/support/` | Redirecionam para as rotas do Solitaire (ver abaixo) |

URLs para as lojas:

- Solitaire: `https://joaovitorcf97.github.io/solitaire/privacy/`
- Number Merge: `https://joaovitorcf97.github.io/number-merge/privacy/`

### Por que `/privacy/` e `/support/` continuam existindo

Eram as rotas do Solitaire quando o site tinha um jogo só, e `/privacy/` já foi
cadastrada no Google Play Console. As duas viraram páginas de redirecionamento
(`meta refresh` + `location.replace`) para as rotas novas, então nenhum link antigo
quebra. Só remova essas pastas depois de trocar a URL no Play Console — e mesmo assim,
manter custa quase nada.

## Estrutura

```
index.html                 hub
styles.css                 base compartilhada + um tema por jogo
site.js                    troca de idioma (PT/EN) e ano do rodapé
assets/solitaire/          ícone, textura de feltro, og, feature graphic
assets/number-merge/       ícone
```

Cada página escolhe o tema por uma classe no `<body>`: `theme-hub`, `theme-solitaire`
ou `theme-number-merge`. As páginas de documento somam `inner-page`, que escurece o
fundo. Nenhum `<style>` inline nas páginas — tema novo se resolve no `styles.css`.

O texto é bilíngue no próprio HTML: `data-lang="en"` e `data-lang="pt"` em blocos
paralelos, e o `site.js` esconde o que não é o idioma atual. O idioma escolhido fica
no `localStorage`, então ele acompanha a navegação entre as páginas.

## Publicação

Push na branch `main` publica pelo GitHub Pages. Em **Settings → Pages**, a origem é
**GitHub Actions** (ou *Deploy from a branch*, conforme a configuração do repositório).

## app-ads.txt

Como o site está na raiz do domínio, `https://joaovitorcf97.github.io/app-ads.txt`
responde direto — que é exatamente onde o AdMob procura. Nada a fazer além de manter
o arquivo na raiz do projeto.
