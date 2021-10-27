import type { WheaterFactoryContract, WheaterEntitiyContract  } from "@domain:WheaterContract";
import { Wheater } from "@prisma/client";
import { IWheaterEntity } from '../entities/IWheaterEntity'

class WheaterFactory implements WheaterFactoryContract {

    public convertFromPrisma ( model: Wheater ) : WheaterEntitiyContract {
        return new IWheaterEntity({
            id: model.id,
            wheater: model.wheater
        })
    }

}

export { WheaterFactory }







