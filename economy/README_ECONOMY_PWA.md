# 📱 PWA Economy - Subdiretório do tehew.space

## 🎯 Estrutura do Projeto

Este PWA (Controle Financeiro) funciona como **subdiretório** do projeto principal `tehew.space` hospedado no Render.com.

### 📂 Estrutura de Arquivos

```
tehew.space/                      ← Repositório principal no GitHub
├── chatlive/                     ← Outros subprojetos
├── live-chat/
├── teste-api/
├── thanks/
├── economy/                      ← SEU PWA AQUI! 🎯
│   ├── icons/                    ← Pasta de ícones
│   │   ├── icon-72x72.png
│   │   ├── icon-96x96.png
│   │   ├── icon-128x128.png
│   │   ├── icon-144x144.png
│   │   ├── icon-152x152.png
│   │   ├── icon-192x192.png
│   │   ├── icon-384x384.png
│   │   └── icon-512x512.png
│   ├── index.html                ← App principal
│   ├── manifest.json             ← Configuração PWA
│   ├── sw.js                     ← Service Worker
│   ├── gerar-icones.html         ← Gerador de ícones
│   ├── teste-pwa.html            ← Teste/diagnóstico
│   ├── INSTRUCOES_PWA.md         ← Instruções gerais
│   └── README_ECONOMY_PWA.md     ← Este arquivo
├── _redirects                    ← Configuração de rotas
└── index.html                    ← Página principal do site
```

## 🚀 Como Fazer Deploy

### Passo 1: Gerar os Ícones

1. Abra `gerar-icones.html` no navegador
2. Clique em "🚀 Gerar Todos os Ícones"
3. **IMPORTANTE:** Mova todos os arquivos PNG para `economy/icons/`

### Passo 2: Estrutura no GitHub

Certifique-se de que os arquivos estão organizados assim no seu repositório:

```bash
# No repositório tehew.space
git add economy/icons/*.png
git add economy/index.html
git add economy/manifest.json
git add economy/sw.js
git commit -m "PWA Economy configurado"
git push origin main
```

### Passo 3: Verificar no Render

Após o push, o Render.com vai fazer deploy automaticamente. Acesse:

```
https://seu-site.onrender.com/economy/
```

## ✅ Configurações Importantes

### 1. **Scope do PWA**
O PWA está configurado para funcionar **apenas** no caminho `/economy/`:

```json
// manifest.json
{
  "start_url": "/economy/",
  "scope": "/economy/"
}
```

### 2. **Service Worker**
Registrado com scope específico:

```javascript
// index.html
navigator.serviceWorker.register('/economy/sw.js', { 
  scope: '/economy/' 
})
```

### 3. **Cache de Arquivos**
Todos os caminhos usam `/economy/`:

```javascript
// sw.js
const urlsToCache = [
  '/economy/',
  '/economy/index.html',
  '/economy/manifest.json',
  '/economy/icons/icon-192x192.png',
  // ...
];
```

## 🧪 Como Testar

### Localmente (Simulando estrutura)

1. **Crie a estrutura local:**
```bash
mkdir -p tehew.space/economy/icons
cd tehew.space/economy
# Copie todos os arquivos do PWA aqui
```

2. **Rode servidor HTTP na raiz:**
```bash
cd tehew.space
python -m http.server 8000
```

3. **Acesse:**
```
http://localhost:8000/economy/
```

4. **Teste PWA:**
```
http://localhost:8000/economy/teste-pwa.html
```

### No Render.com (Produção)

1. **Acesse a URL:**
```
https://seu-dominio.onrender.com/economy/
```

2. **Verificar DevTools:**
- F12 → Application → Manifest (deve mostrar scope `/economy/`)
- F12 → Application → Service Workers (deve estar ativo em `/economy/`)

3. **Instalar como App:**
- Chrome: Ícone ➕ na barra de endereço
- Ou Menu → "Instalar Controle Financeiro..."

