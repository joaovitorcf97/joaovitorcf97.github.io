# Site do Solitaire

Site estático utilizado como página do desenvolvedor, política de privacidade e suporte do Solitaire.

## Endereços depois da publicação

- Site: `https://joaovitorcf97.github.io/solitaire-game/`
- Política: `https://joaovitorcf97.github.io/solitaire-game/privacy/`
- Suporte: `https://joaovitorcf97.github.io/solitaire-game/support/`
- app-ads.txt preparado no projeto: `https://joaovitorcf97.github.io/solitaire-game/app-ads.txt`

## Publicação no GitHub Pages

O workflow `.github/workflows/deploy-frontend-pages.yml` publica automaticamente o conteúdo desta pasta quando alterações chegam à branch `main`.

No GitHub, abra **Settings → Pages** e escolha **GitHub Actions** em **Build and deployment → Source**. Depois envie as alterações para a branch `main` ou execute o workflow manualmente pela aba **Actions**.

## Observação importante sobre app-ads.txt

O AdMob normalmente procura o arquivo na raiz do domínio informado pela loja, por exemplo `https://joaovitorcf97.github.io/app-ads.txt`, ignorando o caminho `/solitaire-game/`. O arquivo está preparado nesta pasta, mas a verificação pode exigir uma destas opções:

1. publicar o site em um domínio próprio e manter `app-ads.txt` na raiz; ou
2. criar um repositório GitHub Pages de usuário chamado `joaovitorcf97.github.io` e publicar o arquivo na raiz dele.

Para a URL da política de privacidade, o endereço dentro de `/solitaire-game/privacy/` funciona normalmente.
