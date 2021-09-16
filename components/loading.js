import {ClipLoader, PuffLoader} from "react-spinners";

export default function Loading({ loading }) {
  return (
    <div id="loading" className={"text-center " + (loading? "" : "d-none")}>
      <ClipLoader color={"#021f3c"} loading={loading} size={60} />
    </div>
  );
}
