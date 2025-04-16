import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import { useSwipeable } from 'react-swipeable'; // Importar useSwipeable
import { TitleSlide } from './components/TitleSlide';
import { PurposeSlide } from './components/PurposeSlide';
import { ProblemSlide } from './components/ProblemSlide';
import { SolutionSlide } from './components/SolutionSlide';
import { WhyNowSlide } from './components/WhyNowSlide';
import { ProductSlide } from './components/ProductSlide';
import { RoadmapSlide } from './components/RoadmapSlide';
import { MarketSlide } from './components/MarketSlide';
import { CompetitionSlide } from './components/CompetitionSlide';
import { GoToMarketSlide } from './components/GoToMarketSlide';
import { TeamSlide } from './components/TeamSlide';
import { FinancialsSlide } from './components/FinancialsSlide';
import { InvestmentSlide } from './components/InvestmentSlide';
import { VisionSlide } from './components/VisionSlide';
// import './index.css'; // Já importado em main.tsx

const App = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 14; // Total de slides conforme os componentes copiados

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const previousSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  // Navegação com teclado
  const handleKeyPress = (event: KeyboardEvent) => {
    if (event.key === 'ArrowRight' || event.key === 'Space') {
      nextSlide();
    } else if (event.key === 'ArrowLeft') {
      previousSlide();
    }
  };

  // Adiciona event listener para teclas
  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress);
    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, []); // Manter dependência vazia para rodar só na montagem/desmontagem

  // Configurar handlers para swipe
  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => nextSlide(),
    onSwipedRight: () => previousSlide(),
    preventScrollOnSwipe: true, // Evita scroll da página durante swipe
    trackMouse: true // Permite swipe com mouse também (opcional)
  });

  const renderCurrentSlide = () => {
    switch (currentSlide) {
      case 0:
        return <TitleSlide key="title" />;
      case 1:
        return <PurposeSlide key="purpose" />;
      case 2:
        return <ProblemSlide key="problem" />;
      case 3:
        return <SolutionSlide key="solution" />;
      case 4:
        return <WhyNowSlide key="whynow" />;
      case 5:
        return <ProductSlide key="product" />;
      case 6:
        return <RoadmapSlide key="roadmap" />;
      case 7:
        return <MarketSlide key="market" />;
      case 8:
        return <CompetitionSlide key="competition" />;
      case 9:
        return <GoToMarketSlide key="gotomarket" />;
      case 10:
        return <TeamSlide key="team" />;
      case 11:
        return <FinancialsSlide key="financials" />;
      case 12:
        return <InvestmentSlide key="investment" />;
      case 13:
        return <VisionSlide key="vision" />;
      default:
        return null; // Caso algo dê errado
    }
  };

  return (
    // Aplicar os handlers de swipe à div principal
    <div {...swipeHandlers} className="relative w-full h-screen overflow-hidden">
      <AnimatePresence mode="wait">
        {renderCurrentSlide()}
      </AnimatePresence>
    </div>
  );
};

export default App;
