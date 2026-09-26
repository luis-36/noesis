# Noesis — versión HTML estática (lista para AdSense)

Réplica del sitio original con la **misma estética, textos, tests y flujo**, pero en HTML/CSS/JS plano (sin React/Vite). Ideal para Google AdSense.

## Estructura

```
noesis/
├── index.html      → Inicio
├── test.html       → Lecturas (vinculo | mente | esfera)  ?slug=
├── perfil.html     → Perfil guardado en localStorage
├── vespera.html    → Instituto Vespera
├── css/style.css
├── js/data.js      → Preguntas, rasgos y scoring
└── js/app.js       → Perfil en localStorage
```

## Cómo subir a Vercel (o cualquier hosting estático)

1. Sube la carpeta `noesis` completa.
2. En Vercel: **Add New Project** → importa la carpeta o un repo con estos archivos en la raíz (o en una subcarpeta y configura Root Directory).
3. Framework preset: **Other** (no hace falta build).
4. Listo.

## Cómo añadir Google AdSense

### 1. Script global (una vez por página)

En el `<head>` de **cada** HTML (o al menos en las que quieras monetizar), pega:

```html
<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-TU_ID"
     crossorigin="anonymous"></script>
```

Sustituye `ca-pub-TU_ID` por tu publisher ID.

### 2. Unidades de anuncio

Hay huecos marcados así:

```html
<div class="ad-slot ad-banner" data-placeholder="true">
  Espacio para anuncio
</div>
```

Dentro de cada uno, sustituye el texto por tu código de unidad, por ejemplo:

```html
<div class="ad-slot ad-banner">
  <ins class="adsbygoogle"
       style="display:block"
       data-ad-client="ca-pub-TU_ID"
       data-ad-slot="1234567890"
       data-ad-format="auto"
       data-full-width-responsive="true"></ins>
  <script>
    (adsbygoogle = window.adsbygoogle || []).push({});
  </script>
</div>
```

Y **quita** `data-placeholder="true"` (ese atributo solo pinta el borde discontinuo de ayuda).

### 3. Dónde están los huecos

| Página       | Ubicación                          |
|--------------|------------------------------------|
| index.html   | Banner arriba + in-feed a mitad    |
| test.html    | Tras el resultado de la lectura    |
| perfil.html  | Debajo del grid de resultados      |
| vespera.html | Antes de los botones de reserva    |

Puedes duplicar o mover los `.ad-slot` donde quieras: son divs normales.

## Notas

- El perfil se guarda solo en el navegador del usuario (`localStorage`). No hay backend.
- Los tests y textos son los del sitio original.
- Fuentes: Figtree + Fraunces (Google Fonts).
- Colores y tipografía iguales al original.
