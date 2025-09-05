# BANKNOTE-SCANNER Data Inventory

## Overview
This document provides a comprehensive inventory of ALL data found across all branches in the BANKNOTE-SCANNER repository.

## Repository Structure

### Branch: `main`
**Purpose**: Basic repository setup
**Files**:
- `README.md` - Basic project description ("First commit")

### Branch: `codex/build-sophisticated-banknote-scanner-app`
**Purpose**: JavaScript-based banknote scanner web application
**Files**:
- `.gitignore` - Node.js gitignore patterns
- `README.md` - Enhanced project documentation
- `index.html` - Main HTML interface for web application
- `package.json` - Node.js project configuration and dependencies
- `package-lock.json` - Locked dependency versions
- `jest.config.js` - Jest testing framework configuration

**Source Code**:
- `src/app.js` - Main application logic (camera handling, UI navigation, image capture)
- `src/analysis.js` - Banknote analysis module with AI simulation

**Tests**:
- `__tests__/analysis.test.js` - Unit tests for analysis module

**Styles**:
- `styles/main.css` - CSS styling for the web application

### Branch: `codex/add-unit-tests-and-ci-workflow`
**Purpose**: Python-based banknote scanner with machine learning
**Files**:
- `README.md` - Basic project description
- `requirements.txt` - Python dependencies (numpy, pytest)
- `scanner.py` - Core Python scanner with preprocessing and ML inference

**Tests**:
- `tests/test_preprocess.py` - Tests for image preprocessing
- `tests/test_model_inference.py` - Tests for ML model inference

**CI/CD**:
- `.github/workflows/tests.yml` - GitHub Actions workflow for automated testing

### Branch: `copilot/fix-5e3438eb-b305-47f6-a165-c2683ee62888`
**Purpose**: Current working branch
**Files**:
- `README.md` - Basic project description
- `DATA_INVENTORY.md` - This comprehensive data inventory (newly created)

## Functionality Analysis

### JavaScript Implementation Features:
1. **Web-based Camera Interface**: Real-time camera access with front/back capture
2. **Image Processing**: Canvas-based image capture and blob handling
3. **Banknote Analysis**: Simulated AI analysis returning denomination, grade, and value
4. **Data Persistence**: Local storage for scan history
5. **Multi-screen Navigation**: Scanner, History, Catalog, and Valuation views
6. **Portfolio Management**: Track collection value and catalog organization

### Python Implementation Features:
1. **Image Preprocessing**: Pixel normalization and type conversion
2. **ML Model Interface**: Generic model inference interface
3. **Comprehensive Testing**: Unit tests with numpy integration
4. **CI/CD Pipeline**: Automated testing on GitHub Actions

## Data Types Found:

### Configuration Data:
- Node.js package configuration (`package.json`, `package-lock.json`)
- Python dependencies (`requirements.txt`)
- Jest testing configuration (`jest.config.js`)
- GitHub Actions workflow configuration (`.github/workflows/tests.yml`)

### Source Code Data:
- JavaScript modules (ES6 imports/exports)
- Python modules with type hints and docstrings
- HTML5 with modern web APIs
- CSS styling

### Test Data:
- JavaScript unit tests using Jest
- Python unit tests using pytest
- Mock data and fixtures

### Documentation Data:
- README files with project descriptions
- Code comments and docstrings
- This comprehensive inventory

## Data Accessibility:
- **JavaScript App**: Complete web application ready to run
- **Python App**: Core ML functionality with testing infrastructure
- **Documentation**: Comprehensive code documentation
- **Testing**: Full test suites for both implementations

## Next Steps:
To make all data accessible in the current branch, we can:
1. Merge key files from other branches
2. Create unified documentation
3. Set up development environment
4. Integrate both implementations