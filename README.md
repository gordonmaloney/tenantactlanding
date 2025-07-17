# TenantAct Landing Page

A responsive landing page for the TenantAct platform, built with React, Material-UI, SCSS, and FontAwesome.

## Features

- Responsive design optimized for desktop and mobile devices
- Custom `Header` and `Footer` components for consistent site navigation
- `Landing` component with clear call-to-action
- Device-specific content handling using `react-device-detect`
- Styled with SCSS and Emotion CSS-in-JS
- Iconography powered by FontAwesome and Material-UI Icons

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/gordonmaloney/tenantactlanding.git
   ```
2. Navigate into the project directory:
   ```
   cd tenantactlanding
   ```
3. Install dependencies:
   ```
   npm install
   ```

## Running Locally

Start the development server:

```
npm start
```

Your app will be available at `http://localhost:3000`.

## Building for Production

Generate a production-ready build:

```
npm run build
```

The optimized static files will be output to the `build/` directory.

## Project Structure

```
tenantactlanding/
├── public/
│   └── index.html            # HTML template
├── src/
│   ├── Components/
│   │   ├── Header.js         # Site header component
│   │   └── Footer.js         # Site footer component
│   ├── Landing.js            # Main landing section
│   ├── index.js              # App entry point
│   ├── FullList.jsx          # The links and text for the different tools, so that it's all in one  place
│   └── index.scss            # Global styles
```

## Technologies Used

- **React** (v18)
- **Create React App** (react-scripts)
- **Material-UI** (v5)
- **Emotion** (`@emotion/react`, `@emotion/styled`)
- **SCSS**
- **FontAwesome** (`@fortawesome/react-fontawesome`)
- **react-device-detect**

## Deployment

You can deploy this app to any static hosting service, such as Netlify, Vercel, or GitHub Pages.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any bugs or feature requests.

## License

This project currently has no license. To apply a license, add a `LICENSE` file to the root of the repository.

