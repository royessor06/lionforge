import MotionWrapper from "@/app/components/MotionWrapper";

export default function ContactLoading() {
  return (
    <div className="min-h-screen bg-lion-dark py-20 px-6">
      <div className="max-w-4xl mx-auto">
        
        {/* En-tête */}
        <MotionWrapper direction="scale" duration={0.8}>
          <div className="text-center mb-12">
            <div className="h-16 w-64 bg-lion-gold bg-opacity-20 rounded-lg mx-auto mb-4 animate-pulse"></div>
            <div className="h-6 w-96 bg-lion-gold bg-opacity-10 rounded-lg mx-auto animate-pulse"></div>
          </div>
        </MotionWrapper>

        {/* Cartes de contact */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {[1, 2, 3, 4].map((i) => (
            <MotionWrapper 
              key={i} 
              delay={0.2 + i * 0.1}
              direction="zoom-out"
            >
              <div className="bg-lion-surface border border-lion-gold border-opacity-20 p-6 rounded-xl">
                <div className="w-16 h-16 bg-lion-gold bg-opacity-20 rounded-2xl mx-auto mb-4 animate-pulse"></div>
                <div className="h-5 w-24 bg-lion-gold bg-opacity-20 rounded-lg mx-auto mb-2 animate-pulse"></div>
                <div className="h-4 w-32 bg-lion-gold bg-opacity-10 rounded-lg mx-auto animate-pulse"></div>
                <div className="h-4 w-24 bg-lion-gold bg-opacity-10 rounded-lg mx-auto mt-2 animate-pulse"></div>
              </div>
            </MotionWrapper>
          ))}
        </div>

        {/* Formulaire */}
        <MotionWrapper delay={0.6}>
          <div className="bg-lion-surface border border-lion-gold border-opacity-20 p-8 rounded-xl">
            <div className="h-8 w-48 bg-lion-gold bg-opacity-20 rounded-lg mx-auto mb-8 animate-pulse"></div>
            
            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <div className="h-4 w-24 bg-lion-gold bg-opacity-20 rounded-lg mb-2 animate-pulse"></div>
                  <div className="h-12 w-full bg-lion-gold bg-opacity-10 rounded-lg animate-pulse"></div>
                </div>
                <div>
                  <div className="h-4 w-24 bg-lion-gold bg-opacity-20 rounded-lg mb-2 animate-pulse"></div>
                  <div className="h-12 w-full bg-lion-gold bg-opacity-10 rounded-lg animate-pulse"></div>
                </div>
              </div>
              
              <div>
                <div className="h-4 w-24 bg-lion-gold bg-opacity-20 rounded-lg mb-2 animate-pulse"></div>
                <div className="h-12 w-full bg-lion-gold bg-opacity-10 rounded-lg animate-pulse"></div>
              </div>
              
              <div>
                <div className="h-4 w-24 bg-lion-gold bg-opacity-20 rounded-lg mb-2 animate-pulse"></div>
                <div className="h-32 w-full bg-lion-gold bg-opacity-10 rounded-lg animate-pulse"></div>
              </div>
              
              <div className="flex justify-center">
                <div className="h-12 w-40 bg-lion-gold bg-opacity-20 rounded-lg animate-pulse"></div>
              </div>
            </div>
          </div>
        </MotionWrapper>

        {/* Carte */}
        <MotionWrapper delay={0.8}>
          <div className="mt-12 h-64 bg-lion-surface border border-lion-gold border-opacity-20 rounded-xl animate-pulse flex items-center justify-center">
            <div className="text-lion-muted">🗺️ Carte en cours de chargement...</div>
          </div>
        </MotionWrapper>
      </div>
    </div>
  );
}