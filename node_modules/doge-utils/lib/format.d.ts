export declare type UnformattedMessageChunk = UnformattedMessageChunkLiteral | UnformattedMessageChunkObject;
export declare type UnformattedMessageChunkLiteral = number | string | bigint | boolean;
export declare type UnformattedMessageChunkObject = UnformattedMessageChunk[] | FormattedMessageChunk | UMC_Emote | UMC_URL | UMC_URI | UMC_Link | UMC_Mention | UMC_Block | UMC_Undefined;
interface UMC_Emote {
    emote: string;
}
interface UMC_URL {
    url: string;
}
interface UMC_URI {
    uri: string;
}
interface UMC_Link {
    link: string;
}
interface UMC_Mention {
    mention: string;
}
interface UMC_Block {
    block: string;
}
interface UMC_Undefined {
    [index: string]: string;
}
export interface FormattedMessageChunk {
    t: 'text' | 'mention' | 'link' | 'emote' | 'block';
    v: string;
}
export declare function format(...args: UnformattedMessageChunk[]): FormattedMessageChunk[];
export {};
