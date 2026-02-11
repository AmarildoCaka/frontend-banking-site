import { Layers } from 'lucide-react';

const NoCardsComp = () => {

  return (

    <>
    
      <section className="w-full text-center p-1">

        <div className="text-center py-12">
          
          <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
          
            <Layers size={32} className="text-black"/>
          
          </div>
          
          <h3 className="text-xl font-semibold text-gray-600 mb-2">No cards yet</h3>
          
          <p className="text-gray-500">Create your first card to get started with the queue system.</p>
        
        </div>

      </section>
    
    </>

  );

}

export default NoCardsComp;