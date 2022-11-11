# Markup

HTML markup consists of several key components, including those called tags (and their attributes), character-based data types, character references and entity references. HTML tags most commonly come in pairs like `<h1>` and `</h1>`, although some represent empty elements and so are unpaired, for example `<img>`. The first tag in such a pair is the start tag, and the second is the end tag (they are also called opening tags and closing tags).

Example of a "Hello, World!" webpage

```html
<!DOCTYPE html>
<html>
  <head>
    <title>This is a title</title>
  </head>
  <body>
    <div>
        <p>Hello world!</p>
    </div>
  </body>
</html>
```

The text between `<html>` and `</html>` describes the web page, and the text between `<body>` and `</body>` is the visible page content. The markup text `<title>This is a title</title>` defines the browser page title shown on browser tabs and window titles, and the tag `<div>` defines a division of the page used for easy styling.

The Document Type Declaration `<!DOCTYPE html>` is for HTML5. If a declaration is not included, various browsers will revert to "quirks mode" for rendering.
> In computing, quirks mode refers to a technique used by some web browsers for the sake of maintaining backward compatibility with web pages designed for old web browsers instead of strictly complying with W3C and IETF standards in standards mode.
