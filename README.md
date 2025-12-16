# Physical AI & Humanoid Robotics Book

This is a comprehensive 4-module Docusaurus book covering Physical AI and Humanoid Robotics concepts with practical implementation.

## Modules

1. **Module 1: ROS 2 Nervous System** - Core ROS 2 architecture and communication
2. **Module 2: Digital Twin (Gazebo/Unity)** - Simulation environments and physics
3. **Module 3: NVIDIA Isaac AI-Robot Brain** - AI integration and perception
4. **Module 4: Vision-Language-Action & Humanoid Capstone** - Complete integration

## Installation

To set up the development environment:

### Quick Installation
```bash
# From the project root directory
./install-docusaurus.sh
```

### Manual Installation
```bash
# Navigate to the book directory
cd book

# Install dependencies
npm install

# Or if you have permission issues:
npm install --legacy-peer-deps
```

## Getting Started

After installation, to run this documentation site locally:

```bash
cd book
npm start
```

Open your browser to http://localhost:3000 to view the site.

## Available Scripts

In the `book` directory, you can run:

- `npm start` - Starts the development server
- `npm run build` - Builds the site for production
- `npm run serve` - Serves the built site locally for testing
- `npm run swizzle` - Copies Docusaurus components for customization
- `npm run deploy` - Deploys the site to GitHub Pages
- `npm run write-translations` - Extracts translation strings

## Contributing

See the contributing guidelines in the main repository.