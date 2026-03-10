import MotionWrapper from "@/app/components/MotionWrapper";

export default function ProjectsLoading() {
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

        {/* Filtres */}
        <MotionWrapper delay={0.2}>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="h-10 w-24 bg-lion-gold bg-opacity-20 rounded-full animate-pulse"></div>
            ))}
          </div>
        </MotionWrapper>

        {/* Carousel placeholder */}
        <MotionWrapper delay={0.3}>
          <div className="w-full max-w-md mx-auto h-[400px] bg-lion-surface border border-lion-gold border-opacity-20 rounded-3xl mb-12 animate-pulse"></div>
        </MotionWrapper>

        {/* Grille de projets */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <MotionWrapper 
              key={i} 
              delay={0.4 + i * 0.1}
              direction="slide-up"
              distance={20}
            >
              <div className="bg-lion-surface border border-lion-gold border-opacity-20 rounded-2xl overflow-hidden">
                {/* Image */}
                <div className="aspect-video bg-lion-gold bg-opacity-10 animate-pulse"></div>
                
                <div className="p-6 space-y-4">
                  <div className="flex justify-between">
                    <div className="h-6 w-20 bg-lion-gold bg-opacity-20 rounded-full animate-pulse"></div>
                    <div className="h-4 w-16 bg-lion-gold bg-opacity-10 rounded-lg animate-pulse"></div>
                  </div>
                  <div className="h-7 w-40 bg-lion-gold bg-opacity-20 rounded-lg animate-pulse"></div>
                  <div className="h-5 w-32 bg-lion-electric bg-opacity-20 rounded-lg animate-pulse"></div>
                </div>
              </div>
            </MotionWrapper>
          ))}
        </div>
      </div>
    </div>
  );
}