
Blockly.Blocks.actions = {};

/**
 * Common HSV hue for all blocks in this category.
 */
Blockly.Blocks.actions.HUE = 190;

/**
 * Left turn arrow to be appended to messages.
 */
Blockly.Blocks.actions.LEFT_TURN = ' \u21BA';

/**
 * Right turn arrow to be appended to messages.
 */
Blockly.Blocks.actions.RIGHT_TURN = ' \u21BB';

/**
 * Turtle block definitions
 */
/*
Blockly.Blocks.actions_strawberry = {
  init: function() {
    this.appendDummyInput()
        .appendField("pojej 1 jagodo");
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
*/
Blockly.Blocks.actions_forward = {
    init: function() {
        this.jsonInit({
            message0: "premakni se naprej",
            previousStatement: null,
            nextStatement: null,
            colour: Blockly.Blocks.actions.HUE,
            tooltip: "",
        })
    }
};

Blockly.Blocks.actions_backward = {
    init: function() {
        this.jsonInit({
            message0: "premakni se nazaj",
            previousStatement: null,
            nextStatement: null,
            colour: Blockly.Blocks.actions.HUE,
            tooltip: "",
        })
    }
};

Blockly.Blocks.actions_upward = {
    init: function() {
        this.jsonInit({
            message0: "premakni se navzgor",
            previousStatement: null,
            nextStatement: null,
            colour: Blockly.Blocks.actions.HUE,
            tooltip: "",
        })
    }
};

Blockly.Blocks.actions_downward = {
    init: function() {
        this.jsonInit({
            message0: "premakni se navzdol",
            previousStatement: null,
            nextStatement: null,
            colour: Blockly.Blocks.actions.HUE,
            tooltip: "",
        })
    }
};

Blockly.Blocks.actions_move = {
    init: function() {
        this.jsonInit({
            message0: "premakni se %1 za %2 pikslov",
            args0: [{
                type: "field_dropdown",
                name: "DIR",
                options: [
                    ["naprej", "FORWARD"],
                    ["nazaj", "BACKWARD"],
                    ["navzgor", "UPWARD"],
                    ["navzdol", "DOWNWARD"]
                ]
            }, {
                type: "field_number",
                name: "VALUE",
                value: 0
            }],
			inputsInline: true,
            previousStatement: null,
            nextStatement: null,
            colour: Blockly.Blocks.actions.HUE,
            tooltip: "",
        })
    }
};

Blockly.Blocks.actions_jump = {
    init: function() {
        this.jsonInit({
            message0: "skoči %1 za %2 pikslov",
            args0: [{
                type: "field_dropdown",
                name: "DIR",
                options: [
                    ["naprej", "FORWARD"],
                    ["nazaj", "BACKWARD"],
                    ["navzgor", "UPWARD"],
                    ["navzdol", "DOWNWARD"]
                ]
            }, {
                type: "field_number",
                name: "VALUE",
                value: 0
            }],
			inputsInline: true,
            previousStatement: null,
            nextStatement: null,
            colour: Blockly.Blocks.actions.HUE,
            tooltip: "",
        })
    }
};

Blockly.Blocks.actions_leftright = {
    init: function() {
        this.jsonInit({
            message0: "obrni se %1",
            args0: [{
                type: "field_dropdown",
                name: "DIR",
                options: [
                    ["levo"+Blockly.Blocks.actions.LEFT_TURN, "LEFT"],
                    ["desno"+Blockly.Blocks.actions.RIGHT_TURN, "RIGHT"]
                ]
            }],
			inputsInline: true,
            previousStatement: null,
            nextStatement: null,
            colour: Blockly.Blocks.actions.HUE,
            tooltip: "",
        })
    }
};

Blockly.Blocks.actions_turn = {
    init: function() {
        this.jsonInit({
            message0: "obrni se %1 za %2 stopinj",
            args0: [{
                type: "field_dropdown",
                name: "DIR",
                options: [
                    ["levo"+Blockly.Blocks.actions.LEFT_TURN, "LEFT"],
                    ["desno"+Blockly.Blocks.actions.RIGHT_TURN, "RIGHT"]
                ]
            }, {
                type: "field_number",
                name: "ANGLE",
                value: 0
            }],
			inputsInline: true,
            previousStatement: null,
            nextStatement: null,
            colour: Blockly.Blocks.actions.HUE,
            tooltip: "",
        })
    }
};

