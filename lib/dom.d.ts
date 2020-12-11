interface Node {
    /**
    * Returns the first child.
    */
    readonly firstChild: Node | null;
    /**
    * Returns the last child.
    */
    readonly lastChild: Node | null;
    /**
    * Returns the previous sibling.
    */
    readonly previousSibling: Node | null;
    /**
    * Returns the next sibling.
    */
    readonly nextSibling: Node | null;
    /**
     * Returns the children.
     */
    readonly childNodes: NodeListOf<Node>;
    /**
     * Returns the parent.
     */
    readonly parentNode: Node | null;
    /**
     * Returns the type of node.
     */
    readonly nodeType: number;
    nodeValue: string | null;
    /**
     * Returns the node document. Returns null for documents.
     */
    readonly ownerDocument: Document | null;
    /** @deprecated */
    readonly namespaceURI: string | null;
    textContent: string | null;
    insertBefore<T extends Node>(newChild: T, refChild: Node | null): T;
    replaceChild<T extends Node>(newChild: Node, oldChild: T): T;
    removeChild<T extends Node>(oldChild: T): T;
    appendChild<T extends Node>(newChild: T): T;
    hasChildNodes(): boolean;
    /**
     * Returns a copy of node. If deep is true, the copy also includes the node's descendants.
     */
    cloneNode(deep?: boolean): Node;
    /**
     * Removes empty exclusive Text nodes and concatenates the data of remaining contiguous exclusive Text nodes into the first of their nodes.
     */
    normalize(): void;
    isSupported(feature: string, version: string): boolean; // not defined
    hasAttributes(): boolean; // from Element
    lookupPrefix(namespace: string | null): string | null;
    lookupNamespaceURI(prefix: string | null): string | null;
    isDefaultNamespace(namespace: string | null): boolean;
}

export declare var Node: {
    prototype: Node;
    new(): Node;
    readonly ATTRIBUTE_NODE: number;
    /**
     * node is a CDATASection node.
     */
    readonly CDATA_SECTION_NODE: number;
    /**
     * node is a Comment node.
     */
    readonly COMMENT_NODE: number;
    /**
     * node is a DocumentFragment node.
     */
    readonly DOCUMENT_FRAGMENT_NODE: number;
    /**
     * node is a document.
     */
    readonly DOCUMENT_NODE: number;
    /**
     * node is a doctype.
     */
    readonly DOCUMENT_TYPE_NODE: number;
    /**
     * node is an element.
     */
    readonly ELEMENT_NODE: number;
    readonly ENTITY_NODE: number;
    readonly ENTITY_REFERENCE_NODE: number;
    readonly NOTATION_NODE: number;
    /**
     * node is a ProcessingInstruction node.
     */
    readonly PROCESSING_INSTRUCTION_NODE: number;
    /**
     * node is a Text node.
     */
    readonly TEXT_NODE: number;
};

/** An abnormal event (called an exception) which occurs as a result of calling a method or accessing a property of a web API. */
interface DOMException {
    readonly code: number;
    readonly message: string;
    readonly DOMSTRING_SIZE_ERR: number;
    readonly HIERARCHY_REQUEST_ERR: number;
    readonly INDEX_SIZE_ERR: number;
    readonly INUSE_ATTRIBUTE_ERR: number;
    readonly INVALID_ACCESS_ERR: number;
    readonly INVALID_CHARACTER_ERR: number;
    readonly INVALID_MODIFICATION_ERR: number;
    readonly NAMESPACE_ERR: number;
    readonly NOT_SUPPORTED_ERR: number;
    readonly NO_DATA_ALLOWED_ERR: number;
    readonly NO_MODIFICATION_ALLOWED_ERR: number;
    readonly SYNTAX_ERR: number;
    readonly WRONG_DOCUMENT_ERR: number;
}

export declare var DOMException: {
    prototype: DOMException;
    new(message?: string, name?: string): DOMException;
    readonly DOMSTRING_SIZE_ERR: number;
    readonly HIERARCHY_REQUEST_ERR: number;
    readonly INDEX_SIZE_ERR: number;
    readonly INUSE_ATTRIBUTE_ERR: number;
    readonly INVALID_ACCESS_ERR: number;
    readonly INVALID_CHARACTER_ERR: number;
    readonly INVALID_MODIFICATION_ERR: number;
    readonly NAMESPACE_ERR: number;
    readonly NOT_SUPPORTED_ERR: number;
    readonly NO_DATA_ALLOWED_ERR: number;
    readonly NO_MODIFICATION_ALLOWED_ERR: number;
    readonly SYNTAX_ERR: number;
    readonly WRONG_DOCUMENT_ERR: number;
};

