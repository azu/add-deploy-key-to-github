# add-deploy-key-to-github

Add deploy to GitHub from command line. 

## Install

Install with [npm](https://www.npmjs.com/):

    npm install -g add-deploy-key-to-github

**Requirement**: Node.js v6 >=

## Usage

CLI usage

    Usage
      $ add-deploy-key-to-github --repo azu/add-deploy-key-to-github --key path/to/key.pub --token $GH_TOKEN

    Options
      --repo <owner>/<name>
      --key path to deploy key file(.pub)
      --token GitHub token
      --read_only if it is set, deploy key as read_only key 
        Default: false (write)

    Examples
      $ add-deploy-key-to-github --repo azu/add-deploy-key-to-github --key path/to/key.pub --token XXX

## Changelog

See [Releases page](https://github.com/azu/add-deploy-key-to-github/releases).

## Running tests

Install devDependencies and Run `npm test`:

    npm i -d && npm test

## Contributing

Pull requests and stars are always welcome.

For bugs and feature requests, [please create an issue](https://github.com/azu/add-deploy-key-to-github/issues).

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## Author

- [github/azu](https://github.com/azu)
- [twitter/azu_re](https://twitter.com/azu_re)

## License

MIT © azu
