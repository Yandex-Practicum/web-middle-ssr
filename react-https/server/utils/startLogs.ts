import {Empty} from 'utils';

export function makeStartLogsText(
    hosts: string[],
    protocol = 'https',
    port: Empty<number | string>,
) {
    return `
Running on:
${hosts.map(host => `   * ${protocol}://${host}:${port}`).join('\n')}
`;
}
