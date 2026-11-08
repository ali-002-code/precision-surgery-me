/**
 * Career, qualifications and research content.
 *
 * Sources: Mr Eddama's CV (supplied October 2026) and his public UCL Profiles
 * page (https://profiles.ucl.ac.uk/38653-mohammad-eddama). Pending grant
 * applications and commercial discussions in the CV are deliberately omitted.
 * Re-check with Mr Eddama before publishing and when updating.
 */

export const uclProfile = {
  currentTitle: "Principal Research Fellow",
  department: "Department of Surgical Biotechnology",
  institution: "University College London",
  totalOutputs: 47,
};

export type Appointment = {
  position: string;
  organisation: string;
  period: string;
};

export const clinicalAppointments: Appointment[] = [
  {
    position: "Consultant Colorectal and General Surgeon",
    organisation: "Portsmouth University Hospitals NHS Trust",
    period: "Oct 2025 – present",
  },
  {
    position: "Honorary Consultant Colorectal Surgeon",
    organisation: "University College London Hospital",
    period: "Oct 2023 – present",
  },
  {
    position: "Robotic Pelvic Exenteration Fellow",
    organisation: "The Royal Marsden Hospital",
    period: "Oct 2024 – Oct 2025",
  },
  {
    position: "Locum Consultant Colorectal & General Surgeon",
    organisation: "Oxford University Hospitals NHS Trust",
    period: "Oct 2023 – Oct 2024",
  },
  {
    position: "Higher Surgical Training, General & Colorectal Surgery",
    organisation: "Kent, Surrey and Sussex (KSS) Deanery",
    period: "Oct 2017 – Oct 2023",
  },
];

export const academicAppointments: Appointment[] = [
  {
    position: "Principal Research Fellow",
    organisation: "University College London",
    period: "Jan 2023 – present",
  },
  {
    position: "Director, “Doctor as Data Scientist” module",
    organisation: "UCL Medical School",
    period: "Oct 2023 – present",
  },
  {
    position: "Clinical Lecturer",
    organisation: "UCL Department of Surgical Biotechnology",
    period: "Oct 2016 – Jan 2020",
  },
];

export type Qualification = {
  year: string;
  title: string;
  detail: string;
};

export const qualifications: Qualification[] = [
  {
    year: "2024–25",
    title: "Post-CCT Fellowship in Robotic Pelvic Exenteration",
    detail: "The Royal Marsden Hospital, London",
  },
  {
    year: "2023",
    title: "Post-CCT Fellowship in Articulating Laparoscopy (colorectal resection)",
    detail: "St. Marienkrankenhaus Siegen, Germany",
  },
  {
    year: "2023",
    title: "CCT in General Surgery (Colorectal)",
    detail: "Royal College of Surgeons / General Medical Council",
  },
  {
    year: "2022",
    title: "FRCS General Surgery (Colorectal)",
    detail: "Royal College of Surgeons of England",
  },
  {
    year: "2017",
    title: "PhD",
    detail:
      "University College London — The Angiogenic Characterisation of the Mesenteric Adipose Tissue in Crohn’s Disease",
  },
  {
    year: "2015",
    title: "Fellowship of the Higher Education Academy (FHEA)",
    detail: "Higher Education Academy, UK",
  },
  {
    year: "2004",
    title: "MSc in Transfusion and Transplantation Sciences (Distinction)",
    detail: "University of Bristol",
  },
  {
    year: "2001",
    title: "MD",
    detail: "University of Medicine and Pharmacy “Gr. T. Popa”, Iași, Romania",
  },
];

export const awards = [
  {
    title: "Clinical Excellence Awards (×2)",
    detail:
      "Oxford University Hospitals NHS Trust — for leadership in clinical governance and advancing elective surgery quality",
  },
  { title: "BSJ Prize", detail: "European Society of Endocrine Surgeons, Rome (2023)" },
  { title: "Thomas Vicary Prize", detail: "Best Research Project, KSS Deanery (2023)" },
  {
    title: "Paper of Distinction",
    detail: "Association of Surgeons of Great Britain and Ireland (2022)",
  },
  { title: "Eleanor Davies-Colley Prize", detail: "University College London (2017)" },
];

/** Surgical interests as described in Mr Eddama's CV. */
export const surgicalInterests = [
  "Minimally invasive (laparoscopic) colorectal surgery",
  "Complex pelvic colorectal surgery, including robotic pelvic exenteration",
  "Articulating laparoscopic colorectal resection",
  "Endoscopy and general surgery",
];

export const fieldsOfResearch = [
  "Clinical sciences",
  "Oncology and carcinogenesis",
  "Neurosciences",
  "Curriculum and pedagogy",
];

