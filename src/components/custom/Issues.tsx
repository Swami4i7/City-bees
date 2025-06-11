import { Textarea } from "../ui/textarea";

const Issues = () => {
  return (
    <div className="text-black ml-4 mt-4 mr-4 ">
      <div>Write your over all issues</div>
      <Textarea
        defaultValue={
          "There are water leakage in both A/C and I will add attachments"
        }
        className="px-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-600"
      />
    </div>
  );
}

export default Issues