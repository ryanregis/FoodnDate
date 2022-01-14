CREATE DATABASE  IF NOT EXISTS `food_n_date` /*!40100 DEFAULT CHARACTER SET utf8 */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `food_n_date`;
-- MySQL dump 10.13  Distrib 8.0.27, for Win64 (x86_64)
--
-- Host: localhost    Database: food_n_date
-- ------------------------------------------------------
-- Server version	8.0.27

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `appointment`
--

DROP TABLE IF EXISTS `appointment`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `appointment` (
  `appointment_id` int NOT NULL AUTO_INCREMENT,
  `dates_email` varchar(100) NOT NULL,
  `dates_address` varchar(100) NOT NULL,
  `date_scheduled` datetime NOT NULL,
  `dates_contact_number` varchar(100) NOT NULL,
  `date_created` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `date_updated` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`appointment_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `appointment`
--

LOCK TABLES `appointment` WRITE;
/*!40000 ALTER TABLE `appointment` DISABLE KEYS */;
/*!40000 ALTER TABLE `appointment` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `checkout`
--

DROP TABLE IF EXISTS `checkout`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `checkout` (
  `checkout_id` int NOT NULL AUTO_INCREMENT,
  `order_id` int NOT NULL,
  `payment_id` int NOT NULL,
  `date_created` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `date_updated` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`checkout_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `checkout`
--

LOCK TABLES `checkout` WRITE;
/*!40000 ALTER TABLE `checkout` DISABLE KEYS */;
/*!40000 ALTER TABLE `checkout` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `food`
--

DROP TABLE IF EXISTS `food`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `food` (
  `food_id` int NOT NULL AUTO_INCREMENT,
  `food_name` varchar(100) NOT NULL,
  `price` float NOT NULL,
  `food_category_id` int NOT NULL,
  `date_created` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `date_updated` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`food_id`),
  KEY `fk_food_category_idx` (`food_category_id`),
  CONSTRAINT `fk_food_category` FOREIGN KEY (`food_category_id`) REFERENCES `food_category` (`food_category_id`) ON DELETE RESTRICT ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=28 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `food`
--

LOCK TABLES `food` WRITE;
/*!40000 ALTER TABLE `food` DISABLE KEYS */;
INSERT INTO `food` VALUES (1,'Concombre a la Menthe (Cucumber Salad with Mint Leaves)',170,1,'2021-12-13 11:19:09','2021-12-27 09:34:21'),(2,'Lyonnaise Salad',350,1,'2021-12-13 11:19:09','2021-12-27 09:34:22'),(3,'Onion Galette',200,1,'2021-12-13 11:19:09','2021-12-27 09:34:22'),(4,'Cheese Souffle',170,1,'2021-12-13 11:19:09','2021-12-27 09:34:22'),(5,'Coquilles Saint-Jacques (Great Scallops)',220,1,'2021-12-13 11:19:09','2021-12-27 09:34:22'),(6,'Olive Tapenade',350,1,'2021-12-13 11:19:09','2021-12-27 09:34:22'),(7,'Boeuf Bourguignon (Beef Stew)',700,2,'2021-12-13 11:19:09','2021-12-27 09:34:22'),(8,'Coq Au Vin (Red Wine Chicken Stew)',550,2,'2021-12-13 11:19:10','2021-12-27 09:34:22'),(9,'Chicken Cordon Bleu',350,2,'2021-12-13 11:19:10','2021-12-27 09:34:22'),(10,'Duck à l’Orange',500,2,'2021-12-13 11:19:10','2021-12-27 09:34:22'),(11,'Roasted Chicken with Herb Jus',600,2,'2021-12-13 11:19:10','2021-12-27 09:34:22'),(12,'Bouillabaisse',400,2,'2021-12-13 11:19:10','2021-12-27 09:34:22'),(13,'French Coconut Pie',150,3,'2021-12-13 11:19:10','2021-12-27 09:34:22'),(14,'Passion Fruit and Lemon Meringue Tartlets',150,3,'2021-12-13 11:19:11','2021-12-27 09:34:22'),(15,'Pear Tart',160,3,'2021-12-13 11:19:11','2021-12-27 09:34:22'),(16,'Strawberry Fraisier Chiffon Cake',180,3,'2021-12-13 11:19:11','2021-12-27 09:34:22'),(17,'Profiteroles',120,3,'2021-12-13 11:19:11','2021-12-27 09:34:22'),(18,'Mousse Au Chocolat',170,3,'2021-12-13 11:19:11','2021-12-27 09:34:22'),(19,'Cannelés de Bordeaux',150,3,'2021-12-13 11:19:11','2021-12-27 09:34:22'),(20,'Quiche Lorraine',150,4,'2021-12-13 11:19:11','2021-12-27 09:34:22'),(21,'Croque Monsieur',120,4,'2021-12-13 11:19:11','2021-12-27 09:34:22'),(22,'Croque Madame',120,4,'2021-12-13 11:19:11','2021-12-27 09:34:22'),(23,'Jambon - Beurre',250,4,'2021-12-13 11:19:11','2021-12-27 09:34:22'),(24,'Croissant',100,4,'2021-12-13 11:19:12','2021-12-27 09:34:22'),(25,'Red Wine (Mouton Cadet Bordeaux Rouge)',1500,5,'2021-12-13 11:19:12','2021-12-27 09:34:22'),(26,'White Wine (Champagne)',1800,5,'2021-12-13 11:19:12','2021-12-22 18:01:06'),(27,'Mimosa',2500,5,'2021-12-13 11:19:12','2021-12-22 18:01:06');
/*!40000 ALTER TABLE `food` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `food_category`
--

DROP TABLE IF EXISTS `food_category`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `food_category` (
  `food_category_id` int NOT NULL AUTO_INCREMENT,
  `category` varchar(100) NOT NULL,
  `date_created` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `date_updated` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`food_category_id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `food_category`
--

LOCK TABLES `food_category` WRITE;
/*!40000 ALTER TABLE `food_category` DISABLE KEYS */;
INSERT INTO `food_category` VALUES (1,'Appetizers / L’Entrée','2021-12-13 11:09:32','2021-12-13 11:09:32'),(2,'Main Course / Plat Principal','2021-12-13 11:09:32','2021-12-13 11:09:32'),(3,'Dessert / Le Dessert','2021-12-13 11:09:32','2021-12-13 11:09:32'),(4,'Side Dishes / Plat d\'Accompagnement','2021-12-13 11:09:32','2021-12-13 11:09:32'),(5,'Drinks / Boissons','2021-12-13 11:09:32','2021-12-13 11:09:32');
/*!40000 ALTER TABLE `food_category` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `gender`
--

DROP TABLE IF EXISTS `gender`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `gender` (
  `gender_id` int NOT NULL AUTO_INCREMENT,
  `gender` varchar(100) NOT NULL,
  `date_created` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `date_updated` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`gender_id`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `gender`
--

LOCK TABLES `gender` WRITE;
/*!40000 ALTER TABLE `gender` DISABLE KEYS */;
INSERT INTO `gender` VALUES (1,'Male (Cisgender)','2022-01-11 14:11:01','2022-01-11 14:11:01'),(2,'Female (Cisgender)','2022-01-11 14:11:01','2022-01-11 14:11:01'),(3,'Male (Transgender)','2022-01-11 14:11:01','2022-01-11 14:11:01'),(4,'Female (Transgender)','2022-01-11 14:11:01','2022-01-11 14:11:01'),(5,'Male (FtM - Transsexual)','2022-01-11 14:11:01','2022-01-11 14:11:01'),(6,'Female (MtF - Transsexual)','2022-01-11 14:11:01','2022-01-11 14:11:01'),(7,'Non-Binary','2022-01-11 14:11:01','2022-01-11 14:11:01'),(8,'Intersexual','2022-01-11 14:11:01','2022-01-11 14:11:01'),(9,'Genderqueer','2022-01-11 14:11:01','2022-01-11 14:11:01'),(10,'Gender Neutral','2022-01-11 14:11:01','2022-01-11 14:11:01'),(11,'Gender Fluid','2022-01-11 14:11:01','2022-01-11 14:11:01'),(12,'Agender','2022-01-11 14:11:01','2022-01-11 14:11:01'),(13,'Pangender','2022-01-11 14:11:01','2022-01-11 14:11:01'),(14,'Rather Not Say','2022-01-11 14:11:01','2022-01-11 14:11:01'),(15,'Others','2022-01-11 14:11:01','2022-01-11 14:11:01');
/*!40000 ALTER TABLE `gender` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `orders`
--

DROP TABLE IF EXISTS `orders`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `orders` (
  `orders_id` int NOT NULL AUTO_INCREMENT,
  `user_profile_id` int NOT NULL,
  `food_id` int NOT NULL,
  `quantity` varchar(50) NOT NULL,
  `date_created` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `date_updated` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`orders_id`),
  KEY `fk_food_id_idx` (`food_id`),
  KEY `fk_user_profile_id_idx` (`user_profile_id`),
  CONSTRAINT `fk_orders_food_id` FOREIGN KEY (`food_id`) REFERENCES `food` (`food_id`) ON DELETE RESTRICT ON UPDATE CASCADE,
  CONSTRAINT `fk_orders_user_profile_id` FOREIGN KEY (`user_profile_id`) REFERENCES `user_profile` (`user_profile_id`) ON DELETE RESTRICT ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `orders`
--

LOCK TABLES `orders` WRITE;
/*!40000 ALTER TABLE `orders` DISABLE KEYS */;
/*!40000 ALTER TABLE `orders` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `payment`
--

DROP TABLE IF EXISTS `payment`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `payment` (
  `payment_id` int NOT NULL AUTO_INCREMENT,
  `orders_id` int NOT NULL,
  `payment_type` varchar(45) NOT NULL,
  `sub_total_amount` varchar(45) NOT NULL,
  `date_created` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `date_updated` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`payment_id`),
  KEY `fk_order_id_idx` (`orders_id`),
  CONSTRAINT `fk_orders_id` FOREIGN KEY (`orders_id`) REFERENCES `orders` (`orders_id`) ON DELETE RESTRICT ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `payment`
--

LOCK TABLES `payment` WRITE;
/*!40000 ALTER TABLE `payment` DISABLE KEYS */;
/*!40000 ALTER TABLE `payment` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sessiontbl`
--

DROP TABLE IF EXISTS `sessiontbl`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `sessiontbl` (
  `session_id` varchar(128) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `expires` int unsigned NOT NULL,
  `data` mediumtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin,
  PRIMARY KEY (`session_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sessiontbl`
--

LOCK TABLES `sessiontbl` WRITE;
/*!40000 ALTER TABLE `sessiontbl` DISABLE KEYS */;
INSERT INTO `sessiontbl` VALUES ('0T0RLQUxXkM4tfM5zeYlNZlvE2ns6omO',1642142543,'{\"cookie\":{\"originalMaxAge\":86400000,\"expires\":\"2022-01-14T06:33:07.124Z\",\"httpOnly\":true,\"path\":\"/\",\"sameSite\":\"none\"},\"userInfo\":[{\"user_profile_id\":1,\"first_name\":\"Ryan Gerome\",\"last_name\":\"Regis\",\"contact_number\":\"639123456789\",\"address\":\"Barangay 168, Caloocan City\",\"gender_id\":1,\"user_login_id\":5,\"user_other_details_id\":5,\"date_created\":\"2022-01-12T12:17:06.000Z\",\"date_updated\":\"2022-01-12T12:17:06.000Z\",\"email\":\"ryanregis99@gmail.com\",\"access\":\"user\",\"relationship_status\":\"single\",\"sexual_orientation_id\":10,\"has_allergy\":0,\"allergens\":\"No Allergens\",\"checked_promotions\":0}]}');
/*!40000 ALTER TABLE `sessiontbl` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sexual_orientation`
--

DROP TABLE IF EXISTS `sexual_orientation`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `sexual_orientation` (
  `sexual_orirentation_id` int NOT NULL AUTO_INCREMENT,
  `sexual_orientation` varchar(100) NOT NULL,
  `date_created` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `date_updated` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`sexual_orirentation_id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sexual_orientation`
--

LOCK TABLES `sexual_orientation` WRITE;
/*!40000 ALTER TABLE `sexual_orientation` DISABLE KEYS */;
INSERT INTO `sexual_orientation` VALUES (1,'Straight / Heterosexual','2022-01-11 14:13:11','2022-01-11 14:13:11'),(2,'Gay','2022-01-11 14:13:11','2022-01-11 14:13:11'),(3,'Lesbian','2022-01-11 14:13:11','2022-01-11 14:13:11'),(4,'Bisexual','2022-01-11 14:13:11','2022-01-11 14:13:11'),(5,'Queer','2022-01-11 14:13:11','2022-01-11 14:13:11'),(6,'Questioning','2022-01-11 14:13:11','2022-01-11 14:13:11'),(7,'Asexual','2022-01-11 14:13:11','2022-01-11 14:13:11'),(8,'Demisexual','2022-01-11 14:13:11','2022-01-11 14:13:11'),(9,'Pansexual','2022-01-11 14:13:11','2022-01-11 14:13:11'),(10,'Rather Not Say','2022-01-11 14:13:11','2022-01-11 14:13:11'),(11,'Others','2022-01-11 14:13:11','2022-01-11 14:13:11');
/*!40000 ALTER TABLE `sexual_orientation` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_login`
--

DROP TABLE IF EXISTS `user_login`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user_login` (
  `user_login_id` int NOT NULL AUTO_INCREMENT,
  `email` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  `access` varchar(100) NOT NULL,
  `date_created` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `date_updated` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`user_login_id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_login`
--

LOCK TABLES `user_login` WRITE;
/*!40000 ALTER TABLE `user_login` DISABLE KEYS */;
INSERT INTO `user_login` VALUES (5,'ryanregis99@gmail.com','$2b$08$yfP8WM46dQareDmb0Bn.O.orq1uqPpJmbHT/JJSvb2Bh8jm8Jn9Si','user','2022-01-12 20:17:05','2022-01-12 20:17:05'),(6,'hello@world.com','$2b$08$o.tiUH59YMqu.Zbpfa1SN.TVZIF1K8.aJgPVeca4Mx5kTdVhF1jc2','user','2022-01-13 03:31:58','2022-01-13 03:31:58');
/*!40000 ALTER TABLE `user_login` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_other_details`
--

DROP TABLE IF EXISTS `user_other_details`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user_other_details` (
  `user_other_details_id` int NOT NULL AUTO_INCREMENT,
  `relationship_status` varchar(45) NOT NULL,
  `sexual_orientation_id` int NOT NULL,
  `has_allergy` tinyint NOT NULL,
  `allergens` varchar(45) NOT NULL,
  `checked_promotions` tinyint NOT NULL,
  `date_created` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `date_updated` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`user_other_details_id`),
  KEY `fk_sexual_orientation_id_idx` (`sexual_orientation_id`),
  CONSTRAINT `fk_sexual_orientation_id` FOREIGN KEY (`sexual_orientation_id`) REFERENCES `sexual_orientation` (`sexual_orirentation_id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_other_details`
--

LOCK TABLES `user_other_details` WRITE;
/*!40000 ALTER TABLE `user_other_details` DISABLE KEYS */;
INSERT INTO `user_other_details` VALUES (5,'single',10,0,'No Allergens',0,'2022-01-12 20:17:06','2022-01-12 20:17:06'),(6,'single',1,0,'No Allergens',1,'2022-01-13 03:31:58','2022-01-13 03:31:58');
/*!40000 ALTER TABLE `user_other_details` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_profile`
--

DROP TABLE IF EXISTS `user_profile`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user_profile` (
  `user_profile_id` int NOT NULL AUTO_INCREMENT,
  `first_name` varchar(100) NOT NULL,
  `last_name` varchar(100) NOT NULL,
  `contact_number` varchar(20) NOT NULL,
  `address` varchar(100) NOT NULL,
  `gender_id` int NOT NULL,
  `user_login_id` int NOT NULL,
  `user_other_details_id` int NOT NULL,
  `date_created` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `date_updated` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`user_profile_id`),
  KEY `fk_user_other_details_id_idx` (`user_other_details_id`),
  KEY `fk_user_login_id_idx` (`user_login_id`),
  KEY `fk_gender_id_idx` (`gender_id`),
  CONSTRAINT `fk_gender_id` FOREIGN KEY (`gender_id`) REFERENCES `gender` (`gender_id`) ON DELETE RESTRICT ON UPDATE CASCADE,
  CONSTRAINT `fk_user_login_id` FOREIGN KEY (`user_login_id`) REFERENCES `user_login` (`user_login_id`),
  CONSTRAINT `fk_user_other_details_id` FOREIGN KEY (`user_other_details_id`) REFERENCES `user_other_details` (`user_other_details_id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_profile`
--

LOCK TABLES `user_profile` WRITE;
/*!40000 ALTER TABLE `user_profile` DISABLE KEYS */;
INSERT INTO `user_profile` VALUES (1,'Ryan Gerome','Regis','639123456789','Barangay 168, Caloocan City',1,5,5,'2022-01-12 20:17:06','2022-01-12 20:17:06'),(2,'hello','world','639123456789','Somewhere',1,6,6,'2022-01-13 03:31:59','2022-01-13 03:31:59');
/*!40000 ALTER TABLE `user_profile` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-01-13 15:12:35
