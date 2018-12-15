<p align="center">
  <img src="https://avatars2.githubusercontent.com/in/22304?s=128&v=4" width="64">
  <h3 align="center"><a href="https://github.com/apps/good-first-pin">good-first-pin[bot]</a></h3>
  <p align="center">A GitHub App built with <a href="https://github.com/probot/probot">Probot</a> that rotates pinned issues based on <kbd>Good First Issue</kbd> labels<p>
  <p align="center"><a href="https://travis-ci.org/JasonEtco/good-first-pin"><img src="https://badgen.now.sh/travis/JasonEtco/good-first-pin" alt="Build Status"></a> <a href="https://codecov.io/gh/JasonEtco/good-first-pin/"><img src="https://badgen.now.sh/codecov/c/github/JasonEtco/good-first-pin" alt="Codecov"></a></p>
</p>

## How it works

After installing the app on your repository, it listens issues that have been labeled <kbd>Good First Issue</kbd>, then pins that issue (if fewer than 3 have already been pinned). This is also triggered by new issues with the label!

![gfp](https://user-images.githubusercontent.com/10660468/50038115-52b6b000-ffe8-11e8-8e73-d407be36f0cf.gif)

## Development

Follow the [Getting Started with Probot](https://probot.github.io/docs/) guide for the full details on developing Probot Apps.

```sh
# Install dependencies
npm install

# Run typescript
npm run build

# Run the bot
npm start
```

## Contributing

If you have suggestions for how good-first-pin could be improved, or want to report a bug, open an issue! Any and all contributions are welcome.

For more, check out the [Contributing Guide](CONTRIBUTING.md).

## License

[ISC](LICENSE) © 2018 Jason Etcovitch <jasonetco@github.com>
