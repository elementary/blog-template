---
---

# Authors

<section class="author-list">
{% assign site_authors = site.authors | sort %}
{% for each_author in site_authors %}
  {% if each_author[0] != 'anonymous' %}
    {% assign posts = site.posts | where: "author", each_author[0] | sort | reverse %}
    {% if posts.size > 0 %}
      <hr />
      <h2 id="{{ each_author[0] }}">{{ each_author[1].name }}</h2>
      <p>{{ each_author[1].description }}</p>
      {% for post in posts %}
        {% unless post.hidden %}
          {% include featured.html post=post %}
        {% endunless %}
      {% endfor %}
    {% endif %}
  {% endif %}
{% endfor %}
</section>
