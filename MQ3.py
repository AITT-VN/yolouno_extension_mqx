# Ported from https://github.com/amperka/TroykaMQ
# Author: Alexey Tveritinov [kartun@yandex.ru]
from BaseMQ import BaseMQ
from micropython import const

class MQ3(BaseMQ):
    # резистор установленный на плату (кОм)
    MQ3_RL_BOARD = 200.0
    # коефициент чистого воздуха из графика
    MQ3_RO_IN_CLEAR_AIR = 60.0

    def __init__(self, pinData, pinHeater=-1, boardResistance = 10.0, baseVoltage = 3.3, measuringStrategy = BaseMQ.STRATEGY_FAST):
        # Call superclass to fill attributes
        super().__init__(pinData, pinHeater, boardResistance, baseVoltage, measuringStrategy)

    def readAlcoholMgL(self):
        return self.readScaled(-0.66, -0.62)


    def readAlcoholPpm(self):
        return self.readScaled(-0.66, -0.62)*2.2
    
    ##  Base RO differs for every sensor family
    def getRoInCleanAir(self):
        return self.MQ3_RO_IN_CLEAR_AIR

