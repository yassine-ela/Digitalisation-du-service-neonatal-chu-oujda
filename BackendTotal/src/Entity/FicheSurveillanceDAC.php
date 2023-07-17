<?php

namespace App\Entity;

use ApiPlatform\Metadata\ApiResource;
use App\Repository\FicheSurveillanceDACRepository;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: FicheSurveillanceDACRepository::class)]
#[ApiResource]
class FicheSurveillanceDAC
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column]
    private ?int $ip = null;

    #[ORM\Column(length: 50)]
    private ?string $etablissement = null;

    #[ORM\Column(length: 50)]
    private ?string $service = null;

    #[ORM\Column]
    private ?int $nAdmission = null;

    #[ORM\Column(length: 150)]
    private ?string $nomPrenom = null;

    #[ORM\Column]
    private ?int $age = null;

    #[ORM\Column(type: Types::DATE_MUTABLE)]
    private ?\DateTimeInterface $date = null;

    #[ORM\Column]
    private ?int $mois = null;

    #[ORM\Column]
    private ?int $annee = null;

    #[ORM\Column]
    private ?int $nSalle = null;

    #[ORM\Column]
    private ?int $nLit = null;

    #[ORM\Column(length: 50)]
    private ?string $diagnostic = null;

    #[ORM\Column]
    private ?int $nFiche = null;

    public function getId(): ?int
    {
        return $this->id;
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

    public function getEtablissement(): ?string
    {
        return $this->etablissement;
    }

    public function setEtablissement(string $etablissement): static
    {
        $this->etablissement = $etablissement;

        return $this;
    }

    public function getService(): ?string
    {
        return $this->service;
    }

    public function setService(string $service): static
    {
        $this->service = $service;

        return $this;
    }

    public function getNAdmission(): ?int
    {
        return $this->nAdmission;
    }

    public function setNAdmission(int $nAdmission): static
    {
        $this->nAdmission = $nAdmission;

        return $this;
    }

    public function getNomPrenom(): ?string
    {
        return $this->nomPrenom;
    }

    public function setNomPrenom(string $nomPrenom): static
    {
        $this->nomPrenom = $nomPrenom;

        return $this;
    }

    public function getAge(): ?int
    {
        return $this->age;
    }

    public function setAge(int $age): static
    {
        $this->age = $age;

        return $this;
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

    public function getMois(): ?int
    {
        return $this->mois;
    }

    public function setMois(int $mois): static
    {
        $this->mois = $mois;

        return $this;
    }

    public function getAnnee(): ?int
    {
        return $this->annee;
    }

    public function setAnnee(int $annee): static
    {
        $this->annee = $annee;

        return $this;
    }

    public function getNSalle(): ?int
    {
        return $this->nSalle;
    }

    public function setNSalle(int $nSalle): static
    {
        $this->nSalle = $nSalle;

        return $this;
    }

    public function getNLit(): ?int
    {
        return $this->nLit;
    }

    public function setNLit(int $nLit): static
    {
        $this->nLit = $nLit;

        return $this;
    }

    public function getDiagnostic(): ?string
    {
        return $this->diagnostic;
    }

    public function setDiagnostic(string $diagnostic): static
    {
        $this->diagnostic = $diagnostic;

        return $this;
    }

    public function getNFiche(): ?int
    {
        return $this->nFiche;
    }

    public function setNFiche(int $nFiche): static
    {
        $this->nFiche = $nFiche;

        return $this;
    }
}
