import React from 'react';
import Image from 'next/image'

const Intro = () => {
  return (
    // <div style={{margin: '2rem'}}>
    //   <h2 class="text-lg font-semibold">Tonmoy Talukder</h2>
      
    //   <p>This is the content of the first column.</p>
    // </div>
    <div class="container mx-auto flex justify-center">
  <div class="w-full md:w-50">
    <div class="mt-2">
      <h1 class="text-2xl font-bold text-center">Tonmoy Talukder</h1> <br></br>
      {/* <Image src="https://i.ibb.co/X7QwZ6Y/Tonmoy-Talukder.jpg" class="h-60 w-60 rounded-full mx-auto" 
      width={800}
      height={500}
      alt="Image"/> */}
      <Image
        src="https://i.ibb.co/X7QwZ6Y/Tonmoy-Talukder.jpg"
        alt="Image"
        width={200}
        height={200}
        className="rounded-full mx-auto"
      />
      <br></br>
      <p class="text-center">
      <span class="text-center text-orange-600 hover:text-orange-400"><a href="https://drive.google.com/file/d/1nb4uVV8NDuStjwUTlEvjR7OziyaP9RsR/view" target="_blank">Resume</a></span> | <span class="text-center text-orange-600 hover:text-orange-400"><a href="https://www.linkedin.com/in/tonmoytalukder/" target="_blank">LinekdIn</a></span> | <span class="text-center text-orange-600 hover:text-orange-400"><a href="https://github.com/TonmoyTalukder" target="_blank">GitHub</a></span> | <span class="text-center text-orange-600 hover:text-orange-400"><a href="https://scholar.google.com/citations?user=_6Nj60QAAAAJ&hl=en" target="_blank">Google Scholar</a></span>
      </p>
      <p class="text-justify">
      I have pursed Bachelor of Science degree in Computer Science and Engineering at Ahsanullah University of Science and Technology.
    <br></br>
    <br></br>
      I am currently doing research in Machine Learning under my undergrad supervisor <span class="text-orange-600 hover:text-orange-400"><a href="https://shahariar-shibli.github.io/" target="_blank">G. M. Shahariar Shibli</a></span>, faculty of the Computer Science and Engineering department of Ahsanullah University of Science and Technology, focusing on Natural Language Processing, Computer Vision and Multimodal Deep Learning research.
      <br></br>
      <br></br>
      I have a keen interest in various research areas, including  <span class="text-sky-600">Multimodal Deep Learning</span>, <span class="text-sky-600">Natural Language Processing</span>, <span class="text-sky-600">Computer Vision</span>, <span class="text-sky-600">Human-Computer Interaction</span>, and <span class="text-sky-600">Machine Learning</span>.
      </p>
    </div>
  </div>
</div>

  );
};

export default Intro;