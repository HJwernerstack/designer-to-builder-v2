# Designer to Builder

This is the working codebase for the Figma **Designer to Builder** livestream series: a beginner-friendly walkthrough of turning a Figma component into reviewable code with Figma MCP and a coding agent.

The project intentionally starts small. It uses native HTML and CSS, with no framework, JavaScript, dependencies, or build step, so every part of the implementation remains visible and understandable to designers who are new to code.

## Design source

The project uses the Accordion component from the [Designer to Builder Figma Community file](https://www.figma.com/community/file/1655994171720567013/figma-livestream-designer-builder).

The Figma file contains the component structure, open and closed states, content, variables, and light and dark examples used as the source of truth for the implementation.

## Repository structure

```text
.
├── AGENTS.md
├── README.md
├── index.html
└── src/
    ├── components/
    └── tokens/
```

| Path | Purpose |
| --- | --- |
| `index.html` | The browser preview and home for the component markup. |
| `src/components` | Styles for components created from the Figma design. |
| `src/tokens` | Design variables represented as CSS custom properties. |
| `AGENTS.md` | Working instructions for coding agents using this repository. |

The component and token directories are empty in the starting scaffold. The blank `index.html` page provides the browser entry point without introducing any design or implementation decisions in advance.

## View locally

Clone the repository and open `index.html` in a browser. No installation or build command is required.

## Connect the accordion to Figma

This repository is configured for the framework-agnostic Code Connect template format. The generated snippets are labeled **HTML** in Figma and live next to the component they document.

1. In your copy of the Figma library, right-click the root Accordion component and choose **Copy link to selection**.
2. Generate a template beside the component:

   ```sh
   npm run code-connect:create -- "<FIGMA_COMPONENT_URL>" --outDir src/components/accordion
   ```

3. Update the generated `.figma.ts` file so its `example` contains the semantic `<details>` and `<summary>` markup from `src/components/accordion/accordion.html`. Keep its `// url=...` comment pointed at the root Figma component.
4. Create a Figma personal access token with **Code Connect: Write** and **File content: Read** scopes, then publish without putting the token in the repository:

   ```sh
   FIGMA_ACCESS_TOKEN="<YOUR_TOKEN>" npm run code-connect:publish
   ```

Use `npm run code-connect:check` to parse the templates locally before publishing. The command downloads the official Code Connect CLI on demand, so no dependency or build step is added to the component preview.
