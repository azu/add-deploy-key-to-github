// LICENSE : MIT
"use strict";
const assert = require("assert");
const fs = require("fs");
const path = require("path");
const GitHubClient = require("./GitHubClient");
/**
 *
 * @param {{key:string, repo:string, token: ?string, read_only: ?boolean}} options
 */
module.exports = function(options) {
    assert(typeof options.key === "string", "--key <file-path> should be string");
    assert(typeof options.repo === "string" && options.repo.indexOf("/") !== -1, "--repo <repo> should be `--repo owver/name` format");
    const deployKeyFilePath = path.resolve(process.cwd(), options.key);
    // actual
    const deployKey = fs.readFileSync(deployKeyFilePath, "utf-8");
    const repo = options.repo;
    const token = options.token || process.env.GH_TOKEN;
    const read_only = typeof options.read_only !== "undefined";
    assert(typeof token === "string", "--token XXX should be string or set GH_TOKEN environment variable");

    const comment = `Registered by add-deploy-key-to-github`;
    const client = new GitHubClient(token);
    return client.registerDeployKey({
        repo,
        comment,
        deployKey,
        read_only
    })
};