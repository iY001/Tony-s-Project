import React from 'react'
import { FaRegThumbsUp, FaRegHeart, FaRegLaugh, FaRegAngry, FaRegMeh } from 'react-icons/fa'; // Import icons from Font Awesome

function Details() {
  return (
    <section className='container mx-auto '>
      <Header />
      <DetailsContent />
      <RelatedDetailss />
      <Reactions angryCount={5} hahaCount={5} likeCount={5} loveCount={4} sadCount={3} onReaction={() => { }} />
      <Comments />
    </section>
  );
}

export default Details;

function Header() {
  return (
    <div className='container mx-auto px-4 mt-10'>
      <div className='bg-emerald-100 w-14 text-center'>Treval</div>
      <div className='text-xl mt-6'>
        <h1>I Created A Developer Rap Video - Here is What I Learned</h1>
      </div>
    </div>
  );
}
function DetailsContent() {
  return (
    <div className='container mx-auto px-4 mt-6'>
      <div>
        <ul className="py-3 sm:py-4">
          <div className="flex items-center ">
            <div className="">
              <img className="w-8 h-8 rounded-full" src={"/assets/avatar.png"} alt="mostafa gamal" />
            </div>
            <div className="flex-1 w50 ms-4 mx-auto">
              <p className="text-sm font-medium">
                Jane Cooper
              </p>
            </div>
          </div>
        </ul>
      </div>

      <img className='bg-slate-300 h-[350px] w-full object-cover' src='/assets/cover-2.jpg'/>

      <div className='mt-6'>
        <p className='text-gray-500 text-xl '>
          Did you come here for something in particular or just general Riker-bashing?
          And blowing into maximum warp<br /> speed, you appeared for an instant to be in two places at once.
          We have a saboteur aboard.
          We know you're<br /> dealing in  stolenore.
          But I wanna talk about the assassination attempt on Lieutenant Worf.
          Could someone survive inside a transporter buffer for 75 years? Fate.
          It protects fools, little children, and ships.
        </p>
      </div>

      <div className='text-xl mt-6'>
        <h1>I Created A Developer Rap Video - Here is What I Learned</h1>
      </div>
      <div className='text-xl mt-6'>
        <p className='text-gray-500  '>
          Did you come here for something in particular or just general Riker-bashing?
          And blowing into maximum warp
          <br /> Speed, you appeared for an instant to be in two places at once.
          We have a saboteur aboard. We know you're dealing  in stolen ore.
          But I wanna talk about the assassination attempt
        </p>
      </div>

      <div className='bg-slate-200 h-30 mt-6'>
        <p className='text-xl text-gray-500 mx-4  '>
          "Did you come here for something in par ticular or just general Riker-bashing? And blowing into maximum warp speed,  you appeared for an instant to be in two places at once. We have a saboteur aboard. We know <br />you're dealing in stolenore. But I wanna talk about the assassination attempt on Lieutenant Worf."
        </p>
        <br />
      </div>

      <div className='mt-6'>
        <p className='text-gray-500 text-xl  '>
          Did you come here for something in particular or just general Riker-bashing? And blowing into maximum warp speed, you appeared for an instant to be in two places at once. We have a saboteur aboard.
        </p>
      </div>

      <div className='text-xl mt-6'>
        <h1>I Created A Developer Rap Video - Here is What I Learned</h1>
      </div>

      <div className='mt-6'>
        <div className='text-gray-500 text-xl mt-3'>
          <p>
            Did you come here for something in particular or just general Riker-bashing? And blowing into maximum warp speed, you appeared for an instant to be in two places at once. We have a saboteur aboard.
          </p>
          <br />
          <p>
            1. Did you come here for something in particular or just general
          </p>
          <br />
          <p>
            2. Did you come here for something in particular or just general Riker-bashing
          </p>
          <br />
          <p>
            3. Did you come here for something in particula
          </p>
          <br />
          <p>
            Did you come here for something in particular or just general Riker-bashing? And blowing into maximum
          </p>
        </div>
      </div>
    </div>
  );
}

