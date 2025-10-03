# 📱 PWA Controle Financeiro - Economy

Sistema completo de controle financeiro pessoal que funciona como Progressive Web App (PWA).

## 🚀 Acesso Rápido

**URL de Produção:** https://tehew.space/economy/

## 📂 Estrutura de Arquivos

### Arquivos Principais (PWA)
- `index.html` - Aplicativo principal
- `manifest.json` - Configuração do PWA
- `sw.js` - Service Worker (cache e offline)
- `icons/` - Ícones do app (8 tamanhos)

### Ferramentas
- `teste-pwa.html` - Diagnóstico e verificação do PWA
- `gerar-icones.html` - Gerador automático de ícones

### Documentação
Todos os guias estão na pasta `docs/`:
- `INSTRUCOES_PWA.md` - Instruções gerais de uso
- `README_ECONOMY_PWA.md` - Guia específico para /economy/
- `COMANDOS_GIT_DEPLOY.md` - Como fazer deploy via Git
- Outros guias...

## ✨ Recursos

✅ **Instalável** - Funciona como app nativo  
✅ **Offline** - Funciona sem internet após primeira visita  
✅ **Multi-usuário** - Sistema de login com múltiplos usuários  
✅ **Categorias** - Organização por categorias personalizáveis  
✅ **Cartões** - Gestão de cartões de crédito  
✅ **Relatórios** - Gráficos e análises financeiras  
✅ **Backup** - Exportação e importação de dados  

## 🎯 Como Usar

### Instalação no Dispositivo

**Desktop (Chrome/Edge):**
1. Acesse: https://tehew.space/economy/
2. Clique no ícone ➕ na barra de endereço
3. Clique em "Instalar"

**Mobile (Android):**
1. Acesse no Chrome
2. Menu (⋮) → "Adicionar à tela inicial"

**Mobile (iPhone):**
1. Acesse no Safari
2. Compartilhar → "Adicionar à Tela de Início"

## 🔧 Desenvolvimento

### Testar Localmente

```bash
# Estrutura necessária:
tehew.space/
  └── economy/
      ├── index.html
      ├── manifest.json
      ├── sw.js
      └── icons/

# Iniciar servidor
cd tehew.space
python -m http.server 8000

# Acessar
http://localhost:8000/economy/
```

### Deploy

Este projeto está configurado para deploy automático via GitHub → Render.com.

Veja: `docs/COMANDOS_GIT_DEPLOY.md` para instruções completas.

## 📊 Tecnologias

- HTML5 + CSS3 + JavaScript Vanilla
- PWA (Progressive Web App)
- Service Worker API
- Web App Manifest
- LocalStorage para persistência
- Canvas API para gráficos

## 📚 Documentação Completa

Consulte a pasta `docs/` para guias detalhados:

- **Setup:** `COMANDOS_GIT_DEPLOY.md`
- **PWA:** `INSTRUCOES_PWA.md`
- **Economy:** `README_ECONOMY_PWA.md`
- **Testes:** `TESTAR_LOCAL.md`

## 🆘 Suporte

Para problemas ou dúvidas:
1. Verifique `teste-pwa.html` para diagnóstico
2. Consulte a documentação em `docs/`
3. Abra uma issue no GitHub

---

**Desenvolvido para funcionar perfeitamente como PWA em /economy/** 💜

