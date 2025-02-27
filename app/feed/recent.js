import React from 'react';

const Recent = () => {
  return (
    
    <div className="mt-3">

      {/* Announcement */}
        {/* <div>
        <p className='pulsating-text text-xl text-center font-mono underline underline-offset-8'>I am looking for a job in NLP/ML Engineer position.</p> <br></br>
        </div> */}

        <h2 className="text-xl font-semibold">RECENT HIGHLIGHTS ⚡</h2>
        <hr/>
        <hr/>
            <div>
            <ul style={{listStyleType: "none"}}>
                <li className='py-2'>
                  <p className="text-justify"><span className="text-sm font-semibold">[February, 2025]</span> I have <span style={{color: 'blue'}}>joined</span> <span className="text-sky-600 hover:text-orange-400 hover:underline"><a href="https://worldtechsoft.com/" target="_blank" rel="noreferrer">WorldTech</a></span> as a <bold className="font-medium">Software Engineer</bold>.</p>
                </li>
                <li className='py-2'>
                  <p className="text-justify"><span className="text-sm font-semibold">[July, 2024]</span> I have <span style={{color: 'orange'}}>left</span> <span className="text-sky-600 hover:text-orange-400 hover:underline"><a href="https://bd.linkedin.com/company/research-hub-21" target="_blank" rel="noreferrer">Reseach Hub.Inc</a></span>.</p>
                </li>
                <li className='py-2'>
                  <p className="text-justify"><span className="text-sm font-semibold">[February, 2024]</span> I have <span style={{color: 'blue'}}>joined</span> <span className="text-sky-600 hover:text-orange-400 hover:underline"><a href="https://bd.linkedin.com/company/research-hub-21" target="_blank" rel="noreferrer">Reseach Hub.Inc</a></span> as a <bold className="font-medium">Research Engineer</bold> on a contractual basis.</p>
                </li>
                <li className='py-2'>
                  <p className="text-justify"><span className="text-sm font-semibold">[September, 2023]</span> One Paper <span style={{color: 'green'}}>published</span> at <span className="italic ">
                  <span className="text-sky-600 hover:text-orange-400 hover:underline"><a href="https://confbim.com/" target="_blank" rel="noreferrer">BIM 2023</a></span></span>.</p> 
                  {/* , Springer Lecture Notes in Networks and Systems. */}
                </li>
                <li className='py-2'>
                  <p className="text-justify"><span className="text-sm font-semibold">[July, 2023]</span> One Paper <span style={{color: 'blue'}}>accepted</span> at <span className="italic ">
                  <span className="text-sky-600 hover:text-orange-400 hover:underline"><a href="https://confbim.com/" target="_blank" rel="noreferrer">BIM 2023</a></span></span> conference.</p>
                </li>
                <li className='py-2'>
                  <p className="text-justify"><span className="text-sm font-semibold">[August, 2022]</span> I have started <span style={{color: '#FF0000'}}>research</span> under the supervision of <span className="text-orange-700 hover:text-orange-400 hover:underline"><a href="https://shahariar-shibli.github.io/" target="_blank" rel="noreferrer">Mr. G. M. Shahariar Shibli</a></span>, Faculty, Department of Computer Science and Engineering, Ahsanullah University of Science and Technology.</p>
                </li>
            </ul>
            </div>
        <hr/>

    </div>

  );
};

export default Recent;
