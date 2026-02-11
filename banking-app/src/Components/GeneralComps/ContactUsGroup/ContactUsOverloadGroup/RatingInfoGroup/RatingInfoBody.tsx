const RatingInfoBodyComp = () => {

  return (

    <>
    
      <section className="max-h-[70vh] overflow-y-auto pr-2 space-y-5 text-gray-700 dark:text-gray-300">

        <div>

          <h3 className="font-bold text-black dark:text-gray-100 mb-2">Rating Guidelines</h3>

          <ul className="space-y-3">

            <li className="flex items-start gap-3">
            
              <span className="w-2 h-2 mt-1 bg-blue-600 rounded-full flex-shrink-0"></span>

              <p>Select a rating from <strong>1 to 5 stars</strong> to share your experience.</p>
            
            </li>

            <li className="flex items-start gap-3">
            
              <span className="w-2 h-2 mt-1 bg-blue-600 rounded-full flex-shrink-0"></span>

              <p><strong>1 star</strong> means poor service, while{" "}<strong>5 stars</strong> means excellent.</p>
            
            </li>

            <li className="flex items-start gap-3">
            
              <span className="w-2 h-2 mt-1 bg-blue-600 rounded-full flex-shrink-0"></span>

              <p>You can <strong>update or change</strong> your rating at any time.</p>
            
            </li>

            <li className="flex items-start gap-3">
            
              <span className="w-2 h-2 mt-1 bg-blue-600 rounded-full flex-shrink-0"></span>

              <p>Your feedback helps us{" "} <strong>improve our banking services</strong>.</p>
            
            </li>
          
          </ul>
          
        </div>

        <hr className="border-gray-200 dark:border-gray-700"/>

        <div>

          <h3 className="font-bold text-black dark:text-gray-100 mb-2">Security & Privacy</h3>

          <ul className="space-y-3">
          
            <li className="flex items-start gap-3">
          
              <span className="w-2 h-2 mt-1 bg-blue-600 rounded-full flex-shrink-0"></span>

              <p>Only <strong>genuine customers</strong> can submit ratingsto ensure trustworthy feedback.</p>
          
            </li>

            <li className="flex items-start gap-3">
          
              <span className="w-2 h-2 mt-1 bg-blue-600 rounded-full flex-shrink-0"></span>

              <p>Your reviews are <strong>stored securely</strong> and never shared publicly without consent.</p>
          
            </li>

            <li className="flex items-start gap-3">
          
              <span className="w-2 h-2 mt-1 bg-blue-600 rounded-full flex-shrink-0"></span>

              <p>Each rating is <strong>timestamped</strong> to help us monitor improvement over time.</p>
          
            </li>

            <li className="flex items-start gap-3">
          
              <span className="w-2 h-2 mt-1 bg-blue-600 rounded-full flex-shrink-0"></span>

              <p>Comments are reviewed by our support team to address serious concerns.</p>
          
            </li>

          </ul>

        </div>

        <hr className="border-gray-200 dark:border-gray-700"/>

        <div>

          <h3 className="font-bold text-black dark:text-gray-100 mb-2">Usage & Analysis</h3>

          <ul className="space-y-3">

            <li className="flex items-start gap-3">
            
              <span className="w-2 h-2 mt-1 bg-blue-600 rounded-full flex-shrink-0"></span>

              <p>Ratings are analyzed to improve our services, including transaction speed, support, and usability.</p>
            
            </li>

            <li className="flex items-start gap-3">
            
              <span className="w-2 h-2 mt-1 bg-blue-600 rounded-full flex-shrink-0"></span>

              <p>Multiple submissions are allowed, but only your{" "}<strong>latest feedback</strong> is kept active.</p>
            
            </li>

            <li className="flex items-start gap-3">
            
              <span className="w-2 h-2 mt-1 bg-blue-600 rounded-full flex-shrink-0"></span>

              <p>You may be contacted if clarification is needed, but only with your permission.</p>
            
            </li>
          
          </ul>
        
        </div>

      </section>
    
    </>

  );

}

export default RatingInfoBodyComp;