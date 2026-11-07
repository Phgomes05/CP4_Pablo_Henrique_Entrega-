# Portfólio pessoal — CP3

Projeto evoluído a partir do CP2. As cinco páginas obrigatórias estão interligadas:
`index.html`, `curriculo.html`, `formulario.html`, `multimidia.html` e `graficos.html`.

## Estrutura
- `css/estilos.css`: estilos do site.
- `js/scripts.js`: interatividade, validação e persistência em `localStorage`.
- mídias locais: áudio, vídeo e imagem incluídos no projeto.

## Funcionalidades CP3
- Seleção de interesses na página inicial, salva no navegador.
- Formulário com validação JavaScript e feedback visível.
- Último contato demonstrativo salvo em `localStorage`. Nenhum dado é enviado a um servidor.

## Publicar no GitHub Pages
1. Crie um repositório público no GitHub.
2. Envie o conteúdo desta pasta para a raiz do repositório.
3. Em **Settings → Pages**, escolha **Deploy from a branch**, branch `main`, pasta `/ (root)` e salve.
4. Aguarde o GitHub Pages publicar. A URL será `https://SEU-USUARIO.github.io/NOME-DO-REPOSITORIO/`.
5. Abra a URL em janela anônima e teste as cinco páginas e os links internos.

## Enviar o repositório ao GitHub
Esta pasta já contém dois commits e a tag `cp3-entrega`. Crie um repositório vazio no GitHub (sem README, licença ou `.gitignore`) e execute dentro desta pasta:

```bash
git branch -M main
git remote add origin https://github.com/SEU-USUARIO/SEU-REPOSITORIO.git
git push -u origin main
git push origin cp3-entrega
```

Depois, em **Settings → Pages**, escolha **Deploy from a branch**, branch `main`, pasta `/ (root)` e salve. Aguarde a publicação. A URL será `https://SEU-USUARIO.github.io/SEU-REPOSITORIO/`.

Abra a URL em uma janela anônima e teste as cinco páginas, a navegação interna, o formulário e os interesses salvos. O formulário é demonstrativo: valida e salva localmente, mas não envia e-mail nem transmite os dados para um servidor.
