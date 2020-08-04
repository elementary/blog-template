---
layout: lesson
id: 02-html-syntax
title: HTML Syntax
summary: "Ang grammar na sinusunod ng HTML"
course: html-essentials

permalink: /courses/html-essentials/02-html-syntax/
video: 
has_downloads: false
code:
---
## HTML Syntax
Ang grammar na sinusunod ng HTML

Ganito ang hitsura ng HTML:
```html
<p>
```
Sa example na ito, ang ibig sabihin ng `p` ay "paragraph". Para magawa ang HTML na ito, nagta-type tayo ng less-than symbol (`<`), na susundan naman ng letter, word, o abbreviation, at pagkatapos ay greater-than symbol (`>`). Ang tawag sa mabubuo natin ay HTML <b>tag</b>. Ganito ang hitsura ng lahat ng HTML markup. Simple lang ang syntax ng HTML. Mas mahirap alamin kung anong HTML tag ang gagamitin.

May dalawang uri ng tags, ang <i>opening tags</i> at <i>closing tags</i>. Ang halimbawa natin kaninang `<p>` ay isang opening tag. Ganito naman ang hitsura ng closing tag:

```html
</p>
```

Magkamukha lang ang opening at closing tags, except may slash ang closing tags pagkatapos ng less-than symbol (`<`).

Para makapag-markup ng isang paragraph, ilalagay natin ang paragraph sa pagitan ng opening tag at closing tag:
```html
<p>This is a paragraph.</p>
```

<figure>
  <svg style="" fill="#fafafa" class="img--borderize" viewBox="0 -10 300 100">
    <style>
      .code { font-family: monospace; font-size: 18px; }
      .desc { font-family: sans-serif;font-size: 14px; }
    </style>
    <text class="code" y="35" x="5">&lt;p&gt;</text>
    <text class="code" y="35" x="38">This is a paragraph.</text>
    <text class="code" y="35" x="250">&lt;/p&gt;</text>
    
    <line x2="275" stroke="#000a" y1="18" y2="18" x1="20"></line>
    <line stroke="#000a" y1="18" y2="23" x1="20" x2="20"></line>
    <line x1="275" x2="275" stroke="#000a" y1="18" y2="23"></line>
    
    <text class="desc" x="125" y="13">Element</text>
    <text class="desc" x="5" style="" y="75">Opening Tag</text>
    <text class="desc" y="75" x="210">Closing Tag</text>
    <text class="desc" x="125" y="75">Content</text>
    
    <line stroke="#000a" y1="47" y2="60" x1="20" x2="20"></line>
    <line stroke="#000a" y1="47" y2="60" x1="150" x2="150"></line>
    <line x1="275" x2="275" stroke="#000a" y1="47" y2="60"></line>
</svg>
  <figcaption>Ang tawag sa pinagsama-samang HTML opening tag, content, at closing tag ay <i>element</i></figcaption>
</figure>

Laging magkasama ang opening at closing tags. Kapag nabuo sila kasama ng content, ang tawag dito ay <b>element</b>.

Pero <em>hindi lahat</em> ng element ay may closing tag, gaya ng makikita natin sa susunod na lessons. Pero karamihan ng HTML elements ay may closing tag. Tumingin pa tayo ng mga halimbawa:

```html
<p>This is a paragraph.</p>
<h1>This is a headline.</h1>
<article>This is an article.</article>
```

<em>Marami</em> tayong titingnang HTML elements throughout this course. Pag-aaralan natin kung kailan dapat gagamitin ang bawat isa sa kanila. Kaya 'wag mo munang alalahanin iyan. Mag-focus muna tayo sa basic mechanics ng HTML.

Ang trabaho ng markup ay magpakita ng <b>purpose</b> at <b>meaning</b>. Binibigyan nito ang computers ng mas maraming details tungkol sa kung ano ang ibig sabihin ng content o user interface para sa ating mga tao. Nagbibigay ang HTML ng connection sa pagitan ng mundo ng mga tao at ng computers. Tumingin tayo sa isa pang example.

```html
<p>This is a paragraph. May text dito na <em>naka-emphasize</em> para sa malaman ng reader na mahalaga ito.</p>
```
Nakabalot sa `<p></p>` tags ang buong paragraph. Sa loob naman ng paragraph, may isa pang salita (`naka-emphasize`) na nilagay natin sa loob ng opening at closing `em` tags. Matututuhan mo kung para saan ang `em` tag sa susunod na mga lesson. For now, pansinin na puwedeng magkaroon ng HTML element sa loob ng isa pang HTML element. Ang tawag dito ay <b>nesting</b>. At gaya ng makikita mo pa sa mga susunod na lessons, ang buong HTML page ay tadtad ng mga HTML elements na naka-nest sa isa't isa.

Kung may background ka sa Computer Science, mare-recognize mo na mula sa pattern na ito, puwede tayong makabuo ng isang structure na kung tawagin ay <i>document tree</i>. Para sa mga walang background sa Computer Science, ang document tree ay kagaya ng isang family tree, kung saan may parent, children, at siblings. Nakikita ng browser ang document tree na ito at gumagawa ito ng isang malaking "family tree" base sa kung sino ang related sa aling element, at paano. Ito ang tinatawag na <b><i>Document Object Model</i></b>.

<blockquote>
<p>Ang <b>Document Object Model (DOM) Tree</b> ay isang hierarchy, isang structure ng HTML elements na kadalasan nang ginagamit para i-connect ang HTML sa CSS at JavaScript.</p>
</blockquote>

Kadalasan nang mae-encounter mo ang <abbr title="Document Object Model">DOM</abbr> tree kapag nagsusulat ka na ng CSS or JavaScript. 

Gagamitin naman ng browser ang DOM tree para buuin ang tinatawag na <i>accessibility tree</i>. Pag-uusapan natin ang accessibility sa isang lesson sa course na ito. Nakakaapekto ang pinipili mong HTML element na gagamitin sa Web sites mo sa experience ng users mo sa paggamit ng Web site mo, kasama na ang mga users na may iba't ibang disabilities. Lahat ng iyan ay magsisimula sa nesting ng HTML elements. Ang susunod na example ay isang HTML markup na may nesting na madalas mong magagamit in the future:

```html
<article>
  <h1>This is a headline.</h1>
  <p>What you are reading is the first paragraph.</p>
  <p>That paragraph will be followed by this, the second one.</p>
  <p>This is a paragraph. May text dito na <em>naka-emphasize</em> para sa malaman ng reader na mahalaga ito.</p>
</article>
```

Pansinin na sa structure na ito, malalaman ng browser na ang article na ito ay may isang headline at tatlong paragraphs, ang huli ay may naka-emphasize na text. Idi-display pa rin ng browser ang lahat ng iba pang content o element pagkatapos ng closing `</article>` tag sa kaparehong HTML page. Pero mauunwaan ng browser na hindi na iyon part ng `<article>` na ito. <b>Mahalaga kung saan natin binubuksan at sinasara ang mga HTML element, at kung paano tayo nagne-nest ng mga tags.</b> Ginagamit natin ito para ipaalam ang meaning ng content at interfaces. Saan magsisimula ang paragraph? Saan iyon matatapos? Isa sa pinakamadalas na nangyayari sa HTML ay ang makalimutan nating maglagay ng closing tag para sa mga element. Kaya huwag kalimutan: <b>maglagay ng closing tag.</b>
