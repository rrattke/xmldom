interface XMLReader {
    parse(source: string, defaultNSMap: Record<string, string>, entityMap: Record<string, string>): void;
}

export declare var XMLReader: {
    prototype: XMLReader;
    new(): XMLReader;
}
