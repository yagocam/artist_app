/*
  Warnings:

  - Made the column `artist_id` on table `Product` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Product" ALTER COLUMN "artist_id" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_artist_id_fkey" FOREIGN KEY ("artist_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
