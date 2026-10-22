/**
 * Research and academic content.
 *
 * Every item below is taken from Mr Eddama's public UCL Profiles page
 * (https://profiles.ucl.ac.uk/38653-mohammad-eddama), retrieved 22 October
 * 2026. Re-check against that page before publishing and when updating.
 */

export const uclProfile = {
  currentTitle: "Clinical Principal Research Fellow",
  department: "Department of Surgical Biotechnology",
  institution: "University College London",
  totalOutputs: 47,
  retrieved: "22 October 2026",
};

export type Appointment = {
  position: string;
  organisation: string;
  period: string;
};

export const appointments: Appointment[] = [
  {
    position: "Consultant Emergency, General and Colorectal Surgeon",
    organisation: "Oxford University Hospitals NHS Trust",
    period: "Sep 2023 – present",
  },
  {
    position: "Principal Research Fellow",
    organisation: "UCL Department of Surgical Biotechnology",
    period: "Oct 2023 – present",
  },
  {
    position: "Module Lead, Doctor as Data Scientist",
    organisation: "UCL Medical School",
    period: "Sep 2023 – present",
  },
  {
    position: "Senior Clinical Research Fellow",
    organisation: "UCL Department of Surgical Biotechnology",
    period: "From 2020",
  },
  {
    position: "Clinical Lecturer",
    organisation: "UCL Department of Surgical Biotechnology",
    period: "Oct 2016 – Jan 2020",
  },
];

export const fieldsOfResearch = [
  "Clinical sciences",
  "Oncology and carcinogenesis",
  "Neurosciences",
  "Curriculum and pedagogy",
];

/** Themes summarised from the titles of the publications listed below. */
export const researchThemes = [
  {
    title: "Biomarkers and liquid biopsy",
    description:
      "Studies of circulating extracellular vesicles and microRNAs as potential biomarkers, including for colorectal neoplasm and thyroid nodules.",
  },
  {
    title: "Inflammation and epigenetics",
    description:
      "Laboratory research into histone demethylation and its possible role in Crohn's disease inflammation.",
  },
  {
    title: "Emergency and colorectal surgery",
    description:
      "Clinical research on triage in acute surgery and on surgical decision-making in rectal cancer.",
  },
];

export type Publication = {
  title: string;
  venue: string;
  year: number;
  type: "Journal article" | "Conference abstract";
  doi: string;
};

export const selectedPublications: Publication[] = [
  {
    title:
      "Use of the Appendistat (APS) score to triage patients with suspected acute appendicitis: a retrospective cross-sectional study in one of the busiest UK surgical emergency units",
    venue: "International Journal of Surgery",
    year: 2026,
    type: "Journal article",
    doi: "10.1097/js9.0000000000005433",
  },
  {
    title:
      "Histone H3K27 demethylation drives Crohn's disease inflammation: GSK-J4 as a potential epigenetic therapy",
    venue: "Clinical Epigenetics",
    year: 2026,
    type: "Journal article",
    doi: "10.1186/s13148-026-02165-2",
  },
  {
    title: "Immunotherapy-Induced Complete Response in dMMR Rectal Cancer — A Surgical Dilemma?",
    venue: "Cancers",
    year: 2025,
    type: "Journal article",
    doi: "10.3390/cancers17193153",
  },
  {
    title:
      "Circulating large extracellular vesicles as diagnostic biomarkers of indeterminate thyroid nodules: multi-platform omics analysis",
    venue: "BJS Open",
    year: 2024,
    type: "Journal article",
    doi: "10.1093/bjsopen/zrae139",
  },
  {
    title: "The role of microvesicles as biomarkers in the screening of colorectal neoplasm",
    venue: "Cancer Medicine",
    year: 2022,
    type: "Journal article",
    doi: "10.1002/cam4.4664",
  },
  {
    title: "Microvesicles as biomarkers for the screening of colorectal neoplasm",
    venue: "European Colorectal Congress — British Journal of Surgery",
    year: 2022,
    type: "Conference abstract",
    doi: "10.1093/bjs/znac246.014",
  },
  {
    title:
      "Therapeutic potential of inhibiting histone 3 lysine 27 demethylases: a review of the literature",
    venue: "Clinical Epigenetics",
    year: 2022,
    type: "Journal article",
    doi: "10.1186/s13148-022-01305-8",
  },
];
