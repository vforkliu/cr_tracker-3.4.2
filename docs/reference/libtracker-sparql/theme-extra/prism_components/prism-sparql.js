/* Original at https://github.com/PrismJS/prism.git, under MIT license.
 * Plus adaptions to make it work on ancient prism as used by hotdoc,
 * and our own keywords.
 */
Prism.languages.sparql = {
	'comment': {
		pattern: /#.*/,
		greedy: true
	},
	'multiline-string': {
		pattern: /"""(?:(?:""?)?(?:[^"\\]|\\.))*"""|'''(?:(?:''?)?(?:[^'\\]|\\.))*'''/,
		greedy: true,
		alias: 'string',
		inside: {
			'comment': /#.*/
		}
	},
	'string': {
		pattern: /"(?:[^\\"\r\n]|\\.)*"|'(?:[^\\'\r\n]|\\.)*'/,
		greedy: true
	},
	'url': {
		pattern: /<(?:[^\x00-\x20<>"{}|^`\\]|\\(?:u[\da-fA-F]{4}|U[\da-fA-F]{8}))*>/,
		greedy: true,
		inside: {
			'punctuation': /[<>]/
		}
	},
	'function': {
		pattern: /(?:(?![-.\d\xB7])[-.\w\xB7\xC0-\uFFFD]+)?:(?:(?![-.])(?:[-.:\w\xC0-\uFFFD]|%[\da-f]{2}|\\.)+)?/i,
		inside: {
			'local-name': {
				pattern: /([^:]*:)[\s\S]+/,
				lookbehind: true
			},
			'prefix': {
				pattern: /[\s\S]+/,
				inside: {
					'punctuation': /:/
				}
			}
		}
	},
	'number': /[+-]?\b\d+(?:\.\d*)?(?:e[+-]?\d+)?/i,
	'punctuation': /[{}.,;()[\]]|\^\^/,
	'boolean': /\b(?:true|false)\b/i,
	'keyword': [
		/\b(?:A|ADD|ALL|AS|ASC|ASK|BNODE|BY|CLEAR|CONSTRAINT|CONSTRUCT|COPY|CREATE|DATA|DEFAULT|DELETE|DESC|DESCRIBE|DISTINCT|DROP|EXISTS|FILTER|FROM|GROUP|HAVING|INSERT|INTO|LIMIT|LOAD|MINUS|MOVE|NAMED|NOT|NOW|OFFSET|OPTIONAL|OR|ORDER|RAND|REDUCED|REPLACE|SELECT|SEPARATOR|SERVICE|SILENT|STRUUID|UNION|USING|UUID|VALUES|WHERE)\b/i,
		/\b(?:ABS|AVG|BIND|BOUND|CEIL|COALESCE|CONCAT|CONTAINS|COUNT|DATATYPE|DAY|ENCODE_FOR_URI|FLOOR|GROUP_CONCAT|HOURS|IF|IRI|isBLANK|isIRI|isLITERAL|isNUMERIC|isURI|LANG|LANGMATCHES|LCASE|MAX|MD5|MIN|MINUTES|MONTH|ROUND|REGEX|REPLACE|sameTerm|SAMPLE|SECONDS|SHA1|SHA256|SHA384|SHA512|STR|STRAFTER|STRBEFORE|STRDT|STRENDS|STRLANG|STRLEN|STRSTARTS|SUBSTR|SUM|TIMEZONE|TZ|UCASE|URI|YEAR)\b(?=\s*\()/i,
		/\b(?:GRAPH|BASE|PREFIX)\b/i,
		/(?:\ba|@prefix|@base)\b|=/,
		/\b(?:graph|base|prefix)\b/i
	],
	'variable': {
		pattern: /[?$]\w+/,
		greedy: true
	},
	'tag': {
		pattern: /@[a-z]+(?:-[a-z\d]+)*/i,
		inside: {
			'punctuation': /@/
		}
	}
};
Prism.languages.rq = Prism.languages.sparql;
