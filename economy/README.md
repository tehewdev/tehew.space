# 💰 Controle Financeiro Pessoal

> Sistema completo de gestão financeira pessoal com sincronização em nuvem, exportação para Excel e interface moderna responsiva.

![Status](https://img.shields.io/badge/Status-Ativo-success)
![Versão](https://img.shields.io/badge/Versão-2.0-blue)
![Licença](https://img.shields.io/badge/Licença-MIT-green)

---

## 📋 Índice

- [Sobre o Projeto](#sobre-o-projeto)
- [Funcionalidades](#funcionalidades)
- [Demonstração](#demonstração)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Como Usar](#como-usar)
- [Sincronização na Nuvem](#sincronização-na-nuvem)
- [Exportação](#exportação)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [API e Integrações](#api-e-integrações)
- [Segurança](#segurança)
- [Roadmap](#roadmap)
- [Contribuindo](#contribuindo)
- [Licença](#licença)

---

## 🎯 Sobre o Projeto

O **Controle Financeiro Pessoal** é uma aplicação web single-page desenvolvida para gerenciar suas finanças de forma simples, rápida e eficiente. Com interface moderna e intuitiva, permite acompanhar entradas, saídas e saldo acumulado ao longo do tempo.

### Por que usar?

✅ **100% Gratuito** - Sem custos ocultos ou assinaturas  
✅ **Sem Cadastro** - Comece a usar imediatamente  
✅ **Dados Seguros** - Armazenamento local + backup em nuvem opcional  
✅ **Multiplataforma** - Funciona em qualquer dispositivo  
✅ **Offline First** - Funciona sem internet, sincroniza quando conectar  

---

## ✨ Funcionalidades

### 📊 Dashboard Interativo

- **Visão Geral do Mês**: Entradas, saídas, saldo e percentual de economia
- **Cartões Coloridos**: Indicadores visuais para cada métrica
- **Seletor de Período**: Navegue entre meses e anos facilmente
- **Últimas Transações**: Visualize as 10 transações mais recentes

### 💳 Gestão de Transações

- **Adicionar Transação**: Formulário rápido e intuitivo
- **Editar Transação**: Botão ✏️ para modificar transações existentes
- **Duplicar Transação**: Botão 📋 para copiar transações recorrentes
- **Deletar Transação**: Botão 🗑️ para remover transações
- **Categorização Inteligente**: 11 categorias pré-definidas
- **Data Persistente**: Adicione múltiplas transações na mesma data sem alterar o campo

### 🔍 Filtros Avançados

- **Por Tipo**: Entradas, Saídas ou Todas
- **Por Categoria**: Filtre por categoria específica
- **Por Período**: Data inicial e final personalizáveis
- **Busca em Tempo Real**: Resultados instantâneos

### 📅 Visão Mensal

- **Tabela Dia a Dia**: Visualize todas as movimentações de cada dia
- **Saldo Acumulado**: Acompanhe o saldo diário ao longo do mês
- **Cores Intuitivas**: Verde para entradas, vermelho para saídas

### 📈 Relatórios Anuais

- **Desempenho Mensal**: Performance de todos os meses do ano
- **Análise por Categoria**: Gastos e ganhos por categoria
- **Barras de Progresso**: Visualização gráfica proporcional
- **Totais Anuais**: Resumo consolidado do ano

### 💾 Exportação de Dados

#### Excel Profissional (formato Termômetro)
- **Múltiplas Abas**: 2025, 2026 e Economia
- **Layout Estruturado**: 12 meses em uma única visualização
- **Cores e Formatação**: Fundo amarelo para dias, azul para cabeçalhos
- **Resumos Automáticos**: Entradas, Saídas, Diário, Saída Total e Performance
- **Saldo Contínuo**: Saldo acumulado passa de mês para mês

#### Outros Formatos
- **JSON**: Backup completo dos dados
- **CSV**: Importação em outras ferramentas

### ☁️ Sincronização na Nuvem

- **JSONBin.io Integration**: Backup automático em nuvem
- **Sincronização Automática**: A cada alteração
- **Sincronização Manual**: Botões para forçar envio/recebimento
- **Multi-Dispositivo**: Acesse de qualquer lugar
- **10.000 requisições/mês**: Plano gratuito generoso

### 📱 Design Responsivo

- **Mobile First**: Otimizado para celulares
- **Tablet**: Layout adaptativo para tablets
- **Desktop**: Interface completa em telas grandes
- **Touch Friendly**: Botões com tamanho mínimo de 44px

---

## 🎨 Demonstração

### Desktop
```
┌─────────────────────────────────────────────────────────┐
│ 💰 Controle Financeiro                                  │
│ Organize suas finanças facilmente                       │
├─────────────────────────────────────────────────────────┤
│ [Dashboard] [Transações] [Mensal] [Relatórios] [Export]│
├─────────────────────────────────────────────────────────┤
│ ┌─────────┐ ┌─────────┐ ┌─────────┐ ┌─────────┐       │
│ │ENTRADAS │ │ SAÍDAS  │ │  SALDO  │ │ECONOMIA │       │
│ │R$ 5000  │ │R$ 2333  │ │R$ 2667  │ │  53.3%  │       │
│ └─────────┘ └─────────┘ └─────────┘ └─────────┘       │
├─────────────────────────────────────────────────────────┤
│ ➕ Nova Transação                                        │
│ [Tipo] [Descrição] [Valor] [Categoria] [Data]          │
│ [✅ Adicionar Transação]                                │
└─────────────────────────────────────────────────────────┘
```

### Mobile
```
┌──────────────────┐
│ 💰 Financeiro    │
├──────────────────┤
│ ENTRADAS         │
│ R$ 5.000,00      │
├──────────────────┤
│ SAÍDAS           │
│ R$ 2.333,00      │
├──────────────────┤
│ Salário          │
│ 💼 Salário       │
│ 07/02/2025       │
│ + R$ 5.000,00    │
│ [📋][✏️][🗑️]     │
└──────────────────┘
```

---

## 🚀 Tecnologias Utilizadas

### Frontend
- **HTML5**: Estrutura semântica
- **CSS3**: Design moderno com gradientes e animações
- **JavaScript (ES6+)**: Lógica da aplicação
  - Async/Await para operações assíncronas
  - LocalStorage API para persistência local
  - Fetch API para comunicação com JSONBin.io

### Armazenamento
- **LocalStorage**: Armazenamento local no navegador (até 10MB)
- **JSONBin.io**: Backup em nuvem (plano gratuito)

### Exportação
- **SheetJS (xlsx)**: Geração de arquivos Excel (.xlsx) via CDN
- **Blob API**: Criação de arquivos para download

### Design
- **Responsivo**: Mobile-first com media queries
- **Gradientes**: Cores modernas e atrativas
- **Box Shadow**: Profundidade e hierarquia visual
- **Transições CSS**: Animações suaves

---

## 📦 Como Usar

### Opção 1: Uso Direto (Recomendado)

1. **Baixe o arquivo `index.html`**
2. **Abra no navegador** (Chrome, Firefox, Edge, Safari)
3. **Comece a usar!** Não precisa de servidor

### Opção 2: Servidor Local

```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000

# Node.js (http-server)
npx http-server

# PHP
php -S localhost:8000
```

Acesse: `http://localhost:8000`

### Opção 3: Live Server (VS Code)

1. Instale a extensão **Live Server**
2. Clique com botão direito em `index.html`
3. Selecione **"Open with Live Server"**

---

## ☁️ Sincronização na Nuvem

### Configuração Inicial

O projeto já vem configurado com credenciais JSONBin.io de demonstração:

```javascript
const JSONBIN_CONFIG = {
    API_KEY: '$2a$10$...', // Sua API Key
    BIN_ID: '68dc86a7d0ea881f40911135', // Seu Bin ID
    BASE_URL: 'https://api.jsonbin.io/v3'
};
```

### Como Configurar Seu Próprio Bin

1. **Crie uma conta em [JSONBin.io](https://jsonbin.io)**
2. **Faça login** e vá em "API Keys"
3. **Copie sua API Key** (começa com `$2a$10$...`)
4. **Crie um novo Bin**:
   - Clique em "Create Bin"
   - Cole o JSON inicial:
   ```json
   {
     "transactions": []
   }
   ```
   - Marque como **Private**
   - Copie o **Bin ID**

5. **Atualize o código** (`index.html` linha ~927):
   ```javascript
   const JSONBIN_CONFIG = {
       API_KEY: 'SUA_API_KEY_AQUI',
       BIN_ID: 'SEU_BIN_ID_AQUI',
       BASE_URL: 'https://api.jsonbin.io/v3'
   };
   ```

### Funcionalidades de Sincronização

#### Automática
- ✅ Ao adicionar transação
- ✅ Ao editar transação
- ✅ Ao deletar transação
- ✅ Ao importar dados

#### Manual
- **☁️ Enviar para Nuvem**: Força upload dos dados locais
- **📥 Carregar da Nuvem**: Baixa a versão mais recente

### Multi-Dispositivo

**Cenário de Uso:**

```
PC (Casa) → Adiciona transação → Sincroniza automaticamente ☁️
                                        ↓
Celular (Trabalho) → Clica "📥 Carregar" → Vê a mesma transação ✅
                              ↓
                    Adiciona nova transação → Sincroniza automaticamente ☁️
                                        ↓
PC (Casa) → Clica "📥 Carregar" → Vê todas as transações ✅
```

---

## 📤 Exportação

### Excel (Formato Termômetro)

Exporta para Excel (.xlsx) com layout profissional:

**Estrutura:**
- **Aba 2025**: Todos os meses de 2025
- **Aba 2026**: Todos os meses de 2026
- **Aba Economia**: Comparativo de economia

**Layout de cada Aba:**

```
┌──────────────────────────────────────────────────────────┐
│ JANEIRO │ FEVEREIRO │ MARÇO │ ... │ DEZEMBRO             │
├──────────────────────────────────────────────────────────┤
│ Data│E│S│D│Saldo│ Data│E│S│D│Saldo│ ...                │
│  1  │ │ │ │0.00 │  1  │ │ │ │0.00 │ ...                │
│  2  │ │ │ │0.00 │  2  │ │ │ │0.00 │ ...                │
│ ... │ │ │ │ ... │ ... │ │ │ │ ... │ ...                │
│  31 │ │ │ │0.00 │  31 │ │ │ │0.00 │ ...                │
├──────────────────────────────────────────────────────────┤
│ ENTRADAS │ SAÍDAS │ DIÁRIO │ (para cada mês)            │
│ R$ 0.00  │R$ 0.00 │R$ 0.00 │                            │
├──────────────────────────────────────────────────────────┤
│ Saída Total: R$ 0.00                                     │
│ Performance: R$ 0.00                                     │
└──────────────────────────────────────────────────────────┘
```

**Características:**
- ✅ Saldo acumula de mês para mês (Janeiro → Fevereiro → ...)
- ✅ Cores: Amarelo (dias), Azul (cabeçalhos), Cinza (resumos)
- ✅ Formatação monetária brasileira (R$ X.XXX,XX)
- ✅ Merge de células nos cabeçalhos

### JSON

```json
[
  {
    "id": 1696284300000,
    "type": "income",
    "description": "Salário",
    "value": 5000,
    "category": "Salário",
    "date": "2025-02-07"
  },
  {
    "id": 1696284400000,
    "type": "expense",
    "description": "Almoço",
    "value": 35,
    "category": "Alimentação",
    "date": "2025-02-07"
  }
]
```

### CSV

```csv
Data,Tipo,Descrição,Categoria,Valor
2025-02-07,Entrada,Salário,Salário,5000
2025-02-07,Saída,Almoço,Alimentação,35
```

---

## 📁 Estrutura do Projeto

```
planilha/
│
├── index.html              # Aplicação principal (arquivo único)
├── README.md               # Esta documentação
├── COMO_USAR_NUVEM.md     # Guia de sincronização
│
└── Planilha do Breno - Termômetro.xlsx  # Planilha de referência
```

### Arquitetura do `index.html`

```html
<!DOCTYPE html>
<html>
<head>
    <!-- Meta tags e título -->
    <style>
        /* CSS completo (~700 linhas) */
        - Variáveis CSS (cores)
        - Reset e base
        - Componentes (cards, forms, buttons)
        - Layout responsivo (mobile, tablet, desktop)
    </style>
</head>
<body>
    <!-- HTML da aplicação (~220 linhas) -->
    <div class="container">
        <header><!-- Título --></header>
        <nav class="nav-tabs"><!-- Abas --></nav>
        
        <!-- 5 Abas -->
        <div id="dashboard"><!-- Dashboard --></div>
        <div id="transactions"><!-- Transações --></div>
        <div id="monthly"><!-- Mensal --></div>
        <div id="reports"><!-- Relatórios --></div>
        <div id="export"><!-- Exportar --></div>
    </div>
    
    <script>
        /* JavaScript (~1000 linhas) */
        
        // 1. Configuração e Inicialização
        const JSONBIN_CONFIG = {...};
        let transactions = [...];
        let editingId = null;
        
        // 2. Sincronização na Nuvem
        async function inicializarApp() {...}
        async function salvarNaNuvem() {...}
        async function carregarDaNuvem() {...}
        
        // 3. Gestão de Transações
        function addTransaction(event) {...}
        function editTransaction(id) {...}
        function duplicateTransaction(id) {...}
        function deleteTransaction(id) {...}
        
        // 4. Visualizações
        function updateDashboard() {...}
        function filterTransactions() {...}
        function updateMonthlyView() {...}
        function updateReports() {...}
        
        // 5. Exportação
        function exportExcel() {...}
        function exportJSON() {...}
        function exportCSV() {...}
        
        // 6. Importação
        function importData() {...}
        
        // 7. Utilitários
        function formatCurrency(value) {...}
        function formatDate(dateStr) {...}
        function showNotification(msg, type) {...}
    </script>
</body>
</html>
```

---

## 🔌 API e Integrações

### JSONBin.io API

**Endpoints Utilizados:**

#### 1. Ler Bin (GET)
```javascript
GET https://api.jsonbin.io/v3/b/{BIN_ID}/latest
Headers:
  X-Master-Key: {API_KEY}

Response:
{
  "record": {
    "transactions": [...]
  },
  "metadata": {...}
}
```

#### 2. Atualizar Bin (PUT)
```javascript
PUT https://api.jsonbin.io/v3/b/{BIN_ID}
Headers:
  Content-Type: application/json
  X-Master-Key: {API_KEY}
Body:
{
  "transactions": [...]
}

Response:
{
  "record": {...},
  "metadata": {...}
}
```

### Fluxo de Sincronização

```
┌─────────────┐
│ Usuário     │
│ adiciona    │
│ transação   │
└──────┬──────┘
       │
       ▼
┌─────────────────┐
│ saveTransactions│ ──┐
└─────────────────┘   │
       │              │ Automático
       ▼              │
┌─────────────────┐   │
│ localStorage    │   │
│ .setItem()      │   │
└─────────────────┘   │
       │              │
       ▼              │
┌─────────────────┐   │
│ salvarNaNuvem() │◄──┘
└─────────────────┘
       │
       ▼
┌─────────────────┐
│ JSONBin.io API  │
│ PUT /b/{ID}     │
└─────────────────┘
       │
       ▼
┌─────────────────┐
│ ✅ Sincronizado │
└─────────────────┘
```

---

## 🔒 Segurança

### Armazenamento Local

- ✅ **Dados no Navegador**: Armazenados apenas no seu dispositivo
- ✅ **Sem Servidor**: Não há servidor intermediário
- ⚠️ **Limpeza de Cache**: Pode apagar os dados
- 💡 **Recomendação**: Faça backups regulares (JSON)

### Sincronização na Nuvem

- ✅ **HTTPS**: Todas as comunicações criptografadas
- ✅ **API Key**: Autenticação necessária para modificar dados
- ⚠️ **Bin Público**: Por padrão, qualquer um pode VER seus dados
- 💡 **Recomendação**: Configure o bin como PRIVADO no JSONBin.io

### Boas Práticas

1. **Torne o Bin Privado**:
   - Acesse JSONBin.io → Bins
   - Encontre seu bin
   - Mude Visibility para "Private"

2. **Não Compartilhe sua API Key**:
   - A API Key está visível no código-fonte
   - Se compartilhar o código, gere uma nova API Key

3. **Faça Backups Regulares**:
   - Exporte JSON mensalmente
   - Guarde em local seguro (Google Drive, OneDrive)

4. **Use em HTTPS**:
   - Se hospedar online, use HTTPS
   - GitHub Pages, Netlify, Vercel oferecem HTTPS gratuito

---

## 🗺️ Roadmap

### Versão 2.1 (Próxima)
- [ ] Gráficos interativos (Chart.js)
- [ ] Dark mode
- [ ] Metas de gastos mensais
- [ ] Alertas de orçamento

### Versão 2.2
- [ ] PWA (Progressive Web App)
- [ ] Notificações push
- [ ] Instalação no celular
- [ ] Modo offline completo

### Versão 3.0
- [ ] Múltiplas contas
- [ ] Categorias personalizadas
- [ ] Subcategorias
- [ ] Tags

### Versão 3.1
- [ ] Anexos (fotos de notas fiscais)
- [ ] OCR para extrair valores
- [ ] Integração bancária

---

## 🤝 Contribuindo

Contribuições são bem-vindas! Siga os passos:

1. **Fork o projeto**
2. **Crie uma branch** para sua feature:
   ```bash
   git checkout -b feature/MinhaFeature
   ```
3. **Commit suas mudanças**:
   ```bash
   git commit -m 'Adiciona MinhaFeature'
   ```
4. **Push para a branch**:
   ```bash
   git push origin feature/MinhaFeature
   ```
5. **Abra um Pull Request**

### Diretrizes

- ✅ Mantenha a simplicidade (arquivo único)
- ✅ Comente código complexo
- ✅ Teste em mobile e desktop
- ✅ Mantenha compatibilidade com navegadores modernos
- ✅ Documente novas funcionalidades

---

## 📄 Licença

Este projeto está sob a licença **MIT**.

```
MIT License

Copyright (c) 2025 Controle Financeiro

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

---

## 💬 Suporte

### Problemas Comuns

**1. Dados não salvam**
- Verifique se o JavaScript está habilitado
- Confira se o navegador permite localStorage
- Modo anônimo/privado pode limpar dados ao fechar

**2. Sincronização falha**
- Verifique sua conexão com a internet
- Confirme se a API Key está correta
- Veja se não atingiu o limite de 10.000 requisições/mês

**3. Excel não exporta corretamente**
- Certifique-se que há transações cadastradas
- Aguarde o carregamento da biblioteca SheetJS
- Tente em outro navegador

**4. Data não persiste ao adicionar**
- Comportamento esperado! A data fica a mesma para facilitar
- Para resetar, recarregue a página (F5)

### FAQ

**P: Preciso criar conta?**  
R: Não! Funciona direto no navegador.

**P: Meus dados são seguros?**  
R: Sim, ficam apenas no seu navegador. Opcionalmente na nuvem (JSONBin.io).

**P: Funciona offline?**  
R: Sim! A sincronização precisa de internet, mas o app funciona offline.

**P: Posso usar em vários dispositivos?**  
R: Sim! Use a sincronização na nuvem.

**P: É grátis?**  
R: Sim, 100% gratuito e open-source.

---

## 📊 Estatísticas do Projeto

- **Linhas de Código**: ~1.900
- **Arquivo Único**: index.html (facilita distribuição)
- **Tamanho**: ~60KB (sem dependências externas)
- **Compatibilidade**: Chrome, Firefox, Edge, Safari
- **Responsivo**: Mobile, Tablet, Desktop
- **Linguagens**: HTML5, CSS3, JavaScript ES6+

---

## 🙏 Agradecimentos

- **SheetJS** pela biblioteca de exportação Excel
- **JSONBin.io** pelo serviço de armazenamento gratuito
- **Comunidade Open Source** pelas inspirações

---

## 📞 Contato

- **Issues**: [GitHub Issues](https://github.com/seu-usuario/controle-financeiro/issues)
- **Discussões**: [GitHub Discussions](https://github.com/seu-usuario/controle-financeiro/discussions)

---

<div align="center">

**Desenvolvido com ❤️ para ajudar você a organizar suas finanças**

[⬆ Voltar ao topo](#-controle-financeiro-pessoal)

</div>

