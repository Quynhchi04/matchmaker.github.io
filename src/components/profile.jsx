import React, { useState } from 'react';
import Son from "../assets/son's profile photo.jpg"
import Chi from "../assets/chi's profile photo.jpg"
import Tung from "../assets/tung's profile photo.jpg"
import Thang from "../assets/thang's profile photo.jpg"

const Profile = () => {
    const [hidden, setHidden] = useState(true);

  return (
    <div name='profile' className='w-full pt-[10rem] pb-5 px-4 bg-white'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-4 gap-8'>
          <div className='w-full shadow-xl bg-gray-100 flex flex-col p-4 md:my-0 my-4 rounded-lg hover:scale-105 duration-300'>
              <img className='w-40 mx-auto mt-[-3rem] bg-transparent rounded' src={Son} alt="/" />
              <h2 className='text-3xl font-bold text-center py-8'>Son Tang</h2>
              <div className='text-center font-medium'>
                  <p className='py-2 border-b mx-8 '>s3978330</p>
                  <p className='py-2 border-b mx-8 '>Project Manager</p>
                  <p className='py-2 border-b mx-8 '>UI/UX designer</p>
                  <p className='py-2 border-b mx-8 '>Lead Technical Developer </p>
              </div>
          </div>
          <div className='w-full shadow-xl bg-gray-100 flex flex-col p-4 md:my-0 my-4 rounded-lg hover:scale-105 duration-300'>
              <img className='w-40 mx-auto mt-[-3rem] bg-transparent rounded' src={Chi} alt="/" />
              <h2 className='text-3xl font-bold text-center py-8'>Chi Bui</h2>
              <div className='text-center font-medium'>
                  <p className='py-2 border-b mx-8 '>s3978316</p>
                  <p className='py-2 border-b mx-8 '>Lead Web Developer</p>
                  <p className='py-2 border-b mx-8 '>UI/UX designer</p>
              </div>
          </div>
          <div className='w-full shadow-xl bg-gray-100 flex flex-col p-4 md:my-0 my-4 rounded-lg hover:scale-105 duration-300'>
              <img className='w-40 mx-auto mt-[-3rem] bg-transparent rounded' src={Tung} alt="/" />
              <h2 className='text-3xl font-bold text-center py-8'>Tung Le</h2>
              <div className='text-center font-medium'>
                  <p className='py-2 border-b mx-8 '>s3979121</p>
                  <p className='py-2 border-b mx-8 '>Web Developer</p>
                  <p className='py-2 border-b mx-8 '>Lead UI/UX designer</p>
              </div>
          </div>
          <div className='w-full shadow-xl bg-gray-100 flex flex-col p-4 md:my-0 my-4 rounded-lg hover:scale-105 duration-300'>
              <img className='w-40 mx-auto mt-[-3rem] bg-transparent rounded' src={Thang} alt="/" />
              <h2 className='text-3xl font-bold text-center py-8'>Thang Dang</h2>
              <div className='text-center font-medium'>
                  <p className='py-2 border-b mx-8 '>s3977877</p>
                  <p className='py-2 border-b mx-8 '>Technical Developer </p>
                  <p className='py-2 border-b mx-8 '>Web Developer</p>
              </div>
          </div>
      </div>
      <div className='py-6'>
      <button onClick={() => setHidden(s => !s)} className='flex justify-center bg-black text-[#17fff3] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>View All Profiles</button>x
      {!hidden ? 
            <div className='block w-full bg-[#000300] px-8 pt-4 rounded-lg'>
                <h1 className='text-[#17fff3] font-bold text-2xl text-center pt-8 uppercase'>Team Name: The Matchmakers</h1>
                <h1 className='text-[#17fff3] font-bold text-2xl text-center pt-8'>PERSONAL INFORMATION AND CAREER PLANS</h1>
                <h2 className='text-[#17fff3] font-bold text-l text-center pt-10'>Le Hoang Tung</h2>
                <h2 className='text-[#17fff3] font-bold text-l text-center pt-2 cursor-pointer'>s3979121@rmit.edu.vn</h2>
                <h3 className='text-white w-fit pt-8 pb-10'>Personal information:</h3>
                <h3 className='text-white w-fit'>My name is Le Hoang Tung, and I am a freshman at RMIT. I describe myself as an introvert who usually spends time alone to figure things out, like how to play different types of musical instruments. Although my hobbies sound unrelated to my career, being curious about learning new skills and being patient is helpful in my studying journey. Being in the IT field for the last four months, I have been introduced to some programming languages and ways to interact with the computer using the terminal, and also I was required to build a microbit product. Since knowing more about the industry, I realized that IT was more than just coding to make things work. There are endless potential applications like building security systems, data science & analytics, AI, etc. That is why my journey in the IT field has many things to explore and will be interesting.</h3>
                <h3 className='text-white w-fit py-10'>Career plans:</h3>
                <h3 className='text-white w-fit pb-10'>Honestly, I have not found the most suitable minor for myself, but I’m interested in being a front-end website developer after I graduate. This idea came from my experience while using LEGO's official website. Although LEGO is a famous company, the company website is not attractive to people except for the sales site. The page for the kids’ playground is not user-friendly, resulting in the failure of LEGO video games. To be a front-end developer, I must first master the three languages: HTML, CSS, and JavaScript. Fortunately, in this project, I have an excellent opportunity to use all of them to design and build an essential website. Getting familiar with Git, Bootstrap library, and solid geometry is also important. If I want to become the leader of a UI design team, it will require me to lead many minor projects or to start with smaller companies like start-ups. </h3>

                <h2 className='text-[#17fff3] font-bold text-l text-center pt-10'>Bui Hoang Quynh Chi</h2>
                <h2 className='text-[#17fff3] font-bold text-l text-center pt-2 cursor-pointer'>s3978316@rmit.edu.vn</h2>
                <h3 className='text-white w-fit pt-8 pb-10'>Personal information:</h3>
                <h3 className='text-white w-fit'>As a first-semester student studying for a Bachelor of Information Technology at RMIT, I mainly focus on projects when the end of the semester comes. However, photography is an enjoyable and rewarding hobby when I have free time. I love capturing special moments and telling stories through my images, which is a great way to explore and appreciate the beauty of the world around me. Even though I only had minimal prior knowledge of  IT, specifically web development, in this project, I believe that RMIT will provide me with the necessary expertise and skillsets for my future job. To further strengthen my ability, particularly in front-end development, I took a great deal of effort into adhering to the proposal's learning plan. In the future, I plan to work on more realistic projects that will allow me to gain more hands-on experience and dig deeper into different fields in IT.</h3>
                <h3 className='text-white w-fit py-10'>Career plans:</h3>
                <h3 className='text-white w-fit pb-10'>I am very excited to pursue a career as a web developer. I can create high-quality websites and web applications by leveraging my knowledge of programming languages, databases, and software development life cycles. I will have enough required skills and ambition to become a successful web developer when that time comes.  I have already taken steps toward my education by completing introductory coding courses, and I am looking forward to continuing my learning by specializing in web development. I am also eager to stay updated with the most recent technology and trends in the web development industry.</h3>

                <h2 className='text-[#17fff3] font-bold text-l text-center pt-10'>Dang Quoc Thang</h2>
                <h2 className='text-[#17fff3] font-bold text-l text-center pt-2 cursor-pointer'>s3977877@rmit.edu.vn</h2>
                <h3 className='text-white w-fit pt-8 pb-10'>Personal information:</h3>
                <h3 className='text-white w-fit'>As a new freshman in school, I have huge hopes and a love for humankind, so I always want to try my best to help others. So many little actions contribute to my hobby. I soon loved the IT world and have many things to do with it, such as when I have spare time, I will listen to technological speeches or read books about famous entrepreneurs. It helps me know how successful people reach that supremacy peak. To make this dream come true, I learned to program earlier in grade 12. Because I like Cloud Computing a lot, I also achieved a Google’s Cloud certificate, and during this time, I also tried and received another certificate in AI, and I hope to do further than that. Soon realizing that I cannot complete my dream of helping humanity through small things, I want to be the best of myself in technology so that one day, I can be like my hero, Elon Musk - a real iron man in real life. </h3>
                <h3 className='text-white w-fit py-10'>Career plans:</h3>
                <h3 className='text-white w-fit pb-10'>In the future, AI will contribute tremendously to humans to help them reduce the waste of time and be a friendly technology to us. So after researching many types of this technology, the more I learn, the more I love this thing. It’s such a beautiful technology that will aid humans a lot. Due to this, I will try to become a developer at the early age of my career path; then, I will want to work further in the AI field and conduct more research about it. Finally, I may have a start-up or try to apply this technology to different areas. And all of that is my path to being helpful to this community.
</h3>

                <h2 className='text-[#17fff3] font-bold text-l text-center pt-10'>Tang Trung Son</h2>
                <h2 className='text-[#17fff3] font-bold text-l text-center pt-2 cursor-pointer'>s3978330@emit.edu.vn</h2>
                <h3 className='text-white w-fit pt-8 pb-10'>Personal information:</h3>
                <h3 className='text-white w-fit'>My name is Tang Trung Son. I’m a first-year student studying IT at RMIT. I was born in Hanoi and lived in the city for most of my life. I consider myself someone who’s in the middle of being extroverted and introverted, as I can be either one at any given time. I get bored quickly, so I keep myself entertained with many hobbies such as playing video games, hanging out with friends, playing the guitar, cooking, etc. That’s why I think IT is the perfect major for me, as there are endless topics to learn and discover. The subject I’m interested in right now is Machine Learning and Artificial Intelligence, as I think they will spark the next technological revolution. Before studying this course, my only experience with the IT industry was a Data Science with Python course on edx. However, I aim to expand my horizons and study all there is to know in the IT industry.</h3>
                <h3 className='text-white w-fit py-10'>Career plans:</h3>
                <h3 className='text-white w-fit pb-10'>In the future, I want to work in a more people-related position rather than as a developer. So, my dream job is to be an Engineering Manager at Google’s Machine Learning department.  Since middle school, I’ve looked up to Google as an IT company. I find how they invest millions to fund innovative technology research that can change the world inspiring. I want to join them in their cause of changing the world one innovative solution at a time. </h3>

                <h1 className='text-[#17fff3] font-bold text-2xl text-center pt-10 uppercase'>Career plans comparison</h1>
                <h3 className='text-white w-fit pt-8 pb-10'>Even though all members are interested in positions in the IT sector, the careers of each member differ heavily. Tung and Chi prefer to be in the front end of a development team, while Thang and Son would like to be in the back end. Although Tung and Chi are considering careers in web development, Tung favors the job of a UI/UX designer, while Chi leans more toward being a web developer. Thang and Son are both interested in pursuing a career in the Machine Learning and Artificial Intelligence sector. However, Son prefers to work in a people-oriented position, while Thang wants to become a developer of A.Is. Son and Tung prefer to be in a managerial position rather than being a developer of a team. Thang is the only person on the team with dreams of opening his own startup company and becoming its CEO. In the end, the diversity of these aspirations benefitted the team, as we ended up with a well-rounded team. </h3>
                <h1 className='text-[#17fff3] font-bold text-2xl text-center pt-10 uppercase'>Career plans comparison</h1>
                <h3 className='text-white w-fit pt-8 pb-10'>In overview, our team had no difficulties working together during this semester. We encountered zero conflicts between team members and meetings; even though they were only sometimes attended on time, they never missed a member or two. Our group communicated regularly through text messaging through our group chat and privately. Communications lowered during the Christmas break as some members went on holiday with their families. Meetings were held periodically to help the team report on the status of their work as well as to get to know each other. In the end, our team has become a group of well-acquainted friends.</h3>
</div>
        : null}
        </div>
    </div>
  );
};

export default Profile;