<?php

namespace App\Entity;

use ApiPlatform\Metadata\ApiResource;
use App\Repository\FicheMiseaJourPatientRepository;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: FicheMiseaJourPatientRepository::class)]
#[ApiResource]
class FicheMiseaJourPatient
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(type: Types::DATE_MUTABLE)]
    private ?\DateTimeInterface $date = null;

    #[ORM\Column]
    private ?int $ip = null;

    #[ORM\Column(length: 30)]
    private ?string $couvertureSanitaire = null;

    #[ORM\Column(length: 20)]
    private ?string $sexe = null;

    #[ORM\Column(length: 50)]
    private ?string $villeProvenance = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getDate(): ?\DateTimeInterface
    {
        return $this->date;
    }

    public function setDate(\DateTimeInterface $date): static
    {
        $this->date = $date;

        return $this;
    }

    public function getIp(): ?int
    {
        return $this->ip;
    }

    public function setIp(int $ip): static
    {
        $this->ip = $ip;

        return $this;
    }

    public function getCouvertureSanitaire(): ?string
    {
        return $this->couvertureSanitaire;
    }

    public function setCouvertureSanitaire(string $couvertureSanitaire): static
    {
        $this->couvertureSanitaire = $couvertureSanitaire;

        return $this;
    }

    public function getSexe(): ?string
    {
        return $this->sexe;
    }

    public function setSexe(string $sexe): static
    {
        $this->sexe = $sexe;

        return $this;
    }

    public function getVilleProvenance(): ?string
    {
        return $this->villeProvenance;
    }

    public function setVilleProvenance(string $villeProvenance): static
    {
        $this->villeProvenance = $villeProvenance;

        return $this;
    }
}
