import MotionWrapper from "@/app/components/MotionWrapper";

export default function ProjectDetailLoading() {
  return (
    <div className="min-h-screen bg-lion-dark py-20 px-6">
      <div className="max-w-6xl mx-auto">
        
        {/* Bouton retour */}
        <MotionWrapper direction="left" distance={20}>
          <div className="h-6 w-32 bg-lion-gold bg-opacity-20 rounded-lg mb-8 animate-pulse"></div>
        </MotionWrapper>

        {/* En-tête */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <MotionWrapper delay={0.2}>
            <div className="aspect-video bg-lion-surface border border-lion-gold border-opacity-20 rounded-2xl animate-pulse"></div>
          </MotionWrapper>

          <MotionWrapper delay={0.3}>
            <div className="space-y-6">
              <div className="h-8 w-32 bg-lion-gold bg-opacity-20 rounded-full mb-4 animate-pulse"></div>
              <div className="h-12 w-3/4 bg-lion-gold bg-opacity-20 rounded-lg animate-pulse"></div>
              <div className="space-y-3">
                <div className="h-5 w-full bg-lion-gold bg-opacity-10 rounded-lg animate-pulse"></div>
                <div className="h-5 w-5/6 bg-lion-gold bg-opacity-10 rounded-lg animate-pulse"></div>
                <div className="h-5 w-4/6 bg-lion-gold bg-opacity-10 rounded-lg animate-pulse"></div>
              </div>
              <div className="flex gap-6 pt-4">
                <div className="space-y-2">
                  <div className="h-4 w-16 bg-lion-gold bg-opacity-20 rounded-lg animate-pulse"></div>
                  <div className="h-6 w-24 bg-lion-gold bg-opacity-20 rounded-lg animate-pulse"></div>
                </div>
                <div className="space-y-2">
                  <div className="h-4 w-16 bg-lion-gold bg-opacity-20 rounded-lg animate-pulse"></div>
                  <div className="h-6 w-24 bg-lion-gold bg-opacity-20 rounded-lg animate-pulse"></div>
                </div>
              </div>
            </div>
          </MotionWrapper>
        </div>

        {/* Description longue */}
        <MotionWrapper delay={0.4}>
          <div className="bg-lion-surface border border-lion-gold border-opacity-20 rounded-2xl p-8 mb-12">
            <div className="h-8 w-48 bg-lion-gold bg-opacity-20 rounded-lg mb-4 animate-pulse"></div>
            <div className="space-y-3">
              <div className="h-5 w-full bg-lion-gold bg-opacity-10 rounded-lg animate-pulse"></div>
              <div className="h-5 w-full bg-lion-gold bg-opacity-10 rounded-lg animate-pulse"></div>
              <div className="h-5 w-3/4 bg-lion-gold bg-opacity-10 rounded-lg animate-pulse"></div>
            </div>
          </div>
        </MotionWrapper>

        {/* Stack et features */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <MotionWrapper delay={0.5}>
            <div className="bg-lion-surface border border-lion-gold border-opacity-20 rounded-2xl p-8">
              <div className="h-8 w-40 bg-lion-gold bg-opacity-20 rounded-lg mb-4 animate-pulse"></div>
              <div className="flex flex-wrap gap-3">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className="h-8 w-20 bg-lion-gold bg-opacity-10 rounded-full animate-pulse"></div>
                ))}
              </div>
            </div>
          </MotionWrapper>

          <MotionWrapper delay={0.6}>
            <div className="bg-lion-surface border border-lion-gold border-opacity-20 rounded-2xl p-8">
              <div className="h-8 w-40 bg-lion-gold bg-opacity-20 rounded-lg mb-4 animate-pulse"></div>
              <div className="space-y-3">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-lion-gold rounded-full"></div>
                    <div className="h-5 w-40 bg-lion-gold bg-opacity-10 rounded-lg animate-pulse"></div>
                  </div>
                ))}
              </div>
            </div>
          </MotionWrapper>
        </div>

        {/* CTA */}
        <MotionWrapper delay={0.7}>
          <div className="text-center">
            <div className="h-14 w-64 bg-lion-gold bg-opacity-20 rounded-xl mx-auto animate-pulse"></div>
          </div>
        </MotionWrapper>
      </div>
    </div>
  );
}