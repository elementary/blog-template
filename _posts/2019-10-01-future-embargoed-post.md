---
title: Future Embargoed Post
description: Shh, it's a secret!
author: cassidyjames
tags:
  - meta
  - embargo
image: https://source.unsplash.com/featured?secret

hidden: 3000-01-01T00:00:00Z
date: 2019-10-01
---

This is demonstrating a future embargoed post. This one is a little tricky; in order for GitHub Pages (and other instances that don't publish posts from the future) to render this, we have to put the publish date in the past, whether that's in the filename or with `date` in the front-matter.

But if we want to hide or embargo it, we need to specify `hidden` in the front-matter. If it's just `hidden: true`, we'll show a generic hidden message at the top. If it's `hidden: ` and then a date, we'll show an embargo message mentioning that date specifically.

Remember that the URL is public, so if someone shares it, anyone can read it. And if it's guessable, it's possible someone will just stumble upon it.
