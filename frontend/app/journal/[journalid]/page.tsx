import { notFound } from 'next/navigation';
import { journals } from '@/lib/journals';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Metadata } from 'next';

interface JournalPageProps {
  params: Promise<{
    journalid: string;
  }>;
}

// Generate static params for all journals
export async function generateStaticParams() {
  return journals.map((journal) => ({
    journalid: journal.id,
  }));
}

// Generate metadata for SEO
export async function generateMetadata({ params }: JournalPageProps): Promise<Metadata> {
  const { journalid } = await params;
  const journal = journals.find((j) => j.id === journalid);
  
  if (!journal) {
    return {
      title: 'Journal Not Found',
    };
  }

  return {
    title: `${journal.title} | Integrative Science Journals`,
    description: journal.subtitle || journal.mission,
  };
}

export default async function JournalPage({ params }: JournalPageProps) {
  const { journalid } = await params;
  const journal = journals.find((j) => j.id === journalid);

  if (!journal) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-white text-blue-600 px-4 py-2 rounded-md font-semibold text-sm">
              Open Access
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{journal.title}</h1>
          {journal.subtitle && (
            <p className="text-xl text-blue-100 mb-6">{journal.subtitle}</p>
          )}
          {journal.mission && (
            <p className="text-lg text-blue-50 max-w-4xl leading-relaxed">{journal.mission}</p>
          )}
          
          <div className="mt-8 flex flex-wrap gap-4">
            <div className="bg-white text-blue-600 px-6 py-3 rounded-md font-semibold hover:bg-blue-50 transition-colors cursor-not-allowed opacity-75">
              Submit an Article
            </div>
            <div className="bg-blue-500 text-white px-6 py-3 rounded-md font-semibold hover:bg-blue-400 transition-colors cursor-not-allowed opacity-75">
              View Archive
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-8 border-b">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardHeader className="pb-3">
                <CardDescription>Time to first decision</CardDescription>
                <CardTitle className="text-3xl">1-2 weeks</CardTitle>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader className="pb-3">
                <CardDescription>First decision to acceptance</CardDescription>
                <CardTitle className="text-3xl">4-6 weeks</CardTitle>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader className="pb-3">
                <CardDescription>Acceptance to publication</CardDescription>
                <CardTitle className="text-3xl">1-2 weeks</CardTitle>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Column */}
            <div className="lg:col-span-2 space-y-8">
              {/* Editors Section */}
              {journal.editors && journal.editors.length > 0 && (
                <Card>
                  <CardHeader>
                    <CardTitle>Editorial Team</CardTitle>
                    <CardDescription>
                      Meet the editorial team leading this journal
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {journal.editors.map((editor, index) => (
                        <div key={index} className="flex items-start gap-4 p-4 rounded-lg bg-gray-50">
                          <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center font-semibold text-lg">
                            {editor.charAt(0)}
                          </div>
                          <div>
                            <h4 className="font-semibold text-lg">{editor}</h4>
                            <p className="text-sm text-gray-600">Editor-in-Chief</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Scope Section */}
              {journal.sections?.scope && (
                <Card>
                  <CardHeader>
                    <CardTitle>{journal.sections.scope.title}</CardTitle>
                    <CardDescription>
                      Topics and research areas covered by this journal
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    {journal.sections.scope.paragraphs && (
                      <div className="space-y-4 mb-6">
                        {journal.sections.scope.paragraphs.map((para, index) => (
                          <p key={index} className="text-gray-700">{para}</p>
                        ))}
                      </div>
                    )}
                    {journal.sections.scope.bullets && (
                      <ul className="space-y-3">
                        {journal.sections.scope.bullets.map((bullet, index) => (
                          <li key={index} className="flex items-start gap-3">
                            <span className="text-blue-600 mt-1">•</span>
                            <span className="text-gray-700">{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </CardContent>
                </Card>
              )}

              {/* Editorial Ethics Section */}
              {journal.sections?.editorialEthics && (
                <Card>
                  <CardHeader>
                    <CardTitle>{journal.sections.editorialEthics.title}</CardTitle>
                    <CardDescription>
                      Our commitment to quality and ethical publishing
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    {journal.sections.editorialEthics.paragraphs && (
                      <div className="space-y-4 mb-6">
                        {journal.sections.editorialEthics.paragraphs.map((para, index) => (
                          <p key={index} className="text-gray-700">{para}</p>
                        ))}
                      </div>
                    )}
                    {journal.sections.editorialEthics.bullets && (
                      <ul className="space-y-3">
                        {journal.sections.editorialEthics.bullets.map((bullet, index) => (
                          <li key={index} className="flex items-start gap-3">
                            <span className="text-green-600 mt-1">✓</span>
                            <span className="text-gray-700">{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </CardContent>
                </Card>
              )}

              {/* Audience and Impact Section */}
              {journal.sections?.audienceImpact && (
                <Card>
                  <CardHeader>
                    <CardTitle>{journal.sections.audienceImpact.title}</CardTitle>
                    <CardDescription>
                      The impact and reach of this journal
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    {journal.sections.audienceImpact.paragraphs && (
                      <div className="space-y-4 mb-6">
                        {journal.sections.audienceImpact.paragraphs.map((para, index) => (
                          <p key={index} className="text-gray-700">{para}</p>
                        ))}
                      </div>
                    )}
                    {journal.sections.audienceImpact.bullets && (
                      <ul className="space-y-3">
                        {journal.sections.audienceImpact.bullets.map((bullet, index) => (
                          <li key={index} className="flex items-start gap-3">
                            <span className="text-purple-600 mt-1">→</span>
                            <span className="text-gray-700">{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </CardContent>
                </Card>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Submission Guidelines */}
              <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-200">
                <CardHeader>
                  <CardTitle className="text-blue-900">Submission Guidelines</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-700 mb-4">
                    We're committed to making your publishing experience as easy and efficient as we can.
                  </p>
                  <div className="inline-block text-blue-600 font-semibold hover:text-blue-700 cursor-not-allowed opacity-75">
                    View Guidelines →
                  </div>
                </CardContent>
              </Card>

              {/* Join as Editorial Board Member */}
              <Card className="bg-gradient-to-br from-green-50 to-emerald-50 border-green-200">
                <CardHeader>
                  <CardTitle className="text-green-900">Join Editorial Board</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-700 mb-4">
                    Contribute to the scientific community by joining our editorial team.
                  </p>
                  <div className="inline-block text-green-600 font-semibold hover:text-green-700 cursor-not-allowed opacity-75">
                    Apply Now →
                  </div>
                </CardContent>
              </Card>

              {/* Become a Reviewer */}
              <Card className="bg-gradient-to-br from-purple-50 to-pink-50 border-purple-200">
                <CardHeader>
                  <CardTitle className="text-purple-900">Become a Reviewer</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-700 mb-4">
                    Join our peer review team and contribute to quality research.
                  </p>
                  <div className="inline-block text-purple-600 font-semibold hover:text-purple-700 cursor-not-allowed opacity-75">
                    Join Now →
                  </div>
                </CardContent>
              </Card>

              {/* Article Processing Charges */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Article Processing Charges</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-700">
                    Learn about our transparent pricing for open access publishing.
                  </p>
                  <div className="inline-block text-blue-600 font-semibold hover:text-blue-700 mt-3 cursor-not-allowed opacity-75">
                    View Details →
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-4">Benefits for Editorial Board Members</h2>
          <p className="text-center text-gray-600 mb-10 max-w-3xl mx-auto">
            Joining the Editorial Team is an opportunity to be recognized as an expert in your field and contribute to cutting-edge research.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <CardTitle className="text-lg">Academic Recognition</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  Enhance your academic influence and enrich your professional resume.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-green-100 text-green-600 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <CardTitle className="text-lg">Certificate of Honor</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  Receive a certificate acknowledging your contributions to the journal.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <CardTitle className="text-lg">Network & Collaborate</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  Connect with scholars in your field and broaden your academic network.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-yellow-100 text-yellow-600 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <CardTitle className="text-lg">Early Access</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  Gain access to the latest research in advance and stay at the forefront.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-red-100 text-red-600 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                  </svg>
                </div>
                <CardTitle className="text-lg">Listed on Website</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  Have your name and profile listed prominently on the journal website.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <CardTitle className="text-lg">Shape the Future</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  Influence the direction of research and scholarship in your field.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Publish Your Research?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Join our community of researchers advancing {journal.title.toLowerCase()}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="bg-white text-blue-600 px-8 py-4 rounded-md font-semibold text-lg hover:bg-blue-50 transition-colors cursor-not-allowed opacity-75">
              Submit Your Article
            </div>
            <div className="bg-blue-500 text-white px-8 py-4 rounded-md font-semibold text-lg hover:bg-blue-400 transition-colors border-2 border-blue-400 cursor-not-allowed opacity-75">
              Contact Editorial Team
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
