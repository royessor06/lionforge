import MotionWrapper from "@/app/components/MotionWrapper";

export default function ServicesLoading() {
  return (
    <div className="min-h-screen bg-lion-dark py-20 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* En-tête */}
        <MotionWrapper direction="scale" duration={0.8}>
          <div className="text-center mb-12">
            <div className="h-16 w-64 bg-lion-gold bg-opacity-20 rounded-lg mx-auto mb-4 animate-pulse"></div>
            <div className="h-6 w-96 bg-lion-gold bg-opacity-10 rounded-lg mx-auto animate-pulse"></div>
          </div>
        </MotionWrapper>

        {/* Grille des services squelettée */}
        <div className="grid md:grid-cols-2 gap-6">
          {[1, 2, 3, 4].map((i) => (
            <MotionWrapper 
              key={i} 
              delay={0.2 + i * 0.1}
              direction="slide-up"
              distance={20}
            >
              <div className="bg-lion-surface border border-lion-gold border-opacity-20 rounded-2xl p-6">
                <div className="flex items-start gap-4">
                  {/* Icône */}
                  <div className="w-16 h-16 bg-lion-gold bg-opacity-20 rounded-2xl animate-pulse"></div>
                  
                  <div className="flex-1 space-y-3">
                    <div className="h-8 w-40 bg-lion-gold bg-opacity-20 rounded-lg animate-pulse"></div>
                    <div className="space-y-2">
                      <div className="h-4 w-full bg-lion-gold bg-opacity-10 rounded-lg animate-pulse"></div>
                      <div className="h-4 w-5/6 bg-lion-gold bg-opacity-10 rounded-lg animate-pulse"></div>
                    </div>
                    <div className="h-6 w-32 bg-lion-electric bg-opacity-20 rounded-lg animate-pulse mt-4"></div>
                  </div>
                </div>
              </div>
            </MotionWrapper>
          ))}
        </div>

        {/* CTA squeletté */}
        <MotionWrapper delay={0.6}>
          <div className="mt-20 text-center p-10 bg-lion-surface border border-lion-gold border-opacity-20 rounded-3xl">
            <div className="h-8 w-64 bg-lion-gold bg-opacity-20 rounded-lg mx-auto mb-4 animate-pulse"></div>
            <div className="h-16 w-96 bg-lion-gold bg-opacity-10 rounded-lg mx-auto mb-6 animate-pulse"></div>
            <div className="h-12 w-48 bg-lion-gold bg-opacity-20 rounded-xl mx-auto animate-pulse"></div>
          </div>
        </MotionWrapper>
      </div>
    </div>
  );
}