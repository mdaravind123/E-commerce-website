-- CreateTable
CREATE TABLE "product" (
    "id" INTEGER NOT NULL,
    "title" TEXT NOT NULL,
    "price" TEXT NOT NULL,
    "imageurl" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "ratings" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "product_id_key" ON "product"("id");
