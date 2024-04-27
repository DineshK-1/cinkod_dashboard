/*
  Warnings:

  - You are about to drop the column `avatar_url` on the `CollegeAdmin` table. All the data in the column will be lost.
  - Made the column `name` on table `CollegeAdmin` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "CollegeAdmin" DROP COLUMN "avatar_url",
ALTER COLUMN "name" SET NOT NULL,
ALTER COLUMN "google_uid" DROP NOT NULL;
