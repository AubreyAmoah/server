-- DropForeignKey
ALTER TABLE "applications" DROP CONSTRAINT "applications_approvedBy_fkey";

-- AlterTable
ALTER TABLE "applications" ALTER COLUMN "approvedBy" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "applications" ADD CONSTRAINT "applications_approvedBy_fkey" FOREIGN KEY ("approvedBy") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;
