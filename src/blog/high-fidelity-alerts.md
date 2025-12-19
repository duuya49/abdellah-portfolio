---
title: Building High-Fidelity SIEM Alerts
category: Detection Engineering
description: How to reduce alert fatigue by transitioning from string-matching to behavior-based detection thresholds.
date: 2024-11-20
layout: layouts/post.njk
tags: blog
---

<h3 class="tech-section-title">Problem Statement</h3>
<p>The SOC was experiencing severe "Alert Fatigue" due to a high volume of false positives from legacy detection rules that lacked behavioral context.</p>

<h3 class="tech-section-title">Detection Logic Design</h3>
<p>I transitioned from simple string-matching to behavior-based thresholds and multi-stage correlation logic.</p>

<ul class="step-list">
    <li>Implemented a "Pre-Alert Filter" that excludes known-good administrative automation scripts.</li>
    <li>Developed correlation rules that trigger only when three or more related MITRE techniques are detected within a 5-minute window.</li>
    <li>Automated the enrichment process (IP reputation, domain age) during the detection phase.</li>
</ul>

<div class="callout callout-impact">
    <div class="callout-title">→ SOC Impact</div>
    <p>Reduced the total alert volume by 40% while simultaneously increasing the true positive rate by 15%, allowing analysts more time for deep investigation.</p>
</div>
