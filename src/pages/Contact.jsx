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
			`Hello ${formData.firstName[0].toUpperCase() + formData.firstName.slice(1)
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

	return (
		<div className="bg-background min-h-screen mt-20">
			<div className="container mx-auto">
				<h1 className="text-4xl font-bold text-center text-foreground py-8">
					Contact Us
				</h1>
				<div className="flex flex-col lg:flex-row gap-8">
					{/* Left Side - Form */}
					<Card className="w-full lg:w-1/2">
						<CardHeader>
							<CardTitle className="text-2xl font-bold">
								Send Us a Message
							</CardTitle>
						</CardHeader>
						<CardContent>
							<form onSubmit={handleSubmit} className="space-y-6">
								<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
									<div>
										<label
											htmlFor="firstName"
											className="text-sm font-medium text-foreground"
										>
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
										<label
											htmlFor="lastName"
											className="text-sm font-medium text-foreground"
										>
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
									<label
										htmlFor="companyName"
										className="text-sm font-medium text-foreground"
									>
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
									<label
										htmlFor="email"
										className="text-sm font-medium text-foreground"
									>
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
									<label
										htmlFor="message"
										className="text-sm font-medium text-foreground"
									>
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
							<CardTitle className="text-2xl font-bold">
								Our Information
							</CardTitle>
						</CardHeader>
						<CardContent className="space-y-6">
							<div className="flex items-start gap-4">
								<div className="w-10 h-10 flex items-center justify-center bg-muted rounded-lg">
									<MapPin className="w-5 h-5 text-foreground" />
								</div>
								<div>
									<p className="text-foreground">
										HarbourXchange
										<br />
										B 161 , 3rd Floor, Metropolitan Co-Operative Housing Society Limited, Tangra, Kolkata, West Bengal 700105
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
									href="https://hxc.netlify.app"
									className="text-foreground hover:underline"
								>
									https://hxc.netlify.app
								</a>
							</div>
						</CardContent>

						<CardFooter className="flex-col items-start gap-6">
							<h2 className="text-2xl font-bold text-foreground">
								Our Location
							</h2>
							<div className="h-[300px] w-full rounded-lg overflow-hidden border">
								<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3684.6914056155547!2d88.40419639999999!3d22.553229899999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a027567549e6401%3A0x906c803e81d8e44c!2sRiverine%20Infra%20Logistics!5e0!3m2!1sen!2sin!4v1742471663202!5m2!1sen!2sin"
									width="100%"
									height="100%"
									style={{ border: 0 }}
									allowfullscreen=""
									loading="lazy"
									referrerPolicy="no-referrer-when-downgrade"></iframe>
							</div>
						</CardFooter>
					</Card>
				</div>
			</div>
		</div>
	);
};

export default Contact;