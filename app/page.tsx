import Head from "next/head";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Billy - Buddy Against Cyberbullying</title>
      </Head>
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-blue-800 to-blue-700 text-white py-20">
          <div className="container mx-auto px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Stand Up Against Cyberbullying
              </h2>
              <p className="text-xl mb-8 text-blue-100">
                Join us to create a safer online space and empower victims of
                cyberbullying.
              </p>
              <div>
                <Link href="/chat" passHref>
                  <Button
                    size="lg"
                    variant="secondary"
                    className="hover:bg-white hover:text-blue-800"
                  >
                    Let's Chat
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-20 bg-white" id="features">
          <div className="container mx-auto px-8">
            <h2 className="text-3xl font-bold text-center mb-12">
              Our Features
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow"
                >
                  <h3 className="text-xl font-semibold mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Community Section */}
        <section className="py-20 bg-gray-50" id="community">
          <div className="container mx-auto px-8 text-center">
            <h2 className="text-3xl font-bold mb-6">Join Our Community</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Connect with others who share your commitment to creating a safer
              digital world.
            </p>
            <Link href="/form" passHref>
              <Button className="bg-blue-800 text-white hover:bg-blue-700">
                Join Now
              </Button>
            {/* <Button className="bg-blue-800 text-white hover:bg-blue-700">
              Join Now
            </Button> */}
            </Link>
          </div>
        </section>

        {/* Contact Section */}
        {/* <section className="bg-gradient-to-b from-white to-blue-50 py-16">
          <div className="max-w-md mx-auto px-6">
            <div className="text-center space-y-4">
              <h2 className="text-2xl font-semibold text-gray-900">Get in Touch</h2>
              <Button 
                className="bg-blue-600 hover:bg-blue-700 transition-colors duration-200"
              >
                Contact Us
              </Button>
            </div>
          </div>
        </section> */}
      </main>
      <footer className="mt-20 py-6 border-t">
        <p className="text-center text-sm text-muted-foreground">
          © 2024 Billy - Buddy Against Cyberbullying. All rights reserved.
        </p>
      </footer>
    </>
  );
}

const features = [
  {
    title: "24/7 Support",
    description:
      "Access help whenever you need it through our AI-powered chatbot.",
  },
  {
    title: "Community Forums",
    description:
      "Connect with others and share experiences in a safe environment.",
  },
  {
    title: "Resource Library",
    description: "Access comprehensive guides and educational materials.",
  },
  {
    title: "Anonymous Reporting",
    description: "Report incidents safely and securely.",
  },
  {
    title: "Expert Advice",
    description:
      "Get guidance from cybersecurity and mental health professionals.",
  },
  {
    title: "Real-time Monitoring",
    description: "Stay informed with our cyberbullying detection system.",
  },
];
