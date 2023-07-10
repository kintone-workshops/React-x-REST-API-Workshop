import { TailSpin } from  'react-loader-spinner'

const LoadingSpinner = () => {
  return(
    <TailSpin
    height="160"
    width="160"
    color="#4fa94d"
    ariaLabel="tail-spin-loading"
    radius="2"
    wrapperStyle={{}}
    wrapperClass=""
    visible={true}
  />
  );
}
export default LoadingSpinner;
