---
id: 01-intro-css
course_id: css-essentials
permalink: /courses/css-essentials/01-intro-css/
layout: lesson

title: Ang Cascading Style Sheets
description: Bakit kailangan ang CSS? At paano ito gagamitin kasama ng HTML?

has_downloads: false
---

## Ang Cascading Stylesheets
{:.no_toc}
Bakit kailangan ang CSS? At paano ito gagamitin kasama ng HTML?

1. Table of Contents
{:toc}

Gumagamit tayo ng tatlong programming languages[^see-more] para sa Web: <a href="/glossary/#HTML" data-glossary-term="HTML" class="glossary-entry-link">HTML</a>, <a href="/glossary/#CSS" class="glossary-entry-link" data-glossary-term="CSS">CSS</a>, at <a class="glossary-entry-link" href="/glossary/#JavaScript" data-glossary-term="JavaScript">JavaScript</a>. Pero hindi laging ganito. Noong nagsimula ang World Wide Web, HTML lang ang ginagamit sa paggawa ng webpages. HTML ang nagha-handle ng content at presentation. Walang scripting noon, hindi puwedeng dagdagan ang behavior ng browser.

[^see-more]: Marami pa rin ang nagtatalo kung matatawag ba talagang programming language ang HTML at CSS. Para sa purposes ng course na ito, iko-consider natin sila bilang programming language. Kung gusto mong malaman ang opinyon ng bawat side, puwede mong basahin ang sites na ito:
      - [Is HTML A Programming Language?](https://anyonecanlearntocode.com/blog_posts/is-html-a-programming-language)
      - [Of course HTML is a programming language](https://mortoray.com/2019/02/11/of-course-html-is-a-programming-language/), Edaqa Mortoray
      - [Is HTML considered a programming language?](https://stackoverflow.com/questions/145176/is-html-considered-a-programming-language), StackOverflow question

### BCE (Before CSS Era)
May iba't ibang techniques at <i>hacks</i> para malagyan ng design ang webpages noon. Nandiyan ang `bgcolor=""` attribute, ang `<font>` at `<center>` tags, at ang notorious at kasumpa-sumpang `<marquee>` at `<blink>` tags. Para sa layout, gumamit sila ng `<table>` tags para magkaroon ng kunwaring grid sa isang page.

Maraming problema rito. Una, naging <i>marumi</i> ang code dahil nagkaroon ito ng maraming tags na kung tutuusin ay hindi naman kailangan. Kapag dumami rin ang mga page ng isang website, mas mahirap na itong maintain. Halimbawa, kapag gusto mong palitan ang font ng isang headline, kailangan mong isa-isahin ang lahat ng HTML file mo, hanapin ang mga headlines na gusto mong palitan ng font&mdash; nakakapagod ito, hindi praktikal.

Naging resulta rin ito ng isang giyera. Dahil sa pagpapaligsahan ng magkalabang browsers [^2], ang Netscape Navigator at Internet Explorer, umimbento sila ng sarili nilang mga HTML tags para makakuha ng developers at users. Nahirapan ang mga developers na gumawa ng webpages dahil kailangan nilang siguruhin na gagana ito sa lahat ng browsers.

[^2]: Nakilala ang competition na ito bilang <i>Browser Wars</i>. Isa itong madilim pero exciting na era sa Web history. Dahil sa digmaang ito, nabuo ang World Wide Web Consortium (W3C) para tipunin ang lahat ng mga browser at magkasundo sa iisang set ng HTML tags, at nang magtagal, CSS at JavaScript.

### Nang dumating ang CSS&hellip;
Maraming problemang nawala nang dumating ang CSS. Totoo, hindi agad ginamit ng developers ang CSS. Pero noong dumami na ang mga gumagamit nito, na-realize nila ang benefits nito.

Ang <dfn>separation of concerns</dfn> ay isang concept na nagsasabi na dapat nakahati sa mga sections ang isang computer program&mdash;o sa kaso natin, mga webpage&mdash;at dapat na isang bagay lang ang ginagawa ng mga section na iyon. Nang dumating ang CSS, nahati ang Web sa dalawang sections, ang section para sa content at para sa presentation. Naibalik ang dating purpose ng HTML na mag-focus sa purpose, structure, at meaning ng content. Lahat ng visual styling at layout ay trabaho na ngayon ng CSS.

Dahil dito, mas madali nang i-maintain ang webpages. Halimbawa, kapag gusto mong palitan ang font at text color ng mga headline sa webpages mo, hindi mo na kailangang suyurin ang bawat isang HTML file mo at hanapin ang lahat ng `<font>` tags. Sa halip, nasa iisang CSS file lang ang lahat ng styles, at kapag binago mo ito, magbabago na ang font ng lahat ng headlines sa lahat ng webpages mo.

Dahil din sa separation na ito ng concerns, puwedeng magkaroon ng iba't ibang layout at visual styles ang iisang HTML page. Ipinapakita ito ng [CSS Zen Garden](https://www.csszengarden.com). Iisang HTML file lang ang ginagamit ng website na ito, pero gamit ang iba't ibang CSS files, puwedeng magmukhang iba-ibang websites ang tinitingnan mo.

### Paano gamitin ang CSS?
May tatlong paraan ng paggamit sa CSS. Puwede itong gamitin bilang inline styles, internal, o external stylesheet.

#### Inline styles
Puwede nating lagyan ng styles ang indibiduwal na HTML tags. Sa susunod na halimbawa, pansinin kung paano ginamit ang `style=""` attribute para maglagay ng styles sa isang paragraph lang.

```html
<p>I'm not nothing without a steady hand. I'm not nothing unless I know I can. I'm still something if I don't got a man. I'm a free woman.</p>
<p style="color: red;">I heard one sine from above. Then the signal split in two, the sound created stars like me and you. Before there was us, there was silence. I heard one sine, and it healed my heart. I heard a sine.</p>
```
Sa loob ng `style=""` attribute, naglagay tayo ng `color: red`. Sasabihin nito sa browser na ang kulay ng text (`color`) ay pula (`red`). Pansinin din na kailangan mong <em>maglagay ng semi-colon sa dulo</em>. Kapag binuksan natin ito sa isang browser, ganito ang makikita natin:
![Sa dalawang paragraphs, ang pangalawa lang ang naging kulay pula dahil, gaya ng nasa code, iyon lang ang nilagyan natin ng CSS]({{ site.baseurl }}/images/courses/css-essentials/01-intro-css/code-1.png)

Sa ganitong method ng paglalagay ng CSS, kung gusto nating bigyan ng style ang dalawang paragraph, pareho natin silang lalagyan ng `style=""` attribute:

```html
<p style="color: red;">I'm not nothing without a steady hand. I'm not nothing unless I know I can. I'm still something if I don't got a man. I'm a free woman.</p>
<p style="color: red;">I heard one sine from above. Then the signal split in two, the sound created stars like me and you. Before there was us, there was silence. I heard one sine, and it healed my heart. I heard a sine.</p>
```

![Dahil pareho na silang may style attribute, pareho nang apektado ng CSS styles ang dalawang paragraph.]({{ site.baseurl }}/images/courses/css-essentials/01-intro-css/code-2.png)

Puwede rin nating baguhin ang background color ng mga paragraph na ito. Gagamitin lang natin ang `background-color` property pagkatapos ng semi-colon sa `color` property. Laging ganito ang syntax ng CSS. Subukan natin sa code:

```html
<p style="color: red; background-color: yellow;">I'm not nothing without a steady hand. I'm not nothing unless I know I can. I'm still something if I don't got a man. I'm a free woman.</p>
<p style="color: red;">I heard one sine from above. Then the signal split in two, the sound created stars like me and you. Before there was us, there was silence. I heard one sine, and it healed my heart. I heard a sine.</p>
```

![Naging dilaw ang background color ng unang paragraph dahil nilagyan natin iyon ng background-color: yellow;]({{ site.baseurl }}/images/courses/css-essentials/01-intro-css/code-3.png)

Kung gusto nating maging dilaw ang background color ng dalawang paragraph na ito, dapat na parehas silang may `background-color` property. Pero puwede rin nating ibahin ang kulay ng background ng pangalawang paragraph. Subukan nating gawing white ang text color at gawing green ang background:

```html
<p style="color: red; background-color: yellow;">I'm not nothing without a steady hand. I'm not nothing unless I know I can. I'm still something if I don't got a man. I'm a free woman.</p>
<p style="color: white; background-color: green;">I heard one sine from above. Then the signal split in two, the sound created stars like me and you. Before there was us, there was silence. I heard one sine, and it healed my heart. I heard a sine.</p>
```

![Naging dilaw ang background color ng unang paragraph dahil nilagyan natin iyon ng background-color: yellow;]({{ site.baseurl }}/images/courses/css-essentials/01-intro-css/code-4.png)

Pero obviously, hindi ito efficient. Sa katunayan, pinapagod lang natin ang sarili natin kapag ganito ang ginawa natin. Para lang din tayong gumamit ng mga lumang `<font>` tags. Kapag dumami na ang paragraphs natin, paulit-ulit natin silang lalagyan ng `style=""` attributes. May mas magandang way para malagyan silang lahat ng style gamit lang ang isang bahagi ng code.

#### Internal stylesheet

Sa internal stylesheet, sa halip na maglagay ng CSS sa mismong tags, maglalagay tayo ng `<style></style>` tags sa loob ng `<head></head>` tags. Gagamit din tayo ng tinatawag na <i>selector</i>, isang pattern na magsasabi sa browser kung aling mga HTML elements lang ang makakatanggap ng styles. Subukan natin:

```html
<head>
  …
  <style>
     p {
       color: red;
     }
     
     h1 {
       color: blue;
     }
  </style>
</head>
<body>
  <h1>Headline</h1>
  
  <p>I can see it in your face, you don't think I pulled my weight. Maybe it's time for us to say goodbye because I'm feeling the way that I'm feeling with you. I'm not having fun tonight. </p>
  
  <p>Am I still alive? Where am I? I cry. Who was it that pulled the trigger, was it you or I? I'm completely numb. Why are you acting dumb? I won't blame myself because we both know you were the one.</p>
</body>
```

![Isang browser na nagdi-display ng webpage na may isang headline na kulay asul at dalawang paragraph na pula]({{ site.baseurl }}/images/courses/css-essentials/01-intro-css/code-5.png)

<aside class="float float--left">
  <h5 class="float__header">Laging nasa <code>&lt;head></code> ang Styles</h5>
  <p>Gagana pa rin ang internal styles mo kahit na nakalagay ito sa <code>&lt;body>&lt;/body></code> tag, pero hindi ibig sabihin na tama iyon. <strong>Ilagay ang styles sa <code>&lt;head>&lt;/head></code> tag.</strong></p>
</aside>

Himayin natin ang bagong code na ito. Una, nilipat natin ang lahat ng styles natin sa loob ng `<style></style>` tags. Pagkatapos, may ginagamit na tayong pattern o <i>syntax</i> sa CSS natin. Tingnan natin in detail ang bagong syntax na ito:

<img class="invert-when-dark" src="{{ site.baseurl }}/images/courses/css-essentials/01-intro-css/anatomy-of-css-rule.svg" alt="Diagram ng isang CSS ruleset">


<aside class="float float--right">
  <h5 class="float__header">Punctuation Symbols</h5>
  <p>Kailangan sa syntax ang curly braces (<code>{}</code>). Kailangan mo ring maglagay ng colon (<code>:</code>) sa pagitan ng property at value, at semi-colon (<code>;</code>) sa dulo ng declaration pagkatapos ng value.</p>
</aside>

Selector
: Ito ang pangalan ng HTML element na gusto nating lagyan ng styling. Kapag gusto mong baguhin ang styles ng isang `<p></p>` tag, ilalagay mo ang `p` sa selector. Ganoon din ang gagawin sa iba pang mga tag.

Property
: Mga characteristic ng isang HTML element na gusto mong baguhin. Sa code natin, binago natin ang `color` o kulay ng text ng mga HTML elements.

Value
: Ito ang bagong value ng property na gusto nating i-style sa HTML element. Sa example natin, ginawa nating `red` ang `color` ng mga paragraph, at `blue` naman ang sa `h1`.
  
Declaration
: Ang tawag sa magkasamang `property: value;`.
  
Rule o Ruleset
: Ang tawag sa lahat ng ito kasama ang selectors, declaration, at ang mga curly brace, colon, at semicolon</dd>

Puwede rin tayong mag-select ng maraming elements para isang ruleset lang. Paghihiwa-hiwalayin lang natin ang mga selector gamit ang comma. Halimbawa, may headline tayo, isang paragraph, at isang ordered list, at gusto nating maging red ang text nilang lahat. Puwede nating gawin ito:

```html
<h1>This is a headline</h1>
<p>Turning up emotional faders, keep on keeping self-hating phrases, I have heard enough of these voices. It's almost like I have no choice.</p>
<ol>
  <li>Alice</li>
  <li>Stupid Love</li>
  <li>Rain On Me</li>
  <li>Free Woman</li>
  <li>Fun Tonight</li>
</ol>
```

Ito naman ang sa CSS:

```html
<style>
    h1, p, li {
        color: red;
    }
</style>
```
![Isang webpage na may isang heading, paragraph, at ordered list na may limang items. Lahat ng text ay kulay pula.]({{ site.baseurl }}/images/courses/css-essentials/01-intro-css/code-7.png)

#### External stylesheet
Pinaka-useful ang CSS kapag nakahiwalay ito sa isa pang file. Ang tawag dito ay <dfn>external stylesheet</dfn>. Gaya sa HTML, kailangan mo lang ding gumawa ng isang ordinaryong text file, pero sa halip na `.txt`, gagawin mong `.css` ang filename extension nito.

Kapag may CSS file ka na, puwede mo nang ilipat ang lahat ng internal styles mo papunta sa CSS file na iyon. Pagkatapos, iko-connect natin iyan sa HTML file natin gamit ang `<link>` tag. Ilalagay din natin ito sa `<head>` tag:

```html
<head>
  …
  <link rel="stylesheet" href="/path/to/your/file.css" />
</head>
```

May dalawa tayong attributes na nilagay sa `<link>` tag:

`rel`
: Relationship ng file sa webpage. Dahil isa itong CSS file, `stylesheet` ang nilalagay natin.

`href`
: Ang path papunta sa CSS file mo.

### Task
Kaya mo bang i-replicate ang design na ito? Puwede kang gumamit ng inline, internal, o external stylesheet.

![Isang webpage na may asul na headline at paragraph na may black text at gray na background. May isa rin itong ordered list na lime ang kulay ng background color, ang items nito ay may orange na background.]({{ site.baseurl }}/images/courses/css-essentials/01-intro-css/activity-1.png)

Heto ang HTML code na puwede mong gawing starter:
```html
<html>
<head></head>
<body>
  <h1>This is a headline</h1>
  <p>Turning up emotional faders, keep on keeping self-hating phrases, I have heard enough of these voices. It's almost like I have no choice.</p>
  <ol>
    <li>Alice</li>
    <li>Stupid Love</li>
    <li>Rain On Me</li>
    <li>Free Woman</li>
    <li>Fun Tonight</li>
  </ol>
</body>
</html>
```

#### Hint
- `blue` ang text color ng headline
- `gray` ang background-color ng paragraph
- `lime` ang ginamit sa background ng ordered list
- `orange` ang background ng mga list items.

<b>I-tweet o i-post ang progress mo!</b> Gamitin ang <i>#100DaysOfCode</i> at <i>#CoursesByAntares</i> at i-tag ang Twitter account namin ([@antaresphdev](https://twitter.com/antaresphdev)) o ang Facebook account namin ([Antares Programming](https://facebook.com/antaresprogramming)). Mag-post o mag-tweet ng screenshot para makita natin ang progress mo!
