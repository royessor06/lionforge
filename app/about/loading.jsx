import MotionWrapper from "@/app/components/MotionWrapper";

export default function AboutLoading() {
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

        {/* Stats squelettées */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {[1, 2, 3, 4].map((i) => (
            <MotionWrapper key={i} delay={0.1 + i * 0.1}>
              <div className="text-center">
                <div className="w-12 h-12 bg-lion-gold bg-opacity-20 rounded-full mx-auto mb-2 animate-pulse"></div>
                <div className="h-8 w-16 bg-lion-gold bg-opacity-20 rounded-lg mx-auto mb-2 animate-pulse"></div>
                <div className="h-4 w-20 bg-lion-gold bg-opacity-10 rounded-lg mx-auto animate-pulse"></div>
              </div>
            </MotionWrapper>
          ))}
        </div>

        {/* Contenu squeletté */}
        <div className="space-y-8">
          {[1, 2, 3].map((i) => (
            <MotionWrapper key={i} delay={0.3 + i * 0.1}>
              <div className="bg-lion-surface border border-lion-gold border-opacity-20 rounded-2xl p-8">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-lion-gold bg-opacity-20 rounded-full animate-pulse mr-3"></div>
                  <div className="h-8 w-48 bg-lion-gold bg-opacity-20 rounded-lg animate-pulse"></div>
                </div>
                <div className="space-y-3">
                  <div className="h-4 w-full bg-lion-gold bg-opacity-10 rounded-lg animate-pulse"></div>
                  <div className="h-4 w-5/6 bg-lion-gold bg-opacity-10 rounded-lg animate-pulse"></div>
                  <div className="h-4 w-4/6 bg-lion-gold bg-opacity-10 rounded-lg animate-pulse"></div>
                </div>
              </div>
            </MotionWrapper>
          ))}
        </div>

        {/* Équipe squelettée */}
        <MotionWrapper delay={0.6}>
          <div className="mt-12">
            <div className="h-10 w-40 bg-lion-gold bg-opacity-20 rounded-lg mx-auto mb-8 animate-pulse"></div>
            <div className="grid md:grid-cols-3 gap-6">
              {[1, 2, 3].map((i) => (
                <div key={i} className="text-center">
                  <div className="w-32 h-32 bg-lion-gold bg-opacity-20 rounded-full mx-auto mb-4 animate-pulse"></div>
                  <div className="h-5 w-24 bg-lion-gold bg-opacity-20 rounded-lg mx-auto mb-2 animate-pulse"></div>
                  <div className="h-4 w-32 bg-lion-gold bg-opacity-10 rounded-lg mx-auto animate-pulse"></div>
                </div>
              ))}
            </div>
          </div>
        </MotionWrapper>
      </div>
    </div>
  );
}