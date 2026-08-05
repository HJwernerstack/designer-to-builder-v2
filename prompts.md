# Session 2 Prompts

## 1. Plan the Component (Planning Only)

```text
I want to build a reusable accordion component from this selected Figma node:

<FIGMA_NODE_URL>

Use the Figma MCP get_design_context tool to inspect the selected node. Also inspect this repository and read AGENTS.md. Do not edit any files yet.

Plan an implementation that:

- creates the component preview in src/components/accordion/accordion.html and its styles in src/components/accordion/accordion.css
- uses the existing tokens in src/tokens/tokens.css
- uses native details and summary, with no JavaScript or framework
- includes the light and dark examples and the open and closed states supplied by Figma
- preserves all existing content in the root index.html
- only adds a link from the existing root page to the accordion component preview
- does not invent content that is not supplied by Figma

Separate the plan into:

1. decisions coming from Figma
2. decisions coming from the repository
3. anything requiring human judgement
4. how the result will be verified in the preview
```

## 2. Implement the Plan (Implementation)

```text
Implement the plan you just proposed. When you finish, summarise the files you changed and what I should verify in the preview.
```

## 3. Compare the Implementation (Read-Only Review)

```text
Do not change any files yet.

Use the Figma MCP get_design_context tool to compare the current implementation with this selected Figma node:

<FIGMA_NODE_URL>

Explain:

1. which structure, states, content, variables, and visual decisions match
2. which decisions came from Figma and which came from the repository
3. whether anything exists in Figma but is missing from code, or exists in code but is not supported by Figma
4. whether the selected design supplies body content for Return Policy, Payment Methods, or Customer Support
5. anything that appears out of sync and the smallest change you would recommend, if any

Refer to the relevant Figma layer or variable names and the relevant code files. Do not invent a mismatch and do not edit the implementation.
```