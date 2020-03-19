import React from 'react';
import { IProject } from '../../contracts/IProject';
import Project from './Project/Project';

const MyProjects: React.FC = () => {
  const projects: IProject[] = [
    {
      projectTitle: <React.Fragment><a href="https://angularstarters.com/" target="_blank" rel="noopener noreferrer">Angular Starters</a> -&nbsp;
      <a href="https://github.com/jneterer/angular-starters" target="_blank" rel="noopener noreferrer">GitHub Repo</a></React.Fragment>,
      paragraphs: [
        `Angular Starters, which is still in development, is a site for the community to contribute their Open Source Angular starter 
        and themed projects. There will also be a sites section where users can link out to their starter or themed demo site!`,
        `Two of my passions are Angular and Open Source! My first front end framework I learned was Angular. From very early on, I have 
        often wondered why so many other frameworks like React and Gatsby have these amazing sites where the community can showcase their 
        own Open Source projects for the world to use but Angular doesn't. Well, I think its about time Angular had one! That is why I started 
        Angular Starters!`
      ]
    },
    {
      projectTitle: <React.Fragment><a href="https://userbase-gatsby-starter.jacobneterer.com/" target="_blank" rel="noopener noreferrer">Userbase Gatsby Starter</a> -&nbsp;
      <a href="https://github.com/jneterer/userbase-gatsby-starter" target="_blank" rel="noopener noreferrer">GitHub Repo</a> -&nbsp;
      <a href="https://www.gatsbyjs.org/starters/jneterer/userbase-gatsby-starter/" target="_blank" rel="noopener noreferrer">Gatsby</a></React.Fragment>,
      paragraphs: [
        `Userbase Gatsby Starter is a project I worked on to gain experience with both Gatsby and Userbase! I have been following Userbase's
        progress over the last few months and was super excited on release day to get started. This starter project uses Userbase for user management,
        Gatsby for the front end, Typescript, and TailwindCSS and SCSS for styling.`
      ]
    },
    {
      projectTitle: <React.Fragment><a href="https://onlineexpress.jlg.com/" target="_blank" rel="noopener noreferrer">Online Express (OLE)</a> -&nbsp;
        <a href="https://www.jlg.com" target="_blank" rel="noopener noreferrer">JLG's</a> eCommerce platform</React.Fragment>,
      paragraphs: [
        `Online Express is JLG's new and improved eCommerce platform. OLE's front-end is built in Angular using Angular Material
        design. I specifically contributed to the front end development, building out components for user accounts, shopping cart, 
        checkout, and many other pages. This project gave me experience in many different areas including Angular, Okta, Oracle ATG 
        Commerce, SVN, and more.`,
        `I have had the privilege of working for JLG since June of 2018. I started out as an intern for the months of
        June and July but was able to continue through the rest of the year as a temporary employee, eventually being
        hired full-time once I graduated college in January of 2019. I had the once in a lifetime opportunity to
        begin contributing to OLE the moment I began my internship. I was thrown into the fire, one of my first tasks being
        setting up authentication for the application. Since then, I have been a main contributor for the rest of the site
        and continue to help maintain it today.`
      ]
    },
    {
      projectTitle: <React.Fragment><a href="http://github.com/jneterer" target="_blank" rel="noopener noreferrer">My Data Labeler</a> - an 
        open-source text classification tool</React.Fragment>,
      paragraphs: [
        `My Data Labeler is an open-source text classification tool. I believe there aren't enough open source
        text classification tools out there, so I built my own! It is still a work in progress and will hopefully
        be completed sometime early this year (2020). It is built on Angular as the front-end,
        MongoDB as the database, and MongoDB Stitch for user management and a server-less back-end. Also, I manage the
        code using git and is stored on GitHub. I am hoping to have a website for this project in the near future.`,
        `This project stems from one of my passions: language. Ever since I can remember, I have been fascinated
        with the world's languages. In high school I took all 5 available Spanish courses, earned my Minor in Spanish
        at college, and studied in Burgos, Spain for 2 months in the summer of my sophomore year. Language translators 
        like Google Translate (although relatively inaccurate) intruiged me. That drove me to learn more about natural
        language processing and deep learning. In my senior year of college I studied this and submitted a paper to  
        the West Virginia Academy of Science and got to present my studies at their annual conference.`
      ]
    }
  ]
  return (
    <div className="container section my-projects-container">
      <h2 className="section-header">My Projects <span role="img" aria-label="Thinking Emoji">⌨️🖱🖥</span></h2>
      {
        projects.map((project: IProject, index: number) => 
          <Project key={`project-${index}`} project={project} />)
      }
      <p className="section-message">
        <strong>More will be coming...</strong> I want to build more web applications to showcase my 
        abilities. Scroll below to find me on Twitter, Github, or my Email!
      </p>
    </div>
  );
}

export default MyProjects;
