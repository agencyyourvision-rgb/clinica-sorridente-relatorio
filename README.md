# Resultados Clínica Sorridente

## Como publicar no Vercel (sem terminal)

1. Cria uma conta gratuita em https://github.com (se ainda não tiveres).
2. Cria um novo repositório (botão "New repository"), dá um nome como `clinica-sorridente-relatorio`, deixa como "Public" ou "Private".
3. Na página do repositório, clica em "uploading an existing file" e arrasta TODOS os ficheiros desta pasta (incluindo a pasta `src`) para lá. Faz commit.
4. Cria uma conta gratuita em https://vercel.com, entrando com a tua conta do GitHub.
5. No painel do Vercel, clica em "Add New" → "Project", escolhe o repositório que acabaste de criar.
6. O Vercel deteta automaticamente que é um projeto Vite. Não precisas de mudar nada. Clica em "Deploy".
7. Em cerca de 1 minuto, o Vercel dá-te um link (algo como `clinica-sorridente-relatorio.vercel.app`). É esse link que podes enviar ao dono da clínica.

Sempre que quiseres atualizar o relatório, basta substituíres o ficheiro `src/App.jsx` no GitHub e o Vercel publica a nova versão sozinho.
