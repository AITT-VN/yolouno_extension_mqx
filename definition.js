Blockly.Blocks["uno_mqx_calib"] = {
  init: function () {
    this.jsonInit({
      inputsInline: true,
      colour: "#6642bf",
      nextStatement: null,
      tooltip: "",
      message0: "cảm biến %1 chân %2 hiệu chỉnh (calib)",
      previousStatement: null,
      args0: [
        {
          type: "field_dropdown",
          name: "TYPE",
          options: [
            ["MQ2", "MQ2"],
            ["MQ3", "MQ3"],
            ["MQ4", "MQ4"],
            ["MQ5", "MQ5"],
            ["MQ6", "MQ6"],
            ["MQ7", "MQ7"],
            ["MQ8", "MQ8"],
            ["MQ9", "MQ9"],
            ["MQ135", "MQ135"],
          ],
        },
        {
          type: "field_dropdown",
          name: "PIN",
          options: analogPins,
        },
      ],
      helpUrl: ""
    });
  },
};

Blockly.Python['uno_mqx_calib'] = function (block) {
  var type = block.getFieldValue('TYPE');
  var pin = block.getFieldValue('PIN');
  Blockly.Python.definitions_['import_mq_' + pin] = 'from ' + type + ' import *';
  Blockly.Python.definitions_['init_mq_' + pin] = 'mq_' + pin + ' = ' + type + '(pinData=' + pin + '_PIN)';
  var code = 'await mq_' + pin + '.calibrate(-1)\n';
  return code;
};

Blockly.Blocks["uno_mqx_set_calib"] = {
  init: function () {
    this.jsonInit({
      inputsInline: true,
      colour: "#6642bf",
      nextStatement: null,
      tooltip: "",
      message0: "cảm biến %1 chân %2 đặt giá trị đã calib %3",
      previousStatement: null,
      args0: [
        {
          type: "field_dropdown",
          name: "TYPE",
          options: [
            ["MQ2", "MQ2"],
            ["MQ3", "MQ3"],
            ["MQ4", "MQ4"],
            ["MQ5", "MQ5"],
            ["MQ6", "MQ6"],
            ["MQ7", "MQ7"],
            ["MQ8", "MQ8"],
            ["MQ9", "MQ9"],
            ["MQ135", "MQ135"],
          ],
        },
        {
          type: "field_dropdown",
          name: "PIN",
          options: analogPins,
        },
        { type: "input_value", name: "RO", check: "Number" },
      ],
      helpUrl: ""
    });
  },
};

Blockly.Python['uno_mqx_set_calib'] = function (block) {
  var type = block.getFieldValue('TYPE');
  var pin = block.getFieldValue('PIN');
  var ro_value = Blockly.Python.valueToCode(block, 'RO', Blockly.Python.ORDER_ATOMIC);
  Blockly.Python.definitions_['import_mq_' + pin] = 'from ' + type + ' import *';
  Blockly.Python.definitions_['init_mq_' + pin] = 'mq_' + pin + ' = ' + type + '(pinData=' + pin + '_PIN)';
  var code = 'await mq_' + pin + '.calibrate(' + ro_value + ')\n';
  return code;
};

Blockly.Blocks["uno_mqx_change_mode"] = {
  init: function () {
    this.jsonInit({
      inputsInline: true,
      colour: "#6642bf",
      nextStatement: null,
      tooltip: "",
      message0: "cảm biến %1 chân %2 đặt chế độ đọc %3",
      previousStatement: null,
      args0: [
        {
          type: "field_dropdown",
          name: "TYPE",
          options: [
            ["MQ2", "MQ2"],
            ["MQ3", "MQ3"],
            ["MQ4", "MQ4"],
            ["MQ5", "MQ5"],
            ["MQ6", "MQ6"],
            ["MQ7", "MQ7"],
            ["MQ8", "MQ8"],
            ["MQ9", "MQ9"],
            ["MQ135", "MQ135"],
          ],
        },
        {
          type: "field_dropdown",
          name: "PIN",
          options: analogPins,
        },
        {
          type: "field_dropdown",
          name: "MODE",
          options: [
            ["chính xác (chậm)", "STRATEGY_ACCURATE"],
            ["nhanh", "STRATEGY_FAST"],
          ],
        },
      ],
      helpUrl: ""
    });
  },
};

Blockly.Python['uno_mqx_change_mode'] = function (block) {
  var type = block.getFieldValue('TYPE');
  var pin = block.getFieldValue('PIN');
  var mode = block.getFieldValue('MODE');
  Blockly.Python.definitions_['import_mq_' + pin] = 'from ' + type + ' import *';
  Blockly.Python.definitions_['init_mq_' + pin] = 'mq_' + pin + ' = ' + type + '(pinData=' + pin + '_PIN)';
  var code = 'mq_' + pin + '.mode(' + type + '.' + mode + ')\n';
  return code;
};

