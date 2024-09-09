-- CreateTable
CREATE TABLE "User" (
    "user_name" TEXT NOT NULL,
    "email_id" TEXT NOT NULL,
    "password" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "User_user_name_key" ON "User"("user_name");
