import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    title: 'Customizable',
    imageUrl: '',
    description: (
      <>
        Each department specifies the measures they believe to be useful to track over time.
      </>
    ),
  },
  {
    title: 'Automated',
    imageUrl: '',
    description: (
      <>
        Scripts simplify data collection and analysis, making it easy to update your dashboard with data at the end of each academic year.
      </>
    ),
  },
  {
    title: 'UH focused',
    imageUrl: '',
    description: (
      <>
        Data is collected from internal and external repositories of interest to University of Hawaii departments.
      </>
    ),
  },
];

function Feature({imageUrl, title, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Internships for Hawaii CS Students">
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
        </div>
      </header>
      <main>
        <div className="text--center">
          <img width='1000px' src='img/dashboard-ay-year.png' />
        </div>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
        <div className={styles.buttons} style={{paddingBottom: '10px'}}>
          <Link
              className={clsx(
                  'button button--primary button--lg',
                  styles.getStarted,
              )}
              to={useBaseUrl('docs/overview/motivation')}>
            Learn more
          </Link>
        </div>
      </main>
    </Layout>
  );
}

export default Home;
