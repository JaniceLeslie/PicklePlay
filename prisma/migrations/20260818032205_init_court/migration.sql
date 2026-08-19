-- CreateTable
CREATE TABLE "Court" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "isActive" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "Court_pkey" PRIMARY KEY ("id")
);
