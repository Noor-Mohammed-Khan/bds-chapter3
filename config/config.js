const config = {
    env: process.env.NODE_ENV || 'development',
    port: process.env.PORT || 3000,
    jwtSecret: process.env.JWT_SECRET || "YOUR_secret_key",
    mongoUri: 
    'mongodb+srv://admin1234:admin1234@cluster0.bgqpdpf.mongodb.net/test'
    
   }
   export default config