## 📱 URLs do App

### Produção
```
App Principal:     https://seu-site.onrender.com/economy/
Teste PWA:         https://seu-site.onrender.com/economy/teste-pwa.html
Gerar Ícones:      https://seu-site.onrender.com/economy/gerar-icones.html
```

### Local (Testes)
```
App Principal:     http://localhost:8000/economy/
Teste PWA:         http://localhost:8000/economy/teste-pwa.html
```

## ⚠️ Importante: Diferenças do PWA Raiz

Este PWA é **diferente** de um PWA na raiz (`/`) do site:

| Aspecto | PWA Raiz | PWA Subdiretório (economy) |
|---------|----------|---------------------------|
| **start_url** | `/` | `/economy/` |
| **scope** | `/` | `/economy/` |
| **SW register** | `register('/sw.js')` | `register('/economy/sw.js', {scope: '/economy/'})` |
| **Ícones** | `/icons/icon.png` | `/economy/icons/icon.png` |
| **Cache** | `/index.html` | `/economy/index.html` |
| **Interferência** | Pode cachear tudo | Só cacheia `/economy/` |

## 🔧 Solução de Problemas

### Service Worker não registra
```javascript
// Verifique no console (F12):
// ❌ Erro: "Service Worker registration failed"
// ✅ Solução: Confirme que está acessando via /economy/
```

### Manifest não carrega
```html
<!-- Verifique no HTML: -->
<link rel="manifest" href="/economy/manifest.json">
<!-- NÃO use: href="manifest.json" (relativo) -->
```

### Ícones não aparecem
```bash
# Estrutura correta:
tehew.space/economy/icons/icon-192x192.png

# ❌ Errado:
tehew.space/icons/icon-192x192.png
economy/icons/icon-192x192.png (sem raiz)
```

### App não instala
1. Verifique HTTPS (Render fornece automaticamente)
2. Confirme que todos os ícones existem em `/economy/icons/`
3. Abra `teste-pwa.html` para diagnóstico
4. Verifique scope no manifest: deve ser `/economy/`

## 🎨 Personalização

### Mudar Cores
Edite `manifest.json`:
```json
{
  "theme_color": "#6366f1",        // Cor da barra de status
  "background_color": "#667eea"    // Cor ao abrir
}
```

### Adicionar Atalhos
Já configurado com atalhos para Nova Receita e Nova Despesa:
```json
"shortcuts": [
  {
    "name": "Nova Receita",
    "url": "/economy/?action=receita"
  }
]
```

## 📊 Checklist de Deploy

Antes de fazer push para o GitHub:

- [ ] Ícones gerados e salvos em `economy/icons/`
- [ ] Todos os 8 ícones presentes (72, 96, 128, 144, 152, 192, 384, 512)
- [ ] `manifest.json` com `scope: "/economy/"`
- [ ] `sw.js` com caminhos `/economy/...`
- [ ] `index.html` com registro SW correto
- [ ] Testado localmente em `/economy/`
- [ ] `teste-pwa.html` mostra tudo verde ✅

## 🌐 Integração com tehew.space

O PWA economy **não interfere** com outros subprojetos:

- ✅ `chatlive/` continua funcionando normalmente
- ✅ `live-chat/` continua funcionando normalmente  
- ✅ Service Worker só cacheia rotas `/economy/`
- ✅ Manifest só se aplica a `/economy/`

## 📚 Recursos Adicionais

- **Instruções Gerais PWA:** `INSTRUCOES_PWA.md`
- **Teste de Funcionalidade:** Abra `teste-pwa.html`
- **Gerar Ícones:** Abra `gerar-icones.html`

## 🎉 Resultado Final

Após o deploy, seu app estará disponível em:

```
https://seu-site.onrender.com/economy/
```

E poderá ser instalado como app nativo em qualquer dispositivo! 📱💜

---

**Desenvolvido para funcionar perfeitamente como subdiretório do tehew.space no Render.com**

