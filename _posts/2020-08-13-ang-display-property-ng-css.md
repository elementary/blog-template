---
title: "Ang <code>display</code> Property ng CSS"
description: "Tingnan nating muli ang <code>display</code> property ng CSS."
image: /images/posts/ang-display-property-ng-css/cover.png
author: teacherbuknoy
slug: /ang-display-property-ng-css/
tags: [Web development, CSS]
---
Pamilyar tayo sa common values ng `display` property. Nandiyan ang `inline`, `block`, at `inline-block`. Recently, nakita rin natin na nadagdag sa mga ito ang `flex` at `grid`. Pero karamihan sa atin, hindi alam na may 28 values[^1] pala na puwedeng ilagay sa `display` property!

[^1]: Tingnan ang `display` property sa [MDN Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/display)

Pero alam n'yo ba na may bagong syntax ang `display` property? Sa [CSS Display Module Level&nbsp;3](https://www.w3.org/TR/css-display-3/), binanggit ang bagong syntax na ito ng `display`. Tingnan natin ang details nito.

## Ang basics ng `display` property
Pag-usapan muna natin ang `inline` at `block` elements. Kapag sinabi nating inline, ibig sabihin, nakadepende ito sa <i>writing mode</i> ng isang language. Sa Filipino, ang writing mode natin ay left-to-right dahil nagsusulat tayo mula kaliwa pakanan. Ang block naman ay ang direction na pupuntahan ng text kapag napuno na ang inline. Sa Filipino, kapag napuno na ang isang line, magra-wrap ang susunod na mga salita sa susunod na line, kaya ang block direction natin ay top-to-bottom.

Ganito ang nangyayari sa mga elements natin na may `inline` at `block` display. Kapag `inline` ang isang element, ile-layout ito ng browser from left to right. Kapag `block` naman ito, ile-layout ito from top to bottom.

<p class="codepen" data-height="407" data-theme-id="dark" data-default-tab="html,result" data-user="maniczirconium" data-slug-hash="RwarNJG" style="height: 407px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Inline and Block">
  <span>See the Pen <a href="https://codepen.io/maniczirconium/pen/RwarNJG">
  Inline and Block</a> by Francis Rubio (<a href="https://codepen.io/maniczirconium">@maniczirconium</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

## Inner at outer values ng `display`
Kapag ginawa nating inline o block ang display ng isang element, alam natin kung ano ang nangyayari sa element. Pero ano ang mangyayari kapag ginawa natin itong `display: grid`? Halimbawa, gumamit tayo ng `<span>` element, na by default ay inline, at gawin natin itong isang grid.

<p class="codepen" data-height="358" data-theme-id="dark" data-default-tab="result" data-user="maniczirconium" data-slug-hash="yLOeyrG" style="height: 358px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Inline to Grid">
  <span>See the Pen <a href="https://codepen.io/maniczirconium/pen/yLOeyrG">
  Inline to Grid</a> by Francis Rubio (<a href="https://codepen.io/maniczirconium">@maniczirconium</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>

Naging block ang span sa halip na inline no'ng ginawa natin itong grid. Sinakop nito ang space ng isang buong line. Pero hindi naman natin iyon ini-specify, paano nangyari iyon? Sa [CSS Display Module Level&nbsp;3](https://www.w3.org/TR/css-display-3/), binanggit na dalawa ang value ng `display` property, ang outer at inner value:

```
display: <outer> <inner>
```

Dine-define ng outer display ang magiging behavior ng element in connection to its parent element. Dine-define naman ng inner display ang magiging layout ng direct children nito. Ibig sabihin nito, kapag nilagay natin ang `display: grid`, ang nakikita talaga ng browser ay `display: block grid`, meaning block element ito in relation to its parent element, pero ile-layout nito ang children nito sa isang grid. Magiging block container ang element na may `display: grid`. Ganito rin ang mangyayari sa isang element na may `display: flex`; para sa browser, ito ay magiging `display: block flex`.

Malaking tulong ito dahil ine-explain nito agad ang gusto nating mangyari sa layout natin. Kapag nilagay natin ang `display: inline grid`, ang aasahan natin ay magiging inline ito para sa parent element nito, pero magiging grid ang elements sa loob nito.

## Further reading
- **[Digging Into The Display Property: The Two Values Of Display](https://www.smashingmagazine.com/2019/04/display-two-value/)**<br>Rachel Andrew, Smashing Magazine
- **[`display`](https://developer.mozilla.org/en-US/docs/Web/CSS/display)**<br>MDN Web Docs
- **[CSS Display Module Level 3](https://www.w3.org/TR/css-display-3/)**<br>W3C Candidate Recommendation Spec
