# Repository Structure & Guidelines

This document explains the repository structure and commit message guidelines for the Physical AI & Humanoid Robotics book.

## Repository Structure

```
book/
├── docs/                   # Documentation content
│   ├── intro.md            # Main introduction
│   ├── module1-ros/        # Module 1 content
│   ├── module2-digital-twin/ # Module 2 content
│   ├── module3-isaac-ai/   # Module 3 content
│   └── module4-capstone/   # Module 4 content
├── src/
│   └── css/custom.css      # Custom styles
├── i18n/                   # Internationalization files
│   └── ur/                 # Urdu translations
├── scripts/                # Utility scripts
├── docusaurus.config.js    # Docusaurus configuration
├── sidebars.js             # Navigation sidebar configuration
├── package.json            # Node.js dependencies
└── README.md               # Project overview
```

## Commit Message Guidelines

Follow the conventional commits format for consistency:

```
<type>: <short summary>
<BLANK LINE>
<body - optional details>
<BLANK LINE>
<footer - optional references>
```

### Commit Types

- `feat`: A new feature or content addition
- `fix`: A bug fix or content correction
- `docs`: Documentation updates
- `style`: Changes to formatting, missing semi colons, etc.
- `refactor`: Code changes that neither fixes a bug nor adds a feature
- `test`: Adding missing tests or correcting existing tests
- `chore`: Other changes that don't modify src or test files

### Examples

```
docs: add introduction to module 1

- Add overview of ROS 2 architecture
- Include learning objectives
- Add prerequisites section
```

```
feat: implement digital twin simulation guide

- Create Gazebo integration tutorial
- Add SDF model examples
- Include sensor simulation content
```

```
fix: correct code examples in perception systems

- Fix syntax error in Python example
- Update outdated API references
- Add missing import statements
```

## Development Workflow

1. Create a new branch for your changes: `git checkout -b feature/your-feature-name`
2. Make your changes following the repository structure
3. Commit using the guidelines above
4. Push your branch: `git push origin feature/your-feature-name`
5. Create a pull request to the main branch

## Content Guidelines

- Keep chapters focused and well-structured
- Use consistent terminology throughout
- Include code examples with proper syntax highlighting
- Add appropriate diagrams and images in the `static/img/` directory
- Follow accessibility best practices
- Ensure content works in both English and translated versions