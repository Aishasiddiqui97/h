# Docusaurus Installation Guide

This guide provides instructions for installing and setting up the Docusaurus site for the Physical AI & Humanoid Robotics book.

## Prerequisites

- Node.js (version 18.0 or higher)
- npm or yarn package manager
- Git (for version control)

## Installation Steps

### Method 1: Using the Installation Script

1. Make the script executable:
   ```bash
   chmod +x install-docusaurus.sh
   ```

2. Run the installation script:
   ```bash
   ./install-docusaurus.sh
   ```

### Method 2: Manual Installation

1. Navigate to the book directory:
   ```bash
   cd book
   ```

2. Install dependencies using npm:
   ```bash
   npm install
   ```

   Or if you encounter permission issues, try:
   ```bash
   npm install --legacy-peer-deps
   ```

3. If npm doesn't work, you can try using yarn:
   ```bash
   # Install yarn if you don't have it
   npm install -g yarn

   # Navigate to book directory and install dependencies
   cd book
   yarn install
   ```

## Starting the Development Server

Once installation is complete:

```bash
cd book
npm start
```

This will start the development server at http://localhost:3000

## Building for Production

To build the site for production deployment:

```bash
cd book
npm run build
```

The built site will be available in the `build` directory.

## Troubleshooting

### Permission Errors
If you encounter permission errors during installation:

1. Try running with administrator privileges:
   ```bash
   sudo npm install
   ```

2. Or configure npm to use a different directory:
   ```bash
   mkdir ~/.npm-global
   npm config set prefix '~/.npm-global'
   export PATH=~/.npm-global/bin:$PATH
   source ~/.profile
   npm install
   ```

### Cache Issues
If you encounter cache-related issues:
```bash
npm cache clean --force
npm install
```

### Verification
To verify your installation:
```bash
cd book
npm run build
npm run serve
```

This will build the site and serve it locally for testing.