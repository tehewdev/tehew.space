# 👥 Sistema Multi-Usuário - Guia Completo

## 🎯 O Que É?

O sistema multi-usuário permite que **várias pessoas** usem o mesmo aplicativo de controle financeiro, cada uma com seus **dados completamente separados e privados**.

---

## ✨ Recursos

✅ **Usuários Ilimitados** - Crie quantos usuários precisar  
✅ **Dados Isolados** - Cada usuário vê apenas seus dados  
✅ **Sincronização Individual** - Dados de cada usuário sincronizados separadamente  
✅ **Multi-Dispositivo** - Use o mesmo usuário em vários aparelhos  
✅ **Fácil de Usar** - Interface simples e intuitiva  

---

## 🚀 Como Começar

### 1️⃣ Criar Seu Primeiro Usuário

1. Abra o aplicativo
2. Vá na aba **"💾 Exportar"**
3. Na seção **"☁️ Sincronização na Nuvem"**
4. Clique no botão **"➕"** ao lado do dropdown
5. Digite seu nome (ex: "João", "Maria", "Empresa")
6. Pronto! Usuário criado ✅

### 2️⃣ Trocar Entre Usuários

1. No dropdown **"👤 Usuário Ativo"**
2. Clique e veja a lista de todos os usuários
3. Selecione o usuário desejado
4. Os dados serão carregados automaticamente da nuvem

### 3️⃣ Verificar Usuário Atual

Logo abaixo do dropdown, você verá:
```
Usuário atual: João (em verde)
```

Se não houver usuário selecionado:
```
Usuário atual: Nenhum selecionado (em cinza)
```

---

## 📊 Casos de Uso

### 🏠 Uso Familiar

**Cenário:** Família de 4 pessoas compartilhando o PC

**Configuração:**
```
👤 Pai      → Finanças pessoais do pai
👤 Mãe      → Finanças pessoais da mãe
👤 Filho    → Mesada e gastos do filho
👤 Família  → Gastos compartilhados (contas, mercado)
```

**Vantagens:**
- Cada um gerencia seu dinheiro
- Gastos compartilhados num usuário comum
- Privacidade mantida
- Relatórios individuais e coletivos

---

### 💼 Uso Profissional

**Cenário:** Freelancer com vários projetos

**Configuração:**
```
👤 Pessoal       → Finanças pessoais
👤 Projeto_A     → Receitas/despesas Projeto A
👤 Projeto_B     → Receitas/despesas Projeto B
👤 Consultoria   → Trabalhos de consultoria
```

**Vantagens:**
- Separa vida pessoal de profissional
- Cada projeto com controle isolado
- Fácil fazer relatórios por projeto
- Organização tributária simplificada

---

### 🏢 Uso Empresarial (Pequeno Negócio)

**Cenário:** Loja com 3 funcionários

**Configuração:**
```
👤 Caixa_Manhã    → Movimentações turno manhã
👤 Caixa_Tarde    → Movimentações turno tarde
👤 Caixa_Noite    → Movimentações turno noite
👤 Gerente        → Visão consolidada
```

**Vantagens:**
- Controle por turno
- Responsabilidade individual
- Auditoria facilitada
- Relatórios por período

---

## 🔐 Segurança e Privacidade

### ✅ O Que É Protegido

- **Isolamento Total:** Um usuário NUNCA vê dados de outro
- **Sincronização Separada:** Cada usuário sincroniza seus próprios dados
- **LocalStorage Único:** Dados locais pertencem ao usuário ativo
- **Nuvem Organizada:** Estrutura `{ "Usuario1": [...], "Usuario2": [...] }`

### ⚠️ O Que NÃO É Protegido

- **Senha:** Não há senha/autenticação (qualquer um pode selecionar qualquer usuário)
- **Bin Público:** Por padrão, o bin é público (qualquer um com o link pode VER os dados)
- **Mesmo Navegador:** Dados locais compartilhados entre usuários no mesmo navegador

### 🔒 Como Melhorar a Segurança

1. **Torne o Bin Privado:**
   - Acesse JSONBin.io
   - Mude visibilidade para "Private"
   
2. **Use Perfis do Navegador:**
   - Chrome: Crie perfis diferentes para cada usuário
   - Cada perfil = localStorage separado
   
