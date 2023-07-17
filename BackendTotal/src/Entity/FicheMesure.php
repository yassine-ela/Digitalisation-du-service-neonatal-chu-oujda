<?php

namespace App\Entity;

use ApiPlatform\Metadata\ApiResource;
use App\Repository\FicheMesureRepository;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: FicheMesureRepository::class)]
#[ApiResource]
class FicheMesure
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(type: Types::ARRAY, nullable: true)]
    private array $atbs = [];

    #[ORM\Column(nullable: true)]
    private array $drogue = [];

    #[ORM\Column(nullable: true)]
    private array $generalInformation = [];

    #[ORM\Column(nullable: true)]
    private array $soins = [];

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getAtbs(): array
    {
        return $this->atbs;
    }

    public function setAtbs(?array $atbs): static
    {
        $this->atbs = $atbs;

        return $this;
    }

    public function getDrogue(): array
    {
        return $this->drogue;
    }

    public function setDrogue(?array $drogue): static
    {
        $this->drogue = $drogue;

        return $this;
    }

    public function getGeneralInformation(): array
    {
        return $this->generalInformation;
    }

    public function setGeneralInformation(array $generalInformation): static
    {
        $this->generalInformation = $generalInformation;

        return $this;
    }

    public function getSoins(): array
    {
        return $this->soins;
    }

    public function setSoins(?array $soins): static
    {
        $this->soins = $soins;

        return $this;
    }
}
