import { useState, useEffect } from "react";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Copy, Link, Mail } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    companyName: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    setSubmitMessage(
      `Hello ${
        formData.firstName[0].toUpperCase() + formData.firstName.slice(1)
      }, thank you for your message. We'll get back to you soon!`
    );
    setFormData({
      firstName: "",
      lastName: "",
      companyName: "",
      email: "",
      message: "",
    });
  };

  const officeLocation = "https://maps.google.com/maps?q=19.1311,72.8322&hl=es;z=14&output=embed"; // Static Google Map URL

  return (
    <div className="bg-background min-h-screen py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-foreground mb-12">
          Contact Us
        </h1>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Side - Form */}
          <Card className="w-full lg:w-1/2">
            <CardHeader>
              <CardTitle className="text-2xl font-bold">Send Us a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="text-sm font-medium text-foreground">
                      First Name
                    </label>
                    <Input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      placeholder="Enter First Name"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="text-sm font-medium text-foreground">
                      Last Name
                    </label>
                    <Input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      placeholder="Enter Last Name"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="companyName" className="text-sm font-medium text-foreground">
                    Company Name
                  </label>
                  <Input
                    type="text"
                    id="companyName"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleInputChange}
                    placeholder="Enter Your Company Name"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="text-sm font-medium text-foreground">
                    Email Address
                  </label>
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Enter Your Email Address"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="text-sm font-medium text-foreground">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    placeholder="Enter Your Message"
                    required
                  />
                </div>
                <div className="flex justify-end gap-4">
                  <Button
                    type="reset"
                    variant="outline"
                    onClick={() =>
                      setFormData({
                        firstName: "",
                        lastName: "",
                        companyName: "",
                        email: "",
                        message: "",
                      })
                    }
                  >
                    Reset
                  </Button>
                  <Button type="submit" disabled={isSubmitting}>
                    {isSubmitting ? "Submitting..." : "Submit"}
                  </Button>
                </div>
              </form>
              {submitMessage && (
                <p className="mt-4 text-green-600 dark:text-green-400 font-medium">
                  {submitMessage}
                </p>
              )}
            </CardContent>
          </Card>

          {/* Right Side - Contact Info and Map */}
          <Card className="w-full lg:w-1/2">
            <CardHeader>
              <CardTitle className="text-2xl font-bold">Our Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 flex items-center justify-center bg-muted rounded-lg">
                  <MapPin className="w-5 h-5 text-foreground" />
                </div>
                <div>
                  <p className="text-foreground">
                    HarbourXChange Private Limited
                    <br />
                    Ground Floor, Wajeda House, Gulmohar Cross Road No. 7,
                    <br />
                    Juhu Scheme, Mumbai, Maharashtra - 400049
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 flex items-center justify-center bg-muted rounded-lg">
                  <Copy className="w-5 h-5 text-foreground" />
                </div>
                <p className="text-foreground">CIN - u9993783728EIHF987</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 flex items-center justify-center bg-muted rounded-lg">
                  <Link className="w-5 h-5 text-foreground" />
                </div>
                <a
                  href="https://www.harbourxchange.in"
                  className="text-foreground hover:underline"
                >
                  https://www.harbourxchange.in
                </a>
              </div>
            </CardContent>

            <CardFooter className="flex-col items-start gap-6">
              <h2 className="text-2xl font-bold text-foreground">Our Location</h2>
              <div className="h-[300px] w-full rounded-lg overflow-hidden border">
                <iframe
                  src={officeLocation}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                ></iframe>
              </div>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Contact;