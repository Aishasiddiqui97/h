# Quickstart Guide: Physical AI & Humanoid Robotics Textbook

**Date**: 2025-12-16
**Feature**: 1-textbook-spec

## Getting Started

This guide will help you set up the environment to work with the Physical AI & Humanoid Robotics textbook content, including code examples and lab exercises.

## Prerequisites

Before starting, ensure you have:

- Ubuntu 22.04 LTS (or equivalent environment)
- Git installed
- Basic familiarity with command line
- At least 8GB RAM and 50GB free disk space
- Internet connection for downloading dependencies

## Environment Setup

### 1. Clone the Repository

```bash
git clone <repository-url>
cd <repository-name>
```

### 2. Install System Dependencies

```bash
sudo apt update
sudo apt install -y python3.10 python3-pip build-essential
```

### 3. Install ROS 2 Humble

Follow the official installation guide: https://docs.ros.org/en/humble/Installation/Ubuntu-Install-Debians.html

### 4. Set up Python Virtual Environment

```bash
python3 -m venv venv
source venv/bin/activate
pip install --upgrade pip
pip install -r requirements.txt
```

### 5. Install Additional Dependencies

```bash
# Install Gazebo Harmonic
sudo apt install gazebo libgazebo-dev

# Install OpenCV and related libraries
pip install opencv-python==4.8.0 open3d==0.17.0

# Install PyTorch and TensorFlow
pip install torch==2.0.1 tensorflow==2.13.0
```

## Running Code Examples

### 1. Navigate to a Chapter

```bash
cd book/code-examples/chapter1
```

### 2. Use the Provided Docker Environment

```bash
# Build the environment
docker build -t textbook-chapter1 .

# Run the example
docker run -it textbook-chapter1
```

### 3. Or Run Natively

```bash
# Activate your virtual environment
source venv/bin/activate

# Run the example
python3 example.py
```

## Running Lab Exercises

### 1. Prepare the Simulation Environment

```bash
source /opt/ros/humble/setup.bash
cd book/labs/chapter1
```

### 2. Launch the Simulation

```bash
# Launch the Gazebo simulation
ros2 launch simulation.launch.py
```

### 3. Run the Lab Code

```bash
# In a new terminal
source /opt/ros/humble/setup.bash
source venv/bin/activate
python3 lab_exercise.py
```

## Building the Textbook

### 1. Install Docusaurus

```bash
cd book
npm install
```

### 2. Start Local Development Server

```bash
npm start
```

### 3. Build for Production

```bash
npm run build
```

## Hardware Setup (Optional)

### 1. Connect to Robot Hardware

```bash
# Ensure your robot is connected via USB or network
# Check connection
lsusb | grep -i robot
```

### 2. Launch Hardware Interface

```bash
source /opt/ros/humble/setup.bash
ros2 launch robot_hardware.launch.py
```

## Testing Your Setup

Run the basic test to ensure everything is working:

```bash
source venv/bin/activate
python3 -c "import cv2, torch, tensorflow as tf; print('Environment setup successful!')"
```

## Common Issues

### Issue: Missing ROS 2 packages
**Solution**:
```bash
source /opt/ros/humble/setup.bash
rosdep update
rosdep install --from-paths src --ignore-src -r -y
```

### Issue: Docker permission denied
**Solution**:
```bash
sudo usermod -aG docker $USER
# Log out and log back in
```

### Issue: Python package conflicts
**Solution**: Use the provided requirements.txt in a virtual environment

## Next Steps

1. Review Chapter 1 content in `book/chapters/chapter1.md`
2. Try the first lab exercise in `book/labs/chapter1/`
3. Check out the code examples in `book/code-examples/chapter1/`
4. Visit the online documentation for more detailed guides