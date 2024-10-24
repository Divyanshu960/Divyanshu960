import Image from "next/image"
import { Mail } from "lucide-react"
import {Button} from "@nextui-org/button";
import { FaGithub, FaLinkedin } from "react-icons/fa"
import logo from './assets/logo.svg'

export default function Portfolio() {
  return (
    <div className="grid grid-rows-[auto_1fr_auto] min-h-screen p-8 gap-16 font-sans">
      <header className="flex justify-between items-center">
        <div className="gap-4 flex items-center">
        
        <Image
          src={logo}
          alt="Divyanshu Chaurasiya"
          width={25} 
          height={25}
          className="rounded mb-4" 
        />
       <h1 className="flex flex-row text-2xl font-bold">Divyanshu Chaurasiya</h1>
        </div>
        
        <nav>
          <ul className="flex gap-4">
            <li><a href="#about" className="hover:underline">About</a></li>
            <li><a href="#projects" className="hover:underline">Projects</a></li>
            <li><a href="#contact" className="hover:underline">Contact</a></li>
          </ul>
        </nav>
      </header>

      <main className="flex flex-col gap-16">
      <section id="about" className="text-center">
        
        <h2 className="text-3xl font-bold mb-4">Full Stack Developer</h2>
        <p className="max-w-2xl mx-auto">
          I enjoy solving complex problems with simple and effective solutions. <br/>
          I specialize in React, Node.js, and cloud technologies to build scalable web applications.<br/>
          STILL IN PROGRESS
        </p>

      </section>

      <section id="projects">
        <h2 className="text-2xl font-bold mb-6 text-center">Featured Projects</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              id: 1,
              title: 'Project 1',
              description: 'A brief description of Project 1.',
              image: '/images/project1.png', // Change to your image path
            },
            {
              id: 2,
              title: 'Project 2',
              description: 'A brief description of Project 2.',
              image: '/images/project2.png', // Change to your image path
            },
            {
              id: 3,
              title: 'Project 3',
              description: 'A brief description of Project 3.',
              image: '/images/project3.png', // Change to your image path
            },
          ].map((project) => (
            <div key={project.id} className="border rounded-lg overflow-hidden shadow-md">
              <Image
                src={project.image}
                alt={project.title}
                width={400}
                height={200}
                className="w-full"
              />
              <div className="p-4">
                <h3 className="font-bold mb-2">{project.title}</h3>
                <p className="text-sm mb-4">{project.description}</p>
                <Button variant="shadow" size="sm">View Project</Button>
              </div>
            </div>
          ))}
        </div>
      </section>

        <section id="contact" className="text-center">
          <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
          <div className="flex justify-center gap-4">
            <Button variant="shadow" size="sm">
              <FaGithub className="h-4 w-4" />
              <span className="sr-only">GitHub</span>
            </Button>
            <Button variant="shadow" size="sm">
              <FaLinkedin className="h-4 w-4" />
              <span className="sr-only">LinkedIn</span>
            </Button>
            <Button variant="shadow" size="sm">
              <Mail className="h-4 w-4" />
              <span className="sr-only">Email</span>
            </Button>
          </div>
        </section>
      </main>

      <footer className="text-center text-sm">
        <p>&copy; 2024 John Doe. All rights reserved.</p>
      </footer>
    </div>
  )
}
