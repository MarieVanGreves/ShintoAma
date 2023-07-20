-- Host: 54.38.34.182    Database: shintoama
-- ------------------------------------------------------
-- Server version	8.0.33-0ubuntu0.22.04.2

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
-- Table structure for table `Divinites`
--

DROP TABLE IF EXISTS `Divinites`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Divinites` (
  `Id` int NOT NULL AUTO_INCREMENT,
  `Nom` varchar(100) NOT NULL,
  `Description` text,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Divinites`
--

LOCK TABLES `Divinites` WRITE;
/*!40000 ALTER TABLE `Divinites` DISABLE KEYS */;
INSERT INTO `Divinites` VALUES (1,'Amaterasu',NULL),(2,'Inari',NULL),(3,'Susanoo',NULL),(4,'Hachiman',NULL),(5,'Izanami',NULL),(6,'Amaterasu',NULL),(7,'Inari',NULL),(8,'Susanoo',NULL),(9,'Hachiman',NULL),(10,'Izanami',NULL);
/*!40000 ALTER TABLE `Divinites` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Temples`
--

DROP TABLE IF EXISTS `Temples`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Temples` (
  `Id` int NOT NULL AUTO_INCREMENT,
  `Nom` varchar(100) NOT NULL,
  `Ville` varchar(100) NOT NULL,
  `Préfecture` varchar(100) DEFAULT NULL,
  `Description` text,
  `DateFondation` date DEFAULT NULL,
  `Adresse` varchar(200) DEFAULT NULL,
  `DiviniteId` int DEFAULT NULL,
  `imageUrl` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`Id`),
  KEY `FK_Temples_Divinites` (`DiviniteId`),
  CONSTRAINT `FK_Temples_Divinites` FOREIGN KEY (`DiviniteId`) REFERENCES `Divinites` (`Id`)
) ENGINE=InnoDB AUTO_INCREMENT=26 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Temples`
--

LOCK TABLES `Temples` WRITE;
/*!40000 ALTER TABLE `Temples` DISABLE KEYS */;
INSERT INTO `Temples` VALUES (11,'Meiji-jingu','Tokyo','Tokyo','Situé dans le parc Yoyogi, dédié à l\'Empereur Meiji et à l\'Impératrice Shoken. PS: Fritine est priée de venir chercher Kei dans le temple, merci','1920-11-01','1-1, Yoyogi Kamizonocho, Shibuya',NULL,'https://www.terres-japonaises.com/app/media/26/files/2016/07/sanctuaire-meiji-jingu-tokyo-japon.jpg'),(12,'Fushimi Inari-taisha','Kyoto','Kyoto','Sanctuaire emblématique de Kyoto, Japon, avec ses torii vermillon en tunnel dédié à Inari. Populaire auprès des visiteurs, offrant des vues panoramiques au sommet.','0711-01-01','68, Fukakusa Yabunouchicho, Fushimi',NULL,'https://www.smallgrouptours.co.za/wp-content/uploads/2019/06/Toris_inari_7.jpg'),(14,'Ise-jingu','Ise','Mie','Un complexe de sanctuaires shinto situé à Ise, au Japon, dédié à la déesse Amaterasu. Considéré comme l\'un des sanctuaires les plus sacrés du Japon, il est reconstruit tous les 20 ans selon la tradition shinto.',NULL,'1, Ujitachicho, Ise',NULL,'https://gaijinpot.scdn3.secure.raxcdn.com/app/uploads/sites/4/2015/04/ise-shrine-1-1024x683.jpg'),(15,'Toshogu Shrine','Nikko','Tochigi','Situé à Nikko, Japon, c\'est un sanctuaire shinto orné de riches décorations et de sculptures détaillées. Il abrite le mausolée du shogun Tokugawa Ieyasu. Un site historique et culturel important.','1617-01-01','2301 Sannai, Nikko',NULL,'https://fr.japantravel.com/photo/poi-39-210405/1200x630/tochigi-toshogu-shrine-210405.jpg'),(21,'Kinkaku-ji','Kyoto',NULL,'Connue sous le nom de Pavillon d\'Or, c\'est un temple bouddhiste zen situé à Kyoto, Japon. Sa structure en or reflétée dans l\'étang environnant crée un paysage saisissant et emblématique du Japon.',NULL,NULL,NULL,'https://media-cdn.tripadvisor.com/media/photo-s/16/72/0f/2c/caption.jpg'),(22,'Senso-ji','Tokyo',NULL,'Le plus ancien temple bouddhiste de Tokyo, Japon, situé dans le quartier d\'Asakusa. Il est célèbre pour sa grande porte Kaminarimon, son marché animé Nakamise, et le temple principal abritant une statue de la déesse bouddhiste Kannon.',NULL,NULL,NULL,'https://media.cntraveler.com/photos/58d2b8c1ed5947303561e5f1/16:9/w_2560,c_limit/senso-ji-temple-tokyo-GettyImages-465360690.jpg'),(23,'Himeji-jo','Himeji',NULL,'Une magnifique forteresse médiévale située à Himeji, Japon. Connu pour son architecture élégante et sa couleur blanche éclatante, c\'est l\'un des plus grands châteaux du Japon et un site du patrimoine mondial de l\'UNESCO. ',NULL,NULL,NULL,'https://cdn.futura-sciences.com/sources/images/diaporama/1725-japon-merveilles/himeji-castle.jpg'),(24,'Itsukushima-jinja','Miyajima',NULL,'Un sanctuaire shintoïste situé sur l\'île de Miyajima au Japon. Célèbre pour son torii flottant, qui semble s\'élever hors de l\'eau pendant la marée haute. Le sanctuaire est un symbole emblématique de la beauté naturelle et spirituelle du Japon.',NULL,NULL,NULL,'https://www.kanpai.fr/sites/default/files/uploads/2013/03/miyajima-5.jpg'),(25,'Byodo-in','Uji',NULL,'Un temple bouddhiste situé dans la préfecture de Kyoto au Japon. Célèbre pour son élégante pagode à cinq étages et son étang paisible qui reflète la sérénité du lieu. ',NULL,NULL,NULL,'https://fr.japantravel.com/photo/poi-241-211685/1200x630/kyoto-byodo-in-temple-211685.jpg');
/*!40000 ALTER TABLE `Temples` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-07-20 15:31:32