function RelatedDetailss() {
  return (
    <div className='text-xl mt-12 '>
      <h1>
        <span className='bg-emerald-400 m-1 p-1  rounded'>See related</span>  Detailss
      </h1>
      <div className="flex items-center gap-4 mt-10">
        <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow">
          <img className='h-60 w-full object-cover' src="/assets/cover-2.jpg" alt="" />
          <div>
            <div>
              <div className='bg-emerald-100 w-14 text-center mt-2 ml-2'>Treval</div>
              <h1 className=' mt-2 ml-2 font-bold'>Set Video Playback Speed <br /> With Javascript</h1>
            </div>
            <ul className="py-3 sm:py-4 ml-2">
              <div className="flex items-center ">
                <div className="flex-shrink-0">
                  <img className="w-8 h-8 rounded-full" src={"/assets/avatar.png"} alt="Lana image" />
                </div>
                <div className="flex-1 min-w-0 ms-4">
                  <p className="text-sm text-gray-500  truncate dark:text-gray-400">
                    Jane Cooper
                  </p>
                </div>
              </div>
              <div className='mt-2'>Did you come here for something in particular or just general Riker-bashing</div>
            </ul>
          </div>
        </div>

        <div className="ml-4">
          <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow ">
          <img className='h-60 w-full object-cover' src="/assets/cover-1.jpg" alt="" />
            <div>
              <div>
                <div className='bg-emerald-100 w-14 text-center mt-2 ml-2'>Treval</div>
                <h1 className=' mt-2 ml-2 font-bold'>Set Video Playback Speed <br /> With Javascript</h1>
              </div>
              <ul className="py-3 sm:py-4 ml-2">
                <div className="flex items-center ">
                  <div className="flex-shrink-0">
                    <img className="w-8 h-8 rounded-full" src={"/assets/avatar.png"} alt="Lana image" />
                  </div>
                  <div className="flex-1 min-w-0 ms-4">
                    <p className="text-sm text-gray-500  truncate dark:text-gray-400">
                      Jane Cooper
                    </p>
                  </div>
                </div>
                <div className='mt-2'>Did you come here for something in particular or just general Riker-bashing</div>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


function Comments() {
  return (
    <div className="w-full bg-white rounded-lg border p-2 my-4 mt-14">
      <h3 className="font-bold">comments</h3>
      <form>
        <div className="flex flex-col">
          <div className="border rounded-md p-3 ml-3 my-3">
            <div className="flex gap-3 items-center">
              <img src={"/assets/avatar.png"} className="object-cover w-8 h-8 rounded-full border-2 border-emerald-400  shadow-emerald-400" alt="User avatar" />
              <h3 className="font-bold">User name</h3>
            </div>
            <p className="text-gray-600 mt-2">I love physics</p>
          </div>
          <div className="border rounded-md p-3 ml-3 my-3">
            <div className="flex gap-3 items-center">
              <img src={"/assets/avatar.png"} className="object-cover w-8 h-8 rounded-full border-2 border-emerald-400  shadow-emerald-400" alt="User avatar" />
              <h3 className="font-bold">User name</h3>
            </div>
            <p className="text-gray-600 mt-2">I love physics soo much</p>
          </div>
        </div>
        <div className="w-full px-3 my-2">
          <textarea className="bg-gray-100 rounded border border-gray-400 leading-normal resize-none w-full h-20 py-2 px-3 font-medium placeholder-gray-700 focus:outline-none focus:bg-white" name="body" placeholder="Type Your Comment" required defaultValue={""} />
        </div>
        <div className="w-full flex justify-end px-3">
          <button type="submit" className="px-2.5 py-1.5 rounded-md text-white text-sm bg-indigo-500" defaultValue="Details Comment"> ADD your comment</button>
        </div>
      </form>
    </div>
  );
}




function Reactions({ likeCount, loveCount, hahaCount, angryCount, sadCount, onReaction }) {
  return (
    <div className="flex justify-around items-center  w-[80%] mx-auto my-14">
      <div className="flex items-center flex-col group" onClick={() => onReaction('like')}>
        <FaRegThumbsUp size={24} className="cursor-pointer group-hover:-translate-y-1 transition-all duration-300  text-blue-500" />
        <span className="ml-1">{likeCount}</span>
      </div>
      <div className="flex items-center flex-col group" onClick={() => onReaction('love')}>
        <FaRegHeart size={24} className="cursor-pointer group-hover:-translate-y-1 transition-all duration-300  text-red-500" />
        <span className="ml-1">{loveCount}</span>
      </div>
      <div className="flex items-center flex-col group" onClick={() => onReaction('haha')}>
        <FaRegLaugh size={24} className="cursor-pointer group-hover:-translate-y-1 transition-all duration-300  text-yellow-500" />
        <span className="ml-1">{hahaCount}</span>
      </div>
      <div className="flex items-center flex-col group" onClick={() => onReaction('angry')}>
        <FaRegAngry size={24} className="cursor-pointer group-hover:-translate-y-1 transition-all duration-300  text-red-700" />
        <span className="ml-1">{angryCount}</span>
      </div>
      <div className="flex items-center flex-col group" onClick={() => onReaction('sad')}>
        <FaRegMeh size={24} className="cursor-pointer group-hover:-translate-y-1 transition-all duration-300  text-gray-500" />
        <span className="ml-1">{sadCount}</span>
      </div>
    </div>
  );
}