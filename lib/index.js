var sax = require('./sax');
var dom = require('./dom');
var entities = require('./entities');
var domParser = require('./dom-parser');

exports.XMLReader = sax.XMLReader;

exports.DOMException = dom.DOMException;
exports.NodeList = dom.NodeList;
exports.NamedNodeMap = dom.NamedNodeMap;
exports.DOMImplementation = dom.DOMImplementation;
exports.Node = dom.Node;
exports.Document = dom.Document;
exports.Element = dom.Element;
exports.Document = dom.Document;
exports.Attr = dom.Attr;
exports.CharacterData = dom.CharacterData;
exports.Text = dom.Text;
exports.Comment = dom.Comment;
exports.CDATASection = dom.CDATASection;
exports.DocumentType = dom.DocumentType;
exports.Notation = dom.Notation;
exports.Entity = dom.Entity;
exports.EntityReference = dom.EntityReference;
exports.DocumentFragment = dom.DocumentFragment;
exports.ProcessingInstruction = dom.ProcessingInstruction;
exports.XMLSerializer = dom.XMLSerializer;
exports.Node = dom.Node;

exports.entityMap = entities.entityMap;

exports.DOMParser = domParser.DOMParser;