3. **Faça Backups Regulares:**
   - Exporte JSON de cada usuário periodicamente
   - Guarde em local seguro

---

## 💡 Dicas e Boas Práticas

### ✅ Recomendações

1. **Nomes Claros:**
   - ✅ "João_Pessoal", "João_Trabalho"
   - ❌ "User1", "Teste", "ABC"

2. **Convenção de Nomes:**
   - Use padrão consistente
   - Exemplo: `Pessoa_Categoria`
   - "Maria_Pessoal", "Maria_Freelance"

3. **Sincronize Sempre:**
   - Clique em "☁️ Enviar" antes de trocar usuário
   - Evita perder alterações locais

4. **Organize por Objetivo:**
   - Um usuário = Um objetivo/projeto/pessoa
   - Não misture contextos diferentes

5. **Documentação:**
   - Mantenha lista de usuários e seus propósitos
   - Exemplo: "Família = gastos conjuntos"

### ❌ Evite

1. **Não Use Caracteres Especiais:**
   - ❌ "João & Maria", "Teste#1"
   - ✅ "Joao_e_Maria", "Teste_1"

2. **Não Crie Duplicados:**
   - Antes de criar, verifique se já existe
   - Evita confusão

3. **Não Edite Simultaneamente:**
   - Dois dispositivos + mesmo usuário = risco de sobrescrever
   - Sincronize um de cada vez

4. **Não Misture Dados:**
   - Um usuário = Um conjunto de dados
   - Não use "João" para dados da "Maria"

---

## 🔄 Fluxo de Trabalho Ideal

### Primeiro Acesso (Novo Dispositivo)

```
1. Abre o aplicativo
2. Vai em "💾 Exportar"
3. Vê dropdown vazio
4. Clica "➕" e cria usuário "Meu_Nome"
5. Adiciona algumas transações
6. Dados sincronizam automaticamente ☁️
```

### Uso Diário (Mesmo Dispositivo)

```
1. Abre o aplicativo
2. Usuário já está selecionado
3. Adiciona/edita transações normalmente
4. Sincroniza automaticamente
```

### Uso em Outro Dispositivo

```
1. Abre o aplicativo (primeiro acesso no celular)
2. Vai em "💾 Exportar"
3. Vê dropdown com "Meu_Nome" disponível
4. Seleciona "Meu_Nome"
5. Dados carregados automaticamente ✅
6. Continua trabalhando
```

### Mudança de Contexto

```
1. Está usando "João_Pessoal"
2. Precisa acessar "João_Trabalho"
3. Vai em "💾 Exportar"
4. Seleciona "João_Trabalho" no dropdown
5. Dados de trabalho carregados
6. Faz as alterações
7. Volta para "João_Pessoal" quando terminar
```

---

## 🛠️ Solução de Problemas

### Problema: "Meu usuário não aparece no dropdown"

**Soluções:**
1. Clique no botão "📥 Carregar da Nuvem" para atualizar lista
2. Verifique conexão com internet
3. Recrie o usuário (pode ter havido erro ao criar)

---

### Problema: "Selecionei usuário mas não vejo transações"

**Soluções:**
1. Usuário pode estar vazio (novo)
2. Clique em "📥 Carregar da Nuvem"
3. Verifique se está no usuário correto
4. Pode não ter sincronizado anteriormente

---

### Problema: "Criei usuário mas sumiu depois de recarregar"

**Soluções:**
1. Verifique se sincronizou (☁️ Enviar para Nuvem)
2. Pode ter perdido conexão durante criação
3. Recrie o usuário e sincronize manualmente

---

### Problema: "Dados de um usuário apareceram em outro"

**Soluções:**
1. Isso NÃO deve acontecer (bug)
2. Verifique qual usuário está selecionado
3. Clique em "📥 Carregar" para atualizar
4. Se persistir, reporte o problema

---

## 📱 Multi-Dispositivo Detalhado

### Cenário Completo

**Dispositivos:**
- 💻 PC em casa
- 📱 Celular
- 🖥️ PC no trabalho

**Passo a Passo:**

#### Segunda-feira (PC Casa)
```
08:00 - Cria usuário "João"
08:05 - Adiciona: Salário R$ 5000
08:06 - Sincroniza automaticamente ☁️
```