Blockly.Blocks['uno_mqx_get_data_mq2'] = {
  init: function() {
    this.jsonInit(
      {
        "message0": "cảm biến MQ2 chân %1 đọc nồng độ %2",
        args0: [
          {
            type: "field_dropdown",
            name: "PIN",
            options: analogPins,
          },
          {
            type: "field_dropdown",
            name: "DATA",
            options: [
              ["gas", "readLPG"],
              ["khói", "readSmoke"],
              ["H2", "readHydrogen"],
              ["metan (CH4)", "readMethane"],
              ["raw", "readRawADC"],
            ],
          },
        ],
        "output": null,
        "colour": "#6642bf",
        "helpUrl": ""
      }
    );
  }    
};

Blockly.Python['uno_mqx_get_data_mq2'] = function(block) {
  var pin = block.getFieldValue('PIN');
  var data = block.getFieldValue('DATA');
  Blockly.Python.definitions_['import_mq_' + pin] = 'from MQ2 import *';
  Blockly.Python.definitions_['init_mq_' + pin] = 'mq_' + pin + ' = MQ2(pinData=' + pin + '_PIN)';
  // TODO: Assemble Python into code variable.
  var code = 'await mq_' + pin + '.' + data + '()';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Blocks['uno_mqx_get_data_mq3'] = {
  init: function() {
    this.jsonInit(
      {
        "message0": "cảm biến MQ3 chân %1 đọc nồng độ %2",
        args0: [
          {
            type: "field_dropdown",
            name: "PIN",
            options: analogPins,
          },
          {
            type: "field_dropdown",
            name: "DATA",
            options: [
              ["cồn (mg/l)", "readAlcoholMgL"],
              ["cồn (ppm)", "readAlcoholPpm"],
              ["raw", "readRawADC"],
            ],
          },
        ],
        "output": null,
        "colour": "#6642bf",
        "helpUrl": ""
      }
    );
  }    
};

Blockly.Python['uno_mqx_get_data_mq3'] = function(block) {
  var pin = block.getFieldValue('PIN');
  var data = block.getFieldValue('DATA');
  Blockly.Python.definitions_['import_mq_' + pin] = 'from MQ3 import *';
  Blockly.Python.definitions_['init_mq_' + pin] = 'mq_' + pin + ' = MQ3(pinData=' + pin + '_PIN)';
  // TODO: Assemble Python into code variable.
  var code = 'await mq_' + pin + '.' + data + '()';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Blocks['uno_mqx_get_data_mq4'] = {
  init: function() {
    this.jsonInit(
      {
        "message0": "cảm biến MQ4 chân %1 đọc nồng độ %2",
        args0: [
          {
            type: "field_dropdown",
            name: "PIN",
            options: analogPins,
          },
          {
            type: "field_dropdown",
            name: "DATA",
            options: [
              ["metan (CH4)", "readMethane"],
              ["raw", "readRawADC"],
            ],
          },
        ],
        "output": null,
        "colour": "#6642bf",
        "helpUrl": ""
      }
    );
  }    
};

Blockly.Python['uno_mqx_get_data_mq4'] = function(block) {
  var pin = block.getFieldValue('PIN');
  var data = block.getFieldValue('DATA');
  Blockly.Python.definitions_['import_mq_' + pin] = 'from MQ4 import *';
  Blockly.Python.definitions_['init_mq_' + pin] = 'mq_' + pin + ' = MQ4(pinData=' + pin + '_PIN)';
  // TODO: Assemble Python into code variable.
  var code = 'await mq_' + pin + '.' + data + '()';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Blocks['uno_mqx_get_data_mq5'] = {
  init: function() {
    this.jsonInit(
      {
        "message0": "cảm biến MQ5 chân %1 đọc nồng độ %2",
        args0: [
          {
            type: "field_dropdown",
            name: "PIN",
            options: analogPins,
          },
          {
            type: "field_dropdown",
            name: "DATA",
            options: [
              ["gas", "readLPG"],
              ["metan (CH4)", "readMethane"],
              ["raw", "readRawADC"],
            ],
          },
        ],
        "output": null,
        "colour": "#6642bf",
        "helpUrl": ""
      }
    );
  }    
};

Blockly.Python['uno_mqx_get_data_mq5'] = function(block) {
  var pin = block.getFieldValue('PIN');
  var data = block.getFieldValue('DATA');
  Blockly.Python.definitions_['import_mq_' + pin] = 'from MQ5 import *';
  Blockly.Python.definitions_['init_mq_' + pin] = 'mq_' + pin + ' = MQ5(pinData=' + pin + '_PIN)';
  // TODO: Assemble Python into code variable.
  var code = 'await mq_' + pin + '.' + data + '()';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Blocks['uno_mqx_get_data_mq6'] = {
  init: function() {
    this.jsonInit(
      {
        "message0": "cảm biến MQ6 chân %1 đọc nồng độ %2",
        args0: [
          {
            type: "field_dropdown",
            name: "PIN",
            options: analogPins,
          },
          {
            type: "field_dropdown",
            name: "DATA",
            options: [
              ["gas", "readLPG"],
              ["raw", "readRawADC"],
            ],
          },
        ],
        "output": null,
        "colour": "#6642bf",
        "helpUrl": ""
      }
    );
  }    
};

Blockly.Python['uno_mqx_get_data_mq6'] = function(block) {
  var pin = block.getFieldValue('PIN');
  var data = block.getFieldValue('DATA');
  Blockly.Python.definitions_['import_mq_' + pin] = 'from MQ6 import *';
  Blockly.Python.definitions_['init_mq_' + pin] = 'mq_' + pin + ' = MQ6(pinData=' + pin + '_PIN)';
  // TODO: Assemble Python into code variable.
  var code = 'await mq_' + pin + '.' + data + '()';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Blocks['uno_mqx_get_data_mq7'] = {
  init: function() {
    this.jsonInit(
      {
        "message0": "cảm biến MQ7 chân %1 đọc nồng độ %2",
        args0: [
          {
            type: "field_dropdown",
            name: "PIN",
            options: analogPins,
          },
          {
            type: "field_dropdown",
            name: "DATA",
            options: [
              ["CO", "readCarbonMonoxide"],
              ["raw", "readRawADC"],
            ],
          },
        ],
        "output": null,
        "colour": "#6642bf",
        "helpUrl": ""
      }
    );
  }    
};

Blockly.Python['uno_mqx_get_data_mq7'] = function(block) {
  var pin = block.getFieldValue('PIN');
  var data = block.getFieldValue('DATA');
  Blockly.Python.definitions_['import_mq_' + pin] = 'from MQ7 import *';
  Blockly.Python.definitions_['init_mq_' + pin] = 'mq_' + pin + ' = MQ7(pinData=' + pin + '_PIN)';
  // TODO: Assemble Python into code variable.
  var code = 'await mq_' + pin + '.' + data + '()';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Blocks['uno_mqx_get_data_mq8'] = {
  init: function() {
    this.jsonInit(
      {
        "message0": "cảm biến MQ8 chân %1 đọc nồng độ %2",
        args0: [
          {
            type: "field_dropdown",
            name: "PIN",
            options: analogPins,
          },
          {
            type: "field_dropdown",
            name: "DATA",
            options: [
              ["H2", "readHydrogen"],
              ["raw", "readRawADC"],
            ],
          },
        ],
        "output": null,
        "colour": "#6642bf",
        "helpUrl": ""
      }
    );
  }    
};

Blockly.Python['uno_mqx_get_data_mq8'] = function(block) {
  var pin = block.getFieldValue('PIN');
  var data = block.getFieldValue('DATA');
  Blockly.Python.definitions_['import_mq_' + pin] = 'from MQ8 import *';
  Blockly.Python.definitions_['init_mq_' + pin] = 'mq_' + pin + ' = MQ8(pinData=' + pin + '_PIN)';
  // TODO: Assemble Python into code variable.
  var code = 'await mq_' + pin + '.' + data + '()';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Blocks['uno_mqx_get_data_mq9'] = {
  init: function() {
    this.jsonInit(
      {
        "message0": "cảm biến MQ9 chân %1 đọc nồng độ %2",
        args0: [
          {
            type: "field_dropdown",
            name: "PIN",
            options: analogPins,
          },
          {
            type: "field_dropdown",
            name: "DATA",
            options: [
              ["gas", "readLPG"],
              ["CO", "readCarbonMonoxide"],
              ["metan (CH4)", "readMethane"],
              ["raw", "readRawADC"],
            ],
          },
        ],
        "output": null,
        "colour": "#6642bf",
        "helpUrl": ""
      }
    );
  }    
};

Blockly.Python['uno_mqx_get_data_mq9'] = function(block) {
  var pin = block.getFieldValue('PIN');
  var data = block.getFieldValue('DATA');
  Blockly.Python.definitions_['import_mq_' + pin] = 'from MQ9 import *';
  Blockly.Python.definitions_['init_mq_' + pin] = 'mq_' + pin + ' = MQ9(pinData=' + pin + '_PIN)';
  // TODO: Assemble Python into code variable.
  var code = 'await mq_' + pin + '.' + data + '()';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Blocks['uno_mqx_get_data_mq135'] = {
  init: function() {
    this.jsonInit(
      {
        "message0": "cảm biến MQ135 chân %1 đọc nồng độ %2",
        args0: [
          {
            type: "field_dropdown",
            name: "PIN",
            options: analogPins,
          },
          {
            type: "field_dropdown",
            name: "DATA",
            options: [
              ["CO2", "readCO2"],
              ["raw", "readRawADC"],
            ],
          },
        ],
        "output": null,
        "colour": "#6642bf",
        "helpUrl": ""
      }
    );
  }    
};

Blockly.Python['uno_mqx_get_data_mq135'] = function(block) {
  var pin = block.getFieldValue('PIN');
  var data = block.getFieldValue('DATA');
  Blockly.Python.definitions_['import_mq_' + pin] = 'from MQ135 import *';
  Blockly.Python.definitions_['init_mq_' + pin] = 'mq_' + pin + ' = MQ135(pinData=' + pin + '_PIN)';
  // TODO: Assemble Python into code variable.
  var code = 'await mq_' + pin + '.' + data + '()';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};