---
title: SIEM Detection Engineering & Alert Optimization
category: Detection Engineering
environment: SOC Production
tools: IBM QRadar, ELK Stack
framework: MITRE ATT&CK
outcome: Improved detection efficiency by 25–35%
date: 2024-12-19
layout: layouts/project.njk
tags: projects
---

<h3 class="tech-section-title">What I did</h3>
<p>Designed and implemented custom SIEM detection rules to identify suspicious behavior, successfully reducing false positives and improving overall alert quality for the SOC team.</p>

<h3 class="tech-section-title">Execution Steps</h3>
<ul class="step-list">
    <li>Reviewed existing SIEM alerts and identified high-noise rules contributing to alert fatigue.</li>
    <li>Analyzed historical logs and incident data to identify real attack patterns and behavioral markers.</li>
    <li>Mapped identified behaviors to specific MITRE ATT&CK tactics and techniques (e.g., T1078 Valid Accounts).</li>
    <li>Built detection logic using complex log correlation, statistical thresholds, and boolean logic.</li>
    <li>Tested new rules against simulated attack data in a lab environment before production rollout.</li>
    <li>Deployed rules in production and monitored performance for continuous tuning.</li>
</ul>

<div class="callout callout-impact">
    <div class="callout-title">→ Outcome & Impact</div>
    <ul class="step-list" style="margin-bottom: 0;">
        <li>Improved detection efficiency by <strong>25–35%</strong> across monitored assets.</li>
        <li>Significant reduction in alert fatigue, allowing analysts to focus on high-fidelity alerts.</li>
        <li>Increased SOC visibility into previously undetected behavioral anomalies.</li>
    </ul>
</div>
