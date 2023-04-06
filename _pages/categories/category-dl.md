---
title: "Pytorch & DL basics"
layout: archive
permalink: categories/dl
author_profile: true
sidebar_main: true
---
<small style="font-size:x-small"><a href='/'> Home </a> / <a href='/categories'> Categories</a> / DL</small>
{% assign posts = site.categories.DL %}
{% for post in posts%} 
{% include archive-single.html type=page.entries_layout %}
{% endfor %}