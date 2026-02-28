import MotionWrapper from "@/app/components/MotionWrapper";

export default function RootLoading() {
  return (
    <div className="fixed inset-0 bg-lion-dark z-50 flex items-center justify-center">
      <div className="text-center">
        {/* Logo animé avec MotionWrapper */}
        <MotionWrapper direction="scale" duration={1} bounce={true}>
          <div className="relative mb-8">
            <div className="absolute inset-0 bg-lion-gold/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="relative w-32 h-32 mx-auto">
              <div className="absolute inset-0 border-4 border-lion-gold/20 rounded-full"></div>
              <div className="absolute inset-0 border-4 border-lion-gold rounded-full animate-spin border-t-transparent"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-5xl animate-bounce">🦁</span>
              </div>
            </div>
          </div>
        </MotionWrapper>
        
        <MotionWrapper direction="up" delay={0.2}>
          <h2 className="text-3xl font-bold text-lion-gold mb-4">
            LionForge
          </h2>
        </MotionWrapper>
        
        {/* Barre de progression animée */}
        <MotionWrapper delay={0.4} direction="fade">
          <div className="w-64 h-2 bg-lion-gold/20 rounded-full overflow-hidden mx-auto">
            <div className="h-full bg-gradient-to-r from-lion-gold to-lion-electric rounded-full animate-progress"></div>
          </div>
        </MotionWrapper>
        
        <MotionWrapper delay={0.6}>
          <p className="text-lion-light mt-4 text-sm">
            Chargement de l'application...
          </p>
        </MotionWrapper>
      </div>
    </div>
  );
}