import React from "react";
import "./Option.css";

const categories = [
  {
    title: "Wedding Requisites",
    services: [
      { name: "Banquet Halls", img: "https://www.tagvenue.com/resize/4b/d7/widen-1680-noupsize;38132-sapphire-room-room.jpg" },
      { name: "Bridal Requisite", img: "https://m.media-amazon.com/images/I/91ebLcfKmCL.AC_SX535.jpg" },
      { name: "Caterers", img: "https://files.oaiusercontent.com/file-1kAD9yg6TWxgHJ8z2iRmsU?se=2025-02-07T06%3A35%3A54Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3Df2267b46-3bd9-4b2c-a4e8-b8ec4a36f83e.webp&sig=NrNLQ948ISiR/9ISjq2FXiHc8PYszj3X/EXFTaE07vM%3D" },
    ],
  },
  {
    title: "Beauty & Spa",
    services: [
      { name: "Beauty Parlours", img: "https://files.oaiusercontent.com/file-FQnvPSF1r39LbysqieYdTM?se=2025-02-07T09%3A08%3A55Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3D3f5bca68-9363-458c-a535-ed1a55644a49.webp&sig=A0KfT6OMxqLW8J/P3lDNzQgAEKx3wLIVjtZwZwOgAds%3D" },
      { name: "Spa & Massages", img:  "https://files.oaiusercontent.com/file-9JGfnYbFYSHGH3Qw4nMUS1?se=2025-02-07T09%3A36%3A55Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3D17cb9aaa-c47d-468a-ba22-85f7bf381bc9.webp&sig=1TuWvHP3Sa1UDsoBUAUDdJo%2BCkui9oh5DS0OYWeSgcE%3D" },
      { name: "Salons", img: "https://files.oaiusercontent.com/file-AKSSe3KHJ2VqXoZM97o3AK?se=2025-02-07T09%3A39%3A11Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3D6cd14ed1-4ad9-4715-ab53-6032c315fe84.webp&sig=VB%2BP0iI5rp4sfwN2VUh8asberromrUJRl//roakc13Q%3D" },
    ],
  },
  {
    title: "Repairs & Services",
    services: [
      { name: "AC Service", img:  "https://imgs.search.brave.com/iJgIkdG0-jwjKndaW15WHmbIHV7oXt-TNkUDphsiolw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9saXJw/LmNkbi13ZWJzaXRl/LmNvbS9tZC9kbXRt/cGwvMTFlZjVjMDMt/ZjAyMy00YWRkLThl/ZjgtMDllZThiNjI4/ODFhL2RtczNyZXAv/bXVsdGkvb3B0L2Vs/ZWN0cmljaWFuX2Zp/eGluZ19oZWF0aW5n/LTE5MjB3LmpwZw" },
      { name: "Car Service", img: "https://files.oaiusercontent.com/file-R1rxknL8PaTfQQk7wAV6iB?se=2025-02-07T09%3A56%3A09Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3D91e303af-e905-4df4-9d25-f93fa00ffa14.webp&sig=OO%2BGOP6tkSpEOstfEHOqw%2Brvyhvl2isMSww0tMTYJY4%3D" },
      { name: "Bike Service", img:  "https://imgs.search.brave.com/IN7CojTxOFxZ-_Xq1c2QWtSEwiOV-NF0IEjdk4djqX0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvOTI1/Mzg1OTMwL3Bob3Rv/L2V4cGVyaWVuY2Ut/d29tYW4tYmlrZS1i/dWlsZGVyLmpwZz9z/PTYxMng2MTImdz0w/Jms9MjAmYz1DdFQ0/VzZ3a3lQTERLLWJ1/MlNQWW50a0FhQmhZ/R3laNTZOZHRDMEQ0/dW9vPQ" },
    ],
  },
  {
    title: "Daily Needs",
    services: [
      { name: "Movies", img: "https://files.oaiusercontent.com/file-WE4z1st8yohPXuJtecuZZu?se=2025-02-07T10%3A06%3A19Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3Dbdea154c-9310-4350-a296-1d40756deb4d.webp&sig=LChamtDf4mn%2BV6qzE8tZAAGTBW4uDlz/faME9WPseRo%3D" },
      { name: "Grocery", img: "https://imgs.search.brave.com/Z7PLruNS3GiRTwBzEpw8uNiVzv3FCn8m3gfssVBqPBo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTQ0/OTAzMjQyNS9waG90/by9zaG9wcGluZy1i/YWctZnVsbC1vZi1o/ZWFsdGh5LWZvb2Qt/b24tYmx1ZS5qcGc_/cz02MTJ4NjEyJnc9/MCZrPTIwJmM9ODU2/WHBxUmdxOEJqOU1y/MjhWekFkVy1pVHlI/RWpfZFcwMW02U1BQ/SHNPVT0" },
      { name: "Electricians", img: "https://imgs.search.brave.com/1f_QRmEJiVbJvjmWhghA76Rrw3SEn7jCJG08T3Dq-t8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9yZWZl/cmVuY2UtbWVkaWEu/YW5naS5jb20vdmlz/aXRvci9lbGVjdHJp/Y2FsXzU0LmpwZw" },
    ],
  },
];

const ServicePage = () => {
  return (
    <div className="service-container">
      {categories.map((category, index) => (
        <div key={index} className="category-box">
          <h2 className="category-title">{category.title}</h2>
          <div className="services-grid">
            {category.services.map((service, idx) => (
              <div key={idx} className="service-item">
                <img src={service.img} alt={service.name} />
                <p className="service-name">{service.name}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ServicePage;
