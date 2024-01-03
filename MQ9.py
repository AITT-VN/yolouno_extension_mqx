#include "MQ9.h"
# Ported from https://github.com/amperka/TroykaMQ
# Author: Alexey Tveritinov [kartun@yandex.ru]
from BaseMQ import BaseMQ

class MQ9(BaseMQ):
    # резистор установленный на плату (кОм)
    MQ8_RL_BOARD = 10.0

    ## Clean air coefficient
    MQ9_RO_BASE = float(9.8)

    def __init__(self, pinData, pinHeater=-1, boardResistance = 10, baseVoltage = 3.3, measuringStrategy = BaseMQ.STRATEGY_ACCURATE):
        # Call superclass to fill attributes
        super().__init__(pinData, pinHeater, boardResistance, baseVoltage, measuringStrategy)

    ## Measure liquefied hydrocarbon gas, LPG
    def readLPG(self):
        return self.readScaled(-0.48, 3.33)
        
    ## Measure methane    
    def readMethane(self):
        return self.readScaled(-0.38, 3.21)

    def readCarbonMonoxide():
        return self.readScaled(-0.48, 3.10)

    ##  Base RO differs for every sensor family
    def getRoInCleanAir(self):
        return self.MQ9_RO_BASE