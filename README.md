# Devlog for my terrible projects
Hey there! This is a fairly simple blog built with Next.js and Mantine (I can't code without a ui framework cause I suck at design). If, for some terrible reason, you want to use this as a template, feel free to fork this repo.

## Installation
```bash
git clone https://github.com/manuelrodval/devlog
cd devlog
npm install
```

## Folder structure
To add new posts, you must include a folder in the `posts` directory with a `post.md` file in it.

```bash

posts/
├── post-1/           # Post folder
    ├── post.md       # Markdown post content
    ├── cover.png     # Cover image. Name can be changed in markdown metadata.
    ├── example.png   # Image. It is possible to include images in the post using the markdown image syntax.
├── post-2/           # Post folder
├── post-2/           # Post folder
└── ...

```

## Compatibility and plugins
You can include some cool (I guess) stuff in your posts using markdown syntax.

*Youtube videos*

```markdown
::yt[TITLE-OF-VIDEO]{YOUTUBE_VIDEO_EMBED_ID}
```

*Admonitions*

```markdown
:::admonition{type="warning" title="This is a warning"}
Admonition content
:::
```

*Pictures*
To include pictures from your post folder, there is an endpoint to serve them and get them from your markdown file.
`/api/images?post=${postName}&img=${imgName}`

```markdown
![image-title](imgName)
```

There is also compatibility with Katex, tables and code highlighting.

## License
This project is licensed under the MIT License. Do whatever you want with it.