/** An object providing methods which are not dependent on any particular document. Such an object is returned by the Document.implementation property. */
interface DOMImplementation {
    createDocument(namespaceURI: string | null, qualifiedName: string | null, doctype: DocumentType | null): Document;
    createDocumentType(qualifiedName: string, publicId: string, systemId: string): DocumentType;
    createHTMLDocument(title?: string): Document;
    /** @deprecated */
    hasFeature(...args: any[]): true;
}

export declare var DOMImplementation: {
    prototype: DOMImplementation;
    new(): DOMImplementation;
};

/** A Node containing a doctype. */
interface DocumentType extends Node {
    readonly name: string;
    readonly ownerDocument: Document;
    readonly publicId: string;
    readonly systemId: string;
}

export declare var DocumentType: {
    prototype: DocumentType;
    new(): DocumentType;
};

interface Attr extends Node {
    readonly localName: string;
    readonly namespaceURI: string | null;
    readonly ownerDocument: Document;
    readonly prefix: string | null;
}

export declare var Attr: {
    prototype: Attr;
    new(): Attr;
};

interface NonElementParentNode {
    /**
     * Returns the first element within node's descendants whose ID is elementId.
     */
    getElementById(elementId: string): Element | null;
}

interface NodeList {
    /**
     * Returns the number of nodes in the collection.
     */
    readonly length: number;
    /**
     * Returns the node with index index from the collection. The nodes are sorted in tree order.
     */
    item(index: number): Node | null;
    [index: number]: Node;
}

export declare var NodeList: {
    prototype: NodeList;
    new(): NodeList;
};

interface NodeListOf<TNode extends Node> extends NodeList {
    length: number;
    item(index: number): TNode;
    [index: number]: TNode;
}

/** A collection of Attr objects. Objects inside a NamedNodeMap are not in any particular order, unlike NodeList, although they may be accessed by an index as in an array. */
interface NamedNodeMap {
    readonly length: number;
    getNamedItem(qualifiedName: string): Attr | null;
    getNamedItemNS(namespace: string | null, localName: string): Attr | null;
    item(index: number): Attr | null;
    removeNamedItem(qualifiedName: string): Attr;
    removeNamedItemNS(namespace: string | null, localName: string): Attr;
    setNamedItem(attr: Attr): Attr | null;
    setNamedItemNS(attr: Attr): Attr | null;
    [index: number]: Attr;
}

export declare var NamedNodeMap: {
    prototype: NamedNodeMap;
    new(): NamedNodeMap;
};

interface Element extends Node {
    readonly attributes: NamedNodeMap;
    /**
     * Returns the value of element's id content attribute. Can be set to change it.
     */
    id: string;
    /**
     * Returns the local name.
     */
    readonly localName: string;
    /**
     * Returns the namespace.
     */
    readonly namespaceURI: string | null;
    readonly ownerDocument: Document;
    /**
     * Returns the namespace prefix.
     */
    readonly prefix: string | null;
    /**
     * Returns the HTML-uppercased qualified name.
     */
    readonly tagName: string;
    /**
     * Returns true if element has an attribute whose qualified name is qualifiedName, and false otherwise.
     */
    hasAttribute(qualifiedName: string): boolean;
    /**
     * Returns element's first attribute whose qualified name is qualifiedName, and null if there is no such attribute otherwise.
     */
    getAttribute(qualifiedName: string): string | null;
    getAttributeNode(name: string): Attr | null;
    /**
     * Sets the value of element's first attribute whose qualified name is qualifiedName to value.
     */
    setAttribute(qualifiedName: string, value: string): void;
    /**
     * Removes element's first attribute whose qualified name is qualifiedName.
     */
    removeAttribute(qualifiedName: string): void;
    // appendChild
    setAttributeNode(attr: Attr): Attr | null;
    setAttributeNodeNS(attr: Attr): Attr | null;
    removeAttributeNode(attr: Attr): Attr;
    removeAttributeNS(namespace: string | null, localName: string): void;
    /**
     * Returns true if element has an attribute whose namespace is namespace and local name is localName.
     */
    hasAttributeNS(namespace: string | null, localName: string): boolean;
    /**
     * Returns element's attribute whose namespace is namespace and local name is localName, and null if there is no such attribute otherwise.
     */
    getAttributeNS(namespace: string | null, localName: string): string | null;
    /**
     * Sets the value of element's attribute whose namespace is namespace and local name is localName to value.
     */
    setAttributeNS(namespace: string | null, qualifiedName: string, value: string): void;
    getAttributeNodeNS(namespaceURI: string, localName: string): Attr | null;
    getElementsByTagName(qualifiedName: string): NodeListOf<Element>;
    getElementsByTagNameNS(namespaceURI: string, localName: string): NodeListOf<Element>;
}

