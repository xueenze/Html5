CREATE DATABASE `resume`;

CREATE TABLE `resume`.`feedback` (
  `ID` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(100) NULL,
  `message` LONGTEXT NULL,
  `downloadstatus` TINYINT(1) NULL,
  PRIMARY KEY (`ID`));