#### Segunda-feira (Celular - Trabalho)
```
12:00 - Abre app no celular
12:01 - Seleciona usuário "João"
12:02 - Dados carregados! Vê o salário ✅
12:05 - Adiciona: Almoço R$ 35
12:06 - Sincroniza automaticamente ☁️
```

#### Segunda-feira (PC Trabalho)
```
14:00 - Abre app no PC do trabalho
14:01 - Seleciona usuário "João"
14:02 - Vê: Salário + Almoço ✅
14:05 - Adiciona: Gasolina R$ 200
14:06 - Sincroniza ☁️
```

#### Segunda-feira (PC Casa - Noite)
```
20:00 - Volta pro PC de casa
20:01 - Já está em "João"
20:02 - Clica "📥 Carregar da Nuvem"
20:03 - Vê TUDO: Salário + Almoço + Gasolina ✅
```

---

## 📊 Estrutura Técnica

### Formato na Nuvem (JSONBin.io)

```json
{
  "João": [
    {
      "id": 1696284300000,
      "type": "income",
      "description": "Salário",
      "value": 5000,
      "category": "Salário",
      "date": "2025-10-01"
    },
    {
      "id": 1696284400000,
      "type": "expense",
      "description": "Almoço",
      "value": 35,
      "category": "Alimentação",
      "date": "2025-10-01"
    }
  ],
  "Maria": [
    {
      "id": 1696284500000,
      "type": "income",
      "description": "Freelance",
      "value": 2000,
      "category": "Freelance",
      "date": "2025-10-01"
    }
  ],
  "Família": [
    {
      "id": 1696284600000,
      "type": "expense",
      "description": "Conta de Luz",
      "value": 150,
      "category": "Contas",
      "date": "2025-10-01"
    }
  ]
}
```

### Como Funciona

1. **Ao Criar Usuário:**
   - Busca todos os dados da nuvem
   - Adiciona nova chave: `{ "NovoUsuario": [] }`
   - Salva tudo de volta
   - Atualiza dropdown

2. **Ao Trocar Usuário:**
   - Salva dados do usuário anterior localmente
   - Busca dados do novo usuário da nuvem
   - Carrega no `transactions[]`
   - Atualiza localStorage
   - Atualiza interface

3. **Ao Sincronizar:**
   - Busca estrutura completa da nuvem
   - Atualiza APENAS a chave do usuário atual
   - Preserva dados de outros usuários
   - Salva estrutura completa de volta

---

## 🎓 Exemplos Práticos

### Exemplo 1: Estudante Universitário

```
👤 Pessoal    → Mesada, gastos diários
👤 Republica  → Divisão de contas com colegas
👤 Projeto    → Dinheiro de projeto de extensão
```

### Exemplo 2: Casal

```
👤 João      → Finanças individuais do João
👤 Maria     → Finanças individuais da Maria
👤 Casal     → Gastos compartilhados
👤 Viagem    → Planejamento de viagem
```

### Exemplo 3: MEI (Microempreendedor)

```
👤 Pessoal        → Vida pessoal
👤 Empresa_Receita → Receitas da empresa
👤 Empresa_Despesa → Despesas da empresa
👤 Pro_Labore      → Retiradas
```

---

## ❓ FAQ

**P: Posso deletar um usuário?**  
R: Atualmente não há botão de deletar. Função em desenvolvimento.

**P: Há limite de usuários?**  
R: Tecnicamente não, mas o JSONBin.io tem limite de tamanho do bin.

**P: Posso renomear um usuário?**  
R: Não diretamente. Crie novo e migre os dados manualmente.

**P: E se esquecer qual usuário criei?**  
R: Abra o dropdown - todos os usuários aparecem lá.

**P: Posso exportar dados de um usuário específico?**  
R: Sim! Selecione o usuário e use "📄 Exportar JSON".

**P: Posso compartilhar um usuário com outra pessoa?**  
R: Sim, ambos selecionam o mesmo nome. Mas cuidado com edições simultâneas.

**P: Como migrar dados entre usuários?**  
R: Exporte JSON do usuário 1, edite o arquivo, importe no usuário 2.

---

**Desenvolvido com ❤️ para facilitar sua vida financeira!**

