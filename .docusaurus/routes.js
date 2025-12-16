import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/PhysicalAi-Robotics-Book/__docusaurus/debug',
    component: ComponentCreator('/PhysicalAi-Robotics-Book/__docusaurus/debug', 'fb6'),
    exact: true
  },
  {
    path: '/PhysicalAi-Robotics-Book/__docusaurus/debug/config',
    component: ComponentCreator('/PhysicalAi-Robotics-Book/__docusaurus/debug/config', '4ae'),
    exact: true
  },
  {
    path: '/PhysicalAi-Robotics-Book/__docusaurus/debug/content',
    component: ComponentCreator('/PhysicalAi-Robotics-Book/__docusaurus/debug/content', 'e20'),
    exact: true
  },
  {
    path: '/PhysicalAi-Robotics-Book/__docusaurus/debug/globalData',
    component: ComponentCreator('/PhysicalAi-Robotics-Book/__docusaurus/debug/globalData', 'f44'),
    exact: true
  },
  {
    path: '/PhysicalAi-Robotics-Book/__docusaurus/debug/metadata',
    component: ComponentCreator('/PhysicalAi-Robotics-Book/__docusaurus/debug/metadata', '686'),
    exact: true
  },
  {
    path: '/PhysicalAi-Robotics-Book/__docusaurus/debug/registry',
    component: ComponentCreator('/PhysicalAi-Robotics-Book/__docusaurus/debug/registry', '1b0'),
    exact: true
  },
  {
    path: '/PhysicalAi-Robotics-Book/__docusaurus/debug/routes',
    component: ComponentCreator('/PhysicalAi-Robotics-Book/__docusaurus/debug/routes', 'be4'),
    exact: true
  },
  {
    path: '/PhysicalAi-Robotics-Book/docs',
    component: ComponentCreator('/PhysicalAi-Robotics-Book/docs', 'c81'),
    routes: [
      {
        path: '/PhysicalAi-Robotics-Book/docs',
        component: ComponentCreator('/PhysicalAi-Robotics-Book/docs', 'c94'),
        routes: [
          {
            path: '/PhysicalAi-Robotics-Book/docs',
            component: ComponentCreator('/PhysicalAi-Robotics-Book/docs', '38e'),
            routes: [
              {
                path: '/PhysicalAi-Robotics-Book/docs/category/module-1-ros-2-nervous-system',
                component: ComponentCreator('/PhysicalAi-Robotics-Book/docs/category/module-1-ros-2-nervous-system', '792'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/PhysicalAi-Robotics-Book/docs/category/module-2-digital-twin-gazebounity',
                component: ComponentCreator('/PhysicalAi-Robotics-Book/docs/category/module-2-digital-twin-gazebounity', '5d8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/PhysicalAi-Robotics-Book/docs/category/module-3-nvidia-isaac-ai-robot-brain',
                component: ComponentCreator('/PhysicalAi-Robotics-Book/docs/category/module-3-nvidia-isaac-ai-robot-brain', 'fc0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/PhysicalAi-Robotics-Book/docs/category/module-4-vision-language-action--humanoid-capstone',
                component: ComponentCreator('/PhysicalAi-Robotics-Book/docs/category/module-4-vision-language-action--humanoid-capstone', '2cd'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/PhysicalAi-Robotics-Book/docs/intro',
                component: ComponentCreator('/PhysicalAi-Robotics-Book/docs/intro', '24a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/PhysicalAi-Robotics-Book/docs/module1-ros/intro',
                component: ComponentCreator('/PhysicalAi-Robotics-Book/docs/module1-ros/intro', '969'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/PhysicalAi-Robotics-Book/docs/module2-digital-twin/intro',
                component: ComponentCreator('/PhysicalAi-Robotics-Book/docs/module2-digital-twin/intro', 'a6e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/PhysicalAi-Robotics-Book/docs/module3-isaac-ai/intro',
                component: ComponentCreator('/PhysicalAi-Robotics-Book/docs/module3-isaac-ai/intro', 'e7f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/PhysicalAi-Robotics-Book/docs/module4-capstone/intro',
                component: ComponentCreator('/PhysicalAi-Robotics-Book/docs/module4-capstone/intro', '181'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/PhysicalAi-Robotics-Book/docs/repo-structure',
                component: ComponentCreator('/PhysicalAi-Robotics-Book/docs/repo-structure', '7d1'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/PhysicalAi-Robotics-Book/',
    component: ComponentCreator('/PhysicalAi-Robotics-Book/', 'd1e'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
