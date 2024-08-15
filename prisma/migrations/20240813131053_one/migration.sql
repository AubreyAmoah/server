-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "email" TEXT NOT NULL,
    "hash" TEXT NOT NULL,
    "firstName" TEXT,
    "lastName" TEXT,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Application" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "firstName" TEXT NOT NULL,
    "middleName" TEXT,
    "lastName" TEXT NOT NULL,
    "dob" TEXT NOT NULL,
    "gender" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "tel" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "nextOfKinFname" TEXT NOT NULL,
    "nextOfKinLname" TEXT NOT NULL,
    "relation" TEXT NOT NULL,
    "nextOfKinTel" TEXT NOT NULL,
    "nextOfKinEmail" TEXT,
    "languages" TEXT[],
    "highestQualification" TEXT NOT NULL,
    "institution" TEXT NOT NULL,
    "yearCompleted" TEXT NOT NULL,
    "proof" TEXT NOT NULL,
    "admissionType" TEXT NOT NULL,
    "admissionLevel" TEXT NOT NULL,
    "program" TEXT NOT NULL,
    "paymentMethod" TEXT NOT NULL,

    CONSTRAINT "Application_pkey" PRIMARY KEY ("id")
);
