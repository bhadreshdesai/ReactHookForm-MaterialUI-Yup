import { Button, Grid } from "@mui/material";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import TextField from "../components/TextField";
import signupSchema, { ISignUp } from "./signup.schema";

const sleep = (timeout: number) =>
  new Promise((resolve) => {
    setTimeout(resolve, timeout);
  });

const defaultSignUpValues: ISignUp = {
  firstName: "",
  lastName: "",
  email: "",
  username: "",
  password: "",
  confirmPassword: ""
};

let renderCounter = 0;

const SignUp = () => {
  const methods = useForm<ISignUp>({
    mode: "onBlur",
    defaultValues: defaultSignUpValues,
    resolver: yupResolver(signupSchema)
  });
  const { formState, handleSubmit } = methods;
  const onSubmit: SubmitHandler<ISignUp> = async (data) => {
    console.log("Start submission");
    await sleep(3000);
    console.log(JSON.stringify(data, null, 2));
    console.log("Finish submission");
  };
  renderCounter++;
  return (
    <FormProvider {...methods}>
      <div>Signup form</div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <TextField
              name="firstName"
              label="First Name Override"
              helperText="Enter your First Name"
              fullWidth={false}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField name="lastName" />
          </Grid>
          <Grid item xs={6}>
            <TextField name="email" />
          </Grid>
          <Grid item xs={6}>
            <TextField name="username" />
          </Grid>
          <Grid item xs={6}>
            <TextField name="password" />
          </Grid>
          <Grid item xs={6}>
            <TextField name="confirmPassword" />
          </Grid>
          <Grid item xs={6}>
            <Button
              sx={{ margin: 1 }}
              variant="contained"
              color="primary"
              type="submit"
              disabled={formState.isSubmitting}
            >
              Submit
            </Button>
          </Grid>
        </Grid>
        <div id="renderCount">Render Count: {renderCounter}</div>
      </form>
    </FormProvider>
  );
};
export default SignUp;
