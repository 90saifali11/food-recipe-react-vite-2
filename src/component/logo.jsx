import React from 'react';

const companies = [
  { name: 'Nestlé', logo: 'https://firebasestorage.googleapis.com/v0/b/first-project-e823d.appspot.com/o/recipes%2Fnestle-logo.png?alt=media&token=b81d6e27-5ca7-4b6e-b01d-05032a8628db' },
  { name: 'Apple', logo: 'https://firebasestorage.googleapis.com/v0/b/first-project-e823d.appspot.com/o/recipes%2Fapple-logo-transparent.png?alt=media&token=dc3d2d99-54c6-48a3-b64d-0bacd9e17113' },
  { name: 'BECO', logo: 'https://firebasestorage.googleapis.com/v0/b/first-project-e823d.appspot.com/o/recipes%2Fhund-von-eden-logo-becopets.jpg?alt=media&token=c8ade21b-cdfe-4d84-ac7a-2fb5ba6dd6f2' },
  { name: 'Amazon', logo: 'https://firebasestorage.googleapis.com/v0/b/first-project-e823d.appspot.com/o/recipes%2Famazon-logo-black-transparent.png?alt=media&token=45b48db3-4e50-45c3-b4ed-c6132a179ffd' },
  { name: 'Google', logo: 'https://firebasestorage.googleapis.com/v0/b/first-project-e823d.appspot.com/o/recipes%2Fgoogle-logo-black-transparent.png?alt=media&token=dc728065-4df5-40ce-aea9-0976d32c149f' },
  { name: 'Walmart', logo: 'https://firebasestorage.googleapis.com/v0/b/first-project-e823d.appspot.com/o/recipes%2Fimages.jpg?alt=media&token=b9822912-cf48-455a-9883-7ae15398acc1' },
];

const CompanyLogos = () => {
  const containerStyle = {
    maxWidth: '1200px',
    margin: '40px auto',
    padding: '20px',
  };

  const logoContainerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
  };

  const logoStyle = {
    maxWidth: '100px',
    height: 'auto',
    margin: '10px',
    filter: 'grayscale(100%)',
  };

  return (
    <div style={containerStyle}>
      <div style={logoContainerStyle}>
        {companies.map((company, index) => (
          <img
            key={index}
            src={company.logo}
            alt={`${company.name} logo`}
            style={logoStyle}
          />
        ))}
      </div>
    </div>
  );
};

export default CompanyLogos;