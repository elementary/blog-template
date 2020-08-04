---
title: "Using Linear Gradients to Create Stripes"
description: "Sa halip na gumamit ng maraming <code>div</code>, puwede nating gamitin ang CSS <code>linear-gradient()</code> function para maglagay ng stripes sa design natin."
image: /images/posts/using-linear-gradients-to-create-stripes/blueberry.jpg
author: teacherbuknoy
slug: /using-linear-gradients-to-create-stripes/
tags: [web development]
---

## Ang problema
Sa banners ng <a href="/courses/"><i>Courses by Antares Programming</i></a>, makikita ang ganitong design:

<img class="img--borderize" alt="Makikita sa banner ng Courses ang design ng stripes na may iba't ibang kulay." src="{{ site.url }}/images/posts/using-linear-gradients-to-create-stripes/cover.png" width="647" height="260" />

Sa ilalim ng banner title (<i>Courses by Antares Programming</i>), may makikitang underline na gawa sa stripes na iba't iba ang kulay. Pero hindi iyan underline gamit ang <code>text-decoration</code>. Gawa iyan sa <code>linear-gradient()</code> function ng CSS.

## Ang Linear Gradients
Tumatanggap ang <code>background-image</code> ng CSS ng <code>url()</code> function, na puwede nating bigyan ng URL papunta sa isang image na gagawing background sa isang element. Pero bukod diyan, puwede rin nating ilagay ang iba't ibang functions para sa mga gradient na gaya ng <code>linear-gradient()</code> at <code>radial-gradient()</code>.

Ang <code>linear-gradient()</code> ay isang function na maglalagay sa background natin ng mga kulay na nagbe-blend sa isa't isa sa iisang direction. Hindi ito gaya ng `radial-gradient()` na naglalagay at nagbe-blend ng colors mula sa gitna ng element papaplabas. Tumatanggap ito ng mga arguments:

1. `<direction>` Ini-specify nito ang direction ng gradient. Puwede tayong maglagay rito ng mga values na gaya ng `to bottom`, `to top`, `to top left`, `to bottom right`, etc. Puwede rin tayong maglagay ng angle gamit ang `deg` unit, gaya ng `45deg`, `90deg`, `180deg`, etc.
2. `<color>` ang mga kulay na ilalagay sa gradient. Puwede kahit maraming kulay na ipasa.

Pansinin ang example na ito:
<pre>background-image: linear-gradient(orange, yellow);</pre>

Ito ang magiging hitsura niyan:
<svg class="img--borderize" style="width: var(--content-width);  height: calc(var(--content-width) / 3); background-image: linear-gradient(orange, yellow)"></svg>

Puwede nating baguhin ang direction ng linear-gradient. Kapag naglagay tayo ng `to right`, magsisimula ang mga colors sa top left, kaya makikita ang <span class="color" style="width: var(--content-width);  --content-color: orange">orange</span> sa taas, at magtatapos ang <span class="color" style="width: var(--content-width);  --content-color: yellow">yellow</span> sa right. Ito ang code para riyan:

<pre>background-image: linear-gradient(<mark>to right</mark>, orange, yellow);</pre>

Ito naman ang magiging hitsura niyan:

<svg class="img--borderize" style="width: var(--content-width);  height: calc(var(--content-width) / 3); background-image: linear-gradient(to right, orange, yellow)"></svg>

Puwede rin nating i-adjust ang position ng bawat isang kulay. Para mas madaling mabasa ito, ilalagay ko sa individual lines ang bawat isang kulay. Pansinin na puwede tayong gumamit ng kahit na anong unit na ginagamit natin sa `width` at `height`.

```css
background-image: linear-gradient(
  to right,
  red 20px,
  green 30%,
  yellow
);
```

Heto ang itsura niyan:

<svg class="img--borderize" style="width: var(--content-width);  height: calc(var(--content-width) / 3); background-image: linear-gradient(
  to right,
  red 20px,
  green 30%,
  yellow
);"></svg>

Kagaya ng makikita, hindi magbe-blend sa iba pang kulay ang <span class="color" style="width: var(--content-width);  --content-color: red">red</span> red for 20 pixels. Mula sa pang-21 na pixel onwards, magbe-blend na ito sa ibang mga kulay. Magiging mas obvious ito sa video sa baba, kung saan makikita na nagbabago ang width ng kulay kapag binago ang position:

