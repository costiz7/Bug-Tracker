import jwt from 'jsonwebtoken';

//With this controller, we attach to our 'req' object, a 'user' key, with a token value, so we know who does the requests (this is authorization :D)
export const protect = (req, res, next) => {
    let token;
    //Verify if our request has an authorization header that starts with 'Bearer' (this is a convention)
    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        try {
            token = req.headers.authorization.split(' ')[1]; //We take the token

            const decoded = jwt.verify(token, process.env.JWT_SECRET); //We decode the token to see who sent the request

            req.user = decoded; //Attach the user key to our 'req' object

            //We send the modified 'req' to our next middleware function
            next();
        } catch(error) {
            console.error(error);
            res.status(401).json({ message: 'Not authorized, token failed' });
        }
    }

    if(!token) {
        res.status(401).json({ message: 'Not authorized, no token' });
    }
};