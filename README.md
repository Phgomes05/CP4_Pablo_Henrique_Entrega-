# Portfólio pessoal — CP4

Versão consolidada do site pessoal, com cinco páginas integradas:
`index.html`, `curriculo.html`, `formulario.html`, `multimidia.html` e `graficos.html`.

## O que foi consolidado no CP4
- Continuidade da estrutura HTML e do conteúdo desenvolvido nos checkpoints anteriores.
- Layout responsivo com CSS próprio (mobile-first, Flexbox e Grid).
- Bootstrap 5.3.3 integrado por CDN. Classes utilizadas incluem `container`, `nav`, `nav-pills`, `nav-link`, `btn`, `btn-primary`, `form-control`, `form-select`, `table`, `table-striped` e `table-responsive`.
- Feature JavaScript: salvar/remover interesses na página inicial, com persistência em `localStorage` após atualizar a página.
- Formulário com validação JavaScript e demonstração de armazenamento local. O formulário não envia dados para um servidor.
- Ajustes de acessibilidade: link para pular ao conteúdo, textos alternativos, navegação semântica, indicação da página atual, foco visível, alvos de interação confortáveis e suporte a `prefers-reduced-motion`.

## Estrutura
- `css/estilos.css`: estilos e ajustes responsivos/acessíveis.
- `js/scripts.js`: interatividade, validação e persistência.
- `programacao.svg`: ilustração da página inicial.
- arquivos de áudio e vídeo: exemplos da página Multimídia.

## Publicação no GitHub Pages
1. Envie o conteúdo desta pasta para a raiz do repositório.
2. Em GitHub → Settings → Pages, configure a publicação pela branch `main`, pasta `/ (root)`.
3. Aguarde o deploy e teste o endereço `https://...` em janela anônima.
4. Navegue pelas cinco páginas e teste o formulário e os interesses salvos.

## Criar a tag de entrega
Execute na pasta do repositório:

```bash
git add .
git commit -m "feat: consolidar versao final CP4"
git tag -a cp4-entrega -m "Entrega final CP4"
git push origin main
git push origin cp4-entrega
```

Se a tag já existir localmente, confira antes de recriá-la com `git tag`.

## Demonstração da persistência
1. Abra `index.html` no site publicado.
2. Clique em “Salvar interesse” em um ou mais cards.
3. Atualize a página com F5: os interesses continuam marcados.
4. Para evidenciar o armazenamento, abra DevTools → Application → Local Storage → domínio do site e procure `pabloPortfolioInteresses`.

## Observação
O Bootstrap é carregado pela CDN oficial; portanto, a integração visual do Bootstrap depende de conexão com a internet. O CSS próprio continua responsável pela identidade visual do portfólio.
