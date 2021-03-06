---
title: Overview
---

Here is some very preliminary documentation on the dashboard user interface.

## Coding the Template

### Installation

  * `cd ui/`
  * `npm install`

### Run the system

  * `npm start`: brings up system at localhost:3000/uh-dept-dashboard-template
  * `npm run storybook`: brings up the storybook interface at localhost:6006.


### Deployment

  * `npm run deploy`: manually initiates a deployment to https://uh-dept-dashboard.github.io/uh-dept-dashboard-template
  * Each commit to the main branch will initiate a GitHub action to deploy


## Creating a new dashboard

### Create your new repo

Click the "Use this template" button to create a copy of this repository in a new repository.
  * Let's say that your new repository is in the GitHub organization "icsdept" and the name of the repository is "icsdept-dashboard".

Clone your new repository to your local computer.

### Edit top-level configuration

Change directories to the src/ directory of icsdept-dashboard.

Edit the "homepage" property of package.json.
  * For this example, the new homepage value would be: "https://icsdept.github.io/icsdept-dashboard"

Edit the .github/workflows/deploy.yml file.
  * On lines 33 and 34, edit the user.email and user.name fields to be a person with commit privileges to this repo.
  * One line 35, change "uh-dept-dashboard" to your new organization (for example, icsdept) two times, and change uh-dept-dashboard-template to your new repo (for example, icsdept-dashboard).

### Initial build and deploy

Run `npm install` to download and install third party libraries.

Run `npm deploy` to build and deploy the template to the gh-pages branch of this repo.

In GitHub, go to the Settings page, and check the GitHub Pages section to see that "Source" is the root of the gh-pages branch. Do not specify a Jekyll theme.

Go to (for this example) https://icsdept.github.io/icsdept-dashboard and see if the template dashboard appears.

### Automated deployment

By editing the .github/workflows/deploy.yml file, you have configured automated deployment. This means that each time you commit changes to the main branch, GitHub will automatically rebuild and redeploy your system.

## About the "sparks" parameter to AYMeasureCard

Sparks is an array of objects, each of which defines a spark chart, which are laid out in the card in the order provided in the array. The fields for each object are as follows:

| Field | Meaning | Example |
| ----- | ------- | ------- |
| chart | The type of chart | See the enum ChartType. |
| title | The title to associated with the chart | "Five Year Trend" |
| data  | Array of objects containing data values | Exact structure is type dependent. Required field "value" |

