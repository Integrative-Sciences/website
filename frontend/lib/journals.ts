export interface JournalSection {
  title: string;
  paragraphs?: string[];
  bullets?: string[];
}

export interface Journal {
  id: string; // slug-friendly identifier, e.g., "integrative-health-datascience"
  title: string; // Display title, e.g., "Integrative Health DataScience"
  subtitle?: string; // e.g., "An international, peer-reviewed..."
  editors?: string[]; // e.g., ["Rodrigo"]
  mission?: string; // concise mission/overview paragraph
  sections?: {
    scope?: JournalSection;
    editorialEthics?: JournalSection;
    audienceImpact?: JournalSection;
    // additional arbitrary sections if needed
    [key: string]: JournalSection | undefined;
  };
}

export type Journals = Journal[];

// Optional helper to build a slug from a title
export function toJournalId(title: string): string {
  return title
    .toLowerCase()
    .replace(/&/g, 'and')
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');
}

// Journals data extracted from src/journals.md
export const journals: Journals = [
  {
    id: toJournalId('Integrative Health DataScience'),
    title: 'Integrative Health DataScience',
    subtitle: 'An international, peer-reviewed, open-access journal published by Integrative Science Journals.',
    editors: ['Rodrigo'],
    mission:
      'Advances health data science through integrative, computational, and systems-level approaches to support precision medicine and evidence-based interventions.',
    sections: {
      scope: {
        title: 'Scope',
        bullets: [
          'Multi-omics data integration applied to health and disease',
          'Machine learning, deep learning, and AI in biomedical and psychological research',
          'Data science approaches to mental health, behavior, neuroimmune function, and health outcomes',
          'Computational modeling of biological, ecological, and social determinants of health',
          'Digital health, wearable sensors, and real-time monitoring systems',
          'Population health informatics and big data analytics',
          'Predictive modeling for precision medicine and precision public health',
          'Data-driven discovery in immunology, systems biology, and psychoneuroimmunology',
          'Health disparities, environmental exposures, and socio-behavioral data integration',
          'Advanced biostatistics, causal inference, and data harmonization',
          'Ethical, transparent, and responsible use of AI in healthcare',
          'Open science, reproducibility, and FAIR data practices',
        ],
      },
      editorialEthics: {
        title: 'Editorial and Ethical Standards',
        bullets: [
          'Transparent disclosure of conflicts of interest',
          'Ethical guidelines for data use, privacy, and human subjects research',
          'Reproducibility with access to code, data, and pipelines when feasible',
          'Responsible and interpretable use of AI and machine learning',
          'Post-publication updates, corrections, and retractions when necessary',
          'Alignment with FAIR data standards',
        ],
      },
      audienceImpact: {
        title: 'Audience and Impact',
        bullets: [
          'Accelerate large-scale discovery',
          'Improve translational research',
          'Expand precision health applications',
          'Strengthen global health intelligence',
          'Foster integrated, predictive, and personalized well-being',
        ],
      },
    },
  },
  {
    id: toJournalId('Systems Biology'),
    title: 'Systems Biology',
    subtitle: 'An international, peer-reviewed, open-access journal published by Integrative Science Journals.',
    editors: ['Rodrigo'],
    mission:
      'Advances understanding of biological complexity through integrative, quantitative, and multi-scale approaches connecting molecular to ecological layers.',
    sections: {
      scope: {
        title: 'Scope',
        bullets: [
          'Multi-omics integration and systems-level data fusion',
          'Computational modeling of molecular networks and signaling pathways',
          'AI and machine learning applied to biological complexity',
          'Network biology, graph theory, and dynamic systems analysis',
          'Systems physiology and systems medicine',
          'Evolutionary systems biology and adaptation',
          'Quantitative biology and emergent behavior frameworks',
          'High-dimensional data analytics for biological discovery',
          'Synthetic biology and engineered biological circuits',
          'Cell–cell communication, microbiome interactions, host–environment systems',
          'Temporal, spatial, and stochastic modeling of living systems',
          'Systems approaches to disease mechanisms, diagnostics, and therapeutics',
        ],
      },
      editorialEthics: {
        title: 'Editorial and Ethical Standards',
        bullets: [
          'Disclosure of conflicts of interest',
          'Robust reporting of experimental and computational methods',
          'Availability of data, models, source code, and workflows when possible',
          'Ethical compliance in biomedical and environmental research',
          'Post-publication corrections, updates, or retractions when appropriate',
          'Emphasis on open science, reproducibility, and innovation',
        ],
      },
      audienceImpact: {
        title: 'Audience and Impact',
        bullets: [
          'Accelerate theoretical and computational innovation',
          'Deepen mechanistic understanding of biological organization',
          'Empower precision and systems medicine',
          'Enhance translational research in health and biotechnology',
          'Contribute to unified frameworks for interpreting life complexity',
        ],
      },
    },
  },
  {
    id: toJournalId('Integrative Neuroscience'),
    title: 'Integrative Neuroscience',
    subtitle: 'An international, peer-reviewed, open-access journal published by Integrative Science.',
    editors: ['Haroldo'],
    mission:
      'Bridges molecular to experiential domains to understand brain function, consciousness, neuroplasticity, and brain–body interactions.',
    sections: {
      scope: {
        title: 'Scope',
        bullets: [
          'Molecular, cellular, and systems neuroscience',
          'Brain–immune communication and psychoneuroimmunology',
          'Cognitive and affective neuroscience',
          'Neuroplasticity, learning, memory, brain development',
          'Neuroinflammation in mental and neurological disorders',
          'Systems biology of neural circuits and brain networks',
          'Computational neuroscience, AI cognition models, neuroinformatics',
          'Neuroendocrine mechanisms and stress biology',
          'Consciousness studies, neurophenomenology, mind–brain integration',
          'Resilience, trauma, emotion regulation, behavior',
          'Neuroimaging, electrophysiology, multi-modal assessment',
          'Brain–body interactions across endocrine, immune, metabolic, gut–brain pathways',
          'Spirituality and contemplative practices',
          'Translational neuroscience and precision approaches',
        ],
      },
      editorialEthics: {
        title: 'Editorial and Ethical Standards',
        bullets: [
          'Disclosure of conflicts of interest',
          'Ethical approval for animal and human research',
          'Reproducible methodological reporting',
          'Compliance with neuroimaging and computational reproducibility guidelines',
          'Availability of datasets, pipelines, and code when feasible',
          'Respectful interpretation of complex human experiences',
          'Post-publication updates, corrections, or retractions',
        ],
      },
      audienceImpact: {
        title: 'Audience and Impact',
        bullets: [
          'Deepen mechanistic understanding of the nervous system',
          'Foster integrative approaches to mental and neurological health',
          'Expand insights into cognition, emotion, and consciousness',
          'Promote precision and personalized neuroscience',
          'Connect neurobiology with behavior and systemic physiology',
          'Support breakthroughs in translational brain science',
        ],
      },
    },
  },
  {
    id: toJournalId('Integrative Psychiatry'),
    title: 'Integrative Psychiatry',
    subtitle: 'An international, peer-reviewed, open-access journal published by Integrative Science.',
    editors: ['Haroldo'],
    mission:
      'Integrates biological, psychological, social, lifestyle, and spiritual dimensions to transform psychiatric care.',
    sections: {
      scope: {
        title: 'Scope',
        bullets: [
          'Biopsychosocial models and whole-person approaches',
          'Psychoneuroimmunology and neuroinflammation in psychiatric disorders',
          'Neurobiology, neuroendocrine dynamics, stress mechanisms',
          'Integrative and complementary interventions',
          'Psychotherapy, trauma-informed care, resilience, recovery',
          'Spirituality, meaning, and mental health',
          'Precision psychiatry, biomarkers, multi-omics, individualized treatment',
          'Psychopharmacology with lifestyle and behavioral interventions',
          'Systems biology and computational psychiatry',
          'AI-assisted diagnostics and digital mental health',
          'Prevention and early interventions across the lifespan',
          'Social determinants and cultural psychiatry',
          'Mind–body therapies: mindfulness, meditation, yoga, breathwork',
          'Perspectives on chronic inflammatory and autoimmune conditions',
        ],
      },
      editorialEthics: {
        title: 'Editorial and Ethical Standards',
        bullets: [
          'Conflict of interest disclosure',
          'Ethical oversight for clinical and human research',
          'Replicable methodological reporting',
          'Responsible analysis of sensitive mental health data',
          'Support for open science and data availability',
          'Culturally sensitive approaches',
          'Post-publication corrections and updates',
        ],
      },
      audienceImpact: {
        title: 'Audience and Impact',
        bullets: [
          'Advance precision and personalized psychiatry',
          'Deepen insight into mental disorders',
          'Support integrative and complementary treatments',
          'Enhance prevention and resilience',
          'Promote compassionate, evidence-based care',
        ],
      },
    },
  },
  {
    id: toJournalId('Integrative Medicine'),
    title: 'Integrative Medicine',
    subtitle: 'An international, peer-reviewed, open-access journal published by Integrative Science.',
    editors: ['Lena'],
    mission:
      'Bridges biomedical science with psychology, nutrition, spirituality, public health, and systems biology to advance holistic health.',
    sections: {
      scope: {
        title: 'Scope',
        bullets: [
          'Integrative clinical practices',
          'Psychoneuroimmunology and mind–body medicine',
          'Nutrition, lifestyle, metabolic health',
          'Spirituality and health outcomes',
          'Complementary and traditional medical systems',
          'Stress reduction and contemplative practices',
          'Integrative oncology, cardiology, neurology, chronic disease management',
          'Systems medicine, multi-omics, personalized approaches',
          'Functional medicine and patient-centered care',
          'Health promotion, resilience, whole-person well-being',
          'Trauma, mental health, emotional regulation',
          'Nature-based therapies, environmental health, ecopsychology',
          'Health data science in integrative care',
          'Ethical, cultural, and societal dimensions',
        ],
      },
      editorialEthics: {
        title: 'Editorial and Ethical Standards',
        bullets: [
          'Conflict of interest disclosure',
          'Compliance with ethical clinical research standards',
          'Methodological clarity and reproducibility',
          'Balanced evaluation of complementary therapies',
          'Data availability and open science',
          'Post-publication updates and corrections',
        ],
      },
      audienceImpact: {
        title: 'Audience and Impact',
        bullets: [
          'Accelerate scientific discovery and clinical innovation',
          'Promote whole-person healing and well-being',
          'Support precision and personalized medicine',
          'Advance evidence-based complementary therapies',
          'Illuminate mind–body–environment mechanisms',
        ],
      },
    },
  },
  {
    id: toJournalId('Integrative Autoimmunity'),
    title: 'Integrative Autoimmunity',
    subtitle: 'An international, peer-reviewed, open-access journal published by Integrative Science.',
    editors: ['Lena'],
    mission:
      'Investigates determinants of autoimmunity using multi-omics, clinical insights, modeling, and translational research for diagnostics and therapeutics.',
    sections: {
      scope: {
        title: 'Scope',
        bullets: [
          'Immune tolerance and autoantibody production',
          'Neuroimmune interactions and psychoneuroimmunology of autoimmunity',
          'Genetics, epigenetics, multi-omics signatures',
          'Environmental triggers, infections, exposome',
          'Systems modeling of autoimmune networks',
          'Machine learning and AI for prediction and diagnostics',
          'Biomarkers for onset, progression, therapeutic response',
          'Neuroinflammation and CNS–immune cross-talk',
          'Integrative clinical management and precision immunotherapy',
          'Stress, trauma, psychology, and immune dysregulation',
          'Chronic inflammation, resilience, remission',
        ],
      },
      editorialEthics: {
        title: 'Editorial and Ethical Standards',
        bullets: [
          'Conflict of interest transparency',
          'Ethics for human subjects and biomaterials',
          'Detailed experimental, computational, and clinical reporting',
          'Data, code, and pipeline availability',
          'Post-publication corrections and retractions',
          'Open science and responsible data sharing',
        ],
      },
      audienceImpact: {
        title: 'Audience and Impact',
        bullets: [
          'Deepen autoimmune pathogenesis insight',
          'Expand translational immunology and precision medicine',
          'Accelerate biomarker discovery and personalization',
          'Integrate psychological and neuroimmune determinants',
          'Enable holistic, predictive frameworks for autoimmune health',
        ],
      },
    },
  },
  {
    id: toJournalId('Psychoneuroimmunology'),
    title: 'Psychoneuroimmunology',
    subtitle: 'An international, peer-reviewed, open-access journal published by Integrative Science.',
    editors: ['Otavio'],
    mission:
      'Explores interactions among psychological processes, nervous system, and immune function, translating insights into interventions and public health.',
    sections: {
      scope: {
        title: 'Scope',
        bullets: [
          'Neuroimmune regulation of stress, emotion, behavior',
          'Psychobiological mechanisms linking psychological states to immune outcomes',
          'Inflammation, mood disorders, neuroimmune signaling',
          'Immune biomarkers in psychiatric and neurological conditions',
          'Mind–body interactions and health outcomes',
          'Psychosocial stress, trauma, neuroimmune pathway alterations',
          'Placebo and expectancy effects',
          'Behavioral interventions targeting neuroimmune mechanisms',
          'Immunological correlates of cognition and social behavior',
          'Multi-omics and systems biology approaches',
          'Lifespan development of neuroimmune interactions',
          'Meditation, spirituality, contemplative practices and neuroimmune health',
        ],
      },
      editorialEthics: {
        title: 'Editorial and Ethical Standards',
        bullets: [
          'Conflicts of interest disclosure',
          'Ethical guidelines for human and animal research',
          'Reproducibility via detailed methods',
          'Data, code, and supplementary availability when possible',
          'Post-publication corrections and updates',
        ],
      },
      audienceImpact: {
        title: 'Audience and Impact',
        bullets: [
          'Accelerate mind–body medicine discovery',
          'Advance precision mental health',
          'Expand translational neuroimmune research',
          'Foster interventions promoting resilience and prevention',
        ],
      },
    },
  },
  {
    id: toJournalId('Integrative Psychology'),
    title: 'Integrative Psychology',
    subtitle: 'An international, peer-reviewed, open-access journal published by Integrative Science.',
    editors: ['Otavio'],
    mission:
      'Bridges psychology, neuroscience, spirituality, immunology, and systems science to deepen insight into mental processes and flourishing.',
    sections: {
      scope: {
        title: 'Scope',
        bullets: [
          'Biopsychosocial and psychoneuroimmunological frameworks',
          'Emotion, cognition, behavior in integrative mental health',
          'Positive psychology, meaning, purpose, well-being',
          'Contemplative science, mindfulness, spirituality',
          'Developmental, social, clinical psychology methodologies',
          'Neuropsychology, neurobiology, systems-level mechanisms',
          'Trauma, resilience, stress biology, mind–body interactions',
          'Integrative therapeutic practices and evidence-based interventions',
          'Computational psychology, AI, data-driven research',
          'Cultural, existential, transpersonal perspectives on consciousness',
        ],
      },
      editorialEthics: {
        title: 'Editorial and Ethical Standards',
        bullets: [
          'Conflict of interest disclosure',
          'Ethical approval for human subjects research',
          'Methodological clarity and reproducibility',
          'Data, code, and materials availability when possible',
          'Post-publication updates and corrections',
        ],
      },
      audienceImpact: {
        title: 'Audience and Impact',
        bullets: [
          'Accelerate comprehensive models of mental processes',
          'Inform innovative clinical applications',
          'Contribute to global mental well-being',
        ],
      },
    },
  },
  {
    id: toJournalId('Science of Spirituality'),
    title: 'Science of Spirituality',
    subtitle: 'An international, peer-reviewed, open-access journal published by Integrative Science.',
    editors: ['Otavio'],
    mission:
      'Advances rigorous scientific inquiry into spirituality, consciousness, meaning, and transcendence across disciplines.',
    sections: {
      scope: {
        title: 'Scope',
        bullets: [
          'Psychological and neurobiological mechanisms of spirituality and transcendence',
          'Spiritual experiences, phenomenology, states of consciousness',
          'Measurement and psychometrics of spirituality',
          'Mindfulness, meditation, contemplative practices and their correlates',
          'Spirituality and mental health, resilience, trauma, meaning-making',
          'Cross-cultural, anthropological, philosophical perspectives',
          'Ethics, compassion, altruism, prosocial behavior intersections',
          'Spiritual development across the lifespan',
          'Systems-level and integrative models of consciousness',
          'Clinical settings, healthcare, and integrative medicine',
          'Neuroimmune and psychophysiological pathways',
          'Mystical experiences, creativity, intuition, expanded awareness',
          'Spirituality in education, leadership, and organizations',
          'AI, cognitive science, and emerging frontiers',
        ],
      },
      editorialEthics: {
        title: 'Editorial and Ethical Standards',
        bullets: [
          'Ethical guidelines for human participants and experiential methodologies',
          'Disclosure of conflicts of interest',
          'Methodological clarity and reproducibility',
          'Culturally sensitive approaches to traditions and experiences',
          'Fair evaluation of qualitative, quantitative, and mixed-methods research',
          'Post-publication updates and corrections',
        ],
      },
      audienceImpact: {
        title: 'Audience and Impact',
        bullets: [
          'Advance scientific models of spirituality and consciousness',
          'Promote dialogue between science and wisdom traditions',
          'Support evidence-based applications in health and well-being',
          'Illuminate roles in resilience, creativity, morality, flourishing',
          'Encourage rigorous, open, transformative scholarship',
        ],
      },
    },
  },
  {
    id: toJournalId('Integrative Mental Health'),
    title: 'Integrative Mental Health',
    subtitle: 'An international, peer-reviewed, open-access journal published by Integrative Science.',
    editors: ['Deborah'],
    mission:
      'Integrates biological, psychological, social, environmental, and spiritual dimensions to advance precision interventions and global well-being.',
    sections: {
      scope: {
        title: 'Scope',
        bullets: [
          'Biopsychosocial and bio-psycho-socio-spiritual models',
          'Psychoneuroimmunology of mood, anxiety, trauma, stress-related disorders',
          'Neurobiology and systems neuroscience of cognition, emotion, behavior',
          'Integrative and complementary interventions',
          'Spirituality, meaning, purpose, psychological correlates',
          'Psychotherapy, resilience, attachment, relational models',
          'Stress biology, trauma pathways, recovery processes',
          'Precision mental health, biomarkers, multi-omics signatures',
          'Digital mental health, AI-based assessments, data-driven diagnostics',
          'Social determinants, cultural contexts, ecological influences',
          'Preventive mental health and early interventions',
          'Integrative approaches to chronic illness, neuroinflammation, mood disorders',
          'Mind–body interventions: mindfulness, meditation, breathwork, compassion-based therapies',
        ],
      },
      editorialEthics: {
        title: 'Editorial and Ethical Standards',
        bullets: [
          'Disclosure of conflicts of interest',
          'Ethical approval for human participants',
          'Clear and reproducible methodology',
          'Data, code, and supplementary availability when feasible',
          'Responsible research for vulnerable populations',
          'Post-publication corrections and updates',
        ],
      },
      audienceImpact: {
        title: 'Audience and Impact',
        bullets: [
          'Advance comprehensive models of well-being',
          'Support precision and personalized care',
          'Illuminate root mechanisms of mental disorders',
          'Foster integrative clinical interventions',
          'Promote resilience, flourishing, and human potential',
        ],
      },
    },
  },
  {
    id: toJournalId('Education & Research'),
    title: 'Education & Research',
    subtitle: 'An international, peer-reviewed, open-access journal published by Integrative Science.',
    editors: ['Alexandre Tolstenko'],
    mission:
      'Advances innovative educational methodologies and research practices in integrative science across pedagogy, technology, and interdisciplinary training.',
    sections: {
      scope: {
        title: 'Scope',
        bullets: [
          'Innovative educational methodologies in integrative science',
          'Interdisciplinary teaching models connecting biology, psychology, spirituality, systems thinking',
          'Curriculum design for integrative and holistic programs',
          'Digital learning, online education, AI-assisted pedagogical tools',
          'Evidence-based practices in scientific training and higher education',
          'Research methods for learning, cognition, engagement',
          'Pedagogies of purpose, meaning, student well-being',
          'Contemplative practices in scientific education',
          'Assessment strategies in interdisciplinary programs',
          'Scientific literacy, critical thinking, research ethics',
          'Equity, diversity, cultural perspectives, global inclusion',
          'Innovations in undergrad, grad, postgraduate training',
          'Teacher development, mentorship, supervision',
          'Transdisciplinary approaches connecting education, health, technology, society',
        ],
      },
      editorialEthics: {
        title: 'Editorial and Ethical Standards',
        bullets: [
          'Conflicts of interest disclosure',
          'Ethical standards for research in educational contexts',
          'Methodological reporting for qualitative, quantitative, mixed-methods',
          'Ethical use of technology, AI, and learning analytics',
          'Availability of datasets, instruments, teaching materials',
          'Post-publication updates and retractions as needed',
        ],
      },
      audienceImpact: {
        title: 'Audience and Impact',
        bullets: [
          'Promote cutting-edge integrative education models',
          'Support creative and interdisciplinary curricula',
          'Advance research in teaching and learning',
          'Improve scientific training and excellence',
          'Foster humanistic, ethical, meaningful practices',
        ],
      },
    },
  },
  {
    id: toJournalId('Applied Emergent Technologies in Integrative Health'),
    title: 'Applied Emergent Technologies in Integrative Health',
    subtitle: 'An international, peer-reviewed, open-access journal published by Integrative Science.',
    editors: ['Alexandre Tolstenko'],
    mission:
      'Explores emergent technologies (AI, wearables, digital therapeutics, multi-omics) to enhance holistic, integrative health approaches.',
    sections: {
      scope: {
        title: 'Scope',
        bullets: [
          'AI, machine learning, deep learning for health evaluation and prediction',
          'Games and VR/XR technologies in therapeutic environments',
          'Wearables, biosensors, mobile health, digital biomarkers',
          'Data-driven insights into psychoneuroimmunology and integrative medicine',
          'Multi-omics integration for precision health',
          'Digital therapeutics and technology-assisted interventions',
          'Computational models of neuroimmune, metabolic, systemic processes',
          'Telehealth, remote monitoring, virtual care ecosystems',
          'Neurotechnology and cognitive enhancement tools',
          'Bioengineering and emerging biomedical devices',
          'Technology-based approaches to chronic disease and resilience',
          'AI ethics, data privacy, transparency, responsible innovation',
          'Systems-level analysis of complex health networks',
          'Technology-supported interventions integrating lifestyle and well-being',
        ],
      },
      editorialEthics: {
        title: 'Editorial and Ethical Standards',
        bullets: [
          'Conflict of interest transparency',
          'Ethical oversight for human, technological, and sensitive data research',
          'Clear reporting of methods, algorithms, and reproducibility',
          'Encouragement of open data, open code, FAIR principles',
          'Balanced evaluation of emerging technologies',
          'Post-publication updates or retractions when necessary',
        ],
      },
      audienceImpact: {
        title: 'Audience and Impact',
        bullets: [
          'Accelerate scientific and technological innovation',
          'Enhance diagnostics, prevention, and personalized interventions',
          'Deepen understanding of mind–body–immune interactions',
          'Integrate technological and humanistic principles in care',
          'Advance systems-level approaches to complex challenges',
          'Support digital transformation and predictive models',
        ],
      },
    },
  },
];

