# Ruby Better Highlighting

Modified grammar file for ruby that adds additional scopes for better syntax highlighting. It supports YARD doc and distinguishes every syntactic structure that is closed by `end` keyword and gives you ability to highlight them differently.

![example1](https://github.com/user-attachments/assets/072e64c7-1cf6-4041-8846-a4e0e987edef)

## Additional scopes

**Syntactic structures:**
`keyword.control.class.begin.ruby` for keyword `class`
`keyword.control.class.end.ruby` for keyword `end` that closes class
`meta.class.ruby` for everything between `class` and `end`

`keyword.control.module.begin.ruby` for keyword `module`
`keyword.control.module.end.ruby` for keyword `end` that closes module
`meta.module.ruby` for everything between `module` and `end`

`keyword.control.for.begin.ruby` for keyword `for`
`keyword.control.for.end.ruby` for keyword `end` that closes for loop
`meta.block.for.ruby` for everything between `for` and `end`

`keyword.control.do.begin.ruby` for keyword `do`
`keyword.control.do.end.ruby` for keyword `end` that closes do block
`meta.block.do.ruby` for everything between `do` and `end`

`keyword.control.begin.begin.ruby` for keyword `begin`
`keyword.control.begin.end.ruby` for keyword `end` that closes begin-end block
`meta.block.begin.ruby` for everything between `begin` and `end`

`keyword.control.conditional.case.begin.ruby` for keyword `case`
`keyword.control.conditional.case.end.ruby` for keyword `end` that closes case block
`meta.block.case.ruby` for everything between `case` and `end`

`keyword.control.conditional.if.begin.ruby` for keyword `if` (if block, not modifier)
`keyword.control.conditional.if.end.ruby` for keyword `end` that closes if block
`meta.block.if.ruby` for everything between `if` and `end`
`keyword.control.modifier.conditional.if.ruby` for `if` modifier in expressions like `perform if condition`

`keyword.control.conditional.unless.begin.ruby` for keyword `unless` (unless block, not modifier)
`keyword.control.conditional.unless.end.ruby` for keyword `end` that closes unless block
`meta.block.unless.ruby` for everything between `unless` and `end`
`keyword.control.modifier.conditional.unless.ruby` for `unless` modifier in expressions like `perform unless condition`

`keyword.control.while.begin.ruby` for keyword `while` (while block, not modifier)
`keyword.control.while.end.ruby` for keyword `end` that closes while block
`meta.block.while.ruby` for everything between `while` and `end`
`keyword.control.modifier.while.ruby` for `while` modifier in expressions like `perform while condition`

`keyword.control.until.begin.ruby` for keyword `until` (until block, not modifier)
`keyword.control.until.end.ruby` for keyword `end` that closes until block
`meta.block.until.ruby` for everything between `until` and `end`
`keyword.control.modifier.until.ruby` for `until` modifier in expressions like `perform until condition`

`keyword.control.def.begin.ruby` for keyword `def`
`keyword.control.def.end.ruby` for keyword `end` that closes method block
`meta.function.method.with-arguments.ruby` or `meta.function.method.without-arguments.ruby` for everything between `def` and `end`

`keyword.control.rescue.ruby` for keyword `rescue`
`keyword.control.ensure.ruby` for keyword `ensure`

`keyword.control.conditional.else.ruby` for keyword `else`
`keyword.control.conditional.elsif.ruby` for keyword `elsif`
`keyword.control.conditional.when.ruby` for keyword `when`
`keyword.control.conditional.then.ruby` for keyword `then`

`keyword.control.BEGIN.ruby` for keyword `BEGIN`
`keyword.control.END.ruby` for keyword `END`

`keyword.control.optional.do.ruby` for optional `do` like in for loop and while loop

`punctuation.accessor.singleton.ruby` for `<<` in expressions like `class << self`

Each `end` keyword is also assigned the scope `keyword.control.end.ruby`

**YARD:**
`comment.line.keyword.punctuation.yard.ruby` for `@` symbol in front of yard tags
`comment.line.keyword.yard.ruby` for yard tags like `param`, `return`, etc
`comment.line.parameter.yard.ruby` for parameter names
`comment.line.type.yard.ruby` for types
`comment.line.punctuation.yard.ruby` for `[]` symbols
`comment.line.string.yard.ruby` for comments
`comment.line.hashkey.yard.ruby` for key in `option` tag
`comment.line.defaultvalue.yard.ruby` for default value in `option` tag

## How To Highlight YARD In Your Current Theme

1. Open the Command Palette (Ctrl+Shift+P or Cmd+Shift+P on macOS).
2. Type Preferences: Open Settings (JSON) and select it.
3. Add or modify the `editor.tokenColorCustomizations` section.

```json
"editor.tokenColorCustomizations": {
  "textMateRules": [
    {
      "scope": [
        "comment.line.string.yard.ruby",
        "comment.line.punctuation.yard.ruby"
      ],
      "settings": {
        "foreground": "#878d85"
      }
    },
    {
      "scope": [
        "comment.line.type.yard.ruby"
      ],
      "settings": {
        "foreground": "#4EC9B0"
      }
    },
    {
      "scope": [
        "comment.line.parameter.yard.ruby",
      ],
      "settings": {
        "foreground": "#9CDCFE"
      }
    },
    {
      "scope": "comment.line.hashkey.yard.ruby",
      "settings": {
        "foreground": "#569CD6"
      }
    },
    {
      "scope": "comment.line.defaultvalue.yard.ruby",
      "settings": {
        "foreground": "#B5CEA8"
      }
    },
    {
      "scope": [
        "comment.line.keyword.yard.ruby",
        "comment.line.keyword.punctuation.yard.ruby"
      ],
      "settings": {
        "foreground": "#C586C0"
      }
    }
  ]
},
```

## How To Highlight Ruby Code Blocks differently

1. Open the Command Palette (Ctrl+Shift+P or Cmd+Shift+P on macOS).
2. Type Preferences: Open Settings (JSON) and select it.
3. Add or modify the `editor.tokenColorCustomizations` section.

```json
"editor.tokenColorCustomizations": {
  "textMateRules": [
    {
      "scope": "keyword.control.class",
      "settings": {
        "foreground": "#ffff00"
      }
    },
    {
      "scope": "keyword.control.module",
      "settings": {
        "foreground": "#00ffff"
      }
    },
    {
      "scope": "keyword.control.def",
      "settings": {
        "foreground": "#ff00ff"
      }
    }
  ]
},
```

**Enjoy!**
