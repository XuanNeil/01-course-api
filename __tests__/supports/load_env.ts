import dotenv from 'dotenv';


// **** Load test env file **** //

const result = dotenv.config({
  path: `./env/test.env`,
});

if (result.error) {
  throw result.error;
}