export declare var Element: {
    prototype: Element;
    new(): Element;
};

interface CharacterData extends Node {
    data: string;
    readonly length: number;
    readonly ownerDocument: Document;
    appendData(data: string): void;
    deleteData(offset: number, count: number): void;
    insertData(offset: number, data: string): void;
    replaceData(offset: number, count: number, data: string): void;
    substringData(offset: number, count: number): string;
}

export declare var CharacterData: {
    prototype: CharacterData;
    new(): CharacterData;
};

interface Text extends CharacterData {
    /**
     * Splits data at the given offset and returns the remainder as Text node.
     */
    splitText(offset: number): Text;
}

export declare var Text: {
    prototype: Text;
    new(data?: string): Text;
};

interface Comment extends CharacterData {
}

export declare var Comment: {
    prototype: Comment;
    new(data?: string): Comment;
};

/** A minimal document object that has no parent. It is used as a lightweight version of Document that stores a segment of a document structure comprised of nodes just like a standard document. The key difference is that because the document fragment isn't part of the active document tree structure, changes made to the fragment don't affect the document, cause reflow, or incur any performance impact that can occur when changes are made. */
interface DocumentFragment extends Node, NonElementParentNode {
    readonly ownerDocument: Document;
}

export declare var DocumentFragment: {
    prototype: DocumentFragment;
    new(): DocumentFragment;
};

interface EntityReference extends Node {
}

export declare var EntityReference: {
    prototype: EntityReference;
    new(): EntityReference;
};

/** A processing instruction embeds application-specific instructions in XML which can be ignored by other applications that don't recognize them. */
interface ProcessingInstruction extends CharacterData {
    readonly ownerDocument: Document;
    readonly target: string;
}

export declare var ProcessingInstruction: {
    prototype: ProcessingInstruction;
    new(): ProcessingInstruction;
};

/** A CDATA section that can be used within XML to include extended portions of unescaped text. The symbols < and & don’t need escaping as they normally do when inside a CDATA section. */
interface CDATASection extends Text {
}

export declare var CDATASection: {
    prototype: CDATASection;
    new(): CDATASection;
};

interface Document extends Node, NonElementParentNode {
    /**
    * Gets an object representing the document type declaration associated with the current document.
    */
    readonly doctype: DocumentType | null;
    /**
     * Gets a reference to the root node of the document.
     */
    readonly documentElement: Element;
    /**
     * Returns a copy of node. If deep is true, the copy also includes the node's descendants.
     * 
     * If node is a document or a shadow root, throws a "NotSupportedError" DOMException.
     */
    importNode<T extends Node>(importedNode: T, deep: boolean): T;
    /**
     * Returns a reference to the first object with the specified value of the ID or NAME attribute.
     * @param elementId String that specifies the ID value. Case-insensitive.
     */
    getElementById(elementId: string): Element | null;
    /**
     * Returns a NodeList of the elements in the object on which the method was invoked (a document or an element) that have all the classes given by classNames. The classNames argument is interpreted as a space-separated list of classes.
     */
    getElementsByClassName(classNames: string): NodeListOf<Element>;
    /**
     * Creates an instance of the element for the specified tag.
     * @param tagName The name of an element.
     */
    createElement(tagName: string): Element;
    /**
    * Creates a new document.
    */
    createDocumentFragment(): DocumentFragment;
    /**
     * Creates a text string from the specified value.
     * @param data String that specifies the nodeValue property of the text node.
     */
    createTextNode(data: string): Text;
    /**
     * Creates a comment object with the specified data.
     * @param data Sets the comment object's data.
     */
    createComment(data: string): Comment;
    /**
    * Returns a CDATASection node whose data is data.
    */
    createCDATASection(data: string): CDATASection;
    /**
    * Returns a ProcessingInstruction node whose target is target and data is data. If target does not match the Name production an "InvalidCharacterError" DOMException will be thrown. If data contains "?>" an "InvalidCharacterError" DOMException will be thrown.
    */
    createProcessingInstruction(target: string, data: string): ProcessingInstruction;
    /**
    * Creates an attribute object with a specified name.
    * @param name String that sets the attribute object's name.
    */
    createAttribute(localName: string): Attr;
    createAttributeNS(namespace: string | null, qualifiedName: string): Attr;
    createEntityReference(name: string): EntityReference;
    createElementNS(namespaceURI: string | null, qualifiedName: string): Element;
}

export declare var Document: {
    prototype: Document;
    new(): Document;
};

/** Provides the serializeToString() method to construct an XML string representing a DOM tree. */
interface XMLSerializer {
    serializeToString(root: Node): string;
}

export declare var XMLSerializer: {
    prototype: XMLSerializer;
    new(): XMLSerializer;
};
