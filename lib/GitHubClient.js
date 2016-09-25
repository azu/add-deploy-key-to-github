// LICENSE : MIT
"use strict";
const request = require('request');
// https://github.com/olizilla/github-deploy-key
/**
 *
 * @param {string} githubToken
 * @returns {Function}
 */
module.exports = class GitHubClient {
    constructor(githubToken) {
        this.gh = request.defaults({
            json: true,
            baseUrl: 'https://api.github.com',
            headers: {
                'User-Agent': 'github-deploy-key',
                Accept: 'application/vnd.github.v3+json',
                Authorization: 'token ' + githubToken
            }
        });
    }

    registerDeployKey({
        repo,
        comment,
        deployKey,
        readOnly = false
    }) {
        return new Promise((resolve, reject) => {
            this.gh.post({
                url: `/repos/${repo}/keys`,
                body: {
                    title: comment,
                    key: deployKey,
                    read_only: readOnly
                }
            }, (err, res, body) => {
                if (err || res.statusCode > 299) {
                    return reject(err || body)
                }
                resolve(body);
            });

        });
    };
};
