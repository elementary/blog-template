---
title: "&ldquo;Walang Disabled na Gagamit ng Website ko&rdquo;"
description: "May misconception tayo na para lang sa persons with disability ang accessibility. Pero mahalaga na may pakialam tayong lahat tungkol dito."
image: /images/posts/walang-disabled-na-gagamit-ng-website-ko/cover.jpeg
author: teacherbuknoy
slug: /walang-disabled-na-gagamit-ng-website-ko/
tags: [Web development, accessibility]
---
Ngayong araw, nakita ko ang tweet na ito:

{% include twitter-card.html
  name="Sam Davidson"
  account="sdwaco"
  avatar="/images/posts/walang-disabled-na-gagamit-ng-website-ko/sdwaco.jpg"
  id="1291459680422830083"
  timestamp="2020-08-07"
  contents="who is this sign for"
  photo="/images/posts/walang-disabled-na-gagamit-ng-website-ko/cover.jpeg"
%}

Ni-retweet ito ni Jen Simmons:

{% include twitter-card.html
  name="Jen Simmons"
  account="jensimmons"
  avatar="/images/posts/walang-disabled-na-gagamit-ng-website-ko/jensimmons.jpg"
  id="1291878106874236930"
  timestamp="2020-08-08"
  contents="This is what is feels like to me when a web team is like “we don’t support [foobar] browser”. Ya don’t? Well, the people using that browser are coming to your site anyway…"
%}

At may point siya. Kahit i-assume mo na hindi gagamitin ng persons with disability ang website mo, hindi mo sila mapipigilang i-access ang site mo. At may pakialam ka man o wala sa accessibility ng site mo, walang pakialam diyan ang users mo. Kapag nahirapan silang gamitin ang site mo, hindi magiging maganda ang image at brand mo. In the end, hindi mo namamalayan na nawawalan ka na ng customers. At minsan, may nilalabag ka palang batas.[^1] [^11]

