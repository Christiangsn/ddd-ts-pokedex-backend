declare module '@domain:WheaterContract' {
  import { Wheater } from "@prisma/client";

  export interface WheaterEntityInput {
    id?: string;
    wheater: string;
  }

  export interface WheaterEntitiyContract {
    id?: string;
    wheater: string;
  }

  export interface CreateEntitiyWheater {
    wheater: string;
  }

  export interface WheaterRepositoryContract {
    store ( { wheater }: WheaterEntityInput ): Promise<WheaterEntityInput>
  }

  export interface WheaterFactoryContract {
    convertFromPrisma ( prismaWheater: Wheater ): WheaterEntitiyContract
  }

}