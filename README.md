<h3 align="center">[WIP] Good First Pin [bot]</h3>
<p align="center">A GitHub App built with <a href="https://github.com/probot/probot">Probot</a> that rotates pinned issues based on <kbd>Good First Issue</kbd> labels<p>
<p align="center"><a href="https://travis-ci.org/JasonEtco/good-first-pin"><img src="https://badgen.now.sh/travis/JasonEtco/good-first-pin" alt="Build Status"></a> <a href="https://codecov.io/gh/JasonEtco/good-first-pin/"><img src="https://badgen.now.sh/codecov/c/github/JasonEtco/good-first-pin" alt="Codecov"></a></p>

## Usage

:soon:

## How it works

Currently (as of the first commit), the app listens for `issues.labeled` events (when a label was added to an issue). If that label is a <kbd>Good First Issue</kbd> label, the app pins that issue.

## Setup

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