Blockly.Blocks.actions_repeatUntilImage = {
    init: function() {
        this.jsonInit({
            message0: "ponavljaj do %1 %2 izvedi %3",
            args0: [{
                type: "field_dropdown",
                name: "DIR",
                options: [
                    [
					  {
						"src": "data:image/png;base64,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",
						"width": 35,
						"height": 35,
						"alt": "*"
					  },
					  "GHOST"
					],
					[
					  {
						"src": "data:image/png;base64,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",
						"width": 35,
						"height": 35,
						"alt": "*"
					  },
					  "SKULL"
					],
					[
					  {
						"src": "data:image/png;base64,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",
						"width": 35,
						"height": 35,
						"alt": "*"
					  },
					  "PACMAN"
					],
					[
					  {
						"src": "data:image/png;base64,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",
						"width": 35,
						"height": 35,
						"alt": "*"
					  },
					  "FLOWER"
					]
                ]
            }, {
                type: "input_dummy"
            }, {
                type: "input_statement",
                name: "NAME"
            }],
			inputsInline: true,
            previousStatement: null,
            nextStatement: null,
            colour: 320,
            tooltip: "",
        })
    }
};

Blockly.Blocks.actions_strawberry = {
    init: function() {
        this.jsonInit({
            message0: "pojej 1 jagodo",
            previousStatement: null,
            nextStatement: null,
            colour: Blockly.Blocks.actions.HUE,
            tooltip: "",
        })
    }
};

Blockly.Blocks.actions_whileCondition = {
    init: function() {
        this.jsonInit({
            message0: "dokler %1 %2 izvedi %3",
            args0: [{
			  "type": "field_input",
			  "name": "CONDITION",
			  "text": "je pot naprej"
			}, {
			  "type": "input_dummy"
			}, {
			  "type": "input_statement",
			  "name": "NAME"
			}],
			"previousStatement": null,
			"nextStatement": null,
			"colour": 320,
			"tooltip": "",
			"helpUrl": ""
        })
    }
};

Blockly.Blocks.actions_repeatCondition = {
    init: function() {
        this.jsonInit({
            message0: "ponavljaj %1 %2 izvedi %3",
            args0: [{
			  "type": "field_input",
			  "name": "CONDITION",
			  "text": "dejanje"
			}, {
			  "type": "input_dummy"
			}, {
			  "type": "input_statement",
			  "name": "NAME"
			}],
			"previousStatement": null,
			"nextStatement": null,
			"colour": 320,
			"tooltip": "",
			"helpUrl": ""
        })
    }
};

Blockly.Blocks.actions_ifPath = {
    init: function() {
        this.jsonInit({
            message0: "če je pot %1 %2 izvedi %3 sicer %4",
            args0: [{
			  "type": "field_dropdown",
			  "name": "DIR",
			  "options": [
				["naprej", "AHEAD"],
				["na levo"+Blockly.Blocks.actions.LEFT_TURN, "TOLEFT"],
				["na desno"+Blockly.Blocks.actions.RIGHT_TURN, "TORIGHT"]
			  ]
			}, {
			  "type": "input_dummy"
			}, {
			  "type": "input_statement",
			  "name": "NAME"
			}, {
			  "type": "input_statement",
			  "name": "NAME"
			}],
			"previousStatement": null,
			"nextStatement": null,
			"colour": 200,
			"tooltip": "",
			"helpUrl": ""
        })
    }
};

Blockly.Blocks.actions_ifCondition = {
    init: function() {
        this.jsonInit({
            message0: "če %1 %2 izvedi %3",
            args0: [{
			  "type": "field_input",
			  "name": "CONDITION",
			  "text": "pogoj"
			}, {
			  "type": "input_dummy"
			}, {
			  "type": "input_statement",
			  "name": "NAME"
			}],
			"previousStatement": null,
			"nextStatement": null,
			"colour": 200,
			"tooltip": "",
			"helpUrl": ""
        })
    }
};

