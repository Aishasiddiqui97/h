#!/bin/bash

# Docusaurus Installation Script for Physical AI & Humanoid Robotics Book
# Run this script to install Docusaurus dependencies and set up the development environment

echo "Installing Docusaurus for Physical AI & Humanoid Robotics Book..."
echo "Current directory: $(pwd)"
echo "Changing to book directory..."

cd book

echo "Installing dependencies using npm..."
npm install

if [ $? -eq 0 ]; then
    echo "✅ Dependencies installed successfully!"
    echo ""
    echo "To start the development server, run:"
    echo "  cd book"
    echo "  npm start"
    echo ""
    echo "To build the site for production, run:"
    echo "  cd book"
    echo "  npm run build"
    echo ""
    echo "The site will be available at http://localhost:3000 when running in development mode."
else
    echo "❌ Installation failed. This may be due to permission issues."
    echo ""
    echo "Try these alternative approaches:"
    echo ""
    echo "1. Run with administrator privileges:"
    echo "   sudo ./install-docusaurus.sh"
    echo ""
    echo "2. Or manually run in the book directory:"
    echo "   cd book"
    echo "   npm install --save @docusaurus/core@latest @docusaurus/preset-classic@latest @mdx-js/react"
    echo ""
    echo "3. Or use yarn instead of npm:"
    echo "   cd book"
    echo "   yarn install"
fi