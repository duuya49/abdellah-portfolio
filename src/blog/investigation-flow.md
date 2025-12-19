---
title: "From Alert to Containment: Incident Investigation Flow"
category: Incident Investigation
description: A structured breakdown of the incident response lifecycle, from initial triage to host network isolation.
date: 2024-10-15
layout: layouts/post.njk
tags: blog
---

<h3 class="tech-section-title">Investigation Steps</h3>
<p>A structured approach to an EDR alert indicating suspicious PowerShell execution on a marketing workstation.</p>

<ul class="step-list">
    <li><strong>Initial Triage:</strong> Analyzed the parent/child process tree to understand the execution context.</li>
    <li><strong>Evidence Correlation:</strong> Pivoted to SIEM logs to check for lateral movement or data staging.</li>
    <li><strong>Scope Analysis:</strong> Scanned the environment for the same SHA256 hash across all endpoints.</li>
    <li><strong>Containment:</strong> Isolated the host using EDR "Network Quarantine" and reset compromised user credentials.</li>
    <li><strong>Response:</strong> Updated SPAM filters and performed a global search/purge of the specific email hash.</li>
</ul>

<div class="callout callout-lessons">
    <div class="callout-title">💡 Lessons Learned</div>
    <p>Rapid containment is only possible when EDR policies are correctly pre-configured and the communication channel with IT managers is well-established.</p>
</div>
