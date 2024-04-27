/*
  Warnings:

  - Added the required column `isAdminstrator` to the `CollegeAdmin` table without a default value. This is not possible if the table is not empty.
  - Added the required column `isCoreTeam` to the `CollegeAdmin` table without a default value. This is not possible if the table is not empty.
  - Added the required column `isLead` to the `CollegeAdmin` table without a default value. This is not possible if the table is not empty.
  - Added the required column `isMember` to the `CollegeAdmin` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "CollegeAdmin" ADD COLUMN     "isAdminstrator" BOOLEAN NOT NULL,
ADD COLUMN     "isCoreTeam" BOOLEAN NOT NULL,
ADD COLUMN     "isLead" BOOLEAN NOT NULL,
ADD COLUMN     "isMember" BOOLEAN NOT NULL;
