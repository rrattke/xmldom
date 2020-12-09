import { Document } from "./dom";
export { DOMImplementation, XMLSerializer } from "./dom";

type DOMParserSupportedType = "application/xhtml+xml" | "application/xml" | "image/svg+xml" | "text/html" | "text/xml";

/** Provides the ability to parse XML or HTML source code from a string into a DOM Document. */
interface DOMParser {
    /**
     * Parses string using either the HTML or XML parser, according to type, and returns the resulting Document. type can be "text/html" (which will invoke the HTML parser), or any of "text/xml", "application/xml", "application/xhtml+xml", or "image/svg+xml" (which will invoke the XML parser).
     *
     * For the XML parser, if string cannot be parsed, then the returned Document will contain elements describing the resulting error.
     *
     * Note that script elements are not evaluated during parsing, and the resulting document's encoding will always be UTF-8.
     *
     * Values other than the above for type will cause a TypeError exception to be thrown.
     */
    parseFromString(string: string, type?: DOMParserSupportedType): Document;
}

export declare var DOMParser: {
    prototype: DOMParser;
    new(options?: DOMParserOptions): DOMParser;
};

interface Locator {
    lineNumber: number;
    columnNumber: number;
}

interface DOMParserOptions {
    domBuilder: DOMHandler;
    errorHandler: ErrorHandler | ((key: "warning" | "error" | "fatalError", message: string) => void);
    locator: Locator;
    xmlns: Record<string,string>;
}

interface ElementAttributes {
    readonly length: number;
    setTagName(tagName: string): void;
    add(qName: string, value: string, offset: number): void;
    getLocalName(i: number): string;
    getLocator(i: number): string;
    getQName(i: number): string;
    getURI(i: number): string;
    getValue(i: number): string;
}

interface ErrorHandler {
    /**
     * @see org.xml.sax.ErrorHandler
     * @link http://www.saxproject.org/apidoc/org/xml/sax/ErrorHandler.html
     */
    warning(error: string): void;
    error(error: string): void;
    fatalError(error: string): void;
}

interface ContentHandler {
    characters(chars: string, start: number, length: number): void;
    endDocument(): void;
    endElement(namespaceURI: string, localName: string, qName: string): void;
    endPrefixMapping(prefix: string): void;
    ignorableWhitespace(ch: string, start: number, length: number): void;
    processingInstruction(target: string, data: string): void;
    setDocumentLocator(locator: Locator): void;
    skippedEntity(name: string): void;
    startDocument(): void;
    startElement(namespaceURI: string, localName: string, qName: string, attrs: ElementAttributes): void;
    startPrefixMapping(prefix: string, uri: string): void;
}

interface LexicalHandler {
    comment(chars: string, start: number, length: number): void;
    endCDATA(): void;
    startCDATA(): void;
    startDTD(name: string, publicId: string, systemId: string): void;
}

interface DOMHandler extends ContentHandler, ErrorHandler, LexicalHandler {
}
