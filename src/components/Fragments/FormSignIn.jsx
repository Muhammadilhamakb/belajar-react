import Button from "../Elements/Button";
import CheckBox from "../Elements/CheckBox";
import LabeledInput from "../Elements/LabeledInput";
import { Link } from 'react-router-dom'


const FormSignIn = () => {
  return (
    <form action="">
      <div className="mb-6">
        <LabeledInput
          label="Email address"
          type="email"
          placeholder="hello@example.com"
          name="email"
        />
      </div>
      <div className="mb-6">
      <LabeledInput
        label="Password"
        type="password"
        placeholder="*************"
        name="password"
      />
  
      <div className="mt-2">
        <Link to="/forgot-password" className="text-primary text-sm font-medium">
          Forgot Password?
        </Link>
      </div>
    </div>
      
      <div className="mb-3">
        <CheckBox label="Keep me signed in" name="status" />
      </div>
      <Button variant="bg-primary w-full text-white" type="submit" >
	      Login
      </Button>
    </form>
  );
};

export default FormSignIn;