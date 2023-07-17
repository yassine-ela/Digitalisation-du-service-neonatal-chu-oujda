<?php

namespace App\Entity;

use ApiPlatform\Metadata\ApiResource;
use App\Repository\FicheMiseaJourPatientTableRepository;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: FicheMiseaJourPatientTableRepository::class)]
#[ApiResource]
class FicheMiseaJourPatientTable
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 50)]
    private ?string $nomNne = null;

    #[ORM\Column(length: 50)]
    private ?string $prenomMere = null;

    #[ORM\Column(length: 100)]
    private ?string $motifDhospitalisation = null;

    #[ORM\Column(length: 150)]
    private ?string $daeDcRetenu = null;

    #[ORM\Column(length: 150)]
    private ?string $planRx = null;

    #[ORM\Column(length: 150)]
    private ?string $traitement = null;

    #[ORM\Column(length: 150)]
    private ?string $evolution = null;

    #[ORM\Column(length: 254)]
    private ?string $durantLaGarde = null;

    #[ORM\Column]
    private ?int $ip = null;

    #[ORM\Column(type: Types::DATE_MUTABLE)]
    private ?\DateTimeInterface $date = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getNomNne(): ?string
    {
        return $this->nomNne;
    }

    public function setNomNne(string $nomNne): static
    {
        $this->nomNne = $nomNne;

        return $this;
    }

    public function getPrenomMere(): ?string
    {
        return $this->prenomMere;
    }

    public function setPrenomMere(string $prenomMere): static
    {
        $this->prenomMere = $prenomMere;

        return $this;
    }

    public function getMotifDhospitalisation(): ?string
    {
        return $this->motifDhospitalisation;
    }

    public function setMotifDhospitalisation(string $motifDhospitalisation): static
    {
        $this->motifDhospitalisation = $motifDhospitalisation;

        return $this;
    }

    public function getDaeDcRetenu(): ?string
    {
        return $this->daeDcRetenu;
    }

    public function setDaeDcRetenu(string $daeDcRetenu): static
    {
        $this->daeDcRetenu = $daeDcRetenu;

        return $this;
    }

    public function getPlanRx(): ?string
    {
        return $this->planRx;
    }

    public function setPlanRx(string $planRx): static
    {
        $this->planRx = $planRx;

        return $this;
    }

    public function getTraitement(): ?string
    {
        return $this->traitement;
    }

    public function setTraitement(string $traitement): static
    {
        $this->traitement = $traitement;

        return $this;
    }

    public function getEvolution(): ?string
    {
        return $this->evolution;
    }

    public function setEvolution(string $evolution): static
    {
        $this->evolution = $evolution;

        return $this;
    }

    public function getDurantLaGarde(): ?string
    {
        return $this->durantLaGarde;
    }

    public function setDurantLaGarde(string $durantLaGarde): static
    {
        $this->durantLaGarde = $durantLaGarde;

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

    public function getDate(): ?\DateTimeInterface
    {
        return $this->date;
    }

    public function setDate(\DateTimeInterface $date): static
    {
        $this->date = $date;

        return $this;
    }
}
