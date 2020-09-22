export declare function getConverter(): Promise<Renderer>;
export interface Renderer {
    renderMarkdown(md: string): string;
    renderMarkdownAsPage(md: string, title?: string): string;
}