/*
Blockly.Blocks.actions_turn = {
    init: function() {
        this.jsonInit({
            message0: "obrni se %1 za %2",
            args0: [{
                type: "field_dropdown",
                name: "DIR",
                options: [
                    ["levo", "LEFT"],
                    ["desno", "RIGHT"]
                ]
            }, {
                type: "input_value",
                name: "ANGLE",
                check: "Number"
            }],
            previousStatement: null,
            nextStatement: null,
            colour: Blockly.Blocks.actions.HUE,
            tooltip: "Obrne želvo levo ali desno.",
        })
    }
};

Blockly.Blocks.actions_width = {
    init: function() {
        this.jsonInit({
            message0: "nastavi širino na %1",
            args0: [{
                type: "input_value",
                name: "WIDTH",
                check: "Number"
            }],
            inputsInline: false,
            previousStatement: null,
            nextStatement: null,
            colour: Blockly.Blocks.actions.HUE,
            tooltip: "Nastavi širino črte, ki jo riše svinčnik.",
        })
    }
};

Blockly.Blocks.actions_pen = {
    init: function() {
        this.jsonInit({
            message0: "svinčnik %1",
            args0: [{
                type: "field_dropdown",
                name: "PEN",
                options: [
                    ["dol", "DOWN"],
                    ["gor", "UP"]
                ]
            }],
            previousStatement: null,
            nextStatement: null,
            colour: Blockly.Blocks.actions.HUE,
            tooltip: "Spusti ali dvigne svinčnik.",
        })
    }
};

Blockly.Blocks.actions_show = {
    init: function() {
        this.jsonInit({
            message0: "%1 želvo",
            args0: [{
                type: "field_dropdown",
                name: "VISIBLE",
                options: [
                    ["pokaži", "SHOW"],
                    ["skrij", "HIDE"]
                ]
            }],
            previousStatement: null,
            nextStatement: null,
            colour: Blockly.Blocks.actions.HUE,
            tooltip: "Pokaže ali skrije želvo.",
        })
    }
};

Blockly.Blocks.actions_shape = {
    init: function() {
        this.jsonInit({
            message0: "nastavi obliko želve na %1",
            args0: [{
                type: "field_dropdown",
                name: "SHAPE",
                options: [
                    ["klasično", "CLASSIC"],
                    ["krog", "CIRCLE"],
                    ["kvadrat", "SQUARE"],
                    ["puščica", "ARROW"],
                    ["trikotnik", "TRIANGLE"],
                    ["želva", "TURTLE"]
                ]
            }],
            previousStatement: null,
            nextStatement: null,
            colour: Blockly.Blocks.actions.HUE,
            tooltip: "Nastavi obliko želve na izbrano obliko.",
        })
    }
};

Blockly.Blocks.actions_setpos = {
    init: function() {
        this.jsonInit({
            message0: "nastavi položaj na %1 in %2",
            args0: [{
                type: "input_value",
                name: "POSX",
                check: "Number",
            }, {
                type: "input_value",
                name: "POSY",
                check: "Number",
            }],
            inputsInline: true,
            previousStatement: null,
            nextStatement: null,
            colour: Blockly.Blocks.actions.HUE,
            tooltip: "Nastavi položaj želve na dani koordinati.",
        })
    }
};

Blockly.Blocks.actions_color = {
    init: function() {
        this.jsonInit({
            message0: "nastavi barvo na %1",
            args0: [{
                type: "field_colour",
                name: "COLOR",
                colour: "#000000"
            }],
            previousStatement: null,
            nextStatement: null,
            colour: Blockly.Blocks.actions.HUE,
            tooltip: "Nastavi barvo svinčnika na izbrano barvo.",
        })
    }
};

Blockly.Blocks.actions_bgcolor = {
    init: function() {
        this.jsonInit({
            message0: "nastavi barvo ozadja na %1",
            args0: [{
                type: "field_colour",
                name: "COLOR",
                colour: "#ffcc66"
            }],
            previousStatement: null,
            nextStatement: null,
            colour: Blockly.Blocks.actions.HUE,
            tooltip: "Nastavi barvo ozadja na izbrano barvo.",
        })
    }
};

Blockly.Blocks.actions_circle = {
    init: function() {
        this.jsonInit({
            message0: "nariši krog s polmerom %1",
            args0: [{
                type: "input_value",
                name: "RADIUS",
                check: "Number"
            }],
            inputsInline: false,
            previousStatement: null,
            nextStatement: null,
            colour: Blockly.Blocks.actions.HUE,
            tooltip: "Nariše krožni lok z danim polmerom in kotom.",
        })
    }
};

Blockly.Blocks.actions_arc = {
    init: function() {
        this.jsonInit({
            message0: "nariši lok s polmerom %1 in kotom %2",
            args0: [{
                type: "input_value",
                name: "RADIUS",
                check: "Number",
            }, {
                type: "input_value",
                name: "ANGLE",
                check: "Number",
            }],
            inputsInline: true,
            previousStatement: null,
            nextStatement: null,
            colour: Blockly.Blocks.actions.HUE,
            tooltip: "Nariše krožni lok z danim polmerom in kotom.",
        })
    }
};

Blockly.Blocks.actions_pos = {
    init: function() {
        this.jsonInit({
            message0: "vrni položaj želve",
            output: null,
            colour: Blockly.Blocks.actions.HUE,
            tooltip: "Vrne trnutni položaj želve.",
        })
    }
};

Blockly.Blocks.actions_isdown = {
    init: function() {
        this.jsonInit({
            message0: "svinčnik riše",
            output: null,
            colour: Blockly.Blocks.actions.HUE,
            tooltip: "Vrne resnično, če svinčnik riše, sicer vrne neresnično.",
        })
    }
};

Blockly.Blocks.actions_reset = {
    init: function() {
        this.jsonInit({
            message0: "počisti vse",
            previousStatement: null,
            nextStatement: null,
            colour: Blockly.Blocks.actions.HUE,
            tooltip: "Počisti celotno risalno površino.",
        })
    }
};
*/

