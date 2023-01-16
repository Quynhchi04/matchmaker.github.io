import React, {useState} from 'react';
import { Link } from 'react-scroll';

const Ref = () => {
    const [hidden, setHidden] = useState(true);
  return (
    <div name='ref' className='max-w-[1240px] mx-auto pt-10 pb-16 px-4 gap-8 text-gray-300'>
      <div>
        <h1 className='w-full text-3xl font-bold text-[#17fff3] cursor-pointer'><Link to='home' smooth={true} duration={500}>THE MATCHMAKERS.</Link></h1>
        <p className='py-4'>Thank you for reading. This is the <span onClick={() => setHidden(s => !s)} className='text-[#17fff3] underline cursor-pointer'>Reference List.</span></p>
      </div>
      {!hidden ? 
        <div className='flex justify-left items-center'>
            <ul>
                <li className='font-medium text-gray-400'>Dating Services - Vietnam, , n.d.. [Online]. Available: https://www.statista.com/outlook/dmo/eservices/dating-services/vietnam</li>
                <li className='font-medium text-gray-400'>K. Scanlon. “Dating Data: An Overview of the Algorithm.” medium.com.
https://medium.com/swlh/dating-data-an-overview-of-the-algorithm-afb9f0c08e2c (accessed Nov. 11, 2022) </li>
                <li className='font-medium text-gray-400'>S. Mathis, “How do companies protect customer data? | TechTarget,” How do companies protect customer data? https://www.techtarget.com/searchcustomerexperience/answer/How-do-companies-protect-customer-data (accessed Jan. 15, 2023).</li>
                <li className='font-medium text-gray-400'>N. Keblawi. “An Engineer’s Guide to Dating App Development”. cometchat.com. https://www.cometchat.com/blog/building-your-own-dating-app (accessed Nov. 11, 2022)</li>
                <li className='font-medium text-gray-400'>G. Geissler, G. Zinkhan, and R. T. Watson, "Web home page complexity and communication effectiveness," Journal of the Association for Information Systems, vol. 2, no. 1, p. 2, 2001.</li>
                <li className='font-medium text-gray-400'>“What is Database Sharding? - Database Sharding Explained - AWS,” Amazon Web Services, Inc. https://aws.amazon.com/what-is/database-sharding/ (accessed Jan. 15, 2023).</li>
                <li className='font-medium text-gray-400'>M. Buckbee. “What is PGP Encryption and How Does It Work?”. varonis.com. https://www.varonis.com/blog/pgp-encryption (accessed Nov. 11, 2022)</li>
                <li className='font-medium text-gray-400'>“Benefits of blockchain - IBM Blockchain | IBM,” Benefits of blockchain - IBM Blockchain | IBM. https://www.ibm.com/topics/benefits-of-blockchain (accessed Jan. 13, 2023).</li>
                <li className='font-medium text-gray-400'>“Create with CSS | Google Developer Student Clubs,” Google Developer Student Clubs, Jan. 16, 2001. https://gdsc.community.dev/events/details/developer-student-clubs-sri-venkateshwara-college-of-engineering-bengaluru-presents-create-with-css/ (accessed Jan. 15, 2023).</li>
                <li className='font-medium text-gray-400'>Ilanco, “Using MySQL and Mongodb together,” Stack Overflow, May 20, 2012. https://stackoverflow.com/questions/10676397/using-mysql-and-mongodb-together (accessed Jan. 15, 2023).</li>
                <li className='font-medium text-gray-400'> A. Zola, “What is a Bootstrap and how does it work?,” WhatIs.com, Aug. 01, 2022. https://www.techtarget.com/whatis/definition/bootstrap (accessed Jan. 15, 2023).</li>
                <li className='font-medium text-gray-400'>“The WebSocket API (WebSockets) - Web APIs | MDN,” The WebSocket API (WebSockets) - Web APIs | MDN. https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API (accessed Jan. 15, 2023).</li>
                <li className='font-medium text-gray-400'>“Introduction to TensorFlow | Machine Learning | Google Developers,” Google Developers. https://developers.google.com/machine-learning/crash-course/first-steps-with-tensorflow/toolkit (accessed Jan. 15, 2023).</li>
                <li className='font-medium text-gray-400'>T. McMullan, “Are the algorithms that power dating apps racially biased?,” WIRED UK, Feb. 17, 2019. https://www.wired.co.uk/article/racial-bias-dating-apps (accessed Jan. 15, 2023).
[17] A. Hayes, “The Human Attention Span [INFOGRAPHIC] | Wyzowl,” Wyzowl. https://www.wyzowl.com/human-attention-span/ (accessed Jan. 15, 2023).</li>
                <li className='font-medium text-gray-400'>J. A. Ribeiro Neto (Zezinho), “Tools for Data Analysis used in Data Science, ML and Big Data,” Medium, Sep. 23, 2021. https://medium.com/xnewdata/tools-for-data-analysis-used-in-data-science-ml-and-big-data-87e07e1ddb0 (accessed Jan. 15, 2023).</li>
                <li className='font-medium text-gray-400'>A. Difranza, “What Does A Business Analyst Do?,” Northeastern University Graduate Programs, Feb. 08, 2021. https://www.northeastern.edu/graduate/blog/what-does-a-business-analyst-do/ (accessed Jan. 15, 2023).</li>
            </ul>
        </div>
      : null}
    </div>
  );
};
export default Ref;