<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20230705234653 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE fiche_allaitement CHANGE date_fiche_allaitement date DATE NOT NULL');
        $this->addSql('ALTER TABLE fiche_allaitement_table CHANGE date_fiche_allaitement date DATE NOT NULL');
        $this->addSql('ALTER TABLE fiche_misea_jour_patient CHANGE date_fiche_misea_jour_patient date DATE NOT NULL');
        $this->addSql('ALTER TABLE fiche_misea_jour_patient_table CHANGE date_fiche_misea_jour_patient date DATE NOT NULL');
        $this->addSql('ALTER TABLE fiche_surveillance CHANGE date_fiche_surveillance date DATE NOT NULL');
        $this->addSql('ALTER TABLE fiche_surveillance_dac CHANGE date_fiche_dacdhosipitalisation date DATE NOT NULL');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE fiche_allaitement CHANGE date date_fiche_allaitement DATE NOT NULL');
        $this->addSql('ALTER TABLE fiche_allaitement_table CHANGE date date_fiche_allaitement DATE NOT NULL');
        $this->addSql('ALTER TABLE fiche_misea_jour_patient CHANGE date date_fiche_misea_jour_patient DATE NOT NULL');
        $this->addSql('ALTER TABLE fiche_misea_jour_patient_table CHANGE date date_fiche_misea_jour_patient DATE NOT NULL');
        $this->addSql('ALTER TABLE fiche_surveillance CHANGE date date_fiche_surveillance DATE NOT NULL');
        $this->addSql('ALTER TABLE fiche_surveillance_dac CHANGE date date_fiche_dacdhosipitalisation DATE NOT NULL');
    }
}