/**
 * Turtle block generator functions
 */

Blockly.Python['actions_forward'] = function(block) {
  var code = 'naprej()';
  return code;
};

Blockly.Python['actions_backward'] = function(block) {
  var code = 'nazaj()';
  return code;
};

Blockly.Python['actions_upward'] = function(block) {
  var code = 'navzgor()';
  return code;
};

Blockly.Python['actions_downward'] = function(block) {
  var code = 'navzdol()';
  return code;
};

Blockly.Python['actions_move'] = function(block) {
  var code = '';
  var dir = block.getFieldValue('DIR');
  var value = Blockly.Python.valueToCode(block, 'VALUE', Blockly.Python.ORDER_ATOMIC);
  if (dir == 'FORWARD') {
      code = 'naprej(' + value + ')';
  }
  if (dir == 'BACKWARD') {
      code = 'nazaj(' + value + ')';
  }
  if (dir == 'UPWARD') {
      code = 'navzgor(' + value + ')';
  }
  if (dir == 'DOWNWARD') {
      code = 'navzdol(' + value + ')';
  }
  return code;
};

Blockly.Python['actions_jump'] = function(block) {
  var code = '';
  var dir = block.getFieldValue('DIR');
  var value = Blockly.Python.valueToCode(block, 'VALUE', Blockly.Python.ORDER_ATOMIC);
  if (dir == 'FORWARD') {
      code = 'skokNaprej(' + value + ')';
  }
  if (dir == 'BACKWARD') {
      code = 'skokNazaj(' + value + ')';
  }
  if (dir == 'UPWARD') {
      code = 'skokNavzgor(' + value + ')';
  }
  if (dir == 'DOWNWARD') {
      code = 'skokNavzdol(' + value + ')';
  }
  return code;
};

Blockly.Python['actions_leftright'] = function(block) {
  var code = '';
  var dir = block.getFieldValue('DIR');
  if (dir == 'LEFT') {
      code = 'levo()';
  }
  else {
      code = 'desno()';
  }
  return code;
};

Blockly.Python['actions_turn'] = function(block) {
  var code = '';
  var dir = block.getFieldValue('DIR');
  var angle = Blockly.Python.valueToCode(block, 'ANGLE', Blockly.Python.ORDER_ATOMIC);
  if (dir == 'LEFT') {
      code = 'levo(' + angle + ')';
  }
  else {
      code = 'desno(' + angle + ')';
  }
  return code;
};

Blockly.Python['actions_repeatUntilImage'] = function(block) {
  var dropdown_image = block.getFieldValue('IMAGE');
  var statements_name = Blockly.Python.statementToCode(block, 'NAME');
  // TODO: Assemble Python into code variable.
  var code = 'repeat until image(' + dropdown_image + ')';
  return code;
};

Blockly.Python['actions_strawberry'] = function(block) {
  var code = 'pojejJagodo()';
  return code;
};

Blockly.Python['actions_whilecondition'] = function(block) {
  var text_condition = block.getFieldValue('CONDITION');
  var statements_name = Blockly.Python.statementToCode(block, 'NAME');
  // TODO: Assemble Python into code variable.
  var code = '...\n';
  return code;
};

Blockly.Python['actions_repeatcondition'] = function(block) {
  var text_condition = block.getFieldValue('CONDITION');
  var statements_name = Blockly.Python.statementToCode(block, 'NAME');
  // TODO: Assemble Python into code variable.
  var code = '...\n';
  return code;
};

Blockly.Python['actions_ifpath'] = function(block) {
  var text_condition = block.getFieldValue('CONDITION');
  var statements_name = Blockly.Python.statementToCode(block, 'NAME');
  // TODO: Assemble Python into code variable.
  var code = '...\n';
  return code;
};

