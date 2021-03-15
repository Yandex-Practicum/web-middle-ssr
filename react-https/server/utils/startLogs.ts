export function makeStartLogsText(
    hosts: string[],
    protocol = 'https',
    port: number | string | undefined,
) {
    return `
Running on:
${hosts.map(host => `   * ${protocol}://${host}:${port}`).join('\n')}
`;
}
