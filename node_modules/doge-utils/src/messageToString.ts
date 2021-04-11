import { FormattedMessageChunk } from './format';

/**
 * Converts message tokens to string
 *
 * @export
 * @param {FormattedMessageChunk[]} tokens
 * @param {{
 * 	plain: boolean;
 * }} [{
 * 	plain,
 * }={
 * 	plain: false,
 * }]
 * @return {String} 
 */
export function messageToString (tokens: FormattedMessageChunk[], {
	plain,
}: {
	plain: boolean;
} = {
	plain: false,
}): string {
	return tokens
		.map(
			plain
			? (a => a?.v || '')
			: (({ t, v = ''}) => {
				switch (t) {
					case 'mention':
						return `@${v}`;
					case 'emote':
						return `:${v}:`;
					case 'block':
						return '`' + v + '`';
					default:
						return v;
				}
			})
		)
		.join(' ')
		.replace(/[\x00-\x20]+/g, ' ')
		.trim()
}
