const {execSync} = require('child_process');
const {readFileSync} = require('fs');

/**
 * Add aliases to /etc/hosts
 * @param {Array.<{host: string ip: string}>} aliases - List of aliases.
 * @param {string|undefined} prefix - Prefix for logger.
 * @return {boolean} Status of update /etc/hosts.
 */
function addAliases(aliases, prefix) {
    const currentHosts = readFileSync('/etc/hosts').toString();

    const newHosts = aliases
        .reduce((result, {host, ip}) => {
            if (currentHosts.includes(host)) {
                // eslint-disable-next-line
                console.warn(`warn: host ${host} is already exists in /etc/hosts`);
                return result;
            }

            return [...result, `${ip} ${host}`];
        }, [`############\n### express-host-aliases\n${prefix ? `### service: ${prefix}\n` : ''}`])
        .concat('\n############\n');

    if (newHosts.length > 2) {
        execSync(`sudo sh -c "echo \'${newHosts.join('\n')}\' >> /etc/hosts"`);
    }
}

const hosts = require('../configs/hosts.json');

(function () {
    addAliases(hosts, 'ssr-project-name');
})();
