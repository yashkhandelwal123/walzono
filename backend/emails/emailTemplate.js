const emailTemplate = (name, message) => `
  <div style="font-family: Arial, sans-serif; padding: 20px; max-width: 600px; margin: auto; border: 1px solid #ddd;">
    <h2 style="color: #4CAF50;">Welcome, ${name}!</h2>
    <p>${message}</p>
    <hr>
    <p style="color: #888;">This is an automated message. Please do not reply.</p>
  </div>
`;

module.exports = emailTemplate;
