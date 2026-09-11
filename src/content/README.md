# CodeMasti JSON Content Engine

Future lesson content can live here instead of large JavaScript course files.

Recommended structure:

```text
src/content/
  html/
    introduction-to-html.json
    html-editors-setup.json
  css/
    css-introduction.json
  javascript/
    variables.json
```

Each JSON file should contain normal lesson fields:

```json
{
  "id": "html-1",
  "title": "Introduction to HTML",
  "readingTime": "8 min read",
  "englishDef": "HTML defines the structure of a web page.",
  "hinglishExplain": "HTML page ka structure banata hai.",
  "code": "<h1>Hello CodeMasti</h1>",
  "summary": ["HTML is structure", "Tags define content"]
}
```

The helper in `src/utils/contentEngine.js` can merge JSON lesson content into an existing course object. This lets the project migrate gradually from `courseData/<domain>/<course>.js` to JSON-driven content without breaking the current app.
