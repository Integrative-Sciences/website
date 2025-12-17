import React from 'react';
import { trackPageView } from '../lib/analytics';

const ReviewCriteria: React.FC = () => {
  React.useEffect(() => {
    trackPageView('/review-criteria');
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-16">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Editorial Review Criteria
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our transparent guidelines for evaluating manuscript quality and ensuring 
              rigorous scientific standards in integrative science research.
            </p>
          </div>

          {/* Introduction */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Editorial Philosophy
            </h2>
            <p className="text-gray-700 leading-relaxed">
              The Integrative Science Journal is committed to publishing high-quality research 
              that advances our understanding across disciplinary boundaries. Our editorial 
              review process follows rigorous criteria to ensure scientific excellence, 
              methodological soundness, and meaningful contributions to the field.
            </p>
          </div>

          {/* Criteria Sections */}
          <div className="space-y-8">
            
            {/* Section 1: Basic Identification and Context */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-semibold text-blue-800 mb-6 border-b-2 border-blue-200 pb-2">
                1. Basic Identification and Context
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Authors and Affiliations</h3>
                  <p className="text-gray-700">
                    We evaluate whether authors are from recognized research groups and assess 
                    the strength of collaborative networks. Strong institutional affiliations 
                    and interdisciplinary collaborations are valued.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Publication Context</h3>
                  <p className="text-gray-700">
                    We consider the timeliness of the research and how well it addresses 
                    current gaps in integrative science knowledge.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 2: Objectives and Hypotheses */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-semibold text-blue-800 mb-6 border-b-2 border-blue-200 pb-2">
                2. Objectives and Research Questions
              </h2>
              <div className="space-y-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Key Evaluation Points:</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li>Is the central hypothesis clearly articulated?</li>
                    <li>Are objectives specific, measurable, and relevant to integrative science?</li>
                    <li>Is there strong justification for why this research question matters?</li>
                    <li>Does the study address meaningful gaps in current knowledge?</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Section 3: Methodology */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-semibold text-blue-800 mb-6 border-b-2 border-blue-200 pb-2">
                3. Methodology Assessment
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-3">Experimental Design</h3>
                  <ul className="list-disc list-inside space-y-1 text-gray-700">
                    <li>Appropriate study design (in vivo, in vitro, clinical trials, etc.)</li>
                    <li>Adequate sample sizes and replication</li>
                    <li>Proper randomization and blinding when applicable</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-3">Controls and Validation</h3>
                  <ul className="list-disc list-inside space-y-1 text-gray-700">
                    <li>Appropriate positive, negative, and internal controls</li>
                    <li>Independent replication and reproducibility</li>
                    <li>Validation of key findings</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-3">Techniques and Analysis</h3>
                  <ul className="list-disc list-inside space-y-1 text-gray-700">
                    <li>Methods appropriate for testing hypotheses</li>
                    <li>Proper statistical analysis and reporting</li>
                    <li>Clear description of significance levels and confidence intervals</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-3">Integrative Approaches</h3>
                  <ul className="list-disc list-inside space-y-1 text-gray-700">
                    <li>Use of complementary techniques (genetics, imaging, biochemistry)</li>
                    <li>Cross-disciplinary methodological integration</li>
                    <li>Novel analytical approaches when appropriate</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Section 4: Results */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-semibold text-blue-800 mb-6 border-b-2 border-blue-200 pb-2">
                4. Results Evaluation
              </h2>
              <div className="space-y-4">
                <div className="bg-green-50 p-4 rounded-lg">
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Quality Indicators:</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li>Results directly address the research questions posed</li>
                    <li>Clear presentation through well-designed figures, tables, and graphics</li>
                    <li>Distinction between statistical significance and biological relevance</li>
                    <li>Authors acknowledge potential artifacts, biases, and limitations</li>
                    <li>Comprehensive and informative figure legends</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Section 5: Discussion and Conclusions */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-semibold text-blue-800 mb-6 border-b-2 border-blue-200 pb-2">
                5. Discussion and Conclusions
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Literature Integration</h3>
                  <p className="text-gray-700">
                    Authors must effectively relate their findings to existing literature and 
                    clearly position their contributions and innovations within the field.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Critical Assessment</h3>
                  <ul className="list-disc list-inside space-y-1 text-gray-700">
                    <li>Identification of study limitations</li>
                    <li>Suggestions for future research directions</li>
                    <li>Conclusions proportional to the data presented</li>
                    <li>Clear practical or theoretical implications</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Section 6: Strengths and Weaknesses */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-semibold text-blue-800 mb-6 border-b-2 border-blue-200 pb-2">
                6. Critical Assessment Framework
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-green-50 p-6 rounded-lg">
                  <h3 className="text-lg font-medium text-green-800 mb-3">Potential Strengths</h3>
                  <ul className="list-disc list-inside space-y-2 text-green-700">
                    <li>Rigorous methodology with well-defined controls</li>
                    <li>Reproducibility and independent replication</li>
                    <li>Integration of modern complementary techniques</li>
                    <li>High relevance to health, biology, or medicine</li>
                    <li>Novel integrative approaches</li>
                    <li>Strong interdisciplinary collaboration</li>
                  </ul>
                </div>
                <div className="bg-red-50 p-6 rounded-lg">
                  <h3 className="text-lg font-medium text-red-800 mb-3">Potential Concerns</h3>
                  <ul className="list-disc list-inside space-y-2 text-red-700">
                    <li>Small sample sizes limiting generalizability</li>
                    <li>Inadequate control for confounding variables</li>
                    <li>Over-reliance on single experiments for strong conclusions</li>
                    <li>Lack of functional confirmation (expression without function)</li>
                    <li>Over-interpretation of data</li>
                    <li>Insufficient integration across disciplines</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Section 7: Impact and Significance */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-semibold text-blue-800 mb-6 border-b-2 border-blue-200 pb-2">
                7. Field Impact and Significance
              </h2>
              <div className="space-y-4">
                <div className="bg-indigo-50 p-4 rounded-lg">
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Key Questions for Editors:</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li>What novel knowledge does this study contribute to integrative science?</li>
                    <li>What are the logical next steps for future researchers?</li>
                    <li>Are there clear implications for practical applications (medicine, therapy, policy)?</li>
                    <li>Does the work advance interdisciplinary understanding?</li>
                    <li>Will this research inspire new collaborative approaches?</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Editorial Decision Framework */}
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-semibold mb-6">Editorial Decision Framework</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="bg-white bg-opacity-20 rounded-lg p-4 mb-3">
                    <h3 className="text-lg font-medium mb-2">Accept</h3>
                    <p className="text-sm">
                      Meets all criteria with strong methodology, clear results, and significant contribution to integrative science
                    </p>
                  </div>
                </div>
                <div className="text-center">
                  <div className="bg-white bg-opacity-20 rounded-lg p-4 mb-3">
                    <h3 className="text-lg font-medium mb-2">Revise</h3>
                    <p className="text-sm">
                      Strong potential but requires improvements in methodology, analysis, or presentation
                    </p>
                  </div>
                </div>
                <div className="text-center">
                  <div className="bg-white bg-opacity-20 rounded-lg p-4 mb-3">
                    <h3 className="text-lg font-medium mb-2">Reject</h3>
                    <p className="text-sm">
                      Fundamental flaws in methodology, insufficient novelty, or poor fit for integrative science
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Footer */}
          <div className="text-center mt-12 p-6 bg-gray-100 rounded-lg">
            <p className="text-gray-600">
              These criteria ensure that the Integrative Science Journal maintains the highest 
              standards of scientific rigor while promoting innovative, interdisciplinary research.
            </p>
            <p className="text-sm text-gray-500 mt-2">
              Last updated: {new Date().toLocaleDateString()}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewCriteria;