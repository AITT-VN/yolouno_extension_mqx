Blockly.Blocks["uno_mqx_calib"] = {
  init: function () {
    this.jsonInit({
      inputsInline: true,
      colour: "#6642bf",
      nextStatement: null,
      tooltip: "",
      message0: "hiệu chỉnh cảm biến %1 chân %2 giá trị mặc định %3",
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

Blockly.Python['uno_mqx_calib'] = function (block) {
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
      message0: "cảm biến %1 chân %2 đặt chế độ %3",
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
            ["đọc nhanh", "STRATEGY_FAST"],
            ["đọc chính xác (chậm)", "STRATEGY_ACCURATE"],
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

Blockly.Blocks['uno_mqx_get_data'] = {
    init: function() {
      this.jsonInit(
        {
          "message0": "cảm biến %1 chân %2 đọc nồng độ %3",
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
              name: "DATA",
              options: [
                ["gas", "readLPG"],
                ["cồn (mg/l)", "readAlcoholMgL"],
                ["cồn (ppm)", "readAlcoholPpm"],
                ["khói", "readSmoke"],
                ["H2", "readHydrogen"],
                ["CO2", "readCO2"],
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
  
  Blockly.Python['uno_mqx_get_data'] = function(block) {
    var type = block.getFieldValue('TYPE');
    var pin = block.getFieldValue('PIN');
    var data = block.getFieldValue('DATA');
    Blockly.Python.definitions_['import_mq_' + pin] = 'from ' + type + ' import *';
    Blockly.Python.definitions_['init_mq_' + pin] = 'mq_' + pin + ' = ' + type + '(pinData=' + pin + '_PIN)';
    // TODO: Assemble Python into code variable.
    var code = 'await mq_' + pin + '.' + data + '()';
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.Python.ORDER_NONE];
  };

