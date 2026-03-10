import MotionWrapper from "@/app/components/MotionWrapper";

export default function BlogLoading() {
  return (
    <div className="min-h-screen bg-lion-dark py-20 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* En-tête */}
        <MotionWrapper direction="scale" duration={0.8}>
          <div className="text-center mb-12">
            <div className="h-16 w-48 bg-lion-gold bg-opacity-20 rounded-lg mx-auto mb-4 animate-pulse"></div>
            <div className="h-6 w-96 bg-lion-gold bg-opacity-10 rounded-lg mx-auto animate-pulse"></div>
          </div>
        </MotionWrapper>

        {/* Barre de recherche placeholder */}
        <MotionWrapper delay={0.2}>
          <div className="max-w-2xl mx-auto mb-12">
            <div className="h-14 bg-lion-surface border border-lion-gold border-opacity-20 rounded-2xl animate-pulse"></div>
          </div>
        </MotionWrapper>

        {/* Grille d'articles */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <MotionWrapper 
              key={i} 
              delay={0.3 + i * 0.1}
              direction="slide-up"
              distance={20}
            >
              <div className="bg-lion-surface border border-lion-gold border-opacity-20 rounded-2xl overflow-hidden">
                {/* Image */}
                <div className="aspect-video bg-lion-gold bg-opacity-10 animate-pulse"></div>
                
                <div className="p-6 space-y-4">
                  <div className="flex justify-between">
                    <div className="h-5 w-20 bg-lion-gold bg-opacity-20 rounded-full animate-pulse"></div>
                    <div className="h-4 w-16 bg-lion-gold bg-opacity-10 rounded-lg animate-pulse"></div>
                  </div>
                  <div className="h-6 w-full bg-lion-gold bg-opacity-20 rounded-lg animate-pulse"></div>
                  <div className="space-y-2">
                    <div className="h-4 w-full bg-lion-gold bg-opacity-10 rounded-lg animate-pulse"></div>
                    <div className="h-4 w-5/6 bg-lion-gold bg-opacity-10 rounded-lg animate-pulse"></div>
                  </div>
                  <div className="h-5 w-24 bg-lion-electric bg-opacity-20 rounded-lg animate-pulse"></div>
                </div>
              </div>
            </MotionWrapper>
          ))}
        </div>

        {/* Pagination */}
        <MotionWrapper delay={0.9}>
          <div className="flex justify-center gap-2 mt-12">
            {[1, 2, 3].map((i) => (
              <div key={i} className="w-10 h-10 bg-lion-gold bg-opacity-10 rounded-lg animate-pulse"></div>
            ))}
          </div>
        </MotionWrapper>
      </div>
    </div>
  );
}