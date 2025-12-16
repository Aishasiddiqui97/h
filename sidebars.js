// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  tutorialSidebar: [
    {
      type: 'doc',
      id: 'intro',
    },
    {
      type: 'doc',
      id: 'repo-structure',
    },
    {
      type: 'category',
      label: 'Module 1: ROS 2 Nervous System',
      items: [
        {
          type: 'doc',
          id: 'module1-ros/intro',
        },
        // Additional module 1 docs would go here
      ],
      link: {
        type: 'generated-index',
        description: 'Learn about ROS 2 architecture and communication patterns',
      },
    },
    {
      type: 'category',
      label: 'Module 2: Digital Twin (Gazebo/Unity)',
      items: [
        {
          type: 'doc',
          id: 'module2-digital-twin/intro',
        },
        // Additional module 2 docs would go here
      ],
      link: {
        type: 'generated-index',
        description: 'Create simulation environments with physics engines and sensor simulation',
      },
    },
    {
      type: 'category',
      label: 'Module 3: NVIDIA Isaac AI-Robot Brain',
      items: [
        {
          type: 'doc',
          id: 'module3-isaac-ai/intro',
        },
        // Additional module 3 docs would go here
      ],
      link: {
        type: 'generated-index',
        description: 'Integrate AI capabilities, perception systems, and planning algorithms',
      },
    },
    {
      type: 'category',
      label: 'Module 4: Vision-Language-Action & Humanoid Capstone',
      items: [
        {
          type: 'doc',
          id: 'module4-capstone/intro',
        },
        // Additional module 4 docs would go here
      ],
      link: {
        type: 'generated-index',
        description: 'Combine all concepts in a complete humanoid robot system',
      },
    },
  ],
};

module.exports = sidebars;