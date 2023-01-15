import React, {useState} from 'react';
import {
  FaGithubSquare,
  FaChrome
} from 'react-icons/fa';
import Tools_img from '../assets/tools.png';

const Tools = () => {
  const [hidden, setHidden] = useState(true);
  return (
    <div name='tools' className='w-full bg-[#000300] py-16 px-4'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
        <img className='w-[430px] h-[270px] mx-auto my-4 rounded-lg' src={Tools_img} alt='/' />
        <div className='flex flex-col justify-center'>
          <h1 className='text-[#17fff3] md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Tools</h1>
          <p className='text-[#17fff3]'>
              This is the group website and the GitHub repository for our group
          </p>
          <div className='text-white flex justify-left py-4'>
            <a href='https://github.com/RMIT-son/IIT-3.git' className='pr-5 cursor-pointer'><FaGithubSquare size={40} /></a>
            <a href='https://quynhchi04.github.io/matchmaker.github.io/' className='cursor-pointer'><FaChrome size={40} /></a>
        </div>
          <button onClick={() => setHidden(s => !s)} className='bg-[#17fff3] text-black w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3'>View Details</button>
        </div>
      </div>
      {!hidden ? 
            <div className='block w-full bg-[#000300] px-8 pt-4'>
                <h1 className='text-[#17fff3] font-bold text-2xl text-center pt-8 uppercase'>Comments on the audit trail</h1>
                <h3 className='text-[#17fff3] w-fit py-10'>As you can see from our repository, all members completed their tasks and pushed their work onto the repository. Each member created their own separate branch to ensure the main branch was not affected. From the audit trail, you can see that each member contributed to this project. Even though Thang’s commits number may seem low, it is because he preferred to do his work on a docs page instead of files. Since Tung and Chi were mainly responsible for making the websites, they wrote the most lines out of everyone in the repository while Son made the most amount of commits as he needed to upload the most amount of files for members’ use.</h3>
            </div>
        : null}
    </div>
  );
};
export default Tools;