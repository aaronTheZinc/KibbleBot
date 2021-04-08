"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.stringToMessage = void 0;
const SymCode = {
    B: 'block',
    E: 'emote',
    M: 'mention',
    U: 'link',
    T: 'text',
};
function stringToMessage(text) {
    return `T${text}`
        .replace(/\%/g, 'SYM_PERCENT')
        .replace(/\`([a-z0-9]+)\`/gi, (_, m) => `%B${m}%T`)
        .replace(/\` *([a-z0-9]+) *\`/gi, (_, m) => `%B${m}%T`)
        .replace(/\:([a-z0-9]+)\:/gi, (_, m) => `%E${m}%T`)
        .replace(/\@([a-zA-Z0-9]+)/gi, (_, m) => `%M${m}%T`)
        .replace(/(https?\:\/\/[^ ]+)/gi, (_, m) => `%U${m}%T`)
        .replace(/ *\%(.) */g, `%$1`)
        .split('%')
        .map(a => a.replace(/SYM_PERCENT/gi, '%'))
        .map(a => a.replace(/ +/g, ' ').trim())
        .filter(a => a.length > 1)
        .map(a => ({
        t: ((a[0] in SymCode) ? SymCode[a[0]] : null) || 'text',
        v: a.substr(1),
    }));
}
exports.stringToMessage = stringToMessage;
