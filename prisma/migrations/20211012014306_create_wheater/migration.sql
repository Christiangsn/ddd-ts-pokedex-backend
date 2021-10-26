-- CreateTable
CREATE TABLE "POK.Pokemon_Wheater" (
    "id" TEXT NOT NULL,
    "wheater" TEXT NOT NULL,

    CONSTRAINT "POK.Pokemon_Wheater_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_PokemonToWheater" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "POK.Pokemon_Wheater_wheater_key" ON "POK.Pokemon_Wheater"("wheater");

-- CreateIndex
CREATE UNIQUE INDEX "_PokemonToWheater_AB_unique" ON "_PokemonToWheater"("A", "B");

-- CreateIndex
CREATE INDEX "_PokemonToWheater_B_index" ON "_PokemonToWheater"("B");

-- AddForeignKey
ALTER TABLE "_PokemonToWheater" ADD FOREIGN KEY ("A") REFERENCES "POK.Pokemon"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PokemonToWheater" ADD FOREIGN KEY ("B") REFERENCES "POK.Pokemon_Wheater"("id") ON DELETE CASCADE ON UPDATE CASCADE;
