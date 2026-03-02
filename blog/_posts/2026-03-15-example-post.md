---
layout: post
title: "Your Blog Post Title Here"
date: 2026-03-15
author: "Malav Dalal"
categories: [Functional Safety, Automotive]
tags: [ISO 26262, ASIL, Safety Engineering]
read_time: 8
featured_image: /blog/media/your-image.jpg
excerpt: "A brief summary of your blog post that will appear in the list view. Keep it concise and engaging."
---

## Introduction

Start your blog post with an engaging introduction that hooks the reader and explains what they'll learn.

## Main Content Section

Your main content goes here. You can use:

- Bullet points
- **Bold text** and *italic text*
- [Links](https://example.com)
- Code blocks (see below)

### Subsection

More detailed content in subsections.

```python
# Code example with syntax highlighting
def calculate_asil(severity, exposure, controllability):
    """Calculate ASIL level based on ISO 26262"""
    score = severity * exposure * controllability
    if score >= 8:
        return "ASIL D"
    elif score >= 6:
        return "ASIL C"
    elif score >= 4:
        return "ASIL B"
    else:
        return "ASIL A"
