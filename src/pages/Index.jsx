import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ChevronRight, Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

// Mock API function (replace with actual API call)
const fetchHomeContent = async () => {
  // Simulating API call
  return {
    heroTitle: "Empowering Africa Through Innovation",
    missionStatement: "To foster sustainable development in Africa through innovative solutions and community empowerment.",
    featuredProjects: [
      { id: 1, title: "The Sustainability Project Incubator LAB", description: "Advancing science, innovation, and strategic leadership for a sustainable society in Cameroon." },
      { id: 2, title: "Enhancing Staple Crop Production", description: "Implementing low-tech practices to improve staple crop production in Cameroon." },
      { id: 3, title: "Agriculture and Agribusiness Wealth Creation Initiative", description: "Identifying opportunities for wealth creation through agriculture and agribusiness in Cameroon." },
    ],
  };
};

const Index = () => {
  const { data: homeContent, isLoading, error } = useQuery({
    queryKey: ['homeContent'],
    queryFn: fetchHomeContent,
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading content</div>;

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] bg-gray-900 text-white flex items-center justify-center">
        <img src="/placeholder.svg" alt="HUFIDA Mission" className="absolute inset-0 w-full h-full object-cover opacity-50" />
        <div className="relative z-10 text-center">
          <h1 className="text-4xl font-bold mb-4">{homeContent.heroTitle}</h1>
          <Link to="/get-involved">
            <Button size="lg">Get Involved</Button>
          </Link>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="bg-primary text-primary-foreground py-12 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold mb-4">Our Mission</h2>
          <p className="text-xl">
            {homeContent.missionStatement}
          </p>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-12 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link to="/get-involved">
              <Button variant="outline" className="text-lg py-6 w-full">
                Donate
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link to="/get-involved">
              <Button variant="outline" className="text-lg py-6 w-full">
                Volunteer
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link to="/news">
              <Button variant="outline" className="text-lg py-6 w-full">
                Latest News
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Current Projects */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold mb-8 text-center">Current Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {homeContent.featuredProjects.map((project) => (
              <Card key={project.id}>
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{project.description}</p>
                  <Link to="/projects">
                    <Button className="mt-4">Learn More</Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold mb-8 text-center">Testimonials</h2>
          <Carousel className="w-full max-w-xs mx-auto">
            <CarouselContent>
              {[1, 2, 3].map((testimonial) => (
                <CarouselItem key={testimonial}>
                  <Card>
                    <CardContent className="p-6 text-center">
                      <p className="mb-4 italic">
                        "HUFIDA's work has transformed our community. We are grateful for their support and innovation."
                      </p>
                      <p className="font-semibold">- Community Member {testimonial}</p>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <Mail className="mr-2 h-4 w-4" />
                  info@hufida.org
                </li>
                <li className="flex items-center">
                  <Phone className="mr-2 h-4 w-4" />
                  +1234567890
                </li>
                <li className="flex items-center">
                  <MapPin className="mr-2 h-4 w-4" />
                  123 HUFIDA St., Africa
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><Link to="/about" className="hover:underline">About Us</Link></li>
                <li><Link to="/projects" className="hover:underline">Projects</Link></li>
                <li><Link to="/get-involved" className="hover:underline">Get Involved</Link></li>
                <li><Link to="/news" className="hover:underline">News</Link></li>
                <li><Link to="/contact" className="hover:underline">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                {/* Add social media icons here */}
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Newsletter</h3>
              <form className="flex">
                <Input type="email" placeholder="Your email" className="rounded-r-none" />
                <Button type="submit" className="rounded-l-none">Subscribe</Button>
              </form>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;