Blockly.Python['actions_ifcondition'] = function(block) {
  var text_condition = block.getFieldValue('CONDITION');
  var statements_name = Blockly.Python.statementToCode(block, 'NAME');
  // TODO: Assemble Python into code variable.
  var code = '...\n';
  return code;
};

/*
Blockly.Python['actions_width'] = function(block) {
  Blockly.Python.definitions_.import_turtle = "import turtle\ns = turtle.Screen()\nt = turtle.Turtle()";

  var width = Blockly.Python.valueToCode(block, 'WIDTH', Blockly.Python.ORDER_ATOMIC);
  var code = 't.width('+ width + ')\n';
  return code;
};

Blockly.Python['actions_pen'] = function(block) {
  Blockly.Python.definitions_.import_turtle = "import turtle\ns = turtle.Screen()\nt = turtle.Turtle()";

  var code = '';
  var pen = block.getFieldValue('PEN');
  if (pen == 'DOWN') {
      code = 't.pendown()\n';
  }
  else {
      code = 't.penup()\n';
  }
  return code;
};

Blockly.Python['actions_show'] = function(block) {
  Blockly.Python.definitions_.import_turtle = "import turtle\ns = turtle.Screen()\nt = turtle.Turtle()";

  var code = '';
  var visible = block.getFieldValue('VISIBLE');
  if (visible == 'SHOW') {
      code = 't.showturtle()\n';
  }
  else {
      code = 't.hideturtle()\n';
  }
  return code;
};

Blockly.Python['actions_shape'] = function(block) {
  Blockly.Python.definitions_.import_turtle = "import turtle\ns = turtle.Screen()\nt = turtle.Turtle()";

  var shape = block.getFieldValue('SHAPE').toLowerCase();
  var code = 't.shape(\''+ shape + '\')\n';
  return code;
};

Blockly.Python['actions_setpos'] = function(block) {
  Blockly.Python.definitions_.import_turtle = "import turtle\ns = turtle.Screen()\nt = turtle.Turtle()";

  var posx = Blockly.Python.valueToCode(block, 'POSX', Blockly.Python.ORDER_ATOMIC);
  var posy = Blockly.Python.valueToCode(block, 'POSY', Blockly.Python.ORDER_ATOMIC);
  var code = 't.setpos('+ posx + ', ' + posy + ')\n';
  return code;
};

Blockly.Python['actions_color'] = function(block) {
  Blockly.Python.definitions_.import_turtle = "import turtle\ns = turtle.Screen()\nt = turtle.Turtle()";

  var color = block.getFieldValue('COLOR');
  var code = 't.color(\''+ color + '\')\n';
  return code;
};

Blockly.Python['actions_bgcolor'] = function(block) {
  Blockly.Python.definitions_.import_turtle = "import turtle\ns = turtle.Screen()\nt = turtle.Turtle()";

  var color = block.getFieldValue('COLOR');
  var code = 's.bgcolor(\''+ color + '\')\n';
  return code;
};

Blockly.Python['actions_circle'] = function(block) {
  Blockly.Python.definitions_.import_turtle = "import turtle\ns = turtle.Screen()\nt = turtle.Turtle()";

  var radius = Blockly.Python.valueToCode(block, 'RADIUS', Blockly.Python.ORDER_ATOMIC);
  var code = 't.circle('+ radius + ')\n';
  return code;
};

Blockly.Python['actions_arc'] = function(block) {
  Blockly.Python.definitions_.import_turtle = "import turtle\ns = turtle.Screen()\nt = turtle.Turtle()";

  var radius = Blockly.Python.valueToCode(block, 'RADIUS', Blockly.Python.ORDER_ATOMIC);
  var angle = Blockly.Python.valueToCode(block, 'ANGLE', Blockly.Python.ORDER_ATOMIC);
  var code = 't.circle('+ radius + ', ' + angle + ')\n';
  return code;
};

Blockly.Python['actions_pos'] = function(block) {
  Blockly.Python.definitions_.import_turtle = "import turtle\ns = turtle.Screen()\nt = turtle.Turtle()";

  var code = 't.pos()';
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['actions_isdown'] = function(block) {
  Blockly.Python.definitions_.import_turtle = "import turtle\ns = turtle.Screen()\nt = turtle.Turtle()";

  var code = 't.isdown()';
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['actions_reset'] = function(block) {
  Blockly.Python.definitions_.import_turtle = "import turtle\ns = turtle.Screen()\nt = turtle.Turtle()";

  var code = 't.reset()\n';
  return code;
};
*/