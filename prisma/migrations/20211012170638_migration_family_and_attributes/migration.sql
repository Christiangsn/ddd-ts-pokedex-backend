/*
  Warnings:

  - You are about to drop the column `number` on the `POK.Pokemon` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[numberPokedex]` on the table `POK.Pokemon` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `Attack` to the `POK.Pokemon` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Defense` to the `POK.Pokemon` table without a default value. This is not possible if the table is not empty.
  - Added the required column `HP` to the `POK.Pokemon` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Special_Atck` to the `POK.Pokemon` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Special_Defs` to the `POK.Pokemon` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Speed` to the `POK.Pokemon` table without a default value. This is not possible if the table is not empty.
  - Added the required column `family` to the `POK.Pokemon` table without a default value. This is not possible if the table is not empty.
  - Added the required column `image` to the `POK.Pokemon` table without a default value. This is not possible if the table is not empty.
  - Added the required column `numberPokedex` to the `POK.Pokemon` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "POK.Pokemon" DROP COLUMN "number",
ADD COLUMN     "Attack" INTEGER NOT NULL,
ADD COLUMN     "Defense" INTEGER NOT NULL,
ADD COLUMN     "HP" INTEGER NOT NULL,
ADD COLUMN     "Special_Atck" INTEGER NOT NULL,
ADD COLUMN     "Special_Defs" INTEGER NOT NULL,
ADD COLUMN     "Speed" INTEGER NOT NULL,
ADD COLUMN     "family" TEXT NOT NULL,
ADD COLUMN     "image" TEXT NOT NULL,
ADD COLUMN     "numberPokedex" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "POK.Pokemon_Family" (
    "id" TEXT NOT NULL,
    "family" TEXT NOT NULL,

    CONSTRAINT "POK.Pokemon_Family_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "POK.Pokemon_Family_family_key" ON "POK.Pokemon_Family"("family");

-- CreateIndex
CREATE UNIQUE INDEX "POK.Pokemon_numberPokedex_key" ON "POK.Pokemon"("numberPokedex");

-- AddForeignKey
ALTER TABLE "POK.Pokemon" ADD CONSTRAINT "POK.Pokemon_family_fkey" FOREIGN KEY ("family") REFERENCES "POK.Pokemon_Family"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
