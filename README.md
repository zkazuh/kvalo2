# Chat Anônimo e Seguro

Um chat focado em anonimato total e segurança.
Esse projeto tem como princípio melhorar também meu entendimento da do T.I como um todo, envolvendo programação, networking, criptografia, SQL e etc.

![Status do Projeto](https://img.shields.io/badge/Status-Em%20Desenvolvimento-yellow?style=flat-square)
![Foco Principal](https://img.shields.io/badge/Foco-Privacidade-blue?style=flat-square)

## Demonstração

Acesse a aplicação ao vivo [aqui](https://bostil.zkazuh.com.br/) e experimente o chat anônimo em ação.

## Sobre o Projeto

O "Chat Anônimo e Seguro" é uma plataforma de chat projetada com o objetivo primordial de preservar a privacidade e o anonimato dos usuários. Este projeto surge como uma alternativa resistente a prática de coleta de dados e a venda da mesma. Não se trata apenas de um chat simples, mas de um espaço onde cada interação é pensada para minimizar riscos de exposição, evitando logs permanentes, identificadores persistentes e qualquer forma de rastreamento desnecessário. A ênfase está em criar ferramentas que empoderem os usuários a se comunicarem livremente, sem comprometer sua segurança digital.

## Princípios e Funcionalidades

Os princípios centrais do projeto são o **Anonimato Total** e a **Segurança Máxima**. O anonimato garante que os usuários não precisem revelar identidades reais, enquanto a segurança envolve mecanismos para proteger dados em trânsito e dificultar qualquer tentativa de monitoramento ou invasão.

Atualmente essas são as atualizações !
| Funcionalidade                          | Status | Descrição |
|-----------------------------------------|--------|-----------|
| Chat global único para todos os usuários conectados | ✔     | Permite conversas em tempo real em um espaço compartilhado. |
| Comunicação anônima sem login ou cadastro | ✔     | Nenhum dado pessoal é requerido para participar. |
| Mensagens em tempo real                 | ✔     | Atualizações instantâneas via Firebase Realtime Database. |
| Criação de usuários temporários e voláteis com Supabase | 🔜    | Usuários descartáveis para sessões efêmeras. |
| Lógicas de programação para dificultar rastreamento | 🔜    | Algoritmos para ofuscar padrões de uso e IPs. |
| Salas de chat privadas e seguras        | 🔜    | Espaços isolados com criptografia adicional. |
| Inserção do supabase(para dar início)        | 🔜    | Banco de dados para armazenar users e afins |

## Tecnologias Utilizadas

Aqui está uma visão geral das tecnologias empregadas no projeto, com foco em como elas contribuem para a segurança e privacidade:

| Tecnologia       | Descrição |
|------------------|-----------|
| React           | Biblioteca frontend para construção de interfaces reativas e eficientes, garantindo uma experiência de usuário fluida sem comprometer a performance. |
| TypeScript      | Extensão tipada do JavaScript que adiciona segurança ao código, reduzindo erros em tempo de desenvolvimento e melhorando a manutenção. |
| Vite            | Ferramenta de build rápida para o frontend, otimizando o desenvolvimento e o deploy sem exposição desnecessária de dados. |
| Firebase Realtime Database | Banco de dados em tempo real para sincronização de mensagens, configurado para minimizar retenção de dados e priorizar anonimato. |
| Supabase (Planejado) | Plataforma de backend open-source para gerenciamento seguro de usuários temporários e dados, com ênfase em privacidade e escalabilidade. |
| Vercel          | Plataforma de hospedagem que facilita deploys rápidos e seguros, com suporte a HTTPS automático para proteger comunicações. |

## Como Rodar o Projeto Localmente

Siga estas instruções para configurar e executar o projeto em sua máquina local. Isso permite que você teste e contribua, mantendo o foco em práticas seguras de desenvolvimento.

### Pré-requisitos
- Node.js (versão 18 ou superior) instalado.
- Git instalado para clonar o repositório.

### Passos
1. Clone o repositório:
   ```bash
   git clone https://github.com/zkazuh/kvalo.git

## Navegue até o diretório do projeto:
cd chat-anonimo-seguro

## Instale as dependências:
- node install
- npm install tailwindcss @tailwindcss/vite
- npm install firebase

## Configuração do firebase:
Crie uma conta no firebase e configure uma nova realtime database, depois disso é só copiar a API.
Deve ser nessa configuração

```js
VITE_FIREBASE_API_KEY=sua-chave-api-firebase
VITE_FIREBASE_AUTH_DOMAIN=seu-dominio.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=seu-projeto-id
VITE_FIREBASE_STORAGE_BUCKET=seu-bucket.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=seu-sender-id
VITE_FIREBASE_APP_ID=seu-app-id
VITE_FIREBASE_MEASUREMENT_ID=seu-measurement-id
VITE_SUPABASE_URL=sua-url-supabase
VITE_SUPABASE_ANON_KEY=sua-chave-anon-supabase
```
