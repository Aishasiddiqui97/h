import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg button--futuristic neon-element"
            to="/docs/intro">
            Start Learning - 4 Modules
          </Link>
          <Link
            className="button button--secondary button--lg button--futuristic"
            to="/docs/module1-ros/intro">
            Begin with ROS 2
          </Link>
        </div>

        {/* Futuristic robot visualization */}
        <div className={styles.robotVisualization}>
          <div className={styles.robotContainer}>
            <div className={styles.robotBody}></div>
            <div className={styles.robotHead}></div>
            <div className={styles.robotArm}></div>
            <div className={styles.robotArm + ' ' + styles.robotArmRight}></div>
            <div className={styles.neuralNetwork}></div>
            <div className={styles.dataFlow}></div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Physical AI & Humanoid Robotics Educational Platform">
      <HomepageHeader />
      <main>
        <section className={styles.modulesSection}>
          <div className="container">
            <h2>Learning Modules</h2>
            <div className="modules-grid">
              <div className="module-card module-card--ros">
                <h3>ROS 2 Nervous System</h3>
                <p>Core ROS 2 architecture, nodes, topics, services, and actions</p>
                <Link to="/docs/module1-ros/intro" className="button button--futuristic">
                  Start Module
                </Link>
              </div>

              <div className="module-card module-card--digital-twin">
                <h3>Digital Twin (Gazebo/Unity)</h3>
                <p>Simulation environments, physics engines, and sensor simulation</p>
                <Link to="/docs/module2-digital-twin/intro" className="button button--futuristic">
                  Start Module
                </Link>
              </div>

              <div className="module-card module-card--isaac">
                <h3>NVIDIA Isaac AI-Robot Brain</h3>
                <p>AI integration, perception systems, and planning algorithms</p>
                <Link to="/docs/module3-isaac-ai/intro" className="button button--futuristic">
                  Start Module
                </Link>
              </div>

              <div className="module-card module-card--capstone">
                <h3>Vision-Language-Action & Humanoid Capstone</h3>
                <p>Complete integration: multimodal AI and humanoid control</p>
                <Link to="/docs/module4-capstone/intro" className="button button--futuristic">
                  Start Module
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Capstone Flow Visualization */}
        <section className={styles.capstoneSection}>
          <div className="container">
            <h2>Capstone Project: Autonomous Humanoid</h2>
            <div className="capstone-flow">
              <div className="capstone-step">
                <h3>Voice</h3>
                <p>Natural language understanding</p>
              </div>
              <div className="capstone-step">
                <h3>Plan</h3>
                <p>Action planning & reasoning</p>
              </div>
              <div className="capstone-step">
                <h3>Act</h3>
                <p>Physical execution</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}