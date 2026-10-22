/**
 * Treatment content.
 *
 * Add, remove or reorder entries here; the treatments overview, detail pages,
 * homepage, sitemap and static params are all generated from this list.
 *
 * Copy is general patient information only. It should be clinically reviewed
 * by Mr Eddama before launch.
 */

export type TreatmentIcon = "colon" | "fissure" | "skinTag" | "consultation";

export type Treatment = {
  slug: string;
  title: string;
  icon: TreatmentIcon;
  /** One or two sentences for cards. */
  summary: string;
  /** Used for the page meta description. */
  metaDescription: string;
  overview: string[];
  symptoms: string[];
  options: { title: string; description: string }[];
  whatToExpect: string[];
  seekAdvice: string[];
};

export const treatments: Treatment[] = [
  {
    slug: "haemorrhoid-treatment",
    title: "Haemorrhoid Treatment",
    icon: "colon",
    summary:
      "Assessment and modern treatment options for haemorrhoids, tailored to your symptoms and lifestyle.",
    metaDescription:
      "Specialist assessment and treatment options for haemorrhoids with Mr Mohammad Eddama, Consultant Colorectal Surgeon.",
    overview: [
      "Haemorrhoids (sometimes called piles) are swollen blood vessels in and around the back passage. They are very common, and many people find their symptoms settle with simple measures.",
      "When symptoms persist or affect everyday life, a specialist assessment can help to confirm the diagnosis, rule out other causes and discuss which options, if any, may be suitable for you.",
    ],
    symptoms: [
      "Bright red bleeding after opening your bowels",
      "Itching, irritation or discomfort around the anus",
      "A lump or swelling that may come and go",
      "A feeling of incomplete emptying",
      "Symptoms that have not improved with simple measures",
    ],
    options: [
      {
        title: "Consultation and examination",
        description:
          "A discussion of your symptoms and medical history, followed by an examination where appropriate. Further tests may occasionally be recommended.",
      },
      {
        title: "Lifestyle and medical measures",
        description:
          "Advice on diet, fluid intake and bowel habits, sometimes alongside creams or other medicines, is often the first step.",
      },
      {
        title: "Clinic-based procedures",
        description:
          "For some patients, minimally invasive options such as radiofrequency ablation (for example, the Rafaelo® procedure) or banding may be discussed.",
      },
      {
        title: "Surgical options",
        description:
          "Surgery is considered for a smaller number of patients, usually when other approaches are unsuitable or have not helped.",
      },
    ],
    whatToExpect: [
      "Your consultation will begin with a confidential conversation about your symptoms and how they affect you.",
      "If an examination is needed, it will be explained beforehand and carried out with care for your comfort and dignity. A chaperone can be provided.",
      "Any recommended treatment, including its potential benefits, risks and alternatives, will be discussed so that you can make an informed decision.",
      "Recovery depends on the treatment chosen and on the individual. You will be given specific aftercare advice.",
    ],
    seekAdvice: [
      "Any rectal bleeding that is new, persistent or unexplained",
      "A change in your usual bowel habit lasting more than a few weeks",
      "Unexplained weight loss, tiredness or abdominal pain",
      "Severe pain or a painful, hard lump around the anus",
    ],
  },
  {
    slug: "anal-fissure-surgery",
    title: "Anal Fissure Surgery",
    icon: "fissure",
    summary:
      "Specialist assessment and surgical treatment for anal fissures, with a focus on long-term relief and recovery.",
    metaDescription:
      "Specialist assessment and treatment options for anal fissures with Mr Mohammad Eddama, Consultant Colorectal Surgeon.",
    overview: [
      "An anal fissure is a small tear in the lining of the anal canal. It can cause sharp pain during and after opening the bowels, and is often associated with constipation or straining.",
      "Many fissures heal with conservative treatment. Where a fissure does not heal, or keeps returning, a specialist assessment can help you understand the options available.",
    ],
    symptoms: [
      "Sharp or burning pain when opening your bowels",
      "Pain that lingers for minutes or hours afterwards",
      "A small amount of bright red blood on the toilet paper",
      "Symptoms that persist despite treatment from your GP",
    ],
    options: [
      {
        title: "Consultation and examination",
        description:
          "A careful assessment to confirm the diagnosis. If examination is too uncomfortable, this will be discussed with you.",
      },
      {
        title: "Conservative and medical treatment",
        description:
          "Softening the stool and prescription ointments to relax the anal muscle are commonly used as first-line treatment.",
      },
      {
        title: "Procedural options",
        description:
          "Where appropriate, other options such as botulinum toxin injection may be discussed.",
      },
      {
        title: "Surgical treatment",
        description:
          "Surgery may be considered for chronic fissures that have not responded to other treatment. The benefits and risks will be explained in detail.",
      },
    ],
    whatToExpect: [
      "Your consultation will start with a discussion about your symptoms, bowel habits and any treatment you have already tried.",
      "Examination is carried out only with your consent and with care for your comfort.",
      "If treatment is recommended, you will receive clear information about what it involves, possible side effects and alternatives.",
      "Healing times vary from person to person, and follow-up will be arranged where needed.",
    ],
    seekAdvice: [
      "Pain or bleeding that is severe, persistent or getting worse",
      "A change in your usual bowel habit",
      "Fever, swelling or discharge around the anus",
      "Unexplained weight loss or abdominal pain",
    ],
  },
  {
    slug: "anal-skin-tag-removal",
    title: "Anal Skin Tag Removal",
    icon: "skinTag",
    summary:
      "Assessment and removal of anal skin tags, using minimally invasive techniques where appropriate.",
    metaDescription:
      "Assessment and removal of anal skin tags with Mr Mohammad Eddama, Consultant Colorectal Surgeon.",
    overview: [
      "Anal skin tags are small, soft flaps of skin around the anus. They are usually harmless but can sometimes cause irritation, make hygiene more difficult or be a source of concern.",
      "A specialist assessment can confirm that a lump is a skin tag and discuss whether removal is appropriate for you.",
    ],
    symptoms: [
      "A soft, painless lump or flap of skin around the anus",
      "Itching, irritation or difficulty keeping the area clean",
      "Skin tags remaining after a previous haemorrhoid or fissure",
      "Uncertainty about the cause of a lump",
    ],
    options: [
      {
        title: "Consultation and examination",
        description:
          "An examination to confirm the diagnosis and check for any related condition, such as a fissure or haemorrhoids.",
      },
      {
        title: "Reassurance and monitoring",
        description:
          "Many skin tags need no treatment. If yours is not causing problems, you may decide to leave it alone.",
      },
      {
        title: "Removal",
        description:
          "Where removal is appropriate, it can often be carried out as a minor procedure. The approach, potential risks and recovery will be discussed with you.",
      },
    ],
    whatToExpect: [
      "Your consultation will include a confidential discussion and, with your consent, an examination.",
      "If removal is recommended, you will be given information about the procedure, anaesthetic and aftercare.",
      "Most people return to normal activities fairly quickly, although this varies. Specific advice will be provided.",
    ],
    seekAdvice: [
      "A lump that is growing, painful, bleeding or changing in appearance",
      "Rectal bleeding or a change in your bowel habit",
      "Any lump you are unsure about",
    ],
  },
  {
    slug: "colorectal-consultations",
    title: "Colorectal Consultations",
    icon: "consultation",
    summary:
      "Expert assessment, diagnosis and treatment planning for a range of colorectal conditions.",
    metaDescription:
      "Specialist colorectal consultations with Mr Mohammad Eddama, Consultant Colorectal Surgeon.",
    overview: [
      "A colorectal consultation is an opportunity to discuss bowel or anal symptoms with a specialist, in a private and unhurried setting.",
      "The aim is to understand your symptoms, reach a diagnosis where possible and agree a plan that reflects your circumstances and preferences.",
    ],
    symptoms: [
      "Rectal bleeding",
      "A persistent change in bowel habit",
      "Pain, discomfort or a lump around the anus",
      "Abdominal pain or bloating that has not settled",
      "Referral from your GP or another clinician",
    ],
    options: [
      {
        title: "Detailed history and examination",
        description:
          "A thorough conversation about your symptoms, followed by an examination where appropriate and with your consent.",
      },
      {
        title: "Investigations",
        description:
          "If needed, further tests such as blood tests, scans or endoscopy may be recommended to help reach a diagnosis.",
      },
      {
        title: "Treatment planning",
        description:
          "Options will be explained clearly, including non-surgical approaches, so that decisions can be made together.",
      },
    ],
    whatToExpect: [
      "Please bring a list of your current medicines and any relevant letters or results.",
      "You are welcome to bring a family member or friend with you.",
      "After your consultation, a summary letter can be sent to you and, with your permission, to your GP.",
    ],
    seekAdvice: [
      "Rectal bleeding that is new, persistent or unexplained",
      "A change in bowel habit lasting more than a few weeks",
      "Unexplained weight loss, tiredness or a lump in the abdomen",
      "Severe abdominal pain, which may need urgent assessment",
    ],
  },
];

export function getTreatment(slug: string) {
  return treatments.find((treatment) => treatment.slug === slug);
}
