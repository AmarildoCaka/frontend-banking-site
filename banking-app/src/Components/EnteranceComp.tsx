import StartComp from "./EntreanceComps/SideGraphGroup/StartComp";
import CarouselGeneralComp from "./EntreanceComps/CarouselGeneralComp";
import FeatureCardComp from "./EntreanceComps/FeatureCardComp";
import CardLinkComp from "./EntreanceComps/CardLinkComp";
import BalancesComp from "./EntreanceComps/BalancesComp";
import TransactionComp from "./EntreanceComps/TransactionComp";
import LoanPlanComp from "./EntreanceComps/LoanPlanComp";
import VideoComp from './GeneralComps/VideoGroup/VideoComp';

const BankingLandingPage = () => {

  return (
  
    <>
    
      <section className="bg-white text-slate-900 min-h-screen">
    
        <StartComp/>

        <CarouselGeneralComp/>

        <FeatureCardComp/>

        <VideoComp/>

        <CardLinkComp/>

        <BalancesComp/>

        <TransactionComp/>

        <LoanPlanComp/>
    
      </section>

    </>
  
  );

};

export default BankingLandingPage;