---
title: "NLP basics"
layout: archive
permalink: categories/nlp
author_profile: true
sidebar_main: true
---
<small style="font-size:x-small"><a href='/'> Home </a> / <a href='/categories'> Categories</a> / NLP</small>
{% assign posts = site.categories.NLP %}
{% for post in posts%} 
{% include archive-single.html type=page.entries_layout %}
{% endfor %}