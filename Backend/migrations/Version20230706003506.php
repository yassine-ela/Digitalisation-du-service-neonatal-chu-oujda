<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20230706003506 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE ficheallaitment2 (id INT AUTO_INCREMENT NOT NULL, date DATE NOT NULL, ip INT NOT NULL, prenom_mere VARCHAR(50) NOT NULL, prematurity VARCHAR(12) NOT NULL, poids DOUBLE PRECISION NOT NULL, recommanded_quantity DOUBLE PRECISION NOT NULL, heure TIME NOT NULL, given_quantity DOUBLE PRECISION NOT NULL, residu VARCHAR(5) NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('DROP TABLE ficheallaitment2');
    }
}
