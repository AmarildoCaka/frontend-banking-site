import FeatureCard from '../FeatureCardsGroup/FeatureCard';

import { FaShieldAlt, FaMobileAlt, FaPiggyBank, FaUserTie } from "react-icons/fa";

const FeatureCardComp = () => {

  return (
  
    <>
    
      <section className="more-options text-center bg-gradient-to-br from-blue-100 to-indigo-200 dark:from-blue-900/30 dark:to-indigo-900/30 p-2">

        <h1 className="more-options-text font-extrabold text-3xl text-center mt-10">More Options</h1>

        <p className="more-options-text text-black font-semibold text-lg text-center mt-5">See plenty of options, all at your service designed to make your life easier</p>

        <div className="py-16 px-6 grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">

          <FeatureCard title="Secure Transactions" description="End-to-end encryption ensures safe transactions every time." icon={<FaShieldAlt/>}/>

          <FeatureCard title="Manage Finances" description="Easily make transfers, and stay on top of your financial goals." icon={<FaMobileAlt/>}/>

          <FeatureCard title="High-Yield Savings" description="Grow your money faster with competitive interest rates." icon={<FaPiggyBank/>}/>

          <FeatureCard title="Business Solutions" description="Smart financial solutions tailored for businesses." icon={<FaUserTie/>}/>

        </div>

      </section>
    
    </>
    
  )

}

export default FeatureCardComp;