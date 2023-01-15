import React, {useState} from 'react';
import Outcome_img from '../assets/outcome.png';
import login from '../assets/login.png';
import main from '../assets/Main.png';
import matched from '../assets/Matched.png';
import question from '../assets/questions.png';
import text from '../assets/texting.png';


const Outcome = () => {
  const [hidden, setHidden] = useState(true);
  return (
    <div name='outcome' className='w-full bg-black py-16 px-4'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
        <img className='w-[430px] h-[270px] mx-auto my-4 rounded-xl' src={Outcome_img} alt='/' />
        <div className='flex flex-col justify-center'>
          <h1 className='text-white md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Outcome</h1>
          <p className='text-white'>
          Here is the place where we will discuss the outcomes of the group work.
          </p>
          <button onClick={() => setHidden(s => !s)} className='bg-[#17fff3] text-black w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3'>View Details</button>
        </div>
      </div>
      {!hidden ? 
            <div className='block w-full bg-[#000300] px-8 pt-4 text-white'>
                <h1 className='font-bold text-2xl text-center pt-8 uppercase'>Outcomes</h1>
                <h3 className='w-fit py-10 '>The product we designed is a primitive version of what we would like our product to look like in the future. BEAT can be used as a tool to help people find the love of their life or to find people who share the same interests. As of now, our website can display our UI and move you to the other pages. You can press the chat button on the main UI to type in texts and make them appear as text boxes. For the UI illustrations, we have five pages to showcase our vision for our website when we finish the product. 
                <ul className='list-disc pl-4'>
<li>The first is the login page, where users can fill in their login information and use BEAT. </li>
<li>The second is our main UI, where you can see a user’s profile picture, some relevant information, a personal biography, a similarity score, and a like or dislike button.</li>
<li>The third is the questions page, which will show up during the account setup process, where users will answer 20 yes or no questions.</li>
<li>The fourth is the matched page which will appear when two users like each other’s profile</li>
<li>The fifth is the messaging page, where users can send each other text messages or even call each other</li>
Right now, the product is in very early development as we cannot develop all the features as they take a vast amount of time to learn. Most of the buttons on the prototype website are still unable to be used, and we still need to develop our matchmaking algorithm. In the future, we plan to refine our website with animations and web-responsive elements so that it will feel like an actual professional website. Additionally, we will develop a fully functioning matchmaking algorithm that can match users accurately.
</ul>
</h3>
                  <h1 className='font-bold text-2xl text-center pt-8 uppercase'>prototype</h1>
                  <h2 className='font-bold text-xl text-center pt-8 '>Prototype illustrations</h2>

                  <div className="w-full flex justify-center items-center py-10">
                <table className='w-full border-[2px] border-white rounded-lg'>
                    <tr >
                      <td className='text-center p-4 border-white'>Log in Page</td>
                      <td className='p-4 border-white'><img src={login} alt="" /></td>
                    </tr>
                    <tr> 
                      <td className='text-center p-4 border-white'>Main UI</td>
                      <td className='p-4 border-white'><img src={main} alt="" /></td>
                    </tr>
                    <tr>
                      <td className='text-center p-4 border-white'>Questions Page</td>
                      <td className='p-4 border-white'><img src={question} alt="" /></td>
                    </tr>
                    <tr>
                      <td className='text-center p-4 border-white'>Matched Page</td>
                      <td className='p-4 border-white'><img src={matched} alt="" /></td>
                    </tr>
                  <tr>
                    <td className='text-center p-4 border-white'>Messaging Page</td>
                    <td className='p-4 border-white'><img src={text} alt="" /></td>
                  </tr>
                  </table>
                </div>
                <h2 className='font-bold text-xl text-center pt-8 '>Prototype illustrations</h2>
                <a href='https://tungxk.github.io/BEAT_login/?fbclid=IwAR0FaVkpNWU8hOU0_O5Ap9McQjWrjWn0To4KKiW_46nOxZ3K9VKVNHKJjvA' className='flex justify-center'>https://tungxk.github.io/BEAT_login/?fbclid=IwAR0FaVkpNWU8hOU0_O5Ap9McQjWrjWn0To4KKiW_46nOxZ3K9VKVNHKJjvA</a>
            </div>
        : null}
    </div>
  );
};

export default Outcome;