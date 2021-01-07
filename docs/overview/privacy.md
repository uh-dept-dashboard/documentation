---
title: Privacy and PII
---

## Student Data and Privacy

Privacy, particularly of student information, is critical to the viability of the Department Dashboard.

At the same time, it must be recognized that many important and useful analyses require "ephemeral" access to data with PII. In other words, while the analysis appearing in the dashboard (and the data available in the dashboard) does not contain PII, the creation of that data requires access to PII.

For example, consider an analysis about "retention", where a department would like to know the percentage of women in its 100-level, 200-level, 300-level, 400-level courses, and graduates for a specific semester. This analysis can be extremely useful for determining a baseline for retention (i.e. there are 40% women in the 100-level classes, but only 15% women graduates).  Over the course of several semesters, the department can start to understand whether retention is relatively constant, its variability, whether it is trending up or down, and where to focus efforts.  For example, if there are 40% women in the 100-level classes, but only 15% women from then on, then it's probably useful to focus on the 100-level classes. On the other hand, if there's only 15% women in the 100-level classes, and all 15% graduate, then the problem is not the degree program, it's "expanding the pipeline".

What's important to note is that while the published analysis in this example contains only aggregate percentages and no student PII, producing the analysis requires PII.  This is because you need to count the number of unique students at each course level, not just the total number of students enrolled in each class.  Put another way, if a single student takes three 300-level courses, that student should only count once in the calculation of retention for that grade level.  The most straightforward way to obtain this analysis is to request data "temporarily" from Banner about the enrollment in every course along with student demographic data, compute the retention percentages for the semester, then dispose of the temporary data in an appropriate manner.

There are many other situations just like this, where the dashboard can provide useful, actionable analyses to departments without any PII, but the creation of the analysis requires temporary access to data with PII.

The University of Hawaii has data governance policies and procedures which are available at [https://www.hawaii.edu/infosec/infosecprogram/](https://www.hawaii.edu/infosec/infosecprogram/). We believe it is possible for departments to designate a faculty member or staff person as a "Dashboard Administrator", who completes all necessary training and puts in place the necessary safeguards to maintain privacy while manipulating data containing student PII.

## Faculty data and privacy

Evaluation of faculty during the pre-tenure, tenure, and post-tenure years all involves collection of data concerning research, teaching, and service.  A department dashboard can simplify this process both for the faculty member and those responsible for evaluating by making certain forms of data easily available. The dashboard can provide pages for individual faculty members summarizing their research, teaching (and if available) service activities, with mechanisms to easily export this data in a standard format (such as LaTeX) for inclusion in dossiers.

Again, care must be taken that no student PII is inadvertently included.
