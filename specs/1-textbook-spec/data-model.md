# Data Model: Physical AI & Humanoid Robotics Textbook

**Date**: 2025-12-16
**Feature**: 1-textbook-spec

## Entity Definitions

### Chapter
- **id**: Unique identifier for the chapter
- **title**: Chapter title
- **summary**: One-line summary of the chapter
- **learning_objectives**: Array of learning objectives
- **prerequisites**: Array of prerequisite knowledge
- **content**: Chapter content in markdown format
- **code_examples**: Array of associated code examples
- **lab_exercises**: Array of associated lab exercises
- **assessments**: Array of associated assessments
- **assets**: Array of media assets (images, diagrams)
- **translations**: Map of translations by language code

### Lab Exercise
- **id**: Unique identifier for the lab
- **title**: Lab title
- **chapter_id**: Reference to the parent chapter
- **objectives**: Learning objectives for the lab
- **materials**: List of required materials and hardware
- **instructions**: Step-by-step instructions in markdown
- **expected_outcomes**: Description of expected results
- **troubleshooting**: Common issues and solutions
- **duration**: Estimated completion time
- **difficulty**: Difficulty level (beginner, intermediate, advanced)

### Code Example
- **id**: Unique identifier for the code example
- **title**: Descriptive title
- **chapter_id**: Reference to the parent chapter
- **language**: Programming language (python, cpp, etc.)
- **code**: Source code content
- **description**: Explanation of what the code does
- **dependencies**: List of required dependencies
- **environment**: Docker/build environment specifications
- **test_cases**: Associated test cases
- **assets**: Associated diagrams or images

### Assessment
- **id**: Unique identifier for the assessment
- **title**: Assessment title
- **chapter_id**: Reference to the parent chapter
- **type**: Type of assessment (quiz, project, exam)
- **questions**: Array of questions
- **rubric**: Grading criteria
- **duration**: Time limit if applicable
- **attempts_allowed**: Number of allowed attempts (for quizzes)

### Hardware Component
- **id**: Unique identifier for the component
- **name**: Component name
- **part_number**: Manufacturer part number
- **specifications**: Technical specifications
- **quantity**: Required quantity
- **supplier**: Recommended supplier
- **cost**: Estimated cost
- **compatibility**: Compatibility notes
- **assembly_instructions**: Assembly steps
- **safety_notes**: Safety considerations

### Project
- **id**: Unique identifier for the project
- **title**: Project title
- **description**: Detailed project description
- **objectives**: Learning objectives
- **requirements**: Technical requirements
- **deliverables**: Expected deliverables
- **timeline**: Project timeline
- **evaluation_criteria**: How the project will be evaluated
- **resources**: Required resources and materials

## Relationships

- Chapter 1 → * Lab Exercise (chapters contain multiple lab exercises)
- Chapter 1 → * Code Example (chapters contain multiple code examples)
- Chapter 1 → * Assessment (chapters have associated assessments)
- Lab Exercise 1 → * Hardware Component (labs may require multiple components)
- Project 1 → * Chapter (projects span multiple chapters)
- Code Example 1 → * Hardware Component (code may interact with hardware)

## Validation Rules

- All chapters must have at least one learning objective
- All lab exercises must have associated materials list
- All code examples must specify a programming language
- All assessments must have evaluation criteria
- All hardware components must have compatibility specifications
- All projects must have a timeline and evaluation criteria

## State Transitions

- Chapter: draft → review → approved → published
- Lab Exercise: design → test → validate → approved
- Code Example: draft → test → validate → approved
- Assessment: draft → review → validate → approved
- Hardware Component: research → test → approve → document
- Project: design → pilot → validate → approve