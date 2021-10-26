/*
  Warnings:

  - You are about to drop the `pokemons` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "pokemons";

-- CreateTable
CREATE TABLE "POK.Pokemon" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "height" INTEGER NOT NULL,
    "weight" DOUBLE PRECISION NOT NULL,
    "number" INTEGER NOT NULL,
    "type" INTEGER NOT NULL,
    "generation" INTEGER NOT NULL,

    CONSTRAINT "POK.Pokemon_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "POK.Pokemon_Types" (
    "id" TEXT NOT NULL,
    "idType" INTEGER NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "POK.Pokemon_Types_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "POK.Pokemon_Generation" (
    "id" TEXT NOT NULL,
    "numberGeneration" INTEGER NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "POK.Pokemon_Generation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_PokemonToType" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "POK.Pokemon_name_key" ON "POK.Pokemon"("name");

-- CreateIndex
CREATE UNIQUE INDEX "POK.Pokemon_Types_idType_key" ON "POK.Pokemon_Types"("idType");

-- CreateIndex
CREATE UNIQUE INDEX "POK.Pokemon_Generation_numberGeneration_key" ON "POK.Pokemon_Generation"("numberGeneration");

-- CreateIndex
CREATE UNIQUE INDEX "_PokemonToType_AB_unique" ON "_PokemonToType"("A", "B");

-- CreateIndex
CREATE INDEX "_PokemonToType_B_index" ON "_PokemonToType"("B");

-- AddForeignKey
ALTER TABLE "POK.Pokemon" ADD CONSTRAINT "POK.Pokemon_generation_fkey" FOREIGN KEY ("generation") REFERENCES "POK.Pokemon_Generation"("numberGeneration") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PokemonToType" ADD FOREIGN KEY ("A") REFERENCES "POK.Pokemon"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PokemonToType" ADD FOREIGN KEY ("B") REFERENCES "POK.Pokemon_Types"("id") ON DELETE CASCADE ON UPDATE CASCADE;
