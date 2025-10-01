import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { bios } from '../bios';
import { Card, CardContent } from './ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from './ui/dialog';
import { trackEditorProfileView, trackModalOpen, trackModalClose } from '../lib/analytics';

interface Editor {
  id: number;
  name: string;
  title?: string;
  bio?: string;
  image?: string | null;
  path?: string;
}

const Editors: React.FC = () => {
  const { editorPath } = useParams<{ editorPath: string }>();
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedEditor, setSelectedEditor] = useState<Editor | null>(null);
  


  // Filter out incomplete entries
  const completeEditors = bios.filter(bio => bio.title && bio.bio && bio.path);

  // Check if we're on an editor page based on URL
  useEffect(() => {
    if (editorPath) {
      const editor = completeEditors.find(bio => bio.path === editorPath);
      if (editor) {
        setSelectedEditor(editor);
        setIsModalOpen(true);
        // Track editor profile view
        trackEditorProfileView(editor.name);
        trackModalOpen('editor_profile');
      } else {
        // If editor not found, redirect to home
        navigate('/', { replace: true });
      }
    } else {
      setSelectedEditor(null);
      setIsModalOpen(false);
    }
  }, [editorPath, navigate, completeEditors]);

  // Handle hash navigation after page load
  useEffect(() => {
    const handleHashNavigation = () => {
      const hash = window.location.hash;
      if (hash) {
        // Remove the # from the hash
        const elementId = hash.substring(1);
        const element = document.getElementById(elementId);
        
        if (element) {
          // Use a small delay to ensure the page is fully rendered
          setTimeout(() => {
            element.scrollIntoView({ 
              behavior: 'smooth', 
              block: 'center' 
            });
          }, 100);
        }
      }
    };

    // Handle initial page load with hash
    handleHashNavigation();

    // Handle hash changes (e.g., when navigating back from modal)
    const handleHashChange = () => {
      handleHashNavigation();
    };

    window.addEventListener('hashchange', handleHashChange);
    
    // Also handle when the page finishes loading
    if (document.readyState === 'loading') {
      window.addEventListener('load', handleHashNavigation);
    }

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
      window.removeEventListener('load', handleHashNavigation);
    };
  }, []);

  const handleViewProfile = (editor: Editor) => {
    navigate(`/editors/${editor.path}`);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedEditor(null);
    // Navigate to home with hash anchor for the editor using path
    if (selectedEditor && selectedEditor.path) {
      navigate(`/#${selectedEditor.path}`, { replace: true });
    } else {
      navigate('/', { replace: true });
    }
    // Track modal close
    trackModalClose('editor_profile');
  };

  const handleDialogOpenChange = (open: boolean) => {
    if (!open && isModalOpen) {
      handleCloseModal();
    }
  };

  return (
    <>
      <section className="py-16 bg-gradient-to-br from-purple-100 to-blue-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Editorial Board</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Meet our distinguished editorial team committed to advancing integrative science research.
            </p>
          </div>
          
          <div className="flex flex-col lg:flex-row gap-6 justify-center items-stretch">
            {completeEditors.map((editor, index) => (
              <div key={index} id={editor.path} className="flex-1 max-w-sm mx-auto lg:mx-0">
                <Card 
                  id={`editor-${editor.id}`}
                  onClick={() => handleViewProfile(editor)}
                  className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col cursor-pointer h-full"
                >
                <div className="relative">
                  <div className="aspect-[4/3] overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
                    {editor.image ? (
                      <img
                        src={editor.image}
                        alt={editor.name}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-500 to-purple-600">
                        <span className="text-white text-4xl font-bold">
                          {editor.name.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
                
                <CardContent className="p-6 text-center flex flex-col justify-between flex-grow">
                  <div className="flex-grow flex flex-col justify-center">
                    <h3 className="text-xl font-bold text-gray-900 mb-1 leading-tight min-h-[3.5rem] flex items-center justify-center">{editor.name}</h3>
                    <p className="text-gray-600 text-sm mb-4">{editor.title}</p>
                  </div>
                  
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      handleViewProfile(editor);
                    }}
                    className="inline-flex items-center justify-center px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors duration-200 mt-4"
                  >
                    View Profile →
                  </button>
                </CardContent>
              </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Dialog open={isModalOpen} onOpenChange={handleDialogOpenChange}>
        <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
          {selectedEditor && (
            <>
              <DialogHeader>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 rounded-full overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 flex-shrink-0">
                    {selectedEditor.image ? (
                      <img
                        src={selectedEditor.image}
                        alt={selectedEditor.name}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-500 to-purple-600">
                        <span className="text-white text-lg font-bold">
                          {selectedEditor.name.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                    )}
                  </div>
                  <div className="text-left">
                    <DialogTitle className="text-2xl font-bold text-gray-900">
                      {selectedEditor.name}
                    </DialogTitle>
                    <DialogDescription className="text-blue-600 font-medium text-base">
                      {selectedEditor.title}
                    </DialogDescription>
                  </div>
                </div>
              </DialogHeader>
              
              <div className="mt-4">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Biography</h4>
                <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                  {selectedEditor.bio}
                </p>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Editors;