module.exports = {
  someSidebar: {
    Overview: [
        'overview/motivation',
        'overview/walkthrough',
        'overview/design-overview',
        'overview/privacy',
        'overview/measurement-dysfunction',
    ],
    'Requirements': [
        'requirements/overview',
        'requirements/ics',
        'requirements/soest',
        'requirements/social-work',
        'requirements/tim',
        'requirements/nursing',
        'requirements/social-sciences',
        'requirements/spas',
    ],
    Widgets: [
        'widgets/overview',
        'widgets/ssh',
        'widgets/faculty-fte',
        'widgets/extramural-funding',
        'widgets/retention',
        'widgets/publications',
        'widgets/graduate-student-support',
        'widgets/graduates',
        'widgets/ranking',
        'widgets/time-to-degree',
        'widgets/admissions',
        'widgets/course-evaluation-response',
        'widgets/exit-survey-response',
        'widgets/stakeholder-survey-response',
        'widgets/internship',
        'widgets/undergraduate-research-experience',
        'widgets/local-impact',
    ],
    'Developer Guide': [
        'developers/overview',
      {
        type: 'category',
        label: 'User Interface',
        items: [
          'developers/ui/overview',
        ],
      },
      {
        type: 'category',
        label: 'Scripts',
        items: [
          'developers/scripts/overview',
        ],
      },
    ],
    Documentation: [
        'documentation/manage-this-site',
        'documentation/write-markdown',
        'documentation/use-mdx',
    ],
    'About Us': [
        'about/team'
    ]
  },
};
