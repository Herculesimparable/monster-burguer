# Monster Burguer

Site oficial da **Monster Burguer** — hambúrgueres artesanais em Luanda, Angola.

## Funcionalidades

- Cardápio online com pedidos e carrinho
- Envio do pedido por WhatsApp
- Galeria em carrossel automático
- Locais, bufê e formulário de contacto
- Idioma automático (português, inglês, espanhol, francês)
- Design responsivo (telemóvel e desktop)

## Site público (qualquer rede / dispositivo)

| Alojamento | URL | Notas |
|------------|-----|--------|
| **Vercel** (recomendado) | https://monster-burguer.vercel.app | HTTPS global, deploy rápido |
| GitHub Pages | https://herculesimparable.github.io/monster-burguer/ | Backup automático em cada push |

Funciona **sem Cursor** e **sem o seu PC ligado**: o código está no GitHub; Vercel e GitHub Pages servem o site na nuvem.

### Ligar Vercel ao GitHub (uma vez)

1. Entrar em [vercel.com](https://vercel.com) com a conta GitHub `Herculesimparable`
2. **Add New Project** → importar `Herculesimparable/monster-burguer`
3. Framework: **Other** (site estático HTML — sem build)
4. **Deploy** — cada `git push` na `main` actualiza o site

O ficheiro `vercel.json` na raiz configura cabeçalhos de cache e segurança.

## Desenvolvimento local

```bash
py -m http.server 8080
```

Abrir http://localhost:8080

Ou: `npm start`

## Repositório

https://github.com/Herculesimparable/monster-burguer