[^1]: Last year, may dininig ang kasong [<cite>Domino's Pizza v. Robles</cite>](https://www.forbes.com/sites/peterslatin/2019/10/08/the-supreme-court-rules-in-favor-of-accessibility-for-the-blind/#4f94cb31c486) pagkatapos idemanda ng isang visually impaired ang Domino's Pizza, isang pizza chain sa USA, dahil hindi accessible ang website nila.

[^11]: Ayon sa Philippine Web Accessibility Group, [puwede kang makasuhan o mademanda kung hindi accessible ang website mo](https://www.pwag.org/resources/analysis-of-philippine-laws-pertaining-to-disability/can-we-be-sued-if-we-dont-make-our-web-site-accessible-written-by-jojo-esposa-jr/).

1. Table of Contents
{:toc}

## Ano ba iyang accessibility na iyan?
Ang <dfn>accessibility</dfn> ay isang practice na ginagawa para magamit ng lahat ang isang bagay kahit na may kapansanan sila, o baka limitado ang kaya nilang gawin dahil sa ibang dahilan. Ang Web accessibility ay ang accessibility sa mga webpages.

## Lahat tayo ay <q>disabled</q>
Totoo, siguro wala kang kapansanan, malinaw ang mata mo, kumpleto ang lahat ng mga parts ng katawan mo. Pero disabled ka sa ilang kaso. Halimbawa, kapag nanonood ka ng video sa isang lugar na maingay at wala kang earphones, makakatulong nang malaki sa iyo ang subtitles, na isang effort para sa web accessibility. Mahalaga rin para sa users na may sirang mouse o touchpad (at sa iba, wala talaga) na magamit nila ang isang website gamit lang ang keyboard.

Sa [interview ni Jen Simmons para sa A11y Rules Podcast](https://a11yrules.com/podcast/e57-interview-with-jen-simmons-part-1/), sinabi niya na ang disability ay isang <q>gradient</q> sa halip na isang yes-or-no na characteristic. Sa halip na disabled o normal, ang mga tao ay normal, may kaunting disability, may mas maraming disability, etc. At bukod pa riyan, kahit normal ang isang tao, may mga araw na magkakaroon siya ng disability: malabong paningin, sakit ng ulo, hirap sa paggalaw ng kamay, etc. At lahat tayo, puwedeng magkaroon ng ganitong limitasyon.


<q>Pero Francis, hindi naman iyan disability,</q> baka sabihin mo. Totoo, hindi sila <em>actual</em> na disability, pero dahil sa mga iyan nalilimitahan ang kayang gawin ng users. At trabaho natin bilang developers at designers na padaliin ang trabaho ng ibang tao. Iyan mismo ang dahilan kung bakit may technology: <strong>para padaliin ang trabaho ng mga tao</strong>. Kung wala tayong gagawin para maging accessible ang website natin, balewala ang problemang sino-solve ng website natin.

## Walang assumptions 

Kapag gumagawa tayo ng website, madalas tayong mag-assume nang hindi natin napapansin. Ina-assume natin na gagamitin ang site natin or application gamit ang dalawang kamay. Ina-assume natin na right-handed ang user natin. Ina-assume din natin na may maayos silang screen, speaker, keyboard, at iba pa. Sa madaling sabi, ina-assume natin na kapareho natin ng kalagayan ang mga gagamit ng product natin.

<blockquote>
  <p>Accessibility is about the recognition that every human isn’t identical to every other human.</p>
  <cite>Jen Simmons</cite>
</blockquote>

Pero gaya ng sabi ni Jen Simmons sa interview ding nabanggit kanina, para maging accessible ang isang website, kailangan munang isaisip ng developer o ng team nila na hindi pare-pareho ang katawan ng tao. May mga taong kaliwete, malabo ang paningin, mahina ang pandinig, nanginginig ang kamay, nakatira sa maingay na environment, at iba pa.

## Hindi mahirap ang Web accessibility
Hindi mahirap isama sa site development ang accessibility. Sa katunayan, kung responsive ang website mo, nagawa mo na ang isang step para sa isang accessible na website dahil tinanggal mo na ang assumption na iisa lang ang size ng screen ng users. Ie-extend mo na lang ang thinking na iyan: puwede kang magsimulang tanggalin din ang assumption na gumagamit ng screen ang users. May mga device na tinatranslate ang content sa Braille [^Braille]. May mga users na gumagamit ng screen readers para pakinggan ang nakasulat sa screen.

[^Braille]: isang alphabet na ginagamit ng mga bulag sa pagbabasa. Isa itong sistema ng mga butas at umbok na kinakapâ ng mga bulag para malaman kung anong letra ang nakasulat.

## Saan ako magsisimula?
Maraming guides na madaling sundin para gawing accessible ang site mo [^3]. Pero heto ang ilan sa mga ginawa ko para maging accessible ang mga website na ginagawa ko.

### Gumamit ng semantic HTML
Sa HTML5, may inilabas na bagong <i>semantic</i> tags na may actual na meaning. Sa halip na gumamit ng `<div>` at `<span>` sa <em>lahat ng oras</em>, gamitin ang mga tags na gaya ng `<nav>`, `<article>`, at `<section>`. Dahil sa mga semantic HTML, mababasa nang tama ng screen readers ang content mo. Marami kang matututuhan sa [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Glossary/semantics). Itinuturo din sa [libreng course na ito sa LinkedIn Learning](https://www.linkedin.com/learning/html-essential-training-4/) ang HTML at kung paano ito gagawing semantic. Magkakaroon din ang [Courses by Antares Programming](/courses/html-essentials/) ng course tungkol sa paggamit ng HTML at accessibility.

[^3]: Ang official document na sinusunod para sa Web accessiblity ay ang [Web Content Accessibility Guidelines](https://www.w3.org/TR/WCAG21/).

### Gamitin ang developer tools
 May accessibility tools ang [Google Chrome](https://developers.google.com/web/tools/chrome-devtools/accessibility/reference#pane) at [Mozilla Firefox](https://developer.mozilla.org/en-US/docs/Tools/Accessibility_inspector). Malaking tulong ito para ayusin ang website mo at maging accessible. Mula sa mga tools na ito, makakakuha ka ng tips tungkol sa font size at color contrast ng web site mo, bukod pa sa ibang mga bagay.
 
 <!--iframe width="560" height="315" src="https://www.youtube.com/embed/7mqqgIxX_NU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe-->
 {% include video-embed.html video_path = "https://www.youtube.com/embed/7mqqgIxX_NU" %}
 
### 13 Days of Accessibility
 Nakatulong sa akin ang [13 Days of Accessibility](http://a11ycalendar.kaseybon.com/). For 13 days, gagawa ka ng improvements sa accessibility ng site mo. May kasama itong calendar ng schedule ng focus mo. Halimbawa, sa unang araw, ayon sa calendar, aayusin mo ang text alternatives sa lahat image, audio, at video na nasa site mo. Itutuloy mo lang ito hanggang sa matapos mo ang 13 days. At kung lumaki ang project mo at sa tingin mo kailangan mong i-examine ulit ang accessibility ng website mo, puwede mo itong ulitin.

## Conclusion
Hindi lang persons with disability ang nakikinabang kapag accessible ang isang website. Kaya sana gawin nating lahat ang kahit kaunting effort lang na gawing accessible ang website natin. Pasasalamatan kayo ng users ninyo. At siyempre maa-appreciate ko rin kapag napunta ako sa website ninyo. 😉
