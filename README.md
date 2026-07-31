# JF Publicidade

Site institucional da JF Publicidade, desenvolvido em HTML, CSS e JavaScript puro.

## Estrutura

```text
jf-publicidade/
├── css/
│   └── main.css
├── img/
├── js/
│   ├── form.js
│   ├── reviews.js
│   ├── script.js
│   └── ScrollSpy.js
├── index.html
└── README.md
```

## CSS

Todo o estilo do projeto está centralizado em `css/main.css`.

O arquivo foi dividido por comentários de seção para facilitar a manutenção:

- Base
- Cabeçalho e navegação
- Hero
- Sobre
- Serviços
- Destaques dos serviços
- Localização
- Avaliações
- Contato
- Card de perfil
- Rodapé
- Modal SEO

## JavaScript

- `form.js`: links de WhatsApp e envio do formulário de contato.
- `reviews.js`: renderização das avaliações exibidas no site.
- `script.js`: menu mobile, ano do rodapé e modal SEO.
- `ScrollSpy.js`: atualização do link ativo do menu conforme a rolagem.

## Manutenção

### WhatsApp

O número principal está definido no início de `js/form.js`:

```js
const WHATSAPP_NUMBER = "5527997333798";
```

A mensagem padrão dos botões também fica centralizada no mesmo arquivo.

### Avaliações

As avaliações exibidas atualmente ficam no array `googleReviews`, em `js/reviews.js`.

### SEO e domínio

Metatags, dados estruturados, Google Analytics e Search Console ficam no `<head>` de `index.html`.

Domínio configurado:

```text
https://jfpublicidades.com.br/
```

## Publicação

O projeto é estático e pode ser publicado diretamente na Vercel ou em qualquer hospedagem compatível com HTML/CSS/JS.
