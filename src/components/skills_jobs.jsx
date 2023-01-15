import React, {useState} from 'react';
import Skills_Jobs from '../assets/skills.webp';

const Skills = () => {
  const [hidden, setHidden] = useState(true);
  return (
    <div name='skills'className='w-full bg-[#17fff3] py-16 px-4'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
        <img className='w-[430px] h-[270px] mx-auto my-4 rounded-xl' src={Skills_Jobs} alt='/' />
        <div className='flex flex-col justify-center'>
          <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Skills and Jobs</h1>
          <p>
          A group of venture capitalists hears about our project, and is so impressed that they wish to fund you to develop it further for say six months. We will be the manager of a team of 4-5 people to deliver the project outcomes. What position descriptions would be appropriate?
          </p>
          <button onClick={() => setHidden(s => !s)} className='bg-black text-white w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3'>View Details</button>
        </div>
      </div>
      {!hidden ? 
            <div className='block w-full bg-[#17fff3] px-8 pt-4'>
                <div className="w-full flex justify-center items-center pt-8">
      <table className='w-full'>
        <tr>
          <th className='text-center p-4'>Job</th>
          <th className='text-center p-4'>Description</th>
        </tr>
        <tr>
          <td className='text-center p-4'>Full-Stack Developer</td>
          <td className='p-4'>BEAT needs a full-stack developer who is an expert in both front-end and back-end systems to build our web app. They will handle the construction of our web application and the database operations to support our service.  This will require extensive knowledge of programming languages such as HTML, CSS, JavaScript, PHP, Python, and many frameworks such as React, MongoDB, MySQL, and minor experience in Cloud Computing[cometchat]. Because of our operation's small scale, this position also requires experience in UI/UX design to build the web app from scratch. Additionally, teamwork experience is needed as interactions are often expected with other members.</td>
        </tr>
        <tr>
          <td className='text-center p-4'>Mobile Developer</td>
          <td className='p-4'>Building a mobile version of our service is essential for the convenience we envision for our product. As such, hiring a mobile developer is crucial for the success of this service. This job will involve the development of application programming interfaces to support functionality on mobile devices as well as constructing and upkeeping applications for both IOS and Android. The technology stack needed for this position will be Kotlin, Swift, Java, JavaScript, Ionic, React Native, PhoneGap, etc. [cometchat]. Prior experience with UI/UX design for mobile applications and teamwork is also necessary.</td>
        </tr>
        <tr>
          <td className='text-center p-4'>Lead Software Engineer / Machine Learning Engineer</td>
          <td className='p-4'>The backbone of this service will be based on our matchmaking service, thus, having a reliable, robust, and responsive matchmaking algorithm is vital for BEAT. This position involves constructing our matchmaking algorithm from scratch and enhancing it using data analysis and machine learning tools. Having 5+ years of experience with Machine Learning and being well accustomed to Python, R, Splunk, SAS, Tensorflow, and AmazonML[medium] is a must. Being lead software engineer, in addition to having innovative thinking, it is also highly crucial for them to have excellent leadership skills and past managerial experience.</td>
        </tr>
        <tr>
          <td  className='text-center p-4'>Full – Stack QA engineer</td>
          <td className='p-4'>To offload the number of tasks to other members and ensure the quality of the work output, BEAT will need a Full - Stack QA engineer in our team. The QA (Quality Assurance) Engineer will be responsible for performing assessments, testing the programs, finding errors and bugs in programs written by other team members, collaborating with them to fix those bugs, and improving the quality of the service in general. They must be well-versed in many programming languages like Java, JavaScript, Swift, Kotlin, Python, etc. It is imperative to have much experience working in teams and excellent communication skills, as this role will have to interact with other team members frequently.</td>
        </tr>
        <tr>
          <td className='text-center p-4'>Business Analyst</td>
          <td className='p-4'>As investors will fund Beat, a business analyst is essential for the development process. They will oversee communicating with investors, improving the efficiency of business operations, and evaluating programs and technical processes [https://www.northeastern.edu/graduate/blog/what-does-a-business-analyst-do/]. This role requires past data analysis experience, research skills, excellent communication skills, and work experience in the IT industry. Consultations will frequently occur to assess the current market and BEAT’s prospects.</td>
        </tr>
      </table>
    </div>
            </div>
        : null}
    </div>
  );
};

export default Skills;