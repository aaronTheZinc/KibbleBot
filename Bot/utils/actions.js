const os = require('os')
exports.serverSpecs = () => {
	let hostinfo = `OS: ${os.type()} ${os.release()} ${os.arch()} | CPU: (${os.cpus().length} Cores) ${os.cpus(0)[0].model} |GPU: (1660 super OC)| Memory: ${Math.round(os.freemem() / 1024 / 1024 / 1024 * 10) / 10}GB free of ${Math.round(os.totalmem() / 1024 / 1024 / 1024 * 10) / 10}GB`;
    return hostinfo
}