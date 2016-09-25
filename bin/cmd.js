#!/usr/bin/env node
'use strict';
const meow = require('meow');
const handle = require('../lib/cli');

const cli = meow(`
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
`);

handle(cli.flags);