<video class="img--borderize" style="width: var(--content-width)" controls src="/images/posts/using-linear-gradients-to-create-stripes/gradient-1.mp4">
  <p>Hindi kayang i-play ng browser mo ang video na ito. Puwede mo itong <a href="/images/posts/using-linear-gradients-to-create-stripes/gradient-1.mp4" download>i-download</a> at panoorin sa isang video player application.</p>
</video>

Sa dulo ng video, makikita natin na kapag lumampas na sa position ng kasunod na kulay, hindi na sila magbe-blend together, at magkakaroon ng solid na distinction sa pagitan ng dalawang kulay. Sa video, makikita ito kapag lumampas na ang <span class="color" style="width: var(--content-width);  --content-color: red">red</span> sa position ng <span class="color" style="width: var(--content-width);  --content-color: green">green</span> na `30%`, magmumukha na silang dalawang magkatabing `div` na may magkaibang kulay:

<svg class="img--borderize" style="width: var(--content-width);  height: calc(var(--content-width) / 3); background-image: linear-gradient(
  to right,
  red 30%,
  green 30%,
  yellow
);"></svg>

Puwede nating gamitin ang principle na iyan sa paggawa ng striped design.

## Stripe design gamit ang <code>linear-gradient</code>

Para magkaroon ng stripes, kailangan na ang position ng isang color at ng kasunod nito ay magkapareho. Kaya ang gagawin natin, sa bawat isang kulay, magkakaroon tayo ng dalawang version, isa na may position na kaparehas sa naunang kulay at isa pa na may position na nag-i-indicate kung gaano kahaba ang kulay. Subukan natin iyan sa nakaraang gradient. Pansinin na para mag-resize din ito kasabay ng element, percent ang gagamitin natin sa halip na pixels.

```css
background-image: linear-gradient(
  to right,
  red 30%,
  green 30%,
  green 50%,
  yellow 50%,
  yellow 70%,
  blue 70%,
  blue 100%
);
```

<svg class="img--borderize" style="width: var(--content-width);  height: calc(var(--content-width) / 3); background-image: linear-gradient(
  to right,
  red 30%,
  green 30%,
  green 50%,
  yellow 50%,
  yellow 70%,
  blue 70%,
  blue 100%
);"></svg>

Now, puwede natin itong gamitin sa isang element na may text, gaya sa example natin. Puwede natin iyang gamitin, halimbawa, sa isang `h2` element:

```html
<style>
h2 {
  background-image: linear-gradient(
    to right,
    red 30%,
    green 30%,
    green 50%,
    yellow 50%,
    yellow 70%,
    blue 70%,
    blue 100%
  );
}
</style>

<h2>This is an example element</h2>
```
<img class="img--borderize" src="/images/posts/using-linear-gradients-to-create-stripes/h2-1.png" width="656" height="49" />

Kung gusto naman nating gawin iyan na mas maliit at mukhang underline, puwede nating gamitin ang `background-size`, `background-repeat`, at `background-position`.

- `background-size`: Puwede tayong mag-set ng width at height <em>sa background lang</em>
- `background-repeat`: kailangan natin itong i-set sa `no-repeat`. By default kasi, ita-tile ng browser ang `background-image` kapag mas maliit ito sa element, at hindi natin maa-achieve ang underline appearance na gusto nating makuha.
- `background-position`: magagamit natin ito para ilagay sa ilalim ng text ang underline.

Sa current code natin para sa `h2` element, puwede nating idagdag ang mga ito:

```css
background-size: 100% 5px;
background-repeat: no-repeat;
background-position: bottom;
````

Para sa `background-size` property, ang unang value na nilagay natin (`100%`) ay para sa width, at ang ikalawa naman (`5px`) ay para sa height. Ito ang magiging hitsura niyan ngayon:

<img class="img--borderize" src="/images/posts/using-linear-gradients-to-create-stripes/h2-2.png" width="666" height="45" />

Gusto ko lang i-post ito dahil puwede ninyo ring magamit ito sa mga designs ninyo in the future. Thanks!
