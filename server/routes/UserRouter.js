import { Router } from 'express';
import SignInUser from '../controllers/users/SignIn';
import SignUp from '../controllers/users/SignUp';

const UserRouter = Router();

UserRouter.post("/api/v1/auth/signin", SignInUser);
UserRouter.post("/api/v1/auth/signup", SignUp);

export default UserRouter;
