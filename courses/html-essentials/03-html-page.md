---
layout: lesson
id: 03-html-page
title: Ang HTML Page
summary: "Ang basic structure ng isang HTML page"
course: html-essentials

permalink: /courses/html-essentials/03-html-page/
video: 
has_downloads: false
code:
---
## Ang HTML Page
Ang basic structure ng isang HTML page

Dahil matibay o <i lang="en">resilient</i> ang HTML, kaya nitong hulaan kung ano ang ibig sabhin ng isang HTML document kahit may mga errors ito. Iyan ang dahilan kung bakit may lumalabas pa rin sa browser kahit hindi buo ang HTML document sa mga examples natin sa nakaraang lesson.

<q>Hindi buo? Ibig sabihin mali ang itinuro mo last time?</q> Oo, hindi buo ang HTML document natin. Tama naman iyon, pero kailangan nating ilagay sa HTML ang buong structure ng isang document.

### Overview
Ito ang isang starting template ng isang kumpletong HTML document:
```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Title ng Website Mo</title>
</head>
<body>
  <h1>Headline 1</h1>
  <p>This is a paragraph</p>
</body>
</html>
```

Medyo marami tayong bagong tags dito. Isa-isahin natin sila.

### Ang HTML Document Type Declaration
Sa unang line, makikita natin ang kakaibang tag na ito:
```html
<!DOCTYPE html>
```

Ang tag na ito ay isang <dfn>Document Type Declaration</dfn>, or in short, <i></i>. Basically, isa itong declaration na nagsasabi sa browser kung aling version ng HTML ang gamit natin. Kapag nilagay natin ang `<!DOCTYPE html>`, sinasabi natin sa browser na latest version ang gusto nating gamitin. May iba pang mga Document Type Declaration, pero hindi na mahalaga iyon ngayon kasi latest na ang gusto nating gamitin.

<aside class="float float--right">
<h4 class="float__header">Ang original purpose ng doctype</h4>
<p>Noong bago pa lang ang HTML, around 1992, ginawa ang doctype para sabihin sa browser kung saan nito mahahanap ang grammatical rules na gagamitin nito para i-interpret ang HTML document. Nagkaroon din ng maraming version ng HTML, mula sa 1.0, 2.0, 3.0, 3.2, 4.01, XHTML 1.0, at ang latest version na ginagamit natin ngayon, ang HTML5. Sa ngayon, wala na &rsquo;tong masyadong ginagawa except sabihin sa browser na latest version ng HTML ang gamit mo.</p>
</aside>

### Ang root element: `<html></html>`
Ang `<html></html>`, tinatawag din na <i>root element</i>, ang nagre-represent sa buong HTML page. Ginagamit ito ng CSS at JavaScript, kaya mahalaga na mayroon nito.

### Para sa metadata: `<head></head>`
Sa `<head></head>` tag nakalagay ang metadata. Kasama rito ang <a href="/glossary/#character-set" class="glossary-entry-link" data-glossary-term="character set">character set</a> na ginagamit ng isang webpage, ang title at description ng HTML page mo, at iba pa. Basically, dito nakalagay ang lahat ng information tungkol sa webpage mo na hindi kailangang makita ng user, o browser lang ang makakakita.

### Ang `<meta>` Tag
Ang `<meta>` tag ang isa sa mga HTML tags na may pinakamaraming kayang gawin. Sa example natin, mayroon itong additional na syntax (`charset="utf-8"`). Pag-uusapan natin kung ano iyan sa mga susunod na lesson. Pero sa ngayon, ang kailangan mo lang malaman ay ginagamit iyan para maging maayos ang <a href="/glossary/#character-set" class="glossary-entry-link" data-glossary-term="character set">character set</a> na gagamitin ng browser para i-display ang HTML page mo.

### Ang `<title></title>` Tag
Ang `<title></title>` tag ang nagsasabi sa browser kung ano ang title ng webpage mo. Ito rin ang idi-display sa browser tab, sa bookmarks, at sa iba pang lugar na puwedeng mag-appear ang webpage mo. Ginagamit din ito ng search engines kapag dini-display ang webpage mo sa search results, pati na sa mga social networking sites kapag may nag-share nito.

### Ang `<body></body>` Tag
Sa `<body></body>` tag nakalagay ang lahat ng content ng webpage natin. So basically, dito natin ilalagay ang HTML elements na ginawa natin sa nakaraang lesson.

### Summary
Mula sa lesson na ito hanggang sa pinakahuling lesson, ito na ang template na gagamitin natin kapag gumagawa tayo ng bagong webpages.
