-- CreateTable
CREATE TABLE `Passenger` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(191) NOT NULL,
    `first_name` VARCHAR(191) NOT NULL,
    `middle_name` VARCHAR(191) NOT NULL,
    `last_name` VARCHAR(191) NOT NULL,
    `date_of_birth` DATETIME(3) NOT NULL,
    `country` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `role` ENUM('Admin', 'CONDUCTOR', 'USER') NOT NULL DEFAULT 'USER',
    `phone` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `Passenger_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Conductor` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `username` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `contactNo` VARCHAR(191) NOT NULL,
    `address` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Admin` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `username` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `contactNo` VARCHAR(191) NULL,
    `role` VARCHAR(191) NOT NULL DEFAULT 'Admin',

    UNIQUE INDEX `Admin_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Train` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `trainNo` INTEGER NOT NULL,
    `startStation` VARCHAR(191) NOT NULL,
    `endStation` VARCHAR(191) NOT NULL,
    `stops` JSON NULL,
    `departureTime` DATETIME(3) NOT NULL,
    `arrivalTime` DATETIME(3) NOT NULL,
    `type` VARCHAR(191) NOT NULL,
    `status` VARCHAR(191) NOT NULL,
    `economyPrice` DOUBLE NOT NULL,
    `FirstPrice` DOUBLE NOT NULL,
    `capacity` INTEGER NOT NULL,
    `adminId` INTEGER NOT NULL,

    UNIQUE INDEX `Train_trainNo_key`(`trainNo`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Reservation` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `trainId` INTEGER NOT NULL,
    `passengerId` INTEGER NOT NULL,
    `ticketNo` INTEGER NOT NULL,
    `selectFromTo` VARCHAR(191) NOT NULL,
    `departureDate` DATETIME(3) NOT NULL,
    `arrivalDate` DATETIME(3) NOT NULL,
    `dateOfReservation` DATETIME(3) NOT NULL,
    `setNo` INTEGER NOT NULL,
    `class` VARCHAR(191) NOT NULL,
    `status` VARCHAR(191) NOT NULL DEFAULT 'Pending',
    `referenceCode` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Reservation_referenceCode_key`(`referenceCode`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ETicket` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `ticketNo` INTEGER NOT NULL,
    `passengerId` INTEGER NOT NULL,
    `trainId` INTEGER NOT NULL,
    `setNo` INTEGER NOT NULL,
    `class` VARCHAR(191) NOT NULL,
    `journeyDate` DATETIME(3) NOT NULL,
    `departureStatus` VARCHAR(191) NOT NULL,
    `ticketPrice` INTEGER NOT NULL,
    `bookingInfo` VARCHAR(191) NOT NULL,
    `paymentId` INTEGER NULL,

    UNIQUE INDEX `ETicket_ticketNo_key`(`ticketNo`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Payment` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `paymentType` VARCHAR(191) NOT NULL,
    `paymentAmount` DOUBLE NOT NULL,
    `paymentDate` DATETIME(3) NOT NULL,
    `currency` VARCHAR(191) NOT NULL DEFAULT 'ETB',
    `status` VARCHAR(191) NOT NULL,
    `reservationId` INTEGER NOT NULL,

    UNIQUE INDEX `Payment_reservationId_key`(`reservationId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `OnlineTransaction` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `ticketId` VARCHAR(191) NOT NULL,
    `amount` DOUBLE NOT NULL,
    `status` VARCHAR(191) NOT NULL,
    `date` DATETIME(3) NOT NULL,
    `paymentId` INTEGER NOT NULL,

    UNIQUE INDEX `OnlineTransaction_paymentId_key`(`paymentId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Train` ADD CONSTRAINT `Train_adminId_fkey` FOREIGN KEY (`adminId`) REFERENCES `Admin`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Reservation` ADD CONSTRAINT `Reservation_trainId_fkey` FOREIGN KEY (`trainId`) REFERENCES `Train`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Reservation` ADD CONSTRAINT `Reservation_passengerId_fkey` FOREIGN KEY (`passengerId`) REFERENCES `Passenger`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ETicket` ADD CONSTRAINT `ETicket_trainId_fkey` FOREIGN KEY (`trainId`) REFERENCES `Train`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ETicket` ADD CONSTRAINT `ETicket_passengerId_fkey` FOREIGN KEY (`passengerId`) REFERENCES `Passenger`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ETicket` ADD CONSTRAINT `ETicket_paymentId_fkey` FOREIGN KEY (`paymentId`) REFERENCES `Payment`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Payment` ADD CONSTRAINT `Payment_reservationId_fkey` FOREIGN KEY (`reservationId`) REFERENCES `Reservation`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `OnlineTransaction` ADD CONSTRAINT `OnlineTransaction_paymentId_fkey` FOREIGN KEY (`paymentId`) REFERENCES `Payment`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