export const researchHighlights = [
  { value: "£400k+", label: "PI-led research funding secured" },
  { value: "Patent", label: "Granted 2024 for a colorectal cancer screening method" },
  { value: "6", label: "PhD students supervised (3 graduated)" },
  { value: "9", label: "H-index" },
];

export const researchThemes = [
  {
    title: "Extracellular vesicle diagnostics",
    description:
      "Blood-based biomarkers carried in extracellular vesicles, with the aim of earlier and less invasive detection of colorectal and other cancers.",
  },
  {
    title: "Epigenetic therapeutics in IBD",
    description:
      "Laboratory research into histone demethylation as a driver of Crohn’s disease inflammation, and its potential as a treatment target.",
  },
  {
    title: "NHS-embedded clinical research",
    description:
      "Implementation-focused studies within everyday NHS practice, such as triage of patients with suspected acute appendicitis.",
  },
];

export const patent = {
  title: "Screening Methods for Benign Colorectal Polyps and Colorectal Cancer",
  detail: "UK and international patent · Intellectual Property Office ref. N420839GB · Granted 2024",
};

export type Grant = {
  year: number;
  funder: string;
  project: string;
};

/** Awarded, PI-led funding. Pending applications are not listed. */
export const grants: Grant[] = [
  {
    year: 2025,
    funder: "Crohn’s & Colitis in Childhood",
    project: "Michael Seres Award — EV microRNA biomarkers in Crohn’s disease",
  },
  { year: 2025, funder: "Philanthropic funding", project: "Postdoctoral fellowship support (24 months)" },
  {
    year: 2024,
    funder: "Crohn’s & Colitis in Childhood",
    project: "Epigenetic modulation in Crohn’s disease",
  },
  {
    year: 2022,
    funder: "UCLH Charity",
    project: "Biomarker development for early detection of colorectal cancer",
  },
  {
    year: 2021,
    funder: "Crohn’s & Colitis in Childhood",
    project: "Epigenetic modulation in Crohn’s disease",
  },
  { year: 2020, funder: "UCLH Charity", project: "Biomarker discovery in gastrointestinal cancer" },
  { year: 2020, funder: "Egyptian Bureau", project: "PhD funding — thyroid cancer biomarkers" },
  {
    year: 2019,
    funder: "Crohn’s & Colitis in Childhood",
    project: "Histone demethylation pilot study in IBD",
  },
];

export type Publication = {
  title: string;
  venue: string;
  year: number;
  role?: string;
  doi: string;
};

export const selectedPublications: Publication[] = [
  {
    title:
      "Use of the Appendistat (APS) score to triage patients with suspected acute appendicitis: a retrospective cross-sectional study in one of the busiest UK surgical emergency units",
    venue: "International Journal of Surgery",
    year: 2026,
    role: "Senior & corresponding author",
    doi: "10.1097/js9.0000000000005433",
  },
  {
    title:
      "Histone H3K27 demethylation drives Crohn’s disease inflammation: GSK-J4 as a potential epigenetic therapy",
    venue: "Clinical Epigenetics",
    year: 2026,
    role: "Senior & corresponding author",
    doi: "10.1186/s13148-026-02165-2",
  },
  {
    title: "External validation of the PASO prediction score for primary aldosteronism",
    venue: "Endocrine Connections",
    year: 2026,
    role: "Second author",
    doi: "10.1530/EC-26-0255",
  },
  {
    title: "An FDG-first functional imaging approach in phaeochromocytoma and paraganglioma",
    venue: "Frontiers in Endocrinology",
    year: 2026,
    role: "Second author",
    doi: "10.3389/fendo.2026.1833759",
  },
  {
    title:
      "Circulating large extracellular vesicles as diagnostic biomarkers of indeterminate thyroid nodules: multi-platform omics analysis",
    venue: "BJS Open",
    year: 2024,
    role: "Corresponding author",
    doi: "10.1093/bjsopen/zrae139",
  },
  {
    title: "The role of microvesicles as biomarkers in the screening of colorectal neoplasm",
    venue: "Cancer Medicine",
    year: 2022,
    role: "First & corresponding author",
    doi: "10.1002/cam4.4664",
  },
  {
    title:
      "Therapeutic potential of inhibiting histone 3 lysine 27 demethylases: a review of the literature",
    venue: "Clinical Epigenetics",
    year: 2022,
    role: "Senior & corresponding author",
    doi: "10.1186/s13148-022-01305-8",
  },
  {
    title:
      "Circulating microRNAs and clinicopathological findings of papillary thyroid cancer: a systematic review",
    venue: "In Vivo",
    year: 2022,
    role: "Senior author",
    doi: "10.21873/invivo.12866",
  },
];
