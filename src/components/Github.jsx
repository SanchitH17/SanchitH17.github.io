import React,{useEffect} from "react";
import GitHubCalendar from "react-github-calendar";
import AOS from "aos";

export const Github = () => {

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <section data-aos="fade-up" className="sections">
      <h1 className="heading">My Contributions and Stats</h1>
      <div data-aos="fade-up">

      <GitHubCalendar
        fontSize={16}
        blockSize={10}
        year={2023}
        username="vishalll069"
      />
      </div>
      <div data-aos="fade-up" style={{display:'flex', justifyContent:'center', alignItems:'center', marginTop:'3rem'}}>

        <img
        
        id="github-top-langs"
          align="center"
          src="https://github-readme-stats.vercel.app/api/top-langs/?username=vishalll069&layout=compact&bg_color=FFFFFF00&hide_border=true&text_color=6d6b6b&title_color=6d6b6b"
          alt="vishalll069"
        />
      </div>
      <div  data-aos="fade-up" style={{display:'flex', justifyContent:'center', gap:'10px', marginTop:'3rem'}} id="github-stat" >
        <img
        id="github-stats-card"
          align="center"
          src="https://github-readme-stats.vercel.app/api?username=vishalll069&theme=dark&hide_border=true&include_all_commits=false&count_private=true&bg_color=FFFFFF00&text_color=6d6b6b&title_color=6d6b6b"
          alt="vishalll069"
        />
        <img
        id="github-streak-stats"
          align="center"
          src="https://github-readme-streak-stats.herokuapp.com/?user=vishalll069&theme=dark&hide_border=true&background=FFFFFF00&sideNums=6d6b6b&sideLabels=6d6b6b&ring=e66262&fire=e66262&currStreakLabel=e66262&currStreakNum=6d6b6b"
          alt="vishalll069"
        />
      </div>
    </section>
  );
};
