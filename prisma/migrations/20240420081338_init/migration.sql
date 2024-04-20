-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT,
    "avatar_url" TEXT NOT NULL,
    "user_name" TEXT NOT NULL,
    "google_uid" TEXT NOT NULL,
    "college_name" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "bio" TEXT NOT NULL,
    "socials" TEXT[],
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "College" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "leadId" INTEGER NOT NULL,
    "description" TEXT NOT NULL,
    "banner_url" TEXT NOT NULL,
    "members_count" INTEGER NOT NULL,
    "region" TEXT NOT NULL,
    "photos" TEXT[],
    "videos" TEXT[],
    "socials" TEXT[],
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "College_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_Core_team_members" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_College_Members" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "User_user_name_key" ON "User"("user_name");

-- CreateIndex
CREATE UNIQUE INDEX "User_google_uid_key" ON "User"("google_uid");

-- CreateIndex
CREATE UNIQUE INDEX "College_name_key" ON "College"("name");

-- CreateIndex
CREATE UNIQUE INDEX "College_email_key" ON "College"("email");

-- CreateIndex
CREATE UNIQUE INDEX "College_leadId_key" ON "College"("leadId");

-- CreateIndex
CREATE UNIQUE INDEX "_Core_team_members_AB_unique" ON "_Core_team_members"("A", "B");

-- CreateIndex
CREATE INDEX "_Core_team_members_B_index" ON "_Core_team_members"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_College_Members_AB_unique" ON "_College_Members"("A", "B");

-- CreateIndex
CREATE INDEX "_College_Members_B_index" ON "_College_Members"("B");

-- AddForeignKey
ALTER TABLE "College" ADD CONSTRAINT "College_leadId_fkey" FOREIGN KEY ("leadId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Core_team_members" ADD CONSTRAINT "_Core_team_members_A_fkey" FOREIGN KEY ("A") REFERENCES "College"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Core_team_members" ADD CONSTRAINT "_Core_team_members_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_College_Members" ADD CONSTRAINT "_College_Members_A_fkey" FOREIGN KEY ("A") REFERENCES "College"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_College_Members" ADD CONSTRAINT "_College_Members_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
