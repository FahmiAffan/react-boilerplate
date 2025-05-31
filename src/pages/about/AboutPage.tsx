import React from "react";

interface AboutPageProps {
  title: string;
  description: string;
}
export default function AboutPage({ title, description }: AboutPageProps) {
  return (
    <div className="about-page">
      <h1>{title}</h1>
      <p>{description}</p>
      <p>This is the about page where you can learn more about us.</p>
      <p>We are dedicated to providing the best service possible.</p>
    </div>
  );
}
