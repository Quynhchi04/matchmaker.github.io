import React, {useState} from 'react';
import About_Prj from '../assets/about.jpeg';

const About = () => {
  const [hidden, setHidden] = useState(true);
  return (
    <div name='about' className='w-full bg-white py-16 px-4'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
        <img className='w-[430px] h-[270px] mx-auto my-4 rounded-xl' src={About_Prj} alt='/' />
        <div className='flex flex-col justify-center'>
          <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>About Project</h1>
          <p>
            This is the detailed description for our group project
          </p>
          <button onClick={() => setHidden(s => !s)} className='bg-black text-[#17fff3] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3'>View Details</button>
        </div>
      </div>
      {!hidden ? 
            <div className='block w-full bg-white px-8 pt-4'>
                <h1 className='text-black font-bold text-2xl text-center pt-8'>OVERVIEW</h1>
                <h2 className='text-black font-bold text-xl pt-8'>Topic</h2>
                <h3 className='text-black w-fit py-10 '>During the project proposal, we collectively decided to work on a Dating service for RMIT students as our IT project for this semester. This service was actualized as a website where users can log in with their accounts and start their journey of finding their other half. However, later, we decided to expand beyond RMIT students and expand the reach of our product to not only students from other universities and colleges but also a broader age range. Nonetheless, this product’s primary target audience is still focused on young adults. 
To consolidate this shift, we decided to alter our existing product name from “Dating for RMIT” to “BEAT.” The systems for this project are designed for the user’s convenience. As such, this service is no longer only in website form but also a mobile app that users can access at any time and place. Our main objective is to get people out to the dating market and let them get to know new people as soon as possible without the hassle that more conventional dating services offer. Using our no-nonsense preference feature and a free monetary system, anyone can expect to get started just a few minutes after making an account. Combined with a user-friendly UI, a wide array of communication methods, and an intuitive matchmaking algorithm enhanced via Machine Learning, love has never been more effortless.
</h3>
                <h2 className='text-black font-bold text-xl'>Motivation</h2>
                <h3 className='text-black w-fit py-10 '>The primary reason we, the Matchmakers, chose this as our project to work on for this semester is how this project has everything that piques the interest of each member. From Machine Learning to Web Development, these topics gave us the enthusiasm to research and delve deep into these sides of the IT industry without burning out. Furthermore, we were all interested in creating a product that would improve the lives of others, and as a result, choosing a project that could help people find their soulmates only seemed natural. 
Through our personal experience and research on current trends in the IT industry, we concluded that dating services are on the rise in Vietnam and that many of Vietnam’s young demographic find it challenging to meet people who share the same hobbies and interests and navigate the dating landscape, especially in this digital age. We were motivated to ease people through this rather tricky progress and guide them toward the path of finding their future loved ones. Working on this project will allow us to demonstrate our programming abilities with various languages and frameworks and our entrepreneurship capabilities to prospective employers.
</h3>
                <h2 className='text-black font-bold text-xl'>Landscape</h2>
                <h3 className='text-black w-fit py-10 '>Numerous companies present in Vietnam supply similar services to our product. Currently, our top 4 competitors in Vietnam include Tinder, Badoo, EZmatch, and Bumble, with Tinder taking the top spot, controlling over 60% of the dating service market [Statista]. However, most of these services only provide a temporary pass for users to take advantage of their services, such as Tinder with its subscriptions and Bumble with their Bumble coins; they force users to pay money to use their services comfortably. Furthermore, these services have gamified their user experience, causing the loss of human connection between users. As mentioned before, our product is more focused on enhancing the user experience rather than the monetary gain of the service. Thus, we aim to provide this service to anyone with an Internet connection, regardless of their financial situation. Moreover, our streamlined preferences setup feature makes it so users can use our services with a couple of clicks and taps without all the hassle present in other dating services.
</h3>

                <h1 className='text-black font-bold text-2xl text-center pt-10'>AIMS</h1>
                <h2 className='text-black font-bold text-xl pt-8'>Aim</h2>
                <h3 className='text-black w-fit py-10'>What our group looks to accomplish through this project is the establishment of a fully-fledged dating service equipped with all the bells and whistles present in other dating services available while at the same time streamlining the user experience to potential users. This serviced service is designed with scalability in mind and can be endlessly improved overtime. As mentioned before, the outcome of this project will be a website and mobile application where users will be matched and interact with each other virtually. This service will be comprised of multiple complex technology stacks and will require a vast amount of time and funding. As stated earlier, completing this project will not only aid members of our group in developing our skills and furthering our careers but also benefit the new generations of young adults in navigating the brutal modern dating scene.</h3>
                <h3 className='text-black w-fit pb-10'>Numerous companies present in Vietnam supply similar services to our product. Currently, our top 4 competitors in Vietnam include Tinder, Badoo, EZmatch, and Bumble, with Tinder taking the top spot, controlling over 60% of the dating service market [Statista]. However, most of these services only provide a temporary pass for users to take advantage of their services, such as Tinder with its subscriptions and Bumble with their Bumble coins; they force users to pay money to use their services comfortably. Furthermore, these services have gamified their user experience, causing the loss of human connection between users. As mentioned before, our product is more focused on enhancing the user experience rather than the monetary gain of the service. Thus, we aim to provide this service to anyone with an Internet connection, regardless of their financial situation. Moreover, our streamlined preferences setup feature makes it so users can use our services with a couple of clicks and taps without all the hassle present in other dating services.</h3>
                <h2 className='text-black font-bold text-xl'>Goals</h2>
                <h3 className='text-black pt-10 pb-3'>1. High priority</h3>
                <div className='text-black w-fit' >
                  <h3 className='pb-2'>1.1. Working website and/or mobile app</h3>
                  <h3 className='text-black w-fit pb-10'>This website will be developed with various programming languages such as HTML, CSS and JavaScript, and frameworks such as React, Django, etc. The website will include a login page, the main UI, a navigation system, profile settings, user history, etc. These pages and features will be implemented similarly to a mobile app programmed in Kotlin for Android and Swift for IOS products. Since this is the primary way for users to access our service, this project must feature a functional website and/or mobile app that is ready for commercial use for this project to achieve success.
</h3>
                </div>
                <div className='text-black w-fit' >
                  <h3 className='pb-2'>1.2. Effective Matchmaking</h3>
                  <h3 className='text-black w-fit pb-10'>Users would only use a matchmaking service that could create matches effectively, and the same applies to our service. The matchmaking algorithm must be highly optimized and thoroughly assessed before being put to live use for the service. This system will consist of multiple well-researched algorithms for matchmaking purposes, such as the Gale-Shapley algorithm [3, P] and our proprietary algorithm based on the 20 questions game. Without a genuinely effective matchmaking system, our service will not attain the trust of potential users and, in turn, will cause the failure of the entire service due to a lack of users.
</h3>
                </div>
                <div className='text-black w-fit' >
                  <h3 className='pb-2'>1.3. Advanced Security and Privacy</h3>
                  <h3 className='text-black w-fit pb-10'>With any popular service that manages user data, the protection and security of this data heavily lie on our shoulders, especially for a service such as ours, which works with extremely sensitive data from our users. The security for our service will consist of a host of layers of protection from cyber-attacks and data leaks, including encryption, Two-factor authentication (2FA), Integrated Malware Protection, and Blockchain Technology [https://www.techtarget.com/searchcustomerexperience/answer/How-do-companies-protect-customer-data], to ensure that our users feel comfortable with our service handling their personal information. We believe that seriously developing these security measures is essential for our service, not only for morals and ethics but also for the susceptibility to lawsuits, fines, and distrust from the user base that will arise if these measures are not met.
</h3>
                <h3 className='text-black pb-3'>2. Medium priority</h3>
                </div>
                <div className='text-black w-fit' >
                  <h3 className='pb-2'>2.1. Communications</h3>
                  <h3 className='text-black w-fit pb-10'>It is vital for users to have the ability to contact their matches through our platform instead of getting them through other means. The communications systems we envision for this service are a chatting feature and a voice/video call feature similar to popular texting services (Messenger, WhatsApp, etc.), where users can send texts/pictures/videos to each other and stream their calls live on the Internet. This feature is prevalent in many dating services, and we agree that its inclusion will increase the convenience factor of our service.
</h3>
                </div>
                <div className='text-black w-fit' >
                  <h3 className='pb-2'>2.2. Database & Accounts system</h3>
                  <h3 className='text-black w-fit pb-10'>Like other dating services, the ability to store users’ data for repeated use will prove helpful when users continue to use our service in the long run. This service will be built from the ground up using PostgreSQL, MongoDB, and MySQL [cometchat]. It will be utilized to store users’ data and settings, preferences, the service’s analytical data, etc. Expecting users to enter their preferences and data each time they want to access our service is nonsensical as it turns using the service from a pleasant experience into a chore.
</h3>
                </div>
                <div className='text-black w-fit' >
                  <h3 className='pb-2'>2.3. Machine Learning</h3>
                  <h3 className='text-black w-fit pb-10'>As Machine Learning and Artificial Intelligence become more prevalent in the IT industry, they become more critical in any IT-related service. We agree entirely that implementing this booming side of the industry is necessary for the success of our dating service. The usage for Machine Learning is almost limitless in services such as ours. We intend to use it to analyze the users’ data and chat messages, enhance the matchmaking algorithm further, and create prompts for users to start chatting when they get stumped on how to start conversations. These features will improve our service and improve the user experience immensely.
</h3>
                </div>
                <div>
                <h3 className='text-black pb-3'>3. Low priority</h3>
                </div>
                <div className='text-black w-fit' >
                  <h3 className='pb-2'>3.1. Monetary system</h3>
                  <h3 className='text-black w-fit pb-10'>Even though BEAT may not be designed for monetary gain, money is still needed to fund the development and upkeep of the BEAT’s services, servers, databases, etc. To refrain from interfering with the users when using our service, the primary means we will gain funds with the service is through visual advertisement banners that occasionally appear on our website and mobile app. We will additionally provide an optional membership that will remove those advertisements for users who find them too distracting or want to support our service.
</h3>
                </div>
                <div className='text-black w-fit' >
                  <h3 className='pb-2'>3.2. Miscellaneous Features</h3>
                  <h3 className='text-black w-fit pb-10'>Every IT service requires a collection of features that enhances the user experience and creates a satisfying experience to attract new users and attain existing ones. We are no outlier to this fact as our service will incorporate a host of features that will match our goals for the ideal user experience. These features include but are not limited to Geolocation, Reporting, Advanced search, etc. Features such as these will be the finishing touches to our service and contribute to the convenience we imagine users of BEAT will have the opportunity to experience. 
</h3>
                </div>
              
                <h1 className='text-black font-bold text-2xl text-center pt-10'>PLANS AND PROGRESS</h1>
                <h2 className='text-black font-bold text-xl pt-8'>Progress</h2>
                <h3 className='text-black pt-10 pb-3'>Foundation</h3>
                <h3 className='text-black w-fit pb-2 '>Our project initially did not start out as a dating service but something completely different. Thang originally proposed we do the project about an A.I powered virtual assistant capable of controlling appliances in the household. However, after some negotiations, members decided that the task was either too complex or too dull. That was when Son came up with the idea of a dating service catered to RMIT students. Doing this project would satisfy Thang’s curiosity for Machine Learning, develop Chi’s skill as a web developer, Tung’s aptitude for UI design, and Son’s interest in IT solutions for real-world applications.</h3>
                <h3 className='text-black w-fit pb-10 '>After deciding on the topic for our project, we got to work. The first thing to do was divide responsibilities between team members. Son was chosen as the project manager as he had experience working in professional teams before and being the mastermind behind the project’s topic. Thang volunteered to be our technical developer as he was interested in studying more about Machine Learning and Artificial Intelligence. Chi had some prior experience with HTML and CSS, so she was the perfect pick for our Lead Web Developer position. Tung was incredibly talented at designing with Canva, so he was given the role of Lead UI/UX designer. </h3>
                <h3 className='text-black pt-10 pb-3'>Journey</h3>
                <h3 className='text-black w-fit pb-2 '>During weeks 3 to 5, the plans we gave during the project proposal were carried out without any trouble. All members were able to follow the timetable precisely, and we finished our project proposal right on schedule. Moving on to week 6, when our team started working on the project, we immediately realized the great difficulty of the concepts we were researching. Since many of us did not have any prior experience in the IT sector, understanding these concepts and knowledge was a huge challenge to overcome. We realized we needed to account for the amount of time it would take to study for other courses and to join extra-curricular activities such as clubs and volunteering. Each member, except for Thang, had weekly club-related responsibilities that they had to attend to. The time that we could work on this project was limited, so we decided to rethink how we would go about doing this project.</h3>
                <h3 className='text-black w-fit pb-10 '>We first decided to scale back on some of the features our prototype website would have, like notifications and message databases. Our prototype will be a bare-bones version of what we envision our project would look like and what users will experience while using it. Secondly, we decided that creating a functional matchmaking algorithm was unrealistic as we needed more programming knowledge, so we only focused on the design of the algorithm instead. When we were discussing during a meeting about what is a good way of getting to know someone, Tung said that he used to play a game called 20 questions with his friends when he was little, which inspired us to design our matchmaking algorithm around 20 yes or no questions that users answer during the account setup process. During this time, we acknowledged that our product should not only be limited to RMIT students, so we decided to change our product name from Dating for RMIT to BEAT, a digital matchmaking service that is focused on young adults. While Chi and Tung were building the prototype website, our team realized that if we wanted to finish it before this assignment’s due date, we would need more workforce, so Thang had to step up and aid in writing some of the HTML files. At the same time, Son supported them with materials on helpful libraries and tools to ease the process.</h3>
                <h3 className='text-black pt-10 pb-3'>Result</h3>
                <h3 className='text-black w-fit pb-10 '>Our team settled on creating our UI designs on Canva to showcase our ideas and coding web pages from scratch for our prototype product. The designs that will be shown later in the outcome section are our vision for what the website’s UI will be like once it’s completed, and the prototype is the product we created during this semester. Even though extensive changes were made to our initial plans, we would still consider these outcomes a success as we have learned much about group work, researching, programming, and how to adapt to shifting circumstances.</h3>
                <h2 className='text-black font-bold text-xl'>Plans</h2>
                <h3 className='text-black w-fit pt-8 '>Our plans for developing this project will include three main stages</h3>
                <ul className='list-disc pl-4'>
                  <li>Stage 1: Preparation</li>
                  <li>Stage 2: Development</li>
                  <li>Stage 3: Finishing Touches (the time for this stage will be more loosely defined)</li>
                </ul>
                <div className="w-full flex justify-center items-center py-10">
                <table className='w-full'>
                  <tr>
                    <th className='text-center p-4'>Time & People</th>
                    <th className='text-center p-4'>Le Hoang Tung</th>
                    <th className='text-center p-4'>Bui Hoang Quynh Chi</th>
                    <th className='text-center p-4'>Dang Quoc Thang</th>
                    <th className='text-center p-4'>Tang Trung Son</th>
                    </tr>
                    <tr>
                      <td colspan='5' className='text-center p-4'>Stage 1 commences!</td>
                    </tr>
                    <tr> 
                      <td className='text-center p-4'>Week 1</td>
                      <td colspan='4' className='text-center p-4'>Layout project plans and assign tasks to each team member. 
Discuss options available for this project
</td>
                    </tr>
                    <tr> 
                      <td className='text-center p-4'>Week 2-4</td>
                      <td className='text-center p-4'>Study HTML, CSS, JavaScript, and popular libraries used for making websites</td>
                      <td className='text-center p-4'>Study HTML, CSS, JavaScript, PHP, and libraries to program web responsive elements and animations </td>
                      <td className='text-center p-4'>Start enrolling in CS50 and CS50P (online computer science course) to learn in-depth programming</td>
                      <td className='text-center p-4'>Research algorithms with Python and enroll in an online Machine Learning course</td>
                      </tr>
                      <tr> 
                      <td className='text-center p-4'>Week 4-12</td>
                      <td className='text-center p-4'>Continuing to study web programming languages and learn how to use web development frameworks</td>
                      <td className='text-center p-4'>Continue studying web programming languages, and start studying database schemas and web development APIs </td>
                      <td className='text-center p-4'>Continue studying Python in CS50P and Computer Science with CS50 (50% done)</td>
                      <td className='text-center p-4'>Program various projects to refine coding skills, continue to study the Machine Learning course.
Start looking into security measures with PGP and TLS protocol
</td>
                      </tr>
                      <tr> 
                      <td className='text-center p-4'>Week 12-20</td>
                      <td className='text-center p-4'>Continue studying web programming language and frameworks, and program personal project.
Redo prototype website with Chi to hone skills
</td>
                      <td className='text-center p-4'>Continue studying web programming languages and start learning MySQL.
Redo prototype website with Tung to hone skills
 </td>
                      <td className='text-center p-4'>Continue studying CS50 and CS50P and start doing the final projects for both courses (75% done)</td>
                      <td className='text-center p-4'>Continue studying Python algorithmic design and security measures, and program larger-scale products to train.
Start studying database schemas and MongoDB
</td>
                      </tr>
                      <tr> 
                      <td className='text-center p-4'>Week 20-24</td>
                      <td className='text-center p-4'>Finish up studying web programming languages and frameworks, and research web APIs with Chi.
Finish the redone prototype website
</td>
                      <td className='text-center p-4'>Finish up studying web programming languages, web APIs, and MySQL, and look into web development frameworks with Tung.
Finish the redone prototype website
</td>
                      <td className='text-center p-4'>Finish studying CS50 and CS50P and study a crash course on Machine Learning and Artificial Intelligence</td>
                      <td className='text-center p-4'>Finish learning algorithms design with Python and study popular Machine Learning models, program a project related to Machine Learning to test out skills</td>
                      </tr>
                      <tr>
                      <td colspan='5' className='text-center p-8'>Preparations for skills and tools to develop the project is finished</td>
                    </tr>
                    <tr>
                      <td colspan='5' className='text-center p-4'>Stage 2 commences!</td>
                    </tr>
                    <tr> 
                      <td className='text-center p-4'>Week 1</td>
                      <td className='text-center p-4'>Start developing the website and redesigning the UI
</td>
                      <td className='text-center p-4'>Start creating the website and building the database system
</td>
                      <td className='text-center p-4'>Start working on working on the matchmaking algorithm</td>
                      <td className='text-center p-4'>Start programming the matchmaking algorithm and building the database system</td>
                      </tr>
                      <tr> 
                      <td className='text-center p-4'>Week 2-4</td>
                      <td className='text-center p-4'>Finish UI redesign and write HTML and CSS files for the website’s main UI, log-in, and questions pages
</td>
                      <td className='text-center p-4'>Write JavaScript files to enable animations and web-responsive elements for the website. 
Work on the skeleton of the database system with Son

</td>
                      <td className='text-center p-4'>Program a basic version of the matchmaking algorithm with Son.
Help Chi and Tung with web development
</td>
                      <td className='text-center p-4'>Program a basic version of the matchmaking algorithm with Thang.
Work on the database skeleton with Chi
</td>
                      </tr>
                      <tr> 
                      <td className='text-center p-4'>Week 4-10 </td>
                      <td className='text-center p-4'>Work with Chi to add buttons, the navigation system, and the login forms
</td>
                      <td className='text-center p-4'>Work with Tung to add web responsive elements and animations to the website.
Create a simple database to store login information

</td>
                      <td className='text-center p-4'>Integrate Machine Learning models into the matchmaking algorithm with Son</td>
                      <td className='text-center p-4'>Refine the design of the matchmaking algorithm and integrate Machine Learning models with Thang</td>
                      </tr>
                      <tr>
                      <td colspan='5' className='text-center p-8'>A functional website and matchmaking algorithm are finished!</td>
                    </tr>
                      <tr> 
                      <td className='text-center p-4'>Week 10-12 </td>
                      <td className='text-center p-4'>Create an account system with Chi and develop text messaging functionality for the website
</td>
                      <td className='text-center p-4'>Aid Tung in developing an account system and text messaging feature for the website.
Build a database to support the account system with Son
</td>
                      <td className='text-center p-4'>Finish programming a functional matchmaking algorithm that can take users’ input and return results with Son</td>
                      <td className='text-center p-4'>Finish programming a functional matchmaking algorithm that can take users’ input and return results with Thang.
Support Chi with building a database for the account system
</td>
                      </tr>
                      <tr>
                      <td colspan='5' className='text-center p-8'>The website has interactable features, and the matchmaking feature's beta version is completed!</td>
                    </tr>
                    <tr>
                      <td colspan='5' className='text-center p-4'>The first phase of testing starts!
</td>
                    </tr>
                    <tr>
                      <td className='text-center p-4'>Week 12-14</td>
                      <td colspan='2' className='text-center p-4'>Run tests on the website and database to check for performance and latency.
Debug and fix errors in website files
</td>
                      <td colspan='2' className='text-center p-4'>Test out the matchmaking algorithm to check for bugs, errors, and exception cases.
Fix all available errors and bugs found
</td>
                    </tr>
                    <tr>
                      <td colspan='5' className='text-center p-8'>The second phase of testing starts!</td>
                    </tr>
                    <tr>
                    <td className='text-center p-4'>Week 14-16</td>
                      <td colspan='4' className='text-center p-8'>Multiple tests involving volunteering participants will be conducted.
Varying sets of participants will be asked to test out the beta version of our matchmaking algorithm.
Record and analyze the data from these tests.
</td>
                    </tr>
                    <tr>
                    <td className='text-center p-4'>Week 17</td>
                      <td colspan='4' className='text-center p-8'>Reflect on the results of the tests and discuss future project direction
</td>
                    </tr>
                    <tr> 
                      <td className='text-center p-4'>Week 18-24 </td>
                      <td className='text-center p-4'>Add file-sharing, picture-sharing, and video-sharing features to the website.
Work with Chi to implement voice calls and video streaming

</td>
                      <td className='text-center p-4'>Develop voice call and video streaming features for the website.
Work on the database system to store matchmaking data with Son

</td>
                      <td className='text-center p-4'>Work with Son to address all the issues with the matchmaking algorithm from the testing results.
Start developing the basics for a virtual assistant
</td>
                      <td className='text-center p-4'>Work with Thang to handle all the problems with the matchmaking algorithm from the testing results.
Develop the database system to store matchmaking data with Chi

</td>
                      </tr>
                      <tr> 
                      <td className='text-center p-4'>Week 24-30 </td>
                      <td className='text-center p-4'>Add a notifications system to the website and social integration information for logging in 
</td>
                      <td className='text-center p-4'>Add a Geolocation feature to the website.
Implement a feature that tracks user activities and stores data in the database

</td>
                      <td className='text-center p-4'>Continue working on the virtual assistant.
Develop an A.I with NLP to read text messages
</td>
                      <td className='text-center p-4'>Work with Chi to incorporate geo-matching into the matchmaking algorithm
</td>
                      </tr>
                      <tr> 
                      <td className='text-center p-4'>Week 30-36 </td>
                      <td colspan='2' className='text-center p-4'>Merge the matchmaking algorithm to the website and create an alpha version of BEAT.
Refine all the web and database functionalities, recheck performance issues, and optimize processes 

</td>
                      <td className='text-center p-4'>Program beta version of the virtual assistant
</td>
                      <td className='text-center p-4'>Do final tests on the matchmaking algorithm before merging it with the website.
Implement rudimentary security measures
</td>
                      </tr>
                      <tr>
                      <td colspan='5' className='text-center p-8'>The alpha version of the website is completed and ready for testing!</td>
                    </tr>
                    <tr>
                      <td colspan='5' className='text-center p-4'>The third phase of testing starts!
</td>
                    </tr>
                    <tr>
                      <td className='text-center p-4'>Week 36-40</td>
                      <td colspan='4' className='text-center p-4'>A large group will be selected to try out BEAT.
Collect and analyze data from users’ activities, behaviors, and habits.
Read feedback given by users.

</td>
                    </tr>
                    <tr>
                      <td className='text-center p-4'>Week 41</td>
                      <td colspan='4' className='text-center p-4'>Discuss the results of the third product test and decide the future course of BEAT

</td>
                    </tr>
                    <tr>
                      <td colspan='5' className='text-center p-4'>Stage 3 commences!</td>
                    </tr>
                    <tr> 
                      <td className='text-center p-4'>Month 1-2 </td>
                      <td className='text-center p-4'>Research and learn about Android application development 
</td>
                      <td className='text-center p-4'>Study and learn about IOS application development

</td>
                      <td className='text-center p-4'>Feed the virtual assistant data from the third phase of testing and refine its features.
Improve the matchmaking algorithm A.I

</td>
                      <td className='text-center p-4'>Study in-depth security measures to prevent cyberattacks.
Learn how to move the database toward the cloud

</td>
                      </tr>
                      <tr> 
                      <td className='text-center p-4'>Month 3-7 </td>
                      <td className='text-center p-4'>Design UI for the mobile applications.
Develop BEAT’s Android app

</td>
                      <td className='text-center p-4'>Develop BEAT’s IOS app.
Work with Son and Thang to move the database to the cloud

</td>
                      <td className='text-center p-4'>Complete the virtual assistant for BEAT.
Work with Son and Chi to move the database to the cloud

</td>
                      <td className='text-center p-4'>Implement PGP encryption, TLS protocol, and Blockchain technology for BEAT’s security.
Work with Thang and Chi to move the database to the cloud

</td>
                      </tr>
                      <tr> 
                      <td className='text-center p-4'>Month 8-12</td>
                      <td colspan='2' className='text-center p-4'>Add a monetary system to BEAT and other miscellaneous features like reviews, reports, etc.
</td>
                      <td className='text-center p-4'>Develop the Icebreaker functionality to the messaging system.
Implement the virtual assistant to the main UI
</td>
                      <td className='text-center p-4'>Do some finishing touches on all the features of BEAT and aid other members with programming and debugging 
</td>
                      </tr>
                      <tr>
                      <td colspan='5' className='text-center p-8'>The project is finished, and BEAT is ready for commercial use!
</td>
                      </tr>
                    </table>
                  </div>
                <div>
                <h1 className='text-black font-bold text-2xl text-center pt-10'>ROLES</h1>
                <h3 className='text-black w-fit pt-8 '>Regarding roles assigned to each team member, our team has four prominent positions designated to each group member: Project Manager, Lead Web Developer, Lead UI/UX Designer, and Technical Developer. However, these terms are very loosely defined in our group since the group is comprised of only first-semester students, and our knowledge of these subjects is limited. These roles can be easily shifted to meet current circumstances, such as having multiple Web Developers or UI/UX designers.</h3>
                <div className="w-full flex justify-center items-center py-10">
                <table className='w-full'>
                  <tr>
                    <th className='text-center p-4'>Name</th>
                    <th className='text-center p-4'>Role</th>
                    <th className='text-center p-4'>Description</th>
                    </tr>
                  <tr>
                    <td className='text-center p-4'>Tang Trung Son</td>
                    <td className='text-center p-4'>Project Manager, UI/UX designer, Lead Technical Developer </td>
                    <td className='p-4'>During this project, Son oversaw the management of the tasks that needed to be accomplished, their assignment to suitable team members, and checking up on the team’s progress. Son handled supporting teammates when they had difficulties in their duties and reallocating resources to help them further. Aside from that, Son had a hand in designing the Website UI and is the lead technical developer for the Matchmaking algorithm, Security, and Databases.</td>
                  </tr>
                  <tr> 
                    <td className='text-center p-4'>Bui Hoang Quynh Chi</td>
                    <td className='text-center p-4'>Lead Web Developer, UI/UX Designer</td>
                    <td className='p-4'>Since Chi had prior experience with HTML and CSS, she was nominated as the Lead Web Developer for this project. In her position, Chi’s primary responsibility is writing the code for our prototype and group websites, including their JavaScript elements. She also contributed many ideas during the design process of the website’s UI.</td>
                  </tr>
                  <tr>
                    <td className='text-center p-4'>Dang Quoc Thang</td>
                    <td className='text-center p-4'>Technical Developer, Web Developer</td>
                    <td className='p-4'>Thang was chosen as the Technical Developer for this project thanks to his ambition to study Machine Learning and Artificial Intelligence. His role is developing and researching the Machine Learning sections of the project. Additionally, he aided in programming HTML for the prototype website.</td>
                  </tr>
                  <tr>
                    <td className='text-center p-4'>Le Hoang Tung</td>
                    <td className='text-center p-4'>Lead UI/UX Designer, Web Developer</td>
                    <td className='p-4'>For this project, Tung is the head of designing the UI/UX for our websites since he has considerable experience with Canva. He directed the designs, helped bring them to reality through Canva, and assisted in coding HTML and CSS for the prototype and group websites.</td>
                  </tr>
                </table>
                </div>
                </div>

                <h1 className='text-black font-bold text-2xl text-center pt-10'>SCOPE AND LIMITS</h1>
                <h2 className='text-black font-bold text-xl pt-8'>Scope</h2>
                <div className="w-full flex justify-center items-center py-10">
                <table className='w-full'>
                  <tr>
                    <th className='text-center p-4'>Category</th>
                    <th className='text-center p-4'>Sub Features</th>
                    <th className='text-center p-4'>Details</th>
                    </tr>
                    <tr>
                      <td rowspan='7' className='text-center p-4'>UI</td>
                      <td className='text-center p-4'>Website</td>
                      <td className='p-4'>BEAT will be hosted on a website platform catering to users that prefer to use our service through their Internet browsers.</td>
                    </tr>
                    <tr> 
                      <td className='text-center p-4'>Mobile App</td>
                      <td className='p-4'>BEAT is also available as a mobile app, built on Kotlin and Swift to support IOS and Android compatibility.</td>
                    </tr>
                    <tr>
                      <td className='text-center p-4'>Graphics</td>
                      <td className='p-4'>Thanks to the graphics, users are kept engaged on the site [1].  The quantity will be restricted to guarantee that the website loads swiftly and effectively.</td>
                    </tr>
                    <tr>
                      <td className='text-center p-4'>Hyperlinks</td>
                      <td className='p-4'>You can discover what is available on our other web pages by clicking on the hyperlinks in the menu pane.</td>
                    </tr>
                  <tr>
                    <td className='text-center p-4'>Web Responsive Elements</td>
                    <td className='p-4'>The responsive web is designed for users of varying screen-size devices, flexible grids, breakpoints, and media queries with the aid of various frameworks, JavaScript, and CSS.</td>
                  </tr>
                  <tr>
                    <td className='text-center p-4'>Main UI</td>
                    <td className='p-4'>The UI consists of users’ profile pictures, relevant information about the user, their biography, the matching score they received, and an Accept and Reject button.</td>
                  </tr>
                  <tr>
                    <td className='text-center p-4'>Like & Dislike</td>
                    <td className='p-4'>Utilizing the Like and Dislike buttons to proceed to the next candidate or confirm the match is the primary method by which users communicate with the platform.
                  </td>
                  </tr>
                  <tr>
                    <td rowspan='4' className='text-center p-4'>Profile System</td>
                    <td className='text-center p-4'>Account Creation</td>
                    <td className='p-4'>Users will enter some account information, including a username, a profile picture, some relevant information on themselves, and a personal biography. </td>
                  </tr>
                  <tr> 
                    <td className='text-center p-4'>Social integration</td>
                    <td className='p-4'>SDKs from Facebook, Twitter, and Google will be used to provide quick account creation by logging in through pre-existing social media accounts.</td>
                  </tr>
                  <tr>
                    <td className='text-center p-4'>Preferences</td>
                    <td className='p-4'>Users will be asked a series of yes-or-no questions following the setup so that the matching algorithm can assess their responses.</td>
                  </tr>
                  <tr>
                    <td className='text-center p-4'>Profile management</td>
                    <td className='p-4'>By selecting profiles from the menu, users may modify their personal details at any time they desire. Users may view account statistics, including matching rates, history, etc.</td>
                  </tr>
                  <tr>
                    <td rowspan='2' className='text-center p-4'>Navigation system</td>
                    <td className='text-center p-4'>Menu system</td>
                    <td className='p-4'>The menu, which includes links to the home page, their profile, matches, chat rooms, and other pages, may be accessed by clicking on the hamburger icon in the top-right corner of the website/app.
Users can locate menu items they cannot see by using the Search box at the top of the menu.</td>
                  </tr>
                  <tr> 
                    <td className='text-center p-4'>Discover Page</td>
                    <td className='p-4'>After pressing discover on the menu bar, users will be taken to a discover page, showcasing categories that can narrow down our recommendations.</td>
                  </tr>
                  <tr>
                    <td rowspan='5' className='text-center p-4'>Messaging system</td>
                    <td className='text-center p-4'>Directory</td>
                    <td className='p-4'>Create a directory and establish the requisite dependencies, such as APIs and SDKs for Firebase, Websockets, and Socket.io [2].
The chat server and client will reside in this environment.</td>
                  </tr>
                  <tr>
                    <td className='text-center p-4'>Receiving & Sending</td>
                    <td className='p-4'>A chat server will manage other back-end tasks that won't be kept locally on the user's device, such as sending and receiving messages, listening for incoming message events, rendering existing messages, and broadcasting new messages to users [2]. </td>
                  </tr>
                  <tr>
                    <td className='text-center p-4'>Conversation window</td>
                    <td className='p-4'>The discussion pane allows users to scroll up and down to read earlier messages easily.</td>
                  </tr>
                  <tr>
                    <td className='text-center p-4'>Contact list</td>
                    <td className='p-4'>When you click or tap on each contact's profile photo or name, a conversation window will appear for users' access.</td>
                  </tr>
                  <tr>
                    <td className='text-center p-4'>Voice Call/ Video chat</td>
                    <td className='p-4'>Users can call and talk to each other through our UI, and if users prefer the call to be more intimate, they can speak face to face through the Internet using their devices’ cameras.</td>
                  </tr>
                  <tr>
                    <td rowspan='5' className='text-center p-4'>Matching Algorithm</td>
                    <td className='text-center p-4'> 20 Questions</td>
                    <td className='p-4'>Based on the 20 questions game, the algorithm will assign each user a value and pair them with other users who received a roughly comparable value. The list of questions will be cycled and updated constantly to maintain relevance.</td>
                  </tr>
                  <tr>
                    <td className='text-center p-4'>Scoring system</td>
                    <td className='p-4'>The algorithm will produce a value according to how similar the two users' are and display it to the users.</td>
                  </tr>
                  <tr>
                    <td className='text-center p-4'>Machine Learning Utilization </td>
                    <td className='p-4'>With the use of supervised and unsupervised machine learning, the machine will be given user data to improve user-matching accuracy.</td>
                  </tr>
                  <tr>
                    <td className='text-center p-4'>Gale-Shapley algorithm</td>
                    <td className='p-4'>The Gale-Shapley Algorithm will be used to establish stable and ideal matches, ensuring that no participant will end up with an undesirable match. [3].</td>
                  </tr>
                  <tr>
                    <td className='text-center p-4'>Geo-matching</td>
                    <td className='p-4'>Using users’ locations and addresses, the algorithm can match users who live in close proximity to each other.</td>
                  </tr>
                  <tr>
                    <td rowspan='3' className='text-center p-4'>Machine Learning</td>
                    <td className='text-center p-4'>NLP</td>
                    <td className='p-4'>We will collect and analyze user texts such as biographies and messages through Natural Language Processing to train our A.I.</td>
                  </tr>
                  <tr>
                    <td className='text-center p-4'>Icebreakers</td>
                    <td className='p-4'>Our A.I will generate phrases and sentences to help ease the conversation, such as providing opening lines to users or recommending icebreakers to break a silent conversation.</td>
                  </tr>
                  <tr>
                    <td className='text-center p-4'>Virtual Assistant </td>
                    <td className='p-4'>There will be an A.I assistant that can answer users’ queries about how to use BEAT, how to successfully find a match, etc.</td>
                  </tr>
                  <tr>
                    <td rowspan='2'className='text-center p-4'>Notification system</td>
                    <td className='text-center p-4'>Notification page</td>
                    <td className='p-4'>Notifications provide links to the related pages. The user will be sent to that page by tapping the icons on the menu.</td>
                  </tr>
                  <tr>
                    <td className='text-center p-4'>Push Notification</td>
                    <td className='p-4'>Users will receive push notifications on their mobile devices and emails informing them of matched results, messages, calls, and BEAT’s updates and changes.</td>
                  </tr>
                  <tr>
                    <td rowspan='4'className='text-center p-4'>Database system</td>
                    <td className='text-center p-4'>Profile information database</td>
                    <td className='p-4'>All of the user data and profiles will be saved in a MySQL and MongoDB-based database system, where they will be exported into our algorithms for analysis. [4]</td>
                  </tr>
                  <tr>
                    <td className='text-center p-4'>Datastore</td>
                    <td className='p-4'>A data store will be created to track user data and messages and aid in the recovery of the messaging engines in the event of errors.</td>
                  </tr>
                  <tr>
                    <td className='text-center p-4'>Cloud Storage </td>
                    <td className='p-4'>Our database will be additionally uploaded to a separate cloud service to maintain backups and support remote cooperation and database scaling.</td>
                  </tr>
                  <tr>
                    <td className='text-center p-4'>Geo sharding</td>
                    <td className='p-4'>By scattering our database into multiple machines, we can allow the processing of smaller datasets in parallel across shards, reducing latency and workloads[aws].</td>
                  </tr>
                  <tr>
                    <td rowspan='4' className='text-center p-4'>Security</td>
                    <td className='text-center p-4'>PGP encryption</td>
                    <td className='p-4'>To preserve the privacy of our users, we employ PGP encryption to secure and encrypt communications transferred between users as well as information and files saved in the database. [4][6].</td>
                  </tr>
                  <tr>
                    <td className='text-center p-4'>TLS protocol</td>
                    <td className='p-4'>Used in conjunction with the Transport Layer Security (TLS) protocol to verify security certificates and safeguard server communication [4].</td>
                  </tr>
                  <tr>
                    <td className='text-center p-4'>Blockchain </td>
                    <td className='p-4'>Blockchain will be used to reduce fraud and unlawful behavior by generating a record that cannot be altered and encrypted end-to-end [ibm].</td>
                  </tr>
                  <tr >
                    <td className='text-center p-4'>Geo sharding</td>
                    <td className='p-4'>By scattering our database into multiple machines, we can allow the processing of smaller datasets in parallel across shards, reducing latency and workloads[aws].</td>
                  </tr>
                  <tr>
                    <td rowspan='2' className='text-center p-4'>Monetary system</td>
                    <td className='text-center p-4'>Google Adsense</td>
                    <td className='p-4'>Taking advantage of Google Adsense, by pasting the code provided by Google onto our website and choosing the location for them to appear, white space on the interface can be used for advertisements.</td>
                  </tr>
                  <tr>
                    <td className='text-center p-4'>Subscription Service</td>
                    <td className='p-4'>We will provide an optional subscription service that users pay annually to remove advertisements from our BEAT and support our service.</td>
                  </tr>
                  <tr>
                    <td rowspan='4' className='text-center p-4'>Misc</td>
                    <td className='text-center p-4'>Account Recovery</td>
                    <td className='p-4'>Users could recover their accounts if they forgot their login information. This will be through a link sent to the email users signed up with; if the link is pressed, we will send them an email containing the password.</td>
                  </tr>
                  <tr>
                    <td className='text-center p-4'>Report System</td>
                    <td className='p-4'>If users find a profile with misleading, vulgar, or illegal content, they can flag it down, so our systems will recommend that profile less to other users.</td>
                  </tr>
                  <tr>
                    <td className='text-center p-4'>Geo-location</td>
                    <td className='p-4'>Using Google Maps and Google Location Services, BEAT will provide users with accurate location data and support our geo-match feature.</td>
                  </tr>
                  <tr>
                    <td className='text-center p-4'>Reviews</td>
                    <td className='p-4'>Users can leave reviews of our service on the review page accessible through the menu. Our team will manually read the reviews to assess our users’ opinions.</td>
                  </tr>
                </table>
                </div>
                <h2 className='text-black font-bold text-xl pt-10'>Limits</h2>
                <div className="w-full flex justify-center items-center py-10">
                <table className='w-full border-[2px] border-black rounded-lg'>
                  <tr className='border-[2px] border-black'>
                    <th className='p-4'>Features</th>
                    <th className='p-4'>Details</th>
                    </tr>
                    <tr>
                      <td className='text-center p-4'>Forums</td>
                      <td className='p-4'>A discussion page for users to post questions, news, or anything on their minds for others to comment on and discuss with each other.</td>
                    </tr>
                    <tr> 
                      <td className='text-center p-4'>Quizzes</td>
                      <td className='p-4'>Pop-up notifications that display fun questions about love and relationship that users can answer to gain access to our premium subscription for free temporarily.</td>
                    </tr>
                    <tr>
                      <td className='text-center p-4'>Matching more than two people</td>
                      <td className='p-4'>A feature for matching multiple people to each other at the same time to cater to people who are interested in polyamorous relationships. </td>
                    </tr>
                    <tr>
                      <td className='text-center p-4'>Group chat</td>
                      <td className='p-4'>Chatting feature for users to create a group chat where multiple users can exchange text messages, make voice calls, and stream videos to each other</td>
                    </tr>
                  <tr>
                    <td className='text-center p-4'>Relationship Advice</td>
                    <td className='p-4'>Pieces of Advice made by our virtual assistant on maintaining a work-life balance, maintaining a healthy relationship, and avoiding conflicts. </td>
                  </tr>
                  <tr>
                    <td className='text-center p-4'>Date spot recommendation</td>
                    <td className='p-4'>Recommendations made by our A.I that provide fun and romantic locations around the users’ area so they can make plans to meet their match.</td>
                  </tr>
                  </table>
                </div>

                <h1 className='text-black font-bold text-2xl text-center pt-10'>TOOLS AND TECHNOLOGY</h1>
                <div className="w-full flex justify-center items-center py-10">
                <table className='w-full border-[2px] border-black rounded-lg'>
                  <tr className='border-[2px] border-black'>
                    <th className='p-4'>Tools</th>
                    <th className='p-4'>Usage</th>
                    </tr>
                    <tr>
                      <td className='text-center p-4'>PyCharm</td>
                      <td className='p-4'>IDE to code Python.</td>
                    </tr>
                    <tr> 
                      <td className='text-center p-4'>Visual Studio Code</td>
                      <td className='p-4'>IDE to code HTML, CSS, and JavaScript.</td>
                    </tr>
                    <tr>
                      <td className='text-center p-4'>HTML5</td>
                      <td className='p-4'>Control how web pages and user interfaces are laid out, colored, and with other visual components [1].</td>
                    </tr>
                    <tr>
                      <td className='text-center p-4'>Python 3.9</td>
                      <td className='p-4'>Language for coding the matchmaking algorithm and Machine Learning algorithms.</td>
                    </tr>
                  <tr>
                    <td className='text-center p-4'>Relationship Advice</td>
                    <td className='p-4'>Pieces of Advice made by our virtual assistant on maintaining a work-life balance, maintaining a healthy relationship, and avoiding conflicts. </td>
                  </tr>
                  <tr>
                    <td className='text-center p-4'>R</td>
                    <td className='p-4'>Language for developing Artificial Intelligence.</td>
                  </tr>
                  <tr>
                    <td className='text-center p-4'>Swift</td>
                    <td className='p-4'>Language for building IOS applications.</td>
                  </tr><tr>
                    <td className='text-center p-4'>Kotlin</td>
                    <td className='p-4'>Language for building Android applications.</td>
                  </tr><tr>
                    <td className='text-center p-4'>PHP</td>
                    <td className='p-4'>Enables cross-platform for adaptation.</td>
                  </tr><tr>
                    <td className='text-center p-4'>MySQL</td>
                    <td className='p-4'>Building, controlling, and primary storage for the database [6].</td>
                  </tr><tr>
                    <td className='text-center p-4'>MongoDB</td>
                    <td className='p-4'>Caching/intermediate storage for the database [6].</td>
                  </tr><tr>
                    <td className='text-center p-4'>Bootstrap</td>
                    <td className='p-4'>Helps develop web-responsive elements [2].</td>
                  </tr><tr>
                    <td className='text-center p-4'>PayPal REST API</td>
                    <td className='p-4'>API to process invoices from PayPal.</td>
                  </tr><tr>
                    <td className='text-center p-4'>Ionic</td>
                    <td className='p-4'>Build and develop IOS and android applications</td>
                  </tr><tr>
                    <td className='text-center p-4'>React</td>
                    <td className='p-4'>Build an interactive User Interface</td>
                  </tr><tr>
                    <td className='text-center p-4'>Websocket</td>
                    <td className='p-4'>Allows two-way interactive communication between the user's browser and a server [5].</td>
                  </tr><tr>
                    <td className='text-center p-4'>Apache</td>
                    <td className='p-4'>Accept directory requests and send information[3]</td>
                  </tr><tr>
                    <td className='text-center p-4'>PGP encryption</td>
                    <td className='p-4'>Encrypt messages between users and data on the database.</td>
                  </tr><tr>
                    <td className='text-center p-4'>TLS protocol</td>
                    <td className='p-4'>Validate security tickets and secure communications between servers</td>
                  </tr><tr>
                    <td className='text-center p-4'>Amazon SageMaker</td>
                    <td className='p-4'>Enables execution of Machine Learning models in Cloud-based systems.</td>
                  </tr><tr>
                    <td className='text-center p-4'>TensorFlow</td>
                    <td className='p-4'>Manage Machine Learning systems [4].</td>
                  </tr><tr>
                    <td className='text-center p-4'>FusionAuth</td>
                    <td className='p-4'>Authentication for users’ accounts</td>
                  </tr><tr>
                    <td className='text-center p-4'>Firebase</td>
                    <td className='p-4'>Enables developing cross-platform applications</td>
                  </tr><tr>
                    <td className='text-center p-4'>Facebook SDK</td>
                    <td className='p-4'>Social Integration for Facebook</td>
                  </tr><tr>
                    <td className='text-center p-4'>Cloud SDK</td>
                    <td className='p-4'>Social Integration for Google</td>
                  </tr><tr>
                    <td className='text-center p-4'>Google Location Services</td>
                    <td className='p-4'>Locate and display locations of users</td>
                  </tr><tr>
                    <td className='text-center p-4'>Google Cloud Platforms</td>
                    <td className='p-4'>Cloud solution for creating and managing database.</td>
                  </tr><tr>
                    <td className='text-center p-4'>Graph API</td>
                    <td className='p-4'>Design data graphs and charts for analyzation.</td>
                  </tr><tr>
                    <td className='text-center p-4'>Google Analytic</td>
                    <td className='p-4'>Analyze, follow, control data</td>
                  </tr><tr>
                    <td className='text-center p-4'>PageSpeed Insights</td>
                    <td className='p-4'>Test website performance.</td>
                  </tr><tr>
                    <td className='text-center p-4'>Canva</td>
                    <td className='p-4'>Illustrate UI layout</td>
                  </tr><tr>
                    <td className='text-center p-4'>Github</td>
                    <td className='p-4'>Enables remote working collaboration.</td>
                  </tr><tr>
                    <td className='text-center p-4'>Messenger</td>
                    <td className='p-4'>Text messaging</td>
                  </tr><tr>
                    <td className='text-center p-4'>Discord</td>
                    <td className='p-4'>Group Meeting platform</td>
                  </tr><tr>
                    <td className='text-center p-4'>Google Meet</td>
                    <td className='p-4'>Alternative group meeting platform</td>
                  </tr>
                  </table>
                </div>

                <h1 className='text-black font-bold text-2xl text-center pt-10'>TESTING</h1>
                <h3 className='text-black w-fit pt-8 '>For BEAT, we will have 3 phases of testing before determining whether the development was successful. </h3>
                <h3 className='text-black w-fit pt-3' >The first phase will be about BEAT’s technical side. We will do a round of technical tests, which we will conduct with tools like Google Pagespeed Insights. This phase aims to find all the errors and bugs that are still present in our programs and code, as well as test the stability of our web platform and algorithms. </h3>
                <h3 className='text-black w-fit pt-3' >The second phase will require a small set of people currently studying at university to test our matchmaking algorithm's design. We will ask a handful of RMIT students, roughly 8 to 10 people, to help us conduct these tests. Half of the participants will have prior experience in relationships, while the other half does not. The participants will be asked to describe their ideal partner in life, including personality, likes, and dislikes, etc. After which, we will give them a set list of yes or no questions and log their answers before putting them into a beta version of our matchmaking algorithm. If the algorithm can match the participants with a pre-set profile that is similar to their aforementioned perfect partner, we will move on to the next phase. This phase will be repeated multiple times with different sets of participants to ensure the ideal design of our matchmaking algorithm. </h3>
                <h3 className='text-black w-fit pt-3 pb-10' >The final phase will involve a more extensive group of participants. We will post about our product on social media groups such as RMIT Vietnam Society, asking people to test out our service. When they register through a google form, we will send out invitations through email to 500 randomly selected students. They will gain access to the beta version of BEAT, where they go through our user interface, get matched with other users, and text their preferred matches. Afterward, they will be asked to do a survey rating their experience while using BEAT’s UI and how accurate our matchmaking algorithm was. When all these phases have been completed and yield successful results, we will consider the early development a success and start building other features of BEAT.</h3>


                <h1 className='text-black font-bold text-2xl text-center pt-10'>RISKS</h1>
                <h2 className='text-black font-bold text-xl pt-8'>Finance</h2>
                <h3 className='text-black w-fit py-10 '>Since BEAT is an immensely complex product designed with scalability in mind, most of the infrastructure and tools are locked away behind paywalls. As the entire team is composed entirely of first-year students, the chances of the team having access to some of these services are slim. Furthermore, the costs of some of the tools and services required to build the service, such as APIs, cloud servers, and frameworks, are too high for a team of college freshmen to fund. Aside from the software, there is the question of hardware. We do not own massive supercomputers that are present in the conglomerates that run other dating services. As a result, housing the databases and sophisticated algorithms for our service will take a lot of work. The team may have to spend a considerable amount of money to invest into this project. However, the money we make from the monetary systems and the traffic to the service may be much lower than we expected. These risks must be taken seriously as this will affect the financial situation of all parties involved in this project.</h3>
                <h2 className='text-black font-bold text-xl'>Time</h2>
                <h3 className='text-black w-fit py-10 '>This project will take not only a lot of effort to complete but also a substantial amount of time. Being versed in programming does not happen overnight. Building only 25 percent of the project would require mastery of programming languages such as Python, JavaScript, Swift, etc. To juggle learning the fundamentals of programming alongside APIs and frameworks is nearly impossible. Combined with the fact that the first time most of our team members were exposed to this side of the IT industry was at the start of the semester. Learning the tools to build such a massive project will take years. Furthermore, since we are still starting in university, it is irresponsible to think everyone can spend most of their time on such a project. This fact can significantly delay BEAT's development.</h3>
                <h2 className='text-black font-bold text-xl'>Difficulty</h2>
                <h3 className='text-black w-fit py-10 '>Many of the systems that we envision for BEAT require an extensive amount of prior knowledge of multiple technology stacks to develop. These tools are complex to understand. Even though we may have plans to study them for use, that does not guarantee that the outcome will be precisely as we expect. In the future, chances are high that team members will find these too far too difficult and time-consuming to invest their time. Moreover, it is not likely that when members learn to utilize these tools, they will use them without running through some program-breaking bugs they cannot fix. The learning curve of learning and operating these tools must be seriously considered, as they are crucial to developing our dating service.</h3>
                <h2 className='text-black font-bold text-xl'>Popularity</h2>
                <h3 className='text-black w-fit py-10 '>Like any dating service, the effectiveness of its matchmaking heavily depends on the number of active users present in the system. A dating service can not be efficient without a sufficient number of users. That is why the popularity of BEAT is crucial for our service to operate. That said, accomplishing a notable reputation will be the most challenging feat of our project. We will need to create a marketing campaign for our service that effectively reaches as many people as possible. However, the outcome is primarily unpredictable. Some conditions, such as timing and user trends, can be accounted for, though volatile political and social disturbances may ruin our campaign completely.  </h3>
                <h2 className='text-black font-bold text-xl'>Security Breach</h2>
                <h3 className='text-black w-fit py-10 '>It is imperative for a service that deals with the personal information of clients to have the most advanced security systems. Although we may implement security measures to prevent cyber-attacks from taking place, we can not account for every possible method an attacker might use to attack our system. Hackers and cybercriminals will constantly develop innovative solutions to steal our data and access our system illegally. The fallout from an event such as a data breach could be catastrophic as we will not only lose the faith of our user base, but we would also get in trouble with the authorities.</h3>
                <h2 className='text-black font-bold text-xl'>A.I segregation</h2>
                <h3 className='text-black w-fit py-10 '>Our matchmaking algorithm will include Machine Learning to enhance its capabilities by feeding the A.I with information from databases and our users’ personal information, activities, and interactions. The problem lies with the underlying racism and sexism common in the general consensus. Even though we may not have designed our A.I to segregate one particular sex or racial group from another, there is a high chance it will adapt to the data that is fed to it and, in turn, pick up the unwanted characteristics of users [wired]. This can lead to disastrous results as our matchmaking algorithm would be deemed inefficient, and its ability to give accurate matches would be hindered.</h3>
                <h2 className='text-black font-bold text-xl'>Latency</h2>
                <h3 className='text-black w-fit py-10 '>In the digital age, people’s attention span is shortening with each coming year. From 12 seconds in 2000 to only 8.76 seconds just 15 years later [wyzowl]. The latency is a significant issue when discussing live services like ours. When users get a match, send a text, or simply move between pages, they expect it to occur immediately. This requires innovative solutions to be put out as communications between servers, the databases, and the app will need to be highly optimized to ensure the latency stays at a minimum. If these solutions are not completed, our service will become sluggish and lose users’ interest, ultimately deterring users from using our service in the future.</h3>


                <h1 className='text-black font-bold text-2xl text-center pt-10'>GROUP PROCESSES AND COMMUNICATIONS</h1>
                <h3 className='text-black w-fit pt-8 '>During the project proposal, our group put out five main ground rules that would decide our operations for the entire semester. Those rules were:
                <ul className='list-disc pl-4'>
                  <li>No physical or verbal abuse of teammates.</li>
                  <li>Do your best to be present at all in-person and online meetings.</li>
                  <li>If someone needs assistance with the assignment, they must ask for it immediately.</li>
                  <li>Express your complaints to the team so that we may work together to find solutions. </li>
                  <li>Frequently read team members' communications to stay informed on updates to the assignment.</li>
                </ul>
                These rules have been followed strictly throughout this semester, resulting in zero conflicts.
                We initially proposed to have at least one meeting per week to increase productivity and report on the status of assignments. In reality, we were able to hold more than two meetings each week, both online and offline. However, communications went down during the Christmas break as many team members went on holiday with their families and failed to announce that information to the team. We picked up the pace after the Christmas break ended and resumed our operations as usual. While we originally proposed to hold online meetings in Discord and Teams, one of our members: Thang, needed help gaining a smooth connection for our meetings. So, we decided to use Google Meet as our online meeting platform. The frequency of group meetings increased significantly to 5 per week during the last two weeks of the semester as we had to revise all our work and start piecing them together.
                Messenger was primarily used to communicate with each other both in a group chat and privately to ask for support with assignments not only for this course but for other courses as well. We additionally incorporated using GitHub to work on developing the group website and the prototype website. Members had difficulty using GitHub in the first two weeks. However, after some group troubleshooting and time, all members became acquainted with GitHub.
                </h3>
            </div>
        : null}
    </div>
  );
};

export default About;