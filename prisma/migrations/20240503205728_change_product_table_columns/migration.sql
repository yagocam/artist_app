/*
  Warnings:

  - The `tag` column on the `Product` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "Product" ADD COLUMN     "image" TEXT,
ALTER COLUMN "type" DROP NOT NULL,
DROP COLUMN "tag",
ADD COLUMN     "tag" TEXT[],
ALTER COLUMN "status" DROP NOT NULL,
ALTER COLUMN "quantity" DROP NOT NULL,
ALTER COLUMN "artist_id" DROP NOT NULL;
