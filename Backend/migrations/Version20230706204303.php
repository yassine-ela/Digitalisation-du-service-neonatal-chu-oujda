<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20230706204303 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('DROP TABLE ficheallaitment2');
        $this->addSql('ALTER TABLE fiche_surveillance_table CHANGE date_fiche_surveillance date DATE NOT NULL');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE ficheallaitment2 (id INT AUTO_INCREMENT NOT NULL, date DATE NOT NULL, ip INT NOT NULL, prenom_mere VARCHAR(50) CHARACTER SET utf8mb4 NOT NULL COLLATE `utf8mb4_unicode_ci`, prematurity VARCHAR(12) CHARACTER SET utf8mb4 NOT NULL COLLATE `utf8mb4_unicode_ci`, poids DOUBLE PRECISION NOT NULL, recommanded_quantity DOUBLE PRECISION NOT NULL, heure TIME NOT NULL, given_quantity DOUBLE PRECISION NOT NULL, residu VARCHAR(5) CHARACTER SET utf8mb4 NOT NULL COLLATE `utf8mb4_unicode_ci`, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB COMMENT = \'\' ');
        $this->addSql('ALTER TABLE fiche_surveillance_table CHANGE date date_fiche_surveillance DATE NOT NULL');
    }
}
