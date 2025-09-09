# Jobify - Painel de Vagas de Emprego 💼

Projeto desenvolvido como parte do **desafio técnico da MBRAS**.  
O objetivo é criar um aplicativo para listagem de vagas de emprego, com possibilidade de visualizar detalhes, filtrar por categoria e salvar favoritos.

---

## 🚀 Tecnologias Utilizadas

- **Frontend**: [Next.js](https://nextjs.org/) + [React](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)  
- **UI**: [ShadCN](https://ui.shadcn.com/) + [TailwindCSS](https://tailwindcss.com/)  
- **Backend**: Node.js + Express (API intermediária para consumo do [Remotive API](https://remotive.io/api/remote-jobs))  
- **Banco de Dados**: [Supabase (PostgreSQL)](https://supabase.com/)

---

## 📦 Estrutura do Projeto

```bash
.
├── frontend   # Aplicação Next.js
│   └── src
│       ├── app
│       ├── components
│       └── lib
├── backend    # API Node.js
│   └── src

⚡ Rodando projeto

   Frontend

      cd frontend
      npm install
      npm run dev


   Backend

      cd backend
      npm install
      npm run dev

🔗 Endpoints da API
   Método	Rota	Descrição
   GET	/jobs	Lista todas as vagas
   GET	/jobs/:id	Detalhes de uma vaga
   GET	/favorites	Lista favoritos do usuário
   POST	/favorites	Adiciona vaga aos favoritos
   DELETE /favorites Remove vaga dos favoritos