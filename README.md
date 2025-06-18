
# 🛒 Tech E-Commerce

Um e-commerce moderno e responsivo voltado para produtos de tecnologia, desenvolvido com **React**. O projeto possui sistema de **roteamento**, **catálogo dinâmico**, **página de detalhes do produto**, **sistema de seleção de idioma**, **avaliação por estrelas**, e está preparado para expansão com carrinho de compras, autenticação e integração com backend.

---

## 🔧 Tecnologias utilizadas

- [React](https://reactjs.org/)
- [React Router](https://reactrouter.com/)
- [Font Awesome](https://fontawesome.com/)
- CSS puro (com responsividade via media queries)
- JSON para dados simulados de produtos

---

## ✨ Funcionalidades

- Listagem de produtos com dados dinâmicos (imagem, descrição, preço, cores, etc.)
- Página de detalhes ao clicar em um produto
- Sistema de avaliação com estrelas baseado na nota (0 a 5)
- Seletor de idioma com bandeiras
- Responsividade completa (mobile, tablet e desktop)
- Animações suaves (transições em menus e botões)
- Scroll automático para o topo ao trocar de página

---

## 📁 Estrutura de pastas

```
src/
├── assets/
│   └── img/           # Imagens dos produtos e bandeiras
├── components/
│   ├── Header.jsx     # Cabeçalho com menu, busca e seleção de idioma
│   ├── ProductCard.jsx
│   ├── ProductDetail.jsx
│   └── Rating.jsx     # Componente de estrelas
├── data/
│   └── products.json  # Dados dos produtos
├── pages/
│   ├── Home/
│   │   └── App.jsx
│   └── ProductDetails/
│       └── product-details.jsx
├── styles/
│   ├── main.css
│   └── responsive.css
└── main.jsx           # Ponto de entrada com rotas
```

---

## 📦 Como rodar localmente

1. Clone este repositório:
   ```bash
   git clone https://github.com/seu-usuario/tech-ecommerce.git
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Inicie o projeto:
   ```bash
   npm run dev
   ```

4. Acesse no navegador:
   ```
   http://localhost:5173/
   ```

---

## 🚧 Melhorias futuras

- Carrinho de compras com localStorage
- Autenticação de usuários
- Backend com banco de dados
- Painel administrativo para produtos
- Filtro por categoria e busca avançada

---

## 📸 Screenshots

<img src="screenshots/home.png" width="400" />
<img src="screenshots/product-details.png" width="400" />

---

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

---

## 🙋‍♂️ Autor

Desenvolvido por **[Seu Nome]**  
📫 Contato: [seuemail@exemplo.com](mailto:seuemail@exemplo.com)
