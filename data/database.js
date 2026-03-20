// =============================================================
// data/database.js — Banco de Dados em Memória
// =============================================================
// O que é isso?
//   Em vez de usar um banco de dados real (como MySQL ou MongoDB),
//   guardamos os dados aqui mesmo, dentro de arrays do JavaScript.
//   Isso funciona enquanto o servidor está ligado.
//   Quando o servidor reinicia, os dados voltam para o estado inicial.
//
// Por que usar isso nas aulas?
//   Simplifica o aprendizado! Não precisamos instalar e configurar
//   um banco de dados externo. O foco é aprender a API e os Middlewares.
// =============================================================

// ─── Tabela de Categorias ─────────────────────────────────────
// Cada categoria agrupa produtos relacionados no cardápio.
let categorias = [
    { id: 1, nome: 'Combinados' },
    { id: 2, nome: 'Temakis' },
    { id: 3, nome: 'Bebidas' },
    {id: 4, nome: 'Sobremesas'}
];

// ─── Tabela de Produtos ───────────────────────────────────────
// Cada produto tem um ID único, pertence a uma categoria (categoriaId),
// e possui nome, descrição, preço e o nome do arquivo de imagem.
let produtos = [
    {
        id: 1,
        categoriaId: 1,
        nome: 'Combinado Salmão 20 Peças',
        descricao: 'Sashimis, niguiris e uramakis de salmão fresco.',
        preco: 89.90,
        imagem: 'combinado1.png'
    },
    {
        id: 2,
        categoriaId: 2,
        nome: 'Temaki Filadélfia',
        descricao: 'Salmão, cream cheese e cebolinha.',
        preco: 35.00,
        imagem: 'temaki-fila.png'
    },
     {
        id: 3,
        categoriaId: 3,
        nome: 'Refrigerante Lata',
        descricao: 'Coca-Cola, Guaraná ou Sprite (350ml).',
        preco: 6.50,
        imagem: 'refrigerante.png'
    },
    {
        id: 4,
        categoriaId: 4,
        nome: 'Hot Roll Doce',
        descricao: 'Sushi empanado com banana e chocolate.',
        preco: 18.90,
        imagem: 'hotroll-doce.png'
    }
];

// ─── Exportação dos dados ─────────────────────────────────────
// Exportamos as duas variáveis num único objeto para que outros
// arquivos (como as rotas) possam importar e usar esses dados.
module.exports = { categorias, produtos };