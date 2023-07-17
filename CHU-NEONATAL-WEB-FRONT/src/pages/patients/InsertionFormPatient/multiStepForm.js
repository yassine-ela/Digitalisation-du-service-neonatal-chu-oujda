
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createPatient } from 'store/reducers/actionPatient';
import { Alert, Snackbar } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';




import {
    Button,
    Stepper,
    Step,
    StepLabel,
    Typography,
    TextField,
    FormLabel,
    RadioGroup,
    FormControlLabel,
    Radio,
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    FormGroup,
    Checkbox,

} from '@mui/material';
import { DatePicker } from '@mui/lab';

const steps = ['Info Personnels', 'Info Naissance', 'Examens1', 'Examens2', 'Infos Sortie'];

const MultiStepForm = () => {

    const [activeStep, setActiveStep] = useState(0);
    //const patients = useSelector((state) => state.patients);
    //const loading = useSelector((state) => state.loading);
    //const error = useSelector((state) => state.error);

    const dispatch = useDispatch();
    const [alertOpen, setAlertOpen] = useState(false);
    const [alertMessage, setAlertMessage] = useState('');
    const [alertSeverity, setAlertSeverity] = useState('success');


    // useEffect(() => {
    //   dispatch(fetchPatients());
    // }, [dispatch]);



    const [formValues, setFormValues] = useState({
        //************************1 ere partie du formulaire     lige 89****************************************
        ip: 0,
        nom: '',//ref
        prenomMere: '',//ref
        villeDeNaissance: '',//ref
        sexeAvantExamen: '',//ref
        telephone: '',//ref
        age: 0,
        dateDeNaissance: null,
        heureDeNaissance: null,
        regionDeNaissance: '',//ref
        adresse: '',//ref
        couvertureSanitaire: '',//ref
        villeProvenance: '',//ref

        //---------------------------------------------------------------------------------------------
        modeDadmission: '',//ref
        dateDadmission: new Date(),//
        heureDadmission: null,//
        medecinGardeAdmission: '',//ref
        diagnosticDentree: '',//ref
        motifDhospitalisation: '',//ref
        //--------------------------------------------------------------------------------
        ageMere: 0,
        professionMere: '',//ref
        agePere: 0,
        professionPere: '',//ref

        //************************2 eme partie du formulaire  ligne ****************************************
        cosanguinite: '',//ref
        pariteMere:0, //Par exemple, si une femme a eu deux enfants vivants et une fausse couche, sa parité est de deux.
        gestiteMere:0, //Par exemple, si une femme a eu deux enfants vivants et deux fausses couches, sa gestité est de quatre.
        ageGestationnel:0, //L'âge gestationnel est le temps écoulé depuis le début de la grossesse jusqu'à une certaine étape de développement du fœtus ou jusqu'à la naissance.
        preciserIvg: [],
        nbreFrere:0,
        atcdPatho: '',//ref, //si ceux-ci ont des antécédents de problèmes de santé.


        histoireDeLaMaladieMere: '',
        poidsNaiss:0.0,
        tailleNaiss:0.0,
        pcNaiss:0.0,
        dateDadmissionDeLaMereAccouchement: null,//
        heureDadmissionDeLaMereAccouchement: null,//
        lieuAccouchement: '',
        dureeDeTravailAcc:0,
        presentationAcc: '',
        rpdeAcc: '',
        liquideAmniotiqueAcc: '',
        tMereAcc:0.0,
        survFoetaleAccouchement: '',
        maniereAccouchement: '',
        apgar1Min: 0,
        apgar5Min: 0,
        apgar10Min: 0,
        criEnfant: '',
        cyanoseEnfant: '',
        reanimationEnfant: '',
        typeBasse: '',
        indicationCesarienne: '',
        heureCesarienne: null,//
        maturation: '',

        //************************3 eme partie du formulaire  ligne ****************************************

        auscultation: '',
        aspects: '',
        pEtatGeneral: 0.0,
        tEtatGeneral: 0.0,
        pcEtatGeneral: 0.0,
        trcEtatGeneral: 0.0,
        taEtatGeneral: 0.0,
        battementsDesAilesAuNez: 0,
        tirageIntercostal: 0,
        balancementsThoracoAbdominal: 0,
        entonnoirXyphoidien: 0,
        ceignementExpiratoire: 0,
        dextro: 0.0,
        sa2: 0.0,
        frEtatGeneral: 0.0,
        fcEtatGeneral: 0.0,
        tempEtatGeneral: 0.0,
        poulsPeripheriques: '',
        organesGenitauxExternes: '',

        //************************4 eme partie du formulaire  ligne ****************************************
        conscienceExamNeurologique: '',
        criExamNeurologique: '',
        tonusExamNeurologique: '',


        hpmExamAbdominoPelvien: '',
        smgExamAbdominoPelvien: '',
        asciteExamAbdominoPelvien: '',
        mpExamAbdominoPelvien: '',
        aaExamAbdominoPelvien: '',
        ombilicExamAbdominoPelvien: '',
        descMeconium: '',
        qteMeconium:0.0,
        heureEmissionMeconium: null,//modif
        scoreDubowitz: 0.0,
        scoreFarr: 0.0,
        descExamCutaneoMuqueux: '',

        moro: '',
        succion: '',
        grasping: '',
        pointsCardinaux: '',
        allongementCroise: '',
        marcheAutomatique: '',
        //************************5 eme partie du formulaire  ligne **************************************
        atresieOesophage: '',
        fenteLabioPalatine: '',
        atresieDesChoanes: '',
        anomalieOrthopedique: '',
        autreAnomalie: '',
        conclusionCliniqueEtDiagnostiquesEvoques: '',
        diagnosticRetenues: '',
        conduiteATenir: '',
        dateSortie: null,
        lieuDeTransfert: '',
        dateDeTransfert: null,
        dateDeDeces: null,
        diagnoticDeSortie: '',
        heureDeDeces: null,
        causeDeDeces: '',
        dateSurveillanceClinique:null,
        examenComplémentaireSurveillanceClinique: '',
        resultatSurveillanceClinique: '',
        commentairesSurveillanceClinique: ''
    });

    const handleNext = () => {

        // Passer à l'étape suivante
        setActiveStep(activeStep + 1);
    };
    const handleAlertClose = () => {
        setAlertOpen(false);
    };

    const handleBack = () => {
        setActiveStep(activeStep - 1);
    };



    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     try {
    //       await dispatch(createPatient(formValues)); // Dispatch d'une action spécifique au store
    //       alert('Les données ont été remplies avec succès !');
    //       console.log(formValues)
    //     } catch (error) {
    //       console.error('Error submitting form:', error);
    //       alert('Une erreur s\'est produite lors de l\'enregistrement du patient.');
    //       console.log(formValues)
    //     }
    //   };

    const handleSubmit = async () => {
        try {
            await dispatch(createPatient(formValues));
            setAlertMessage('Les données ont été remplies avec succès !');
            setAlertSeverity('success');
            setAlertOpen(true);
            console.log(formValues);
        } catch (error) {
            console.error('Error submitting form:', error);
            setAlertMessage("Une erreur s'est produite lors de l'enregistrement du patient.");
            setAlertSeverity('error');
            setAlertOpen(true);
            console.log(formValues);
        }
    };


    return (
        <>
            <Stepper activeStep={activeStep}>
                {steps.map((label) => (
                    <Step key={label}>
                        <StepLabel>{label}</StepLabel>
                    </Step>
                ))}
            </Stepper>
            <Typography variant="h6" align="center" gutterBottom>
                {steps[activeStep]}
            </Typography>
            <form onSubmit={handleSubmit} >
                {activeStep === 0 && (
                    <div>
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', margin: '10px' }}>
                                <div
                                    style={{
                                        border: '2px solid rgb(0,117,253)',
                                        borderRadius: '8px',
                                        padding: '10px',
                                        position: 'relative',
                                        width: 'calc(50% - 10px)'
                                    }}
                                >
                                    <h5
                                        style={{
                                            position: 'absolute',
                                            top: '-30px',
                                            left: '50%',
                                            transform: 'translateX(-50%)',
                                            backgroundColor: 'rgb(249,250,252)',
                                            padding: '0 10px'
                                        }}
                                    >
                                        Infos du patient neonatal
                                    </h5>
                                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                        <TextField
                                            label="Ip"
                                            variant="outlined"
                                            margin="normal"
                                            style={{ marginLeft: '10px', marginRight: '10px' }} // Add right margin
                                            required
                                            fullWidth
                                            value={formValues.ip !== null ? formValues.ip.toString() : ''} // Convertir l'entier en chaîne de caractères pour l'affichage
                                            onChange={(e) => {
                                                const inputValue = e.target.value;
                                                if (inputValue === "") {
                                                    setFormValues({
                                                        ...formValues,
                                                        ip: 0,
                                                    });
                                                } else if (!isNaN(inputValue)) {
                                                    setFormValues({
                                                        ...formValues,
                                                        ip: parseInt(inputValue),
                                                    });
                                                }
                                            }}
                                        />

                                        <TextField
                                            label="Nom maman"
                                            variant="outlined"
                                            margin="normal"
                                            style={{ marginLeft: '10px', marginRight: '10px' }} // Ajouter une marge à gauche et à droite
                                            fullWidth
                                            value={formValues.nom ?? ''}
                                            onChange={(e) => setFormValues({ ...formValues, nom: e.target.value })}
                                        />

                                        <TextField
                                            label="Prénom maman"
                                            variant="outlined"
                                            margin="normal"
                                            style={{ marginLeft: '10px', marginRight: '10px' }} // Ajouter une marge à gauche et à droite

                                            fullWidth
                                            value={formValues.prenomMere ?? ''}
                                            onChange={(e) => setFormValues({ ...formValues, prenomMere: e.target.value })}
                                        />
                                    </div>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                        <FormControl fullWidth variant="outlined" style={{ marginLeft: '10px', marginRight: '10px' }}>
                                            <InputLabel style={{ marginTop: 'auto' }}>Couverture sanitaire</InputLabel>
                                            <Select
                                                value={formValues.couvertureSanitaire ?? ''}
                                                onChange={(e) => setFormValues({ ...formValues, couvertureSanitaire: e.target.value !== '' ? e.target.value : null})}
                                                label="Couverture sanitaire"
                                            >
                                                <MenuItem value="payant">Payant</MenuItem>
                                                <MenuItem value="mutualiste">Mutualiste</MenuItem>
                                                <MenuItem value="autre">Autre</MenuItem>
                                            </Select>
                                        </FormControl>
                                        <FormControl fullWidth variant="outlined" style={{ marginLeft: '10px', marginRight: '10px' }}>
                                            <InputLabel style={{ marginTop: 'auto' }}>Sexe</InputLabel>
                                            <Select
                                                value={formValues.sexeAvantExamen ?? ''}
                                                onChange={(e) => setFormValues({ ...formValues, sexeAvantExamen: e.target.value !== '' ? e.target.value : null })}
                                                label="Sexe"
                                            >
                                                <MenuItem value="masculin">Masculin</MenuItem>
                                                <MenuItem value="feminin">Féminin</MenuItem>
                                                <MenuItem value="autre">Autre</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </div>
                                    <TextField
                                        label="Region de naissance"
                                        variant="outlined"
                                        margin="normal"
                                        style={{ marginLeft: '10px', marginRight: '10px' }}

                                        fullWidth
                                        value={formValues.regionDeNaissance ?? ''}
                                        onChange={(e) => setFormValues({ ...formValues, regionDeNaissance: e.target.value })}
                                    />
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                        <TextField
                                            label="villeNaissance"
                                            variant="outlined"
                                            margin="normal"
                                            style={{ marginLeft: '10px', marginRight: '10px' }} // Ajouter une marge à gauche et à droite

                                            fullWidth
                                            value={formValues.villeDeNaissance ?? ''}
                                            onChange={(e) => setFormValues({ ...formValues, villeDeNaissance: e.target.value })}
                                        />
                                        <TextField
                                            label="Ville provenance"
                                            variant="outlined"
                                            margin="normal"
                                            style={{ marginLeft: '10px' }}

                                            fullWidth
                                            value={formValues.villeProvenance ?? ''}
                                            onChange={(e) => setFormValues({ ...formValues, villeProvenance: e.target.value })}
                                        />
                                    </div>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                        <TextField
                                            label="Telephone"
                                            variant="outlined"
                                            margin="normal"
                                            style={{ marginLeft: '10px' }}

                                            fullWidth
                                            value={formValues.telephone ?? ''}
                                            onChange={(e) => setFormValues({ ...formValues, telephone: e.target.value })}
                                        />
                                        <TextField
                                            label="Age"
                                            variant="outlined"
                                            margin="normal"
                                            style={{ marginLeft: '10px' }}

                                            fullWidth
                                            value={formValues.age !== null ? formValues.age.toString() : ''} // Convertir l'entier en chaîne de caractères pour l'affichage
                                            onChange={(e) => {
                                                const inputValue = e.target.value;
                                                if (inputValue === "") { // Vérifie si le champ est vide
                                                    setFormValues({
                                                        ...formValues,
                                                        age: 0, // Convertir à 0 au lieu de null
                                                    });
                                                } else if (!isNaN(inputValue)) { // Vérifie si la valeur est un nombre
                                                    setFormValues({
                                                        ...formValues,
                                                        age: parseInt(inputValue),
                                                    });
                                                }
                                            }}

                                        />
                                    </div>
                                    <Typography variant="subtitle1" component="label" sx={{ fontWeight: 'bold', color: 'gray' }}>
                                        Date et heure de naissance:
                                    </Typography>
                                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                        <TextField
                                            label=""
                                            variant="outlined"
                                            margin="normal"
                                            style={{ marginLeft: '10px', marginRight: '10px' }}
                                            type="date"
                                            fullWidth
                                            value={formValues.dateDeNaissance instanceof Date ? formValues.dateDeNaissance.toISOString().substr(0, 10) : ''}
                                            onChange={(e) => {
                                                const inputValue = e.target.value;
                                                const selectedDate = new Date(inputValue);
                                                setFormValues({ ...formValues, dateDeNaissance: selectedDate });
                                            }}
                                        />


                                        <TextField
                                            label="Heure d'admission"
                                            variant="outlined"
                                            margin="normal"
                                            style={{ marginLeft: '10px', marginRight: '10px' }}
                                            type="time"
                                            fullWidth
                                            value={formValues.heureDeNaissance ? formValues.heureDeNaissance.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) : ''}
                                            onChange={(e) => {
                                                const inputValue = e.target.value;
                                                const [hours, minutes] = inputValue.split(':');
                                                const selectedTime = new Date(formValues.heureDeNaissance);

                                                selectedTime.setHours(parseInt(hours));
                                                selectedTime.setMinutes(parseInt(minutes));

                                                setFormValues({ ...formValues, heureDeNaissance: selectedTime });
                                            }}
                                        />

                                    </div>

                                    <TextField
                                        label="Adresse"
                                        variant="outlined"
                                        margin="normal"
                                        style={{}}

                                        fullWidth
                                        multiline
                                        rows={2}
                                        value={formValues.adresse ?? ''}
                                        onChange={(e) => setFormValues({ ...formValues, adresse: e.target.value })}
                                    />
                                </div>
                                <div
                                    style={{
                                        border: '2px solid rgb(0,117,253)',
                                        borderRadius: '8px',
                                        padding: '10px',
                                        position: 'relative',
                                        width: 'calc(50% - 10px)'
                                    }}
                                >
                                    <h5
                                        style={{
                                            position: 'absolute',
                                            top: '-30px',
                                            left: '50%',
                                            transform: 'translateX(-50%)',
                                            backgroundColor: 'rgb(249,250,252)',
                                            padding: '0 10px'
                                        }}
                                    >
                                        Infos d'admission
                                    </h5>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                        <FormControl fullWidth variant="outlined" style={{ marginLeft: '10px', marginRight: '10px' }}>
                                            <InputLabel style={{ marginTop: 'auto' }}>Mode d'Admission</InputLabel>
                                            <Select
                                                value={formValues.modeDadmission ?? ''}
                                                onChange={(e) => setFormValues({ ...formValues, modeDadmission: e.target.value !== '' ? e.target.value : null})}
                                                label="Sexe"
                                            >
                                                <MenuItem value="Urgence">Urgenge</MenuItem>
                                                <MenuItem value="Rendez-vous">Rendez-vous</MenuItem>
                                                <MenuItem value="TRANSFERT">TRANSFERT</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </div>

                                    <TextField
                                        label="Medecin de garde a l'admission"
                                        variant="outlined"
                                        style={{ marginLeft: '10px', marginRight: '10px' }}
                                        margin="normal"

                                        fullWidth
                                        value={formValues.medecinGardeAdmission ?? ''}
                                        onChange={(e) => setFormValues({ ...formValues, medecinGardeAdmission: e.target.value })}
                                    />
                                    <Typography variant="subtitle1" component="label" sx={{ fontWeight: 'bold', color: 'gray' }}>
                                        Date et heure d'admission:
                                    </Typography>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                        <TextField
                                            label=""
                                            variant="outlined"
                                            margin="normal"
                                            style={{ marginLeft: '10px', marginRight: '10px' }}
                                            type="date"
                                            fullWidth
                                            value={formValues.dateDadmission instanceof Date ? formValues.dateDadmission.toISOString().substr(0, 10) : ''}
                                            onChange={(e) => {
                                                const inputValue = e.target.value;
                                                const selectedDate = new Date(inputValue);
                                                setFormValues({ ...formValues, dateDadmission: selectedDate });
                                            }}
                                            required // Ajout de la propriété required pour rendre le champ obligatoire
                                        />

                                        <TextField
                                            label="Heure d'admission"
                                            variant="outlined"
                                            margin="normal"
                                            style={{ marginLeft: '10px', marginRight: '10px' }}
                                            type="time"
                                            fullWidth
                                            value={formValues.heureDadmission ? formValues.heureDadmission.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) : ''}
                                            onChange={(e) => {
                                                const inputValue = e.target.value;
                                                const [hours, minutes] = inputValue.split(':');
                                                const selectedTime = new Date(formValues.heureDadmission);

                                                selectedTime.setHours(parseInt(hours));
                                                selectedTime.setMinutes(parseInt(minutes));

                                                setFormValues({ ...formValues, heureDadmission: selectedTime });
                                            }}
                                        />

                                    </div>
                                    <TextField
                                        label="Diagnostic d'entrée"
                                        variant="outlined"
                                        margin="normal"
                                        style={{}}

                                        fullWidth
                                        multiline
                                        rows={2}
                                        value={formValues.diagnosticDentree ?? ''}
                                        onChange={(e) => setFormValues({ ...formValues, diagnosticDentree: e.target.value })}
                                    />
                                    <TextField
                                        label="Motif d'hospitalisation(cause)"
                                        variant="outlined"
                                        margin="normal"
                                        style={{}}

                                        fullWidth
                                        multiline
                                        rows={2}
                                        value={formValues.motifDhospitalisation ?? ''}
                                        onChange={(e) => setFormValues({ ...formValues, motifDhospitalisation: e.target.value })}
                                    />
                                </div>
                            </div>

                            <div
                                style={{
                                    margin: '10px',
                                    border: '2px solid rgb(0,117,253)',
                                    borderRadius: '8px',
                                    padding: '10px',
                                    position: 'relative'
                                }}
                            >
                                <h5
                                    style={{
                                        position: 'absolute',
                                        top: '-30px',
                                        left: '50%',
                                        transform: 'translateX(-50%)',
                                        backgroundColor: 'rgb(249,250,252)',
                                        padding: '0 10px'
                                    }}
                                >
                                    Infos Parents
                                </h5>

                                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <TextField
                                        label="Age de la mere"
                                        variant="outlined"
                                        margin="normal"
                                        style={{ marginLeft: '10px', marginRight: '10px' }}

                                        fullWidth
                                        value={formValues.ageMere !== null ? formValues.ageMere.toString() : ''} // Convertir l'entier en chaîne de caractères pour l'affichage
                                        onChange={(e) => {
                                            const inputValue = e.target.value;
                                            if (inputValue === "") { // Vérifie si le champ est vide
                                                setFormValues({
                                                    ...formValues,
                                                    ageMere: 0, // Convertir à 0 au lieu de null
                                                });
                                            } else if (!isNaN(inputValue)) { // Vérifie si la valeur est un nombre
                                                setFormValues({
                                                    ...formValues,
                                                    ageMere: parseInt(inputValue),
                                                });
                                            }
                                        }}

                                    />
                                    <TextField
                                        label="Profession de le mere"
                                        variant="outlined"
                                        margin="normal"
                                        style={{ marginLeft: '10px', marginRight: '10px' }}

                                        fullWidth
                                        value={formValues.professionMere ?? ''}
                                        onChange={(e) => setFormValues({ ...formValues, professionMere: e.target.value })}
                                    />
                                    <TextField
                                        label="Age du pere"
                                        variant="outlined"
                                        margin="normal"
                                        style={{ marginLeft: '10px', marginRight: '10px' }}

                                        fullWidth
                                        value={formValues.agePere !== null ? formValues.agePere.toString() : ''} // Convertir l'entier en chaîne de caractères pour l'affichage
                                        onChange={(e) => {
                                            const inputValue = e.target.value;
                                            if (inputValue === "") { // Vérifie si le champ est vide
                                                setFormValues({
                                                    ...formValues,
                                                    agePere: 0, // Convertir à 0 au lieu de null
                                                });
                                            } else if (!isNaN(inputValue)) { // Vérifie si la valeur est un nombre
                                                setFormValues({
                                                    ...formValues,
                                                    agePere: parseInt(inputValue),
                                                });
                                            }
                                        }}

                                    />
                                    <TextField
                                        label="Profession du pere"
                                        variant="outlined"
                                        style={{ marginLeft: '10px', marginRight: '10px' }}
                                        margin="normal"

                                        fullWidth
                                        value={formValues.professionPere ?? ''}
                                        onChange={(e) => setFormValues({ ...formValues, professionPere: e.target.value })}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                )}
                {activeStep === 1 && (
                    <div>
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', margin: '10px' }}>
                                <div
                                    style={{
                                        border: '2px solid rgb(0,117,253)',
                                        borderRadius: '8px',
                                        padding: '10px',
                                        position: 'relative',
                                        width: 'calc(50% - 10px)'
                                    }}
                                >
                                    <h5
                                        style={{
                                            position: 'absolute',
                                            top: '-30px',
                                            left: '50%',
                                            transform: 'translateX(-50%)',
                                            backgroundColor: 'rgb(249,250,252)',
                                            padding: '0 10px'
                                        }}
                                    >
                                        Antécedants familliaux
                                    </h5>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                        <FormControl fullWidth variant="outlined" style={{ marginLeft: '10px', marginRight: '10px' }}>
                                            <InputLabel style={{ marginTop: 'auto' }}>Cosanguinité</InputLabel>
                                            <Select
                                                value={formValues.cosanguinite ?? ''}
                                                onChange={(e) => setFormValues({ ...formValues, cosanguinite: e.target.value !== '' ? e.target.value : null })}
                                                label="Cosanguinite"
                                            >
                                                <MenuItem value="Oui">Oui</MenuItem>
                                                <MenuItem value="Non">Non</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </div>

                                    <div>
                                        <Typography variant="subtitle1" component="label" sx={{ fontWeight: 'bold', color: 'gray' }}>
                                            Grossesse:
                                        </Typography>
                                    </div>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                        <FormControl fullWidth variant="outlined" style={{ marginLeft: '10px', marginRight: '10px' }}>
                                            <InputLabel style={{ marginTop: 'auto' }}>ParitéMére</InputLabel>
                                            <Select
                                                value={formValues.pariteMere || 0}
                                                onChange={(e) => setFormValues({ ...formValues, pariteMere:e.target.value  })}
                                                label="ParitéMére"
                                            >
                                                <MenuItem value={0}>0</MenuItem>
                                                <MenuItem value={1}>1</MenuItem>
                                                <MenuItem value={2}>2</MenuItem>
                                                <MenuItem value={3}>3</MenuItem>
                                                <MenuItem value={4}>4</MenuItem>
                                                <MenuItem value={5}>5</MenuItem>
                                                <MenuItem value={6}>6</MenuItem>
                                                <MenuItem value={7}>7</MenuItem>
                                                <MenuItem value={8}>8</MenuItem>
                                                <MenuItem value={9}>9</MenuItem>
                                                <MenuItem value={10}>10</MenuItem>
                                                <MenuItem value={11}>11</MenuItem>
                                                <MenuItem value={12}>12</MenuItem>
                                            </Select>
                                        </FormControl>
                                        <FormControl fullWidth variant="outlined" style={{ marginLeft: '10px', marginRight: '10px' }}>
                                            <InputLabel style={{ marginTop: 'auto' }}>GestitéMére</InputLabel>
                                            <Select
                                                value={formValues.gestiteMere || 0}
                                                onChange={(e) => setFormValues({ ...formValues, gestiteMere:e.target.value })}
                                                label="gestiteMere"
                                            >
                                                <MenuItem value={0}>0</MenuItem>
                                                <MenuItem value={1}>1</MenuItem>
                                                <MenuItem value={2}>2</MenuItem>
                                                <MenuItem value={3}>3</MenuItem>
                                                <MenuItem value={4}>4</MenuItem>
                                                <MenuItem value={5}>5</MenuItem>
                                                <MenuItem value={6}>6</MenuItem>
                                                <MenuItem value={7}>7</MenuItem>
                                                <MenuItem value={8}>8</MenuItem>
                                                <MenuItem value={9}>9</MenuItem>
                                                <MenuItem value={10}>10</MenuItem>
                                                <MenuItem value={11}>11</MenuItem>
                                                <MenuItem value={12}>12</MenuItem>
                                            </Select>
                                        </FormControl>
                                        <TextField
                                            label="Age gestationnel"
                                            variant="outlined"
                                            margin="normal"
                                            style={{ marginLeft: '10px', marginRight: '10px' }}
                                            fullWidth
                                            value={formValues.ageGestationnel !== null ? formValues.ageGestationnel.toString() : '' } // Convertir l'entier en chaîne de caractères pour l'affichage
                                            onChange={(e) => {
                                                const inputValue = e.target.value;
                                                if (inputValue === "") { // Vérifie si le champ est vide
                                                    setFormValues({
                                                        ...formValues,
                                                        ageGestationnel: 0, // Convertir à 0 au lieu de null
                                                    });
                                                } else if (!isNaN(inputValue)) { // Vérifie si la valeur est un nombre
                                                    setFormValues({
                                                        ...formValues,
                                                        ageGestationnel: parseInt(inputValue),
                                                    });
                                                }
                                            }}
                                        />

                                    </div>

                                    <div>
                                        <Typography variant="subtitle1" component="label" sx={{ fontWeight: 'bold', color: 'gray' }}>
                                            Déroulemnet de la grossesse:
                                        </Typography>
                                    </div>
                                    <div>
                                        <FormControl component="fieldset" sx={{ mt: 2 }}>
                                            <FormLabel component="legend">IVG</FormLabel>
                                            <FormGroup sx={{ display: 'flex', flexDirection: 'row' }}>
                                                <FormControlLabel
                                                    control={<Checkbox />}
                                                    label="toxoplasmose congénitale"
                                                    checked={formValues.preciserIvg.includes('toxoplasmose congénitale')}
                                                    onChange={(e) => {
                                                        if (e.target.checked) {
                                                            setFormValues({
                                                                ...formValues,
                                                                preciserIvg: [...formValues.preciserIvg, 'toxoplasmose congénitale']
                                                            });
                                                        } else {
                                                            const updatedValues = formValues.preciserIvg.filter(
                                                                (value) => value !== 'toxoplasmose congénitale'
                                                            );
                                                            setFormValues({ ...formValues, preciserIvg: updatedValues });
                                                        }
                                                    }}
                                                />
                                                <FormControlLabel
                                                    control={<Checkbox />}
                                                    label="Tuberculose"
                                                    checked={formValues.preciserIvg.includes('Tuberculose')}
                                                    onChange={(e) => {
                                                        if (e.target.checked) {
                                                            setFormValues({
                                                                ...formValues,
                                                                preciserIvg: [...formValues.preciserIvg, 'Tuberculose']
                                                            });
                                                        } else {
                                                            const updatedValues = formValues.preciserIvg.filter(
                                                                (value) => value !== 'Tuberculose'
                                                            );
                                                            setFormValues({ ...formValues, preciserIvg: updatedValues });
                                                        }
                                                    }}
                                                />
                                                <FormControlLabel
                                                    control={<Checkbox />}
                                                    label="Paludisme"
                                                    checked={formValues.preciserIvg.includes('Paludisme')}
                                                    onChange={(e) => {
                                                        if (e.target.checked) {
                                                            setFormValues({
                                                                ...formValues,
                                                                preciserIvg: [...formValues.preciserIvg, 'Paludisme']
                                                            });
                                                        } else {
                                                            const updatedValues = formValues.preciserIvg.filter(
                                                                (value) => value !== 'Paludisme'
                                                            );
                                                            setFormValues({ ...formValues, preciserIvg: updatedValues });
                                                        }
                                                    }}
                                                />
                                                <FormControlLabel
                                                    control={<Checkbox />}
                                                    label="candidose congénitale"
                                                    checked={formValues.preciserIvg.includes('candidose congénitale')}
                                                    onChange={(e) => {
                                                        if (e.target.checked) {
                                                            setFormValues({
                                                                ...formValues,
                                                                preciserIvg: [...formValues.preciserIvg, 'candidose congénitale']
                                                            });
                                                        } else {
                                                            const updatedValues = formValues.preciserIvg.filter(
                                                                (value) => value !== 'candidose congénitale'
                                                            );
                                                            setFormValues({ ...formValues, preciserIvg: updatedValues });
                                                        }
                                                    }}
                                                />
                                                <FormControlLabel
                                                    control={<Checkbox />}
                                                    label="Herpes génital"
                                                    checked={formValues.preciserIvg.includes('Herpes génital')}
                                                    onChange={(e) => {
                                                        if (e.target.checked) {
                                                            setFormValues({
                                                                ...formValues,
                                                                preciserIvg: [...formValues.preciserIvg, 'Herpes génital']
                                                            });
                                                        } else {
                                                            const updatedValues = formValues.preciserIvg.filter(
                                                                (value) => value !== 'Herpes génital'
                                                            );
                                                            setFormValues({ ...formValues, preciserIvg: updatedValues });
                                                        }
                                                    }}
                                                />
                                                <FormControlLabel
                                                    control={<Checkbox />}
                                                    label="Infection à cytomégalovirus"
                                                    checked={formValues.preciserIvg.includes('Infection à cytomégalovirus')}
                                                    onChange={(e) => {
                                                        if (e.target.checked) {
                                                            setFormValues({
                                                                ...formValues,
                                                                preciserIvg: [...formValues.preciserIvg, 'Infection à cytomégalovirus']
                                                            });
                                                        } else {
                                                            const updatedValues = formValues.preciserIvg.filter(
                                                                (value) => value !== 'Infection à cytomégalovirus'
                                                            );
                                                            setFormValues({ ...formValues, preciserIvg: updatedValues });
                                                        }
                                                    }}
                                                />
                                                <FormControlLabel
                                                    control={<Checkbox />}
                                                    label="Varicelle"
                                                    checked={formValues.preciserIvg.includes('Varicelle')}
                                                    onChange={(e) => {
                                                        if (e.target.checked) {
                                                            setFormValues({
                                                                ...formValues,
                                                                preciserIvg: [...formValues.preciserIvg, 'Varicelle']
                                                            });
                                                        } else {
                                                            const updatedValues = formValues.preciserIvg.filter(
                                                                (value) => value !== 'Varicelle'
                                                            );
                                                            setFormValues({ ...formValues, preciserIvg: updatedValues });
                                                        }
                                                    }}
                                                />
                                                <FormControlLabel
                                                    control={<Checkbox />}
                                                    label="Hépatite B"
                                                    checked={formValues.preciserIvg.includes('Hépatite B')}
                                                    onChange={(e) => {
                                                        if (e.target.checked) {
                                                            setFormValues({
                                                                ...formValues,
                                                                preciserIvg: [...formValues.preciserIvg, 'Hépatite B']
                                                            });
                                                        } else {
                                                            const updatedValues = formValues.preciserIvg.filter(
                                                                (value) => value !== 'Hépatite B'
                                                            );
                                                            setFormValues({ ...formValues, preciserIvg: updatedValues });
                                                        }
                                                    }}
                                                />
                                                <FormControlLabel
                                                    control={<Checkbox />}
                                                    label="Hépatite C"
                                                    checked={formValues.preciserIvg.includes('Hépatite C')}
                                                    onChange={(e) => {
                                                        if (e.target.checked) {
                                                            setFormValues({
                                                                ...formValues,
                                                                preciserIvg: [...formValues.preciserIvg, 'Hépatite C']
                                                            });
                                                        } else {
                                                            const updatedValues = formValues.preciserIvg.filter(
                                                                (value) => value !== 'Hépatite C'
                                                            );
                                                            setFormValues({ ...formValues, preciserIvg: updatedValues });
                                                        }
                                                    }}
                                                />
                                                <FormControlLabel
                                                    control={<Checkbox />}
                                                    label="Virus immunodéficience humaine"
                                                    checked={formValues.preciserIvg.includes('Virus immunodéficience humaine')}
                                                    onChange={(e) => {
                                                        if (e.target.checked) {
                                                            setFormValues({
                                                                ...formValues,
                                                                preciserIvg: [...formValues.preciserIvg, 'Virus immunodéficience humaine']
                                                            });
                                                        } else {
                                                            const updatedValues = formValues.preciserIvg.filter(
                                                                (value) => value !== 'Virus immunodéficience humaine'
                                                            );
                                                            setFormValues({ ...formValues, preciserIvg: updatedValues });
                                                        }
                                                    }}
                                                />
                                                <FormControlLabel
                                                    control={<Checkbox />}
                                                    label="Parvovirus B19"
                                                    checked={formValues.preciserIvg.includes('Parvovirus B19')}
                                                    onChange={(e) => {
                                                        if (e.target.checked) {
                                                            setFormValues({
                                                                ...formValues,
                                                                preciserIvg: [...formValues.preciserIvg, 'Parvovirus B19']
                                                            });
                                                        } else {
                                                            const updatedValues = formValues.preciserIvg.filter(
                                                                (value) => value !== 'Parvovirus B19'
                                                            );
                                                            setFormValues({ ...formValues, preciserIvg: updatedValues });
                                                        }
                                                    }}
                                                />
                                                <FormControlLabel
                                                    control={<Checkbox />}
                                                    label="Rubéole"
                                                    checked={formValues.preciserIvg.includes('Rubéole')}
                                                    onChange={(e) => {
                                                        if (e.target.checked) {
                                                            setFormValues({
                                                                ...formValues,
                                                                preciserIvg: [...formValues.preciserIvg, 'Rubéole']
                                                            });
                                                        } else {
                                                            const updatedValues = formValues.preciserIvg.filter(
                                                                (value) => value !== 'Rubéole'
                                                            );
                                                            setFormValues({ ...formValues, preciserIvg: updatedValues });
                                                        }
                                                    }}
                                                />
                                                <FormControlLabel
                                                    control={<Checkbox />}
                                                    label="Diabèthe"
                                                    checked={formValues.preciserIvg.includes('Diabèthe')}
                                                    onChange={(e) => {
                                                        if (e.target.checked) {
                                                            setFormValues({
                                                                ...formValues,
                                                                preciserIvg: [...formValues.preciserIvg, 'Diabèthe']
                                                            });
                                                        } else {
                                                            const updatedValues = formValues.preciserIvg.filter(
                                                                (value) => value !== 'Diabèthe'
                                                            );
                                                            setFormValues({ ...formValues, preciserIvg: updatedValues });
                                                        }
                                                    }}
                                                />
                                                <FormControlLabel
                                                    control={<Checkbox />}
                                                    label="Cardiopathie"
                                                    checked={formValues.preciserIvg.includes('Cardiopathie')}
                                                    onChange={(e) => {
                                                        if (e.target.checked) {
                                                            setFormValues({
                                                                ...formValues,
                                                                preciserIvg: [...formValues.preciserIvg, 'Cardiopathie']
                                                            });
                                                        } else {
                                                            const updatedValues = formValues.preciserIvg.filter(
                                                                (value) => value !== 'Cardiopathie'
                                                            );
                                                            setFormValues({ ...formValues, preciserIvg: updatedValues });
                                                        }
                                                    }}
                                                />
                                                <FormControlLabel
                                                    control={<Checkbox />}
                                                    label="Asthme"
                                                    checked={formValues.preciserIvg.includes('Asthme')}
                                                    onChange={(e) => {
                                                        if (e.target.checked) {
                                                            setFormValues({
                                                                ...formValues,
                                                                preciserIvg: [...formValues.preciserIvg, 'Asthme']
                                                            });
                                                        } else {
                                                            const updatedValues = formValues.preciserIvg.filter(
                                                                (value) => value !== 'Asthme'
                                                            );
                                                            setFormValues({ ...formValues, preciserIvg: updatedValues });
                                                        }
                                                    }}
                                                />
                                            </FormGroup>
                                        </FormControl>
                                    </div>


                                    <TextField
                                        label="Histoire de la maladie"
                                        variant="outlined"
                                        margin="normal"
                                        style={{}}

                                        fullWidth
                                        multiline
                                        rows={2}
                                        value={formValues.histoireDeLaMaladieMere ?? ''}
                                        onChange={(e) => setFormValues({ ...formValues, histoireDeLaMaladieMere: e.target.value })}
                                    />
                                    <div>
                                        <Typography variant="subtitle1" component="label" sx={{ fontWeight: 'bold', color: 'gray' }}>
                                            Fraterie:
                                        </Typography>
                                    </div>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                        <FormControl fullWidth variant="outlined" style={{ marginLeft: '10px', marginRight: '10px' }}>
                                            <InputLabel style={{ marginTop: 'auto' }}>NbreFrere</InputLabel>
                                            <Select
                                                value={formValues.nbreFrere || 0}
                                                onChange={(e) => setFormValues({ ...formValues, nbreFrere: parseInt(e.target.value) })}
                                                label="Nbre frère"
                                            >
                                                <MenuItem value={0}>0</MenuItem>
                                                <MenuItem value={1}>1</MenuItem>
                                                <MenuItem value={2}>2</MenuItem>
                                                <MenuItem value={3}>3</MenuItem>
                                                <MenuItem value={4}>4</MenuItem>
                                                <MenuItem value={5}>5</MenuItem>
                                                <MenuItem value={6}>6</MenuItem>
                                                <MenuItem value={7}>7</MenuItem>
                                                <MenuItem value={8}>8</MenuItem>
                                                <MenuItem value={9}>9</MenuItem>
                                                <MenuItem value={10}>10</MenuItem>
                                            </Select>
                                        </FormControl>

                                        <TextField
                                            label="Antécédent Pathologique"
                                            variant="outlined"
                                            margin="normal"
                                            style={{ marginLeft: '10px' }}

                                            fullWidth
                                            value={formValues.atcdPatho ?? ''}
                                            onChange={(e) => setFormValues({ ...formValues, atcdPatho: e.target.value })}
                                        />
                                    </div>
                                </div>
                                <div
                                    style={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        justifyContent: 'space-between',

                                        position: 'relative',
                                        width: 'calc(50% - 10px)'
                                    }}
                                >
                                    <div
                                        style={{
                                            border: '2px solid rgb(0,117,253)',
                                            borderRadius: '8px',
                                            padding: '10px',
                                            position: 'relative'
                                        }}
                                    >
                                        <h5
                                            style={{
                                                position: 'absolute',
                                                top: '-30px',
                                                left: '50%',
                                                transform: 'translateX(-50%)',
                                                backgroundColor: 'rgb(249,250,252)',
                                                padding: '0 10px'
                                            }}
                                        >
                                            Accouchement
                                        </h5>
                                        <Typography variant="subtitle1" component="label" sx={{ fontWeight: 'bold', color: 'gray' }}>
                                            Date et heure d'accouchement de la mére:
                                        </Typography>
                                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                            <TextField
                                                label=""
                                                variant="outlined"
                                                margin="normal"
                                                style={{ marginLeft: '10px', marginRight: '10px' }}
                                                type="date"
                                                fullWidth
                                                value={formValues.dateDadmissionDeLaMereAccouchement instanceof Date ? formValues.dateDadmissionDeLaMereAccouchement.toISOString().substr(0, 10) : ''}
                                                onChange={(e) => {
                                                    const inputValue = e.target.value;
                                                    const selectedDate = new Date(inputValue);
                                                    setFormValues({ ...formValues, dateDadmissionDeLaMereAccouchement: selectedDate });
                                                }}
                                            />
                                            <TextField
                                                label="Heure d'admission de la mère Accouchement"
                                                variant="outlined"
                                                margin="normal"
                                                style={{ marginLeft: '10px', marginRight: '10px' }}
                                                type="time"
                                                fullWidth
                                                value={formValues.heureDadmissionDeLaMereAccouchement ? formValues.heureDadmissionDeLaMereAccouchement.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) : ''}
                                                onChange={(e) => {
                                                    const inputValue = e.target.value;
                                                    const [hours, minutes] = inputValue.split(':');
                                                    const selectedTime = new Date(formValues.heureDadmissionDeLaMereAccouchement);

                                                    selectedTime.setHours(parseInt(hours));
                                                    selectedTime.setMinutes(parseInt(minutes));

                                                    setFormValues({ ...formValues, heureDadmissionDeLaMereAccouchement: selectedTime });
                                                }}
                                            />

                                        </div>
                                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                            <FormControl fullWidth variant="outlined" style={{ marginLeft: '10px', marginRight: '10px' }}>
                                                <InputLabel style={{ marginTop: 'auto' }}>Lieu accouchement</InputLabel>
                                                <Select
                                                    value={formValues.lieuAccouchement?? ''}
                                                    onChange={(e) => setFormValues({ ...formValues, lieuAccouchement: e.target.value !== '' ? e.target.value : null})}
                                                    label="Lieu accouchement"
                                                >
                                                    <MenuItem value="Domicile">Domicile</MenuItem>
                                                    <MenuItem value="Maternité hopital">Maternité hopital</MenuItem>
                                                    <MenuItem value="clinique privé">clinique privé</MenuItem>
                                                    <MenuItem value="Maison d'accouchement rural">Maison d'accouchement rural</MenuItem>
                                                    <MenuItem value="Autre">Autre</MenuItem>
                                                </Select>
                                            </FormControl>
                                        </div>
                                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                            <TextField
                                                label="Durée travail en minutes"
                                                variant="outlined"
                                                margin="normal"
                                                style={{ marginLeft: '10px', marginRight: '10px' }}

                                                fullWidth
                                                value={formValues.dureeDeTravailAcc !== null ? formValues.dureeDeTravailAcc.toString() : ''} // Convertir l'entier en chaîne de caractères pour l'affichage
                                                onChange={(e) => {
                                                    const inputValue = e.target.value;
                                                    if (inputValue === "") { // Vérifie si le champ est vide
                                                        setFormValues({
                                                            ...formValues,
                                                            dureeDeTravailAcc: 0, // Convertir à 0 au lieu de null
                                                        });
                                                    } else if (!isNaN(inputValue)) { // Vérifie si la valeur est un nombre
                                                        setFormValues({
                                                            ...formValues,
                                                            dureeDeTravailAcc: parseInt(inputValue),
                                                        });
                                                    }
                                                }}
                                            />
                                            <TextField
                                                label="Presentation"
                                                variant="outlined"
                                                margin="normal"
                                                style={{ marginLeft: '10px', marginRight: '10px' }}

                                                fullWidth
                                                value={formValues.presentationAcc ?? ''}
                                                onChange={(e) => setFormValues({ ...formValues, presentationAcc: e.target.value })}
                                            />
                                            <FormControl fullWidth variant="outlined" style={{ marginLeft: '10px', marginRight: '10px' }}>
                                                <InputLabel style={{ marginTop: 'auto' }}>RPDE</InputLabel>
                                                <Select
                                                    value={formValues.rpdeAcc ?? ''}
                                                    onChange={(e) => setFormValues({ ...formValues, rpdeAcc: e.target.value!== '' ? e.target.value : null })}
                                                    label="RPDE"
                                                >
                                                    <MenuItem value="oui">oui</MenuItem>
                                                    <MenuItem value="non">non</MenuItem>
                                                </Select>
                                            </FormControl>
                                        </div>

                                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                            <TextField
                                                label="Liquide amniotique"
                                                variant="outlined"
                                                style={{ marginLeft: '10px', marginRight: '10px' }}
                                                margin="normal"

                                                fullWidth
                                                value={formValues.liquideAmniotiqueAcc ?? ''}
                                                onChange={(e) => setFormValues({ ...formValues, liquideAmniotiqueAcc: e.target.value })}
                                            />
                                            <TextField
                                                type="number"
                                                label="T° mere accouchement"
                                                variant="outlined"
                                                margin="normal"
                                                style={{ marginLeft: '10px', marginRight: '10px' }}
                                                fullWidth
                                                value={formValues.tMereAcc !== null ? formValues.tMereAcc : ''}
                                                onChange={(e) => {
                                                    const newValue = e.target.value;
                                                    setFormValues({ ...formValues, tMereAcc: newValue !== '' ? parseFloat(newValue) : null });
                                                }}
                                                onBlur={() => {
                                                    const floatValue = parseFloat(formValues.tMereAcc);
                                                    if (isNaN(floatValue)) {
                                                        setFormValues({ ...formValues, tMereAcc: 0.0 });
                                                    } else {
                                                        setFormValues({ ...formValues, tMereAcc: floatValue });
                                                    }
                                                }}
                                            />

                                            <TextField
                                                label="Surveillance foetale"
                                                variant="outlined"
                                                style={{ marginLeft: '10px', marginRight: '10px' }}
                                                margin="normal"

                                                fullWidth
                                                value={formValues.survFoetaleAccouchement ?? ''}
                                                onChange={(e) => setFormValues({ ...formValues, survFoetaleAccouchement: e.target.value })}
                                            />
                                        </div>
                                        <FormControl component="fieldset">
                                            <FormLabel component="legend">Maniere d'accouchement</FormLabel>
                                            <RadioGroup
                                                row
                                                aria-label="Voie d'accouchement"
                                                name="accouchement"
                                                value={formValues.maniereAccouchement ?? ''}
                                                onChange={(e) => setFormValues({ ...formValues, maniereAccouchement: e.target.value })}
                                            >
                                                <FormControlLabel value="basse" control={<Radio />} label="Basse" />
                                                <FormControlLabel value="cesarienne" control={<Radio />} label="cesarienne" />
                                            </RadioGroup>
                                        </FormControl>
                                        <div>
                                            <Typography variant="subtitle1" component="label" sx={{ fontWeight: 'bold', color: 'gray' }}>
                                                Cas voie basse:
                                            </Typography>
                                            <FormControl fullWidth variant="outlined" style={{ marginLeft: '10px', marginRight: '10px' }}>
                                                <InputLabel style={{ marginTop: 'auto' }}>Type voie basse</InputLabel>
                                                <Select
                                                    value={formValues.typeBasse ?? ''}
                                                    onChange={(e) => setFormValues({ ...formValues, typeBasse: e.target.value })}
                                                    label="typeBasse"
                                                >
                                                    <MenuItem value="Simple">Simple</MenuItem>
                                                    <MenuItem value="Episiotmie">Episiotmie</MenuItem>
                                                    <MenuItem value="Manoeuvre">Manoeuvre</MenuItem>
                                                    <MenuItem value="Ventouse">Ventouse</MenuItem>
                                                    <MenuItem value="Forceps">Forceps</MenuItem>
                                                </Select>
                                            </FormControl>
                                        </div>
                                        <div>
                                            <Typography variant="subtitle1" component="label" sx={{ fontWeight: 'bold', color: 'gray' }}>
                                                Cas cesarienne :
                                            </Typography>
                                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                                <TextField
                                                    label="Indication"
                                                    variant="outlined"
                                                    style={{ marginLeft: '10px', marginRight: '10px' }}
                                                    margin="normal"
                                                    fullWidth
                                                    value={formValues.indicationCesarienne ?? ''}
                                                    onChange={(e) => setFormValues({ ...formValues, indicationCesarienne: e.target.value })}
                                                />

                                                <TextField
                                                    label="Heure de Césarienne"
                                                    variant="outlined"
                                                    margin="normal"
                                                    style={{ marginLeft: '10px', marginRight: '10px' }}
                                                    type="time"
                                                    fullWidth
                                                    value={formValues.heureCesarienne ? formValues.heureCesarienne.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) : ''}
                                                    onChange={(e) => {
                                                        const inputValue = e.target.value;
                                                        const [hours, minutes] = inputValue.split(':');
                                                        const selectedTime = new Date(formValues.heureCesarienne);

                                                        selectedTime.setHours(parseInt(hours));
                                                        selectedTime.setMinutes(parseInt(minutes));

                                                        setFormValues({ ...formValues, heureCesarienne: selectedTime });
                                                    }}
                                                />
                                            </div>
                                        </div>
                                        <div>
                                            <FormControl fullWidth variant="outlined" style={{ marginLeft: '10px', marginRight: '10px' }}>
                                                <InputLabel style={{ marginTop: 'auto' }}>Maturation</InputLabel>
                                                <Select
                                                    value={formValues.maturation ?? ''}
                                                    onChange={(e) => setFormValues({ ...formValues, maturation: e.target.value !== '' ? e.target.value : null})}
                                                    label="Maturation"
                                                >
                                                    <MenuItem value="oui">oui</MenuItem>
                                                    <MenuItem value="non">non</MenuItem>
                                                </Select>
                                            </FormControl>
                                        </div>
                                    </div>
                                    <div
                                        style={{
                                            border: '2px solid rgb(0,117,253)',
                                            borderRadius: '8px',
                                            padding: '10px',
                                            position: 'relative',
                                            marginTop: '10px'
                                        }}
                                    >
                                        <h5
                                            style={{
                                                position: 'absolute',
                                                top: '-30px',
                                                left: '50%',
                                                transform: 'translateX(-50%)',
                                                backgroundColor: 'rgb(249,250,252)',
                                                padding: '0 10px'
                                            }}
                                        >
                                            Etat du nv né a la naissance
                                        </h5>
                                        <div>
                                            <Typography variant="subtitle1" component="label" sx={{ fontWeight: 'bold', color: 'gray' }}>
                                                ValeursAPGAR:
                                            </Typography>
                                        </div>
                                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                            <FormControl fullWidth variant="outlined" style={{ marginLeft: '10px', marginRight: '10px' }}>
                                                <InputLabel style={{ marginTop: 'auto' }}>Apres 1 min</InputLabel>
                                                <Select
                                                    value={formValues.apgar1Min || 0}
                                                    onChange={(e) => setFormValues({ ...formValues, apgar1Min: parseInt(e.target.value) })}
                                                    label="Apres 1 min"
                                                >
                                                    <MenuItem value={0}>0</MenuItem>
                                                    <MenuItem value={1}>1</MenuItem>
                                                    <MenuItem value={2}>2</MenuItem>
                                                    <MenuItem value={3}>3</MenuItem>
                                                    <MenuItem value={4}>4</MenuItem>
                                                    <MenuItem value={5}>5</MenuItem>
                                                    <MenuItem value={6}>6</MenuItem>
                                                    <MenuItem value={7}>7</MenuItem>
                                                    <MenuItem value={8}>8</MenuItem>
                                                    <MenuItem value={9}>9</MenuItem>
                                                    <MenuItem value={10}>10</MenuItem>
                                                </Select>

                                            </FormControl>

                                            <FormControl fullWidth variant="outlined" style={{ marginLeft: '10px', marginRight: '10px' }}>
                                                <InputLabel style={{ marginTop: 'auto' }}>Apres 5 min</InputLabel>
                                                <Select
                                                    value={formValues.apgar5Min || 0}
                                                    onChange={(e) => setFormValues({ ...formValues, apgar5Min: parseInt(e.target.value) })}
                                                    label="Apres 5 min"
                                                >
                                                    <MenuItem value={0}>0</MenuItem>
                                                    <MenuItem value={1}>1</MenuItem>
                                                    <MenuItem value={2}>2</MenuItem>
                                                    <MenuItem value={3}>3</MenuItem>
                                                    <MenuItem value={4}>4</MenuItem>
                                                    <MenuItem value={5}>5</MenuItem>
                                                    <MenuItem value={6}>6</MenuItem>
                                                    <MenuItem value={7}>7</MenuItem>
                                                    <MenuItem value={8}>8</MenuItem>
                                                    <MenuItem value={9}>9</MenuItem>
                                                    <MenuItem value={10}>10</MenuItem>
                                                </Select>

                                            </FormControl>

                                            <FormControl fullWidth variant="outlined" style={{ marginLeft: '10px', marginRight: '10px' }}>
                                                <InputLabel style={{ marginTop: 'auto' }}>Apres 10 min</InputLabel>
                                                <Select
                                                    value={formValues.apgar10Min || 0}
                                                    onChange={(e) => setFormValues({ ...formValues, apgar10Min: parseInt(e.target.value) })}
                                                    label="Apres 10 min"
                                                >
                                                    <MenuItem value={0}>0</MenuItem>
                                                    <MenuItem value={1}>1</MenuItem>
                                                    <MenuItem value={2}>2</MenuItem>
                                                    <MenuItem value={3}>3</MenuItem>
                                                    <MenuItem value={4}>4</MenuItem>
                                                    <MenuItem value={5}>5</MenuItem>
                                                    <MenuItem value={6}>6</MenuItem>
                                                    <MenuItem value={7}>7</MenuItem>
                                                    <MenuItem value={8}>8</MenuItem>
                                                    <MenuItem value={9}>9</MenuItem>
                                                    <MenuItem value={10}>10</MenuItem>
                                                </Select>

                                            </FormControl>
                                        </div>
                                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                            <TextField
                                                label="Cri"
                                                variant="outlined"
                                                margin="normal"
                                                style={{ marginLeft: '10px', marginRight: '10px' }}

                                                fullWidth
                                                value={formValues.criEnfant ?? ''}
                                                onChange={(e) => setFormValues({ ...formValues, criEnfant: e.target.value })}
                                            />

                                            <TextField
                                                label="Cyanose"
                                                variant="outlined"
                                                margin="normal"
                                                style={{ marginLeft: '10px', marginRight: '10px' }}

                                                fullWidth
                                                value={formValues.cyanoseEnfant ??''}
                                                onChange={(e) => setFormValues({ ...formValues, cyanoseEnfant: e.target.value })}
                                            />
                                        </div>

                                        <TextField
                                            label="Réanimation"
                                            variant="outlined"
                                            margin="normal"
                                            style={{}}

                                            fullWidth
                                            multiline
                                            rows={2}
                                            value={formValues.reanimationEnfant ?? ''}
                                            onChange={(e) => setFormValues({ ...formValues, reanimationEnfant: e.target.value })}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            style={{
                                margin: '10px',
                                border: '2px solid rgb(0,117,253)',
                                borderRadius: '8px',
                                padding: '10px',
                                position: 'relative'
                            }}
                        >
                            <h5
                                style={{
                                    position: 'absolute',
                                    top: '-30px',
                                    left: '50%',
                                    transform: 'translateX(-50%)',
                                    backgroundColor: 'rgb(249,250,252)',
                                    padding: '0 10px'
                                }}
                            >
                                Mensuration a la naissance
                            </h5>

                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <TextField
                                    type="number"
                                    label="Poids à la naissance en Kg"
                                    variant="outlined"
                                    margin="normal"
                                    style={{ marginLeft: '10px', marginRight: '10px' }}
                                    fullWidth
                                    value={formValues.poidsNaiss !== null ? formValues.poidsNaiss : ''}
                                    onChange={(e) => {
                                        const newValue = e.target.value;
                                        setFormValues({ ...formValues, poidsNaiss: newValue !== '' ? parseFloat(newValue) : null });
                                    }}
                                    onBlur={() => {
                                        const floatValue = parseFloat(formValues.poidsNaiss);
                                        if (isNaN(floatValue)) {
                                            setFormValues({ ...formValues, poidsNaiss: 0.0 });
                                        } else {
                                            setFormValues({ ...formValues, poidsNaiss: floatValue });
                                        }
                                    }}
                                />




                                <TextField
                                    type="number"
                                    label="Taille à la naissance en cm"
                                    variant="outlined"
                                    margin="normal"
                                    style={{ marginLeft: '10px', marginRight: '10px' }}
                                    fullWidth
                                    value={formValues.tailleNaiss !== null ? formValues.tailleNaiss : ''}
                                    onChange={(e) => {
                                        const newValue = e.target.value;
                                        setFormValues({ ...formValues, tailleNaiss: newValue !== '' ? parseFloat(newValue) : null });
                                    }}
                                    onBlur={() => {
                                        const floatValue = parseFloat(formValues.tailleNaiss);
                                        if (isNaN(floatValue)) {
                                            setFormValues({ ...formValues, tailleNaiss: 0.0 });
                                        } else {
                                            setFormValues({ ...formValues, tailleNaiss: floatValue });
                                        }
                                    }}
                                />


                                <TextField
                                    type="number"
                                    label="Pc à la naissance "
                                    variant="outlined"
                                    margin="normal"
                                    style={{ marginLeft: '10px', marginRight: '10px' }}
                                    fullWidth
                                    value={formValues.pcNaiss !== null ? formValues.pcNaiss : ''}
                                    onChange={(e) => {
                                        const newValue = e.target.value;
                                        setFormValues({ ...formValues, pcNaiss: newValue !== '' ? parseFloat(newValue) : null });
                                    }}
                                    onBlur={() => {
                                        const floatValue = parseFloat(formValues.pcNaiss);
                                        if (isNaN(floatValue)) {
                                            setFormValues({ ...formValues, pcNaiss: 0.0 });
                                        } else {
                                            setFormValues({ ...formValues, pcNaiss: floatValue });
                                        }
                                    }}
                                />


                            </div>
                        </div>
                    </div>
                )}
                {activeStep === 2 && (
                    <div>
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', margin: '10px' }}>
                                <div
                                    style={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        justifyContent: 'space-between',

                                        position: 'relative',
                                        width: 'calc(50% - 10px)'
                                    }}
                                >
                                    <div
                                        style={{
                                            border: '2px solid rgb(0,117,253)',
                                            borderRadius: '8px',
                                            padding: '10px',
                                            position: 'relative'
                                        }}
                                    >
                                        <h5
                                            style={{
                                                position: 'absolute',
                                                top: '-30px',
                                                left: '50%',
                                                transform: 'translateX(-50%)',
                                                backgroundColor: 'rgb(249,250,252)',
                                                padding: '0 10px'
                                            }}
                                        >
                                            Examen de l'admission
                                        </h5>

                                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                            <TextField
                                                type="number"
                                                label="P etat general  "
                                                variant="outlined"
                                                margin="normal"
                                                style={{ marginLeft: '10px', marginRight: '10px' }}
                                                fullWidth
                                                value={formValues.pEtatGeneral !== null ? formValues.pEtatGeneral : ''}
                                                onChange={(e) => {
                                                    const newValue = e.target.value;
                                                    setFormValues({ ...formValues, pEtatGeneral: newValue !== '' ? parseFloat(newValue) : null });
                                                }}
                                                onBlur={() => {
                                                    const floatValue = parseFloat(formValues.pEtatGeneral);
                                                    if (isNaN(floatValue)) {
                                                        setFormValues({ ...formValues, pEtatGeneral: 0.0 });
                                                    } else {
                                                        setFormValues({ ...formValues, pEtatGeneral: floatValue });
                                                    }
                                                }}
                                            />


                                            <TextField
                                                type="number"
                                                label="t etat general "
                                                variant="outlined"
                                                margin="normal"
                                                style={{ marginLeft: '10px', marginRight: '10px' }}
                                                fullWidth
                                                value={formValues.tEtatGeneral !== null ? formValues.tEtatGeneral : ''}
                                                onChange={(e) => {
                                                    const newValue = e.target.value;
                                                    setFormValues({ ...formValues, tEtatGeneral: newValue !== '' ? parseFloat(newValue) : null });
                                                }}
                                                onBlur={() => {
                                                    const floatValue = parseFloat(formValues.tEtatGeneral);
                                                    if (isNaN(floatValue)) {
                                                        setFormValues({ ...formValues, tEtatGeneral: 0.0 });
                                                    } else {
                                                        setFormValues({ ...formValues, tEtatGeneral: floatValue });
                                                    }
                                                }}
                                            />


                                            <TextField
                                                type="number"
                                                label="Pc etat ganeral "
                                                variant="outlined"
                                                margin="normal"
                                                style={{ marginLeft: '10px', marginRight: '10px' }}
                                                fullWidth
                                                value={formValues.pcEtatGeneral !== null ? formValues.pcEtatGeneral : ''}
                                                onChange={(e) => {
                                                    const newValue = e.target.value;
                                                    setFormValues({ ...formValues, pcEtatGeneral: newValue !== '' ? parseFloat(newValue) : null });
                                                }}
                                                onBlur={() => {
                                                    const floatValue = parseFloat(formValues.pcEtatGeneral);
                                                    if (isNaN(floatValue)) {
                                                        setFormValues({ ...formValues, pcEtatGeneral: 0.0 });
                                                    } else {
                                                        setFormValues({ ...formValues, pcEtatGeneral: floatValue });
                                                    }
                                                }}
                                            />


                                        </div>
                                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                            <TextField
                                                type="number"
                                                label="Trc Etat General"
                                                variant="outlined"
                                                margin="normal"
                                                style={{ marginLeft: '10px', marginRight: '10px' }}
                                                fullWidth
                                                value={formValues.trcEtatGeneral !== null ? formValues.trcEtatGeneral : ''}
                                                onChange={(e) => {
                                                    const newValue = e.target.value;
                                                    setFormValues({ ...formValues, trcEtatGeneral: newValue !== '' ? parseFloat(newValue) : null });
                                                }}
                                                onBlur={() => {
                                                    const floatValue = parseFloat(formValues.trcEtatGeneral);
                                                    if (isNaN(floatValue)) {
                                                        setFormValues({ ...formValues, trcEtatGeneral: 0.0 });
                                                    } else {
                                                        setFormValues({ ...formValues, trcEtatGeneral: floatValue });
                                                    }
                                                }}
                                            />

                                            <TextField
                                                type="number"
                                                label="Ta Etat General"
                                                variant="outlined"
                                                margin="normal"
                                                style={{ marginLeft: '10px', marginRight: '10px' }}
                                                fullWidth
                                                value={formValues.taEtatGeneral !== null ? formValues.taEtatGeneral : ''}
                                                onChange={(e) => {
                                                    const newValue = e.target.value;
                                                    setFormValues({ ...formValues, taEtatGeneral: newValue !== '' ? parseFloat(newValue) : null });
                                                }}
                                                onBlur={() => {
                                                    const floatValue = parseFloat(formValues.taEtatGeneral);
                                                    if (isNaN(floatValue)) {
                                                        setFormValues({ ...formValues, taEtatGeneral: 0.0 });
                                                    } else {
                                                        setFormValues({ ...formValues, taEtatGeneral: floatValue });
                                                    }
                                                }}
                                            />

                                            <TextField
                                                type="number"
                                                label="Sa2"
                                                variant="outlined"
                                                margin="normal"
                                                style={{ marginLeft: '10px', marginRight: '10px' }}
                                                fullWidth
                                                value={formValues.sa2 !== null ? formValues.sa2 : ''}
                                                onChange={(e) => {
                                                    const newValue = e.target.value;
                                                    setFormValues({ ...formValues, sa2: newValue !== '' ? parseFloat(newValue) : null });
                                                }}
                                                onBlur={() => {
                                                    const floatValue = parseFloat(formValues.sa2);
                                                    if (isNaN(floatValue)) {
                                                        setFormValues({ ...formValues, sa2: 0.0 });
                                                    } else {
                                                        setFormValues({ ...formValues, sa2: floatValue });
                                                    }
                                                }}
                                            />


                                        </div>
                                        <TextField
                                            type="number"
                                            label="Dextro"
                                            variant="outlined"
                                            margin="normal"
                                            style={{ marginLeft: '10px', marginRight: '10px' }}
                                            fullWidth
                                            value={formValues.dextro !== null ? formValues.dextro : ''}
                                            onChange={(e) => {
                                                const newValue = e.target.value;
                                                setFormValues({ ...formValues, dextro: newValue !== '' ? parseFloat(newValue) : null });
                                            }}
                                            onBlur={() => {
                                                const floatValue = parseFloat(formValues.dextro);
                                                if (isNaN(floatValue)) {
                                                    setFormValues({ ...formValues, dextro: 0.0 });
                                                } else {
                                                    setFormValues({ ...formValues, dextro: floatValue });
                                                }
                                            }}
                                        />


                                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                            <TextField
                                                type="number"
                                                label="Fr Etat General"
                                                variant="outlined"
                                                margin="normal"
                                                style={{ marginLeft: '10px', marginRight: '10px' }}
                                                fullWidth
                                                value={formValues.frEtatGeneral !== null ? formValues.frEtatGeneral : ''}
                                                onChange={(e) => {
                                                    const newValue = e.target.value;
                                                    setFormValues({ ...formValues, frEtatGeneral: newValue !== '' ? parseFloat(newValue) : null });
                                                }}
                                                onBlur={() => {
                                                    const floatValue = parseFloat(formValues.frEtatGeneral);
                                                    if (isNaN(floatValue)) {
                                                        setFormValues({ ...formValues, frEtatGeneral: 0.0 });
                                                    } else {
                                                        setFormValues({ ...formValues, frEtatGeneral: floatValue });
                                                    }
                                                }}
                                            />


                                            <TextField
                                                type="number"
                                                label="Fc Etat General"
                                                variant="outlined"
                                                margin="normal"
                                                style={{ marginLeft: '10px', marginRight: '10px' }}
                                                fullWidth
                                                value={formValues.fcEtatGeneral !== null ? formValues.fcEtatGeneral : ''}
                                                onChange={(e) => {
                                                    const newValue = e.target.value;
                                                    setFormValues({ ...formValues, fcEtatGeneral: newValue !== '' ? parseFloat(newValue) : null });
                                                }}
                                                onBlur={() => {
                                                    const floatValue = parseFloat(formValues.fcEtatGeneral);
                                                    if (isNaN(floatValue)) {
                                                        setFormValues({ ...formValues, fcEtatGeneral: 0.0 });
                                                    } else {
                                                        setFormValues({ ...formValues, fcEtatGeneral: floatValue });
                                                    }
                                                }}
                                            />


                                            <TextField
                                                type="number"
                                                label="Temp Etat General"
                                                variant="outlined"
                                                margin="normal"
                                                style={{ marginLeft: '10px', marginRight: '10px' }}
                                                fullWidth
                                                value={formValues.tempEtatGeneral !== null ? formValues.tempEtatGeneral : ''}
                                                onChange={(e) => {
                                                    const newValue = e.target.value;
                                                    setFormValues({ ...formValues, tempEtatGeneral: newValue !== '' ? parseFloat(newValue) : null });
                                                }}
                                                onBlur={() => {
                                                    const floatValue = parseFloat(formValues.tempEtatGeneral);
                                                    if (isNaN(floatValue)) {
                                                        setFormValues({ ...formValues, tempEtatGeneral: 0.0 });
                                                    } else {
                                                        setFormValues({ ...formValues, tempEtatGeneral: floatValue });
                                                    }
                                                }}
                                            />


                                        </div>

                                        <div>
                                            <FormControl component="fieldset">
                                                <FormLabel component="legend">Aspects</FormLabel>
                                                <RadioGroup
                                                    row
                                                    aria-label="Aspects"
                                                    name="aspects"
                                                    value={formValues.aspects ?? ''}
                                                    onChange={(e) => setFormValues({ ...formValues, aspects: e.target.value })}
                                                >
                                                    <FormControlLabel value="Rose" control={<Radio />} label="Rose" />
                                                    <FormControlLabel value="Cyanose " control={<Radio />} label="Cyanose" />
                                                    <FormControlLabel value="Ictere" control={<Radio />} label="Ictere" />
                                                    <FormControlLabel value="Paleur " control={<Radio />} label="Paleur" />
                                                </RadioGroup>
                                            </FormControl>
                                        </div>
                                        <FormControl component="fieldset">
                                            <FormLabel component="legend">Organes genitaux externes</FormLabel>
                                            <RadioGroup
                                                row
                                                aria-label="organesGenitauxExternes"
                                                name="organesGenitauxExternes"
                                                value={formValues.organesGenitauxExternes ?? ''}
                                                onChange={(e) => setFormValues({ ...formValues, organesGenitauxExternes: e.target.value })}
                                            >
                                                <FormControlLabel value="Apparent" control={<Radio />} label="Apparent" />
                                                <FormControlLabel value="Non apparent " control={<Radio />} label=" Non Apparent" />
                                            </RadioGroup>
                                        </FormControl>
                                    </div>
                                    <div
                                        style={{
                                            border: '2px solid rgb(0,117,253)',
                                            borderRadius: '8px',
                                            padding: '10px',
                                            position: 'relative',
                                            marginTop: '10px'
                                        }}
                                    >
                                        <h5
                                            style={{
                                                position: 'absolute',
                                                top: '-30px',
                                                left: '50%',
                                                transform: 'translateX(-50%)',
                                                backgroundColor: 'rgb(249,250,252)',
                                                padding: '0 10px'
                                            }}
                                        >
                                            Examen cardio-vasculaire
                                        </h5>

                                        <FormControl component="fieldset">
                                            <FormLabel component="legend">Pouls Peripheriques (Femoraux)</FormLabel>
                                            <RadioGroup
                                                row
                                                aria-label="poulsPeripheriques"
                                                name="poulsPeripheriques"
                                                value={formValues.poulsPeripheriques ?? ''}
                                                onChange={(e) => setFormValues({ ...formValues, poulsPeripheriques: e.target.value })}
                                            >
                                                <FormControlLabel value="Percues" control={<Radio />} label="Percues" />
                                                <FormControlLabel value="Non percues" control={<Radio />} label="Non percues" />
                                            </RadioGroup>
                                        </FormControl>
                                        <TextField
                                            label="Auscultation"
                                            variant="outlined"
                                            margin="normal"
                                            style={{ marginLeft: '10px', marginRight: '10px' }}

                                            fullWidth
                                            value={formValues.auscultation ?? ''}
                                            onChange={(e) => setFormValues({ ...formValues, auscultation: e.target.value })}
                                        />
                                    </div>
                                </div>
                                <div
                                    style={{
                                        border: '2px solid rgb(0,117,253)',
                                        borderRadius: '8px',
                                        padding: '10px',
                                        position: 'relative',
                                        width: 'calc(50% - 10px)'
                                    }}
                                >
                                    <h5
                                        style={{
                                            position: 'absolute',
                                            top: '-30px',
                                            left: '50%',
                                            transform: 'translateX(-50%)',
                                            backgroundColor: 'rgb(249,250,252)',
                                            padding: '0 10px'
                                        }}
                                    >
                                        Examen Pleuro-Pulmonaire
                                    </h5>
                                    <div>
                                        <FormControl fullWidth variant="outlined" style={{ marginLeft: '10px', marginRight: '10px' }}>
                                            <InputLabel style={{ marginTop: 'auto' }}>BATTEMENTS DES AILES AU NEZ</InputLabel>
                                            <Select
                                                value={formValues.battementsDesAilesAuNez || 0}
                                                onChange={(e) => setFormValues({ ...formValues, battementsDesAilesAuNez:parseInt(e.target.value)  })}
                                                label="BATTEMENTS DES AILES AU NEZ"
                                            >
                                                <MenuItem value={0}>0</MenuItem>
                                                <MenuItem value={1}>1</MenuItem>
                                                <MenuItem value={2}>2</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </div>
                                    <br/>
                                    <div>
                                        <FormControl fullWidth variant="outlined" style={{ marginLeft: '10px', marginRight: '10px' }}>
                                            <InputLabel style={{ marginTop: 'auto' }}>BALANCEMENT THORACO-ABDOMINAL</InputLabel>
                                            <Select
                                                value={formValues.balancementsThoracoAbdominal || 0}
                                                onChange={(e) =>
                                                    setFormValues({ ...formValues, balancementsThoracoAbdominal:parseInt(e.target.value)  })
                                                }
                                                label="BALANCEMENT THORACO-ABDOMINAL"
                                            >
                                                <MenuItem value={0}>0</MenuItem>
                                                <MenuItem value={1}>1</MenuItem>
                                                <MenuItem value={2}>2</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </div>
                                    <br/>
                                    <div>
                                        <FormControl fullWidth variant="outlined" style={{ marginLeft: '10px', marginRight: '10px' }}>
                                            <InputLabel style={{ marginTop: 'auto' }}>TIRAGE INTERCOSTAL</InputLabel>
                                            <Select
                                                value={formValues.tirageIntercostal || 0}
                                                onChange={(e) => setFormValues({ ...formValues, tirageIntercostal:parseInt(e.target.value)  })}
                                                label="TIRAGE INTERCOSTAL"
                                            >
                                                <MenuItem value={0}>0</MenuItem>
                                                <MenuItem value={1}>1</MenuItem>
                                                <MenuItem value={2}>2</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </div>
                                    <br />
                                    <div>
                                        <FormControl fullWidth variant="outlined" style={{ marginLeft: '10px', marginRight: '10px' }}>
                                            <InputLabel style={{ marginTop: 'auto' }}>ENTONNOIR XYPHOIDIEN</InputLabel>
                                            <Select
                                                value={formValues.entonnoirXyphoidien || 0}
                                                onChange={(e) => setFormValues({ ...formValues, entonnoirXyphoidien:parseInt(e.target.value)  })}
                                                label="ENTONNOIR XYPHOIDIEN"
                                            >
                                                <MenuItem value={0}>0</MenuItem>
                                                <MenuItem value={1}>1</MenuItem>
                                                <MenuItem value={2}>2</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </div>
                                    <br />
                                    <div>
                                        <FormControl fullWidth variant="outlined" style={{ marginLeft: '10px', marginRight: '10px' }}>
                                            <InputLabel style={{ marginTop: 'auto' }}>CEIGNEMENT EXPIRATOIRE</InputLabel>
                                            <Select
                                                value={formValues.ceignementExpiratoire || 0}
                                                onChange={(e) => setFormValues({ ...formValues, ceignementExpiratoire:parseInt(e.target.value)  })}
                                                label="CEIGNEMENT EXPIRATOIRE"
                                            >
                                                <MenuItem value={0}>0</MenuItem>
                                                <MenuItem value={1}>1</MenuItem>
                                                <MenuItem value={2}>2</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </div>
                                    <br />
                                </div>
                            </div>
                        </div>
                    </div>
                )}
                {activeStep === 3 && (
                    <div>
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', margin: '10px' }}>
                                <div
                                    style={{
                                        border: '2px solid rgb(0,117,253)',
                                        borderRadius: '8px',
                                        padding: '10px',
                                        position: 'relative',
                                        width: 'calc(50% - 10px)'
                                    }}
                                >
                                    <h5
                                        style={{
                                            position: 'absolute',
                                            top: '-30px',
                                            left: '50%',
                                            transform: 'translateX(-50%)',
                                            backgroundColor: 'rgb(249,250,252)',
                                            padding: '0 10px'
                                        }}
                                    >
                                        Examens Neurologique
                                    </h5>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                        <TextField
                                            label="Tonus"
                                            variant="outlined"
                                            margin="normal"
                                            style={{ marginLeft: '10px' }}

                                            fullWidth
                                            value={formValues.tonusExamNeurologique ?? ''}
                                            onChange={(e) => setFormValues({ ...formValues, tonusExamNeurologique: e.target.value })}
                                        />
                                        <TextField
                                            label="CRI"
                                            variant="outlined"
                                            margin="normal"
                                            style={{ marginLeft: '10px' }}

                                            fullWidth
                                            value={formValues.criExamNeurologique ?? ''}
                                            onChange={(e) => setFormValues({ ...formValues, criExamNeurologique: e.target.value })}
                                        />
                                        <TextField
                                            label="Conscience"
                                            variant="outlined"
                                            margin="normal"
                                            style={{ marginLeft: '10px', marginRight: '10px' }}

                                            fullWidth
                                            value={formValues.conscienceExamNeurologique ?? ''}
                                            onChange={(e) => setFormValues({ ...formValues, conscienceExamNeurologique: e.target.value })}
                                        />
                                    </div>
                                    <div>
                                        <FormControl fullWidth variant="outlined" style={{ marginLeft: '10px', marginRight: '10px' }}>
                                            <InputLabel style={{ marginTop: 'auto' }}>MORO</InputLabel>
                                            <Select
                                                value={formValues.moro ?? ''}
                                                onChange={(e) => setFormValues({ ...formValues,moro: e.target.value !== '' ? e.target.value : null })}
                                                label="MORO"
                                            >
                                                <MenuItem value="PRESENT">PRESENT</MenuItem>
                                                <MenuItem value="FAIBLE">FAIBLE</MenuItem>
                                                <MenuItem value="ABSENT">ABSENT</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </div>
                                    <br/>
                                    <div>
                                        <FormControl fullWidth variant="outlined" style={{ marginLeft: '10px', marginRight: '10px' }}>
                                            <InputLabel style={{ marginTop: 'auto' }}>SUCCION</InputLabel>
                                            <Select
                                                value={formValues.succion ?? ''}
                                                onChange={(e) =>
                                                    setFormValues({ ...formValues, succion: e.target.value !== '' ? e.target.value : null})
                                                }
                                                label="SUCCION"
                                            >
                                                <MenuItem value="PRESENT">PRESENT</MenuItem>
                                                <MenuItem value="FAIBLE">FAIBLE</MenuItem>
                                                <MenuItem value="ABSENT">ABSENT</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </div>
                                    <br/>
                                    <div>
                                        <FormControl fullWidth variant="outlined" style={{ marginLeft: '10px', marginRight: '10px' }}>
                                            <InputLabel style={{ marginTop: 'auto' }}>GRASPING</InputLabel>
                                            <Select
                                                value={formValues.grasping ?? ''}
                                                onChange={(e) => setFormValues({ ...formValues,grasping: e.target.value })}
                                                label="GRASPING"
                                            >
                                                <MenuItem value="PRESENT">PRESENT</MenuItem>
                                                <MenuItem value="FAIBLE">FAIBLE</MenuItem>
                                                <MenuItem value="ABSENT">ABSENT</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </div>
                                    <br />
                                    <div>
                                        <FormControl fullWidth variant="outlined" style={{ marginLeft: '10px', marginRight: '10px' }}>
                                            <InputLabel style={{ marginTop: 'auto' }}>POINTS CARDINAUX</InputLabel>
                                            <Select
                                                value={formValues.pointsCardinaux ?? ''}
                                                onChange={(e) => setFormValues({ ...formValues, pointsCardinaux: e.target.value !== '' ? e.target.value : null })}
                                                label="ENTONNOIR XYPHOIDIEN"
                                            >
                                                <MenuItem value="PRESENT">PRESENT</MenuItem>
                                                <MenuItem value="FAIBLE">FAIBLE</MenuItem>
                                                <MenuItem value="ABSENT">ABSENT</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </div>
                                    <br />
                                    <div>
                                        <FormControl fullWidth variant="outlined" style={{ marginLeft: '10px', marginRight: '10px' }}>
                                            <InputLabel style={{ marginTop: 'auto' }}>ALLONGEMENT CROISE</InputLabel>
                                            <Select
                                                value={formValues.allongementCroise ?? ''}
                                                onChange={(e) => setFormValues({ ...formValues,allongementCroise: e.target.value !== '' ? e.target.value : null})}
                                                label="ALLONGEMENT CROISE"
                                            >
                                                <MenuItem value="PRESENT">PRESENT</MenuItem>
                                                <MenuItem value="FAIBLE">FAIBLE</MenuItem>
                                                <MenuItem value="ABSENT">ABSENT</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </div>
                                    <br />
                                    <div>
                                        <FormControl fullWidth variant="outlined" style={{ marginLeft: '10px', marginRight: '10px' }}>
                                            <InputLabel style={{ marginTop: 'auto' }}>MARCHE AUTOMATIQUE</InputLabel>
                                            <Select
                                                value={formValues.marcheAutomatique ?? ''}
                                                onChange={(e) => setFormValues({ ...formValues,marcheAutomatique: e.target.value !== '' ? e.target.value : null})}
                                                label="MARCHE AUTOMATIQUE"
                                            >
                                                <MenuItem value="PRESENT">PRESENT</MenuItem>
                                                <MenuItem value="FAIBLE">FAIBLE</MenuItem>
                                                <MenuItem value="ABSENT">ABSENT</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </div>
                                </div>
                                <div
                                    style={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        justifyContent: 'space-between',

                                        position: 'relative',
                                        width: 'calc(50% - 10px)'
                                    }}
                                >
                                    <div
                                        style={{
                                            border: '2px solid rgb(0,117,253)',
                                            borderRadius: '8px',
                                            padding: '10px',
                                            position: 'relative'
                                        }}
                                    >
                                        <h5
                                            style={{
                                                position: 'absolute',
                                                top: '-30px',
                                                left: '50%',
                                                transform: 'translateX(-50%)',
                                                backgroundColor: 'rgb(249,250,252)',
                                                padding: '0 10px'
                                            }}
                                        >
                                            Examen Abdomino-Pelvien
                                        </h5>
                                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                            <TextField
                                                label="HPM"
                                                variant="outlined"
                                                margin="normal"
                                                style={{ marginLeft: '10px' }}

                                                fullWidth
                                                value={formValues.hpmExamAbdominoPelvien}
                                                onChange={(e) => setFormValues({ ...formValues, hpmExamAbdominoPelvien: e.target.value })}
                                            />
                                            <TextField
                                                label="SMG"
                                                variant="outlined"
                                                margin="normal"
                                                style={{ marginLeft: '10px' }}

                                                fullWidth
                                                value={formValues.smgExamAbdominoPelvien ?? ''}
                                                onChange={(e) => setFormValues({ ...formValues, smgExamAbdominoPelvien: e.target.value })}
                                            />
                                            <TextField
                                                label="Ascite"
                                                variant="outlined"
                                                margin="normal"
                                                style={{ marginLeft: '10px', marginRight: '10px' }}

                                                fullWidth
                                                value={formValues.asciteExamAbdominoPelvien ?? ''}
                                                onChange={(e) =>
                                                    setFormValues({ ...formValues, asciteExamAbdominoPelvien: e.target.value })
                                                }
                                            />
                                        </div>
                                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                            <TextField
                                                label="Masse palpable"
                                                variant="outlined"
                                                margin="normal"
                                                style={{ marginLeft: '10px' }}

                                                fullWidth
                                                value={formValues.mpExamAbdominoPelvien ?? ''}
                                                onChange={(e) => setFormValues({ ...formValues, mpExamAbdominoPelvien: e.target.value })}
                                            />
                                            <TextField
                                                label="Anomalies anales"
                                                variant="outlined"
                                                margin="normal"
                                                style={{ marginLeft: '10px' }}

                                                fullWidth
                                                value={formValues.aaExamAbdominoPelvien ?? ''}
                                                onChange={(e) => setFormValues({ ...formValues, aaExamAbdominoPelvien: e.target.value })}
                                            />
                                            <TextField
                                                label="Ombilic"
                                                variant="outlined"
                                                margin="normal"
                                                style={{ marginLeft: '10px', marginRight: '10px' }}

                                                fullWidth
                                                value={formValues.ombilicExamAbdominoPelvien ?? ''}
                                                onChange={(e) =>
                                                    setFormValues({ ...formValues, ombilicExamAbdominoPelvien: e.target.value })
                                                }
                                            />
                                        </div>
                                        <div>
                                            <Typography variant="subtitle1" component="label" sx={{ fontWeight: 'bold', color: 'gray' }}>
                                                Meconium:
                                            </Typography>
                                        </div>

                                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                            <TextField
                                                label="Descriptipn"
                                                variant="outlined"
                                                margin="normal"
                                                style={{ marginLeft: '10px' }}

                                                fullWidth
                                                value={formValues.descMeconium ?? ''}
                                                onChange={(e) => setFormValues({ ...formValues, descMeconium: e.target.value })}
                                            />
                                            <TextField
                                                label="Heure d'émission Meconium"
                                                variant="outlined"
                                                margin="normal"
                                                style={{ marginLeft: '10px' }}                                                type="time"
                                                fullWidth
                                                value={formValues.heureEmissionMeconium ? formValues.heureEmissionMeconium.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) : ''}
                                                onChange={(e) => {
                                                    const inputValue = e.target.value;
                                                    const [hours, minutes] = inputValue.split(':');
                                                    const selectedTime = new Date(formValues.heureEmissionMeconium);

                                                    selectedTime.setHours(parseInt(hours));
                                                    selectedTime.setMinutes(parseInt(minutes));

                                                    setFormValues({ ...formValues, heureEmissionMeconium: selectedTime });
                                                }}
                                            />
                                            <TextField
                                                type="number"
                                                label="Qte Meconium"
                                                variant="outlined"
                                                margin="normal"
                                                style={{ marginLeft: '10px', marginRight: '10px' }}
                                                fullWidth
                                                value={formValues.qteMeconium !== null ? formValues.qteMeconium : ''}
                                                onChange={(e) => {
                                                    const newValue = e.target.value;
                                                    setFormValues({ ...formValues, qteMeconium: newValue !== '' ? parseFloat(newValue) : null });
                                                }}
                                                onBlur={() => {
                                                    const floatValue = parseFloat(formValues.qteMeconium);
                                                    if (isNaN(floatValue)) {
                                                        setFormValues({ ...formValues, qteMeconium: 0.0 });
                                                    } else {
                                                        setFormValues({ ...formValues, qteMeconium: floatValue });
                                                    }
                                                }}
                                            />


                                        </div>
                                    </div>
                                    <div
                                        style={{
                                            border: '2px solid rgb(0,117,253)',
                                            borderRadius: '8px',
                                            padding: '10px',
                                            position: 'relative',
                                            marginTop: '10px'
                                        }}
                                    >
                                        {/* Bottom content for the right div goes here */}

                                        <h5
                                            style={{
                                                position: 'absolute',
                                                top: '-30px',
                                                left: '50%',
                                                transform: 'translateX(-50%)',
                                                backgroundColor: 'rgb(249,250,252)',
                                                padding: '0 10px'
                                            }}
                                        >
                                            Examens Cutaneo-muqueux
                                        </h5>
                                        <TextField
                                            label="Description"
                                            variant="outlined"
                                            margin="normal"
                                            style={{}}

                                            fullWidth
                                            multiline
                                            rows={2}
                                            value={formValues.descExamCutaneoMuqueux ?? ''}
                                            onChange={(e) => setFormValues({ ...formValues, descExamCutaneoMuqueux: e.target.value })}
                                        />
                                    </div>
                                    <div
                                        style={{
                                            border: '2px solid rgb(0,117,253)',
                                            borderRadius: '8px',
                                            padding: '10px',
                                            position: 'relative',
                                            marginTop: '10px'
                                        }}
                                    >
                                        {/* Bottom content for the right div goes here */}

                                        <h5
                                            style={{
                                                position: 'absolute',
                                                top: '-30px',
                                                left: '50%',
                                                transform: 'translateX(-50%)',
                                                backgroundColor: 'rgb(249,250,252)',
                                                padding: '0 10px'
                                            }}
                                        >
                                            Critere de maturité
                                        </h5>
                                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                            <TextField
                                                type="number"
                                                label="Score Dubowitz"
                                                variant="outlined"
                                                margin="normal"
                                                style={{ marginLeft: '10px', marginRight: '10px' }}
                                                fullWidth
                                                value={formValues.scoreDubowitz !== null ? formValues.scoreDubowitz : ''}
                                                onChange={(e) => {
                                                    const newValue = e.target.value;
                                                    setFormValues({ ...formValues, scoreDubowitz: newValue !== '' ? parseFloat(newValue) : null });
                                                }}
                                                onBlur={() => {
                                                    const floatValue = parseFloat(formValues.scoreDubowitz);
                                                    if (isNaN(floatValue)) {
                                                        setFormValues({ ...formValues, scoreDubowitz: 0.0 });
                                                    } else {
                                                        setFormValues({ ...formValues, scoreDubowitz: floatValue });
                                                    }
                                                }}
                                            />


                                            <TextField
                                                type="number"
                                                label="Score Farr"
                                                variant="outlined"
                                                margin="normal"
                                                style={{ marginLeft: '10px', marginRight: '10px' }}
                                                fullWidth
                                                value={formValues.scoreFarr !== null ? formValues.scoreFarr : ''}
                                                onChange={(e) => {
                                                    const newValue = e.target.value;
                                                    setFormValues({ ...formValues, scoreFarr: newValue !== '' ? parseFloat(newValue) : null });
                                                }}
                                                onBlur={() => {
                                                    const floatValue = parseFloat(formValues.scoreFarr);
                                                    if (isNaN(floatValue)) {
                                                        setFormValues({ ...formValues, scoreFarr: 0.0 });
                                                    } else {
                                                        setFormValues({ ...formValues, scoreFarr: floatValue });
                                                    }
                                                }}
                                            />


                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                )}
                {activeStep === 4 && (
                    <div>
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', margin: '10px' }}>
                                <div
                                    style={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        justifyContent: 'space-between',

                                        position: 'relative',
                                        width: 'calc(50% - 10px)'
                                    }}
                                >
                                    <div
                                        style={{
                                            border: '2px solid rgb(0,117,253)',
                                            borderRadius: '8px',
                                            padding: '10px',
                                            position: 'relative'
                                        }}
                                    >
                                        <h5
                                            style={{
                                                position: 'absolute',
                                                top: '-30px',
                                                left: '50%',
                                                transform: 'translateX(-50%)',
                                                backgroundColor: 'rgb(249,250,252)',
                                                padding: '0 10px'
                                            }}
                                        >
                                            Bilan Malformatif
                                        </h5>

                                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                            <TextField
                                                label="Atresie Oesophage"
                                                variant="outlined"
                                                margin="normal"
                                                style={{ marginLeft: '10px' }}

                                                fullWidth
                                                value={formValues.atresieOesophage ?? ''}
                                                onChange={(e) => setFormValues({ ...formValues, atresieOesophage: e.target.value })}
                                            />
                                            <TextField
                                                label="Fente Labio-palatine"
                                                variant="outlined"
                                                margin="normal"
                                                style={{ marginLeft: '10px' }}

                                                fullWidth
                                                value={formValues.fenteLabioPalatine ?? ''}
                                                onChange={(e) => setFormValues({ ...formValues, fenteLabioPalatine: e.target.value  })}
                                            />
                                        </div>
                                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                            <TextField
                                                label="Atresie des choanes"
                                                variant="outlined"
                                                margin="normal"
                                                style={{ marginLeft: '10px' }}

                                                fullWidth
                                                value={formValues.atresieDesChoanes ?? ''}
                                                onChange={(e) => setFormValues({ ...formValues, atresieDesChoanes: e.target.value  })}
                                            />
                                            <TextField
                                                label="Anomalie Orthopedique"
                                                variant="outlined"
                                                margin="normal"
                                                style={{ marginLeft: '10px' }}

                                                fullWidth
                                                value={formValues.anomalieOrthopedique ?? ''}
                                                onChange={(e) => setFormValues({ ...formValues, anomalieOrthopedique: e.target.value })}
                                            />
                                        </div>
                                        <TextField
                                            label="Autre anomalie"
                                            variant="outlined"
                                            margin="normal"
                                            style={{ marginLeft: '10px' }}

                                            fullWidth
                                            value={formValues.autreAnomalie ?? ''}
                                            onChange={(e) => setFormValues({ ...formValues, autreAnomalie: e.target.value })}
                                        />
                                    </div>
                                    <div
                                        style={{
                                            border: '2px solid rgb(0,117,253)',
                                            borderRadius: '8px',
                                            padding: '10px',
                                            position: 'relative',
                                            marginTop: '10px'
                                        }}
                                    >
                                        {/* Bottom content for the right div goes here */}

                                        <h5
                                            style={{
                                                position: 'absolute',
                                                top: '-30px',
                                                left: '50%',
                                                transform: 'translateX(-50%)',
                                                backgroundColor: 'rgb(249,250,252)',
                                                padding: '0 10px'
                                            }}
                                        >
                                            Diagnostic Retenues et Conduite a tenir
                                        </h5>
                                        <TextField
                                            label="Diagnostic Retenues"
                                            variant="outlined"
                                            margin="normal"
                                            style={{}}

                                            fullWidth
                                            multiline
                                            rows={1}
                                            value={formValues.diagnosticRetenues ?? ''}
                                            onChange={(e) => setFormValues({ ...formValues, diagnosticRetenues: e.target.value })}
                                        />
                                        <TextField
                                            label="Conduite a tenir"
                                            variant="outlined"
                                            margin="normal"
                                            style={{}}

                                            fullWidth
                                            multiline
                                            rows={1}
                                            value={formValues.conduiteATenir ?? ''}
                                            onChange={(e) => setFormValues({ ...formValues, conduiteATenir: e.target.value })}
                                        />
                                    </div>
                                    <div
                                        style={{
                                            border: '2px solid rgb(0,117,253)',
                                            borderRadius: '8px',
                                            padding: '10px',
                                            position: 'relative',
                                            marginTop: '10px'
                                        }}
                                    >
                                        {/* Bottom content for the right div goes here */}

                                        <h5
                                            style={{
                                                position: 'absolute',
                                                top: '-30px',
                                                left: '50%',
                                                transform: 'translateX(-50%)',
                                                backgroundColor: 'rgb(249,250,252)',
                                                padding: '0 10px'
                                            }}
                                        >
                                            Surveillance clinique
                                        </h5>
                                        <Typography variant="subtitle1" component="label" sx={{ fontWeight: 'bold', color: 'gray' }}>
                                            Date de surveillance clinique:
                                        </Typography>
                                        <TextField
                                            label=""
                                            variant="outlined"
                                            margin="normal"
                                            style={{ marginLeft: '10px' }}
                                            type="date"
                                            fullWidth
                                            value={formValues.dateSurveillanceClinique instanceof Date ? formValues.dateSurveillanceClinique.toISOString().substr(0, 10) : ''}
                                            onChange={(e) => {
                                                const inputValue = e.target.value;
                                                const selectedDate = new Date(inputValue);
                                                setFormValues({ ...formValues, dateSurveillanceClinique: selectedDate });
                                            }}
                                        />

                                        <TextField
                                            label="examen complémentaire surveillance clinique"
                                            variant="outlined"
                                            margin="normal"
                                            style={{}}

                                            fullWidth
                                            multiline
                                            rows={1}
                                            value={formValues.examenComplémentaireSurveillanceClinique ?? ''}
                                            onChange={(e) => setFormValues({ ...formValues, examenComplémentaireSurveillanceClinique: e.target.value })}
                                        />
                                        <TextField
                                            label="resultat surveillance clinique"
                                            variant="outlined"
                                            margin="normal"
                                            style={{}}

                                            fullWidth
                                            multiline
                                            rows={1}
                                            value={formValues.resultatSurveillanceClinique ?? ''}
                                            onChange={(e) => setFormValues({ ...formValues, resultatSurveillanceClinique: e.target.value })}
                                        />
                                        <TextField
                                            label="Commentaires surveillance clinique"
                                            variant="outlined"
                                            margin="normal"
                                            style={{}}

                                            fullWidth
                                            multiline
                                            rows={1}
                                            value={formValues.commentairesSurveillanceClinique ?? ''}
                                            onChange={(e) => setFormValues({ ...formValues, commentairesSurveillanceClinique: e.target.value })}
                                        />
                                    </div>
                                </div>
                                <div
                                    style={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        justifyContent: 'space-between',

                                        position: 'relative',
                                        width: 'calc(50% - 10px)'
                                    }}
                                >
                                    <div
                                        style={{
                                            border: '2px solid rgb(0,117,253)',
                                            borderRadius: '8px',
                                            padding: '10px',
                                            position: 'relative'
                                        }}
                                    >
                                        <h5
                                            style={{
                                                position: 'absolute',
                                                top: '-30px',
                                                left: '50%',
                                                transform: 'translateX(-50%)',
                                                backgroundColor: 'rgb(249,250,252)',
                                                padding: '0 10px'
                                            }}
                                        >
                                            Conclusion Clinique et diagnostiques evoques
                                        </h5>
                                        <TextField
                                            label="Conclusion Clinique et diagnostiques evoques"
                                            variant="outlined"
                                            margin="normal"
                                            style={{}}

                                            fullWidth
                                            multiline
                                            rows={8}
                                            value={formValues.conclusionCliniqueEtDiagnostiquesEvoques ?? ''}
                                            onChange={(e) =>
                                                setFormValues({ ...formValues, conclusionCliniqueEtDiagnostiquesEvoques: e.target.value })
                                            }
                                        />
                                    </div>
                                    <div
                                        style={{
                                            border: '2px solid rgb(0,117,253)',
                                            borderRadius: '8px',
                                            padding: '10px',
                                            position: 'relative',
                                            marginTop: '10px'
                                        }}
                                    >
                                        {/* Bottom content for the right div goes here */}

                                        <h5
                                            style={{
                                                position: 'absolute',
                                                top: '-30px',
                                                left: '50%',
                                                transform: 'translateX(-50%)',
                                                backgroundColor: 'rgb(249,250,252)',
                                                padding: '0 10px'
                                            }}
                                        >
                                            Infos sortie
                                        </h5>
                                        <Typography variant="subtitle1" component="label" sx={{ fontWeight: 'bold', color: 'gray' }}>
                                            Date de sortie:
                                        </Typography>
                                        <TextField
                                            label=""
                                            variant="outlined"
                                            margin="normal"
                                            style={{ marginLeft: '10px' }}
                                            type="date"
                                            fullWidth
                                            value={formValues.dateSortie instanceof Date ? formValues.dateSortie.toISOString().substr(0, 10) : ''}
                                            onChange={(e) => {
                                                const inputValue = e.target.value;
                                                const selectedDate = new Date(inputValue);
                                                setFormValues({ ...formValues, dateSortie: selectedDate });
                                            }}
                                        />
                                        <Typography variant="subtitle1" component="label" sx={{ fontWeight: 'bold', color: 'gray' }}>
                                            Date et lieu de transfert:
                                        </Typography>
                                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>

                                            <TextField
                                                label="Lieu de transfert"
                                                variant="outlined"
                                                margin="normal"
                                                style={{ marginLeft: '10px', marginRight: '10px' }}

                                                fullWidth
                                                value={formValues.lieuDeTransfert}
                                                onChange={(e) => setFormValues({ ...formValues, lieuDeTransfert: e.target.value })}
                                            />
                                            <TextField
                                                label=""
                                                variant="outlined"
                                                margin="normal"
                                                style={{ marginLeft: '10px' }}
                                                type="date"
                                                fullWidth
                                                value={formValues.dateDeTransfert instanceof Date ? formValues.dateDeTransfert.toISOString().substr(0, 10) : ''}
                                                onChange={(e) => {
                                                    const inputValue = e.target.value;
                                                    const selectedDate = new Date(inputValue);
                                                    setFormValues({ ...formValues, dateDeTransfert: selectedDate });
                                                }}
                                            />
                                        </div>
                                        <TextField
                                            label="Diagnotic de sortie"
                                            variant="outlined"
                                            margin="normal"
                                            style={{}}

                                            fullWidth
                                            multiline
                                            rows={1}
                                            value={formValues.diagnoticDeSortie ?? ''}
                                            onChange={(e) => setFormValues({ ...formValues, diagnoticDeSortie: e.target.value })}
                                        />
                                        <Typography variant="subtitle1" component="label" sx={{ fontWeight: 'bold', color: 'gray' }}>
                                            Date et heure de deces :
                                        </Typography>
                                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                            <TextField
                                                label=""
                                                variant="outlined"
                                                margin="normal"
                                                style={{ marginLeft: '10px' }}
                                                type="date"
                                                fullWidth
                                                value={formValues.dateDeDeces instanceof Date ? formValues.dateDeDeces.toISOString().substr(0, 10) : ''}
                                                onChange={(e) => {
                                                    const inputValue = e.target.value;
                                                    const selectedDate = new Date(inputValue);
                                                    setFormValues({ ...formValues, dateDeDeces: selectedDate });
                                                }}
                                            />
                                            <TextField
                                                label="Heure de décès "
                                                variant="outlined"
                                                margin="normal"
                                                style={{ marginLeft: '10px', marginRight: '10px' }}
                                                fullWidth
                                                type="time"
                                                value={formValues.heureDeDeces ? formValues.heureDeDeces.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) : ''}
                                                onChange={(e) => {
                                                    const inputValue = e.target.value;
                                                    const [hours, minutes] = inputValue.split(':');
                                                    const selectedTime = new Date(formValues.heureDeDeces);

                                                    selectedTime.setHours(parseInt(hours));
                                                    selectedTime.setMinutes(parseInt(minutes));

                                                    setFormValues({ ...formValues, heureDeDeces: selectedTime });
                                                }}
                                            />
                                        </div>
                                        <TextField
                                            label="Cause de decés"
                                            variant="outlined"
                                            margin="normal"
                                            style={{}}

                                            fullWidth
                                            multiline
                                            rows={1}
                                            value={formValues.causeDeDeces ?? ''}
                                            onChange={(e) => setFormValues({ ...formValues, causeDeDeces: e.target.value })}
                                        />

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'flex-end',
                        position: 'relative',
                        bottom: '0',
                        width: '100%'
                    }}
                >
                    {activeStep === 0 ? <Button disabled>Back</Button> : <Button onClick={handleBack}>Back</Button>}
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={activeStep === steps.length - 1 ? handleSubmit : handleNext}
                        style={{ marginLeft: '10px' }}
                    >
                        {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                    </Button>
                    <Snackbar
                        open={alertOpen}
                        autoHideDuration={6000}
                        onClose={handleAlertClose}
                        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
                    >
                        <Alert
                            onClose={handleAlertClose}
                            severity={alertSeverity}
                            sx={{
                                width: '100%',
                                maxWidth: '500px',
                                backgroundColor: 'rgba(0, 0, 0, 0.8)',
                                color: 'white',
                                fontSize: '18px',
                            }}
                            iconMapping={{
                                success: <CheckCircleIcon sx={{ color: '#2196f3' }} />, // Change la couleur de l'icône de succès en bleu (#2196f3)
                            }}
                        >
                            {alertMessage}
                        </Alert>
                    </Snackbar>
                </div>
            </form>
        </>
    );
};

export default MultiStepForm;