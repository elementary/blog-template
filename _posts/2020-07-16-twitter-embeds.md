---
title: Twitter “Embed” Cards While Respecting Privacy
description: A quick demo!
author: cassidyjames
---

We wanted to quote/embed a tweet in our blog, but don't like the idea of pulling in JS or even an iframe from Twitter's servers. So instead, we recreate a tweet card locally, making sure to follow the [Twitter Display Requirements](https://developer.twitter.com/en/developer-terms/display-requirements). Check it out:

```liquid
{% raw %}{% include twitter-card.html
  name="Cassidy James Blaede"
  account="CassidyJames"
  avatar="/images/cassidy.jpg"
  id="1281816033343537152"
  timestamp="2020-07-10"
  contents="Got my PINEBOOK Pro! Super duper first impressions: damn, this
    hardware quality is nice for the price. I would love to see what they could
    do around the $500–750 price, honestly. Performance is great; I would not
    guess it was ARM just from using it. It’s fanless!"
%}{% endraw %}
```

turns into:

{% include twitter-card.html
  name="Cassidy James Blaede"
  account="CassidyJames"
  avatar="/images/cassidy.jpg"
  id="1281816033343537152"
  timestamp="2020-07-10"
  contents="Got my PINEBOOK Pro! Super duper first impressions: damn, this
    hardware quality is nice for the price. I would love to see what they could
    do around the $500–750 price, honestly. Performance is great; I would not
    guess it was ARM just from using it. It’s fanless!"
%}

## Embedded Media

You can pass in a path to a local or remote `image` to be embedded in the Tweet. Ideally this is a local asset to avoid hitting a third-party server.

```liquid
{% raw %}{% include twitter-card.html
  name="Daniel Foré"
  account="DanileFore"
  avatar="/images/dan.jpg"
  id="1379129474638258179"
  timestamp="2020-07-10"
  image="/images/tweet.jpg"
  contents="Thanks to <a href='https://twitter.com/bluesabredavis'>@bluesabredavis</a>
    you can now quickly switch audio input and output devices from the sound
    indicator in elementary OS 6!"
%}{% endraw %}
```

turns into:

{% include twitter-card.html
  name="Daniel Foré"
  account="DanileFore"
  avatar="/images/dan.jpg"
  id="1379129474638258179"
  timestamp="2021-04-05"
  image="/images/tweet.jpg"
  contents="Thanks to <a href='https://twitter.com/bluesabredavis'>@bluesabredavis</a>
    you can now quickly switch audio input and output devices from the sound
    indicator in elementary OS 6!"
%}

Similarly, you can pass in a path to a local or remote `video`. This must be in mp4 format.


```liquid
{% raw %}{% include twitter-card.html
  name="Cassidy James Blaede"
  account="CassidyJames"
  avatar="https://gravatar.com/avatar/41275ecc8271aca852ce2c0ff72d2610?s=128"
  id="1369878542448619521"
  timestamp="2021-03-10"
  video="/images/tweet.mp4"
  contents="And a rough demo from screenshots to show what I mean:"
%}{% endraw %}
```

turns into:

{% include twitter-card.html
  name="Cassidy James Blaede"
  account="CassidyJames"
  avatar="https://gravatar.com/avatar/41275ecc8271aca852ce2c0ff72d2610?s=128"
  id="1369878542448619521"
  timestamp="2021-03-10"
  video="/images/tweet.mp4"
  contents="And a rough demo from screenshots to show what I mean:"
%}

---

This is all rendered and styled locally, ensuring we're not hitting Twitter's tracking code just to show some content. It also means embedded tweets will persist, even if removed from Twitter (since it's just local content). It's even light/dark style aware!

It does not (yet) support showing quote tweets, verified badges, automatic @-mentions, threads, or multiple images. If/when the need arises for those, we can add them, though. Profile images must be manually passed in, as well—ideally included with the regular assets for a post so all assets are staying local to the domain.
