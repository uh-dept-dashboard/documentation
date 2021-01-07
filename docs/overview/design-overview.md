---
title: Design overview
---

## Design Goals

We want UH Department Dashboards to satisfy the following top-level design goals:

*1. Academic units can implement a dashboard with no monetary cost and no system administration overhead.* Dashboards should incur no hosting costs and no ongoing system administration overhead (i.e. database management, operating system upgrades, etc.) We propose to accomplish this by implementing the dashboard as a "static site" hosted by GitHub.  This implies: (1) the dashboard can be hosted without cost to UH; (2) there is no back-end application server or database to maintain; and (3) OS-level security issues are minimized.

Implementing the dashboard as a static site at GitHub imposes constraints on what the dashboard can show and what it can do.  Most importantly, any data available on the dashboard must be effectively "public".  Therefore, the dashboard cannot manipulate any data containing personally identifiable information (PII) about students. It cannot provide private information about faculty. Finally, as a consequence of the static site implementation, updating the dashboard cannot be done by logging in to it and filling out forms; instead, updates happen by running scripts and republishing the site.

*2. Academic units can tailor their dashboard to support their individual needs.*  Different departments will have different needs regarding the collection, analysis, and display of teaching, research, and service data.  This project will not result in a monolithic, "one size fits all" dashboard. Instead, the project will provide a library of "widgets" that academic units can select from and configure to address their individual  needs.

*3. Academic units can extend their dashboard's capabilities.* The dashboard will have a modular, "tool chain" design.  This is intended to make it as easy as possible for academic units to implement ways to collect, analyze, and display the data most suited to their goals. Tool chains developed for one unit can be shared with other units without requiring them to share their data.

*4. Data is not "locked in" to the dashboard.*. The dashboard will allow faculty to download the data in .csv format. This makes it easy for faculty to explore the dataset and hopefully discover new measures and/or analyses that can be helpful to improving the academic unit.

## Instantiating a new dashboard

Following this implementation approach, the dashboard would be implemented as a GitHub repo that can be cloned by a "Dashboard Administrator" for an academic unit. To stand up a new dashboard, the Dashboard Administrator would:

  1. Clone the base uh-dept-dashboard-template repo from GitHub. Let's say a dashboard is being created for the ICS Department. Then, the dashboard administrator might clone uh-dept-dashboard-template into a repo called ics-dept-dashboard.

  2. Edit a set of configuration files that specify the widgets in the dashboard, the faculty, and the keys to be used to access unlisted pages.

  3. Run "download" scripts to download department-related data from various place (Banner, CES, DBLP and/or Google Scholar, MyGrants, UHF). The data obtained from these download scripts is "ephemeral": it is not stored in GitHub, and it may potentially contain PII about students. Thus, the Dashboard Administrator must have completed training and be authorized to manipulate PII data and protect it in an appropriate manner.

  4. Run "widget data" scripts that takes the ephemeral data and extracts the information required for one or more widgets. The resulting "widget data" is public, contains no PII, is FERPA compliant, and can be stored in an external service like GitHub.

  5. Configure "public" pages. Each dashboard has a public landing page with widgets that the academic unit is comfortable revealing to anyone with the top-level URL to the dashboard.  In addition to the landing page with top-level widgets, users can access a variety of public "drilldowns" which provide more specialized visualizations.

In addition to public pages, the dashboard could optionally contain a set of "unlisted" pages that provide faculty-specific data and visualizations. Unlisted pages are not password-protected, but they are "hidden" by including a long difficult-to-guess string of characters in the URL.  This is the same way Google, YouTube, and other sites provide "unlisted" pages. Note that you cannot guarantee that "unlisted" pages cannot be publicly revealed since the URL could be circulated, much the same way that you cannot guarantee that a password-protected page cannot not be revealed since a username and password could be circulated. That said, these pages are useful because they make it easy for faculty to extract data specific to their teaching, research, and service for inclusion in various reports and dossiers.

  5. Commit the dashboard to GitHub. It will now be available at a URL such as http://ics-dept-dashboard.github.io.

## Extending a dashboard with new functionality

In order to extend the dashboard, the Dashboard Administrator can:

  1. Write a new "download" script to download additional ephemeral data, if the data is not already available via other scripts.

  2. Write a new "widget data" script to produce the data needed for the widget.

  3. Implement the widget display component. In many cases, the new widget could be a slight modification of an existing widget.

  4. Edit configuration files to put the new widget into the dashboard.

  5.  Commit the changes.
