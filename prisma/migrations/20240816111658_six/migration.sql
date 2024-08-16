-- DropForeignKey
ALTER TABLE "payments" DROP CONSTRAINT "payments_ownerId_fkey";

-- AlterTable
ALTER TABLE "applications" ALTER COLUMN "proof" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "payments" ADD CONSTRAINT "payments_ownerId_fkey" FOREIGN KEY ("ownerId") REFERENCES "applications"("id") ON DELETE CASCADE ON UPDATE CASCADE;
