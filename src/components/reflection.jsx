import React, {useState} from 'react';
import Reflect_img from '../assets/reflect.png';

const Reflect = () => {
  const [hidden, setHidden] = useState(true);
  return (
    <div name='reflect' className='w-full bg-white py-16 px-4'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
        <img className='w-[430px] h-[270px] mx-auto my-4 rounded-lg' src={Reflect_img} alt='/' />
        <div className='flex flex-col justify-center'>
          <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Group Reflection</h1>
          <p>
          Towards the end of the assignment period, we reflected as a group on how well we think we have performed in this assignment.
          </p>
          <button onClick={() => setHidden(s => !s)} className='bg-black text-[#17fff3] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3'>View Details</button>
        </div>
      </div>
      <div>
      {!hidden ? 
            <div className='block w-full bg-white px-8 pt-4'>
                <h1 className='text-black font-bold text-2xl text-center pt-8'>THANG'S REFLECTION</h1>
                <h3 className='text-black w-fit py-10'>I’m in charge of the technical part of this project, especially the website and algorithms. At first, I thought it was nothing much to do. However, some first failures led me into big trouble. To be more specific, I researched many machine learning algorithms. It aims to find the same characteristics and features between users and their audiences; I thought it was some simple processes and math. 
Nevertheless, I was shocked by the massive amount of math and ways to train a model into reality. Therefore, our prototype needs this function and is in development. And after that, I was in charge of the website interface, supporting my teammates, and tracking some processes to write my team’s report. And that was doing quite well. I worked with my teammates and followed their approach; therefore, I knew their problems and how to suggest solutions. Finally, the project was done approximately as I expected. After doing this project, I learned more about making a product as realistic as possible, and I look forward to future projects and my career.
</h3>
            
                <h1 className='text-black font-bold text-2xl text-center pt-8'>CHI'S REFLECTION</h1>
                <h3 className='text-black w-fit py-10'>Through this long-term project, from the proposal to the assignment's final stage, I gained more knowledge of web programming languages and supportive frameworks such as Reactjs, Nodejs, and Tailwind CSS. The chosen topic was a dating service, which brought me many exciting insights. After focusing on the service's young users, UI/UX designer team initially identified the site's design as youthful, with bright colors of passionate love, and, most importantly, user-friendly. I am pleased with the outcome of both a simple yet appealing dating web prototype and the successfully launched report web.
If this project had no deadline, we would want to modify flaws to improve the user experience. For example, the dating web prototype should be responsive on different-sized devices, and the report web should contain multiple web pages linked to the homepage when clicking a button.
</h3>

                <h1 className='text-black font-bold text-2xl text-center pt-8'>TUNG'S REFLECTION</h1>
                <h3 className='text-black w-fit py-10'>In this project, my role was Lead UI developer. It was a fortune for me to do the work I am interested in. Although we finished our task in time, we needed more communication. For the front-end development side, many improvements should be made in the future. First, the content display still needs to be well organized compared to other websites in the market. Secondly, our web did not include responsive elements for zooming interaction or display on various devices.
During the work progress, honestly, I was impressed by my teammates, especially my leader Son. He originally was more into the back end and made the idea of a dating service and designed a web structure. At first, I thought he could have been better at leading; but what has been happening was terrific. He helped others prepare the work and taught them how to talk and interact with listeners during the presentation. 
This project taught me a lot about programming, designing, and presenting ideas. However, working as a team is what I have learned the most. Communication is essential to show other ideas and support each other when a problem arises. Despite being an introvert, it is still my responsibility to help others and show my work to keep track of the project. 
</h3>

                <h1 className='text-black font-bold text-2xl text-center pt-8'>SON'S REFLECTION</h1>
                <h3 className='text-black w-fit py-10'>Being the project manager, I learned many new lessons while doing this project. I was pleased with the outcomes of the assignments. Each member did their part well and on time. Members came to ask for help as soon as they encountered any issues, which made troubleshooting them quite a breeze. In retrospect, our team could have improved on the communications front, as during the Christmas break, some members needed to alert the group about their holiday plans. 
Something I would change in the future is not getting to know my teammates well before working together. I had difficulty assigning tasks and roles to suitable people and had to take a few weeks to get acquainted with other members to reassign duties appropriately. What I found surprising about this project was the sheer complexity that other dating services had. I did not realize that behind even simple dating services was a collection of sophisticated systems working in unison to reach the result of matching two lovers. I gained a newfound respect for Dating services. One thing I learned about group work is the importance of good task management. Some members naturally perform better than others, and assigning the correct number of tasks to those members is critical to achieving good results while doing projects like these.
</h3>

                <h1 className='text-black font-bold text-2xl text-center pt-8'>GROUP REFLECTION</h1>
                <h3 className='text-black w-fit py-10'>As a whole, our group worked well together during this semester. We had a great time working with each other.  The group was harmonious, and no members did any misconduct. The team was very supportive of each other throughout the semester, helping each other with assignments and questions regarding the lectures. At first, we decided not to allocate a leader and to share responsibilities equally; we realized that it was more beneficial to have a project manager to assign tasks, schedule meetings, and announce updates. After Son became the project manager, the group work dynamic changed immensely. We had structured meetings and a timeline to help guide us with work. The outcomes of this project far exceeded our expectations. We were able to produce both a prototype website and multiple designs for the UI while simultaneously having a group website with an attractive design. Members did their proficiently and due diligently, and no one complained about their workload.
Something that could need some improvements was the planning of the project and the communications between team members. Our original project proposal needed to be simpler for us to follow, which meant we had to cut many features we wanted our prototype to have. Additionally, we needed help planning out time to do our work as many members had other responsibilities, such as student societies, volunteering, and part-time jobs. Communication between members could have improved, as some members are very introverted and dislike communicating with others. For future projects, we will better communicate with members, especially for important information like going on holiday, etc. 
We all agree that the one thing we were surprised about was how different working in a team can be compared to working individually. The amount of work we could accomplish in the little amount of time we had was astonishing. We did not account for the amount of communication needed to succeed in a project similar to this scope.
Our group learned many new skills and lessons this semester, but the most important lesson we learned was how to communicate effectively. Through multiple meetings, we learned how to communicate ideas and solutions effortlessly, grow out of our comfort zone, and do tasks that are important to the group. All members learned how to communicate their thoughts directly to each other and to speak their minds when they sense something is not correct. Overall, this semester has been a genuinely profound learning experience.
</h3>

            </div>
        : null}
    </div>
    </div>
  );
};

export default Reflect;