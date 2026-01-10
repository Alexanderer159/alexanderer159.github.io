import { useState } from "react";
import { Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

const Reviews = () => {
const [contentOpen, setContentOpen] = useState(false)

const setcontentOpen = () => {
  setContentOpen(prev => !prev);
};

  const review = [
    {
      name: "Hans Aparicio Moreno",
      role: "Senior Software Developer",
      project: "BoxNCase",
      date: "July 17, 2025",
      content: "Alejandro se desempeno como Front-End Developer durante su estancia de trabajo en mi equipo dentro BoxNCase, demostró una excelente disposición, siempre atento a ayudar y aprender. Mostro gran desempeno en su habilidad de trabajo en equipo y su actitud colaborativa, contribuyendo de manera activa tanto en la resolución de problemas como en la creación de un ambiente de trabajo positivo. Además, Alejandro se caracteriza por su atención al detalle, cuidando que cada entrega cumpliera con altos estándares de calidad y usabilidad. Su capacidad de adaptación y compromiso con el proyecto fueron claves para alcanzar los objetivos establecidos. Sin duda, es un profesional valioso que aportaría muchísimo a cualquier equipo en el que participe.",
      image: "https://media.licdn.com/dms/image/v2/C4D03AQH2gD6czCFE3A/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1516513122485?e=1769644800&v=beta&t=ZN7H222kgvH-jh_wFdXshGx8qg1aQlQnYW3mktoCzv8",
      location: "Linked-In",
    },
    {
      name: "Radharani Dorta",
      role: "Data Scientist",
      project: "LATAM Connect",
      date: "January 10, 2026",
      content: "Tuve la oportunidad de trabajar con Alejandro durante un periodo de prácticas en el mismo equipo. Desde el primer día destacó por ser puntual, responsable y muy comprometido, siempre dispuesto a colaborar y a aportar al equipo. Como fullstack, supo enfrentar los desafíos técnicos con eficacia y su compañerismo y actitud proactiva hicieron que trabajar con él fuera una experiencia muy positiva. Recomiendo a Alejandro sin dudar; cualquier equipo ganaría mucho con su profesionalismo y actitud.",
      image: "https://media.licdn.com/dms/image/v2/C4D03AQHF9s7YAAOhvw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1635788157954?e=1769644800&v=beta&t=c78PEqRrVe_Ct0QhyvDWhNNMib-nFmHa3ZsTm9frqL8",
      location: "Linked-In",
    },
    ];

  return (
    <div className="min-h-screen bg-background animate-fade-in">
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="mb-16 text-center space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight animate-slide-down">What does other people think about me?</h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-slide-up stagger-1">
            We constantly tell ourselves it doesnt matter but maybe other people do care...
          </p>
        </div>

        {/* review Grid */}
        <section className="grid sm:grid-cols-2 gap-8 mb-16">
          {review.map((review, index) => (
            <div key={review.name} className={`flex flex-col justify-between rounded-md bg-card p-8 transition-all duration-500 animate-slide-up stagger-${Math.min(index + 2, 6)}`}>

              <div className="flex flex-col sm:flex-row items-start gap-6 mb-6">
                <img src={review.image} className="w-24 h-24 rounded-full object-cover" />
                <div className="flex flex-col">
                  <h3 className="text-3xl font-bold mb-1">{review.name}</h3>
                  <p className="text-accent font-medium mb-3">{review.role} at {review.project}</p>
                  <p className="text-sm text-muted-foreground">Review placed on: {review.location} - {review.date}</p>
                </div>
              </div>

              <p onClick={() => setcontentOpen()} className={`text-muted-foreground mb-6 text-center sm:text-justify sm:ps-10 ${contentOpen ? "" : "sm:line-clamp-none line-clamp-5"}`}>"{review.content}"</p>
              <div className="flex items-center">
                <div className="mx-auto">
                  <Button className="bg-primary hover:scale-105 transition-all duration-700 text-primary-foreground rounded-md">
                    <a href="https://www.linkedin.com/in/alejandro-de-yavorsky/details/recommendations/" target="_blank" className="flex px-8 py-3">
                    <Linkedin className="mr-2 h-4 w-4" />Check review</a>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </section>

        {/* Join Section */}
        <section className="text-center py-12 rounded-2xl bg-muted">
          <h2 className="text-3xl font-bold mb-4">Want to leave one aswell?</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">  </p>
          <a href="mailto:traledeyavorsky@gmail.com" target="_blank" 
            className="inline-block px-8 py-3 rounded-md bg-primary text-primary-foreground font-medium transition-all duration-500 hover:scale-105">
            Lets work together.
          </a>
        </section>
      </main>
    </div>
  );
};

export default Reviews;